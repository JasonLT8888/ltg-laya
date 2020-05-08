using System;
using System.IO;

using UnityEditor;
using UnityEngine;
using ZXing;
using ZXing.QrCode;

// Token: 0x02000019 RID: 25
class PaymentPage : EditorWindow
{
	// Token: 0x060000A0 RID: 160 RVA: 0x00009E58 File Offset: 0x00008058
	public static void smethod_0()
	{
		PaymentPage.bool_2 = true;
		PaymentPage.paymentPage_0 = (PaymentPage)EditorWindow.GetWindow(typeof(PaymentPage));
		Texture2D texture2D = new Texture2D(16, 16);
		PaymentPage.smethod_3("Assets/LayaAir3D/LayaTool/LayaResouce/layabox.png", texture2D);
		GUIContent titleContent = new GUIContent("LayaAir3D", texture2D);
		PaymentPage.paymentPage_0.titleContent = titleContent;
		if (PaymentPage.texture2D_5 == null || PaymentPage.texture2D_6 == null || PaymentPage.texture2D_7 == null)
		{
			LoginWindow.class0_0.method_12();
		}
		PaymentPage.texture2D_17 = new Texture2D(200, 240);
		PaymentPage.smethod_3("Assets/LayaAir3D/LayaTool/LayaResouce/gerenPayqiye.jpg", PaymentPage.texture2D_17);
		PaymentPage.texture2D_18 = new Texture2D(200, 240);
		PaymentPage.smethod_3("Assets/LayaAir3D/LayaTool/LayaResouce/qiyePaygeren.jpg", PaymentPage.texture2D_18);
		PaymentPage.texture2D_9 = new Texture2D(155, 61);
		PaymentPage.smethod_3("Assets/LayaAir3D/LayaTool/LayaResouce/WeChat.png", PaymentPage.texture2D_9);
		PaymentPage.texture2D_11 = new Texture2D(155, 61);
		PaymentPage.smethod_3("Assets/LayaAir3D/LayaTool/LayaResouce/ZhiFuBao.png", PaymentPage.texture2D_11);
		PaymentPage.texture2D_12 = new Texture2D(155, 61);
		PaymentPage.smethod_3("Assets/LayaAir3D/LayaTool/LayaResouce/ZhiFuBaoSelected.png", PaymentPage.texture2D_12);
		PaymentPage.texture2D_10 = new Texture2D(155, 61);
		PaymentPage.smethod_3("Assets/LayaAir3D/LayaTool/LayaResouce/WeChatSelected.png", PaymentPage.texture2D_10);
		PaymentPage.texture2D_15 = new Texture2D(200, 240);
		PaymentPage.smethod_3("Assets/LayaAir3D/LayaTool/LayaResouce/WeChatCode.jpg", PaymentPage.texture2D_15);
		PaymentPage.texture2D_16 = new Texture2D(200, 240);
		PaymentPage.smethod_3("Assets/LayaAir3D/LayaTool/LayaResouce/ZhiFuBaoPlayCode.jpg", PaymentPage.texture2D_16);
		PaymentPage.paymentPage_0.maxSize = PaymentPage.vector2_0;
		PaymentPage.paymentPage_0.minSize = PaymentPage.vector2_0;
		PaymentPage.texture2D_19 = new Texture2D(256, 256);
		PaymentPage.bool_3 = false;
		PaymentPage.texture2D_0 = PaymentPage.texture2D_6;
		PaymentPage.int_0 = 1;
		PaymentPage.texture2D_1 = PaymentPage.texture2D_9;
		PaymentPage.texture2D_2 = PaymentPage.texture2D_12;
		PaymentPage.bool_0 = true;
		PaymentPage.bool_1 = false;
		PaymentPage.bool_3 = false;
		PaymentPage.texture2D_3 = PaymentPage.texture2D_16;
		PaymentPage.class0_0.method_6("alipay", PaymentPage.int_0);
	}

	// Token: 0x060000A1 RID: 161 RVA: 0x0000A07C File Offset: 0x0000827C
	void OnGUI()
	{
		if (PaymentPage.texture2D_0 != null)
		{
			GUI.DrawTexture(PaymentPage.rect_0, PaymentPage.texture2D_0);
		}
		if (GUI.Button(PaymentPage.rect_1, "", PaymentPage.guistyle_0))
		{
			PaymentPage.bool_0 = false;
			PaymentPage.bool_1 = false;
			PaymentPage.bool_3 = false;
			PaymentPage.texture2D_0 = PaymentPage.texture2D_6;
			PaymentPage.int_0 = 1;
			PaymentPage.texture2D_1 = PaymentPage.texture2D_9;
			PaymentPage.texture2D_2 = PaymentPage.texture2D_12;
			PaymentPage.bool_0 = true;
			PaymentPage.bool_1 = false;
			PaymentPage.bool_3 = false;
			PaymentPage.texture2D_3 = PaymentPage.texture2D_16;
			PaymentPage.class0_0.method_8();
			if (!(Class0.string_10 == "0") && Class0.bool_1)
			{
				PaymentPage.bool_1 = false;
				PaymentPage.texture2D_3 = PaymentPage.texture2D_18;
				PaymentPage.paymentPage_0.Repaint();
			}
			else
			{
				PaymentPage.class0_0.method_6("alipay", PaymentPage.int_0);
			}
		}
		if (GUI.Button(PaymentPage.rect_2, "", PaymentPage.guistyle_0))
		{
			PaymentPage.bool_0 = false;
			PaymentPage.bool_1 = false;
			PaymentPage.bool_3 = false;
			PaymentPage.texture2D_0 = PaymentPage.texture2D_7;
			PaymentPage.int_0 = 2;
			PaymentPage.texture2D_1 = PaymentPage.texture2D_9;
			PaymentPage.texture2D_2 = PaymentPage.texture2D_12;
			PaymentPage.bool_0 = true;
			PaymentPage.bool_1 = false;
			PaymentPage.bool_3 = false;
			PaymentPage.texture2D_3 = PaymentPage.texture2D_16;
			PaymentPage.class0_0.method_8();
			if (!(Class0.string_10 == "0") && Class0.bool_1)
			{
				PaymentPage.bool_1 = false;
				PaymentPage.texture2D_3 = PaymentPage.texture2D_18;
				PaymentPage.paymentPage_0.Repaint();
			}
			else
			{
				PaymentPage.class0_0.method_6("alipay", PaymentPage.int_0);
			}
		}
		if (GUI.Button(PaymentPage.rect_3, "", PaymentPage.guistyle_0))
		{
			PaymentPage.bool_0 = false;
			PaymentPage.bool_1 = false;
			PaymentPage.bool_3 = false;
			PaymentPage.texture2D_0 = PaymentPage.texture2D_8;
			PaymentPage.int_0 = 3;
			PaymentPage.texture2D_1 = PaymentPage.texture2D_9;
			PaymentPage.texture2D_2 = PaymentPage.texture2D_12;
			PaymentPage.bool_0 = true;
			PaymentPage.bool_1 = false;
			PaymentPage.bool_3 = false;
			PaymentPage.texture2D_3 = PaymentPage.texture2D_16;
			PaymentPage.class0_0.method_8();
			if (!(Class0.string_10 == "1") && Class0.bool_1)
			{
				PaymentPage.bool_1 = false;
				PaymentPage.texture2D_3 = PaymentPage.texture2D_17;
				PaymentPage.paymentPage_0.Repaint();
			}
			else
			{
				PaymentPage.class0_0.method_6("alipay", PaymentPage.int_0);
			}
		}
		if (GUI.Button(PaymentPage.rect_5, PaymentPage.texture2D_2, PaymentPage.guistyle_0))
		{
			PaymentPage.texture2D_1 = PaymentPage.texture2D_9;
			PaymentPage.texture2D_2 = PaymentPage.texture2D_12;
			PaymentPage.bool_0 = true;
			PaymentPage.bool_1 = false;
			PaymentPage.bool_3 = false;
			PaymentPage.texture2D_3 = PaymentPage.texture2D_16;
			PaymentPage.class0_0.method_6("alipay", PaymentPage.int_0);
		}
		if (GUI.Button(PaymentPage.rect_4, PaymentPage.texture2D_1, PaymentPage.guistyle_0))
		{
			PaymentPage.texture2D_1 = PaymentPage.texture2D_10;
			PaymentPage.texture2D_2 = PaymentPage.texture2D_11;
			PaymentPage.bool_0 = true;
			PaymentPage.bool_1 = false;
			PaymentPage.bool_3 = false;
			PaymentPage.texture2D_3 = PaymentPage.texture2D_15;
			PaymentPage.class0_0.method_6("wechat", PaymentPage.int_0);
		}
		if (PaymentPage.bool_0)
		{
			GUI.DrawTexture(PaymentPage.rect_6, PaymentPage.texture2D_3);
		}
		if (PaymentPage.bool_1)
		{
			GUI.DrawTexture(PaymentPage.rect_7, PaymentPage.texture2D_20);
		}
	}

	// Token: 0x060000A2 RID: 162 RVA: 0x00002634 File Offset: 0x00000834
	static Color32[] smethod_1(string string_1, int int_2, int int_3)
	{
		return new BarcodeWriter
		{
			Format = BarcodeFormat.QR_CODE,
			Options = new QrCodeEncodingOptions
			{
				Height = int_3,
				Width = int_2
			}
		}.Write(string_1);
	}

	// Token: 0x060000A3 RID: 163 RVA: 0x0000A3BC File Offset: 0x000085BC
	public static void smethod_2()
	{
		if (PaymentPage.string_0.Length > 1)
		{
			Color32[] pixels = PaymentPage.smethod_1(PaymentPage.string_0, PaymentPage.texture2D_19.width, PaymentPage.texture2D_19.height);
			PaymentPage.texture2D_19.SetPixels32(pixels);
			PaymentPage.texture2D_19.Apply();
			PaymentPage.texture2D_20 = PaymentPage.texture2D_19;
		}
	}

	// Token: 0x060000A4 RID: 164 RVA: 0x00002665 File Offset: 0x00000865
	void Update()
	{
		if (PaymentPage.bool_3)
		{
			if (PaymentPage.int_1 == 40)
			{
				PaymentPage.class0_0.method_10();
				PaymentPage.int_1 = 0;
			}
			if (PaymentPage.int_1 >= 40)
			{
				PaymentPage.int_1 = 0;
			}
			PaymentPage.int_1++;
		}
	}

	// Token: 0x060000A5 RID: 165 RVA: 0x0000A414 File Offset: 0x00008614
	public static void smethod_3(string string_1, Texture2D texture2D_21)
	{
		FileStream fileStream = new FileStream(string_1, FileMode.Open);
		byte[] array = new byte[fileStream.Length];
		fileStream.Read(array, 0, array.Length);
		fileStream.Close();
		bool flag = texture2D_21.LoadImage(array);
		texture2D_21.Apply();
		if (!flag)
		{
			Debug.Log("Texture存在但生成Texture失败");
		}
	}

	// Token: 0x060000A6 RID: 166 RVA: 0x000026A2 File Offset: 0x000008A2
	void OnDestroy()
	{
		PaymentPage.bool_2 = false;
	}

	// Token: 0x060000A7 RID: 167 RVA: 0x000025F9 File Offset: 0x000007F9
	public PaymentPage()
	{
		
		
	}

	// Token: 0x060000A8 RID: 168 RVA: 0x0000A460 File Offset: 0x00008660
	// Note: this type is marked as 'beforefieldinit'.
	static PaymentPage()
	{
		
		PaymentPage.class0_0 = new Class0();
		PaymentPage.int_0 = 0;
		PaymentPage.vector2_0 = new Vector2(900f, 600f);
		PaymentPage.rect_0 = new Rect(0f, 0f, 900f, 600f);
		PaymentPage.rect_1 = new Rect(0f, 0f, 300f, 76f);
		PaymentPage.rect_2 = new Rect(300f, 0f, 300f, 76f);
		PaymentPage.rect_3 = new Rect(600f, 0f, 300f, 76f);
		PaymentPage.rect_4 = new Rect(205f, 425f, 144f, 50f);
		PaymentPage.rect_5 = new Rect(40f, 425f, 144f, 50f);
		PaymentPage.rect_6 = new Rect(650f, 320f, 201f, 241f);
		PaymentPage.rect_7 = new Rect(659f, 329f, 183f, 183f);
		PaymentPage.guistyle_0 = new GUIStyle();
		PaymentPage.bool_2 = false;
		PaymentPage.bool_3 = false;
		PaymentPage.int_1 = 0;
	}

	// Token: 0x0400010B RID: 267
	static Class0 class0_0;

	// Token: 0x0400010C RID: 268
	public static Texture2D texture2D_0;

	// Token: 0x0400010D RID: 269
	static int int_0;

	// Token: 0x0400010E RID: 270
	static Texture2D texture2D_1;

	// Token: 0x0400010F RID: 271
	static Texture2D texture2D_2;

	// Token: 0x04000110 RID: 272
	public static bool bool_0;

	// Token: 0x04000111 RID: 273
	public static Texture2D texture2D_3;

	// Token: 0x04000112 RID: 274
	public static bool bool_1;

	// Token: 0x04000113 RID: 275
	static Texture2D texture2D_4;

	// Token: 0x04000114 RID: 276
	public static PaymentPage paymentPage_0;

	// Token: 0x04000115 RID: 277
	public static Texture2D texture2D_5;

	// Token: 0x04000116 RID: 278
	public static Texture2D texture2D_6;

	// Token: 0x04000117 RID: 279
	public static Texture2D texture2D_7;

	// Token: 0x04000118 RID: 280
	public static Texture2D texture2D_8;

	// Token: 0x04000119 RID: 281
	static Texture2D texture2D_9;

	// Token: 0x0400011A RID: 282
	static Texture2D texture2D_10;

	// Token: 0x0400011B RID: 283
	static Texture2D texture2D_11;

	// Token: 0x0400011C RID: 284
	static Texture2D texture2D_12;

	// Token: 0x0400011D RID: 285
	static Texture2D texture2D_13;

	// Token: 0x0400011E RID: 286
	static Texture2D texture2D_14;

	// Token: 0x0400011F RID: 287
	static Texture2D texture2D_15;

	// Token: 0x04000120 RID: 288
	static Texture2D texture2D_16;

	// Token: 0x04000121 RID: 289
	public static Texture2D texture2D_17;

	// Token: 0x04000122 RID: 290
	public static Texture2D texture2D_18;

	// Token: 0x04000123 RID: 291
	static Vector2 vector2_0;

	// Token: 0x04000124 RID: 292
	static Rect rect_0;

	// Token: 0x04000125 RID: 293
	static Rect rect_1;

	// Token: 0x04000126 RID: 294
	static Rect rect_2;

	// Token: 0x04000127 RID: 295
	static Rect rect_3;

	// Token: 0x04000128 RID: 296
	static Rect rect_4;

	// Token: 0x04000129 RID: 297
	static Rect rect_5;

	// Token: 0x0400012A RID: 298
	static Rect rect_6;

	// Token: 0x0400012B RID: 299
	static Rect rect_7;

	// Token: 0x0400012C RID: 300
	public static string string_0;

	// Token: 0x0400012D RID: 301
	public static Texture2D texture2D_19;

	// Token: 0x0400012E RID: 302
	public static Texture2D texture2D_20;

	// Token: 0x0400012F RID: 303
	static GUIStyle guistyle_0;

	// Token: 0x04000130 RID: 304
	public static bool bool_2;

	// Token: 0x04000131 RID: 305
	public static bool bool_3;

	// Token: 0x04000132 RID: 306
	public static int int_1;
}
