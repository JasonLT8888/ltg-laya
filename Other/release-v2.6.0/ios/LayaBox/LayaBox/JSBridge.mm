#import "JSBridge.h"
#import "AppDelegate.h"
@implementation JSBridge

// 初始化广告APP_ID
+(void)InitAppId: (NSString*) appId
{
    NSLog(@"LTG-OC: 调用 InitAppId %@", appId);
} 

// 调用显示Banner
+(void)ShowBannerAd
{
    NSLog(@"LTG-OC: 调用 ShowBannerAd");
}

// 调用隐藏Banner
+(void)HideBannerAd
{
    NSLog(@"LTG-OC: 调用 HideBannerAd");
}

// 调用展示激励视频
+(void)ShowRewardVideoAd 
{
    NSLog(@"LTG-OC: 调用 ShowRewardVideoAd");
}

// 调用显示插屏
+(void)ShowInterstitalAd
{
    NSLog(@"LTG-OC: 调用 ShowInterstitalAd");
}

// 调用显示全屏视频
+(void)ShowNormalVideoAd
{
    NSLog(@"LTG-OC: 调用 ShowNormalVideoAd");
}

// 记录事件
+(void)RecordEvent: (NSString*)eventId: (NSString*)paramStr
{
    NSLog(@"LTG-OC: 调用 RecordEvent eventId:%@, eventParam:%@", eventId, paramStr);
}

+(void)hideSplash
{
    dispatch_async(dispatch_get_main_queue(), ^{
        AppDelegate * appDelegate = (AppDelegate*)[UIApplication sharedApplication].delegate;
        [appDelegate.launchView hide];
    });
}
+(void)setTips:(NSArray*)tips
{
    dispatch_async(dispatch_get_main_queue(), ^{
        AppDelegate * appDelegate = (AppDelegate*)[UIApplication sharedApplication].delegate;
        appDelegate.launchView.tips = tips;
    });
}
+(void)setFontColor:(NSString*)color
{
    dispatch_async(dispatch_get_main_queue(), ^{
        AppDelegate * appDelegate = (AppDelegate*)[UIApplication sharedApplication].delegate;
        [appDelegate.launchView setFontColor:color];
    });
}
+(void)bgColor:(NSString*)color
{
    dispatch_async(dispatch_get_main_queue(), ^{
        AppDelegate * appDelegate = (AppDelegate*)[UIApplication sharedApplication].delegate;
        [appDelegate.launchView setBackgroundColor:color];
    });
}
+(void)loading:(NSNumber*)percent
{
    dispatch_async(dispatch_get_main_queue(), ^{
        AppDelegate * appDelegate = (AppDelegate*)[UIApplication sharedApplication].delegate;
        [appDelegate.launchView setPercent:percent.integerValue];
    });
}
+(void)showTextInfo:(NSNumber*)show
{
    dispatch_async(dispatch_get_main_queue(), ^{
        AppDelegate * appDelegate = (AppDelegate*)[UIApplication sharedApplication].delegate;
        [appDelegate.launchView showTextInfo:show.intValue > 0];
    });
}
@end

