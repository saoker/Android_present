package com.vnbig.android.vnbigas.Tools;

import android.app.ActivityManager;
import android.app.DownloadManager;
import android.content.Context;
import android.net.Uri;
import android.os.Environment;
import android.text.TextUtils;
import android.util.Log;

import java.io.BufferedInputStream;
import java.io.BufferedOutputStream;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.text.SimpleDateFormat;
import java.util.Enumeration;
import java.util.List;
import java.util.zip.ZipEntry;
import java.util.zip.ZipFile;

public class FileTools {
    private static final String TAG = FileTools.class.getSimpleName();

    private static String localfileName;//下载保存到本地的资源包名称
    private static String downloadUrl = "http://10.10.11.210/files/2018-08-09/www-2018-08-09_update_2.zip";//网络资源包地址
    private static String localFileParentDir;//下载保存到本地的 文件 目录 路径
    private static String targetDir; //本地解压目录

    public static boolean startzip(Context context) {
        String dateStr = "";
        try {
            SimpleDateFormat dateformat = new SimpleDateFormat("yyyy-MM-dd-HH-mm-ss");
            dateStr = dateformat.format(System.currentTimeMillis());
        } catch (Exception e) {
            e.printStackTrace();
        }
        localfileName = "VNBIG_UPDATE_DATE-" + dateStr;
        localFileParentDir = getFilePath(context);
        targetDir = getFilePath(context);

        Log.w(TAG, "\nlocalfileName = " + localfileName
                + "，\nlocalFileParentDir = " + localFileParentDir
                + "，\ntargetDir = " + targetDir
                + "，\ndownloadUrl = " + downloadUrl
        );
        if (TextUtils.isEmpty(downloadUrl)) {
            Log.e(TAG, "downloadUrl is null");
            return false;
        } else {
            if (TextUtils.isEmpty(localFileParentDir)) {
                Log.e(TAG, "localFileParentDir is null");
                return false;
            }
            String filePath = downLoadFromUrl(downloadUrl, localfileName, localFileParentDir);
            if (TextUtils.isEmpty(filePath)) {
                Log.e(TAG, "download error ，filePath  is null");
                return false;
            } else {
                Log.e(TAG, "download success，filePath = " + filePath);
                File downFile = new File(filePath);
                if (downFile.exists()) {
                    UnzipStream(filePath, targetDir);
//                    UpZipFile(filePath, targetDir);
                } else {
                    Log.e(TAG, "downloadfile exists  error");
                    return false;
                }
            }
        }
        return true;
    }

    //获取当前应用包sd卡目录地址
    public static String getFilePath(Context context) {
        String filePath = "";
        String filePath1 = "";
        String filePath2 = "";
        String filePath3 = "";
        String filePath4 = "";

        if (Environment.getExternalStorageState().equals(Environment.MEDIA_MOUNTED)
                || !Environment.isExternalStorageRemovable()) {
            //SD卡已装入
            filePath = Environment.getExternalStorageDirectory() + File.separator + "Android" + File.separator + "data" + File.separator
                    + getAppProcessName(context) + File.separator + "apps" + File.separator + "HelloH5" + File.separator + "www";

            filePath1 = Environment.getExternalStorageDirectory().getPath();
            filePath2 = Environment.getDownloadCacheDirectory().getPath();
            filePath3 = context.getExternalFilesDir("www").getPath();
            filePath4 = Environment.getExternalStoragePublicDirectory(Environment.DIRECTORY_DOWNLOADS).getAbsolutePath();

//            Log.w(TAG, "\nfilePath = " + filePath
//                    + "，\nfilePath1 = " + filePath1
//                    + "，\nfilePath2 = " + filePath2
//                    + "，\nfilePath3 = " + filePath3
//                    + "，\nfilePath4 = " + filePath4);

        } else {
            filePath = "";
            Log.e(TAG, "sdCard is null ");
        }

        return filePath;
    }


    /**
     * 获取当前应用程序的包名
     *
     * @param context 上下文对象
     * @return 返回包名
     */
    public static String getAppProcessName(Context context) {
        //当前应用pid
        int pid = android.os.Process.myPid();
        //任务管理类
        ActivityManager manager = (ActivityManager) context.getSystemService(Context.ACTIVITY_SERVICE);
        //遍历所有应用
        List<ActivityManager.RunningAppProcessInfo> infos = manager.getRunningAppProcesses();
        for (ActivityManager.RunningAppProcessInfo info : infos) {
            if (info.pid == pid)//得到当前应用
                return info.processName;//返回包名
        }
        return "";
    }


    //用ZipInputStream解压文件
    private static void UnzipStream(String zipFile, String targetDir) {
        int BUFFER = 4096; //这里缓冲区我们使用4KB，
        try {
            java.io.BufferedOutputStream dest = null; //缓冲输出流
            java.io.FileInputStream fis = new java.io.FileInputStream(zipFile);
            java.util.zip.ZipInputStream zis = new java.util.zip.ZipInputStream(new java.io.BufferedInputStream(fis));
            java.util.zip.ZipEntry entry; //每个zip条目的实例

            while ((entry = zis.getNextEntry()) != null) {
//                Log.w(TAG, "UnzipStream: " + " entry=" + entry);
                if (entry.isDirectory()) {
                    File entryDir = new File(targetDir + File.separator + entry.getName());
                    if (!entryDir.exists()) {
                        entryDir.mkdirs();
                        Log.i(TAG, "make dirs: " + "=" + entryDir);
                    }
                } else {
                    try {

                        int count;
                        byte data[] = new byte[BUFFER];
                        File entryFile = new File(targetDir + File.separator + entry.getName());
                        Log.i(TAG, "entryFile: " + "=" + entryFile);
                        File entryDir = new File(entryFile.getParent());
                        if (!entryDir.exists()) {
                            entryDir.mkdirs();
                        }

                        java.io.FileOutputStream fos = new java.io.FileOutputStream(entryFile);
                        dest = new java.io.BufferedOutputStream(fos, BUFFER);
                        while ((count = zis.read(data, 0, BUFFER)) != -1) {
                            dest.write(data, 0, count);
                        }
                        dest.flush();
                        dest.close();
                    } catch (Exception ex) {
                        ex.printStackTrace();
                    }
                }

            }
            zis.close();
        } catch (Exception cwj) {
            cwj.printStackTrace();
        }
    }


    /**
     * 含子目录的文件压缩
     *
     * @throws Exception
     */
    // 第一个参数就是需要解压的文件，第二个就是解压的目录
    public static boolean UpZipFile(String zipFile, String folderPath) {
        ZipFile zfile = null;
        try {
            // 转码为GBK格式，支持中文
            zfile = new ZipFile(zipFile);
        } catch (IOException e) {
            e.printStackTrace();
            return false;
        }
        Enumeration zList = zfile.entries();
        ZipEntry ze = null;
        byte[] buf = new byte[1024];
        while (zList.hasMoreElements()) {
            ze = (ZipEntry) zList.nextElement();
            // 列举的压缩文件里面的各个文件，判断是否为目录
            if (ze.isDirectory()) {
                String dirstr = folderPath + ze.getName();
                Log.i(TAG, "dirstr=" + dirstr);
                dirstr.trim();
                File f = new File(dirstr);
                f.mkdir();
                continue;
            }
            OutputStream os = null;
            FileOutputStream fos = null;
            // ze.getName()会返回 script/start.script这样的，是为了返回实体的File
            File realFile = getRealFileName(folderPath, ze.getName());
            try {
                fos = new FileOutputStream(realFile);
            } catch (FileNotFoundException e) {
                Log.e(TAG, e.getMessage());
                return false;
            }
            os = new BufferedOutputStream(fos);
            InputStream is = null;
            try {
                is = new BufferedInputStream(zfile.getInputStream(ze));
            } catch (IOException e) {
                Log.e(TAG, e.getMessage());
                return false;
            }
            int readLen = 0;
            // 进行一些内容复制操作
            try {
                while ((readLen = is.read(buf, 0, 1024)) != -1) {
                    os.write(buf, 0, readLen);
                }
            } catch (IOException e) {
                Log.e(TAG, e.getMessage());
                return false;
            }
            try {
                is.close();
                os.close();
            } catch (IOException e) {
                Log.e(TAG, e.getMessage());
                return false;
            }
        }
        try {
            zfile.close();
        } catch (IOException e) {
            Log.e(TAG, e.getMessage());
            return false;
        }
        return true;
    }

    /**
     * 给定根目录，返回一个相对路径所对应的实际文件名.
     *
     * @param baseDir     指定根目录
     * @param absFileName 相对路径名，来自于ZipEntry中的name
     * @return java.io.File 实际的文件
     */
    public static File getRealFileName(String baseDir, String absFileName) {
        Log.i(TAG, "baseDir=" + baseDir + "------absFileName="
                + absFileName);
        absFileName = absFileName.replace("\\", "/");
        Log.i(TAG, "absFileName=" + absFileName);
        String[] dirs = absFileName.split("/");
        Log.i(TAG, String.format("dirs=" + dirs));
        File ret = new File(baseDir);
        String substr = null;
        if (dirs.length > 1) {
            for (int i = 0; i < dirs.length - 1; i++) {
                substr = dirs[i];
                ret = new File(ret, substr);
            }

            if (!ret.exists())
                ret.mkdirs();
            substr = dirs[dirs.length - 1];
            ret = new File(ret, substr);
            return ret;
        } else {
            ret = new File(ret, absFileName);
        }
        return ret;
    }


    /**
     * 从网络Url中下载文件
     *
     * @param urlStr
     * @param fileName
     * @param savePath
     * @throws IOException
     */
    public static String downLoadFromUrl(String urlStr, String fileName, String savePath) {
        try {

            URL url = new URL(urlStr);
            HttpURLConnection conn = (HttpURLConnection) url.openConnection();
            // 设置超时间为3秒
            conn.setConnectTimeout(3 * 1000);
            // 防止屏蔽程序抓取而返回403错误
            conn.setRequestProperty("User-Agent", "Mozilla/4.0 (compatible; MSIE 5.0; Windows NT; DigExt)");

            // 得到输入流
            InputStream inputStream = conn.getInputStream();
            // 获取自己数组
            byte[] getData = readInputStream(inputStream);

            // 文件保存位置
            File saveDir = new File(savePath);
            if (!saveDir.exists()) {
                saveDir.mkdirs();
            }
            File file = new File(saveDir + File.separator + fileName);
            FileOutputStream fos = new FileOutputStream(file);
            fos.write(getData);
            if (fos != null) {
                fos.close();
            }
            if (inputStream != null) {
                inputStream.close();
            }
            // System.out.println("info:"+url+" download success");
            return saveDir + File.separator + fileName;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return "";

    }

    /**
     * 从输入流中获取字节数组
     *
     * @param inputStream
     * @return
     * @throws IOException
     */
    public static byte[] readInputStream(InputStream inputStream) throws IOException {
        byte[] buffer = new byte[1024];
        int len = 0;
        ByteArrayOutputStream bos = new ByteArrayOutputStream();
        while ((len = inputStream.read(buffer)) != -1) {
            bos.write(buffer, 0, len);
        }
        bos.close();
        return bos.toByteArray();
    }


    private static void downloadFile2(Context context) {
        //下载路径，如果路径无效了，可换成你的下载路径

        //创建下载任务,downloadUrl就是下载链接
        DownloadManager.Request request = new DownloadManager.Request(Uri.parse(downloadUrl));
        //指定下载路径和下载文件名
        request.setDestinationInExternalPublicDir(localfileName, downloadUrl.substring(downloadUrl.lastIndexOf("/") + 1));
        //获取下载管理器
        DownloadManager downloadManager = (DownloadManager) context.getSystemService(Context.DOWNLOAD_SERVICE);
        //将下载任务加入下载队列，否则不会进行下载
        downloadManager.enqueue(request);
    }
}
