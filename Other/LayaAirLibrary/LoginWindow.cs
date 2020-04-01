using mVjiDBJbRPt2wl7USA;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Text;
using UnityEditor;
using UnityEngine;

internal class LoginWindow : EditorWindow
{
	private enum a
	{
		ETC1,
		PVRTC1_2,
		PVRTC1_2_RGB,
		PVRTC1_4,
		PVRTC1_4_RGB
	}

	private static a m_a;

	public static string b;

	public static string c;

	public static global::a d;

	public static bool e;

	public static List<string> f;

	public static int g;

	public static string ComputerUUID;

	public static LoginWindow h;

	public static int i;

	private static int j;

	private static Texture2D k;

	private static Texture2D AriUrlTexture;

	private static Texture2D l;

	private static Texture2D m;

	private static Texture2D n;

	private static GUIStyle o;

	private static GUIStyle p;

	private static GUIStyle q;

	private static GUIStyle r;

	private static GUIStyle s;

	private static GUIStyle t;

	private static GUIStyle u;

	private static GUIStyle v;

	private static GUIStyle w;

	private static Vector2 x;

	public static string y;

	public static string z;

	public static string aa;

	public static string ab;

	public static string ac;

	public static string ad;

	public static string ae;

	public static string af;

	public static string ag;

	public static string ah;

	public static string ai;

	public static string aj;

	public static string ak;

	public static string al;

	public static string am;

	public static string an;

	public static string ao;

	public static string ap;

	public static string aq;

	public static string ar;

	public static string @as;

	public static string at;

	public static string au;

	public static string av;

	[MenuItem("LayaAir3D/Account", false, 0)]
	public static void initExport()
	{
		//IL_0035: Unknown result type (might be due to invalid IL or missing references)
		//IL_004e: Unknown result type (might be due to invalid IL or missing references)
		//IL_005c: Unknown result type (might be due to invalid IL or missing references)
		//IL_0062: Expected O, but got Unknown
		//IL_0077: Unknown result type (might be due to invalid IL or missing references)
		//IL_0081: Expected O, but got Unknown
		//IL_009a: Unknown result type (might be due to invalid IL or missing references)
		//IL_00a4: Expected O, but got Unknown
		//IL_00b7: Unknown result type (might be due to invalid IL or missing references)
		//IL_00c1: Expected O, but got Unknown
		//IL_00d4: Unknown result type (might be due to invalid IL or missing references)
		//IL_00de: Expected O, but got Unknown
		//IL_00f7: Unknown result type (might be due to invalid IL or missing references)
		//IL_0101: Expected O, but got Unknown
		//IL_0116: Unknown result type (might be due to invalid IL or missing references)
		//IL_011c: Expected O, but got Unknown
		//IL_015d: Unknown result type (might be due to invalid IL or missing references)
		//IL_0192: Unknown result type (might be due to invalid IL or missing references)
		//IL_01bc: Unknown result type (might be due to invalid IL or missing references)
		//IL_01d2: Unknown result type (might be due to invalid IL or missing references)
		//IL_01fc: Unknown result type (might be due to invalid IL or missing references)
		//IL_0231: Unknown result type (might be due to invalid IL or missing references)
		//IL_0267: Unknown result type (might be due to invalid IL or missing references)
		//IL_02b8: Unknown result type (might be due to invalid IL or missing references)
		//IL_02ce: Unknown result type (might be due to invalid IL or missing references)
		//IL_0303: Unknown result type (might be due to invalid IL or missing references)
		//IL_0338: Unknown result type (might be due to invalid IL or missing references)
		if (y == null)
		{
			LayaAir3D.ReadLanguage(1);
		}
		h = (LoginWindow)(object)EditorWindow.GetWindow(typeof(LoginWindow));
		((EditorWindow)h).set_maxSize(new Vector2(399f, 724f));
		((EditorWindow)h).set_minSize(new Vector2(399f, 560f));
		Texture2D val = (Texture2D)(object)new Texture2D(16, 16);
		PaymentPage.a("Assets/LayaAir3D/LayaTool/LayaResouce/layabox.png", val);
		k = (Texture2D)(object)new Texture2D(128, 128);
		PaymentPage.a("Assets/LayaAir3D/LayaTool/LayaResouce/logo.png", k);
		AriUrlTexture = (Texture2D)(object)new Texture2D(128, 128);
		PaymentPage.a("Assets/LayaAir3D/LayaTool/LayaResouce/logo.png", AriUrlTexture);
		l = (Texture2D)(object)new Texture2D(92, 72);
		PaymentPage.a("Assets/LayaAir3D/LayaTool/LayaResouce/VIPY.png", l);
		m = (Texture2D)(object)new Texture2D(93, 72);
		PaymentPage.a("Assets/LayaAir3D/LayaTool/LayaResouce/NOVIP.png", m);
		n = (Texture2D)(object)new Texture2D(361, 145);
		PaymentPage.a("Assets/LayaAir3D/LayaTool/LayaResouce/recharge.png", n);
		GUIContent titleContent = (GUIContent)(object)new GUIContent("LayaAir3D", (Texture)(object)val);
		((EditorWindow)h).set_titleContent(titleContent);
		o.set_fontSize(17);
		o.set_fontStyle((FontStyle)1);
		o.set_alignment((TextAnchor)3);
		o.get_normal().set_textColor(EditorStyles.get_label().get_normal().get_textColor());
		v.set_fontSize(19);
		v.set_alignment((TextAnchor)3);
		v.get_normal().set_textColor(EditorStyles.get_label().get_normal().get_textColor());
		p.get_normal().set_textColor(EditorGUIUtility.get_isProSkin() ? new Color(0f, 190f, 200f) : new Color(0f, 0f, 1f));
		q.set_fontSize(13);
		q.get_normal().set_textColor(EditorStyles.get_label().get_normal().get_textColor());
		r.set_fontSize(15);
		r.set_fontStyle((FontStyle)1);
		r.get_normal().set_textColor(EditorStyles.get_label().get_normal().get_textColor());
		s.set_fontSize(12);
		s.set_fontStyle((FontStyle)1);
		s.set_alignment((TextAnchor)4);
		s.get_normal().set_textColor(Color.get_white());
		ComputerUUID = GetUUID();
		g = 4;
		t.set_fontSize(10);
		t.set_alignment((TextAnchor)3);
		t.get_normal().set_textColor(EditorGUIUtility.get_isProSkin() ? new Color(0f, 190f, 200f) : new Color(0f, 0f, 1f));
		u.set_fontSize(11);
		u.set_alignment((TextAnchor)3);
		u.get_normal().set_textColor(EditorStyles.get_label().get_normal().get_textColor());
		w.set_fontSize(11);
		w.set_alignment((TextAnchor)3);
		w.get_normal().set_textColor(EditorStyles.get_label().get_normal().get_textColor());
		if (b == null)
		{
			b = "";
			c = "";
		}
	}

	private void OnGUI()
	{
		//IL_0058: Unknown result type (might be due to invalid IL or missing references)
		//IL_0062: Expected O, but got Unknown
		//IL_007e: Unknown result type (might be due to invalid IL or missing references)
		//IL_0083: Unknown result type (might be due to invalid IL or missing references)
		//IL_00a6: Unknown result type (might be due to invalid IL or missing references)
		//IL_00c5: Unknown result type (might be due to invalid IL or missing references)
		//IL_00cb: Expected O, but got Unknown
		//IL_00d1: Unknown result type (might be due to invalid IL or missing references)
		//IL_00dc: Unknown result type (might be due to invalid IL or missing references)
		//IL_00e1: Unknown result type (might be due to invalid IL or missing references)
		//IL_0104: Unknown result type (might be due to invalid IL or missing references)
		//IL_0127: Unknown result type (might be due to invalid IL or missing references)
		//IL_012d: Expected O, but got Unknown
		//IL_0133: Unknown result type (might be due to invalid IL or missing references)
		//IL_013e: Unknown result type (might be due to invalid IL or missing references)
		//IL_0143: Unknown result type (might be due to invalid IL or missing references)
		//IL_0166: Unknown result type (might be due to invalid IL or missing references)
		//IL_0189: Unknown result type (might be due to invalid IL or missing references)
		//IL_018f: Expected O, but got Unknown
		//IL_0195: Unknown result type (might be due to invalid IL or missing references)
		//IL_01a0: Unknown result type (might be due to invalid IL or missing references)
		//IL_01a5: Unknown result type (might be due to invalid IL or missing references)
		//IL_01c8: Unknown result type (might be due to invalid IL or missing references)
		//IL_01e8: Unknown result type (might be due to invalid IL or missing references)
		//IL_01ef: Expected O, but got Unknown
		//IL_01f6: Unknown result type (might be due to invalid IL or missing references)
		//IL_0201: Unknown result type (might be due to invalid IL or missing references)
		//IL_0206: Unknown result type (might be due to invalid IL or missing references)
		//IL_0229: Unknown result type (might be due to invalid IL or missing references)
		//IL_023b: Unknown result type (might be due to invalid IL or missing references)
		//IL_0240: Unknown result type (might be due to invalid IL or missing references)
		//IL_0263: Unknown result type (might be due to invalid IL or missing references)
		//IL_0278: Unknown result type (might be due to invalid IL or missing references)
		//IL_027d: Unknown result type (might be due to invalid IL or missing references)
		//IL_02a0: Unknown result type (might be due to invalid IL or missing references)
		//IL_02b5: Unknown result type (might be due to invalid IL or missing references)
		//IL_02ba: Unknown result type (might be due to invalid IL or missing references)
		//IL_02dd: Unknown result type (might be due to invalid IL or missing references)
		//IL_02f2: Unknown result type (might be due to invalid IL or missing references)
		//IL_02f7: Unknown result type (might be due to invalid IL or missing references)
		//IL_031a: Unknown result type (might be due to invalid IL or missing references)
		//IL_032f: Unknown result type (might be due to invalid IL or missing references)
		//IL_0334: Unknown result type (might be due to invalid IL or missing references)
		//IL_0357: Unknown result type (might be due to invalid IL or missing references)
		//IL_0361: Unknown result type (might be due to invalid IL or missing references)
		//IL_036b: Expected O, but got Unknown
		//IL_03a8: Unknown result type (might be due to invalid IL or missing references)
		//IL_03b3: Unknown result type (might be due to invalid IL or missing references)
		//IL_03b8: Unknown result type (might be due to invalid IL or missing references)
		//IL_03db: Unknown result type (might be due to invalid IL or missing references)
		//IL_03e5: Unknown result type (might be due to invalid IL or missing references)
		//IL_03f4: Expected O, but got Unknown
		//IL_0401: Unknown result type (might be due to invalid IL or missing references)
		//IL_0406: Unknown result type (might be due to invalid IL or missing references)
		//IL_0429: Unknown result type (might be due to invalid IL or missing references)
		//IL_0433: Unknown result type (might be due to invalid IL or missing references)
		//IL_0442: Expected O, but got Unknown
		//IL_0475: Unknown result type (might be due to invalid IL or missing references)
		//IL_0498: Unknown result type (might be due to invalid IL or missing references)
		//IL_04c1: Unknown result type (might be due to invalid IL or missing references)
		//IL_04fa: Unknown result type (might be due to invalid IL or missing references)
		//IL_0538: Unknown result type (might be due to invalid IL or missing references)
		//IL_0560: Unknown result type (might be due to invalid IL or missing references)
		//IL_059b: Unknown result type (might be due to invalid IL or missing references)
		//IL_05c3: Unknown result type (might be due to invalid IL or missing references)
		//IL_05eb: Unknown result type (might be due to invalid IL or missing references)
		//IL_061a: Unknown result type (might be due to invalid IL or missing references)
		//IL_0641: Unknown result type (might be due to invalid IL or missing references)
		//IL_0646: Unknown result type (might be due to invalid IL or missing references)
		//IL_0659: Unknown result type (might be due to invalid IL or missing references)
		//IL_067d: Unknown result type (might be due to invalid IL or missing references)
		//IL_06a6: Unknown result type (might be due to invalid IL or missing references)
		//IL_06cf: Unknown result type (might be due to invalid IL or missing references)
		//IL_06f8: Unknown result type (might be due to invalid IL or missing references)
		//IL_0721: Unknown result type (might be due to invalid IL or missing references)
		//IL_072b: Unknown result type (might be due to invalid IL or missing references)
		//IL_073a: Expected O, but got Unknown
		//IL_075e: Unknown result type (might be due to invalid IL or missing references)
		//IL_07a2: Unknown result type (might be due to invalid IL or missing references)
		//IL_07d8: Unknown result type (might be due to invalid IL or missing references)
		//IL_07e2: Unknown result type (might be due to invalid IL or missing references)
		//IL_07f1: Expected O, but got Unknown
		//IL_0826: Unknown result type (might be due to invalid IL or missing references)
		//IL_082b: Unknown result type (might be due to invalid IL or missing references)
		//IL_0844: Unknown result type (might be due to invalid IL or missing references)
		//IL_0849: Unknown result type (might be due to invalid IL or missing references)
		//IL_086b: Unknown result type (might be due to invalid IL or missing references)
		//IL_0872: Unknown result type (might be due to invalid IL or missing references)
		//IL_0877: Unknown result type (might be due to invalid IL or missing references)
		//IL_0899: Unknown result type (might be due to invalid IL or missing references)
		//IL_08b5: Unknown result type (might be due to invalid IL or missing references)
		//IL_08ba: Unknown result type (might be due to invalid IL or missing references)
		//IL_08d8: Unknown result type (might be due to invalid IL or missing references)
		//IL_08e2: Unknown result type (might be due to invalid IL or missing references)
		//IL_08f1: Expected O, but got Unknown
		//IL_091b: Unknown result type (might be due to invalid IL or missing references)
		//IL_0925: Unknown result type (might be due to invalid IL or missing references)
		//IL_0950: Unknown result type (might be due to invalid IL or missing references)
		//IL_097b: Unknown result type (might be due to invalid IL or missing references)
		//IL_09bc: Unknown result type (might be due to invalid IL or missing references)
		if ((Object)(object)k == (Object)null)
		{
			initExport();
		}
		EditorGUI.BeginDisabledGroup(PaymentPage.al);
		if (global::a.u != 2)
		{
			LoginWindow.j = 0;
		}
		else
		{
			LoginWindow.j = 2;
		}
		Rect position;
		if (LoginWindow.j == 0)
		{
			EditorGUILayout.Space();
			if ((Object)(object)k == (Object)null)
			{
				k = (Texture2D)(object)new Texture2D(128, 128);
				PaymentPage.a("Assets/LayaAir3D/LayaTool/LayaResouce/logo.png", k);
				o.set_fontSize(15);
			}
			position = ((EditorWindow)this).get_position();
			GUI.DrawTexture(new Rect(((Rect)(ref position)).get_width() / 2f - 64f, 70f, 128f, 128f), (Texture)(object)k, (ScaleMode)2, true);
			if (global::a.u == 1)
			{
				PaymentPage.al = false;
				GUIStyle val = (GUIStyle)(object)new GUIStyle();
				val.get_normal().set_textColor(Color.get_red());
				position = ((EditorWindow)this).get_position();
				GUI.Label(new Rect(((Rect)(ref position)).get_width() / 2f - 90f, 210f, 150f, 30f), y, val);
			}
			else if (global::a.u == 3)
			{
				PaymentPage.al = false;
				GUIStyle val2 = (GUIStyle)(object)new GUIStyle();
				val2.get_normal().set_textColor(Color.get_red());
				position = ((EditorWindow)this).get_position();
				GUI.Label(new Rect(((Rect)(ref position)).get_width() / 2f - 90f, 210f, 150f, 30f), z, val2);
			}
			else if (global::a.u == 4)
			{
				PaymentPage.al = false;
				GUIStyle val3 = (GUIStyle)(object)new GUIStyle();
				val3.get_normal().set_textColor(Color.get_red());
				position = ((EditorWindow)this).get_position();
				GUI.Label(new Rect(((Rect)(ref position)).get_width() / 2f - 90f, 210f, 150f, 30f), aa, val3);
			}
			else if (global::a.u == 5)
			{
				PaymentPage.al = false;
				GUIStyle val4 = (GUIStyle)(object)new GUIStyle();
				val4.get_normal().set_textColor(Color.get_red());
				position = ((EditorWindow)this).get_position();
				GUI.Label(new Rect(((Rect)(ref position)).get_width() / 2f - 90f, 210f, 150f, 30f), ab, val4);
			}
			position = ((EditorWindow)this).get_position();
			EditorGUI.LabelField(new Rect(((Rect)(ref position)).get_width() / 2f - 90f, 225f, 50f, 30f), ac, r);
			position = ((EditorWindow)this).get_position();
			EditorGUI.LabelField(new Rect(((Rect)(ref position)).get_width() / 2f - 90f, 285f, 50f, 30f), ad, r);
			position = ((EditorWindow)this).get_position();
			b = EditorGUI.TextField(new Rect(((Rect)(ref position)).get_width() / 2f - 90f, 250f, 185f, 20f), b);
			position = ((EditorWindow)this).get_position();
			c = EditorGUI.PasswordField(new Rect(((Rect)(ref position)).get_width() / 2f - 90f, 310f, 185f, 20f), c);
			position = ((EditorWindow)this).get_position();
			if (GUI.Button(new Rect(((Rect)(ref position)).get_width() / 2f - 90f, 350f, 185f, 30f), (GUIContent)(object)new GUIContent(ae)))
			{
				PaymentPage.al = true;
				global::a.u = 0;
				if (d != null)
				{
					d.a(b, c, e);
				}
			}
			GUI.set_backgroundColor(new Color(0.76f, 0.76f, 0.76f));
			position = ((EditorWindow)this).get_position();
			if (GUI.Button(new Rect(((Rect)(ref position)).get_width() / 2f - 5f, 390f, 150f, 20f), (GUIContent)(object)new GUIContent(af), p))
			{
				Application.OpenURL("http://developers.masteropen.layabox.com/develope/min_forget.html");
			}
			position = ((EditorWindow)this).get_position();
			if (GUI.Button(new Rect(((Rect)(ref position)).get_width() / 2f - 90f, 390f, 150f, 20f), (GUIContent)(object)new GUIContent(ag), p))
			{
				Application.OpenURL("http://developers.masteropen.layabox.com/develope/min_register.html");
			}
		}
		else if (LoginWindow.j == 2)
		{
			GUI.Label(new Rect(38f, 60f, 90f, 90f), (Texture)(object)AriUrlTexture);
			GUI.Button(new Rect(145f, 92f, 200f, 30f), global::a.g, v);
			GUI.Label(new Rect(146f, 117f, 200f, 30f), global::a.o, u);
			if (global::a.h == ah)
			{
				GUI.Label(new Rect(142f, 63f, 50f, 20f), av, w);
			}
			else if (global::a.r == "0")
			{
				GUI.Label(new Rect(148f, 63f, 29f, 21f), (Texture)(object)m, r);
				GUI.Label(new Rect(180f, 65f, 50f, 20f), au, w);
			}
			else if (global::a.r == "1")
			{
				GUI.Label(new Rect(148f, 63f, 29f, 21f), (Texture)(object)l, r);
				GUI.Label(new Rect(180f, 65f, 50f, 20f), at, w);
			}
			if (GUI.Button(new Rect(100f, 187f, 85f, 36f), (Texture)(object)n, o))
			{
				PaymentPage.b();
			}
			GUI.Label(new Rect(91f, 188f, 100f, 30f), ai, s);
			int num = 295;
			float num2 = num - 30;
			position = ((EditorWindow)this).get_position();
			GUI.Box(new Rect(-1f, num2, ((Rect)(ref position)).get_width() + 1f, 2f), "");
			GUI.Label(new Rect(45f, (float)(num + 10), 150f, 30f), aj, r);
			GUI.Label(new Rect(45f, (float)(num + 40), 150f, 30f), ak, q);
			GUI.Label(new Rect(45f, (float)(num + 60), 150f, 30f), al, q);
			GUI.Label(new Rect(45f, (float)(num + 80), 150f, 30f), am, q);
			if (GUI.Button(new Rect(45f, (float)(num + 100), 150f, 20f), (GUIContent)(object)new GUIContent(an), p))
			{
				Application.OpenURL("https://ldc2.layabox.com/doc/?nav=zh-ts-0-3-3");
			}
			GUI.Label(new Rect(45f, (float)(num + 130), 150f, 30f), ao, r);
			if (f.Count <= 5)
			{
				for (int i = 0; i < f.Count; i++)
				{
					GUI.Label(new Rect(45f, (float)(450 + i * 20), 150f, 30f), f[i], q);
					if (GUI.Button(new Rect(326f, (float)(455 + i * 20), 150f, 20f), (GUIContent)(object)new GUIContent(ap), p))
					{
						d.c(i);
					}
				}
			}
			else
			{
				position = ((EditorWindow)this).get_position();
				x = GUI.BeginScrollView(new Rect(45f, 450f, ((Rect)(ref position)).get_width() - 45f - 15f, 100f), x, new Rect(0f, 0f, 300f, (float)(20 * f.Count)), false, true);
				for (int j = 0; j < f.Count; j++)
				{
					GUI.Label(new Rect(0f, (float)(j * 20), 150f, 30f), f[j], q);
					position = ((EditorWindow)this).get_position();
					if (GUI.Button(new Rect(((Rect)(ref position)).get_width() - 130f, (float)(j * 20), 150f, 20f), (GUIContent)(object)new GUIContent(ap), p))
					{
						d.c(j);
					}
				}
				GUI.EndScrollView();
			}
			new GUIStyle().get_normal().set_textColor(Color.get_red());
			if (g != 4)
			{
				global::j.a();
			}
			if (GUI.Button(new Rect(307f, 20f, 60f, 25f), aq))
			{
				signout();
			}
			if (GUI.Button(new Rect(307f, 55f, 60f, 25f), ar) && d != null)
			{
				d.a(b, c);
			}
			if (GUI.Button(new Rect(215f, 189f, 85f, 32f), @as))
			{
				Application.OpenURL("https://developers.masteropen.layabox.com/dist/recharge_succ_list.html?token=" + global::a.q);
			}
		}
		EditorGUI.EndDisabledGroup();
	}

	private void signout()
	{
		global::a.u = 0;
		b = "";
		c = "";
		global::a.d = false;
		global::a.e = false;
		global::a.t.Clear();
		LayaAir3D.Ios = false;
		LayaAir3D.Android = false;
		d.k();
	}

	private void Update()
	{
		if (g != 4)
		{
			i++;
			if (i == 200)
			{
				g = 4;
				((EditorWindow)this).Repaint();
			}
		}
	}

	private static string GetUUID()
	{
		//IL_0000: Unknown result type (might be due to invalid IL or missing references)
		//IL_0006: Invalid comparison between Unknown and I4
		//IL_000e: Unknown result type (might be due to invalid IL or missing references)
		//IL_0014: Invalid comparison between Unknown and I4
		if ((int)SystemInfo.get_operatingSystemFamily() == 1)
		{
			return SystemInfo.get_deviceUniqueIdentifier();
		}
		if ((int)SystemInfo.get_operatingSystemFamily() == 2)
		{
			if (!LayaAir3D.isHaveCmdPath)
			{
				string str = Environment.ExpandEnvironmentVariables("%SystemRoot%");
				string text = str + "/system32";
				string text2 = str + "/System32/Wbem";
				string environmentVariable = Environment.GetEnvironmentVariable("PATH");
				environmentVariable = environmentVariable + ";" + text + ";" + text2;
				Environment.SetEnvironmentVariable("PATH", environmentVariable);
				LayaAir3D.isHaveCmdPath = true;
			}
			string result = "";
			string text3 = "UUID";
			string str2 = "wmic csproduct list full";
			ProcessStartInfo processStartInfo = new ProcessStartInfo("cmd.exe");
			processStartInfo.Arguments = "/c";
			processStartInfo.Arguments = processStartInfo.Arguments + " \"" + str2 + " \"";
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
			while (true)
			{
				string text4 = process.StandardOutput.ReadLine();
				if (text4 == null)
				{
					return result;
				}
				text4 = text4.Replace("\\", "/");
				if (text3 == "UUID" && text4.Contains("UUID"))
				{
					array = text4.Split('=');
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

	public LoginWindow()
	{
		UNrqlvEiaD5r6WCLZt.IpxBSkcjWDvxT();
		((EditorWindow)this)._002Ector();
	}

	static LoginWindow()
	{
		//IL_003b: Unknown result type (might be due to invalid IL or missing references)
		//IL_0045: Expected O, but got Unknown
		//IL_0045: Unknown result type (might be due to invalid IL or missing references)
		//IL_004f: Expected O, but got Unknown
		//IL_004f: Unknown result type (might be due to invalid IL or missing references)
		//IL_0059: Expected O, but got Unknown
		//IL_0059: Unknown result type (might be due to invalid IL or missing references)
		//IL_0063: Expected O, but got Unknown
		//IL_0063: Unknown result type (might be due to invalid IL or missing references)
		//IL_006d: Expected O, but got Unknown
		//IL_006d: Unknown result type (might be due to invalid IL or missing references)
		//IL_0077: Expected O, but got Unknown
		//IL_0077: Unknown result type (might be due to invalid IL or missing references)
		//IL_0081: Expected O, but got Unknown
		//IL_0081: Unknown result type (might be due to invalid IL or missing references)
		//IL_008b: Expected O, but got Unknown
		//IL_008b: Unknown result type (might be due to invalid IL or missing references)
		//IL_0095: Expected O, but got Unknown
		//IL_009a: Unknown result type (might be due to invalid IL or missing references)
		UNrqlvEiaD5r6WCLZt.IpxBSkcjWDvxT();
		d = new global::a();
		e = false;
		f = new List<string>();
		g = 0;
		ComputerUUID = "";
		i = 0;
		j = 0;
		o = (GUIStyle)(object)new GUIStyle();
		p = (GUIStyle)(object)new GUIStyle();
		q = (GUIStyle)(object)new GUIStyle();
		r = (GUIStyle)(object)new GUIStyle();
		s = (GUIStyle)(object)new GUIStyle();
		t = (GUIStyle)(object)new GUIStyle();
		u = (GUIStyle)(object)new GUIStyle();
		v = (GUIStyle)(object)new GUIStyle();
		w = (GUIStyle)(object)new GUIStyle();
		x = default(Vector2);
	}
}
