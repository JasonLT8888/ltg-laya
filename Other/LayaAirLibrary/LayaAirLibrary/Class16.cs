using System;

using UnityEditor;
using UnityEngine;
using ZXing;
using ZXing.QrCode;

// Token: 0x0200001B RID: 27
class Class16 : EditorWindow
{
	// Token: 0x060000B1 RID: 177 RVA: 0x0000AB3C File Offset: 0x00008D3C
	public static void smethod_0()
	{
		string str = LayaAir3D.str_ip + ":" + LayaAir3D.curNodePort;
		Class16.string_0 = "http://" + str + "/index.html";
		Class16.class16_0 = (Class16)EditorWindow.GetWindow(typeof(Class16), false, "LayaAirbox");
		Class16.class16_0.Show(true);
		Class16.class16_0.minSize = new Vector2(280f, 295f);
		Class16.class16_0.maxSize = new Vector2(280f, 296f);
		Class16.texture2D_0 = new Texture2D(256, 256);
		Class16.smethod_2();
		LayaAir3D.runLayaDemo(true);
	}

	// Token: 0x060000B2 RID: 178 RVA: 0x0000ABF4 File Offset: 0x00008DF4
	void OnGUI()
	{
		GUI.DrawTexture(Class16.rect_0, Class16.texture_0);
		EditorGUI.LabelField(new Rect(10f, 270f, 210f, 20f), Class16.string_0);
		if (GUI.Button(new Rect(225f, 270f, 43f, 20f), new GUIContent(LayaAir3D.str_Copy)))
		{
			GUIUtility.systemCopyBuffer = Class16.string_0;
		}
	}

	// Token: 0x060000B3 RID: 179 RVA: 0x000023E7 File Offset: 0x000005E7
	void OnDestroy()
	{
	}

	// Token: 0x060000B4 RID: 180 RVA: 0x00002634 File Offset: 0x00000834
	static Color32[] smethod_1(string string_1, int int_0, int int_1)
	{
		return new BarcodeWriter
		{
			Format = BarcodeFormat.QR_CODE,
			Options = new QrCodeEncodingOptions
			{
				Height = int_1,
				Width = int_0
			}
		}.Write(string_1);
	}

	// Token: 0x060000B5 RID: 181 RVA: 0x0000AC68 File Offset: 0x00008E68
	static void smethod_2()
	{
		if (Class16.string_0.Length > 1)
		{
			Color32[] pixels = Class16.smethod_1(Class16.string_0, Class16.texture2D_0.width, Class16.texture2D_0.height);
			Class16.texture2D_0.SetPixels32(pixels);
			Class16.texture2D_0.Apply();
			Class16.texture_0 = Class16.texture2D_0;
		}
	}

	// Token: 0x060000B6 RID: 182 RVA: 0x000025F9 File Offset: 0x000007F9
	public Class16()
	{
		
		
	}

	// Token: 0x060000B7 RID: 183 RVA: 0x000026E4 File Offset: 0x000008E4
	// Note: this type is marked as 'beforefieldinit'.
	static Class16()
	{
		
		Class16.rect_0 = new Rect(10f, 10f, 256f, 256f);
	}

	// Token: 0x04000134 RID: 308
	static Class16 class16_0;

	// Token: 0x04000135 RID: 309
	static string string_0;

	// Token: 0x04000136 RID: 310
	static Texture2D texture2D_0;

	// Token: 0x04000137 RID: 311
	static Texture texture_0;

	// Token: 0x04000138 RID: 312
	static Rect rect_0;
}
