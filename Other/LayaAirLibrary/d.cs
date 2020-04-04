using mVjiDBJbRPt2wl7USA;
using UnityEditor;
using UnityEngine;
using ZXing;
using ZXing.Common;
using ZXing.QrCode;

internal class d : EditorWindow
{
	private static d m_a;

	private static string m_b;

	private static Texture2D c;

	private static Texture m_d;

	private static Rect e;

	public static void b()
	{
		//IL_0068: Unknown result type (might be due to invalid IL or missing references)
		//IL_0081: Unknown result type (might be due to invalid IL or missing references)
		//IL_0095: Unknown result type (might be due to invalid IL or missing references)
		//IL_009f: Expected O, but got Unknown
		string str = LayaAir3D.str_ip + ":" + LayaAir3D.curNodePort;
		global::d.m_b = "http://" + str + "/index.html";
		global::d.m_a = (d)(object)EditorWindow.GetWindow(typeof(d), false, "LayaAirbox");
		((EditorWindow)global::d.m_a).Show(true);
		((EditorWindow)global::d.m_a).set_minSize(new Vector2(280f, 295f));
		((EditorWindow)global::d.m_a).set_maxSize(new Vector2(280f, 296f));
		c = (Texture2D)(object)new Texture2D(256, 256);
		a();
		LayaAir3D.runLayaDemo(isSilent: true);
	}

	private void OnGUI()
	{
		//IL_0000: Unknown result type (might be due to invalid IL or missing references)
		//IL_0023: Unknown result type (might be due to invalid IL or missing references)
		//IL_0046: Unknown result type (might be due to invalid IL or missing references)
		//IL_0050: Unknown result type (might be due to invalid IL or missing references)
		//IL_005a: Expected O, but got Unknown
		GUI.DrawTexture(e, m_d);
		EditorGUI.LabelField(new Rect(10f, 270f, 210f, 20f), global::d.m_b);
		if (GUI.Button(new Rect(225f, 270f, 43f, 20f), (GUIContent)(object)new GUIContent(LayaAir3D.str_Copy)))
		{
			GUIUtility.set_systemCopyBuffer(global::d.m_b);
		}
	}

	private void OnDestroy()
	{
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

	private static void a()
	{
		if (global::d.m_b.Length > 1)
		{
			Color32[] pixels = a(global::d.m_b, ((Texture)c).get_width(), ((Texture)c).get_height());
			c.SetPixels32(pixels);
			c.Apply();
			m_d = (Texture)(object)c;
		}
	}

	public d()
	{
		UNrqlvEiaD5r6WCLZt.IpxBSkcjWDvxT();
		((EditorWindow)this)._002Ector();
	}

	static d()
	{
		//IL_0019: Unknown result type (might be due to invalid IL or missing references)
		//IL_001e: Unknown result type (might be due to invalid IL or missing references)
		UNrqlvEiaD5r6WCLZt.IpxBSkcjWDvxT();
		e = new Rect(10f, 10f, 256f, 256f);
	}
}
