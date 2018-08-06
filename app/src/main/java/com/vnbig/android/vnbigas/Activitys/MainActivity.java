package com.vnbig.android.vnbigas.Activitys;

import android.app.Activity;
import android.content.Intent;
import android.os.Handler;
import android.os.Message;
import android.os.Bundle;

import com.HBuilder.integrate.SDK_WebApp;

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
                Intent intent = new Intent(MainActivity.this,SDK_WebApp.class);
                startActivity(intent);
                finsh();
                return false;

            }
        }).sendEmptyMessageDelayed(0,200);

    }

    private void finsh() {
        this.finish();
    }
}
