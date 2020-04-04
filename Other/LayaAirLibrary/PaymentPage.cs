using mVjiDBJbRPt2wl7USA;
using System.IO;
using UnityEditor;
using UnityEngine;
using ZXing;
using ZXing.Common;
using ZXing.QrCode;

internal class PaymentPage : EditorWindow
{
	private static a m_a;

	public static Texture2D b;

	private static int c;

	private static Texture2D d;

	private static Texture2D e;

	public static bool f;

	public static Texture2D g;

	public static bool h;

	private static Texture2D i;

	public static PaymentPage j;

	public static Texture2D k;

	public static Texture2D l;

	public static Texture2D m;

	public static Texture2D n;

	private static Texture2D o;

	private static Texture2D p;

	private static Texture2D q;

	private static Texture2D r;

	private static Texture2D s;

	private static Texture2D t;

	private static Texture2D u;

	private static Texture2D v;

	public static Texture2D w;

	public static Texture2D x;

	private static Vector2 y;

	private static Rect z;

	private static Rect aa;

	private static Rect ab;

	private static Rect ac;

	private static Rect ad;

	private static Rect ae;

	private static Rect af;

	private static Rect ag;

	public static string ah;

	public static Texture2D ai;

	public static Texture2D aj;

	private static GUIStyle ak;

	public static bool al;

	public static bool am;

	public static int an;

	public static void b()
	{
		//IL_0023: Unknown result type (might be due to invalid IL or missing references)
		//IL_0029: Expected O, but got Unknown
		//IL_003a: Unknown result type (might be due to invalid IL or missing references)
		//IL_0040: Expected O, but got Unknown
		//IL_0086: Unknown result type (might be due to invalid IL or missing references)
		//IL_0090: Expected O, but got Unknown
		//IL_00a9: Unknown result type (might be due to invalid IL or missing references)
		//IL_00b3: Expected O, but got Unknown
		//IL_00c9: Unknown result type (might be due to invalid IL or missing references)
		//IL_00d3: Expected O, but got Unknown
		//IL_00e9: Unknown result type (might be due to invalid IL or missing references)
		//IL_00f3: Expected O, but got Unknown
		//IL_0109: Unknown result type (might be due to invalid IL or missing references)
		//IL_0113: Expected O, but got Unknown
		//IL_0129: Unknown result type (might be due to invalid IL or missing references)
		//IL_0133: Expected O, but got Unknown
		//IL_014c: Unknown result type (might be due to invalid IL or missing references)
		//IL_0156: Expected O, but got Unknown
		//IL_016f: Unknown result type (might be due to invalid IL or missing references)
		//IL_0179: Expected O, but got Unknown
		//IL_018d: Unknown result type (might be due to invalid IL or missing references)
		//IL_019c: Unknown result type (might be due to invalid IL or missing references)
		//IL_01b0: Unknown result type (might be due to invalid IL or missing references)
		//IL_01ba: Expected O, but got Unknown
		al = true;
		j = (PaymentPage)(object)EditorWindow.GetWindow(typeof(PaymentPage));
		Texture2D val = (Texture2D)(object)new Texture2D(16, 16);
		a("Assets/LayaAir3D/LayaTool/LayaResouce/layabox.png", val);
		GUIContent titleContent = (GUIContent)(object)new GUIContent("LayaAir3D", (Texture)(object)val);
		((EditorWindow)j).set_titleContent(titleContent);
		if ((Object)(object)k == (Object)null || (Object)(object)l == (Object)null || (Object)(object)m == (Object)null)
		{
			LoginWindow.d.i();
		}
		w = (Texture2D)(object)new Texture2D(200, 240);
		a("Assets/LayaAir3D/LayaTool/LayaResouce/gerenPayqiye.jpg", w);
		x = (Texture2D)(object)new Texture2D(200, 240);
		a("Assets/LayaAir3D/LayaTool/LayaResouce/qiyePaygeren.jpg", x);
		o = (Texture2D)(object)new Texture2D(155, 61);
		a("Assets/LayaAir3D/LayaTool/LayaResouce/WeChat.png", o);
		q = (Texture2D)(object)new Texture2D(155, 61);
		a("Assets/LayaAir3D/LayaTool/LayaResouce/ZhiFuBao.png", q);
		r = (Texture2D)(object)new Texture2D(155, 61);
		a("Assets/LayaAir3D/LayaTool/LayaResouce/ZhiFuBaoSelected.png", r);
		p = (Texture2D)(object)new Texture2D(155, 61);
		a("Assets/LayaAir3D/LayaTool/LayaResouce/WeChatSelected.png", p);
		u = (Texture2D)(object)new Texture2D(200, 240);
		a("Assets/LayaAir3D/LayaTool/LayaResouce/WeChatCode.jpg", u);
		v = (Texture2D)(object)new Texture2D(200, 240);
		a("Assets/LayaAir3D/LayaTool/LayaResouce/ZhiFuBaoPlayCode.jpg", v);
		((EditorWindow)j).set_maxSize(y);
		((EditorWindow)j).set_minSize(y);
		ai = (Texture2D)(object)new Texture2D(256, 256);
		am = false;
		PaymentPage.b = l;
		c = 1;
		d = o;
		e = r;
		f = true;
		h = false;
		am = false;
		g = v;
		PaymentPage.m_a.b("alipay", c);
	}

	private void OnGUI()
	{
		//IL_000d: Unknown result type (might be due to invalid IL or missing references)
		//IL_001c: Unknown result type (might be due to invalid IL or missing references)
		//IL_00d9: Unknown result type (might be due to invalid IL or missing references)
		//IL_0196: Unknown result type (might be due to invalid IL or missing references)
		//IL_0253: Unknown result type (might be due to invalid IL or missing references)
		//IL_02ad: Unknown result type (might be due to invalid IL or missing references)
		//IL_030e: Unknown result type (might be due to invalid IL or missing references)
		//IL_0324: Unknown result type (might be due to invalid IL or missing references)
		if ((Object)(object)PaymentPage.b != (Object)null)
		{
			GUI.DrawTexture(z, (Texture)(object)PaymentPage.b);
		}
		if (GUI.Button(aa, "", ak))
		{
			f = false;
			h = false;
			am = false;
			PaymentPage.b = l;
			c = 1;
			d = o;
			e = r;
			f = true;
			h = false;
			am = false;
			g = v;
			PaymentPage.m_a.g();
			if (global::a.r == "0" || !global::a.e)
			{
				PaymentPage.m_a.b("alipay", c);
			}
			else
			{
				h = false;
				g = x;
				((EditorWindow)j).Repaint();
			}
		}
		if (GUI.Button(ab, "", ak))
		{
			f = false;
			h = false;
			am = false;
			PaymentPage.b = m;
			c = 2;
			d = o;
			e = r;
			f = true;
			h = false;
			am = false;
			g = v;
			PaymentPage.m_a.g();
			if (global::a.r == "0" || !global::a.e)
			{
				PaymentPage.m_a.b("alipay", c);
			}
			else
			{
				h = false;
				g = x;
				((EditorWindow)j).Repaint();
			}
		}
		if (GUI.Button(ac, "", ak))
		{
			f = false;
			h = false;
			am = false;
			PaymentPage.b = n;
			c = 3;
			d = o;
			e = r;
			f = true;
			h = false;
			am = false;
			g = v;
			PaymentPage.m_a.g();
			if (global::a.r == "1" || !global::a.e)
			{
				PaymentPage.m_a.b("alipay", c);
			}
			else
			{
				h = false;
				g = w;
				((EditorWindow)j).Repaint();
			}
		}
		if (GUI.Button(ae, (Texture)(object)e, ak))
		{
			d = o;
			e = r;
			f = true;
			h = false;
			am = false;
			g = v;
			PaymentPage.m_a.b("alipay", c);
		}
		if (GUI.Button(ad, (Texture)(object)d, ak))
		{
			d = p;
			e = q;
			f = true;
			h = false;
			am = false;
			g = u;
			PaymentPage.m_a.b("wechat", c);
		}
		if (f)
		{
			GUI.DrawTexture(af, (Texture)(object)g);
		}
		if (h)
		{
			GUI.DrawTexture(ag, (Texture)(object)aj);
		}
	}

	private static Color32[] a(string A_0, int A_1, int A_2)
	{
		//IL_0000: Unknown result type (might be due to invalid IL or missing references)
		//IL_0005: Unknown result type (might be due to invalid IL or missing references)
		//IL_0010: Expected O, but got Unknown
		//IL_0010: Unknown result type (might be due to invalid IL or missing references)
		//IL_0011: Unknown result type (might be due to invalid IL or missing references)
		//IL_0016: Unknown result type (might be due to invalid IL or missing references)
		//IL_001d: Unknown result type (might be due to invalid IL or missing references)
		//IL_0029: Expected O, but got Unknown
		//IL_0029: Expected O, but got Unknown
		//IL_002f: Expected O, but got Unknown
		BarcodeWriter val = new BarcodeWriter();
		((BarcodeWriterGeneric<Color32[]>)(object)val).set_Format((BarcodeFormat)2048);
		QrCodeEncodingOptions val2 = new QrCodeEncodingOptions();
		((EncodingOptions)val2).set_Height(A_2);
		((EncodingOptions)val2).set_Width(A_1);
		((BarcodeWriterGeneric<Color32[]>)(object)val).set_Options((EncodingOptions)(object)val2);
		return ((BarcodeWriterGeneric<Color32[]>)(object)val).Write(A_0);
	}

	public static void a()
	{
		if (ah.Length > 1)
		{
			Color32[] pixels = a(ah, ((Texture)ai).get_width(), ((Texture)ai).get_height());
			ai.SetPixels32(pixels);
			ai.Apply();
			aj = ai;
		}
	}

	private void Update()
	{
		if (am)
		{
			if (an == 40)
			{
				PaymentPage.m_a.h();
				an = 0;
			}
			if (an >= 40)
			{
				an = 0;
			}
			an++;
		}
	}

	public static void a(string A_0, Texture2D A_1)
	{
		FileStream fileStream = new FileStream(A_0, FileMode.Open);
		byte[] array = new byte[fileStream.Length];
		fileStream.Read(array, 0, array.Length);
		fileStream.Close();
		bool num = ImageConversion.LoadImage(A_1, array);
		A_1.Apply();
		if (!num)
		{
			Debug.Log((object)"Texture存在但生成Texture失败");
		}
	}

	private void OnDestroy()
	{
		al = false;
	}

	public PaymentPage()
	{
		UNrqlvEiaD5r6WCLZt.IpxBSkcjWDvxT();
		((EditorWindow)this)._002Ector();
	}

	static PaymentPage()
	{
		//IL_001f: Unknown result type (might be due to invalid IL or missing references)
		//IL_0024: Unknown result type (might be due to invalid IL or missing references)
		//IL_003d: Unknown result type (might be due to invalid IL or missing references)
		//IL_0042: Unknown result type (might be due to invalid IL or missing references)
		//IL_005b: Unknown result type (might be due to invalid IL or missing references)
		//IL_0060: Unknown result type (might be due to invalid IL or missing references)
		//IL_0079: Unknown result type (might be due to invalid IL or missing references)
		//IL_007e: Unknown result type (might be due to invalid IL or missing references)
		//IL_0097: Unknown result type (might be due to invalid IL or missing references)
		//IL_009c: Unknown result type (might be due to invalid IL or missing references)
		//IL_00b5: Unknown result type (might be due to invalid IL or missing references)
		//IL_00ba: Unknown result type (might be due to invalid IL or missing references)
		//IL_00d3: Unknown result type (might be due to invalid IL or missing references)
		//IL_00d8: Unknown result type (might be due to invalid IL or missing references)
		//IL_00f1: Unknown result type (might be due to invalid IL or missing references)
		//IL_00f6: Unknown result type (might be due to invalid IL or missing references)
		//IL_010f: Unknown result type (might be due to invalid IL or missing references)
		//IL_0114: Unknown result type (might be due to invalid IL or missing references)
		//IL_0119: Unknown result type (might be due to invalid IL or missing references)
		//IL_0123: Expected O, but got Unknown
		UNrqlvEiaD5r6WCLZt.IpxBSkcjWDvxT();
		PaymentPage.m_a = new a();
		c = 0;
		y = new Vector2(900f, 600f);
		z = new Rect(0f, 0f, 900f, 600f);
		aa = new Rect(0f, 0f, 300f, 76f);
		ab = new Rect(300f, 0f, 300f, 76f);
		ac = new Rect(600f, 0f, 300f, 76f);
		ad = new Rect(205f, 425f, 144f, 50f);
		ae = new Rect(40f, 425f, 144f, 50f);
		af = new Rect(650f, 320f, 201f, 241f);
		ag = new Rect(659f, 329f, 183f, 183f);
		ak = (GUIStyle)(object)new GUIStyle();
		al = false;
		am = false;
		an = 0;
	}
}
