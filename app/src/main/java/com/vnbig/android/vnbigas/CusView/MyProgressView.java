package com.vnbig.android.vnbigas.CusView;

import android.content.Context;
import android.util.AttributeSet;
import android.view.LayoutInflater;
import android.view.View;
import android.view.animation.Animation;
import android.view.animation.AnimationUtils;
import android.widget.FrameLayout;
import android.widget.ImageView;
import android.widget.RelativeLayout;
import android.widget.TextView;

import com.vnbig.android.vnbigas.R;


public class MyProgressView extends FrameLayout {
    Context mContext;
    ImageView loadingIv,error,logoImg;
    private RelativeLayout refresh;
    private TextView tips;
    private Animation animation ;
    private long speed = 500;//旋转速度

    public MyProgressView(Context context) {
        super(context);
        mContext = context;
        init();
    }

    public MyProgressView(Context context, AttributeSet attrs) {
        super(context, attrs);
        mContext = context;
        init();
    }



    private void init() {
        LayoutInflater inflater=(LayoutInflater) mContext.getSystemService(Context.LAYOUT_INFLATER_SERVICE);
        inflater.inflate(R.layout.f_refresh_view, this);

        refresh =findViewById(R.id.refresh);
        loadingIv = findViewById(R.id.loading_iv);
        error = findViewById(R.id.error);
        tips = findViewById(R.id.tips);
        animation = AnimationUtils.loadAnimation(mContext, R.anim.rotate_anim) ;
        animation.setDuration(speed);

    }

    public void show() {//开启
        this.setVisibility(View.VISIBLE);
        error.setVisibility(View.GONE);
        loadingIv.setVisibility(View.VISIBLE);
        loadingIv.startAnimation(animation);
    }

    public void dismiss() {//关闭
        this.setVisibility(View.GONE);
        error.setVisibility(View.GONE);
        loadingIv.clearAnimation();
        loadingIv.setVisibility(View.GONE);
    }
}
