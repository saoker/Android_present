package com.vnbig.android.vnbigas.Activitys;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.os.Handler;
import android.os.Message;

import com.HBuilder.integrate.SDK_WebApp;
import com.vnbig.android.vnbigas.Tools.FileTools;

public class MainActivity extends Activity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
//        setContentView(R.layout.activity_main);
//
//
//        findViewById(R.id.text).setOnClickListener(new View.OnClickListener() {
//            @Override
//            public void onClick(View view) {
//                startActivity(new Intent(MainActivity.this, SDK_WebApp.class));
//            }
//        });
        new Handler(new Handler.Callback() {
            @Override
            public boolean handleMessage(Message msg) {
                Intent intent = new Intent(MainActivity.this, SDK_WebApp.class);
                startActivity(intent);
                finsh();
                return false;
            }
        }).sendEmptyMessageDelayed(0, 1000);
//        new Thread(new Runnable() {
//            @Override
//            public void run() {
//                FileTools.startzip(MainActivity.this);
//            }
//        }).start();

    }

    private void finsh() {
        this.finish();
    }
}
