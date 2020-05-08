using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Text;

using UnityEditor;
using UnityEngine;

// Token: 0x02000017 RID: 23
class LoginWindow : EditorWindow
{
	// Token: 0x02000018 RID: 24
	enum Enum1
	{
		// Token: 0x04000106 RID: 262
		ETC1,
		// Token: 0x04000107 RID: 263
		PVRTC1_2,
		// Token: 0x04000108 RID: 264
		PVRTC1_2_RGB,
		// Token: 0x04000109 RID: 265
		PVRTC1_4,
		// Token: 0x0400010A RID: 266
		PVRTC1_4_RGB
	}

	// Token: 0x06000099 RID: 153 RVA: 0x00008E3C File Offset: 0x0000703C
	[MenuItem("LayaAir3D/Account", false, 0)]
	public static void initExport()
	{
		if (LoginWindow.string_2 == null)
		{
			LayaAir3D.ReadLanguage(1);
		}
		LoginWindow.loginWindow_0 = (LoginWindow)EditorWindow.GetWindow(typeof(LoginWindow));
		LoginWindow.loginWindow_0.maxSize = new Vector2(399f, 724f);
		LoginWindow.loginWindow_0.minSize = new Vector2(399f, 560f);
		Texture2D texture2D = new Texture2D(16, 16);
		PaymentPage.smethod_3("Assets/LayaAir3D/LayaTool/LayaResouce/layabox.png", texture2D);
		LoginWindow.texture2D_0 = new Texture2D(128, 128);
		PaymentPage.smethod_3("Assets/LayaAir3D/LayaTool/LayaResouce/logo.png", LoginWindow.texture2D_0);
		LoginWindow.AriUrlTexture = new Texture2D(128, 128);
		PaymentPage.smethod_3("Assets/LayaAir3D/LayaTool/LayaResouce/logo.png", LoginWindow.AriUrlTexture);
		LoginWindow.texture2D_1 = new Texture2D(92, 72);
		PaymentPage.smethod_3("Assets/LayaAir3D/LayaTool/LayaResouce/VIPY.png", LoginWindow.texture2D_1);
		LoginWindow.texture2D_2 = new Texture2D(93, 72);
		PaymentPage.smethod_3("Assets/LayaAir3D/LayaTool/LayaResouce/NOVIP.png", LoginWindow.texture2D_2);
		LoginWindow.texture2D_3 = new Texture2D(361, 145);
		PaymentPage.smethod_3("Assets/LayaAir3D/LayaTool/LayaResouce/recharge.png", LoginWindow.texture2D_3);
		GUIContent titleContent = new GUIContent("LayaAir3D", texture2D);
		LoginWindow.loginWindow_0.titleContent = titleContent;
		LoginWindow.guistyle_0.fontSize = 17;
		LoginWindow.guistyle_0.fontStyle = FontStyle.Bold;
		LoginWindow.guistyle_0.alignment = TextAnchor.MiddleLeft;
		LoginWindow.guistyle_0.normal.textColor = EditorStyles.label.normal.textColor;
		LoginWindow.guistyle_7.fontSize = 19;
		LoginWindow.guistyle_7.alignment = TextAnchor.MiddleLeft;
		LoginWindow.guistyle_7.normal.textColor = EditorStyles.label.normal.textColor;
		LoginWindow.guistyle_1.normal.textColor = (EditorGUIUtility.isProSkin ? new Color(0f, 190f, 200f) : new Color(0f, 0f, 1f));
		LoginWindow.guistyle_2.fontSize = 13;
		LoginWindow.guistyle_2.normal.textColor = EditorStyles.label.normal.textColor;
		LoginWindow.guistyle_3.fontSize = 15;
		LoginWindow.guistyle_3.fontStyle = FontStyle.Bold;
		LoginWindow.guistyle_3.normal.textColor = EditorStyles.label.normal.textColor;
		LoginWindow.guistyle_4.fontSize = 12;
		LoginWindow.guistyle_4.fontStyle = FontStyle.Bold;
		LoginWindow.guistyle_4.alignment = TextAnchor.MiddleCenter;
		LoginWindow.guistyle_4.normal.textColor = Color.white;
		LoginWindow.ComputerUUID = LoginWindow.GetUUID();
		LoginWindow.int_0 = 4;
		LoginWindow.guistyle_5.fontSize = 10;
		LoginWindow.guistyle_5.alignment = TextAnchor.MiddleLeft;
		LoginWindow.guistyle_5.normal.textColor = (EditorGUIUtility.isProSkin ? new Color(0f, 190f, 200f) : new Color(0f, 0f, 1f));
		LoginWindow.guistyle_6.fontSize = 11;
		LoginWindow.guistyle_6.alignment = TextAnchor.MiddleLeft;
		LoginWindow.guistyle_6.normal.textColor = EditorStyles.label.normal.textColor;
		LoginWindow.guistyle_8.fontSize = 11;
		LoginWindow.guistyle_8.alignment = TextAnchor.MiddleLeft;
		LoginWindow.guistyle_8.normal.textColor = EditorStyles.label.normal.textColor;
		if (LoginWindow.string_0 == null)
		{
			LoginWindow.string_0 = "";
			LoginWindow.string_1 = "";
		}
	}

	// Token: 0x0600009A RID: 154 RVA: 0x000091A8 File Offset: 0x000073A8
	void OnGUI()
	{
		if (LoginWindow.texture2D_0 == null)
		{
			LoginWindow.initExport();
		}
		EditorGUI.BeginDisabledGroup(PaymentPage.bool_2);
		if (Class0.int_2 != 2)
		{
			LoginWindow.int_2 = 0;
		}
		else
		{
			LoginWindow.int_2 = 2;
		}
		if (LoginWindow.int_2 == 0)
		{
			EditorGUILayout.Space();
			if (LoginWindow.texture2D_0 == null)
			{
				LoginWindow.texture2D_0 = new Texture2D(128, 128);
				PaymentPage.smethod_3("Assets/LayaAir3D/LayaTool/LayaResouce/logo.png", LoginWindow.texture2D_0);
				LoginWindow.guistyle_0.fontSize = 15;
			}
			GUI.DrawTexture(new Rect(base.position.width / 2f - 64f, 70f, 128f, 128f), LoginWindow.texture2D_0, ScaleMode.ScaleToFit, true);
			if (Class0.int_2 == 1)
			{
				PaymentPage.bool_2 = false;
				GUIStyle guistyle = new GUIStyle();
				guistyle.normal.textColor = Color.red;
				GUI.Label(new Rect(base.position.width / 2f - 90f, 210f, 150f, 30f), LoginWindow.string_2, guistyle);
			}
			else if (Class0.int_2 == 3)
			{
				PaymentPage.bool_2 = false;
				GUIStyle guistyle2 = new GUIStyle();
				guistyle2.normal.textColor = Color.red;
				GUI.Label(new Rect(base.position.width / 2f - 90f, 210f, 150f, 30f), LoginWindow.string_3, guistyle2);
			}
			else if (Class0.int_2 == 4)
			{
				PaymentPage.bool_2 = false;
				GUIStyle guistyle3 = new GUIStyle();
				guistyle3.normal.textColor = Color.red;
				GUI.Label(new Rect(base.position.width / 2f - 90f, 210f, 150f, 30f), LoginWindow.string_4, guistyle3);
			}
			else if (Class0.int_2 == 5)
			{
				PaymentPage.bool_2 = false;
				GUIStyle guistyle4 = new GUIStyle();
				guistyle4.normal.textColor = Color.red;
				GUI.Label(new Rect(base.position.width / 2f - 90f, 210f, 150f, 30f), LoginWindow.string_5, guistyle4);
			}
			EditorGUI.LabelField(new Rect(base.position.width / 2f - 90f, 225f, 50f, 30f), LoginWindow.string_6, LoginWindow.guistyle_3);
			EditorGUI.LabelField(new Rect(base.position.width / 2f - 90f, 285f, 50f, 30f), LoginWindow.string_7, LoginWindow.guistyle_3);
			LoginWindow.string_0 = EditorGUI.TextField(new Rect(base.position.width / 2f - 90f, 250f, 185f, 20f), LoginWindow.string_0);
			LoginWindow.string_1 = EditorGUI.PasswordField(new Rect(base.position.width / 2f - 90f, 310f, 185f, 20f), LoginWindow.string_1);
			if (GUI.Button(new Rect(base.position.width / 2f - 90f, 350f, 185f, 30f), new GUIContent(LoginWindow.string_8)))
			{
				PaymentPage.bool_2 = true;
				Class0.int_2 = 0;
				if (LoginWindow.class0_0 != null)
				{
					LoginWindow.class0_0.method_0(LoginWindow.string_0, LoginWindow.string_1, LoginWindow.bool_0);
				}
			}
			GUI.backgroundColor = new Color(0.76f, 0.76f, 0.76f);
			if (GUI.Button(new Rect(base.position.width / 2f - 5f, 390f, 150f, 20f), new GUIContent(LoginWindow.string_9), LoginWindow.guistyle_1))
			{
				Application.OpenURL("http://developers.masteropen.layabox.com/develope/min_forget.html");
			}
			if (GUI.Button(new Rect(base.position.width / 2f - 90f, 390f, 150f, 20f), new GUIContent(LoginWindow.string_10), LoginWindow.guistyle_1))
			{
				Application.OpenURL("http://developers.masteropen.layabox.com/develope/min_register.html");
			}
		}
		else if (LoginWindow.int_2 == 2)
		{
			GUI.Label(new Rect(38f, 60f, 90f, 90f), LoginWindow.AriUrlTexture);
			GUI.Button(new Rect(145f, 92f, 200f, 30f), Class0.string_1, LoginWindow.guistyle_7);
			GUI.Label(new Rect(146f, 117f, 200f, 30f), Class0.string_8, LoginWindow.guistyle_6);
			if (Class0.string_2 == LoginWindow.string_11)
			{
				GUI.Label(new Rect(142f, 63f, 50f, 20f), LoginWindow.string_25, LoginWindow.guistyle_8);
			}
			else if (Class0.string_10 == "0")
			{
				GUI.Label(new Rect(148f, 63f, 29f, 21f), LoginWindow.texture2D_2, LoginWindow.guistyle_3);
				GUI.Label(new Rect(180f, 65f, 50f, 20f), LoginWindow.string_24, LoginWindow.guistyle_8);
			}
			else if (Class0.string_10 == "1")
			{
				GUI.Label(new Rect(148f, 63f, 29f, 21f), LoginWindow.texture2D_1, LoginWindow.guistyle_3);
				GUI.Label(new Rect(180f, 65f, 50f, 20f), LoginWindow.string_23, LoginWindow.guistyle_8);
			}
			if (GUI.Button(new Rect(100f, 187f, 85f, 36f), LoginWindow.texture2D_3, LoginWindow.guistyle_0))
			{
				PaymentPage.smethod_0();
			}
			GUI.Label(new Rect(91f, 188f, 100f, 30f), LoginWindow.string_12, LoginWindow.guistyle_4);
			int num = 295;
			GUI.Box(new Rect(-1f, 265f, base.position.width + 1f, 2f), "");
			GUI.Label(new Rect(45f, 305f, 150f, 30f), LoginWindow.string_13, LoginWindow.guistyle_3);
			GUI.Label(new Rect(45f, 335f, 150f, 30f), LoginWindow.string_14, LoginWindow.guistyle_2);
			GUI.Label(new Rect(45f, 355f, 150f, 30f), LoginWindow.string_15, LoginWindow.guistyle_2);
			GUI.Label(new Rect(45f, 375f, 150f, 30f), LoginWindow.string_16, LoginWindow.guistyle_2);
			if (GUI.Button(new Rect(45f, 395f, 150f, 20f), new GUIContent(LoginWindow.string_17), LoginWindow.guistyle_1))
			{
				Application.OpenURL("https://ldc2.layabox.com/doc/?nav=zh-ts-0-3-3");
			}
			GUI.Label(new Rect(45f, (float)(num + 130), 150f, 30f), LoginWindow.string_18, LoginWindow.guistyle_3);
			if (LoginWindow.list_0.Count <= 5)
			{
				for (int i = 0; i < LoginWindow.list_0.Count; i++)
				{
					GUI.Label(new Rect(45f, (float)(450 + i * 20), 150f, 30f), LoginWindow.list_0[i], LoginWindow.guistyle_2);
					if (GUI.Button(new Rect(326f, (float)(455 + i * 20), 150f, 20f), new GUIContent(LoginWindow.string_19), LoginWindow.guistyle_1))
					{
						LoginWindow.class0_0.method_16(i);
					}
				}
			}
			else
			{
				LoginWindow.vector2_0 = GUI.BeginScrollView(new Rect(45f, 450f, base.position.width - 45f - 15f, 100f), LoginWindow.vector2_0, new Rect(0f, 0f, 300f, (float)(20 * LoginWindow.list_0.Count)), false, true);
				for (int j = 0; j < LoginWindow.list_0.Count; j++)
				{
					GUI.Label(new Rect(0f, (float)(j * 20), 150f, 30f), LoginWindow.list_0[j], LoginWindow.guistyle_2);
					if (GUI.Button(new Rect(base.position.width - 130f, (float)(j * 20), 150f, 20f), new GUIContent(LoginWindow.string_19), LoginWindow.guistyle_1))
					{
						LoginWindow.class0_0.method_16(j);
					}
				}
				GUI.EndScrollView();
			}
			new GUIStyle().normal.textColor = Color.red;
			if (LoginWindow.int_0 != 4)
			{
				Class25.smethod_0();
			}
			if (GUI.Button(new Rect(307f, 20f, 60f, 25f), LoginWindow.string_20))
			{
				this.signout();
			}
			if (GUI.Button(new Rect(307f, 55f, 60f, 25f), LoginWindow.string_21) && LoginWindow.class0_0 != null)
			{
				LoginWindow.class0_0.method_0(LoginWindow.string_0, LoginWindow.string_1, false);
			}
			if (GUI.Button(new Rect(215f, 189f, 85f, 32f), LoginWindow.string_22))
			{
				Application.OpenURL("https://developers.masteropen.layabox.com/dist/recharge_succ_list.html?token=" + Class0.string_9);
			}
		}
		EditorGUI.EndDisabledGroup();
	}

	// Token: 0x0600009B RID: 155 RVA: 0x00009B98 File Offset: 0x00007D98
	void signout()
	{
		Class0.int_2 = 0;
		LoginWindow.string_0 = "";
		LoginWindow.string_1 = "";
		Class0.bool_0 = false;
		Class0.bool_1 = false;
		Class0.dictionary_0.Clear();
		LayaAir3D.Ios = false;
		LayaAir3D.Android = false;
		LoginWindow.class0_0.method_20();
	}

	// Token: 0x0600009C RID: 156 RVA: 0x00002606 File Offset: 0x00000806
	void Update()
	{
		if (LoginWindow.int_0 != 4)
		{
			LoginWindow.int_1++;
			if (LoginWindow.int_1 == 200)
			{
				LoginWindow.int_0 = 4;
				base.Repaint();
			}
		}
	}

	// Token: 0x0600009D RID: 157 RVA: 0x00009BEC File Offset: 0x00007DEC
	static string GetUUID()
	{
		if (SystemInfo.operatingSystemFamily == OperatingSystemFamily.MacOSX)
		{
			return SystemInfo.deviceUniqueIdentifier;
		}
		if (SystemInfo.operatingSystemFamily == OperatingSystemFamily.Windows)
		{
			if (!LayaAir3D.isHaveCmdPath)
			{
				string str = Environment.ExpandEnvironmentVariables("%SystemRoot%");
				string text = str + "/system32";
				string text2 = str + "/System32/Wbem";
				string text3 = Environment.GetEnvironmentVariable("PATH");
				text3 = string.Concat(new string[]
				{
					text3,
					";",
					text,
					";",
					text2
				});
				Environment.SetEnvironmentVariable("PATH", text3);
				LayaAir3D.isHaveCmdPath = true;
			}
			string result = "";
			string a = "UUID";
			string str2 = "wmic csproduct list full";
			ProcessStartInfo processStartInfo = new ProcessStartInfo("cmd.exe");
			processStartInfo.Arguments = "/c";
			ProcessStartInfo processStartInfo2 = processStartInfo;
			processStartInfo2.Arguments = processStartInfo2.Arguments + " \"" + str2 + " \"";
			processStartInfo.CreateNoWindow = true;
			processStartInfo.ErrorDialog = true;
			processStartInfo.UseShellExecute = false;
			processStartInfo.WorkingDirectory = "";
			if (processStartInfo.UseShellExecute)
			{
				processStartInfo.RedirectStandardOutput = false;
				processStartInfo.RedirectStandardError = false;
				processStartInfo.RedirectStandardInput = false;
			}
			else
			{
				processStartInfo.RedirectStandardOutput = true;
				processStartInfo.RedirectStandardError = true;
				processStartInfo.RedirectStandardInput = true;
				processStartInfo.StandardOutputEncoding = Encoding.UTF8;
				processStartInfo.StandardErrorEncoding = Encoding.UTF8;
			}
			Process process = Process.Start(processStartInfo);
			string[] array;
			for (;;)
			{
				string text4 = process.StandardOutput.ReadLine();
				if (text4 == null)
				{
					return result;
				}
				text4 = text4.Replace("\\", "/");
				if (a == "UUID" && text4.Contains("UUID"))
				{
					array = text4.Split(new char[]
					{
						'='
					});
					if (array.Length == 2)
					{
						break;
					}
				}
			}
			return array[1];
		}
		return "";
	}

	// Token: 0x0600009E RID: 158 RVA: 0x000025F9 File Offset: 0x000007F9
	public LoginWindow()
	{
		
		
	}

	// Token: 0x0600009F RID: 159 RVA: 0x00009DA8 File Offset: 0x00007FA8
	// Note: this type is marked as 'beforefieldinit'.
	static LoginWindow()
	{
		
		LoginWindow.class0_0 = new Class0();
		LoginWindow.bool_0 = false;
		LoginWindow.list_0 = new List<string>();
		LoginWindow.int_0 = 0;
		LoginWindow.ComputerUUID = "";
		LoginWindow.int_1 = 0;
		LoginWindow.int_2 = 0;
		LoginWindow.guistyle_0 = new GUIStyle();
		LoginWindow.guistyle_1 = new GUIStyle();
		LoginWindow.guistyle_2 = new GUIStyle();
		LoginWindow.guistyle_3 = new GUIStyle();
		LoginWindow.guistyle_4 = new GUIStyle();
		LoginWindow.guistyle_5 = new GUIStyle();
		LoginWindow.guistyle_6 = new GUIStyle();
		LoginWindow.guistyle_7 = new GUIStyle();
		LoginWindow.guistyle_8 = new GUIStyle();
		LoginWindow.vector2_0 = default(Vector2);
	}

	// Token: 0x040000D3 RID: 211
	static LoginWindow.Enum1 enum1_0;

	// Token: 0x040000D4 RID: 212
	public static string string_0;

	// Token: 0x040000D5 RID: 213
	public static string string_1;

	// Token: 0x040000D6 RID: 214
	public static Class0 class0_0;

	// Token: 0x040000D7 RID: 215
	public static bool bool_0;

	// Token: 0x040000D8 RID: 216
	public static List<string> list_0;

	// Token: 0x040000D9 RID: 217
	public static int int_0;

	// Token: 0x040000DA RID: 218
	public static string ComputerUUID;

	// Token: 0x040000DB RID: 219
	public static LoginWindow loginWindow_0;

	// Token: 0x040000DC RID: 220
	public static int int_1;

	// Token: 0x040000DD RID: 221
	static int int_2;

	// Token: 0x040000DE RID: 222
	static Texture2D texture2D_0;

	// Token: 0x040000DF RID: 223
	static Texture2D AriUrlTexture;

	// Token: 0x040000E0 RID: 224
	static Texture2D texture2D_1;

	// Token: 0x040000E1 RID: 225
	static Texture2D texture2D_2;

	// Token: 0x040000E2 RID: 226
	static Texture2D texture2D_3;

	// Token: 0x040000E3 RID: 227
	static GUIStyle guistyle_0;

	// Token: 0x040000E4 RID: 228
	static GUIStyle guistyle_1;

	// Token: 0x040000E5 RID: 229
	static GUIStyle guistyle_2;

	// Token: 0x040000E6 RID: 230
	static GUIStyle guistyle_3;

	// Token: 0x040000E7 RID: 231
	static GUIStyle guistyle_4;

	// Token: 0x040000E8 RID: 232
	static GUIStyle guistyle_5;

	// Token: 0x040000E9 RID: 233
	static GUIStyle guistyle_6;

	// Token: 0x040000EA RID: 234
	static GUIStyle guistyle_7;

	// Token: 0x040000EB RID: 235
	static GUIStyle guistyle_8;

	// Token: 0x040000EC RID: 236
	static Vector2 vector2_0;

	// Token: 0x040000ED RID: 237
	public static string string_2;

	// Token: 0x040000EE RID: 238
	public static string string_3;

	// Token: 0x040000EF RID: 239
	public static string string_4;

	// Token: 0x040000F0 RID: 240
	public static string string_5;

	// Token: 0x040000F1 RID: 241
	public static string string_6;

	// Token: 0x040000F2 RID: 242
	public static string string_7;

	// Token: 0x040000F3 RID: 243
	public static string string_8;

	// Token: 0x040000F4 RID: 244
	public static string string_9;

	// Token: 0x040000F5 RID: 245
	public static string string_10;

	// Token: 0x040000F6 RID: 246
	public static string string_11;

	// Token: 0x040000F7 RID: 247
	public static string string_12;

	// Token: 0x040000F8 RID: 248
	public static string string_13;

	// Token: 0x040000F9 RID: 249
	public static string string_14;

	// Token: 0x040000FA RID: 250
	public static string string_15;

	// Token: 0x040000FB RID: 251
	public static string string_16;

	// Token: 0x040000FC RID: 252
	public static string string_17;

	// Token: 0x040000FD RID: 253
	public static string string_18;

	// Token: 0x040000FE RID: 254
	public static string string_19;

	// Token: 0x040000FF RID: 255
	public static string string_20;

	// Token: 0x04000100 RID: 256
	public static string string_21;

	// Token: 0x04000101 RID: 257
	public static string string_22;

	// Token: 0x04000102 RID: 258
	public static string string_23;

	// Token: 0x04000103 RID: 259
	public static string string_24;

	// Token: 0x04000104 RID: 260
	public static string string_25;
}
