using LayaExport;
using mVjiDBJbRPt2wl7USA;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using UnityEditor;
using UnityEditor.Animations;
using UnityEngine;
using UnityEngine.Rendering;
using UnityEngine.SceneManagement;

internal class p
{
	public enum a
	{
		a,
		b,
		c,
		d,
		e,
		f,
		g,
		h,
		i,
		j,
		k,
		l,
		m,
		n,
		o
	}

	private class b
	{
		public int a;

		public Vector3 b;

		public Vector3 c;

		public Color d;

		public Vector2 e;

		public Vector2 f;

		public Vector4 g;

		public Vector4 h;

		public Vector4 i;

		public bool j;

		public int k;

		public int l;

		public Dictionary<string, int> m;

		public void n(b A_0)
		{
			//IL_0002: Unknown result type (might be due to invalid IL or missing references)
			//IL_0007: Unknown result type (might be due to invalid IL or missing references)
			//IL_000e: Unknown result type (might be due to invalid IL or missing references)
			//IL_0013: Unknown result type (might be due to invalid IL or missing references)
			//IL_001a: Unknown result type (might be due to invalid IL or missing references)
			//IL_001f: Unknown result type (might be due to invalid IL or missing references)
			//IL_0026: Unknown result type (might be due to invalid IL or missing references)
			//IL_002b: Unknown result type (might be due to invalid IL or missing references)
			//IL_0032: Unknown result type (might be due to invalid IL or missing references)
			//IL_0037: Unknown result type (might be due to invalid IL or missing references)
			//IL_003e: Unknown result type (might be due to invalid IL or missing references)
			//IL_0043: Unknown result type (might be due to invalid IL or missing references)
			//IL_004a: Unknown result type (might be due to invalid IL or missing references)
			//IL_004f: Unknown result type (might be due to invalid IL or missing references)
			//IL_0081: Unknown result type (might be due to invalid IL or missing references)
			//IL_0086: Unknown result type (might be due to invalid IL or missing references)
			b = A_0.b;
			c = A_0.c;
			d = A_0.d;
			e = A_0.e;
			f = A_0.f;
			g = A_0.g;
			i = A_0.i;
			h = new Vector4(A_0.h.x, A_0.h.y, A_0.h.z, A_0.h.w);
		}

		public b()
		{
			UNrqlvEiaD5r6WCLZt.IpxBSkcjWDvxT();
			j = true;
			k = -1;
			l = -1;
			base._002Ector();
		}
	}

	private class c
	{
		public b a;

		public b b;

		public b c;

		public c()
		{
			UNrqlvEiaD5r6WCLZt.IpxBSkcjWDvxT();
			base._002Ector();
		}
	}

	private struct d
	{
		public Vector3 a;

		public Vector3 b;

		public Vector2 c;
	}

	private struct e
	{
		public ushort a;

		public List<float> b;

		public List<float> c;

		public List<float> d;
	}

	private struct f
	{
		public byte a;

		public ushort b;

		public List<ushort> c;

		public ushort d;

		public ushort e;

		public List<ushort> f;

		public ushort g;

		public List<e> h;
	}

	private struct g
	{
		public Keyframe[] a;
	}

	private struct h
	{
		public g a;

		public string b;

		public string c;

		public Type d;
	}

	public static string a;

	public static Dictionary<string, string> b;

	public static int c;

	public static bool d;

	public static bool e;

	public static bool f;

	public static bool g;

	public static bool h;

	public static bool i;

	public static int j;

	public static bool k;

	public static int l;

	public static bool m;

	public static bool n;

	public static bool o;

	public static string p;

	public static string q;

	public static float r;

	public static bool s;

	public static bool t;

	public static bool u;

	public static int v;

	private static bool w;

	private static int x;

	private static float y;

	private static int[] z;

	private static string aa;

	private static List<string> ab;

	private static int ac;

	private static int ad;

	private static int ae;

	private static int af;

	private static int ag;

	private static int ah;

	public static Dictionary<string, TextureInfo> ai;

	public static Dictionary<string, Mesh> aj;

	public static Dictionary<string, SkinnedMeshRenderer> ak;

	private static global::a al;

	private static string am;

	private static string an;

	private static string ao;

	private static string ap;

	private static string aq;

	private static string ar;

	private static string @as;

	public static int at;

	public static Dictionary<string, int> au;

	public static List<string> av;

	public static int l()
	{
		return at++;
	}

	public static void b(string A_0)
	{
		//IL_0000: Unknown result type (might be due to invalid IL or missing references)
		//IL_0005: Unknown result type (might be due to invalid IL or missing references)
		//IL_01d9: Unknown result type (might be due to invalid IL or missing references)
		//IL_01f2: Unknown result type (might be due to invalid IL or missing references)
		Scene activeScene = SceneManager.GetActiveScene();
		aa = ((Scene)(ref activeScene)).get_name();
		aa = a(aa, A_1: true);
		if (aa == "")
		{
			aa = "layaScene";
		}
		string text = "";
		if (global::p.o && p != "")
		{
			p = a(p, A_1: true);
			text = "/" + p + A_0;
		}
		else
		{
			text = "/LayaScene_" + aa + A_0;
		}
		q += text;
		ab = new List<string>();
		ab.Add(".jpeg");
		ab.Add(".JPEG");
		ab.Add(".bmp");
		ab.Add(".BMP");
		ab.Add(".png");
		ab.Add(".PNG");
		ab.Add(".jpg");
		ab.Add(".JPG");
		ad = 0;
		af = 0;
		ah = 0;
		a(text + "/" + aa);
		k();
		c();
		b();
		aj.Clear();
		ak.Clear();
		if (u && v == 0)
		{
			f();
		}
		if (t && v == 2)
		{
			d();
		}
		if (s && v == 1)
		{
			e();
		}
		foreach (KeyValuePair<string, TextureInfo> item in ai)
		{
			TextureInfo value = item.Value;
			string path = value.Path;
			object obj = (object)(AssetImporter.GetAtPath(path) as TextureImporter);
			((TextureImporter)obj).set_textureType(value.lastType);
			((TextureImporter)obj).set_isReadable(value.lastReadable);
			((TextureImporter)obj).set_textureCompression(value.lastCompression);
			AssetDatabase.ImportAsset(path);
		}
		ai.Clear();
		av.Clear();
	}

	private static void k()
	{
		at = 0;
		au.Clear();
		if (global::p.n && global::p.c == 1)
		{
			i();
			return;
		}
		string text = "";
		if (global::p.c == 0)
		{
			text = q + "/" + aa + ".ls";
		}
		else if (global::p.c == 1)
		{
			text = q + "/" + aa + ".lh";
		}
		global::n.a(text, j());
		av.Add(text);
	}

	private static global::g j()
	{
		//IL_00e3: Unknown result type (might be due to invalid IL or missing references)
		//IL_00e8: Unknown result type (might be due to invalid IL or missing references)
		//IL_00f4: Unknown result type (might be due to invalid IL or missing references)
		//IL_0102: Unknown result type (might be due to invalid IL or missing references)
		//IL_0110: Unknown result type (might be due to invalid IL or missing references)
		//IL_0129: Unknown result type (might be due to invalid IL or missing references)
		//IL_012f: Invalid comparison between Unknown and I4
		//IL_0192: Unknown result type (might be due to invalid IL or missing references)
		//IL_0197: Unknown result type (might be due to invalid IL or missing references)
		//IL_019b: Unknown result type (might be due to invalid IL or missing references)
		//IL_01a9: Unknown result type (might be due to invalid IL or missing references)
		//IL_01b7: Unknown result type (might be due to invalid IL or missing references)
		//IL_0231: Unknown result type (might be due to invalid IL or missing references)
		//IL_023f: Unknown result type (might be due to invalid IL or missing references)
		//IL_024d: Unknown result type (might be due to invalid IL or missing references)
		//IL_0270: Unknown result type (might be due to invalid IL or missing references)
		//IL_027e: Unknown result type (might be due to invalid IL or missing references)
		//IL_028c: Unknown result type (might be due to invalid IL or missing references)
		//IL_029a: Unknown result type (might be due to invalid IL or missing references)
		//IL_02bd: Unknown result type (might be due to invalid IL or missing references)
		//IL_02cb: Unknown result type (might be due to invalid IL or missing references)
		//IL_02d9: Unknown result type (might be due to invalid IL or missing references)
		//IL_02f2: Unknown result type (might be due to invalid IL or missing references)
		//IL_02f7: Unknown result type (might be due to invalid IL or missing references)
		global::g g = new global::g(global::g.a.d);
		global::g g2 = new global::g(global::g.a.d);
		global::g g3 = new global::g(global::g.a.d);
		g3.a("name", aa);
		if (global::p.c == 0)
		{
			g.a("version", am);
			g2.a("type", "Scene3D");
		}
		else if (global::p.c == 1)
		{
			g.a("version", an);
			g2.a("type", "Sprite3D");
			g2.d("instanceID", l());
			au.Add("scene", at - 1);
			g3.d("active", A_1: true);
		}
		g2.d("props", g3);
		g.d("data", g2);
		if (global::p.c == 0)
		{
			Material skybox = RenderSettings.get_skybox();
			if ((Object)(object)skybox != (Object)null)
			{
				a(skybox, g3);
			}
			Color ambientLight = RenderSettings.get_ambientLight();
			global::g g4 = new global::g(global::g.a.e);
			g4.d(ambientLight.r);
			g4.d(ambientLight.g);
			g4.d(ambientLight.b);
			g3.d("ambientColor", g4);
			if ((int)RenderSettings.get_defaultReflectionMode() == 1)
			{
				a(RenderSettings.get_customReflection(), g3);
				g3.d("reflectionIntensity", RenderSettings.get_reflectionIntensity());
			}
			a(g3);
			g3.d("enableFog", RenderSettings.get_fog());
			g3.d("fogStart", RenderSettings.get_fogStartDistance());
			g3.d("fogRange", RenderSettings.get_fogEndDistance() - RenderSettings.get_fogStartDistance());
			global::g g5 = new global::g(global::g.a.e);
			Color fogColor = RenderSettings.get_fogColor();
			g5.d(fogColor.r);
			g5.d(fogColor.g);
			g5.d(fogColor.b);
			g3.d("fogColor", g5);
		}
		else if (global::p.c == 1)
		{
			Vector3 val = default(Vector3);
			((Vector3)(ref val))._002Ector(0f, 0f, 0f);
			Quaternion val2 = default(Quaternion);
			((Quaternion)(ref val2))._002Ector(0f, 0f, 0f, -1f);
			Vector3 val3 = default(Vector3);
			((Vector3)(ref val3))._002Ector(1f, 1f, 1f);
			global::g g6 = new global::g(global::g.a.e);
			g6.d(val.x);
			g6.d(val.y);
			g6.d(val.z);
			g3.d("position", g6);
			global::g g7 = new global::g(global::g.a.e);
			g7.d(val2.x);
			g7.d(val2.y);
			g7.d(val2.z);
			g7.d(val2.w);
			g3.d("rotation", g7);
			global::g g8 = new global::g(global::g.a.e);
			g8.d(val3.x);
			g8.d(val3.y);
			g8.d(val3.z);
			g3.d("scale", g8);
		}
		Scene activeScene = SceneManager.GetActiveScene();
		GameObject[] rootGameObjects = ((Scene)(ref activeScene)).GetRootGameObjects();
		if (rootGameObjects.Length != 0)
		{
			global::g g9 = new global::g(global::g.a.e);
			g2.d("child", g9);
			string a_ = aa;
			for (int i = 0; i < rootGameObjects.Length; i++)
			{
				a(rootGameObjects[i].get_gameObject(), a_, g9, A_3: false, A_4: false, A_5: false);
			}
		}
		else
		{
			g2.d("child", new global::g(global::g.a.e));
		}
		return g;
	}

	private static Dictionary<string, global::g> i()
	{
		//IL_0000: Unknown result type (might be due to invalid IL or missing references)
		//IL_0005: Unknown result type (might be due to invalid IL or missing references)
		Scene activeScene = SceneManager.GetActiveScene();
		GameObject[] rootGameObjects = ((Scene)(ref activeScene)).GetRootGameObjects();
		Dictionary<string, global::g> dictionary = new Dictionary<string, global::g>();
		if (rootGameObjects.Length != 0)
		{
			for (int i = 0; i < rootGameObjects.Length; i++)
			{
				if (LayaAir3D.customExport != null && !LayaAir3D.customExport.StartEachHierarchyExport(q + "/" + a(((Object)rootGameObjects[i]).get_name(), A_1: true) + ".lh"))
				{
					continue;
				}
				List<a> list = b(rootGameObjects[i]);
				a(rootGameObjects[i], A_1: true);
				if ((rootGameObjects[i].get_activeInHierarchy() || !global::p.m) && (list.Count > 1 || w))
				{
					global::g g = new global::g(global::g.a.d);
					g.a("version", an);
					string a_ = aa;
					a(rootGameObjects[i].get_gameObject(), a_, g, A_3: false, A_4: false, A_5: true);
					string text;
					if (dictionary.ContainsKey(((Object)rootGameObjects[i]).get_name()))
					{
						text = q + "/" + ((Object)rootGameObjects[i]).get_name() + dictionary.Count.ToString() + ".lh";
						global::n.a(text, g);
					}
					else
					{
						text = q + "/" + ((Object)rootGameObjects[i]).get_name() + ".lh";
						global::n.a(text, g);
					}
					if (LayaAir3D.customExport != null)
					{
						LayaAir3D.customExport.EndEachHierarchyExport(text);
					}
				}
			}
		}
		return dictionary;
	}

	private static void a(GameObject A_0, string A_1, global::g A_2, bool A_3 = false, bool A_4 = false, bool A_5 = false)
	{
		//IL_0096: Unknown result type (might be due to invalid IL or missing references)
		//IL_009b: Unknown result type (might be due to invalid IL or missing references)
		//IL_00a2: Unknown result type (might be due to invalid IL or missing references)
		//IL_00a7: Unknown result type (might be due to invalid IL or missing references)
		//IL_00af: Unknown result type (might be due to invalid IL or missing references)
		//IL_00b4: Unknown result type (might be due to invalid IL or missing references)
		//IL_00bc: Unknown result type (might be due to invalid IL or missing references)
		//IL_00bd: Unknown result type (might be due to invalid IL or missing references)
		//IL_00bf: Unknown result type (might be due to invalid IL or missing references)
		List<a> list = b(A_0);
		a(A_0, A_1: true);
		if ((!A_0.get_activeSelf() && global::p.m) || (list.Count < 1 && !w) || (list.Count < 1 && A_3) || (list.IndexOf(global::p.a.c) != -1 && ad >= ac) || (list.IndexOf(global::p.a.d) != -1 && af >= ae) || (list.IndexOf(global::p.a.e) != -1 && ah >= ag))
		{
			return;
		}
		global::g g = new global::g(global::g.a.d);
		global::g g2 = new global::g(global::g.a.e);
		Vector3 localPosition = A_0.get_transform().get_localPosition();
		Quaternion localRotation = A_0.get_transform().get_localRotation();
		Vector3 localScale = A_0.get_transform().get_localScale();
		string A_6 = A_1;
		a(A_0, g, g2, localPosition, localRotation, localScale, ref A_6);
		c(A_0, A_1: true);
		if (A_0.get_transform().get_childCount() > 0 && !A_4)
		{
			for (int i = 0; i < A_0.get_transform().get_childCount(); i++)
			{
				a(((Component)A_0.get_transform().GetChild(i)).get_gameObject(), A_6, g2, A_3: false, A_4: false, A_5: false);
			}
		}
		g.d("child", g2);
		if (A_5)
		{
			A_2.d("data", g);
		}
		else
		{
			A_2.f(g);
		}
	}

	private static void a(GameObject A_0, string A_1, global::g A_2)
	{
		//IL_00d3: Unknown result type (might be due to invalid IL or missing references)
		//IL_00df: Unknown result type (might be due to invalid IL or missing references)
		//IL_00e4: Unknown result type (might be due to invalid IL or missing references)
		//IL_00e9: Unknown result type (might be due to invalid IL or missing references)
		//IL_00ee: Unknown result type (might be due to invalid IL or missing references)
		//IL_00f3: Unknown result type (might be due to invalid IL or missing references)
		//IL_00f8: Unknown result type (might be due to invalid IL or missing references)
		//IL_00fd: Unknown result type (might be due to invalid IL or missing references)
		//IL_0102: Unknown result type (might be due to invalid IL or missing references)
		//IL_010a: Unknown result type (might be due to invalid IL or missing references)
		//IL_010f: Unknown result type (might be due to invalid IL or missing references)
		//IL_0114: Unknown result type (might be due to invalid IL or missing references)
		//IL_0119: Unknown result type (might be due to invalid IL or missing references)
		//IL_0120: Unknown result type (might be due to invalid IL or missing references)
		//IL_0125: Unknown result type (might be due to invalid IL or missing references)
		//IL_0131: Unknown result type (might be due to invalid IL or missing references)
		//IL_0136: Unknown result type (might be due to invalid IL or missing references)
		//IL_0142: Unknown result type (might be due to invalid IL or missing references)
		//IL_0147: Unknown result type (might be due to invalid IL or missing references)
		//IL_0157: Unknown result type (might be due to invalid IL or missing references)
		//IL_0170: Unknown result type (might be due to invalid IL or missing references)
		//IL_0172: Unknown result type (might be due to invalid IL or missing references)
		//IL_0174: Unknown result type (might be due to invalid IL or missing references)
		List<a> list = b(A_0);
		Transform[] componentsInChildren = A_0.GetComponentsInChildren<Transform>();
		Vector3 A_5 = default(Vector3);
		for (int i = 0; i < componentsInChildren.Length; i++)
		{
			global::g g = new global::g(global::g.a.d);
			global::g g2 = new global::g(global::g.a.e);
			GameObject gameObject = ((Component)componentsInChildren[i]).get_gameObject();
			List<a> list2 = b(gameObject);
			a(gameObject, A_1: true);
			if (!((Object)(object)gameObject == (Object)(object)A_0) && (gameObject.get_activeInHierarchy() || !global::p.m) && !((Object)(object)a(gameObject, global::p.a.i) != (Object)null) && (list.IndexOf(global::p.a.c) == -1 || ad < ac))
			{
				if ((list.IndexOf(global::p.a.d) != -1 && af >= ae) || (list.IndexOf(global::p.a.e) != -1 && ah >= ag))
				{
					break;
				}
				if (list2.Count > 1 || w)
				{
					Matrix4x4 val = A_0.get_transform().get_worldToLocalMatrix() * gameObject.get_transform().get_localToWorldMatrix();
					Vector3 A_3 = Vector4.op_Implicit(((Matrix4x4)(ref val)).GetColumn(3));
					Quaternion A_4 = Quaternion.LookRotation(Vector4.op_Implicit(((Matrix4x4)(ref val)).GetColumn(2)), Vector4.op_Implicit(((Matrix4x4)(ref val)).GetColumn(1)));
					Vector4 column = ((Matrix4x4)(ref val)).GetColumn(0);
					float magnitude = ((Vector4)(ref column)).get_magnitude();
					column = ((Matrix4x4)(ref val)).GetColumn(1);
					float magnitude2 = ((Vector4)(ref column)).get_magnitude();
					column = ((Matrix4x4)(ref val)).GetColumn(2);
					((Vector3)(ref A_5))._002Ector(magnitude, magnitude2, ((Vector4)(ref column)).get_magnitude());
					global::o.a(((Matrix4x4)(ref val)).get_transpose(), out A_5, out A_4, out A_3);
					string A_6 = A_1;
					a(gameObject, g, g2, A_3, A_4, A_5, ref A_6);
					g.d("child", g2);
					A_2.f(g);
				}
			}
		}
	}

	private static void a(Dictionary<GameObject, global::g> A_0, GameObject A_1, GameObject A_2, string A_3, global::g A_4, List<string> A_5 = null)
	{
		//IL_0049: Unknown result type (might be due to invalid IL or missing references)
		//IL_0054: Unknown result type (might be due to invalid IL or missing references)
		//IL_0059: Unknown result type (might be due to invalid IL or missing references)
		//IL_005e: Unknown result type (might be due to invalid IL or missing references)
		//IL_0062: Unknown result type (might be due to invalid IL or missing references)
		//IL_0067: Unknown result type (might be due to invalid IL or missing references)
		//IL_006c: Unknown result type (might be due to invalid IL or missing references)
		//IL_0071: Unknown result type (might be due to invalid IL or missing references)
		//IL_0076: Unknown result type (might be due to invalid IL or missing references)
		//IL_007e: Unknown result type (might be due to invalid IL or missing references)
		//IL_0083: Unknown result type (might be due to invalid IL or missing references)
		//IL_0088: Unknown result type (might be due to invalid IL or missing references)
		//IL_008d: Unknown result type (might be due to invalid IL or missing references)
		//IL_0094: Unknown result type (might be due to invalid IL or missing references)
		//IL_0099: Unknown result type (might be due to invalid IL or missing references)
		//IL_00a5: Unknown result type (might be due to invalid IL or missing references)
		//IL_00aa: Unknown result type (might be due to invalid IL or missing references)
		//IL_00b6: Unknown result type (might be due to invalid IL or missing references)
		//IL_00bb: Unknown result type (might be due to invalid IL or missing references)
		//IL_00cb: Unknown result type (might be due to invalid IL or missing references)
		//IL_00e2: Unknown result type (might be due to invalid IL or missing references)
		//IL_00e4: Unknown result type (might be due to invalid IL or missing references)
		//IL_00e6: Unknown result type (might be due to invalid IL or missing references)
		//IL_01e6: Unknown result type (might be due to invalid IL or missing references)
		//IL_01f1: Unknown result type (might be due to invalid IL or missing references)
		//IL_01f6: Unknown result type (might be due to invalid IL or missing references)
		//IL_01fb: Unknown result type (might be due to invalid IL or missing references)
		//IL_0200: Unknown result type (might be due to invalid IL or missing references)
		//IL_0205: Unknown result type (might be due to invalid IL or missing references)
		//IL_020a: Unknown result type (might be due to invalid IL or missing references)
		//IL_020f: Unknown result type (might be due to invalid IL or missing references)
		//IL_0214: Unknown result type (might be due to invalid IL or missing references)
		//IL_021c: Unknown result type (might be due to invalid IL or missing references)
		//IL_0221: Unknown result type (might be due to invalid IL or missing references)
		//IL_0226: Unknown result type (might be due to invalid IL or missing references)
		//IL_022b: Unknown result type (might be due to invalid IL or missing references)
		//IL_0232: Unknown result type (might be due to invalid IL or missing references)
		//IL_0237: Unknown result type (might be due to invalid IL or missing references)
		//IL_0243: Unknown result type (might be due to invalid IL or missing references)
		//IL_0248: Unknown result type (might be due to invalid IL or missing references)
		//IL_0254: Unknown result type (might be due to invalid IL or missing references)
		//IL_0259: Unknown result type (might be due to invalid IL or missing references)
		//IL_0269: Unknown result type (might be due to invalid IL or missing references)
		//IL_0282: Unknown result type (might be due to invalid IL or missing references)
		//IL_0284: Unknown result type (might be due to invalid IL or missing references)
		//IL_0286: Unknown result type (might be due to invalid IL or missing references)
		List<a> list = b(A_2);
		a(A_2, A_1: true);
		Vector4 column;
		if (list.Count > 1 && (Object)(object)((Component)A_2.get_transform().get_parent()).get_gameObject() == (Object)(object)A_1)
		{
			global::g g = new global::g(global::g.a.d);
			global::g g2 = new global::g(global::g.a.e);
			Matrix4x4 val = A_1.get_transform().get_worldToLocalMatrix() * A_2.get_transform().get_localToWorldMatrix();
			Vector3 A_6 = Vector4.op_Implicit(((Matrix4x4)(ref val)).GetColumn(3));
			Quaternion A_7 = Quaternion.LookRotation(Vector4.op_Implicit(((Matrix4x4)(ref val)).GetColumn(2)), Vector4.op_Implicit(((Matrix4x4)(ref val)).GetColumn(1)));
			column = ((Matrix4x4)(ref val)).GetColumn(0);
			float magnitude = ((Vector4)(ref column)).get_magnitude();
			column = ((Matrix4x4)(ref val)).GetColumn(1);
			float magnitude2 = ((Vector4)(ref column)).get_magnitude();
			column = ((Matrix4x4)(ref val)).GetColumn(2);
			Vector3 A_8 = default(Vector3);
			((Vector3)(ref A_8))._002Ector(magnitude, magnitude2, ((Vector4)(ref column)).get_magnitude());
			global::o.a(((Matrix4x4)(ref val)).get_transpose(), out A_8, out A_7, out A_6);
			string A_9 = A_3;
			a(A_2, g, g2, A_6, A_7, A_8, ref A_9);
			for (int i = 0; i < A_2.get_transform().get_childCount(); i++)
			{
				a(((Component)A_2.get_transform().GetChild(i)).get_gameObject(), A_3, g2, A_3: true);
			}
			g.d("child", g2);
			A_4.f(g);
		}
		else if (list.Count <= 1)
		{
			int childCount = A_2.get_transform().get_childCount();
			if (childCount != 0)
			{
				for (int j = 0; j < childCount; j++)
				{
					a(A_0, A_1, ((Component)A_2.get_transform().GetChild(j)).get_gameObject(), A_3, A_4, A_5);
				}
			}
		}
		else
		{
			if (!A_2.get_activeSelf() && global::p.m)
			{
				return;
			}
			if (A_5 != null && A_5.IndexOf(((Object)A_2).get_name()) == -1 && (Object)(object)A_2.GetComponent<SkinnedMeshRenderer>() == (Object)null)
			{
				A_5.Add(((Object)A_2).get_name());
			}
			if (!A_0.ContainsKey(A_2))
			{
				global::g g3 = new global::g(global::g.a.e);
				global::g g4 = new global::g(global::g.a.d);
				Matrix4x4 val2 = A_1.get_transform().get_worldToLocalMatrix() * A_2.get_transform().get_localToWorldMatrix();
				Vector3 A_10 = Vector4.op_Implicit(((Matrix4x4)(ref val2)).GetColumn(3));
				Quaternion A_11 = Quaternion.LookRotation(Vector4.op_Implicit(((Matrix4x4)(ref val2)).GetColumn(2)), Vector4.op_Implicit(((Matrix4x4)(ref val2)).GetColumn(1)));
				column = ((Matrix4x4)(ref val2)).GetColumn(0);
				float magnitude3 = ((Vector4)(ref column)).get_magnitude();
				column = ((Matrix4x4)(ref val2)).GetColumn(1);
				float magnitude4 = ((Vector4)(ref column)).get_magnitude();
				column = ((Matrix4x4)(ref val2)).GetColumn(2);
				Vector3 A_12 = default(Vector3);
				((Vector3)(ref A_12))._002Ector(magnitude3, magnitude4, ((Vector4)(ref column)).get_magnitude());
				global::o.a(((Matrix4x4)(ref val2)).get_transpose(), out A_12, out A_11, out A_10);
				string A_13 = A_3;
				a(A_2, g4, g3, A_10, A_11, A_12, ref A_13);
				g4.d("child", g3);
				A_4.f(g4);
				A_0.Add(A_2, g4);
			}
			else
			{
				global::g a_ = A_0[A_2].n("child");
				a(A_2, A_3, a_, A_3: true);
			}
			if (!((Object)(object)A_2.GetComponent<Animator>() == (Object)null))
			{
				return;
			}
			int childCount2 = A_2.get_transform().get_childCount();
			if (childCount2 != 0)
			{
				for (int k = 0; k < childCount2; k++)
				{
					a(A_0, A_1, ((Component)A_2.get_transform().GetChild(k)).get_gameObject(), A_3, A_4, A_5);
				}
			}
		}
	}

	private static void a(GameObject A_0, string A_1, global::g A_2, List<string> A_3 = null)
	{
		Dictionary<GameObject, global::g> a_ = new Dictionary<GameObject, global::g>();
		int childCount = A_0.get_transform().get_childCount();
		for (int i = 0; i < childCount; i++)
		{
			if (!global::p.m || ((Component)A_0.get_transform().GetChild(i)).get_gameObject().get_activeSelf())
			{
				a(a_, A_0, ((Component)A_0.get_transform().GetChild(i)).get_gameObject(), A_1, A_2, A_3);
			}
		}
	}

	private static void a(GameObject A_0, global::g A_1, global::g A_2, Vector3 A_3, Quaternion A_4, Vector3 A_5, ref string A_6)
	{
		//IL_0244: Unknown result type (might be due to invalid IL or missing references)
		//IL_0249: Unknown result type (might be due to invalid IL or missing references)
		//IL_0272: Unknown result type (might be due to invalid IL or missing references)
		//IL_0274: Unknown result type (might be due to invalid IL or missing references)
		//IL_0276: Invalid comparison between Unknown and I4
		//IL_02d2: Unknown result type (might be due to invalid IL or missing references)
		//IL_02d3: Unknown result type (might be due to invalid IL or missing references)
		//IL_02d5: Unknown result type (might be due to invalid IL or missing references)
		List<a> list = b(A_0);
		global::g g = new global::g(global::g.a.d);
		global::g a_ = new global::g(global::g.a.e);
		A_1.a("type", "");
		if (list.IndexOf(global::p.a.a) != -1)
		{
			A_1.d("type", "Sprite3D");
		}
		if (list.IndexOf(global::p.a.l) != -1)
		{
			A_1.d("type", "Sprite3D");
		}
		if (list.IndexOf(global::p.a.m) != -1)
		{
			A_1.d("type", "Sprite3D");
		}
		if (list.IndexOf(global::p.a.i) != -1)
		{
			A_1.d("type", "Sprite3D");
		}
		if (list.IndexOf(global::p.a.c) != -1)
		{
			A_1.d("type", "DirectionLight");
		}
		if (list.IndexOf(global::p.a.d) != -1)
		{
			A_1.d("type", "PointLight");
		}
		if (list.IndexOf(global::p.a.e) != -1)
		{
			A_1.d("type", "SpotLight");
		}
		if (list.IndexOf(global::p.a.b) != -1)
		{
			A_1.d("type", "Camera");
		}
		if (list.IndexOf(global::p.a.f) != -1)
		{
			A_1.d("type", "MeshSprite3D");
		}
		if (list.IndexOf(global::p.a.g) != -1)
		{
			A_1.d("type", "MeshSprite3D");
		}
		if (list.IndexOf(global::p.a.h) != -1)
		{
			A_1.d("type", "SkinnedMeshSprite3D");
		}
		if (list.IndexOf(global::p.a.j) != -1)
		{
			A_1.d("type", "ShuriKenParticle3D");
		}
		if (list.IndexOf(global::p.a.k) != -1)
		{
			if (global::p.k)
			{
				A_1.d("type", "MeshSprite3D");
			}
			else
			{
				A_1.d("type", "Terrain");
			}
		}
		if (list.IndexOf(global::p.a.n) != -1)
		{
			A_1.d("type", "TrailSprite3D");
		}
		if (list.IndexOf(global::p.a.o) != -1)
		{
			A_1.d("type", "LineSprite3D");
		}
		if (au.ContainsKey(((Object)A_0).GetInstanceID().ToString()))
		{
			A_1.d("instanceID", au[((Object)A_0).GetInstanceID().ToString()]);
		}
		else
		{
			A_1.d("instanceID", l());
			au.Add(((Object)A_0).GetInstanceID().ToString(), at - 1);
		}
		A_1.d("props", g);
		StaticEditorFlags staticEditorFlags = GameObjectUtility.GetStaticEditorFlags(A_0);
		g.a("name", ((Object)A_0).get_name());
		g.d("active", A_0.get_activeSelf());
		g.d("isStatic", (staticEditorFlags & 4) > 0);
		A_6 = A_6 + "/" + ((Object)A_0).get_name();
		if (A_0.get_layer() == 31)
		{
			Debug.LogWarning((object)"LayaUnityPlugin : layer must less than 31 !");
		}
		else
		{
			g.d("layer", A_0.get_layer());
		}
		A_1.d("components", a_);
		if (list.IndexOf(global::p.a.a) != -1)
		{
			a(A_0, g, A_3, A_4, A_5);
		}
		if (list.IndexOf(global::p.a.m) != -1)
		{
			e(A_0, a_);
		}
		if (list.IndexOf(global::p.a.l) != -1)
		{
			f(A_0, a_);
		}
		if (list.IndexOf(global::p.a.i) != -1)
		{
			A_0.GetComponent<Animator>().get_avatar();
			List<string> a_2 = new List<string>();
			a(A_0, a_, a_2);
		}
		if (list.IndexOf(global::p.a.c) != -1)
		{
			n(A_0, g);
		}
		if (list.IndexOf(global::p.a.d) != -1)
		{
			m(A_0, g);
		}
		if (list.IndexOf(global::p.a.e) != -1)
		{
			l(A_0, g);
		}
		if (list.IndexOf(global::p.a.b) != -1)
		{
			o(A_0, g);
		}
		if (list.IndexOf(global::p.a.f) != -1)
		{
			k(A_0, g);
		}
		if (list.IndexOf(global::p.a.g) != -1)
		{
			j(A_0, g);
		}
		if (list.IndexOf(global::p.a.h) != -1)
		{
			i(A_0, g);
		}
		if (list.IndexOf(global::p.a.j) != -1)
		{
			h(A_0, g);
		}
		if (list.IndexOf(global::p.a.k) != -1)
		{
			global::p.g(A_0, g);
		}
		if (list.IndexOf(global::p.a.n) != -1)
		{
			d(A_0, g);
		}
		if (list.IndexOf(global::p.a.o) != -1)
		{
			c(A_0, g);
		}
	}

	private static void a(GameObject A_0, global::g A_1, Vector3 A_2, Quaternion A_3, Vector3 A_4)
	{
		//IL_0041: Unknown result type (might be due to invalid IL or missing references)
		//IL_0053: Unknown result type (might be due to invalid IL or missing references)
		//IL_005f: Unknown result type (might be due to invalid IL or missing references)
		//IL_0096: Unknown result type (might be due to invalid IL or missing references)
		//IL_00ab: Unknown result type (might be due to invalid IL or missing references)
		//IL_00b0: Unknown result type (might be due to invalid IL or missing references)
		//IL_00b5: Unknown result type (might be due to invalid IL or missing references)
		//IL_00b8: Unknown result type (might be due to invalid IL or missing references)
		//IL_00ca: Unknown result type (might be due to invalid IL or missing references)
		//IL_00d6: Unknown result type (might be due to invalid IL or missing references)
		//IL_00e2: Unknown result type (might be due to invalid IL or missing references)
		//IL_00f4: Unknown result type (might be due to invalid IL or missing references)
		//IL_0101: Unknown result type (might be due to invalid IL or missing references)
		//IL_010e: Unknown result type (might be due to invalid IL or missing references)
		global::g g = new global::g(global::g.a.e);
		global::g g2 = new global::g(global::g.a.e);
		global::g g3 = new global::g(global::g.a.e);
		A_1.d("position", g);
		A_1.d("rotation", g2);
		A_1.d("scale", g3);
		List<a> list = b(A_0);
		g.d(A_2.x * -1f);
		g.d(A_2.y);
		g.d(A_2.z);
		if (list.IndexOf(global::p.a.k) == -1)
		{
			if (list.IndexOf(global::p.a.b) != -1 || list.IndexOf(global::p.a.c) != -1 || list.IndexOf(global::p.a.e) != -1)
			{
				A_3 *= new Quaternion(0f, 1f, 0f, 0f);
			}
			g2.d(A_3.x * -1f);
			g2.d(A_3.y);
			g2.d(A_3.z);
			g2.d(A_3.w * -1f);
			g3.d(A_4.x);
			g3.d(A_4.y);
			g3.d(A_4.z);
		}
		else
		{
			g2.d(0);
			g2.d(0);
			g2.d(0);
			g2.d(-1);
			g3.d(1);
			g3.d(1);
			g3.d(1);
		}
	}

	private static void o(GameObject A_0, global::g A_1)
	{
		//IL_0008: Unknown result type (might be due to invalid IL or missing references)
		//IL_000e: Invalid comparison between Unknown and I4
		//IL_001f: Unknown result type (might be due to invalid IL or missing references)
		//IL_0025: Invalid comparison between Unknown and I4
		//IL_0028: Unknown result type (might be due to invalid IL or missing references)
		//IL_002e: Invalid comparison between Unknown and I4
		//IL_003f: Unknown result type (might be due to invalid IL or missing references)
		//IL_0045: Invalid comparison between Unknown and I4
		//IL_00d5: Unknown result type (might be due to invalid IL or missing references)
		//IL_00da: Unknown result type (might be due to invalid IL or missing references)
		//IL_0123: Unknown result type (might be due to invalid IL or missing references)
		//IL_0128: Unknown result type (might be due to invalid IL or missing references)
		//IL_012b: Unknown result type (might be due to invalid IL or missing references)
		//IL_0138: Unknown result type (might be due to invalid IL or missing references)
		//IL_0145: Unknown result type (might be due to invalid IL or missing references)
		//IL_0152: Unknown result type (might be due to invalid IL or missing references)
		Camera component = A_0.GetComponent<Camera>();
		if ((int)component.get_clearFlags() == 1)
		{
			A_1.d("clearFlag", 1);
		}
		else if ((int)component.get_clearFlags() == 2 || (int)component.get_clearFlags() == 2)
		{
			A_1.d("clearFlag", 0);
		}
		else if ((int)component.get_clearFlags() == 3)
		{
			A_1.d("clearFlag", 2);
		}
		else
		{
			A_1.d("clearFlag", 3);
		}
		A_1.d("orthographic", component.get_orthographic());
		A_1.d("orthographicVerticalSize", component.get_orthographicSize() * 2f);
		A_1.d("fieldOfView", component.get_fieldOfView());
		A_1.d("enableHDR", component.get_allowHDR());
		A_1.d("nearPlane", component.get_nearClipPlane());
		A_1.d("farPlane", component.get_farClipPlane());
		global::g g = new global::g(global::g.a.e);
		Rect rect = component.get_rect();
		g.d(((Rect)(ref rect)).get_x());
		g.d(((Rect)(ref rect)).get_y());
		g.d(((Rect)(ref rect)).get_width());
		g.d(((Rect)(ref rect)).get_height());
		A_1.d("viewport", g);
		global::g g2 = new global::g(global::g.a.e);
		Color backgroundColor = component.get_backgroundColor();
		g2.d(backgroundColor.r);
		g2.d(backgroundColor.g);
		g2.d(backgroundColor.b);
		g2.d(backgroundColor.a);
		A_1.d("clearColor", g2);
		Skybox[] components = A_0.GetComponents<Skybox>();
		if (components.Length == 0)
		{
			return;
		}
		int num = 0;
		Material material;
		while (true)
		{
			if (num >= components.Length)
			{
				return;
			}
			Skybox val = components[num];
			if (((Behaviour)val).get_enabled())
			{
				material = val.get_material();
				if ((Object)(object)material != (Object)null)
				{
					break;
				}
			}
			num++;
		}
		a(material, A_1);
	}

	private static void n(GameObject A_0, global::g A_1)
	{
		//IL_0019: Unknown result type (might be due to invalid IL or missing references)
		//IL_001e: Unknown result type (might be due to invalid IL or missing references)
		//IL_001f: Unknown result type (might be due to invalid IL or missing references)
		//IL_0021: Unknown result type (might be due to invalid IL or missing references)
		//IL_0037: Expected I4, but got Unknown
		//IL_0077: Unknown result type (might be due to invalid IL or missing references)
		//IL_007c: Unknown result type (might be due to invalid IL or missing references)
		//IL_007e: Unknown result type (might be due to invalid IL or missing references)
		//IL_008a: Unknown result type (might be due to invalid IL or missing references)
		//IL_0096: Unknown result type (might be due to invalid IL or missing references)
		Light component = A_0.GetComponent<Light>();
		A_1.d("intensity", component.get_intensity());
		LightmapBakeType lightmapBakeType = component.get_lightmapBakeType();
		switch (lightmapBakeType - 1)
		{
		case 3:
			A_1.d("lightmapBakedType", 0);
			break;
		case 0:
			A_1.d("lightmapBakedType", 1);
			break;
		case 1:
			A_1.d("lightmapBakedType", 2);
			break;
		default:
			A_1.d("lightmapBakedType", 0);
			break;
		}
		global::g g = new global::g(global::g.a.e);
		Color color = component.get_color();
		g.d(color.r);
		g.d(color.g);
		g.d(color.b);
		A_1.d("color", g);
		ad++;
	}

	private static void m(GameObject A_0, global::g A_1)
	{
		//IL_0019: Unknown result type (might be due to invalid IL or missing references)
		//IL_001e: Unknown result type (might be due to invalid IL or missing references)
		//IL_001f: Unknown result type (might be due to invalid IL or missing references)
		//IL_0021: Unknown result type (might be due to invalid IL or missing references)
		//IL_0037: Expected I4, but got Unknown
		//IL_0088: Unknown result type (might be due to invalid IL or missing references)
		//IL_008d: Unknown result type (might be due to invalid IL or missing references)
		//IL_008f: Unknown result type (might be due to invalid IL or missing references)
		//IL_009b: Unknown result type (might be due to invalid IL or missing references)
		//IL_00a7: Unknown result type (might be due to invalid IL or missing references)
		Light component = A_0.GetComponent<Light>();
		A_1.d("intensity", component.get_intensity());
		LightmapBakeType lightmapBakeType = component.get_lightmapBakeType();
		switch (lightmapBakeType - 1)
		{
		case 3:
			A_1.d("lightmapBakedType", 0);
			break;
		case 0:
			A_1.d("lightmapBakedType", 1);
			break;
		case 1:
			A_1.d("lightmapBakedType", 2);
			break;
		default:
			A_1.d("lightmapBakedType", 0);
			break;
		}
		A_1.d("range", component.get_range());
		global::g g = new global::g(global::g.a.e);
		Color color = component.get_color();
		g.d(color.r);
		g.d(color.g);
		g.d(color.b);
		A_1.d("color", g);
		af++;
	}

	private static void l(GameObject A_0, global::g A_1)
	{
		//IL_0019: Unknown result type (might be due to invalid IL or missing references)
		//IL_001e: Unknown result type (might be due to invalid IL or missing references)
		//IL_001f: Unknown result type (might be due to invalid IL or missing references)
		//IL_0021: Unknown result type (might be due to invalid IL or missing references)
		//IL_0037: Expected I4, but got Unknown
		//IL_0099: Unknown result type (might be due to invalid IL or missing references)
		//IL_009e: Unknown result type (might be due to invalid IL or missing references)
		//IL_00a0: Unknown result type (might be due to invalid IL or missing references)
		//IL_00ac: Unknown result type (might be due to invalid IL or missing references)
		//IL_00b8: Unknown result type (might be due to invalid IL or missing references)
		Light component = A_0.GetComponent<Light>();
		A_1.d("intensity", component.get_intensity());
		LightmapBakeType lightmapBakeType = component.get_lightmapBakeType();
		switch (lightmapBakeType - 1)
		{
		case 3:
			A_1.d("lightmapBakedType", 0);
			break;
		case 0:
			A_1.d("lightmapBakedType", 1);
			break;
		case 1:
			A_1.d("lightmapBakedType", 2);
			break;
		default:
			A_1.d("lightmapBakedType", 0);
			break;
		}
		A_1.d("range", component.get_range());
		A_1.d("spotAngle", component.get_spotAngle());
		global::g g = new global::g(global::g.a.e);
		Color color = component.get_color();
		g.d(color.r);
		g.d(color.g);
		g.d(color.b);
		A_1.d("color", g);
		ah++;
	}

	private static void k(GameObject A_0, global::g A_1)
	{
		Mesh sharedMesh = A_0.GetComponent<MeshFilter>().get_sharedMesh();
		if ((Object)(object)sharedMesh != (Object)null)
		{
			string str = a(((Object)sharedMesh).get_name(), A_1: true);
			string str2 = a(AssetDatabase.GetAssetPath(((Object)sharedMesh).GetInstanceID()).Split('.')[0], A_1: false) + "-" + str;
			str2 += ".lm";
			string key = q + "/" + str2;
			while (true)
			{
				if (aj.ContainsKey(key))
				{
					if (!((Object)(object)aj[key] != (Object)(object)sharedMesh))
					{
						break;
					}
					str2 = str2.Remove(str2.Length - 3, 3);
					str2 += "-copy.lm";
					key = q + "/" + str2;
					continue;
				}
				aj.Add(key, sharedMesh);
				break;
			}
			A_1.a("meshPath", str2);
		}
		else
		{
			Debug.LogWarning((object)("LayaAir3D Warning(Code:1001) : " + ((Object)A_0).get_name() + "'s MeshFilter Component Mesh data can't be null!"));
		}
	}

	private static void j(GameObject A_0, global::g A_1)
	{
		//IL_003d: Unknown result type (might be due to invalid IL or missing references)
		//IL_004e: Unknown result type (might be due to invalid IL or missing references)
		//IL_005f: Unknown result type (might be due to invalid IL or missing references)
		//IL_0070: Unknown result type (might be due to invalid IL or missing references)
		MeshRenderer component = A_0.GetComponent<MeshRenderer>();
		global::g g = new global::g(global::g.a.e);
		if (global::p.c == 0 && ((Renderer)component).get_lightmapIndex() > -1)
		{
			A_1.d("lightmapIndex", ((Renderer)component).get_lightmapIndex());
			A_1.d("lightmapScaleOffset", g);
			g.d(((Renderer)component).get_lightmapScaleOffset().x);
			g.d(((Renderer)component).get_lightmapScaleOffset().y);
			g.d(((Renderer)component).get_lightmapScaleOffset().z);
			g.d(((Renderer)component).get_lightmapScaleOffset().w);
		}
		bool enabled = ((Renderer)component).get_enabled();
		A_1.d("enableRender", enabled);
		Material[] sharedMaterials = ((Renderer)component).get_sharedMaterials();
		global::g g2 = new global::g(global::g.a.e);
		A_1.d("materials", g2);
		a(A_0, sharedMaterials, g2);
	}

	private static void i(GameObject A_0, global::g A_1)
	{
		//IL_00d5: Unknown result type (might be due to invalid IL or missing references)
		//IL_00da: Unknown result type (might be due to invalid IL or missing references)
		//IL_00dd: Unknown result type (might be due to invalid IL or missing references)
		//IL_00e2: Unknown result type (might be due to invalid IL or missing references)
		//IL_00e5: Unknown result type (might be due to invalid IL or missing references)
		//IL_00ec: Unknown result type (might be due to invalid IL or missing references)
		//IL_00f2: Unknown result type (might be due to invalid IL or missing references)
		//IL_00ff: Unknown result type (might be due to invalid IL or missing references)
		//IL_0104: Unknown result type (might be due to invalid IL or missing references)
		//IL_0106: Unknown result type (might be due to invalid IL or missing references)
		//IL_0107: Unknown result type (might be due to invalid IL or missing references)
		//IL_0109: Unknown result type (might be due to invalid IL or missing references)
		//IL_010e: Unknown result type (might be due to invalid IL or missing references)
		//IL_0110: Unknown result type (might be due to invalid IL or missing references)
		//IL_0111: Unknown result type (might be due to invalid IL or missing references)
		//IL_0113: Unknown result type (might be due to invalid IL or missing references)
		//IL_0118: Unknown result type (might be due to invalid IL or missing references)
		//IL_011a: Unknown result type (might be due to invalid IL or missing references)
		//IL_011c: Unknown result type (might be due to invalid IL or missing references)
		//IL_014a: Unknown result type (might be due to invalid IL or missing references)
		//IL_0158: Unknown result type (might be due to invalid IL or missing references)
		//IL_0166: Unknown result type (might be due to invalid IL or missing references)
		//IL_018a: Unknown result type (might be due to invalid IL or missing references)
		//IL_0198: Unknown result type (might be due to invalid IL or missing references)
		//IL_01a6: Unknown result type (might be due to invalid IL or missing references)
		//IL_01df: Unknown result type (might be due to invalid IL or missing references)
		//IL_01ec: Unknown result type (might be due to invalid IL or missing references)
		//IL_01f9: Unknown result type (might be due to invalid IL or missing references)
		SkinnedMeshRenderer component = A_0.GetComponent<SkinnedMeshRenderer>();
		if (Object.op_Implicit((Object)(object)component.get_rootBone()))
		{
			if (au.ContainsKey(((Object)((Component)component.get_rootBone()).get_gameObject()).GetInstanceID().ToString()))
			{
				A_1.d("rootBone", au[((Object)((Component)component.get_rootBone()).get_gameObject()).GetInstanceID().ToString()]);
			}
			else
			{
				au.Add(((Object)((Component)component.get_rootBone()).get_gameObject()).GetInstanceID().ToString(), l());
				A_1.d("rootBone", au[((Object)((Component)component.get_rootBone()).get_gameObject()).GetInstanceID().ToString()]);
			}
		}
		else
		{
			A_1.a("rootBone", "");
		}
		Bounds localBounds = component.get_localBounds();
		Vector3 center = ((Bounds)(ref localBounds)).get_center();
		Vector3 val = default(Vector3);
		((Vector3)(ref val))._002Ector(0f - center.x, center.y, center.z);
		Vector3 extents = ((Bounds)(ref localBounds)).get_extents();
		Vector3 val2 = val - extents;
		Vector3 val3 = val + extents;
		float a_ = Vector3.Distance(val2, val3) / 2f;
		global::g g = new global::g(global::g.a.d);
		A_1.d("boundBox", g);
		global::g g2 = new global::g(global::g.a.e);
		g2.d(val2.x);
		g2.d(val2.y);
		g2.d(val2.z);
		g.d("min", g2);
		global::g g3 = new global::g(global::g.a.e);
		g3.d(val3.x);
		g3.d(val3.y);
		g3.d(val3.z);
		g.d("max", g3);
		global::g g4 = new global::g(global::g.a.d);
		A_1.d("boundSphere", g4);
		global::g g5 = new global::g(global::g.a.e);
		g5.d(val.x);
		g5.d(val.y);
		g5.d(val.z);
		g4.d("center", g5);
		g4.d("radius", a_);
		global::g g6 = new global::g(global::g.a.e);
		A_1.d("bones", g6);
		Transform[] bones = component.get_bones();
		for (int i = 0; i < bones.Length; i++)
		{
			if (au.ContainsKey(((Object)((Component)bones[i]).get_gameObject()).GetInstanceID().ToString()))
			{
				g6.d(au[((Object)((Component)bones[i]).get_gameObject()).GetInstanceID().ToString()]);
				continue;
			}
			au.Add(((Object)((Component)bones[i]).get_gameObject()).GetInstanceID().ToString(), l());
			g6.d(au[((Object)((Component)bones[i]).get_gameObject()).GetInstanceID().ToString()]);
		}
		Material[] sharedMaterials = ((Renderer)component).get_sharedMaterials();
		global::g g7 = new global::g(global::g.a.e);
		A_1.d("materials", g7);
		a(A_0, sharedMaterials, g7);
		Mesh sharedMesh = component.get_sharedMesh();
		if ((Object)(object)sharedMesh != (Object)null)
		{
			string str = a(((Object)sharedMesh).get_name(), A_1: true);
			string str2 = a(AssetDatabase.GetAssetPath(((Object)sharedMesh).GetInstanceID()).Split('.')[0], A_1: false) + "-" + str;
			str2 += ".lm";
			string key = q + "/" + str2;
			while (true)
			{
				if (ak.ContainsKey(key))
				{
					if (!((Object)(object)ak[key].get_sharedMesh() != (Object)(object)sharedMesh))
					{
						break;
					}
					str2 = str2.Remove(str2.Length - 3, 3);
					str2 += "-copy.lm";
					key = q + "/" + str2;
					continue;
				}
				ak.Add(key, component);
				break;
			}
			A_1.a("meshPath", str2);
		}
		else
		{
			Debug.LogWarning((object)("LayaAir3D Warning(Code:1001) : " + ((Object)A_0).get_name() + "'s MeshFilter Component Mesh data can't be null!"));
		}
	}

	private static void a(GameObject A_0, global::g A_1, List<string> A_2)
	{
		//IL_005a: Unknown result type (might be due to invalid IL or missing references)
		//IL_0070: Unknown result type (might be due to invalid IL or missing references)
		//IL_0076: Invalid comparison between Unknown and I4
		global::g g = new global::g(global::g.a.d);
		new global::g(global::g.a.d);
		new global::g(global::g.a.d);
		new global::g(global::g.a.d);
		global::g a_ = new global::g(global::g.a.e);
		g.a("type", "Animator");
		Animator component = A_0.GetComponent<Animator>();
		component.get_avatar();
		g.d("layers", a_);
		a(A_0, a_, global::p.i);
		if ((int)component.get_cullingMode() == 0)
		{
			g.d("cullingMode", 0);
		}
		else if ((int)component.get_cullingMode() == 2)
		{
			g.d("cullingMode", 2);
		}
		else
		{
			g.d("cullingMode", 0);
		}
		Motion motion = (component.get_runtimeAnimatorController() as AnimatorController).get_layers()[0].get_stateMachine().get_defaultState().get_motion();
		g.d("playOnWake", Object.op_Implicit((Object)(object)motion) ? true : false);
		A_1.f(g);
	}

	private static void a(AnimationCurve A_0, global::g A_1, string A_2, string A_3)
	{
		//IL_0042: Unknown result type (might be due to invalid IL or missing references)
		//IL_0047: Unknown result type (might be due to invalid IL or missing references)
		//IL_005d: Unknown result type (might be due to invalid IL or missing references)
		//IL_0062: Unknown result type (might be due to invalid IL or missing references)
		global::g g = new global::g(global::g.a.e);
		if (A_0 != null && A_0.get_length() > 0)
		{
			A_1.d(A_2, g);
			global::g g2 = new global::g(global::g.a.e);
			global::g g3 = new global::g(global::g.a.d);
			for (int i = 0; i < A_0.get_length(); i++)
			{
				g3.aa();
				g2.f(g3);
				Keyframe val = A_0.get_Item(i);
				g3.d("key", ((Keyframe)(ref val)).get_time());
				val = A_0.get_Item(i);
				g3.d("value", ((Keyframe)(ref val)).get_value());
			}
			g.d(A_3, g2);
		}
	}

	private static void h(GameObject A_0, global::g A_1)
	{
		//IL_0054: Unknown result type (might be due to invalid IL or missing references)
		//IL_0059: Unknown result type (might be due to invalid IL or missing references)
		//IL_0071: Unknown result type (might be due to invalid IL or missing references)
		//IL_0076: Unknown result type (might be due to invalid IL or missing references)
		//IL_0085: Unknown result type (might be due to invalid IL or missing references)
		//IL_008a: Unknown result type (might be due to invalid IL or missing references)
		//IL_009d: Unknown result type (might be due to invalid IL or missing references)
		//IL_00a2: Unknown result type (might be due to invalid IL or missing references)
		//IL_00b1: Unknown result type (might be due to invalid IL or missing references)
		//IL_00b6: Unknown result type (might be due to invalid IL or missing references)
		//IL_00cf: Unknown result type (might be due to invalid IL or missing references)
		//IL_00d4: Unknown result type (might be due to invalid IL or missing references)
		//IL_00d8: Unknown result type (might be due to invalid IL or missing references)
		//IL_00dd: Unknown result type (might be due to invalid IL or missing references)
		//IL_00e1: Unknown result type (might be due to invalid IL or missing references)
		//IL_00e6: Unknown result type (might be due to invalid IL or missing references)
		//IL_0107: Unknown result type (might be due to invalid IL or missing references)
		//IL_010c: Unknown result type (might be due to invalid IL or missing references)
		//IL_0110: Unknown result type (might be due to invalid IL or missing references)
		//IL_0115: Unknown result type (might be due to invalid IL or missing references)
		//IL_0119: Unknown result type (might be due to invalid IL or missing references)
		//IL_011e: Unknown result type (might be due to invalid IL or missing references)
		//IL_014f: Unknown result type (might be due to invalid IL or missing references)
		//IL_0154: Unknown result type (might be due to invalid IL or missing references)
		//IL_0158: Unknown result type (might be due to invalid IL or missing references)
		//IL_015d: Unknown result type (might be due to invalid IL or missing references)
		//IL_0175: Unknown result type (might be due to invalid IL or missing references)
		//IL_017a: Unknown result type (might be due to invalid IL or missing references)
		//IL_017e: Unknown result type (might be due to invalid IL or missing references)
		//IL_0183: Unknown result type (might be due to invalid IL or missing references)
		//IL_0192: Unknown result type (might be due to invalid IL or missing references)
		//IL_0197: Unknown result type (might be due to invalid IL or missing references)
		//IL_019b: Unknown result type (might be due to invalid IL or missing references)
		//IL_01a0: Unknown result type (might be due to invalid IL or missing references)
		//IL_01b8: Unknown result type (might be due to invalid IL or missing references)
		//IL_01bd: Unknown result type (might be due to invalid IL or missing references)
		//IL_01c1: Unknown result type (might be due to invalid IL or missing references)
		//IL_01c6: Unknown result type (might be due to invalid IL or missing references)
		//IL_01d5: Unknown result type (might be due to invalid IL or missing references)
		//IL_01da: Unknown result type (might be due to invalid IL or missing references)
		//IL_01de: Unknown result type (might be due to invalid IL or missing references)
		//IL_01e3: Unknown result type (might be due to invalid IL or missing references)
		//IL_01fb: Unknown result type (might be due to invalid IL or missing references)
		//IL_0200: Unknown result type (might be due to invalid IL or missing references)
		//IL_0204: Unknown result type (might be due to invalid IL or missing references)
		//IL_0209: Unknown result type (might be due to invalid IL or missing references)
		//IL_0218: Unknown result type (might be due to invalid IL or missing references)
		//IL_021d: Unknown result type (might be due to invalid IL or missing references)
		//IL_0221: Unknown result type (might be due to invalid IL or missing references)
		//IL_0226: Unknown result type (might be due to invalid IL or missing references)
		//IL_022a: Unknown result type (might be due to invalid IL or missing references)
		//IL_022f: Unknown result type (might be due to invalid IL or missing references)
		//IL_0253: Unknown result type (might be due to invalid IL or missing references)
		//IL_0258: Unknown result type (might be due to invalid IL or missing references)
		//IL_025c: Unknown result type (might be due to invalid IL or missing references)
		//IL_0261: Unknown result type (might be due to invalid IL or missing references)
		//IL_0265: Unknown result type (might be due to invalid IL or missing references)
		//IL_026a: Unknown result type (might be due to invalid IL or missing references)
		//IL_028b: Unknown result type (might be due to invalid IL or missing references)
		//IL_0290: Unknown result type (might be due to invalid IL or missing references)
		//IL_0294: Unknown result type (might be due to invalid IL or missing references)
		//IL_0299: Unknown result type (might be due to invalid IL or missing references)
		//IL_029d: Unknown result type (might be due to invalid IL or missing references)
		//IL_02a2: Unknown result type (might be due to invalid IL or missing references)
		//IL_02c3: Unknown result type (might be due to invalid IL or missing references)
		//IL_02c8: Unknown result type (might be due to invalid IL or missing references)
		//IL_02cc: Unknown result type (might be due to invalid IL or missing references)
		//IL_02d1: Unknown result type (might be due to invalid IL or missing references)
		//IL_02d5: Unknown result type (might be due to invalid IL or missing references)
		//IL_02da: Unknown result type (might be due to invalid IL or missing references)
		//IL_030b: Unknown result type (might be due to invalid IL or missing references)
		//IL_0310: Unknown result type (might be due to invalid IL or missing references)
		//IL_0314: Unknown result type (might be due to invalid IL or missing references)
		//IL_0319: Unknown result type (might be due to invalid IL or missing references)
		//IL_0331: Unknown result type (might be due to invalid IL or missing references)
		//IL_0336: Unknown result type (might be due to invalid IL or missing references)
		//IL_033a: Unknown result type (might be due to invalid IL or missing references)
		//IL_033f: Unknown result type (might be due to invalid IL or missing references)
		//IL_034e: Unknown result type (might be due to invalid IL or missing references)
		//IL_0353: Unknown result type (might be due to invalid IL or missing references)
		//IL_0357: Unknown result type (might be due to invalid IL or missing references)
		//IL_035c: Unknown result type (might be due to invalid IL or missing references)
		//IL_0374: Unknown result type (might be due to invalid IL or missing references)
		//IL_0379: Unknown result type (might be due to invalid IL or missing references)
		//IL_037d: Unknown result type (might be due to invalid IL or missing references)
		//IL_0382: Unknown result type (might be due to invalid IL or missing references)
		//IL_0391: Unknown result type (might be due to invalid IL or missing references)
		//IL_0396: Unknown result type (might be due to invalid IL or missing references)
		//IL_039a: Unknown result type (might be due to invalid IL or missing references)
		//IL_039f: Unknown result type (might be due to invalid IL or missing references)
		//IL_03b7: Unknown result type (might be due to invalid IL or missing references)
		//IL_03bc: Unknown result type (might be due to invalid IL or missing references)
		//IL_03c0: Unknown result type (might be due to invalid IL or missing references)
		//IL_03c5: Unknown result type (might be due to invalid IL or missing references)
		//IL_03d4: Unknown result type (might be due to invalid IL or missing references)
		//IL_03d9: Unknown result type (might be due to invalid IL or missing references)
		//IL_03dd: Unknown result type (might be due to invalid IL or missing references)
		//IL_03e2: Unknown result type (might be due to invalid IL or missing references)
		//IL_03fd: Unknown result type (might be due to invalid IL or missing references)
		//IL_0402: Unknown result type (might be due to invalid IL or missing references)
		//IL_0406: Unknown result type (might be due to invalid IL or missing references)
		//IL_040b: Unknown result type (might be due to invalid IL or missing references)
		//IL_0426: Unknown result type (might be due to invalid IL or missing references)
		//IL_042b: Unknown result type (might be due to invalid IL or missing references)
		//IL_042f: Unknown result type (might be due to invalid IL or missing references)
		//IL_0434: Unknown result type (might be due to invalid IL or missing references)
		//IL_044f: Unknown result type (might be due to invalid IL or missing references)
		//IL_0454: Unknown result type (might be due to invalid IL or missing references)
		//IL_0458: Unknown result type (might be due to invalid IL or missing references)
		//IL_045d: Unknown result type (might be due to invalid IL or missing references)
		//IL_0461: Unknown result type (might be due to invalid IL or missing references)
		//IL_0466: Unknown result type (might be due to invalid IL or missing references)
		//IL_048a: Unknown result type (might be due to invalid IL or missing references)
		//IL_048f: Unknown result type (might be due to invalid IL or missing references)
		//IL_0493: Unknown result type (might be due to invalid IL or missing references)
		//IL_0498: Unknown result type (might be due to invalid IL or missing references)
		//IL_049c: Unknown result type (might be due to invalid IL or missing references)
		//IL_04a1: Unknown result type (might be due to invalid IL or missing references)
		//IL_04c2: Unknown result type (might be due to invalid IL or missing references)
		//IL_04c7: Unknown result type (might be due to invalid IL or missing references)
		//IL_04cb: Unknown result type (might be due to invalid IL or missing references)
		//IL_04d0: Unknown result type (might be due to invalid IL or missing references)
		//IL_04d4: Unknown result type (might be due to invalid IL or missing references)
		//IL_04d9: Unknown result type (might be due to invalid IL or missing references)
		//IL_04fa: Unknown result type (might be due to invalid IL or missing references)
		//IL_04ff: Unknown result type (might be due to invalid IL or missing references)
		//IL_0503: Unknown result type (might be due to invalid IL or missing references)
		//IL_0508: Unknown result type (might be due to invalid IL or missing references)
		//IL_050c: Unknown result type (might be due to invalid IL or missing references)
		//IL_0511: Unknown result type (might be due to invalid IL or missing references)
		//IL_0542: Unknown result type (might be due to invalid IL or missing references)
		//IL_0547: Unknown result type (might be due to invalid IL or missing references)
		//IL_054b: Unknown result type (might be due to invalid IL or missing references)
		//IL_0550: Unknown result type (might be due to invalid IL or missing references)
		//IL_0568: Unknown result type (might be due to invalid IL or missing references)
		//IL_056d: Unknown result type (might be due to invalid IL or missing references)
		//IL_0571: Unknown result type (might be due to invalid IL or missing references)
		//IL_0576: Unknown result type (might be due to invalid IL or missing references)
		//IL_0585: Unknown result type (might be due to invalid IL or missing references)
		//IL_058a: Unknown result type (might be due to invalid IL or missing references)
		//IL_058e: Unknown result type (might be due to invalid IL or missing references)
		//IL_0593: Unknown result type (might be due to invalid IL or missing references)
		//IL_05ab: Unknown result type (might be due to invalid IL or missing references)
		//IL_05b0: Unknown result type (might be due to invalid IL or missing references)
		//IL_05b4: Unknown result type (might be due to invalid IL or missing references)
		//IL_05b9: Unknown result type (might be due to invalid IL or missing references)
		//IL_05c8: Unknown result type (might be due to invalid IL or missing references)
		//IL_05cd: Unknown result type (might be due to invalid IL or missing references)
		//IL_05d1: Unknown result type (might be due to invalid IL or missing references)
		//IL_05d6: Unknown result type (might be due to invalid IL or missing references)
		//IL_05ee: Unknown result type (might be due to invalid IL or missing references)
		//IL_05f3: Unknown result type (might be due to invalid IL or missing references)
		//IL_05f7: Unknown result type (might be due to invalid IL or missing references)
		//IL_05fc: Unknown result type (might be due to invalid IL or missing references)
		//IL_060b: Unknown result type (might be due to invalid IL or missing references)
		//IL_0610: Unknown result type (might be due to invalid IL or missing references)
		//IL_0614: Unknown result type (might be due to invalid IL or missing references)
		//IL_0619: Unknown result type (might be due to invalid IL or missing references)
		//IL_061d: Unknown result type (might be due to invalid IL or missing references)
		//IL_0622: Unknown result type (might be due to invalid IL or missing references)
		//IL_0646: Unknown result type (might be due to invalid IL or missing references)
		//IL_064b: Unknown result type (might be due to invalid IL or missing references)
		//IL_064f: Unknown result type (might be due to invalid IL or missing references)
		//IL_0654: Unknown result type (might be due to invalid IL or missing references)
		//IL_0658: Unknown result type (might be due to invalid IL or missing references)
		//IL_065d: Unknown result type (might be due to invalid IL or missing references)
		//IL_067e: Unknown result type (might be due to invalid IL or missing references)
		//IL_0683: Unknown result type (might be due to invalid IL or missing references)
		//IL_0687: Unknown result type (might be due to invalid IL or missing references)
		//IL_068c: Unknown result type (might be due to invalid IL or missing references)
		//IL_0690: Unknown result type (might be due to invalid IL or missing references)
		//IL_0695: Unknown result type (might be due to invalid IL or missing references)
		//IL_06b6: Unknown result type (might be due to invalid IL or missing references)
		//IL_06bb: Unknown result type (might be due to invalid IL or missing references)
		//IL_06bf: Unknown result type (might be due to invalid IL or missing references)
		//IL_06c4: Unknown result type (might be due to invalid IL or missing references)
		//IL_06c8: Unknown result type (might be due to invalid IL or missing references)
		//IL_06cd: Unknown result type (might be due to invalid IL or missing references)
		//IL_06ec: Unknown result type (might be due to invalid IL or missing references)
		//IL_06f1: Unknown result type (might be due to invalid IL or missing references)
		//IL_0704: Unknown result type (might be due to invalid IL or missing references)
		//IL_0709: Unknown result type (might be due to invalid IL or missing references)
		//IL_072a: Unknown result type (might be due to invalid IL or missing references)
		//IL_072f: Unknown result type (might be due to invalid IL or missing references)
		//IL_0733: Unknown result type (might be due to invalid IL or missing references)
		//IL_0738: Unknown result type (might be due to invalid IL or missing references)
		//IL_0750: Unknown result type (might be due to invalid IL or missing references)
		//IL_0755: Unknown result type (might be due to invalid IL or missing references)
		//IL_0759: Unknown result type (might be due to invalid IL or missing references)
		//IL_075e: Unknown result type (might be due to invalid IL or missing references)
		//IL_076d: Unknown result type (might be due to invalid IL or missing references)
		//IL_0772: Unknown result type (might be due to invalid IL or missing references)
		//IL_0776: Unknown result type (might be due to invalid IL or missing references)
		//IL_077b: Unknown result type (might be due to invalid IL or missing references)
		//IL_0793: Unknown result type (might be due to invalid IL or missing references)
		//IL_0798: Unknown result type (might be due to invalid IL or missing references)
		//IL_079c: Unknown result type (might be due to invalid IL or missing references)
		//IL_07a1: Unknown result type (might be due to invalid IL or missing references)
		//IL_07b0: Unknown result type (might be due to invalid IL or missing references)
		//IL_07b5: Unknown result type (might be due to invalid IL or missing references)
		//IL_07b9: Unknown result type (might be due to invalid IL or missing references)
		//IL_07be: Unknown result type (might be due to invalid IL or missing references)
		//IL_07d6: Unknown result type (might be due to invalid IL or missing references)
		//IL_07db: Unknown result type (might be due to invalid IL or missing references)
		//IL_07df: Unknown result type (might be due to invalid IL or missing references)
		//IL_07e4: Unknown result type (might be due to invalid IL or missing references)
		//IL_07f3: Unknown result type (might be due to invalid IL or missing references)
		//IL_07f8: Unknown result type (might be due to invalid IL or missing references)
		//IL_07fc: Unknown result type (might be due to invalid IL or missing references)
		//IL_0801: Unknown result type (might be due to invalid IL or missing references)
		//IL_0812: Unknown result type (might be due to invalid IL or missing references)
		//IL_0817: Unknown result type (might be due to invalid IL or missing references)
		//IL_081b: Unknown result type (might be due to invalid IL or missing references)
		//IL_0820: Unknown result type (might be due to invalid IL or missing references)
		//IL_0831: Unknown result type (might be due to invalid IL or missing references)
		//IL_0836: Unknown result type (might be due to invalid IL or missing references)
		//IL_083a: Unknown result type (might be due to invalid IL or missing references)
		//IL_083f: Unknown result type (might be due to invalid IL or missing references)
		//IL_0858: Unknown result type (might be due to invalid IL or missing references)
		//IL_085d: Unknown result type (might be due to invalid IL or missing references)
		//IL_0861: Unknown result type (might be due to invalid IL or missing references)
		//IL_0866: Unknown result type (might be due to invalid IL or missing references)
		//IL_0876: Unknown result type (might be due to invalid IL or missing references)
		//IL_087b: Unknown result type (might be due to invalid IL or missing references)
		//IL_087f: Unknown result type (might be due to invalid IL or missing references)
		//IL_0884: Unknown result type (might be due to invalid IL or missing references)
		//IL_0894: Unknown result type (might be due to invalid IL or missing references)
		//IL_0899: Unknown result type (might be due to invalid IL or missing references)
		//IL_089d: Unknown result type (might be due to invalid IL or missing references)
		//IL_08a2: Unknown result type (might be due to invalid IL or missing references)
		//IL_08be: Unknown result type (might be due to invalid IL or missing references)
		//IL_08c3: Unknown result type (might be due to invalid IL or missing references)
		//IL_08c7: Unknown result type (might be due to invalid IL or missing references)
		//IL_08cc: Unknown result type (might be due to invalid IL or missing references)
		//IL_08dd: Unknown result type (might be due to invalid IL or missing references)
		//IL_08e2: Unknown result type (might be due to invalid IL or missing references)
		//IL_08e6: Unknown result type (might be due to invalid IL or missing references)
		//IL_08eb: Unknown result type (might be due to invalid IL or missing references)
		//IL_08fc: Unknown result type (might be due to invalid IL or missing references)
		//IL_0901: Unknown result type (might be due to invalid IL or missing references)
		//IL_0905: Unknown result type (might be due to invalid IL or missing references)
		//IL_090a: Unknown result type (might be due to invalid IL or missing references)
		//IL_0923: Unknown result type (might be due to invalid IL or missing references)
		//IL_0928: Unknown result type (might be due to invalid IL or missing references)
		//IL_092c: Unknown result type (might be due to invalid IL or missing references)
		//IL_0931: Unknown result type (might be due to invalid IL or missing references)
		//IL_0941: Unknown result type (might be due to invalid IL or missing references)
		//IL_0946: Unknown result type (might be due to invalid IL or missing references)
		//IL_094a: Unknown result type (might be due to invalid IL or missing references)
		//IL_094f: Unknown result type (might be due to invalid IL or missing references)
		//IL_095f: Unknown result type (might be due to invalid IL or missing references)
		//IL_0964: Unknown result type (might be due to invalid IL or missing references)
		//IL_0968: Unknown result type (might be due to invalid IL or missing references)
		//IL_096d: Unknown result type (might be due to invalid IL or missing references)
		//IL_0989: Unknown result type (might be due to invalid IL or missing references)
		//IL_098e: Unknown result type (might be due to invalid IL or missing references)
		//IL_0992: Unknown result type (might be due to invalid IL or missing references)
		//IL_0997: Unknown result type (might be due to invalid IL or missing references)
		//IL_09a8: Unknown result type (might be due to invalid IL or missing references)
		//IL_09ad: Unknown result type (might be due to invalid IL or missing references)
		//IL_09b1: Unknown result type (might be due to invalid IL or missing references)
		//IL_09b6: Unknown result type (might be due to invalid IL or missing references)
		//IL_09c7: Unknown result type (might be due to invalid IL or missing references)
		//IL_09cc: Unknown result type (might be due to invalid IL or missing references)
		//IL_09d0: Unknown result type (might be due to invalid IL or missing references)
		//IL_09d5: Unknown result type (might be due to invalid IL or missing references)
		//IL_09ee: Unknown result type (might be due to invalid IL or missing references)
		//IL_09f3: Unknown result type (might be due to invalid IL or missing references)
		//IL_09f7: Unknown result type (might be due to invalid IL or missing references)
		//IL_09fc: Unknown result type (might be due to invalid IL or missing references)
		//IL_0a0c: Unknown result type (might be due to invalid IL or missing references)
		//IL_0a11: Unknown result type (might be due to invalid IL or missing references)
		//IL_0a15: Unknown result type (might be due to invalid IL or missing references)
		//IL_0a1a: Unknown result type (might be due to invalid IL or missing references)
		//IL_0a2a: Unknown result type (might be due to invalid IL or missing references)
		//IL_0a2f: Unknown result type (might be due to invalid IL or missing references)
		//IL_0a33: Unknown result type (might be due to invalid IL or missing references)
		//IL_0a38: Unknown result type (might be due to invalid IL or missing references)
		//IL_0a54: Unknown result type (might be due to invalid IL or missing references)
		//IL_0a59: Unknown result type (might be due to invalid IL or missing references)
		//IL_0a6c: Unknown result type (might be due to invalid IL or missing references)
		//IL_0a71: Unknown result type (might be due to invalid IL or missing references)
		//IL_0a80: Unknown result type (might be due to invalid IL or missing references)
		//IL_0a85: Unknown result type (might be due to invalid IL or missing references)
		//IL_0a89: Unknown result type (might be due to invalid IL or missing references)
		//IL_0a8e: Unknown result type (might be due to invalid IL or missing references)
		//IL_0a92: Unknown result type (might be due to invalid IL or missing references)
		//IL_0a97: Unknown result type (might be due to invalid IL or missing references)
		//IL_0abb: Unknown result type (might be due to invalid IL or missing references)
		//IL_0ac0: Unknown result type (might be due to invalid IL or missing references)
		//IL_0ac4: Unknown result type (might be due to invalid IL or missing references)
		//IL_0ac9: Unknown result type (might be due to invalid IL or missing references)
		//IL_0acd: Unknown result type (might be due to invalid IL or missing references)
		//IL_0ad2: Unknown result type (might be due to invalid IL or missing references)
		//IL_0af3: Unknown result type (might be due to invalid IL or missing references)
		//IL_0af8: Unknown result type (might be due to invalid IL or missing references)
		//IL_0afc: Unknown result type (might be due to invalid IL or missing references)
		//IL_0b01: Unknown result type (might be due to invalid IL or missing references)
		//IL_0b05: Unknown result type (might be due to invalid IL or missing references)
		//IL_0b0a: Unknown result type (might be due to invalid IL or missing references)
		//IL_0b2b: Unknown result type (might be due to invalid IL or missing references)
		//IL_0b30: Unknown result type (might be due to invalid IL or missing references)
		//IL_0b34: Unknown result type (might be due to invalid IL or missing references)
		//IL_0b39: Unknown result type (might be due to invalid IL or missing references)
		//IL_0b3d: Unknown result type (might be due to invalid IL or missing references)
		//IL_0b42: Unknown result type (might be due to invalid IL or missing references)
		//IL_0b73: Unknown result type (might be due to invalid IL or missing references)
		//IL_0b78: Unknown result type (might be due to invalid IL or missing references)
		//IL_0b7c: Unknown result type (might be due to invalid IL or missing references)
		//IL_0b81: Unknown result type (might be due to invalid IL or missing references)
		//IL_0b99: Unknown result type (might be due to invalid IL or missing references)
		//IL_0b9e: Unknown result type (might be due to invalid IL or missing references)
		//IL_0ba2: Unknown result type (might be due to invalid IL or missing references)
		//IL_0ba7: Unknown result type (might be due to invalid IL or missing references)
		//IL_0bb6: Unknown result type (might be due to invalid IL or missing references)
		//IL_0bbb: Unknown result type (might be due to invalid IL or missing references)
		//IL_0bbf: Unknown result type (might be due to invalid IL or missing references)
		//IL_0bc4: Unknown result type (might be due to invalid IL or missing references)
		//IL_0bdc: Unknown result type (might be due to invalid IL or missing references)
		//IL_0be1: Unknown result type (might be due to invalid IL or missing references)
		//IL_0be5: Unknown result type (might be due to invalid IL or missing references)
		//IL_0bea: Unknown result type (might be due to invalid IL or missing references)
		//IL_0bf9: Unknown result type (might be due to invalid IL or missing references)
		//IL_0bfe: Unknown result type (might be due to invalid IL or missing references)
		//IL_0c02: Unknown result type (might be due to invalid IL or missing references)
		//IL_0c07: Unknown result type (might be due to invalid IL or missing references)
		//IL_0c1f: Unknown result type (might be due to invalid IL or missing references)
		//IL_0c24: Unknown result type (might be due to invalid IL or missing references)
		//IL_0c28: Unknown result type (might be due to invalid IL or missing references)
		//IL_0c2d: Unknown result type (might be due to invalid IL or missing references)
		//IL_0c3c: Unknown result type (might be due to invalid IL or missing references)
		//IL_0c41: Unknown result type (might be due to invalid IL or missing references)
		//IL_0c45: Unknown result type (might be due to invalid IL or missing references)
		//IL_0c4a: Unknown result type (might be due to invalid IL or missing references)
		//IL_0c60: Unknown result type (might be due to invalid IL or missing references)
		//IL_0c65: Unknown result type (might be due to invalid IL or missing references)
		//IL_0c69: Unknown result type (might be due to invalid IL or missing references)
		//IL_0c6e: Unknown result type (might be due to invalid IL or missing references)
		//IL_0c85: Unknown result type (might be due to invalid IL or missing references)
		//IL_0c8a: Unknown result type (might be due to invalid IL or missing references)
		//IL_0c8e: Unknown result type (might be due to invalid IL or missing references)
		//IL_0c93: Unknown result type (might be due to invalid IL or missing references)
		//IL_0cad: Unknown result type (might be due to invalid IL or missing references)
		//IL_0cb2: Unknown result type (might be due to invalid IL or missing references)
		//IL_0cb6: Unknown result type (might be due to invalid IL or missing references)
		//IL_0cbb: Unknown result type (might be due to invalid IL or missing references)
		//IL_0cd0: Unknown result type (might be due to invalid IL or missing references)
		//IL_0cd5: Unknown result type (might be due to invalid IL or missing references)
		//IL_0cd9: Unknown result type (might be due to invalid IL or missing references)
		//IL_0cde: Unknown result type (might be due to invalid IL or missing references)
		//IL_0cf4: Unknown result type (might be due to invalid IL or missing references)
		//IL_0cf9: Unknown result type (might be due to invalid IL or missing references)
		//IL_0cfd: Unknown result type (might be due to invalid IL or missing references)
		//IL_0d02: Unknown result type (might be due to invalid IL or missing references)
		//IL_0d1f: Unknown result type (might be due to invalid IL or missing references)
		//IL_0d24: Unknown result type (might be due to invalid IL or missing references)
		//IL_0d28: Unknown result type (might be due to invalid IL or missing references)
		//IL_0d2d: Unknown result type (might be due to invalid IL or missing references)
		//IL_0d3e: Unknown result type (might be due to invalid IL or missing references)
		//IL_0d43: Unknown result type (might be due to invalid IL or missing references)
		//IL_0d47: Unknown result type (might be due to invalid IL or missing references)
		//IL_0d4c: Unknown result type (might be due to invalid IL or missing references)
		//IL_0d5d: Unknown result type (might be due to invalid IL or missing references)
		//IL_0d62: Unknown result type (might be due to invalid IL or missing references)
		//IL_0d66: Unknown result type (might be due to invalid IL or missing references)
		//IL_0d6b: Unknown result type (might be due to invalid IL or missing references)
		//IL_0d84: Unknown result type (might be due to invalid IL or missing references)
		//IL_0d89: Unknown result type (might be due to invalid IL or missing references)
		//IL_0d8d: Unknown result type (might be due to invalid IL or missing references)
		//IL_0d92: Unknown result type (might be due to invalid IL or missing references)
		//IL_0da7: Unknown result type (might be due to invalid IL or missing references)
		//IL_0dac: Unknown result type (might be due to invalid IL or missing references)
		//IL_0db0: Unknown result type (might be due to invalid IL or missing references)
		//IL_0db5: Unknown result type (might be due to invalid IL or missing references)
		//IL_0dcb: Unknown result type (might be due to invalid IL or missing references)
		//IL_0dd0: Unknown result type (might be due to invalid IL or missing references)
		//IL_0dd4: Unknown result type (might be due to invalid IL or missing references)
		//IL_0dd9: Unknown result type (might be due to invalid IL or missing references)
		//IL_0df6: Unknown result type (might be due to invalid IL or missing references)
		//IL_0dfb: Unknown result type (might be due to invalid IL or missing references)
		//IL_0dff: Unknown result type (might be due to invalid IL or missing references)
		//IL_0e04: Unknown result type (might be due to invalid IL or missing references)
		//IL_0e15: Unknown result type (might be due to invalid IL or missing references)
		//IL_0e1a: Unknown result type (might be due to invalid IL or missing references)
		//IL_0e1e: Unknown result type (might be due to invalid IL or missing references)
		//IL_0e23: Unknown result type (might be due to invalid IL or missing references)
		//IL_0e34: Unknown result type (might be due to invalid IL or missing references)
		//IL_0e39: Unknown result type (might be due to invalid IL or missing references)
		//IL_0e3d: Unknown result type (might be due to invalid IL or missing references)
		//IL_0e42: Unknown result type (might be due to invalid IL or missing references)
		//IL_0e5b: Unknown result type (might be due to invalid IL or missing references)
		//IL_0e60: Unknown result type (might be due to invalid IL or missing references)
		//IL_0e64: Unknown result type (might be due to invalid IL or missing references)
		//IL_0e69: Unknown result type (might be due to invalid IL or missing references)
		//IL_0e7e: Unknown result type (might be due to invalid IL or missing references)
		//IL_0e83: Unknown result type (might be due to invalid IL or missing references)
		//IL_0e87: Unknown result type (might be due to invalid IL or missing references)
		//IL_0e8c: Unknown result type (might be due to invalid IL or missing references)
		//IL_0ea2: Unknown result type (might be due to invalid IL or missing references)
		//IL_0ea7: Unknown result type (might be due to invalid IL or missing references)
		//IL_0eab: Unknown result type (might be due to invalid IL or missing references)
		//IL_0eb0: Unknown result type (might be due to invalid IL or missing references)
		//IL_0ecd: Unknown result type (might be due to invalid IL or missing references)
		//IL_0ed2: Unknown result type (might be due to invalid IL or missing references)
		//IL_0eea: Unknown result type (might be due to invalid IL or missing references)
		//IL_0eef: Unknown result type (might be due to invalid IL or missing references)
		//IL_0efe: Unknown result type (might be due to invalid IL or missing references)
		//IL_0f03: Unknown result type (might be due to invalid IL or missing references)
		//IL_0f07: Unknown result type (might be due to invalid IL or missing references)
		//IL_0f0c: Unknown result type (might be due to invalid IL or missing references)
		//IL_0f10: Unknown result type (might be due to invalid IL or missing references)
		//IL_0f15: Unknown result type (might be due to invalid IL or missing references)
		//IL_0f39: Unknown result type (might be due to invalid IL or missing references)
		//IL_0f3e: Unknown result type (might be due to invalid IL or missing references)
		//IL_0f42: Unknown result type (might be due to invalid IL or missing references)
		//IL_0f47: Unknown result type (might be due to invalid IL or missing references)
		//IL_0f4b: Unknown result type (might be due to invalid IL or missing references)
		//IL_0f50: Unknown result type (might be due to invalid IL or missing references)
		//IL_0f74: Unknown result type (might be due to invalid IL or missing references)
		//IL_0f79: Unknown result type (might be due to invalid IL or missing references)
		//IL_0f7d: Unknown result type (might be due to invalid IL or missing references)
		//IL_0f82: Unknown result type (might be due to invalid IL or missing references)
		//IL_0f86: Unknown result type (might be due to invalid IL or missing references)
		//IL_0f8b: Unknown result type (might be due to invalid IL or missing references)
		//IL_0fac: Unknown result type (might be due to invalid IL or missing references)
		//IL_0fb1: Unknown result type (might be due to invalid IL or missing references)
		//IL_0fb5: Unknown result type (might be due to invalid IL or missing references)
		//IL_0fba: Unknown result type (might be due to invalid IL or missing references)
		//IL_0fbe: Unknown result type (might be due to invalid IL or missing references)
		//IL_0fc3: Unknown result type (might be due to invalid IL or missing references)
		//IL_0fe4: Unknown result type (might be due to invalid IL or missing references)
		//IL_0fe9: Unknown result type (might be due to invalid IL or missing references)
		//IL_0fed: Unknown result type (might be due to invalid IL or missing references)
		//IL_0ff2: Unknown result type (might be due to invalid IL or missing references)
		//IL_0ff6: Unknown result type (might be due to invalid IL or missing references)
		//IL_0ffb: Unknown result type (might be due to invalid IL or missing references)
		//IL_102c: Unknown result type (might be due to invalid IL or missing references)
		//IL_1031: Unknown result type (might be due to invalid IL or missing references)
		//IL_1035: Unknown result type (might be due to invalid IL or missing references)
		//IL_103a: Unknown result type (might be due to invalid IL or missing references)
		//IL_103e: Unknown result type (might be due to invalid IL or missing references)
		//IL_1050: Unknown result type (might be due to invalid IL or missing references)
		//IL_1055: Unknown result type (might be due to invalid IL or missing references)
		//IL_1059: Unknown result type (might be due to invalid IL or missing references)
		//IL_105e: Unknown result type (might be due to invalid IL or missing references)
		//IL_1062: Unknown result type (might be due to invalid IL or missing references)
		//IL_1074: Unknown result type (might be due to invalid IL or missing references)
		//IL_1079: Unknown result type (might be due to invalid IL or missing references)
		//IL_107d: Unknown result type (might be due to invalid IL or missing references)
		//IL_1082: Unknown result type (might be due to invalid IL or missing references)
		//IL_1086: Unknown result type (might be due to invalid IL or missing references)
		//IL_1098: Unknown result type (might be due to invalid IL or missing references)
		//IL_109d: Unknown result type (might be due to invalid IL or missing references)
		//IL_10a1: Unknown result type (might be due to invalid IL or missing references)
		//IL_10a6: Unknown result type (might be due to invalid IL or missing references)
		//IL_10aa: Unknown result type (might be due to invalid IL or missing references)
		//IL_10c7: Unknown result type (might be due to invalid IL or missing references)
		//IL_10cc: Unknown result type (might be due to invalid IL or missing references)
		//IL_10d0: Unknown result type (might be due to invalid IL or missing references)
		//IL_10d5: Unknown result type (might be due to invalid IL or missing references)
		//IL_10d9: Unknown result type (might be due to invalid IL or missing references)
		//IL_10ea: Unknown result type (might be due to invalid IL or missing references)
		//IL_10ef: Unknown result type (might be due to invalid IL or missing references)
		//IL_10f3: Unknown result type (might be due to invalid IL or missing references)
		//IL_10f8: Unknown result type (might be due to invalid IL or missing references)
		//IL_10fc: Unknown result type (might be due to invalid IL or missing references)
		//IL_110d: Unknown result type (might be due to invalid IL or missing references)
		//IL_1112: Unknown result type (might be due to invalid IL or missing references)
		//IL_1116: Unknown result type (might be due to invalid IL or missing references)
		//IL_111b: Unknown result type (might be due to invalid IL or missing references)
		//IL_111f: Unknown result type (might be due to invalid IL or missing references)
		//IL_1130: Unknown result type (might be due to invalid IL or missing references)
		//IL_1135: Unknown result type (might be due to invalid IL or missing references)
		//IL_1139: Unknown result type (might be due to invalid IL or missing references)
		//IL_113e: Unknown result type (might be due to invalid IL or missing references)
		//IL_1142: Unknown result type (might be due to invalid IL or missing references)
		//IL_115f: Unknown result type (might be due to invalid IL or missing references)
		//IL_1164: Unknown result type (might be due to invalid IL or missing references)
		//IL_1168: Unknown result type (might be due to invalid IL or missing references)
		//IL_116d: Unknown result type (might be due to invalid IL or missing references)
		//IL_1171: Unknown result type (might be due to invalid IL or missing references)
		//IL_1183: Unknown result type (might be due to invalid IL or missing references)
		//IL_1188: Unknown result type (might be due to invalid IL or missing references)
		//IL_118c: Unknown result type (might be due to invalid IL or missing references)
		//IL_1191: Unknown result type (might be due to invalid IL or missing references)
		//IL_1195: Unknown result type (might be due to invalid IL or missing references)
		//IL_11a7: Unknown result type (might be due to invalid IL or missing references)
		//IL_11ac: Unknown result type (might be due to invalid IL or missing references)
		//IL_11b0: Unknown result type (might be due to invalid IL or missing references)
		//IL_11b5: Unknown result type (might be due to invalid IL or missing references)
		//IL_11b9: Unknown result type (might be due to invalid IL or missing references)
		//IL_11cb: Unknown result type (might be due to invalid IL or missing references)
		//IL_11d0: Unknown result type (might be due to invalid IL or missing references)
		//IL_11d4: Unknown result type (might be due to invalid IL or missing references)
		//IL_11d9: Unknown result type (might be due to invalid IL or missing references)
		//IL_11dd: Unknown result type (might be due to invalid IL or missing references)
		//IL_11fa: Unknown result type (might be due to invalid IL or missing references)
		//IL_11ff: Unknown result type (might be due to invalid IL or missing references)
		//IL_1203: Unknown result type (might be due to invalid IL or missing references)
		//IL_1208: Unknown result type (might be due to invalid IL or missing references)
		//IL_120c: Unknown result type (might be due to invalid IL or missing references)
		//IL_121d: Unknown result type (might be due to invalid IL or missing references)
		//IL_1222: Unknown result type (might be due to invalid IL or missing references)
		//IL_1226: Unknown result type (might be due to invalid IL or missing references)
		//IL_122b: Unknown result type (might be due to invalid IL or missing references)
		//IL_122f: Unknown result type (might be due to invalid IL or missing references)
		//IL_1240: Unknown result type (might be due to invalid IL or missing references)
		//IL_1245: Unknown result type (might be due to invalid IL or missing references)
		//IL_1249: Unknown result type (might be due to invalid IL or missing references)
		//IL_124e: Unknown result type (might be due to invalid IL or missing references)
		//IL_1252: Unknown result type (might be due to invalid IL or missing references)
		//IL_1263: Unknown result type (might be due to invalid IL or missing references)
		//IL_1268: Unknown result type (might be due to invalid IL or missing references)
		//IL_126c: Unknown result type (might be due to invalid IL or missing references)
		//IL_1271: Unknown result type (might be due to invalid IL or missing references)
		//IL_1275: Unknown result type (might be due to invalid IL or missing references)
		//IL_1292: Unknown result type (might be due to invalid IL or missing references)
		//IL_1297: Unknown result type (might be due to invalid IL or missing references)
		//IL_129b: Unknown result type (might be due to invalid IL or missing references)
		//IL_12a0: Unknown result type (might be due to invalid IL or missing references)
		//IL_12a4: Unknown result type (might be due to invalid IL or missing references)
		//IL_12b6: Unknown result type (might be due to invalid IL or missing references)
		//IL_12bb: Unknown result type (might be due to invalid IL or missing references)
		//IL_12bf: Unknown result type (might be due to invalid IL or missing references)
		//IL_12c4: Unknown result type (might be due to invalid IL or missing references)
		//IL_12c8: Unknown result type (might be due to invalid IL or missing references)
		//IL_12da: Unknown result type (might be due to invalid IL or missing references)
		//IL_12df: Unknown result type (might be due to invalid IL or missing references)
		//IL_12e3: Unknown result type (might be due to invalid IL or missing references)
		//IL_12e8: Unknown result type (might be due to invalid IL or missing references)
		//IL_12ec: Unknown result type (might be due to invalid IL or missing references)
		//IL_12fe: Unknown result type (might be due to invalid IL or missing references)
		//IL_1303: Unknown result type (might be due to invalid IL or missing references)
		//IL_1307: Unknown result type (might be due to invalid IL or missing references)
		//IL_130c: Unknown result type (might be due to invalid IL or missing references)
		//IL_1310: Unknown result type (might be due to invalid IL or missing references)
		//IL_132d: Unknown result type (might be due to invalid IL or missing references)
		//IL_1332: Unknown result type (might be due to invalid IL or missing references)
		//IL_1336: Unknown result type (might be due to invalid IL or missing references)
		//IL_133b: Unknown result type (might be due to invalid IL or missing references)
		//IL_133f: Unknown result type (might be due to invalid IL or missing references)
		//IL_1350: Unknown result type (might be due to invalid IL or missing references)
		//IL_1355: Unknown result type (might be due to invalid IL or missing references)
		//IL_1359: Unknown result type (might be due to invalid IL or missing references)
		//IL_135e: Unknown result type (might be due to invalid IL or missing references)
		//IL_1362: Unknown result type (might be due to invalid IL or missing references)
		//IL_1373: Unknown result type (might be due to invalid IL or missing references)
		//IL_1378: Unknown result type (might be due to invalid IL or missing references)
		//IL_137c: Unknown result type (might be due to invalid IL or missing references)
		//IL_1381: Unknown result type (might be due to invalid IL or missing references)
		//IL_1385: Unknown result type (might be due to invalid IL or missing references)
		//IL_1396: Unknown result type (might be due to invalid IL or missing references)
		//IL_139b: Unknown result type (might be due to invalid IL or missing references)
		//IL_139f: Unknown result type (might be due to invalid IL or missing references)
		//IL_13a4: Unknown result type (might be due to invalid IL or missing references)
		//IL_13a8: Unknown result type (might be due to invalid IL or missing references)
		//IL_13c4: Unknown result type (might be due to invalid IL or missing references)
		//IL_13d5: Unknown result type (might be due to invalid IL or missing references)
		//IL_13eb: Unknown result type (might be due to invalid IL or missing references)
		//IL_1404: Unknown result type (might be due to invalid IL or missing references)
		//IL_1414: Unknown result type (might be due to invalid IL or missing references)
		//IL_1424: Unknown result type (might be due to invalid IL or missing references)
		//IL_1441: Unknown result type (might be due to invalid IL or missing references)
		//IL_1446: Unknown result type (might be due to invalid IL or missing references)
		//IL_144a: Unknown result type (might be due to invalid IL or missing references)
		//IL_144f: Unknown result type (might be due to invalid IL or missing references)
		//IL_1467: Unknown result type (might be due to invalid IL or missing references)
		//IL_146c: Unknown result type (might be due to invalid IL or missing references)
		//IL_1470: Unknown result type (might be due to invalid IL or missing references)
		//IL_1475: Unknown result type (might be due to invalid IL or missing references)
		//IL_1484: Unknown result type (might be due to invalid IL or missing references)
		//IL_1489: Unknown result type (might be due to invalid IL or missing references)
		//IL_148d: Unknown result type (might be due to invalid IL or missing references)
		//IL_1492: Unknown result type (might be due to invalid IL or missing references)
		//IL_14b3: Unknown result type (might be due to invalid IL or missing references)
		//IL_14b8: Unknown result type (might be due to invalid IL or missing references)
		//IL_14bc: Unknown result type (might be due to invalid IL or missing references)
		//IL_14c1: Unknown result type (might be due to invalid IL or missing references)
		//IL_14f3: Unknown result type (might be due to invalid IL or missing references)
		//IL_14f8: Unknown result type (might be due to invalid IL or missing references)
		//IL_1510: Unknown result type (might be due to invalid IL or missing references)
		//IL_1515: Unknown result type (might be due to invalid IL or missing references)
		//IL_1524: Unknown result type (might be due to invalid IL or missing references)
		//IL_1529: Unknown result type (might be due to invalid IL or missing references)
		//IL_152d: Unknown result type (might be due to invalid IL or missing references)
		//IL_1532: Unknown result type (might be due to invalid IL or missing references)
		//IL_1553: Unknown result type (might be due to invalid IL or missing references)
		//IL_1558: Unknown result type (might be due to invalid IL or missing references)
		//IL_155c: Unknown result type (might be due to invalid IL or missing references)
		//IL_1561: Unknown result type (might be due to invalid IL or missing references)
		//IL_1582: Unknown result type (might be due to invalid IL or missing references)
		//IL_1587: Unknown result type (might be due to invalid IL or missing references)
		//IL_158b: Unknown result type (might be due to invalid IL or missing references)
		//IL_1590: Unknown result type (might be due to invalid IL or missing references)
		//IL_15c2: Unknown result type (might be due to invalid IL or missing references)
		//IL_15c7: Unknown result type (might be due to invalid IL or missing references)
		//IL_15da: Unknown result type (might be due to invalid IL or missing references)
		//IL_15df: Unknown result type (might be due to invalid IL or missing references)
		//IL_15f5: Unknown result type (might be due to invalid IL or missing references)
		//IL_15fa: Unknown result type (might be due to invalid IL or missing references)
		//IL_16a7: Unknown result type (might be due to invalid IL or missing references)
		//IL_16ac: Unknown result type (might be due to invalid IL or missing references)
		//IL_16df: Unknown result type (might be due to invalid IL or missing references)
		//IL_16e4: Unknown result type (might be due to invalid IL or missing references)
		//IL_16f3: Unknown result type (might be due to invalid IL or missing references)
		//IL_16f8: Unknown result type (might be due to invalid IL or missing references)
		//IL_16fc: Unknown result type (might be due to invalid IL or missing references)
		//IL_1701: Unknown result type (might be due to invalid IL or missing references)
		//IL_1705: Unknown result type (might be due to invalid IL or missing references)
		//IL_170a: Unknown result type (might be due to invalid IL or missing references)
		//IL_172e: Unknown result type (might be due to invalid IL or missing references)
		//IL_1733: Unknown result type (might be due to invalid IL or missing references)
		//IL_1737: Unknown result type (might be due to invalid IL or missing references)
		//IL_173c: Unknown result type (might be due to invalid IL or missing references)
		//IL_1740: Unknown result type (might be due to invalid IL or missing references)
		//IL_1745: Unknown result type (might be due to invalid IL or missing references)
		//IL_1766: Unknown result type (might be due to invalid IL or missing references)
		//IL_176b: Unknown result type (might be due to invalid IL or missing references)
		//IL_176f: Unknown result type (might be due to invalid IL or missing references)
		//IL_1774: Unknown result type (might be due to invalid IL or missing references)
		//IL_1778: Unknown result type (might be due to invalid IL or missing references)
		//IL_177d: Unknown result type (might be due to invalid IL or missing references)
		//IL_179e: Unknown result type (might be due to invalid IL or missing references)
		//IL_17a3: Unknown result type (might be due to invalid IL or missing references)
		//IL_17a7: Unknown result type (might be due to invalid IL or missing references)
		//IL_17ac: Unknown result type (might be due to invalid IL or missing references)
		//IL_17b0: Unknown result type (might be due to invalid IL or missing references)
		//IL_17b5: Unknown result type (might be due to invalid IL or missing references)
		//IL_17d4: Unknown result type (might be due to invalid IL or missing references)
		//IL_17d9: Unknown result type (might be due to invalid IL or missing references)
		//IL_17dd: Unknown result type (might be due to invalid IL or missing references)
		//IL_17e2: Unknown result type (might be due to invalid IL or missing references)
		//IL_17fa: Unknown result type (might be due to invalid IL or missing references)
		//IL_17ff: Unknown result type (might be due to invalid IL or missing references)
		//IL_1803: Unknown result type (might be due to invalid IL or missing references)
		//IL_1808: Unknown result type (might be due to invalid IL or missing references)
		//IL_183a: Unknown result type (might be due to invalid IL or missing references)
		//IL_183f: Unknown result type (might be due to invalid IL or missing references)
		//IL_1850: Unknown result type (might be due to invalid IL or missing references)
		//IL_1855: Unknown result type (might be due to invalid IL or missing references)
		//IL_18e0: Unknown result type (might be due to invalid IL or missing references)
		//IL_18e5: Unknown result type (might be due to invalid IL or missing references)
		//IL_1930: Unknown result type (might be due to invalid IL or missing references)
		//IL_1935: Unknown result type (might be due to invalid IL or missing references)
		//IL_1944: Unknown result type (might be due to invalid IL or missing references)
		//IL_1949: Unknown result type (might be due to invalid IL or missing references)
		//IL_194d: Unknown result type (might be due to invalid IL or missing references)
		//IL_1952: Unknown result type (might be due to invalid IL or missing references)
		//IL_196e: Unknown result type (might be due to invalid IL or missing references)
		//IL_1973: Unknown result type (might be due to invalid IL or missing references)
		//IL_1977: Unknown result type (might be due to invalid IL or missing references)
		//IL_197c: Unknown result type (might be due to invalid IL or missing references)
		//IL_19a0: Unknown result type (might be due to invalid IL or missing references)
		//IL_19a5: Unknown result type (might be due to invalid IL or missing references)
		//IL_19a9: Unknown result type (might be due to invalid IL or missing references)
		//IL_19ae: Unknown result type (might be due to invalid IL or missing references)
		//IL_19ca: Unknown result type (might be due to invalid IL or missing references)
		//IL_19cf: Unknown result type (might be due to invalid IL or missing references)
		//IL_19d3: Unknown result type (might be due to invalid IL or missing references)
		//IL_19d8: Unknown result type (might be due to invalid IL or missing references)
		//IL_19fc: Unknown result type (might be due to invalid IL or missing references)
		//IL_1a01: Unknown result type (might be due to invalid IL or missing references)
		//IL_1a05: Unknown result type (might be due to invalid IL or missing references)
		//IL_1a0a: Unknown result type (might be due to invalid IL or missing references)
		//IL_1a29: Unknown result type (might be due to invalid IL or missing references)
		//IL_1a2e: Unknown result type (might be due to invalid IL or missing references)
		//IL_1a32: Unknown result type (might be due to invalid IL or missing references)
		//IL_1a37: Unknown result type (might be due to invalid IL or missing references)
		//IL_1a56: Unknown result type (might be due to invalid IL or missing references)
		//IL_1a5b: Unknown result type (might be due to invalid IL or missing references)
		//IL_1a5f: Unknown result type (might be due to invalid IL or missing references)
		//IL_1a64: Unknown result type (might be due to invalid IL or missing references)
		//IL_1a80: Unknown result type (might be due to invalid IL or missing references)
		//IL_1a85: Unknown result type (might be due to invalid IL or missing references)
		//IL_1a89: Unknown result type (might be due to invalid IL or missing references)
		//IL_1a8e: Unknown result type (might be due to invalid IL or missing references)
		//IL_1aaa: Unknown result type (might be due to invalid IL or missing references)
		//IL_1aaf: Unknown result type (might be due to invalid IL or missing references)
		//IL_1ab3: Unknown result type (might be due to invalid IL or missing references)
		//IL_1ab8: Unknown result type (might be due to invalid IL or missing references)
		//IL_1ad4: Unknown result type (might be due to invalid IL or missing references)
		//IL_1ad9: Unknown result type (might be due to invalid IL or missing references)
		//IL_1add: Unknown result type (might be due to invalid IL or missing references)
		//IL_1ae2: Unknown result type (might be due to invalid IL or missing references)
		//IL_1b06: Unknown result type (might be due to invalid IL or missing references)
		//IL_1b0b: Unknown result type (might be due to invalid IL or missing references)
		//IL_1b0f: Unknown result type (might be due to invalid IL or missing references)
		//IL_1b14: Unknown result type (might be due to invalid IL or missing references)
		//IL_1b38: Unknown result type (might be due to invalid IL or missing references)
		//IL_1b3d: Unknown result type (might be due to invalid IL or missing references)
		//IL_1b41: Unknown result type (might be due to invalid IL or missing references)
		//IL_1b46: Unknown result type (might be due to invalid IL or missing references)
		//IL_1b6a: Unknown result type (might be due to invalid IL or missing references)
		//IL_1b6f: Unknown result type (might be due to invalid IL or missing references)
		//IL_1b73: Unknown result type (might be due to invalid IL or missing references)
		//IL_1b78: Unknown result type (might be due to invalid IL or missing references)
		//IL_1b9c: Unknown result type (might be due to invalid IL or missing references)
		//IL_1ba1: Unknown result type (might be due to invalid IL or missing references)
		//IL_1ba5: Unknown result type (might be due to invalid IL or missing references)
		//IL_1baa: Unknown result type (might be due to invalid IL or missing references)
		//IL_1bce: Unknown result type (might be due to invalid IL or missing references)
		//IL_1bd3: Unknown result type (might be due to invalid IL or missing references)
		//IL_1bd7: Unknown result type (might be due to invalid IL or missing references)
		//IL_1bdc: Unknown result type (might be due to invalid IL or missing references)
		//IL_1bf8: Unknown result type (might be due to invalid IL or missing references)
		//IL_1bfd: Unknown result type (might be due to invalid IL or missing references)
		//IL_1c01: Unknown result type (might be due to invalid IL or missing references)
		//IL_1c06: Unknown result type (might be due to invalid IL or missing references)
		//IL_1c27: Unknown result type (might be due to invalid IL or missing references)
		//IL_1c2c: Unknown result type (might be due to invalid IL or missing references)
		//IL_1c30: Unknown result type (might be due to invalid IL or missing references)
		//IL_1c35: Unknown result type (might be due to invalid IL or missing references)
		//IL_1c62: Unknown result type (might be due to invalid IL or missing references)
		//IL_1c67: Unknown result type (might be due to invalid IL or missing references)
		//IL_1c7f: Unknown result type (might be due to invalid IL or missing references)
		//IL_1c84: Unknown result type (might be due to invalid IL or missing references)
		//IL_1c93: Unknown result type (might be due to invalid IL or missing references)
		//IL_1c98: Unknown result type (might be due to invalid IL or missing references)
		//IL_1c9c: Unknown result type (might be due to invalid IL or missing references)
		//IL_1ca1: Unknown result type (might be due to invalid IL or missing references)
		//IL_1cca: Unknown result type (might be due to invalid IL or missing references)
		//IL_1ccf: Unknown result type (might be due to invalid IL or missing references)
		//IL_1ce7: Unknown result type (might be due to invalid IL or missing references)
		//IL_1cec: Unknown result type (might be due to invalid IL or missing references)
		//IL_1cfb: Unknown result type (might be due to invalid IL or missing references)
		//IL_1d00: Unknown result type (might be due to invalid IL or missing references)
		//IL_1d04: Unknown result type (might be due to invalid IL or missing references)
		//IL_1d09: Unknown result type (might be due to invalid IL or missing references)
		//IL_1d32: Unknown result type (might be due to invalid IL or missing references)
		//IL_1d37: Unknown result type (might be due to invalid IL or missing references)
		//IL_1d4f: Unknown result type (might be due to invalid IL or missing references)
		//IL_1d54: Unknown result type (might be due to invalid IL or missing references)
		//IL_1d6f: Unknown result type (might be due to invalid IL or missing references)
		//IL_1d74: Unknown result type (might be due to invalid IL or missing references)
		//IL_1d8c: Unknown result type (might be due to invalid IL or missing references)
		//IL_1d91: Unknown result type (might be due to invalid IL or missing references)
		//IL_1da3: Unknown result type (might be due to invalid IL or missing references)
		//IL_1da8: Unknown result type (might be due to invalid IL or missing references)
		//IL_1dac: Unknown result type (might be due to invalid IL or missing references)
		//IL_1db1: Unknown result type (might be due to invalid IL or missing references)
		//IL_1dd5: Unknown result type (might be due to invalid IL or missing references)
		//IL_1dda: Unknown result type (might be due to invalid IL or missing references)
		//IL_1dde: Unknown result type (might be due to invalid IL or missing references)
		//IL_1de3: Unknown result type (might be due to invalid IL or missing references)
		//IL_1e04: Unknown result type (might be due to invalid IL or missing references)
		//IL_1e09: Unknown result type (might be due to invalid IL or missing references)
		//IL_1e0d: Unknown result type (might be due to invalid IL or missing references)
		//IL_1e12: Unknown result type (might be due to invalid IL or missing references)
		//IL_1e33: Unknown result type (might be due to invalid IL or missing references)
		//IL_1e38: Unknown result type (might be due to invalid IL or missing references)
		//IL_1e3c: Unknown result type (might be due to invalid IL or missing references)
		//IL_1e41: Unknown result type (might be due to invalid IL or missing references)
		//IL_1e73: Unknown result type (might be due to invalid IL or missing references)
		//IL_1e78: Unknown result type (might be due to invalid IL or missing references)
		//IL_1e7c: Unknown result type (might be due to invalid IL or missing references)
		//IL_1e95: Unknown result type (might be due to invalid IL or missing references)
		//IL_1e9a: Unknown result type (might be due to invalid IL or missing references)
		//IL_1e9e: Unknown result type (might be due to invalid IL or missing references)
		//IL_1eae: Unknown result type (might be due to invalid IL or missing references)
		//IL_1eb3: Unknown result type (might be due to invalid IL or missing references)
		//IL_1eb7: Unknown result type (might be due to invalid IL or missing references)
		//IL_1ed0: Unknown result type (might be due to invalid IL or missing references)
		//IL_1ed5: Unknown result type (might be due to invalid IL or missing references)
		//IL_1ed9: Unknown result type (might be due to invalid IL or missing references)
		//IL_1ee9: Unknown result type (might be due to invalid IL or missing references)
		//IL_1eee: Unknown result type (might be due to invalid IL or missing references)
		//IL_1ef2: Unknown result type (might be due to invalid IL or missing references)
		//IL_1f0b: Unknown result type (might be due to invalid IL or missing references)
		//IL_1f10: Unknown result type (might be due to invalid IL or missing references)
		//IL_1f14: Unknown result type (might be due to invalid IL or missing references)
		//IL_1f24: Unknown result type (might be due to invalid IL or missing references)
		//IL_1f29: Unknown result type (might be due to invalid IL or missing references)
		//IL_1f41: Unknown result type (might be due to invalid IL or missing references)
		//IL_1f46: Unknown result type (might be due to invalid IL or missing references)
		//IL_1f55: Unknown result type (might be due to invalid IL or missing references)
		//IL_1f5a: Unknown result type (might be due to invalid IL or missing references)
		//IL_1f5e: Unknown result type (might be due to invalid IL or missing references)
		//IL_1f63: Unknown result type (might be due to invalid IL or missing references)
		//IL_1fa8: Unknown result type (might be due to invalid IL or missing references)
		//IL_1fad: Unknown result type (might be due to invalid IL or missing references)
		//IL_1fe0: Unknown result type (might be due to invalid IL or missing references)
		//IL_1fe5: Unknown result type (might be due to invalid IL or missing references)
		//IL_1ff4: Unknown result type (might be due to invalid IL or missing references)
		//IL_1ff9: Unknown result type (might be due to invalid IL or missing references)
		//IL_1ffd: Unknown result type (might be due to invalid IL or missing references)
		//IL_2002: Unknown result type (might be due to invalid IL or missing references)
		//IL_2023: Unknown result type (might be due to invalid IL or missing references)
		//IL_2028: Unknown result type (might be due to invalid IL or missing references)
		//IL_202c: Unknown result type (might be due to invalid IL or missing references)
		//IL_2031: Unknown result type (might be due to invalid IL or missing references)
		//IL_2066: Unknown result type (might be due to invalid IL or missing references)
		//IL_206b: Unknown result type (might be due to invalid IL or missing references)
		//IL_206f: Unknown result type (might be due to invalid IL or missing references)
		//IL_2074: Unknown result type (might be due to invalid IL or missing references)
		//IL_2078: Unknown result type (might be due to invalid IL or missing references)
		//IL_207d: Unknown result type (might be due to invalid IL or missing references)
		//IL_20a1: Unknown result type (might be due to invalid IL or missing references)
		//IL_20a6: Unknown result type (might be due to invalid IL or missing references)
		//IL_20aa: Unknown result type (might be due to invalid IL or missing references)
		//IL_20af: Unknown result type (might be due to invalid IL or missing references)
		//IL_20b3: Unknown result type (might be due to invalid IL or missing references)
		//IL_20b8: Unknown result type (might be due to invalid IL or missing references)
		//IL_20d9: Unknown result type (might be due to invalid IL or missing references)
		//IL_20de: Unknown result type (might be due to invalid IL or missing references)
		//IL_20e2: Unknown result type (might be due to invalid IL or missing references)
		//IL_20e7: Unknown result type (might be due to invalid IL or missing references)
		//IL_20eb: Unknown result type (might be due to invalid IL or missing references)
		//IL_20f0: Unknown result type (might be due to invalid IL or missing references)
		//IL_2111: Unknown result type (might be due to invalid IL or missing references)
		//IL_2116: Unknown result type (might be due to invalid IL or missing references)
		//IL_211a: Unknown result type (might be due to invalid IL or missing references)
		//IL_211f: Unknown result type (might be due to invalid IL or missing references)
		//IL_2123: Unknown result type (might be due to invalid IL or missing references)
		//IL_2128: Unknown result type (might be due to invalid IL or missing references)
		//IL_2155: Unknown result type (might be due to invalid IL or missing references)
		//IL_215a: Unknown result type (might be due to invalid IL or missing references)
		//IL_215e: Unknown result type (might be due to invalid IL or missing references)
		//IL_2163: Unknown result type (might be due to invalid IL or missing references)
		//IL_2174: Unknown result type (might be due to invalid IL or missing references)
		//IL_2179: Unknown result type (might be due to invalid IL or missing references)
		//IL_217d: Unknown result type (might be due to invalid IL or missing references)
		//IL_2182: Unknown result type (might be due to invalid IL or missing references)
		//IL_2193: Unknown result type (might be due to invalid IL or missing references)
		//IL_2198: Unknown result type (might be due to invalid IL or missing references)
		//IL_219c: Unknown result type (might be due to invalid IL or missing references)
		//IL_21a1: Unknown result type (might be due to invalid IL or missing references)
		//IL_21bc: Unknown result type (might be due to invalid IL or missing references)
		//IL_21c1: Unknown result type (might be due to invalid IL or missing references)
		//IL_21c5: Unknown result type (might be due to invalid IL or missing references)
		//IL_21ca: Unknown result type (might be due to invalid IL or missing references)
		//IL_21e1: Unknown result type (might be due to invalid IL or missing references)
		//IL_21e6: Unknown result type (might be due to invalid IL or missing references)
		//IL_21ea: Unknown result type (might be due to invalid IL or missing references)
		//IL_21ef: Unknown result type (might be due to invalid IL or missing references)
		//IL_2200: Unknown result type (might be due to invalid IL or missing references)
		//IL_2205: Unknown result type (might be due to invalid IL or missing references)
		//IL_2209: Unknown result type (might be due to invalid IL or missing references)
		//IL_220e: Unknown result type (might be due to invalid IL or missing references)
		//IL_222b: Unknown result type (might be due to invalid IL or missing references)
		//IL_2230: Unknown result type (might be due to invalid IL or missing references)
		//IL_2234: Unknown result type (might be due to invalid IL or missing references)
		//IL_2247: Unknown result type (might be due to invalid IL or missing references)
		//IL_224c: Unknown result type (might be due to invalid IL or missing references)
		//IL_2250: Unknown result type (might be due to invalid IL or missing references)
		//IL_2255: Unknown result type (might be due to invalid IL or missing references)
		//IL_226a: Unknown result type (might be due to invalid IL or missing references)
		//IL_226f: Unknown result type (might be due to invalid IL or missing references)
		//IL_2273: Unknown result type (might be due to invalid IL or missing references)
		//IL_2286: Unknown result type (might be due to invalid IL or missing references)
		//IL_228b: Unknown result type (might be due to invalid IL or missing references)
		//IL_228f: Unknown result type (might be due to invalid IL or missing references)
		//IL_2294: Unknown result type (might be due to invalid IL or missing references)
		//IL_22a9: Unknown result type (might be due to invalid IL or missing references)
		//IL_22ae: Unknown result type (might be due to invalid IL or missing references)
		//IL_22b2: Unknown result type (might be due to invalid IL or missing references)
		//IL_22c5: Unknown result type (might be due to invalid IL or missing references)
		//IL_22ca: Unknown result type (might be due to invalid IL or missing references)
		//IL_22ce: Unknown result type (might be due to invalid IL or missing references)
		//IL_22d3: Unknown result type (might be due to invalid IL or missing references)
		//IL_22e8: Unknown result type (might be due to invalid IL or missing references)
		//IL_22ed: Unknown result type (might be due to invalid IL or missing references)
		//IL_22f1: Unknown result type (might be due to invalid IL or missing references)
		//IL_22f6: Unknown result type (might be due to invalid IL or missing references)
		//IL_2307: Unknown result type (might be due to invalid IL or missing references)
		//IL_230c: Unknown result type (might be due to invalid IL or missing references)
		//IL_2310: Unknown result type (might be due to invalid IL or missing references)
		//IL_2315: Unknown result type (might be due to invalid IL or missing references)
		//IL_2326: Unknown result type (might be due to invalid IL or missing references)
		//IL_232b: Unknown result type (might be due to invalid IL or missing references)
		//IL_232f: Unknown result type (might be due to invalid IL or missing references)
		//IL_2334: Unknown result type (might be due to invalid IL or missing references)
		//IL_234f: Unknown result type (might be due to invalid IL or missing references)
		//IL_2354: Unknown result type (might be due to invalid IL or missing references)
		//IL_2358: Unknown result type (might be due to invalid IL or missing references)
		//IL_235d: Unknown result type (might be due to invalid IL or missing references)
		//IL_2374: Unknown result type (might be due to invalid IL or missing references)
		//IL_2379: Unknown result type (might be due to invalid IL or missing references)
		//IL_237d: Unknown result type (might be due to invalid IL or missing references)
		//IL_2382: Unknown result type (might be due to invalid IL or missing references)
		//IL_2393: Unknown result type (might be due to invalid IL or missing references)
		//IL_2398: Unknown result type (might be due to invalid IL or missing references)
		//IL_239c: Unknown result type (might be due to invalid IL or missing references)
		//IL_23a1: Unknown result type (might be due to invalid IL or missing references)
		//IL_23be: Unknown result type (might be due to invalid IL or missing references)
		//IL_23c3: Unknown result type (might be due to invalid IL or missing references)
		//IL_23c7: Unknown result type (might be due to invalid IL or missing references)
		//IL_23cc: Unknown result type (might be due to invalid IL or missing references)
		//IL_23dd: Unknown result type (might be due to invalid IL or missing references)
		//IL_23e2: Unknown result type (might be due to invalid IL or missing references)
		//IL_23e6: Unknown result type (might be due to invalid IL or missing references)
		//IL_23eb: Unknown result type (might be due to invalid IL or missing references)
		//IL_23fc: Unknown result type (might be due to invalid IL or missing references)
		//IL_2401: Unknown result type (might be due to invalid IL or missing references)
		//IL_2405: Unknown result type (might be due to invalid IL or missing references)
		//IL_240a: Unknown result type (might be due to invalid IL or missing references)
		//IL_2425: Unknown result type (might be due to invalid IL or missing references)
		//IL_242a: Unknown result type (might be due to invalid IL or missing references)
		//IL_242e: Unknown result type (might be due to invalid IL or missing references)
		//IL_2433: Unknown result type (might be due to invalid IL or missing references)
		//IL_244a: Unknown result type (might be due to invalid IL or missing references)
		//IL_244f: Unknown result type (might be due to invalid IL or missing references)
		//IL_2453: Unknown result type (might be due to invalid IL or missing references)
		//IL_2458: Unknown result type (might be due to invalid IL or missing references)
		//IL_2469: Unknown result type (might be due to invalid IL or missing references)
		//IL_246e: Unknown result type (might be due to invalid IL or missing references)
		//IL_2472: Unknown result type (might be due to invalid IL or missing references)
		//IL_2477: Unknown result type (might be due to invalid IL or missing references)
		//IL_2494: Unknown result type (might be due to invalid IL or missing references)
		//IL_2499: Unknown result type (might be due to invalid IL or missing references)
		//IL_249d: Unknown result type (might be due to invalid IL or missing references)
		//IL_24b0: Unknown result type (might be due to invalid IL or missing references)
		//IL_24b5: Unknown result type (might be due to invalid IL or missing references)
		//IL_24b9: Unknown result type (might be due to invalid IL or missing references)
		//IL_24be: Unknown result type (might be due to invalid IL or missing references)
		//IL_24d3: Unknown result type (might be due to invalid IL or missing references)
		//IL_24d8: Unknown result type (might be due to invalid IL or missing references)
		//IL_24dc: Unknown result type (might be due to invalid IL or missing references)
		//IL_24ef: Unknown result type (might be due to invalid IL or missing references)
		//IL_24f4: Unknown result type (might be due to invalid IL or missing references)
		//IL_24f8: Unknown result type (might be due to invalid IL or missing references)
		//IL_24fd: Unknown result type (might be due to invalid IL or missing references)
		//IL_2512: Unknown result type (might be due to invalid IL or missing references)
		//IL_2517: Unknown result type (might be due to invalid IL or missing references)
		//IL_251b: Unknown result type (might be due to invalid IL or missing references)
		//IL_252e: Unknown result type (might be due to invalid IL or missing references)
		//IL_2533: Unknown result type (might be due to invalid IL or missing references)
		//IL_2537: Unknown result type (might be due to invalid IL or missing references)
		//IL_253c: Unknown result type (might be due to invalid IL or missing references)
		//IL_2551: Unknown result type (might be due to invalid IL or missing references)
		//IL_2556: Unknown result type (might be due to invalid IL or missing references)
		//IL_255a: Unknown result type (might be due to invalid IL or missing references)
		//IL_256d: Unknown result type (might be due to invalid IL or missing references)
		//IL_2572: Unknown result type (might be due to invalid IL or missing references)
		//IL_2576: Unknown result type (might be due to invalid IL or missing references)
		//IL_257b: Unknown result type (might be due to invalid IL or missing references)
		//IL_2590: Unknown result type (might be due to invalid IL or missing references)
		//IL_2595: Unknown result type (might be due to invalid IL or missing references)
		//IL_2599: Unknown result type (might be due to invalid IL or missing references)
		//IL_25ac: Unknown result type (might be due to invalid IL or missing references)
		//IL_25b1: Unknown result type (might be due to invalid IL or missing references)
		//IL_25b5: Unknown result type (might be due to invalid IL or missing references)
		//IL_25ba: Unknown result type (might be due to invalid IL or missing references)
		//IL_25cf: Unknown result type (might be due to invalid IL or missing references)
		//IL_25d4: Unknown result type (might be due to invalid IL or missing references)
		//IL_25d8: Unknown result type (might be due to invalid IL or missing references)
		//IL_25eb: Unknown result type (might be due to invalid IL or missing references)
		//IL_25f0: Unknown result type (might be due to invalid IL or missing references)
		//IL_25f4: Unknown result type (might be due to invalid IL or missing references)
		//IL_25f9: Unknown result type (might be due to invalid IL or missing references)
		//IL_2646: Unknown result type (might be due to invalid IL or missing references)
		//IL_264b: Unknown result type (might be due to invalid IL or missing references)
		//IL_2671: Unknown result type (might be due to invalid IL or missing references)
		//IL_2676: Unknown result type (might be due to invalid IL or missing references)
		//IL_269c: Unknown result type (might be due to invalid IL or missing references)
		//IL_26a1: Unknown result type (might be due to invalid IL or missing references)
		//IL_26c7: Unknown result type (might be due to invalid IL or missing references)
		//IL_26cc: Unknown result type (might be due to invalid IL or missing references)
		//IL_26ff: Unknown result type (might be due to invalid IL or missing references)
		//IL_2704: Unknown result type (might be due to invalid IL or missing references)
		//IL_271b: Unknown result type (might be due to invalid IL or missing references)
		//IL_2720: Unknown result type (might be due to invalid IL or missing references)
		//IL_2724: Unknown result type (might be due to invalid IL or missing references)
		//IL_2729: Unknown result type (might be due to invalid IL or missing references)
		//IL_272d: Unknown result type (might be due to invalid IL or missing references)
		//IL_2732: Unknown result type (might be due to invalid IL or missing references)
		//IL_2753: Unknown result type (might be due to invalid IL or missing references)
		//IL_2758: Unknown result type (might be due to invalid IL or missing references)
		//IL_275c: Unknown result type (might be due to invalid IL or missing references)
		//IL_2761: Unknown result type (might be due to invalid IL or missing references)
		//IL_2765: Unknown result type (might be due to invalid IL or missing references)
		//IL_276a: Unknown result type (might be due to invalid IL or missing references)
		//IL_2797: Unknown result type (might be due to invalid IL or missing references)
		//IL_279c: Unknown result type (might be due to invalid IL or missing references)
		//IL_27a0: Unknown result type (might be due to invalid IL or missing references)
		//IL_27a5: Unknown result type (might be due to invalid IL or missing references)
		//IL_27a9: Unknown result type (might be due to invalid IL or missing references)
		//IL_27bb: Unknown result type (might be due to invalid IL or missing references)
		//IL_27c0: Unknown result type (might be due to invalid IL or missing references)
		//IL_27c4: Unknown result type (might be due to invalid IL or missing references)
		//IL_27c9: Unknown result type (might be due to invalid IL or missing references)
		//IL_27cd: Unknown result type (might be due to invalid IL or missing references)
		//IL_27df: Unknown result type (might be due to invalid IL or missing references)
		//IL_27e4: Unknown result type (might be due to invalid IL or missing references)
		//IL_27e8: Unknown result type (might be due to invalid IL or missing references)
		//IL_27ed: Unknown result type (might be due to invalid IL or missing references)
		//IL_27f1: Unknown result type (might be due to invalid IL or missing references)
		//IL_2803: Unknown result type (might be due to invalid IL or missing references)
		//IL_2808: Unknown result type (might be due to invalid IL or missing references)
		//IL_280c: Unknown result type (might be due to invalid IL or missing references)
		//IL_2811: Unknown result type (might be due to invalid IL or missing references)
		//IL_2815: Unknown result type (might be due to invalid IL or missing references)
		//IL_2832: Unknown result type (might be due to invalid IL or missing references)
		//IL_2837: Unknown result type (might be due to invalid IL or missing references)
		//IL_283b: Unknown result type (might be due to invalid IL or missing references)
		//IL_2840: Unknown result type (might be due to invalid IL or missing references)
		//IL_2844: Unknown result type (might be due to invalid IL or missing references)
		//IL_2855: Unknown result type (might be due to invalid IL or missing references)
		//IL_285a: Unknown result type (might be due to invalid IL or missing references)
		//IL_285e: Unknown result type (might be due to invalid IL or missing references)
		//IL_2863: Unknown result type (might be due to invalid IL or missing references)
		//IL_2867: Unknown result type (might be due to invalid IL or missing references)
		//IL_2878: Unknown result type (might be due to invalid IL or missing references)
		//IL_287d: Unknown result type (might be due to invalid IL or missing references)
		//IL_2881: Unknown result type (might be due to invalid IL or missing references)
		//IL_2886: Unknown result type (might be due to invalid IL or missing references)
		//IL_288a: Unknown result type (might be due to invalid IL or missing references)
		//IL_289b: Unknown result type (might be due to invalid IL or missing references)
		//IL_28a0: Unknown result type (might be due to invalid IL or missing references)
		//IL_28a4: Unknown result type (might be due to invalid IL or missing references)
		//IL_28a9: Unknown result type (might be due to invalid IL or missing references)
		//IL_28ad: Unknown result type (might be due to invalid IL or missing references)
		//IL_28ca: Unknown result type (might be due to invalid IL or missing references)
		//IL_28cf: Unknown result type (might be due to invalid IL or missing references)
		//IL_28d3: Unknown result type (might be due to invalid IL or missing references)
		//IL_28d8: Unknown result type (might be due to invalid IL or missing references)
		//IL_28ee: Unknown result type (might be due to invalid IL or missing references)
		//IL_28f3: Unknown result type (might be due to invalid IL or missing references)
		//IL_28f7: Unknown result type (might be due to invalid IL or missing references)
		//IL_28fc: Unknown result type (might be due to invalid IL or missing references)
		//IL_2900: Unknown result type (might be due to invalid IL or missing references)
		//IL_2912: Unknown result type (might be due to invalid IL or missing references)
		//IL_2917: Unknown result type (might be due to invalid IL or missing references)
		//IL_291b: Unknown result type (might be due to invalid IL or missing references)
		//IL_2920: Unknown result type (might be due to invalid IL or missing references)
		//IL_2924: Unknown result type (might be due to invalid IL or missing references)
		//IL_2936: Unknown result type (might be due to invalid IL or missing references)
		//IL_293b: Unknown result type (might be due to invalid IL or missing references)
		//IL_293f: Unknown result type (might be due to invalid IL or missing references)
		//IL_2944: Unknown result type (might be due to invalid IL or missing references)
		//IL_2948: Unknown result type (might be due to invalid IL or missing references)
		//IL_295a: Unknown result type (might be due to invalid IL or missing references)
		//IL_295f: Unknown result type (might be due to invalid IL or missing references)
		//IL_2963: Unknown result type (might be due to invalid IL or missing references)
		//IL_2968: Unknown result type (might be due to invalid IL or missing references)
		//IL_296c: Unknown result type (might be due to invalid IL or missing references)
		//IL_2989: Unknown result type (might be due to invalid IL or missing references)
		//IL_298e: Unknown result type (might be due to invalid IL or missing references)
		//IL_2992: Unknown result type (might be due to invalid IL or missing references)
		//IL_2997: Unknown result type (might be due to invalid IL or missing references)
		//IL_299b: Unknown result type (might be due to invalid IL or missing references)
		//IL_29ac: Unknown result type (might be due to invalid IL or missing references)
		//IL_29b1: Unknown result type (might be due to invalid IL or missing references)
		//IL_29b5: Unknown result type (might be due to invalid IL or missing references)
		//IL_29ba: Unknown result type (might be due to invalid IL or missing references)
		//IL_29be: Unknown result type (might be due to invalid IL or missing references)
		//IL_29cf: Unknown result type (might be due to invalid IL or missing references)
		//IL_29d4: Unknown result type (might be due to invalid IL or missing references)
		//IL_29d8: Unknown result type (might be due to invalid IL or missing references)
		//IL_29dd: Unknown result type (might be due to invalid IL or missing references)
		//IL_29e1: Unknown result type (might be due to invalid IL or missing references)
		//IL_29f2: Unknown result type (might be due to invalid IL or missing references)
		//IL_29f7: Unknown result type (might be due to invalid IL or missing references)
		//IL_29fb: Unknown result type (might be due to invalid IL or missing references)
		//IL_2a00: Unknown result type (might be due to invalid IL or missing references)
		//IL_2a04: Unknown result type (might be due to invalid IL or missing references)
		//IL_2a21: Unknown result type (might be due to invalid IL or missing references)
		//IL_2a26: Unknown result type (might be due to invalid IL or missing references)
		//IL_2a2a: Unknown result type (might be due to invalid IL or missing references)
		//IL_2a2f: Unknown result type (might be due to invalid IL or missing references)
		//IL_2a33: Unknown result type (might be due to invalid IL or missing references)
		//IL_2a45: Unknown result type (might be due to invalid IL or missing references)
		//IL_2a4a: Unknown result type (might be due to invalid IL or missing references)
		//IL_2a4e: Unknown result type (might be due to invalid IL or missing references)
		//IL_2a53: Unknown result type (might be due to invalid IL or missing references)
		//IL_2a57: Unknown result type (might be due to invalid IL or missing references)
		//IL_2a69: Unknown result type (might be due to invalid IL or missing references)
		//IL_2a6e: Unknown result type (might be due to invalid IL or missing references)
		//IL_2a72: Unknown result type (might be due to invalid IL or missing references)
		//IL_2a77: Unknown result type (might be due to invalid IL or missing references)
		//IL_2a7b: Unknown result type (might be due to invalid IL or missing references)
		//IL_2a8d: Unknown result type (might be due to invalid IL or missing references)
		//IL_2a92: Unknown result type (might be due to invalid IL or missing references)
		//IL_2a96: Unknown result type (might be due to invalid IL or missing references)
		//IL_2a9b: Unknown result type (might be due to invalid IL or missing references)
		//IL_2a9f: Unknown result type (might be due to invalid IL or missing references)
		//IL_2abc: Unknown result type (might be due to invalid IL or missing references)
		//IL_2ac1: Unknown result type (might be due to invalid IL or missing references)
		//IL_2ac5: Unknown result type (might be due to invalid IL or missing references)
		//IL_2aca: Unknown result type (might be due to invalid IL or missing references)
		//IL_2ace: Unknown result type (might be due to invalid IL or missing references)
		//IL_2adf: Unknown result type (might be due to invalid IL or missing references)
		//IL_2ae4: Unknown result type (might be due to invalid IL or missing references)
		//IL_2ae8: Unknown result type (might be due to invalid IL or missing references)
		//IL_2aed: Unknown result type (might be due to invalid IL or missing references)
		//IL_2af1: Unknown result type (might be due to invalid IL or missing references)
		//IL_2b02: Unknown result type (might be due to invalid IL or missing references)
		//IL_2b07: Unknown result type (might be due to invalid IL or missing references)
		//IL_2b0b: Unknown result type (might be due to invalid IL or missing references)
		//IL_2b10: Unknown result type (might be due to invalid IL or missing references)
		//IL_2b14: Unknown result type (might be due to invalid IL or missing references)
		//IL_2b25: Unknown result type (might be due to invalid IL or missing references)
		//IL_2b2a: Unknown result type (might be due to invalid IL or missing references)
		//IL_2b2e: Unknown result type (might be due to invalid IL or missing references)
		//IL_2b33: Unknown result type (might be due to invalid IL or missing references)
		//IL_2b37: Unknown result type (might be due to invalid IL or missing references)
		//IL_2b54: Unknown result type (might be due to invalid IL or missing references)
		//IL_2b59: Unknown result type (might be due to invalid IL or missing references)
		//IL_2b5d: Unknown result type (might be due to invalid IL or missing references)
		//IL_2b62: Unknown result type (might be due to invalid IL or missing references)
		//IL_2b78: Unknown result type (might be due to invalid IL or missing references)
		//IL_2b7d: Unknown result type (might be due to invalid IL or missing references)
		//IL_2b81: Unknown result type (might be due to invalid IL or missing references)
		//IL_2b86: Unknown result type (might be due to invalid IL or missing references)
		//IL_2bd4: Unknown result type (might be due to invalid IL or missing references)
		//IL_2bd9: Unknown result type (might be due to invalid IL or missing references)
		//IL_2bff: Unknown result type (might be due to invalid IL or missing references)
		//IL_2c04: Unknown result type (might be due to invalid IL or missing references)
		//IL_2c37: Unknown result type (might be due to invalid IL or missing references)
		//IL_2c3c: Unknown result type (might be due to invalid IL or missing references)
		//IL_2c53: Unknown result type (might be due to invalid IL or missing references)
		//IL_2c58: Unknown result type (might be due to invalid IL or missing references)
		//IL_2c5c: Unknown result type (might be due to invalid IL or missing references)
		//IL_2c61: Unknown result type (might be due to invalid IL or missing references)
		//IL_2c65: Unknown result type (might be due to invalid IL or missing references)
		//IL_2c6a: Unknown result type (might be due to invalid IL or missing references)
		//IL_2c8b: Unknown result type (might be due to invalid IL or missing references)
		//IL_2c90: Unknown result type (might be due to invalid IL or missing references)
		//IL_2c94: Unknown result type (might be due to invalid IL or missing references)
		//IL_2c99: Unknown result type (might be due to invalid IL or missing references)
		//IL_2c9d: Unknown result type (might be due to invalid IL or missing references)
		//IL_2ca2: Unknown result type (might be due to invalid IL or missing references)
		//IL_2cc3: Unknown result type (might be due to invalid IL or missing references)
		//IL_2cc8: Unknown result type (might be due to invalid IL or missing references)
		//IL_2ccc: Unknown result type (might be due to invalid IL or missing references)
		//IL_2cd1: Unknown result type (might be due to invalid IL or missing references)
		//IL_2cd5: Unknown result type (might be due to invalid IL or missing references)
		//IL_2cda: Unknown result type (might be due to invalid IL or missing references)
		//IL_2d07: Unknown result type (might be due to invalid IL or missing references)
		//IL_2d0c: Unknown result type (might be due to invalid IL or missing references)
		//IL_2d1f: Unknown result type (might be due to invalid IL or missing references)
		//IL_2d24: Unknown result type (might be due to invalid IL or missing references)
		//IL_2d33: Unknown result type (might be due to invalid IL or missing references)
		//IL_2d38: Unknown result type (might be due to invalid IL or missing references)
		//IL_2d3c: Unknown result type (might be due to invalid IL or missing references)
		//IL_2d4f: Unknown result type (might be due to invalid IL or missing references)
		//IL_2d54: Unknown result type (might be due to invalid IL or missing references)
		//IL_2d58: Unknown result type (might be due to invalid IL or missing references)
		//IL_2d5d: Unknown result type (might be due to invalid IL or missing references)
		//IL_2d72: Unknown result type (might be due to invalid IL or missing references)
		//IL_2d77: Unknown result type (might be due to invalid IL or missing references)
		//IL_2d7b: Unknown result type (might be due to invalid IL or missing references)
		//IL_2d8e: Unknown result type (might be due to invalid IL or missing references)
		//IL_2d93: Unknown result type (might be due to invalid IL or missing references)
		//IL_2d97: Unknown result type (might be due to invalid IL or missing references)
		//IL_2d9c: Unknown result type (might be due to invalid IL or missing references)
		//IL_2db1: Unknown result type (might be due to invalid IL or missing references)
		//IL_2db6: Unknown result type (might be due to invalid IL or missing references)
		//IL_2dba: Unknown result type (might be due to invalid IL or missing references)
		//IL_2dcd: Unknown result type (might be due to invalid IL or missing references)
		//IL_2dd2: Unknown result type (might be due to invalid IL or missing references)
		//IL_2dd6: Unknown result type (might be due to invalid IL or missing references)
		//IL_2ddb: Unknown result type (might be due to invalid IL or missing references)
		//IL_2df0: Unknown result type (might be due to invalid IL or missing references)
		//IL_2df5: Unknown result type (might be due to invalid IL or missing references)
		//IL_2df9: Unknown result type (might be due to invalid IL or missing references)
		//IL_2e0c: Unknown result type (might be due to invalid IL or missing references)
		//IL_2e11: Unknown result type (might be due to invalid IL or missing references)
		//IL_2e15: Unknown result type (might be due to invalid IL or missing references)
		//IL_2e1a: Unknown result type (might be due to invalid IL or missing references)
		//IL_2e2f: Unknown result type (might be due to invalid IL or missing references)
		//IL_2e34: Unknown result type (might be due to invalid IL or missing references)
		//IL_2e38: Unknown result type (might be due to invalid IL or missing references)
		//IL_2e3d: Unknown result type (might be due to invalid IL or missing references)
		//IL_2e55: Unknown result type (might be due to invalid IL or missing references)
		//IL_2e5a: Unknown result type (might be due to invalid IL or missing references)
		//IL_2e5e: Unknown result type (might be due to invalid IL or missing references)
		//IL_2e63: Unknown result type (might be due to invalid IL or missing references)
		//IL_2e72: Unknown result type (might be due to invalid IL or missing references)
		//IL_2e77: Unknown result type (might be due to invalid IL or missing references)
		//IL_2e7b: Unknown result type (might be due to invalid IL or missing references)
		//IL_2e80: Unknown result type (might be due to invalid IL or missing references)
		//IL_2e98: Unknown result type (might be due to invalid IL or missing references)
		//IL_2e9d: Unknown result type (might be due to invalid IL or missing references)
		//IL_2ea1: Unknown result type (might be due to invalid IL or missing references)
		//IL_2ea6: Unknown result type (might be due to invalid IL or missing references)
		//IL_2eb5: Unknown result type (might be due to invalid IL or missing references)
		//IL_2eba: Unknown result type (might be due to invalid IL or missing references)
		//IL_2ebe: Unknown result type (might be due to invalid IL or missing references)
		//IL_2ec3: Unknown result type (might be due to invalid IL or missing references)
		//IL_2ed4: Unknown result type (might be due to invalid IL or missing references)
		//IL_2ed9: Unknown result type (might be due to invalid IL or missing references)
		//IL_2edd: Unknown result type (might be due to invalid IL or missing references)
		//IL_2ee2: Unknown result type (might be due to invalid IL or missing references)
		//IL_2ef3: Unknown result type (might be due to invalid IL or missing references)
		//IL_2ef8: Unknown result type (might be due to invalid IL or missing references)
		//IL_2efc: Unknown result type (might be due to invalid IL or missing references)
		//IL_2f01: Unknown result type (might be due to invalid IL or missing references)
		//IL_2f1c: Unknown result type (might be due to invalid IL or missing references)
		//IL_2f21: Unknown result type (might be due to invalid IL or missing references)
		//IL_2f25: Unknown result type (might be due to invalid IL or missing references)
		//IL_2f2a: Unknown result type (might be due to invalid IL or missing references)
		//IL_2f3b: Unknown result type (might be due to invalid IL or missing references)
		//IL_2f40: Unknown result type (might be due to invalid IL or missing references)
		//IL_2f44: Unknown result type (might be due to invalid IL or missing references)
		//IL_2f49: Unknown result type (might be due to invalid IL or missing references)
		//IL_2f5a: Unknown result type (might be due to invalid IL or missing references)
		//IL_2f5f: Unknown result type (might be due to invalid IL or missing references)
		//IL_2f63: Unknown result type (might be due to invalid IL or missing references)
		//IL_2f68: Unknown result type (might be due to invalid IL or missing references)
		//IL_2f85: Unknown result type (might be due to invalid IL or missing references)
		//IL_2f8a: Unknown result type (might be due to invalid IL or missing references)
		//IL_2f8e: Unknown result type (might be due to invalid IL or missing references)
		//IL_2f93: Unknown result type (might be due to invalid IL or missing references)
		//IL_2fa4: Unknown result type (might be due to invalid IL or missing references)
		//IL_2fa9: Unknown result type (might be due to invalid IL or missing references)
		//IL_2fad: Unknown result type (might be due to invalid IL or missing references)
		//IL_2fb2: Unknown result type (might be due to invalid IL or missing references)
		//IL_2fc3: Unknown result type (might be due to invalid IL or missing references)
		//IL_2fc8: Unknown result type (might be due to invalid IL or missing references)
		//IL_2fcc: Unknown result type (might be due to invalid IL or missing references)
		//IL_2fd1: Unknown result type (might be due to invalid IL or missing references)
		//IL_2fec: Unknown result type (might be due to invalid IL or missing references)
		//IL_2ff1: Unknown result type (might be due to invalid IL or missing references)
		//IL_2ff5: Unknown result type (might be due to invalid IL or missing references)
		//IL_2ffa: Unknown result type (might be due to invalid IL or missing references)
		//IL_300b: Unknown result type (might be due to invalid IL or missing references)
		//IL_3010: Unknown result type (might be due to invalid IL or missing references)
		//IL_3014: Unknown result type (might be due to invalid IL or missing references)
		//IL_3019: Unknown result type (might be due to invalid IL or missing references)
		//IL_302a: Unknown result type (might be due to invalid IL or missing references)
		//IL_302f: Unknown result type (might be due to invalid IL or missing references)
		//IL_3033: Unknown result type (might be due to invalid IL or missing references)
		//IL_3038: Unknown result type (might be due to invalid IL or missing references)
		//IL_3055: Unknown result type (might be due to invalid IL or missing references)
		//IL_305a: Unknown result type (might be due to invalid IL or missing references)
		//IL_305e: Unknown result type (might be due to invalid IL or missing references)
		//IL_3071: Unknown result type (might be due to invalid IL or missing references)
		//IL_3076: Unknown result type (might be due to invalid IL or missing references)
		//IL_307a: Unknown result type (might be due to invalid IL or missing references)
		//IL_307f: Unknown result type (might be due to invalid IL or missing references)
		//IL_3094: Unknown result type (might be due to invalid IL or missing references)
		//IL_3099: Unknown result type (might be due to invalid IL or missing references)
		//IL_309d: Unknown result type (might be due to invalid IL or missing references)
		//IL_30b0: Unknown result type (might be due to invalid IL or missing references)
		//IL_30b5: Unknown result type (might be due to invalid IL or missing references)
		//IL_30b9: Unknown result type (might be due to invalid IL or missing references)
		//IL_30be: Unknown result type (might be due to invalid IL or missing references)
		//IL_30d3: Unknown result type (might be due to invalid IL or missing references)
		//IL_30d8: Unknown result type (might be due to invalid IL or missing references)
		//IL_30dc: Unknown result type (might be due to invalid IL or missing references)
		//IL_30ff: Unknown result type (might be due to invalid IL or missing references)
		//IL_3104: Unknown result type (might be due to invalid IL or missing references)
		//IL_3108: Unknown result type (might be due to invalid IL or missing references)
		//IL_312b: Unknown result type (might be due to invalid IL or missing references)
		//IL_3130: Unknown result type (might be due to invalid IL or missing references)
		//IL_3134: Unknown result type (might be due to invalid IL or missing references)
		//IL_3157: Unknown result type (might be due to invalid IL or missing references)
		//IL_315c: Unknown result type (might be due to invalid IL or missing references)
		//IL_3160: Unknown result type (might be due to invalid IL or missing references)
		//IL_3183: Unknown result type (might be due to invalid IL or missing references)
		//IL_3188: Unknown result type (might be due to invalid IL or missing references)
		//IL_318c: Unknown result type (might be due to invalid IL or missing references)
		//IL_31af: Unknown result type (might be due to invalid IL or missing references)
		//IL_31b4: Unknown result type (might be due to invalid IL or missing references)
		//IL_31b8: Unknown result type (might be due to invalid IL or missing references)
		//IL_3213: Unknown result type (might be due to invalid IL or missing references)
		//IL_3218: Unknown result type (might be due to invalid IL or missing references)
		//IL_323e: Unknown result type (might be due to invalid IL or missing references)
		//IL_3243: Unknown result type (might be due to invalid IL or missing references)
		//IL_3276: Unknown result type (might be due to invalid IL or missing references)
		//IL_327b: Unknown result type (might be due to invalid IL or missing references)
		//IL_3292: Unknown result type (might be due to invalid IL or missing references)
		//IL_3297: Unknown result type (might be due to invalid IL or missing references)
		//IL_329b: Unknown result type (might be due to invalid IL or missing references)
		//IL_32a0: Unknown result type (might be due to invalid IL or missing references)
		//IL_32a4: Unknown result type (might be due to invalid IL or missing references)
		//IL_32a9: Unknown result type (might be due to invalid IL or missing references)
		//IL_32cd: Unknown result type (might be due to invalid IL or missing references)
		//IL_32d2: Unknown result type (might be due to invalid IL or missing references)
		//IL_32d6: Unknown result type (might be due to invalid IL or missing references)
		//IL_32db: Unknown result type (might be due to invalid IL or missing references)
		//IL_32df: Unknown result type (might be due to invalid IL or missing references)
		//IL_32e4: Unknown result type (might be due to invalid IL or missing references)
		//IL_3305: Unknown result type (might be due to invalid IL or missing references)
		//IL_330a: Unknown result type (might be due to invalid IL or missing references)
		//IL_330e: Unknown result type (might be due to invalid IL or missing references)
		//IL_3313: Unknown result type (might be due to invalid IL or missing references)
		//IL_3317: Unknown result type (might be due to invalid IL or missing references)
		//IL_331c: Unknown result type (might be due to invalid IL or missing references)
		//IL_333d: Unknown result type (might be due to invalid IL or missing references)
		//IL_3342: Unknown result type (might be due to invalid IL or missing references)
		//IL_3346: Unknown result type (might be due to invalid IL or missing references)
		//IL_334b: Unknown result type (might be due to invalid IL or missing references)
		//IL_334f: Unknown result type (might be due to invalid IL or missing references)
		//IL_3354: Unknown result type (might be due to invalid IL or missing references)
		//IL_3381: Unknown result type (might be due to invalid IL or missing references)
		//IL_3386: Unknown result type (might be due to invalid IL or missing references)
		//IL_3399: Unknown result type (might be due to invalid IL or missing references)
		//IL_339e: Unknown result type (might be due to invalid IL or missing references)
		//IL_33ad: Unknown result type (might be due to invalid IL or missing references)
		//IL_33b2: Unknown result type (might be due to invalid IL or missing references)
		//IL_33b6: Unknown result type (might be due to invalid IL or missing references)
		//IL_33bb: Unknown result type (might be due to invalid IL or missing references)
		//IL_33d3: Unknown result type (might be due to invalid IL or missing references)
		//IL_33d8: Unknown result type (might be due to invalid IL or missing references)
		//IL_33dc: Unknown result type (might be due to invalid IL or missing references)
		//IL_33e1: Unknown result type (might be due to invalid IL or missing references)
		//IL_33f0: Unknown result type (might be due to invalid IL or missing references)
		//IL_33f5: Unknown result type (might be due to invalid IL or missing references)
		//IL_33f9: Unknown result type (might be due to invalid IL or missing references)
		//IL_33fe: Unknown result type (might be due to invalid IL or missing references)
		//IL_3416: Unknown result type (might be due to invalid IL or missing references)
		//IL_341b: Unknown result type (might be due to invalid IL or missing references)
		//IL_341f: Unknown result type (might be due to invalid IL or missing references)
		//IL_3424: Unknown result type (might be due to invalid IL or missing references)
		//IL_3433: Unknown result type (might be due to invalid IL or missing references)
		//IL_3438: Unknown result type (might be due to invalid IL or missing references)
		//IL_343c: Unknown result type (might be due to invalid IL or missing references)
		//IL_3441: Unknown result type (might be due to invalid IL or missing references)
		//IL_3459: Unknown result type (might be due to invalid IL or missing references)
		//IL_345e: Unknown result type (might be due to invalid IL or missing references)
		//IL_3462: Unknown result type (might be due to invalid IL or missing references)
		//IL_3467: Unknown result type (might be due to invalid IL or missing references)
		//IL_3476: Unknown result type (might be due to invalid IL or missing references)
		//IL_347b: Unknown result type (might be due to invalid IL or missing references)
		//IL_347f: Unknown result type (might be due to invalid IL or missing references)
		//IL_3484: Unknown result type (might be due to invalid IL or missing references)
		//IL_3495: Unknown result type (might be due to invalid IL or missing references)
		//IL_349a: Unknown result type (might be due to invalid IL or missing references)
		//IL_349e: Unknown result type (might be due to invalid IL or missing references)
		//IL_34a3: Unknown result type (might be due to invalid IL or missing references)
		//IL_34b4: Unknown result type (might be due to invalid IL or missing references)
		//IL_34b9: Unknown result type (might be due to invalid IL or missing references)
		//IL_34bd: Unknown result type (might be due to invalid IL or missing references)
		//IL_34c2: Unknown result type (might be due to invalid IL or missing references)
		//IL_34dd: Unknown result type (might be due to invalid IL or missing references)
		//IL_34e2: Unknown result type (might be due to invalid IL or missing references)
		//IL_34e6: Unknown result type (might be due to invalid IL or missing references)
		//IL_34eb: Unknown result type (might be due to invalid IL or missing references)
		//IL_3501: Unknown result type (might be due to invalid IL or missing references)
		//IL_3506: Unknown result type (might be due to invalid IL or missing references)
		//IL_350a: Unknown result type (might be due to invalid IL or missing references)
		//IL_350f: Unknown result type (might be due to invalid IL or missing references)
		//IL_3526: Unknown result type (might be due to invalid IL or missing references)
		//IL_352b: Unknown result type (might be due to invalid IL or missing references)
		//IL_352f: Unknown result type (might be due to invalid IL or missing references)
		//IL_3534: Unknown result type (might be due to invalid IL or missing references)
		//IL_3552: Unknown result type (might be due to invalid IL or missing references)
		//IL_3557: Unknown result type (might be due to invalid IL or missing references)
		//IL_355b: Unknown result type (might be due to invalid IL or missing references)
		//IL_3560: Unknown result type (might be due to invalid IL or missing references)
		//IL_3571: Unknown result type (might be due to invalid IL or missing references)
		//IL_3576: Unknown result type (might be due to invalid IL or missing references)
		//IL_357a: Unknown result type (might be due to invalid IL or missing references)
		//IL_357f: Unknown result type (might be due to invalid IL or missing references)
		//IL_3590: Unknown result type (might be due to invalid IL or missing references)
		//IL_3595: Unknown result type (might be due to invalid IL or missing references)
		//IL_3599: Unknown result type (might be due to invalid IL or missing references)
		//IL_359e: Unknown result type (might be due to invalid IL or missing references)
		//IL_35b9: Unknown result type (might be due to invalid IL or missing references)
		//IL_35be: Unknown result type (might be due to invalid IL or missing references)
		//IL_35c2: Unknown result type (might be due to invalid IL or missing references)
		//IL_35c7: Unknown result type (might be due to invalid IL or missing references)
		//IL_35d8: Unknown result type (might be due to invalid IL or missing references)
		//IL_35dd: Unknown result type (might be due to invalid IL or missing references)
		//IL_35e1: Unknown result type (might be due to invalid IL or missing references)
		//IL_35e6: Unknown result type (might be due to invalid IL or missing references)
		//IL_35f7: Unknown result type (might be due to invalid IL or missing references)
		//IL_35fc: Unknown result type (might be due to invalid IL or missing references)
		//IL_3600: Unknown result type (might be due to invalid IL or missing references)
		//IL_3605: Unknown result type (might be due to invalid IL or missing references)
		//IL_3622: Unknown result type (might be due to invalid IL or missing references)
		//IL_3627: Unknown result type (might be due to invalid IL or missing references)
		//IL_362b: Unknown result type (might be due to invalid IL or missing references)
		//IL_3630: Unknown result type (might be due to invalid IL or missing references)
		//IL_3641: Unknown result type (might be due to invalid IL or missing references)
		//IL_3646: Unknown result type (might be due to invalid IL or missing references)
		//IL_364a: Unknown result type (might be due to invalid IL or missing references)
		//IL_364f: Unknown result type (might be due to invalid IL or missing references)
		//IL_3660: Unknown result type (might be due to invalid IL or missing references)
		//IL_3665: Unknown result type (might be due to invalid IL or missing references)
		//IL_3669: Unknown result type (might be due to invalid IL or missing references)
		//IL_366e: Unknown result type (might be due to invalid IL or missing references)
		//IL_3689: Unknown result type (might be due to invalid IL or missing references)
		//IL_368e: Unknown result type (might be due to invalid IL or missing references)
		//IL_3692: Unknown result type (might be due to invalid IL or missing references)
		//IL_3697: Unknown result type (might be due to invalid IL or missing references)
		//IL_36a8: Unknown result type (might be due to invalid IL or missing references)
		//IL_36ad: Unknown result type (might be due to invalid IL or missing references)
		//IL_36b1: Unknown result type (might be due to invalid IL or missing references)
		//IL_36b6: Unknown result type (might be due to invalid IL or missing references)
		//IL_36c7: Unknown result type (might be due to invalid IL or missing references)
		//IL_36cc: Unknown result type (might be due to invalid IL or missing references)
		//IL_36d0: Unknown result type (might be due to invalid IL or missing references)
		//IL_36d5: Unknown result type (might be due to invalid IL or missing references)
		//IL_36f2: Unknown result type (might be due to invalid IL or missing references)
		//IL_36f7: Unknown result type (might be due to invalid IL or missing references)
		//IL_36fb: Unknown result type (might be due to invalid IL or missing references)
		//IL_370e: Unknown result type (might be due to invalid IL or missing references)
		//IL_3713: Unknown result type (might be due to invalid IL or missing references)
		//IL_3717: Unknown result type (might be due to invalid IL or missing references)
		//IL_371c: Unknown result type (might be due to invalid IL or missing references)
		//IL_373d: Unknown result type (might be due to invalid IL or missing references)
		//IL_3742: Unknown result type (might be due to invalid IL or missing references)
		//IL_3746: Unknown result type (might be due to invalid IL or missing references)
		//IL_3759: Unknown result type (might be due to invalid IL or missing references)
		//IL_375e: Unknown result type (might be due to invalid IL or missing references)
		//IL_3762: Unknown result type (might be due to invalid IL or missing references)
		//IL_3767: Unknown result type (might be due to invalid IL or missing references)
		//IL_3788: Unknown result type (might be due to invalid IL or missing references)
		//IL_378d: Unknown result type (might be due to invalid IL or missing references)
		//IL_3791: Unknown result type (might be due to invalid IL or missing references)
		//IL_37a4: Unknown result type (might be due to invalid IL or missing references)
		//IL_37a9: Unknown result type (might be due to invalid IL or missing references)
		//IL_37ad: Unknown result type (might be due to invalid IL or missing references)
		//IL_37b2: Unknown result type (might be due to invalid IL or missing references)
		//IL_37d3: Unknown result type (might be due to invalid IL or missing references)
		//IL_37d8: Unknown result type (might be due to invalid IL or missing references)
		//IL_37dc: Unknown result type (might be due to invalid IL or missing references)
		//IL_37ef: Unknown result type (might be due to invalid IL or missing references)
		//IL_37f4: Unknown result type (might be due to invalid IL or missing references)
		//IL_37f8: Unknown result type (might be due to invalid IL or missing references)
		//IL_37fd: Unknown result type (might be due to invalid IL or missing references)
		//IL_381e: Unknown result type (might be due to invalid IL or missing references)
		//IL_3823: Unknown result type (might be due to invalid IL or missing references)
		//IL_3827: Unknown result type (might be due to invalid IL or missing references)
		//IL_383a: Unknown result type (might be due to invalid IL or missing references)
		//IL_383f: Unknown result type (might be due to invalid IL or missing references)
		//IL_3843: Unknown result type (might be due to invalid IL or missing references)
		//IL_3848: Unknown result type (might be due to invalid IL or missing references)
		//IL_3869: Unknown result type (might be due to invalid IL or missing references)
		//IL_386e: Unknown result type (might be due to invalid IL or missing references)
		//IL_3872: Unknown result type (might be due to invalid IL or missing references)
		//IL_3885: Unknown result type (might be due to invalid IL or missing references)
		//IL_388a: Unknown result type (might be due to invalid IL or missing references)
		//IL_388e: Unknown result type (might be due to invalid IL or missing references)
		//IL_3893: Unknown result type (might be due to invalid IL or missing references)
		//IL_38b4: Unknown result type (might be due to invalid IL or missing references)
		//IL_38b9: Unknown result type (might be due to invalid IL or missing references)
		//IL_38bd: Unknown result type (might be due to invalid IL or missing references)
		//IL_38d0: Unknown result type (might be due to invalid IL or missing references)
		//IL_38d5: Unknown result type (might be due to invalid IL or missing references)
		//IL_38d9: Unknown result type (might be due to invalid IL or missing references)
		//IL_38de: Unknown result type (might be due to invalid IL or missing references)
		//IL_38ff: Unknown result type (might be due to invalid IL or missing references)
		//IL_3904: Unknown result type (might be due to invalid IL or missing references)
		//IL_3908: Unknown result type (might be due to invalid IL or missing references)
		//IL_391b: Unknown result type (might be due to invalid IL or missing references)
		//IL_3920: Unknown result type (might be due to invalid IL or missing references)
		//IL_3924: Unknown result type (might be due to invalid IL or missing references)
		//IL_3929: Unknown result type (might be due to invalid IL or missing references)
		//IL_394a: Unknown result type (might be due to invalid IL or missing references)
		//IL_394f: Unknown result type (might be due to invalid IL or missing references)
		//IL_3953: Unknown result type (might be due to invalid IL or missing references)
		//IL_3966: Unknown result type (might be due to invalid IL or missing references)
		//IL_396b: Unknown result type (might be due to invalid IL or missing references)
		//IL_396f: Unknown result type (might be due to invalid IL or missing references)
		//IL_3974: Unknown result type (might be due to invalid IL or missing references)
		//IL_3995: Unknown result type (might be due to invalid IL or missing references)
		//IL_399a: Unknown result type (might be due to invalid IL or missing references)
		//IL_399e: Unknown result type (might be due to invalid IL or missing references)
		//IL_39b1: Unknown result type (might be due to invalid IL or missing references)
		//IL_39b6: Unknown result type (might be due to invalid IL or missing references)
		//IL_39ba: Unknown result type (might be due to invalid IL or missing references)
		//IL_39bf: Unknown result type (might be due to invalid IL or missing references)
		//IL_39e0: Unknown result type (might be due to invalid IL or missing references)
		//IL_39e5: Unknown result type (might be due to invalid IL or missing references)
		//IL_39e9: Unknown result type (might be due to invalid IL or missing references)
		//IL_39fc: Unknown result type (might be due to invalid IL or missing references)
		//IL_3a01: Unknown result type (might be due to invalid IL or missing references)
		//IL_3a05: Unknown result type (might be due to invalid IL or missing references)
		//IL_3a0a: Unknown result type (might be due to invalid IL or missing references)
		//IL_3a2b: Unknown result type (might be due to invalid IL or missing references)
		//IL_3a30: Unknown result type (might be due to invalid IL or missing references)
		//IL_3a34: Unknown result type (might be due to invalid IL or missing references)
		//IL_3a47: Unknown result type (might be due to invalid IL or missing references)
		//IL_3a4c: Unknown result type (might be due to invalid IL or missing references)
		//IL_3a50: Unknown result type (might be due to invalid IL or missing references)
		//IL_3a55: Unknown result type (might be due to invalid IL or missing references)
		//IL_3aae: Unknown result type (might be due to invalid IL or missing references)
		//IL_3ab3: Unknown result type (might be due to invalid IL or missing references)
		//IL_3ad9: Unknown result type (might be due to invalid IL or missing references)
		//IL_3ade: Unknown result type (might be due to invalid IL or missing references)
		//IL_3b04: Unknown result type (might be due to invalid IL or missing references)
		//IL_3b09: Unknown result type (might be due to invalid IL or missing references)
		//IL_3b2f: Unknown result type (might be due to invalid IL or missing references)
		//IL_3b34: Unknown result type (might be due to invalid IL or missing references)
		//IL_3b5a: Unknown result type (might be due to invalid IL or missing references)
		//IL_3b5f: Unknown result type (might be due to invalid IL or missing references)
		//IL_3b85: Unknown result type (might be due to invalid IL or missing references)
		//IL_3b8a: Unknown result type (might be due to invalid IL or missing references)
		//IL_3bb0: Unknown result type (might be due to invalid IL or missing references)
		//IL_3bb5: Unknown result type (might be due to invalid IL or missing references)
		//IL_3bf0: Unknown result type (might be due to invalid IL or missing references)
		//IL_3bf5: Unknown result type (might be due to invalid IL or missing references)
		//IL_3c04: Unknown result type (might be due to invalid IL or missing references)
		//IL_3c09: Unknown result type (might be due to invalid IL or missing references)
		//IL_3c16: Unknown result type (might be due to invalid IL or missing references)
		//IL_3c1b: Unknown result type (might be due to invalid IL or missing references)
		//IL_3c3d: Unknown result type (might be due to invalid IL or missing references)
		//IL_3c42: Unknown result type (might be due to invalid IL or missing references)
		//IL_3c52: Unknown result type (might be due to invalid IL or missing references)
		//IL_3c57: Unknown result type (might be due to invalid IL or missing references)
		//IL_3c6d: Unknown result type (might be due to invalid IL or missing references)
		//IL_3c72: Unknown result type (might be due to invalid IL or missing references)
		//IL_3c76: Unknown result type (might be due to invalid IL or missing references)
		//IL_3c7b: Unknown result type (might be due to invalid IL or missing references)
		//IL_3c7d: Unknown result type (might be due to invalid IL or missing references)
		//IL_3c81: Unknown result type (might be due to invalid IL or missing references)
		//IL_3c84: Invalid comparison between Unknown and I4
		//IL_3c8a: Unknown result type (might be due to invalid IL or missing references)
		//IL_3c8f: Unknown result type (might be due to invalid IL or missing references)
		//IL_3ca1: Unknown result type (might be due to invalid IL or missing references)
		//IL_3ca6: Unknown result type (might be due to invalid IL or missing references)
		//IL_3cb0: Unknown result type (might be due to invalid IL or missing references)
		//IL_3cb5: Unknown result type (might be due to invalid IL or missing references)
		//IL_3cd1: Unknown result type (might be due to invalid IL or missing references)
		//IL_3cd6: Unknown result type (might be due to invalid IL or missing references)
		//IL_3cda: Unknown result type (might be due to invalid IL or missing references)
		//IL_3cdf: Unknown result type (might be due to invalid IL or missing references)
		//IL_3cfe: Unknown result type (might be due to invalid IL or missing references)
		//IL_3d03: Unknown result type (might be due to invalid IL or missing references)
		//IL_3d16: Unknown result type (might be due to invalid IL or missing references)
		//IL_3d1b: Unknown result type (might be due to invalid IL or missing references)
		//IL_3d2a: Unknown result type (might be due to invalid IL or missing references)
		//IL_3d2f: Unknown result type (might be due to invalid IL or missing references)
		//IL_3d42: Unknown result type (might be due to invalid IL or missing references)
		//IL_3d47: Unknown result type (might be due to invalid IL or missing references)
		//IL_3d5e: Unknown result type (might be due to invalid IL or missing references)
		//IL_3d63: Unknown result type (might be due to invalid IL or missing references)
		//IL_3d67: Unknown result type (might be due to invalid IL or missing references)
		//IL_3d6c: Unknown result type (might be due to invalid IL or missing references)
		//IL_3d70: Unknown result type (might be due to invalid IL or missing references)
		//IL_3d75: Unknown result type (might be due to invalid IL or missing references)
		//IL_3d99: Unknown result type (might be due to invalid IL or missing references)
		//IL_3d9e: Unknown result type (might be due to invalid IL or missing references)
		//IL_3da2: Unknown result type (might be due to invalid IL or missing references)
		//IL_3da7: Unknown result type (might be due to invalid IL or missing references)
		//IL_3dab: Unknown result type (might be due to invalid IL or missing references)
		//IL_3db0: Unknown result type (might be due to invalid IL or missing references)
		//IL_3dd1: Unknown result type (might be due to invalid IL or missing references)
		//IL_3dd6: Unknown result type (might be due to invalid IL or missing references)
		//IL_3dda: Unknown result type (might be due to invalid IL or missing references)
		//IL_3ddf: Unknown result type (might be due to invalid IL or missing references)
		//IL_3de3: Unknown result type (might be due to invalid IL or missing references)
		//IL_3de8: Unknown result type (might be due to invalid IL or missing references)
		//IL_3e09: Unknown result type (might be due to invalid IL or missing references)
		//IL_3e0e: Unknown result type (might be due to invalid IL or missing references)
		//IL_3e12: Unknown result type (might be due to invalid IL or missing references)
		//IL_3e17: Unknown result type (might be due to invalid IL or missing references)
		//IL_3e1b: Unknown result type (might be due to invalid IL or missing references)
		//IL_3e20: Unknown result type (might be due to invalid IL or missing references)
		//IL_3e4d: Unknown result type (might be due to invalid IL or missing references)
		//IL_3e52: Unknown result type (might be due to invalid IL or missing references)
		//IL_3e56: Unknown result type (might be due to invalid IL or missing references)
		//IL_3e5b: Unknown result type (might be due to invalid IL or missing references)
		//IL_3e76: Unknown result type (might be due to invalid IL or missing references)
		//IL_3e7b: Unknown result type (might be due to invalid IL or missing references)
		//IL_3e7f: Unknown result type (might be due to invalid IL or missing references)
		//IL_3e84: Unknown result type (might be due to invalid IL or missing references)
		//IL_3e96: Unknown result type (might be due to invalid IL or missing references)
		//IL_3e9b: Unknown result type (might be due to invalid IL or missing references)
		//IL_3e9f: Unknown result type (might be due to invalid IL or missing references)
		//IL_3ebf: Unknown result type (might be due to invalid IL or missing references)
		//IL_3ec4: Unknown result type (might be due to invalid IL or missing references)
		//IL_3ec8: Unknown result type (might be due to invalid IL or missing references)
		//IL_3ecd: Unknown result type (might be due to invalid IL or missing references)
		//IL_3ee8: Unknown result type (might be due to invalid IL or missing references)
		//IL_3eed: Unknown result type (might be due to invalid IL or missing references)
		//IL_3ef1: Unknown result type (might be due to invalid IL or missing references)
		//IL_3ef6: Unknown result type (might be due to invalid IL or missing references)
		//IL_3f08: Unknown result type (might be due to invalid IL or missing references)
		//IL_3f0d: Unknown result type (might be due to invalid IL or missing references)
		//IL_3f11: Unknown result type (might be due to invalid IL or missing references)
		//IL_3f16: Unknown result type (might be due to invalid IL or missing references)
		//IL_3f31: Unknown result type (might be due to invalid IL or missing references)
		//IL_3f36: Unknown result type (might be due to invalid IL or missing references)
		//IL_3f3a: Unknown result type (might be due to invalid IL or missing references)
		//IL_3f3f: Unknown result type (might be due to invalid IL or missing references)
		//IL_3f51: Unknown result type (might be due to invalid IL or missing references)
		//IL_3f56: Unknown result type (might be due to invalid IL or missing references)
		//IL_3f5a: Unknown result type (might be due to invalid IL or missing references)
		//IL_3f7a: Unknown result type (might be due to invalid IL or missing references)
		//IL_3f7f: Unknown result type (might be due to invalid IL or missing references)
		//IL_3f83: Unknown result type (might be due to invalid IL or missing references)
		//IL_3fb8: Unknown result type (might be due to invalid IL or missing references)
		//IL_3fbd: Unknown result type (might be due to invalid IL or missing references)
		//IL_3fc1: Unknown result type (might be due to invalid IL or missing references)
		//IL_3fc6: Unknown result type (might be due to invalid IL or missing references)
		//IL_3fde: Unknown result type (might be due to invalid IL or missing references)
		//IL_3fe3: Unknown result type (might be due to invalid IL or missing references)
		//IL_3fe7: Unknown result type (might be due to invalid IL or missing references)
		//IL_3fec: Unknown result type (might be due to invalid IL or missing references)
		//IL_3ffb: Unknown result type (might be due to invalid IL or missing references)
		//IL_4000: Unknown result type (might be due to invalid IL or missing references)
		//IL_4004: Unknown result type (might be due to invalid IL or missing references)
		//IL_4009: Unknown result type (might be due to invalid IL or missing references)
		//IL_4021: Unknown result type (might be due to invalid IL or missing references)
		//IL_4026: Unknown result type (might be due to invalid IL or missing references)
		//IL_402a: Unknown result type (might be due to invalid IL or missing references)
		//IL_402f: Unknown result type (might be due to invalid IL or missing references)
		//IL_403e: Unknown result type (might be due to invalid IL or missing references)
		//IL_4043: Unknown result type (might be due to invalid IL or missing references)
		//IL_4047: Unknown result type (might be due to invalid IL or missing references)
		//IL_404c: Unknown result type (might be due to invalid IL or missing references)
		//IL_4064: Unknown result type (might be due to invalid IL or missing references)
		//IL_4069: Unknown result type (might be due to invalid IL or missing references)
		//IL_406d: Unknown result type (might be due to invalid IL or missing references)
		//IL_4072: Unknown result type (might be due to invalid IL or missing references)
		//IL_4081: Unknown result type (might be due to invalid IL or missing references)
		//IL_4086: Unknown result type (might be due to invalid IL or missing references)
		//IL_409a: Unknown result type (might be due to invalid IL or missing references)
		//IL_409f: Unknown result type (might be due to invalid IL or missing references)
		//IL_40ae: Unknown result type (might be due to invalid IL or missing references)
		//IL_40b3: Unknown result type (might be due to invalid IL or missing references)
		//IL_40cc: Unknown result type (might be due to invalid IL or missing references)
		//IL_40d1: Unknown result type (might be due to invalid IL or missing references)
		//IL_40d5: Unknown result type (might be due to invalid IL or missing references)
		//IL_40da: Unknown result type (might be due to invalid IL or missing references)
		//IL_40fd: Unknown result type (might be due to invalid IL or missing references)
		//IL_4102: Unknown result type (might be due to invalid IL or missing references)
		//IL_4106: Unknown result type (might be due to invalid IL or missing references)
		//IL_410b: Unknown result type (might be due to invalid IL or missing references)
		//IL_4190: Unknown result type (might be due to invalid IL or missing references)
		//IL_4195: Unknown result type (might be due to invalid IL or missing references)
		//IL_41bb: Unknown result type (might be due to invalid IL or missing references)
		//IL_41c0: Unknown result type (might be due to invalid IL or missing references)
		//IL_41e6: Unknown result type (might be due to invalid IL or missing references)
		//IL_41eb: Unknown result type (might be due to invalid IL or missing references)
		//IL_4236: Unknown result type (might be due to invalid IL or missing references)
		//IL_423b: Unknown result type (might be due to invalid IL or missing references)
		//IL_425f: Unknown result type (might be due to invalid IL or missing references)
		//IL_4264: Unknown result type (might be due to invalid IL or missing references)
		//IL_4285: Unknown result type (might be due to invalid IL or missing references)
		//IL_428a: Unknown result type (might be due to invalid IL or missing references)
		//IL_42ab: Unknown result type (might be due to invalid IL or missing references)
		//IL_42b0: Unknown result type (might be due to invalid IL or missing references)
		//IL_42d1: Unknown result type (might be due to invalid IL or missing references)
		//IL_42d6: Unknown result type (might be due to invalid IL or missing references)
		ParticleSystem component = A_0.GetComponent<ParticleSystem>();
		ParticleSystemRenderer component2 = A_0.GetComponent<ParticleSystemRenderer>();
		int num = 0;
		global::g g = new global::g(global::g.a.d);
		A_1.d("main", g);
		global::g g2 = new global::g(global::g.a.d);
		global::g g3 = new global::g(global::g.a.d);
		global::g g4 = new global::g(global::g.a.d);
		global::g g5 = new global::g(global::g.a.d);
		g2.d("isPerformanceMode", A_1: true);
		MainModule main = component.get_main();
		if (((MainModule)(ref main)).get_duration() != 5f)
		{
			global::g obj = g2;
			main = component.get_main();
			obj.d("duration", ((MainModule)(ref main)).get_duration());
		}
		main = component.get_main();
		if (!((MainModule)(ref main)).get_loop())
		{
			global::g obj2 = g2;
			main = component.get_main();
			obj2.d("looping", ((MainModule)(ref main)).get_loop());
		}
		main = component.get_main();
		if (((MainModule)(ref main)).get_prewarm())
		{
			g2.d("prewarm", A_1: false);
		}
		main = component.get_main();
		MinMaxCurve val = ((MainModule)(ref main)).get_startDelay();
		ParticleSystemCurveMode mode = ((MinMaxCurve)(ref val)).get_mode();
		if (((object)(ParticleSystemCurveMode)(ref mode)).ToString() == "Constant")
		{
			num = 0;
		}
		else
		{
			main = component.get_main();
			val = ((MainModule)(ref main)).get_startDelay();
			mode = ((MinMaxCurve)(ref val)).get_mode();
			if (((object)(ParticleSystemCurveMode)(ref mode)).ToString() == "TwoConstants")
			{
				num = 1;
			}
		}
		if (num != 0)
		{
			g2.d("startDelayType", num);
		}
		main = component.get_main();
		val = ((MainModule)(ref main)).get_startDelay();
		if (((MinMaxCurve)(ref val)).get_constant() != 0f)
		{
			global::g obj3 = g2;
			main = component.get_main();
			val = ((MainModule)(ref main)).get_startDelay();
			obj3.d("startDelay", ((MinMaxCurve)(ref val)).get_constant());
		}
		main = component.get_main();
		val = ((MainModule)(ref main)).get_startDelay();
		if (((MinMaxCurve)(ref val)).get_constantMin() != 0f)
		{
			global::g obj4 = g2;
			main = component.get_main();
			val = ((MainModule)(ref main)).get_startDelay();
			obj4.d("startDelayMin", ((MinMaxCurve)(ref val)).get_constantMin());
		}
		main = component.get_main();
		val = ((MainModule)(ref main)).get_startDelay();
		if (((MinMaxCurve)(ref val)).get_constantMax() != 0f)
		{
			global::g obj5 = g2;
			main = component.get_main();
			val = ((MainModule)(ref main)).get_startDelay();
			obj5.d("startDelayMax", ((MinMaxCurve)(ref val)).get_constantMax());
		}
		main = component.get_main();
		val = ((MainModule)(ref main)).get_startLifetime();
		mode = ((MinMaxCurve)(ref val)).get_mode();
		if (((object)(ParticleSystemCurveMode)(ref mode)).ToString() == "Constant")
		{
			num = 0;
		}
		else
		{
			main = component.get_main();
			val = ((MainModule)(ref main)).get_startLifetime();
			mode = ((MinMaxCurve)(ref val)).get_mode();
			if (((object)(ParticleSystemCurveMode)(ref mode)).ToString() == "Curves")
			{
				num = 1;
			}
			else
			{
				main = component.get_main();
				val = ((MainModule)(ref main)).get_startLifetime();
				mode = ((MinMaxCurve)(ref val)).get_mode();
				if (((object)(ParticleSystemCurveMode)(ref mode)).ToString() == "TwoConstants")
				{
					num = 2;
				}
				else
				{
					main = component.get_main();
					val = ((MainModule)(ref main)).get_startLifetime();
					mode = ((MinMaxCurve)(ref val)).get_mode();
					if (((object)(ParticleSystemCurveMode)(ref mode)).ToString() == "MinMaxCurves")
					{
						num = 3;
					}
				}
			}
		}
		if (num != 0)
		{
			g2.d("startLifetimeType", num);
		}
		main = component.get_main();
		val = ((MainModule)(ref main)).get_startLifetime();
		if (((MinMaxCurve)(ref val)).get_constant() != 5f)
		{
			global::g obj6 = g2;
			main = component.get_main();
			val = ((MainModule)(ref main)).get_startLifetime();
			obj6.d("startLifetimeConstant", ((MinMaxCurve)(ref val)).get_constant());
		}
		main = component.get_main();
		val = ((MainModule)(ref main)).get_startLifetime();
		if (((MinMaxCurve)(ref val)).get_constantMin() != 0f)
		{
			global::g obj7 = g2;
			main = component.get_main();
			val = ((MainModule)(ref main)).get_startLifetime();
			obj7.d("startLifetimeConstantMin", ((MinMaxCurve)(ref val)).get_constantMin());
		}
		main = component.get_main();
		val = ((MainModule)(ref main)).get_startLifetime();
		if (((MinMaxCurve)(ref val)).get_constantMax() != 5f)
		{
			global::g obj8 = g2;
			main = component.get_main();
			val = ((MainModule)(ref main)).get_startLifetime();
			obj8.d("startLifetimeConstantMax", ((MinMaxCurve)(ref val)).get_constantMax());
		}
		main = component.get_main();
		val = ((MainModule)(ref main)).get_startLifetime();
		a(((MinMaxCurve)(ref val)).get_curve(), g4, "startLifetimeGradient", "startLifetimes");
		main = component.get_main();
		val = ((MainModule)(ref main)).get_startLifetime();
		a(((MinMaxCurve)(ref val)).get_curveMin(), g4, "startLifetimeGradientMin", "startLifetimes");
		main = component.get_main();
		val = ((MainModule)(ref main)).get_startLifetime();
		a(((MinMaxCurve)(ref val)).get_curveMax(), g4, "startLifetimeGradientMax", "startLifetimes");
		main = component.get_main();
		val = ((MainModule)(ref main)).get_startSpeed();
		mode = ((MinMaxCurve)(ref val)).get_mode();
		if (((object)(ParticleSystemCurveMode)(ref mode)).ToString() == "Constant")
		{
			num = 0;
		}
		else
		{
			main = component.get_main();
			val = ((MainModule)(ref main)).get_startSpeed();
			mode = ((MinMaxCurve)(ref val)).get_mode();
			if (((object)(ParticleSystemCurveMode)(ref mode)).ToString() == "Curve")
			{
				num = 1;
			}
			else
			{
				main = component.get_main();
				val = ((MainModule)(ref main)).get_startSpeed();
				mode = ((MinMaxCurve)(ref val)).get_mode();
				if (((object)(ParticleSystemCurveMode)(ref mode)).ToString() == "TwoConstants")
				{
					num = 2;
				}
				else
				{
					main = component.get_main();
					val = ((MainModule)(ref main)).get_startSpeed();
					mode = ((MinMaxCurve)(ref val)).get_mode();
					if (((object)(ParticleSystemCurveMode)(ref mode)).ToString() == "TwoCurves")
					{
						num = 3;
					}
				}
			}
		}
		if (num != 0)
		{
			g2.d("startSpeedType", num);
		}
		main = component.get_main();
		val = ((MainModule)(ref main)).get_startSpeed();
		if (((MinMaxCurve)(ref val)).get_constant() != 5f)
		{
			global::g obj9 = g2;
			main = component.get_main();
			val = ((MainModule)(ref main)).get_startSpeed();
			obj9.d("startSpeedConstant", ((MinMaxCurve)(ref val)).get_constant());
		}
		main = component.get_main();
		val = ((MainModule)(ref main)).get_startSpeed();
		if (((MinMaxCurve)(ref val)).get_constantMin() != 0f)
		{
			global::g obj10 = g2;
			main = component.get_main();
			val = ((MainModule)(ref main)).get_startSpeed();
			obj10.d("startSpeedConstantMin", ((MinMaxCurve)(ref val)).get_constantMin());
		}
		main = component.get_main();
		val = ((MainModule)(ref main)).get_startSpeed();
		if (((MinMaxCurve)(ref val)).get_constantMax() != 5f)
		{
			global::g obj11 = g2;
			main = component.get_main();
			val = ((MainModule)(ref main)).get_startSpeed();
			obj11.d("startSpeedConstantMax", ((MinMaxCurve)(ref val)).get_constantMax());
		}
		main = component.get_main();
		val = ((MainModule)(ref main)).get_startSizeX();
		mode = ((MinMaxCurve)(ref val)).get_mode();
		if (((object)(ParticleSystemCurveMode)(ref mode)).ToString() == "Constant")
		{
			num = 0;
		}
		else
		{
			main = component.get_main();
			val = ((MainModule)(ref main)).get_startSizeX();
			mode = ((MinMaxCurve)(ref val)).get_mode();
			if (((object)(ParticleSystemCurveMode)(ref mode)).ToString() == "Curve")
			{
				num = 1;
			}
			else
			{
				main = component.get_main();
				val = ((MainModule)(ref main)).get_startSizeX();
				mode = ((MinMaxCurve)(ref val)).get_mode();
				if (((object)(ParticleSystemCurveMode)(ref mode)).ToString() == "TwoConstants")
				{
					num = 2;
				}
				else
				{
					main = component.get_main();
					val = ((MainModule)(ref main)).get_startSizeX();
					mode = ((MinMaxCurve)(ref val)).get_mode();
					if (((object)(ParticleSystemCurveMode)(ref mode)).ToString() == "TwoCurves")
					{
						num = 3;
					}
				}
			}
		}
		main = component.get_main();
		if (((MainModule)(ref main)).get_startSize3D())
		{
			global::g obj12 = g2;
			main = component.get_main();
			obj12.d("threeDStartSize", ((MainModule)(ref main)).get_startSize3D());
		}
		if (num != 0)
		{
			g2.d("startSizeType", num);
		}
		main = component.get_main();
		val = ((MainModule)(ref main)).get_startSize();
		if (((MinMaxCurve)(ref val)).get_constant() != 1f)
		{
			global::g obj13 = g2;
			main = component.get_main();
			val = ((MainModule)(ref main)).get_startSize();
			obj13.d("startSizeConstant", ((MinMaxCurve)(ref val)).get_constant());
		}
		main = component.get_main();
		val = ((MainModule)(ref main)).get_startSize();
		if (((MinMaxCurve)(ref val)).get_constantMin() != 0f)
		{
			global::g obj14 = g2;
			main = component.get_main();
			val = ((MainModule)(ref main)).get_startSize();
			obj14.d("startSizeConstantMin", ((MinMaxCurve)(ref val)).get_constantMin());
		}
		main = component.get_main();
		val = ((MainModule)(ref main)).get_startSize();
		if (((MinMaxCurve)(ref val)).get_constantMax() != 1f)
		{
			global::g obj15 = g2;
			main = component.get_main();
			val = ((MainModule)(ref main)).get_startSize();
			obj15.d("startSizeConstantMax", ((MinMaxCurve)(ref val)).get_constantMax());
		}
		main = component.get_main();
		val = ((MainModule)(ref main)).get_startSizeX();
		if (((MinMaxCurve)(ref val)).get_constant() == 1f)
		{
			main = component.get_main();
			val = ((MainModule)(ref main)).get_startSizeY();
			if (((MinMaxCurve)(ref val)).get_constant() == 1f)
			{
				main = component.get_main();
				val = ((MainModule)(ref main)).get_startSizeZ();
				if (((MinMaxCurve)(ref val)).get_constant() == 1f)
				{
					goto IL_08bd;
				}
			}
		}
		global::g g6 = new global::g(global::g.a.e);
		global::g obj16 = g6;
		main = component.get_main();
		val = ((MainModule)(ref main)).get_startSizeX();
		obj16.d(((MinMaxCurve)(ref val)).get_constant());
		global::g obj17 = g6;
		main = component.get_main();
		val = ((MainModule)(ref main)).get_startSizeY();
		obj17.d(((MinMaxCurve)(ref val)).get_constant());
		global::g obj18 = g6;
		main = component.get_main();
		val = ((MainModule)(ref main)).get_startSizeZ();
		obj18.d(((MinMaxCurve)(ref val)).get_constant());
		g3.d("startSizeConstantSeparate", g6);
		goto IL_08bd;
		IL_2493:
		VelocityOverLifetimeModule velocityOverLifetime = component.get_velocityOverLifetime();
		MinMaxCurve a_ = ((VelocityOverLifetimeModule)(ref velocityOverLifetime)).get_x();
		global::g g7;
		global::g a_2 = g7;
		velocityOverLifetime = component.get_velocityOverLifetime();
		val = ((VelocityOverLifetimeModule)(ref velocityOverLifetime)).get_x();
		a(a_, a_2, "gradientXMin", "velocitys", -1, ((MinMaxCurve)(ref val)).get_curveMultiplier(), -1f);
		velocityOverLifetime = component.get_velocityOverLifetime();
		MinMaxCurve a_3 = ((VelocityOverLifetimeModule)(ref velocityOverLifetime)).get_x();
		global::g a_4 = g7;
		velocityOverLifetime = component.get_velocityOverLifetime();
		val = ((VelocityOverLifetimeModule)(ref velocityOverLifetime)).get_x();
		a(a_3, a_4, "gradientXMax", "velocitys", 1, ((MinMaxCurve)(ref val)).get_curveMultiplier(), -1f);
		velocityOverLifetime = component.get_velocityOverLifetime();
		MinMaxCurve a_5 = ((VelocityOverLifetimeModule)(ref velocityOverLifetime)).get_y();
		global::g a_6 = g7;
		velocityOverLifetime = component.get_velocityOverLifetime();
		val = ((VelocityOverLifetimeModule)(ref velocityOverLifetime)).get_y();
		a(a_5, a_6, "gradientYMin", "velocitys", -1, ((MinMaxCurve)(ref val)).get_curveMultiplier(), 1f);
		velocityOverLifetime = component.get_velocityOverLifetime();
		MinMaxCurve a_7 = ((VelocityOverLifetimeModule)(ref velocityOverLifetime)).get_y();
		global::g a_8 = g7;
		velocityOverLifetime = component.get_velocityOverLifetime();
		val = ((VelocityOverLifetimeModule)(ref velocityOverLifetime)).get_y();
		a(a_7, a_8, "gradientYMax", "velocitys", 1, ((MinMaxCurve)(ref val)).get_curveMultiplier(), 1f);
		velocityOverLifetime = component.get_velocityOverLifetime();
		MinMaxCurve a_9 = ((VelocityOverLifetimeModule)(ref velocityOverLifetime)).get_z();
		global::g a_10 = g7;
		velocityOverLifetime = component.get_velocityOverLifetime();
		val = ((VelocityOverLifetimeModule)(ref velocityOverLifetime)).get_z();
		a(a_9, a_10, "gradientZMin", "velocitys", -1, ((MinMaxCurve)(ref val)).get_curveMultiplier(), 1f);
		velocityOverLifetime = component.get_velocityOverLifetime();
		MinMaxCurve a_11 = ((VelocityOverLifetimeModule)(ref velocityOverLifetime)).get_z();
		global::g a_12 = g7;
		velocityOverLifetime = component.get_velocityOverLifetime();
		val = ((VelocityOverLifetimeModule)(ref velocityOverLifetime)).get_z();
		a(a_11, a_12, "gradientZMax", "velocitys", 1, ((MinMaxCurve)(ref val)).get_curveMultiplier(), 1f);
		global::g g8;
		if (g2.h.Count != 0)
		{
			g8.d("bases", g2);
		}
		if (g7.h.Count != 0)
		{
			g8.d("velocity", g7);
		}
		goto IL_2645;
		IL_3c65:
		float num2 = 0f;
		TextureSheetAnimationModule textureSheetAnimation = component.get_textureSheetAnimation();
		ParticleSystemAnimationType animation = ((TextureSheetAnimationModule)(ref textureSheetAnimation)).get_animation();
		if ((int)animation != 0)
		{
			if ((int)animation == 1)
			{
				num = 1;
				textureSheetAnimation = component.get_textureSheetAnimation();
				num2 = ((TextureSheetAnimationModule)(ref textureSheetAnimation)).get_numTilesX();
			}
			else
			{
				Debug.LogWarning((object)"unknown type.");
			}
		}
		else
		{
			num = 0;
			textureSheetAnimation = component.get_textureSheetAnimation();
			int numTilesX = ((TextureSheetAnimationModule)(ref textureSheetAnimation)).get_numTilesX();
			textureSheetAnimation = component.get_textureSheetAnimation();
			num2 = numTilesX * ((TextureSheetAnimationModule)(ref textureSheetAnimation)).get_numTilesY();
		}
		float num3 = num2;
		textureSheetAnimation = component.get_textureSheetAnimation();
		val = ((TextureSheetAnimationModule)(ref textureSheetAnimation)).get_frameOverTime();
		float a_13 = num3 * ((MinMaxCurve)(ref val)).get_curveMultiplier();
		if (num != 0)
		{
			g2.d("type", num);
		}
		textureSheetAnimation = component.get_textureSheetAnimation();
		if (!((TextureSheetAnimationModule)(ref textureSheetAnimation)).get_useRandomRow())
		{
			global::g obj19 = g2;
			textureSheetAnimation = component.get_textureSheetAnimation();
			obj19.d("randomRow", ((TextureSheetAnimationModule)(ref textureSheetAnimation)).get_useRandomRow());
		}
		textureSheetAnimation = component.get_textureSheetAnimation();
		if (((TextureSheetAnimationModule)(ref textureSheetAnimation)).get_rowIndex() != 0)
		{
			global::g obj20 = g2;
			textureSheetAnimation = component.get_textureSheetAnimation();
			obj20.d("rowIndex", ((TextureSheetAnimationModule)(ref textureSheetAnimation)).get_rowIndex());
		}
		g7 = new global::g(global::g.a.d);
		textureSheetAnimation = component.get_textureSheetAnimation();
		val = ((TextureSheetAnimationModule)(ref textureSheetAnimation)).get_frameOverTime();
		mode = ((MinMaxCurve)(ref val)).get_mode();
		if (((object)(ParticleSystemCurveMode)(ref mode)).ToString() == "Constant")
		{
			num = 0;
		}
		else
		{
			textureSheetAnimation = component.get_textureSheetAnimation();
			val = ((TextureSheetAnimationModule)(ref textureSheetAnimation)).get_frameOverTime();
			mode = ((MinMaxCurve)(ref val)).get_mode();
			if (((object)(ParticleSystemCurveMode)(ref mode)).ToString() == "Curve")
			{
				num = 1;
			}
			else
			{
				textureSheetAnimation = component.get_textureSheetAnimation();
				val = ((TextureSheetAnimationModule)(ref textureSheetAnimation)).get_frameOverTime();
				mode = ((MinMaxCurve)(ref val)).get_mode();
				if (((object)(ParticleSystemCurveMode)(ref mode)).ToString() == "TwoConstants")
				{
					num = 2;
				}
				else
				{
					textureSheetAnimation = component.get_textureSheetAnimation();
					val = ((TextureSheetAnimationModule)(ref textureSheetAnimation)).get_frameOverTime();
					mode = ((MinMaxCurve)(ref val)).get_mode();
					if (((object)(ParticleSystemCurveMode)(ref mode)).ToString() == "TwoCurves")
					{
						num = 3;
					}
				}
			}
		}
		g7.d("type", num);
		textureSheetAnimation = component.get_textureSheetAnimation();
		val = ((TextureSheetAnimationModule)(ref textureSheetAnimation)).get_frameOverTime();
		if (((MinMaxCurve)(ref val)).get_constant() * num2 != 0f)
		{
			global::g obj21 = g7;
			textureSheetAnimation = component.get_textureSheetAnimation();
			val = ((TextureSheetAnimationModule)(ref textureSheetAnimation)).get_frameOverTime();
			obj21.d("constant", ((MinMaxCurve)(ref val)).get_constant() * num2);
		}
		textureSheetAnimation = component.get_textureSheetAnimation();
		a(((TextureSheetAnimationModule)(ref textureSheetAnimation)).get_frameOverTime(), g7, "overTime", "frames", 0, a_13, 1f, A_7: true);
		textureSheetAnimation = component.get_textureSheetAnimation();
		val = ((TextureSheetAnimationModule)(ref textureSheetAnimation)).get_frameOverTime();
		if (((MinMaxCurve)(ref val)).get_constantMin() * num2 != 0f)
		{
			global::g obj22 = g7;
			textureSheetAnimation = component.get_textureSheetAnimation();
			val = ((TextureSheetAnimationModule)(ref textureSheetAnimation)).get_frameOverTime();
			obj22.d("constantMin", ((MinMaxCurve)(ref val)).get_constantMin() * num2);
		}
		textureSheetAnimation = component.get_textureSheetAnimation();
		val = ((TextureSheetAnimationModule)(ref textureSheetAnimation)).get_frameOverTime();
		if (((MinMaxCurve)(ref val)).get_constantMax() * num2 != 0f)
		{
			global::g obj23 = g7;
			textureSheetAnimation = component.get_textureSheetAnimation();
			val = ((TextureSheetAnimationModule)(ref textureSheetAnimation)).get_frameOverTime();
			obj23.d("constantMax", ((MinMaxCurve)(ref val)).get_constantMax() * num2);
		}
		textureSheetAnimation = component.get_textureSheetAnimation();
		a(((TextureSheetAnimationModule)(ref textureSheetAnimation)).get_frameOverTime(), g7, "overTimeMin", "frames", -1, a_13, 1f);
		textureSheetAnimation = component.get_textureSheetAnimation();
		a(((TextureSheetAnimationModule)(ref textureSheetAnimation)).get_frameOverTime(), g7, "overTimeMax", "frames", 1, a_13, 1f, A_7: true);
		global::g g9 = new global::g(global::g.a.d);
		g9.d("type", 0);
		textureSheetAnimation = component.get_textureSheetAnimation();
		val = ((TextureSheetAnimationModule)(ref textureSheetAnimation)).get_startFrame();
		if (((MinMaxCurve)(ref val)).get_constant() != 0f)
		{
			textureSheetAnimation = component.get_textureSheetAnimation();
			val = ((TextureSheetAnimationModule)(ref textureSheetAnimation)).get_startFrame();
			g9.d("constant", ((MinMaxCurve)(ref val)).get_constant());
		}
		textureSheetAnimation = component.get_textureSheetAnimation();
		val = ((TextureSheetAnimationModule)(ref textureSheetAnimation)).get_startFrame();
		if (((MinMaxCurve)(ref val)).get_constantMin() != 0f)
		{
			textureSheetAnimation = component.get_textureSheetAnimation();
			val = ((TextureSheetAnimationModule)(ref textureSheetAnimation)).get_startFrame();
			g9.d("constantMin", ((MinMaxCurve)(ref val)).get_constantMin());
		}
		textureSheetAnimation = component.get_textureSheetAnimation();
		val = ((TextureSheetAnimationModule)(ref textureSheetAnimation)).get_startFrame();
		if (((MinMaxCurve)(ref val)).get_constantMax() != 0f)
		{
			textureSheetAnimation = component.get_textureSheetAnimation();
			val = ((TextureSheetAnimationModule)(ref textureSheetAnimation)).get_startFrame();
			g9.d("constantMax", ((MinMaxCurve)(ref val)).get_constantMax());
		}
		textureSheetAnimation = component.get_textureSheetAnimation();
		if (((TextureSheetAnimationModule)(ref textureSheetAnimation)).get_cycleCount() != 1)
		{
			global::g obj24 = g2;
			textureSheetAnimation = component.get_textureSheetAnimation();
			obj24.d("cycles", ((TextureSheetAnimationModule)(ref textureSheetAnimation)).get_cycleCount());
		}
		textureSheetAnimation = component.get_textureSheetAnimation();
		if (!((TextureSheetAnimationModule)(ref textureSheetAnimation)).get_enabled())
		{
			g2.d("enableUVChannels", 0);
		}
		textureSheetAnimation = component.get_textureSheetAnimation();
		UVChannelFlags uvChannelMask = ((TextureSheetAnimationModule)(ref textureSheetAnimation)).get_uvChannelMask();
		if (((object)(UVChannelFlags)(ref uvChannelMask)).ToString() != "-1")
		{
			global::g obj25 = g2;
			textureSheetAnimation = component.get_textureSheetAnimation();
			uvChannelMask = ((TextureSheetAnimationModule)(ref textureSheetAnimation)).get_uvChannelMask();
			obj25.a("enableUVChannelsTip", ((object)(UVChannelFlags)(ref uvChannelMask)).ToString());
		}
		global::g g10;
		if (g2.h.Count != 0)
		{
			g10.d("bases", g2);
		}
		global::g g11;
		if (g11.h.Count != 0)
		{
			g10.d("vector2s", g11);
		}
		if (g7.h.Count != 0)
		{
			g10.d("frame", g7);
		}
		if (g9.h.Count != 0)
		{
			g10.d("startFrame", g9);
		}
		goto IL_418f;
		IL_3551:
		RotationOverLifetimeModule rotationOverLifetime = component.get_rotationOverLifetime();
		val = ((RotationOverLifetimeModule)(ref rotationOverLifetime)).get_x();
		if (((MinMaxCurve)(ref val)).get_constantMin() == 0f)
		{
			rotationOverLifetime = component.get_rotationOverLifetime();
			val = ((RotationOverLifetimeModule)(ref rotationOverLifetime)).get_y();
			if (((MinMaxCurve)(ref val)).get_constantMin() == 0f)
			{
				rotationOverLifetime = component.get_rotationOverLifetime();
				val = ((RotationOverLifetimeModule)(ref rotationOverLifetime)).get_z();
				if (((MinMaxCurve)(ref val)).get_constantMin() == 0f)
				{
					goto IL_3621;
				}
			}
		}
		global::g g12 = new global::g(global::g.a.e);
		global::g obj26 = g12;
		rotationOverLifetime = component.get_rotationOverLifetime();
		val = ((RotationOverLifetimeModule)(ref rotationOverLifetime)).get_x();
		obj26.d(((MinMaxCurve)(ref val)).get_constantMin());
		global::g obj27 = g12;
		rotationOverLifetime = component.get_rotationOverLifetime();
		val = ((RotationOverLifetimeModule)(ref rotationOverLifetime)).get_y();
		obj27.d(((MinMaxCurve)(ref val)).get_constantMin());
		global::g obj28 = g12;
		rotationOverLifetime = component.get_rotationOverLifetime();
		val = ((RotationOverLifetimeModule)(ref rotationOverLifetime)).get_z();
		obj28.d(((MinMaxCurve)(ref val)).get_constantMin());
		g7.d("constantMinSeparate", g12);
		goto IL_3621;
		IL_3054:
		SizeOverLifetimeModule sizeOverLifetime = component.get_sizeOverLifetime();
		MinMaxCurve size = ((SizeOverLifetimeModule)(ref sizeOverLifetime)).get_size();
		global::g a_14 = g7;
		sizeOverLifetime = component.get_sizeOverLifetime();
		val = ((SizeOverLifetimeModule)(ref sizeOverLifetime)).get_size();
		a(size, a_14, "gradientMin", "sizes", -1, ((MinMaxCurve)(ref val)).get_curveMultiplier(), 1f, A_7: true);
		sizeOverLifetime = component.get_sizeOverLifetime();
		MinMaxCurve size2 = ((SizeOverLifetimeModule)(ref sizeOverLifetime)).get_size();
		global::g a_15 = g7;
		sizeOverLifetime = component.get_sizeOverLifetime();
		val = ((SizeOverLifetimeModule)(ref sizeOverLifetime)).get_size();
		a(size2, a_15, "gradientMax", "sizes", 1, ((MinMaxCurve)(ref val)).get_curveMultiplier(), 1f, A_7: true);
		sizeOverLifetime = component.get_sizeOverLifetime();
		a(((SizeOverLifetimeModule)(ref sizeOverLifetime)).get_x(), g7, "gradientXMin", "sizes", -1, 1f, 1f, A_7: true);
		sizeOverLifetime = component.get_sizeOverLifetime();
		a(((SizeOverLifetimeModule)(ref sizeOverLifetime)).get_x(), g7, "gradientXMax", "sizes", 1, 1f, 1f, A_7: true);
		sizeOverLifetime = component.get_sizeOverLifetime();
		a(((SizeOverLifetimeModule)(ref sizeOverLifetime)).get_y(), g7, "gradientYMin", "sizes", -1, 1f, 1f, A_7: true);
		sizeOverLifetime = component.get_sizeOverLifetime();
		a(((SizeOverLifetimeModule)(ref sizeOverLifetime)).get_y(), g7, "gradientYMax", "sizes", 1, 1f, 1f, A_7: true);
		sizeOverLifetime = component.get_sizeOverLifetime();
		a(((SizeOverLifetimeModule)(ref sizeOverLifetime)).get_z(), g7, "gradientZMin", "sizes", -1, 1f, 1f, A_7: true);
		sizeOverLifetime = component.get_sizeOverLifetime();
		a(((SizeOverLifetimeModule)(ref sizeOverLifetime)).get_z(), g7, "gradientZMax", "sizes", 1, 1f, 1f, A_7: true);
		global::g g13;
		if (g2.h.Count != 0)
		{
			g13.d("bases", g2);
		}
		if (g7.h.Count != 0)
		{
			g13.d("size", g7);
		}
		goto IL_3212;
		IL_222a:
		velocityOverLifetime = component.get_velocityOverLifetime();
		MinMaxCurve a_16 = ((VelocityOverLifetimeModule)(ref velocityOverLifetime)).get_x();
		global::g a_17 = g7;
		velocityOverLifetime = component.get_velocityOverLifetime();
		val = ((VelocityOverLifetimeModule)(ref velocityOverLifetime)).get_x();
		a(a_16, a_17, "gradientX", "velocitys", 0, ((MinMaxCurve)(ref val)).get_curveMultiplier(), -1f);
		velocityOverLifetime = component.get_velocityOverLifetime();
		MinMaxCurve a_18 = ((VelocityOverLifetimeModule)(ref velocityOverLifetime)).get_y();
		global::g a_19 = g7;
		velocityOverLifetime = component.get_velocityOverLifetime();
		val = ((VelocityOverLifetimeModule)(ref velocityOverLifetime)).get_y();
		a(a_18, a_19, "gradientY", "velocitys", 0, ((MinMaxCurve)(ref val)).get_curveMultiplier(), 1f);
		velocityOverLifetime = component.get_velocityOverLifetime();
		MinMaxCurve a_20 = ((VelocityOverLifetimeModule)(ref velocityOverLifetime)).get_z();
		global::g a_21 = g7;
		velocityOverLifetime = component.get_velocityOverLifetime();
		val = ((VelocityOverLifetimeModule)(ref velocityOverLifetime)).get_z();
		a(a_20, a_21, "gradientZ", "velocitys", 0, ((MinMaxCurve)(ref val)).get_curveMultiplier(), 1f);
		velocityOverLifetime = component.get_velocityOverLifetime();
		val = ((VelocityOverLifetimeModule)(ref velocityOverLifetime)).get_x();
		if (((MinMaxCurve)(ref val)).get_constantMin() == 0f)
		{
			velocityOverLifetime = component.get_velocityOverLifetime();
			val = ((VelocityOverLifetimeModule)(ref velocityOverLifetime)).get_y();
			if (((MinMaxCurve)(ref val)).get_constantMin() == 0f)
			{
				velocityOverLifetime = component.get_velocityOverLifetime();
				val = ((VelocityOverLifetimeModule)(ref velocityOverLifetime)).get_z();
				if (((MinMaxCurve)(ref val)).get_constantMin() == 0f)
				{
					goto IL_23bd;
				}
			}
		}
		g12 = new global::g(global::g.a.e);
		global::g obj29 = g12;
		velocityOverLifetime = component.get_velocityOverLifetime();
		val = ((VelocityOverLifetimeModule)(ref velocityOverLifetime)).get_x();
		obj29.d(((MinMaxCurve)(ref val)).get_constantMin() * -1f);
		global::g obj30 = g12;
		velocityOverLifetime = component.get_velocityOverLifetime();
		val = ((VelocityOverLifetimeModule)(ref velocityOverLifetime)).get_y();
		obj30.d(((MinMaxCurve)(ref val)).get_constantMin());
		global::g obj31 = g12;
		velocityOverLifetime = component.get_velocityOverLifetime();
		val = ((VelocityOverLifetimeModule)(ref velocityOverLifetime)).get_z();
		obj31.d(((MinMaxCurve)(ref val)).get_constantMin());
		g7.d("constantMin", g12);
		goto IL_23bd;
		IL_2b53:
		ColorOverLifetimeModule colorOverLifetime = component.get_colorOverLifetime();
		MinMaxGradient val2 = ((ColorOverLifetimeModule)(ref colorOverLifetime)).get_color();
		a(((MinMaxGradient)(ref val2)).get_gradientMin(), g7, "gradientMin");
		colorOverLifetime = component.get_colorOverLifetime();
		val2 = ((ColorOverLifetimeModule)(ref colorOverLifetime)).get_color();
		a(((MinMaxGradient)(ref val2)).get_gradientMax(), g7, "gradientMax");
		global::g g14;
		if (g2.h.Count != 0)
		{
			g14.d("bases", g2);
		}
		if (g7.h.Count != 0)
		{
			g14.d("color", g7);
		}
		goto IL_2bd3;
		IL_3aad:
		RotationBySpeedModule rotationBySpeed = component.get_rotationBySpeed();
		if (((RotationBySpeedModule)(ref rotationBySpeed)).get_enabled())
		{
			Debug.LogWarning((object)("LayaAir3D Warning(Code:3120) : GameObject(" + ((Object)A_0).get_name() + ") ParticleSystem Componment can't support Rotation_By_Speed Module !"));
		}
		ExternalForcesModule externalForces = component.get_externalForces();
		if (((ExternalForcesModule)(ref externalForces)).get_enabled())
		{
			Debug.LogWarning((object)("LayaAir3D Warning(Code:3130) : GameObject(" + ((Object)A_0).get_name() + ") ParticleSystem Componment can't support External_Forces Module !"));
		}
		NoiseModule noise = component.get_noise();
		if (((NoiseModule)(ref noise)).get_enabled())
		{
			Debug.LogWarning((object)("LayaAir3D Warning(Code:3140) : GameObject(" + ((Object)A_0).get_name() + ") ParticleSystem Componment can't support Noise Module !"));
		}
		CollisionModule collision = component.get_collision();
		if (((CollisionModule)(ref collision)).get_enabled())
		{
			Debug.LogWarning((object)("LayaAir3D Warning(Code:3150) : GameObject(" + ((Object)A_0).get_name() + ") ParticleSystem Componment can't support Collision Module !"));
		}
		TriggerModule trigger = component.get_trigger();
		if (((TriggerModule)(ref trigger)).get_enabled())
		{
			Debug.LogWarning((object)("LayaAir3D Warning(Code:3160) : GameObject(" + ((Object)A_0).get_name() + ") ParticleSystem Componment can't support Trigger Module !"));
		}
		SubEmittersModule subEmitters = component.get_subEmitters();
		if (((SubEmittersModule)(ref subEmitters)).get_enabled())
		{
			Debug.LogWarning((object)("LayaAir3D Warning(Code:3170) : GameObject(" + ((Object)A_0).get_name() + ") ParticleSystem Componment can't support SubEmitters Module !"));
		}
		textureSheetAnimation = component.get_textureSheetAnimation();
		if (((TextureSheetAnimationModule)(ref textureSheetAnimation)).get_enabled())
		{
			g10 = new global::g(global::g.a.d);
			A_1.d("textureSheetAnimation", g10);
			g2 = new global::g(global::g.a.d);
			g11 = new global::g(global::g.a.d);
			global::g obj32 = g2;
			textureSheetAnimation = component.get_textureSheetAnimation();
			obj32.d("enable", ((TextureSheetAnimationModule)(ref textureSheetAnimation)).get_enabled());
			textureSheetAnimation = component.get_textureSheetAnimation();
			if (((TextureSheetAnimationModule)(ref textureSheetAnimation)).get_numTilesX() == 1)
			{
				textureSheetAnimation = component.get_textureSheetAnimation();
				if (((TextureSheetAnimationModule)(ref textureSheetAnimation)).get_numTilesY() == 1)
				{
					goto IL_3c65;
				}
			}
			g6 = new global::g(global::g.a.e);
			g11.d("tiles", g6);
			global::g obj33 = g6;
			textureSheetAnimation = component.get_textureSheetAnimation();
			obj33.d(((TextureSheetAnimationModule)(ref textureSheetAnimation)).get_numTilesX());
			global::g obj34 = g6;
			textureSheetAnimation = component.get_textureSheetAnimation();
			obj34.d(((TextureSheetAnimationModule)(ref textureSheetAnimation)).get_numTilesY());
			goto IL_3c65;
		}
		goto IL_418f;
		IL_2645:
		LimitVelocityOverLifetimeModule limitVelocityOverLifetime = component.get_limitVelocityOverLifetime();
		if (((LimitVelocityOverLifetimeModule)(ref limitVelocityOverLifetime)).get_enabled())
		{
			Debug.LogWarning((object)("LayaAir3D Warning(Code:3040) : GameObject(" + ((Object)A_0).get_name() + ") ParticleSystem Componment can't support Limit_Velocity_Over_Lifetime Module !"));
		}
		InheritVelocityModule inheritVelocity = component.get_inheritVelocity();
		if (((InheritVelocityModule)(ref inheritVelocity)).get_enabled())
		{
			Debug.LogWarning((object)("LayaAir3D Warning(Code:3050) : GameObject(" + ((Object)A_0).get_name() + ") ParticleSystem Componment can't support Inherit_Velocity Module !"));
		}
		ForceOverLifetimeModule forceOverLifetime = component.get_forceOverLifetime();
		if (((ForceOverLifetimeModule)(ref forceOverLifetime)).get_enabled())
		{
			Debug.LogWarning((object)("LayaAir3D Warning(Code:3060) : GameObject(" + ((Object)A_0).get_name() + ") ParticleSystem Componment can't support Force_Over_Lifetime Module !"));
		}
		colorOverLifetime = component.get_colorOverLifetime();
		ParticleSystemGradientMode mode2;
		if (((ColorOverLifetimeModule)(ref colorOverLifetime)).get_enabled())
		{
			g14 = new global::g(global::g.a.d);
			A_1.d("colorOverLifetime", g14);
			g2 = new global::g(global::g.a.d);
			global::g obj35 = g2;
			colorOverLifetime = component.get_colorOverLifetime();
			obj35.d("enable", ((ColorOverLifetimeModule)(ref colorOverLifetime)).get_enabled());
			g7 = new global::g(global::g.a.d);
			colorOverLifetime = component.get_colorOverLifetime();
			val2 = ((ColorOverLifetimeModule)(ref colorOverLifetime)).get_color();
			mode2 = ((MinMaxGradient)(ref val2)).get_mode();
			if (((object)(ParticleSystemGradientMode)(ref mode2)).ToString() == "Gradient")
			{
				num = 1;
			}
			else
			{
				colorOverLifetime = component.get_colorOverLifetime();
				val2 = ((ColorOverLifetimeModule)(ref colorOverLifetime)).get_color();
				mode2 = ((MinMaxGradient)(ref val2)).get_mode();
				if (((object)(ParticleSystemGradientMode)(ref mode2)).ToString() == "TwoGradients")
				{
					num = 3;
				}
			}
			g7.d("type", num);
			colorOverLifetime = component.get_colorOverLifetime();
			val2 = ((ColorOverLifetimeModule)(ref colorOverLifetime)).get_color();
			if (((MinMaxGradient)(ref val2)).get_color().r == 0f)
			{
				colorOverLifetime = component.get_colorOverLifetime();
				val2 = ((ColorOverLifetimeModule)(ref colorOverLifetime)).get_color();
				if (((MinMaxGradient)(ref val2)).get_color().g == 0f)
				{
					colorOverLifetime = component.get_colorOverLifetime();
					val2 = ((ColorOverLifetimeModule)(ref colorOverLifetime)).get_color();
					if (((MinMaxGradient)(ref val2)).get_color().b == 0f)
					{
						colorOverLifetime = component.get_colorOverLifetime();
						val2 = ((ColorOverLifetimeModule)(ref colorOverLifetime)).get_color();
						if (((MinMaxGradient)(ref val2)).get_color().a == 0f)
						{
							goto IL_28c9;
						}
					}
				}
			}
			g6 = new global::g(global::g.a.e);
			global::g obj36 = g6;
			colorOverLifetime = component.get_colorOverLifetime();
			val2 = ((ColorOverLifetimeModule)(ref colorOverLifetime)).get_color();
			obj36.d(((MinMaxGradient)(ref val2)).get_color().r);
			global::g obj37 = g6;
			colorOverLifetime = component.get_colorOverLifetime();
			val2 = ((ColorOverLifetimeModule)(ref colorOverLifetime)).get_color();
			obj37.d(((MinMaxGradient)(ref val2)).get_color().g);
			global::g obj38 = g6;
			colorOverLifetime = component.get_colorOverLifetime();
			val2 = ((ColorOverLifetimeModule)(ref colorOverLifetime)).get_color();
			obj38.d(((MinMaxGradient)(ref val2)).get_color().b);
			global::g obj39 = g6;
			colorOverLifetime = component.get_colorOverLifetime();
			val2 = ((ColorOverLifetimeModule)(ref colorOverLifetime)).get_color();
			obj39.d(((MinMaxGradient)(ref val2)).get_color().a);
			g7.d("constant", g6);
			goto IL_28c9;
		}
		goto IL_2bd3;
		IL_1fa7:
		velocityOverLifetime = component.get_velocityOverLifetime();
		ParticleSystemSimulationSpace val3;
		if (((VelocityOverLifetimeModule)(ref velocityOverLifetime)).get_enabled())
		{
			g8 = new global::g(global::g.a.d);
			A_1.d("velocityOverLifetime", g8);
			g2 = new global::g(global::g.a.d);
			global::g obj40 = g2;
			velocityOverLifetime = component.get_velocityOverLifetime();
			obj40.d("enable", ((VelocityOverLifetimeModule)(ref velocityOverLifetime)).get_enabled());
			velocityOverLifetime = component.get_velocityOverLifetime();
			val3 = ((VelocityOverLifetimeModule)(ref velocityOverLifetime)).get_space();
			if (((object)(ParticleSystemSimulationSpace)(ref val3)).ToString() == "Local")
			{
				num = 0;
			}
			else
			{
				velocityOverLifetime = component.get_velocityOverLifetime();
				val3 = ((VelocityOverLifetimeModule)(ref velocityOverLifetime)).get_space();
				if (((object)(ParticleSystemSimulationSpace)(ref val3)).ToString() == "World")
				{
					num = 1;
				}
			}
			g2.d("space", num);
			g7 = new global::g(global::g.a.d);
			velocityOverLifetime = component.get_velocityOverLifetime();
			val = ((VelocityOverLifetimeModule)(ref velocityOverLifetime)).get_x();
			mode = ((MinMaxCurve)(ref val)).get_mode();
			if (((object)(ParticleSystemCurveMode)(ref mode)).ToString() == "Constant")
			{
				num = 0;
			}
			else
			{
				velocityOverLifetime = component.get_velocityOverLifetime();
				val = ((VelocityOverLifetimeModule)(ref velocityOverLifetime)).get_x();
				mode = ((MinMaxCurve)(ref val)).get_mode();
				if (((object)(ParticleSystemCurveMode)(ref mode)).ToString() == "Curve")
				{
					num = 1;
				}
				else
				{
					velocityOverLifetime = component.get_velocityOverLifetime();
					val = ((VelocityOverLifetimeModule)(ref velocityOverLifetime)).get_x();
					mode = ((MinMaxCurve)(ref val)).get_mode();
					if (((object)(ParticleSystemCurveMode)(ref mode)).ToString() == "TwoConstants")
					{
						num = 2;
					}
					else
					{
						velocityOverLifetime = component.get_velocityOverLifetime();
						val = ((VelocityOverLifetimeModule)(ref velocityOverLifetime)).get_x();
						mode = ((MinMaxCurve)(ref val)).get_mode();
						if (((object)(ParticleSystemCurveMode)(ref mode)).ToString() == "TwoCurves")
						{
							num = 3;
						}
					}
				}
			}
			g7.d("type", num);
			velocityOverLifetime = component.get_velocityOverLifetime();
			val = ((VelocityOverLifetimeModule)(ref velocityOverLifetime)).get_x();
			if (((MinMaxCurve)(ref val)).get_constant() == 0f)
			{
				velocityOverLifetime = component.get_velocityOverLifetime();
				val = ((VelocityOverLifetimeModule)(ref velocityOverLifetime)).get_y();
				if (((MinMaxCurve)(ref val)).get_constant() == 0f)
				{
					velocityOverLifetime = component.get_velocityOverLifetime();
					val = ((VelocityOverLifetimeModule)(ref velocityOverLifetime)).get_z();
					if (((MinMaxCurve)(ref val)).get_constant() == 0f)
					{
						goto IL_222a;
					}
				}
			}
			g12 = new global::g(global::g.a.e);
			global::g obj41 = g12;
			velocityOverLifetime = component.get_velocityOverLifetime();
			val = ((VelocityOverLifetimeModule)(ref velocityOverLifetime)).get_x();
			obj41.d(((MinMaxCurve)(ref val)).get_constant() * -1f);
			global::g obj42 = g12;
			velocityOverLifetime = component.get_velocityOverLifetime();
			val = ((VelocityOverLifetimeModule)(ref velocityOverLifetime)).get_y();
			obj42.d(((MinMaxCurve)(ref val)).get_constant());
			global::g obj43 = g12;
			velocityOverLifetime = component.get_velocityOverLifetime();
			val = ((VelocityOverLifetimeModule)(ref velocityOverLifetime)).get_z();
			obj43.d(((MinMaxCurve)(ref val)).get_constant());
			g7.d("constant", g12);
			goto IL_222a;
		}
		goto IL_2645;
		IL_2bd3:
		ColorBySpeedModule colorBySpeed = component.get_colorBySpeed();
		if (((ColorBySpeedModule)(ref colorBySpeed)).get_enabled())
		{
			Debug.LogWarning((object)("LayaAir3D Warning(Code:3080) : GameObject(" + ((Object)A_0).get_name() + ") ParticleSystem Componment can't support Color_By_Speed Module !"));
		}
		sizeOverLifetime = component.get_sizeOverLifetime();
		if (((SizeOverLifetimeModule)(ref sizeOverLifetime)).get_enabled())
		{
			g13 = new global::g(global::g.a.d);
			A_1.d("sizeOverLifetime", g13);
			g2 = new global::g(global::g.a.d);
			global::g obj44 = g2;
			sizeOverLifetime = component.get_sizeOverLifetime();
			obj44.d("enable", ((SizeOverLifetimeModule)(ref sizeOverLifetime)).get_enabled());
			g7 = new global::g(global::g.a.d);
			sizeOverLifetime = component.get_sizeOverLifetime();
			val = ((SizeOverLifetimeModule)(ref sizeOverLifetime)).get_size();
			mode = ((MinMaxCurve)(ref val)).get_mode();
			if (((object)(ParticleSystemCurveMode)(ref mode)).ToString() == "Curve")
			{
				num = 0;
			}
			else
			{
				sizeOverLifetime = component.get_sizeOverLifetime();
				val = ((SizeOverLifetimeModule)(ref sizeOverLifetime)).get_size();
				mode = ((MinMaxCurve)(ref val)).get_mode();
				if (((object)(ParticleSystemCurveMode)(ref mode)).ToString() == "TwoConstants")
				{
					num = 1;
				}
				else
				{
					sizeOverLifetime = component.get_sizeOverLifetime();
					val = ((SizeOverLifetimeModule)(ref sizeOverLifetime)).get_size();
					mode = ((MinMaxCurve)(ref val)).get_mode();
					if (((object)(ParticleSystemCurveMode)(ref mode)).ToString() == "TwoCurves")
					{
						num = 2;
					}
				}
			}
			g7.d("type", num);
			sizeOverLifetime = component.get_sizeOverLifetime();
			if (((SizeOverLifetimeModule)(ref sizeOverLifetime)).get_separateAxes())
			{
				global::g obj45 = g7;
				sizeOverLifetime = component.get_sizeOverLifetime();
				obj45.d("separateAxes", ((SizeOverLifetimeModule)(ref sizeOverLifetime)).get_separateAxes());
			}
			sizeOverLifetime = component.get_sizeOverLifetime();
			MinMaxCurve size3 = ((SizeOverLifetimeModule)(ref sizeOverLifetime)).get_size();
			global::g a_22 = g7;
			sizeOverLifetime = component.get_sizeOverLifetime();
			val = ((SizeOverLifetimeModule)(ref sizeOverLifetime)).get_size();
			a(size3, a_22, "gradient", "sizes", 0, ((MinMaxCurve)(ref val)).get_curveMultiplier(), 1f, A_7: true);
			sizeOverLifetime = component.get_sizeOverLifetime();
			MinMaxCurve a_23 = ((SizeOverLifetimeModule)(ref sizeOverLifetime)).get_x();
			global::g a_24 = g7;
			sizeOverLifetime = component.get_sizeOverLifetime();
			val = ((SizeOverLifetimeModule)(ref sizeOverLifetime)).get_x();
			a(a_23, a_24, "gradientX", "sizes", 0, ((MinMaxCurve)(ref val)).get_curveMultiplier(), 1f, A_7: true);
			sizeOverLifetime = component.get_sizeOverLifetime();
			MinMaxCurve a_25 = ((SizeOverLifetimeModule)(ref sizeOverLifetime)).get_y();
			global::g a_26 = g7;
			sizeOverLifetime = component.get_sizeOverLifetime();
			val = ((SizeOverLifetimeModule)(ref sizeOverLifetime)).get_y();
			a(a_25, a_26, "gradientY", "sizes", 0, ((MinMaxCurve)(ref val)).get_curveMultiplier(), 1f, A_7: true);
			sizeOverLifetime = component.get_sizeOverLifetime();
			MinMaxCurve a_27 = ((SizeOverLifetimeModule)(ref sizeOverLifetime)).get_z();
			global::g a_28 = g7;
			sizeOverLifetime = component.get_sizeOverLifetime();
			val = ((SizeOverLifetimeModule)(ref sizeOverLifetime)).get_z();
			a(a_27, a_28, "gradientZ", "sizes", 0, ((MinMaxCurve)(ref val)).get_curveMultiplier(), 1f, A_7: true);
			sizeOverLifetime = component.get_sizeOverLifetime();
			val = ((SizeOverLifetimeModule)(ref sizeOverLifetime)).get_size();
			if (((MinMaxCurve)(ref val)).get_constantMin() != 0f)
			{
				global::g obj46 = g7;
				sizeOverLifetime = component.get_sizeOverLifetime();
				val = ((SizeOverLifetimeModule)(ref sizeOverLifetime)).get_size();
				obj46.d("constantMin", ((MinMaxCurve)(ref val)).get_constantMin());
			}
			sizeOverLifetime = component.get_sizeOverLifetime();
			val = ((SizeOverLifetimeModule)(ref sizeOverLifetime)).get_size();
			if (((MinMaxCurve)(ref val)).get_constantMax() != 0f)
			{
				global::g obj47 = g7;
				sizeOverLifetime = component.get_sizeOverLifetime();
				val = ((SizeOverLifetimeModule)(ref sizeOverLifetime)).get_size();
				obj47.d("constantMax", ((MinMaxCurve)(ref val)).get_constantMax());
			}
			sizeOverLifetime = component.get_sizeOverLifetime();
			val = ((SizeOverLifetimeModule)(ref sizeOverLifetime)).get_x();
			if (((MinMaxCurve)(ref val)).get_constantMin() == 0f)
			{
				sizeOverLifetime = component.get_sizeOverLifetime();
				val = ((SizeOverLifetimeModule)(ref sizeOverLifetime)).get_y();
				if (((MinMaxCurve)(ref val)).get_constantMin() == 0f)
				{
					sizeOverLifetime = component.get_sizeOverLifetime();
					val = ((SizeOverLifetimeModule)(ref sizeOverLifetime)).get_z();
					if (((MinMaxCurve)(ref val)).get_constantMin() == 0f)
					{
						goto IL_2f84;
					}
				}
			}
			g12 = new global::g(global::g.a.e);
			global::g obj48 = g12;
			sizeOverLifetime = component.get_sizeOverLifetime();
			val = ((SizeOverLifetimeModule)(ref sizeOverLifetime)).get_x();
			obj48.d(((MinMaxCurve)(ref val)).get_constantMin());
			global::g obj49 = g12;
			sizeOverLifetime = component.get_sizeOverLifetime();
			val = ((SizeOverLifetimeModule)(ref sizeOverLifetime)).get_y();
			obj49.d(((MinMaxCurve)(ref val)).get_constantMin());
			global::g obj50 = g12;
			sizeOverLifetime = component.get_sizeOverLifetime();
			val = ((SizeOverLifetimeModule)(ref sizeOverLifetime)).get_z();
			obj50.d(((MinMaxCurve)(ref val)).get_constantMin());
			g7.d("constantMinSeparate", g12);
			goto IL_2f84;
		}
		goto IL_3212;
		IL_1c53:
		global::g g15;
		g15.d("shapeType", num);
		ShapeModule shape = component.get_shape();
		if (((ShapeModule)(ref shape)).get_radius() != 1f)
		{
			global::g obj51 = g2;
			shape = component.get_shape();
			obj51.d("radius", ((ShapeModule)(ref shape)).get_radius());
		}
		shape = component.get_shape();
		ParticleSystemShapeType shapeType = ((ShapeModule)(ref shape)).get_shapeType();
		if (((object)(ParticleSystemShapeType)(ref shapeType)).ToString() == "SphereShell")
		{
			g2.d("emitFromShell", A_1: true);
		}
		shape = component.get_shape();
		if (((ShapeModule)(ref shape)).get_randomDirectionAmount() != 0f)
		{
			global::g obj52 = g2;
			shape = component.get_shape();
			obj52.d("randomDirection", ((ShapeModule)(ref shape)).get_randomDirectionAmount());
		}
		shape = component.get_shape();
		shapeType = ((ShapeModule)(ref shape)).get_shapeType();
		if (((object)(ParticleSystemShapeType)(ref shapeType)).ToString() == "HemisphereShell")
		{
			g2.d("emitFromShell", A_1: true);
		}
		shape = component.get_shape();
		if (((ShapeModule)(ref shape)).get_angle() != 25f)
		{
			global::g obj53 = g2;
			shape = component.get_shape();
			obj53.d("angle", ((ShapeModule)(ref shape)).get_angle() * (float)Math.PI / 180f);
		}
		shape = component.get_shape();
		if (((ShapeModule)(ref shape)).get_length() != 5f)
		{
			global::g obj54 = g2;
			shape = component.get_shape();
			obj54.d("length", ((ShapeModule)(ref shape)).get_length());
		}
		num = -1;
		shape = component.get_shape();
		shapeType = ((ShapeModule)(ref shape)).get_shapeType();
		if (((object)(ParticleSystemShapeType)(ref shapeType)).ToString() == "Cone")
		{
			num = 0;
		}
		else
		{
			shape = component.get_shape();
			shapeType = ((ShapeModule)(ref shape)).get_shapeType();
			if (((object)(ParticleSystemShapeType)(ref shapeType)).ToString() == "ConeShell")
			{
				num = 1;
			}
			else
			{
				shape = component.get_shape();
				shapeType = ((ShapeModule)(ref shape)).get_shapeType();
				if (((object)(ParticleSystemShapeType)(ref shapeType)).ToString() == "ConeVolume")
				{
					num = 2;
				}
				else
				{
					shape = component.get_shape();
					shapeType = ((ShapeModule)(ref shape)).get_shapeType();
					if (((object)(ParticleSystemShapeType)(ref shapeType)).ToString() == "ConeVolumeShell")
					{
						num = 3;
					}
				}
			}
		}
		if (num != -1)
		{
			g2.d("emitType", num);
		}
		shape = component.get_shape();
		if (((ShapeModule)(ref shape)).get_scale().x != 1f)
		{
			global::g obj55 = g2;
			shape = component.get_shape();
			obj55.d("x", ((ShapeModule)(ref shape)).get_scale().x);
		}
		shape = component.get_shape();
		if (((ShapeModule)(ref shape)).get_scale().y != 1f)
		{
			global::g obj56 = g2;
			shape = component.get_shape();
			obj56.d("y", ((ShapeModule)(ref shape)).get_scale().y);
		}
		shape = component.get_shape();
		if (((ShapeModule)(ref shape)).get_scale().z != 1f)
		{
			global::g obj57 = g2;
			shape = component.get_shape();
			obj57.d("z", ((ShapeModule)(ref shape)).get_scale().z);
		}
		shape = component.get_shape();
		if (((ShapeModule)(ref shape)).get_arc() != 360f)
		{
			global::g obj58 = g2;
			shape = component.get_shape();
			obj58.d("arc", ((ShapeModule)(ref shape)).get_arc());
		}
		shape = component.get_shape();
		shapeType = ((ShapeModule)(ref shape)).get_shapeType();
		if (((object)(ParticleSystemShapeType)(ref shapeType)).ToString() == "CircleEdge")
		{
			g2.d("emitFromEdge", A_1: true);
		}
		if (g2.h.Count != 0)
		{
			g15.d("bases", g2);
		}
		goto IL_1fa7;
		IL_23bd:
		velocityOverLifetime = component.get_velocityOverLifetime();
		val = ((VelocityOverLifetimeModule)(ref velocityOverLifetime)).get_x();
		if (((MinMaxCurve)(ref val)).get_constantMax() == 0f)
		{
			velocityOverLifetime = component.get_velocityOverLifetime();
			val = ((VelocityOverLifetimeModule)(ref velocityOverLifetime)).get_y();
			if (((MinMaxCurve)(ref val)).get_constantMax() == 0f)
			{
				velocityOverLifetime = component.get_velocityOverLifetime();
				val = ((VelocityOverLifetimeModule)(ref velocityOverLifetime)).get_z();
				if (((MinMaxCurve)(ref val)).get_constantMax() == 0f)
				{
					goto IL_2493;
				}
			}
		}
		g12 = new global::g(global::g.a.e);
		global::g obj59 = g12;
		velocityOverLifetime = component.get_velocityOverLifetime();
		val = ((VelocityOverLifetimeModule)(ref velocityOverLifetime)).get_x();
		obj59.d(((MinMaxCurve)(ref val)).get_constantMax() * -1f);
		global::g obj60 = g12;
		velocityOverLifetime = component.get_velocityOverLifetime();
		val = ((VelocityOverLifetimeModule)(ref velocityOverLifetime)).get_y();
		obj60.d(((MinMaxCurve)(ref val)).get_constantMax());
		global::g obj61 = g12;
		velocityOverLifetime = component.get_velocityOverLifetime();
		val = ((VelocityOverLifetimeModule)(ref velocityOverLifetime)).get_z();
		obj61.d(((MinMaxCurve)(ref val)).get_constantMax());
		g7.d("constantMax", g12);
		goto IL_2493;
		IL_13c4:
		if (Physics.get_gravity().x != 0f || !a(Physics.get_gravity().y, -9.81f) || Physics.get_gravity().z != 0f)
		{
			g6 = new global::g(global::g.a.e);
			g6.d(Physics.get_gravity().x);
			g6.d(Physics.get_gravity().y);
			g6.d(Physics.get_gravity().z);
			g3.d("gravity", g6);
		}
		main = component.get_main();
		val = ((MainModule)(ref main)).get_gravityModifier();
		if (((MinMaxCurve)(ref val)).get_constant() != 0f)
		{
			global::g obj62 = g2;
			main = component.get_main();
			val = ((MainModule)(ref main)).get_gravityModifier();
			obj62.d("gravityModifier", ((MinMaxCurve)(ref val)).get_constant());
		}
		main = component.get_main();
		val3 = ((MainModule)(ref main)).get_simulationSpace();
		if (((object)(ParticleSystemSimulationSpace)(ref val3)).ToString() == "World")
		{
			num = 0;
		}
		else
		{
			main = component.get_main();
			val3 = ((MainModule)(ref main)).get_simulationSpace();
			if (((object)(ParticleSystemSimulationSpace)(ref val3)).ToString() == "Local")
			{
				num = 1;
			}
		}
		if (num != 1)
		{
			g2.d("simulationSpace", num);
		}
		main = component.get_main();
		if (((MainModule)(ref main)).get_simulationSpeed() != 1f)
		{
			global::g obj63 = g2;
			main = component.get_main();
			obj63.d("simulationSpeed", ((MainModule)(ref main)).get_simulationSpeed());
		}
		main = component.get_main();
		ParticleSystemScalingMode scalingMode = ((MainModule)(ref main)).get_scalingMode();
		if (((object)(ParticleSystemScalingMode)(ref scalingMode)).ToString() == "Hierarchy")
		{
			num = 0;
		}
		else
		{
			main = component.get_main();
			scalingMode = ((MainModule)(ref main)).get_scalingMode();
			if (((object)(ParticleSystemScalingMode)(ref scalingMode)).ToString() == "Local")
			{
				num = 1;
			}
			else
			{
				main = component.get_main();
				scalingMode = ((MainModule)(ref main)).get_scalingMode();
				if (((object)(ParticleSystemScalingMode)(ref scalingMode)).ToString() == "Shape")
				{
					num = 2;
				}
			}
		}
		if (num != 1)
		{
			g2.d("scaleMode", num);
		}
		main = component.get_main();
		if (!((MainModule)(ref main)).get_playOnAwake())
		{
			global::g obj64 = g2;
			main = component.get_main();
			obj64.d("playOnAwake", ((MainModule)(ref main)).get_playOnAwake());
		}
		global::g obj65 = g2;
		main = component.get_main();
		obj65.d("maxParticles", ((MainModule)(ref main)).get_maxParticles());
		if (!component.get_useAutoRandomSeed())
		{
			g2.d("autoRandomSeed", component.get_useAutoRandomSeed());
		}
		g.d("randomSeed", (float)(double)component.get_randomSeed());
		if (g2.h.Count != 0)
		{
			g.d("bases", g2);
		}
		if (g3.h.Count != 0)
		{
			g.d("vector3s", g3);
		}
		if (g4.h.Count != 0)
		{
			g.d("gradientDataNumbers", g4);
		}
		if (g5.h.Count != 0)
		{
			g.d("vector4s", g5);
		}
		EmissionModule emission = component.get_emission();
		if (((EmissionModule)(ref emission)).get_enabled())
		{
			global::g g16 = new global::g(global::g.a.d);
			A_1.d("emission", g16);
			g2 = new global::g(global::g.a.d);
			global::g obj66 = g2;
			emission = component.get_emission();
			obj66.d("enable", ((EmissionModule)(ref emission)).get_enabled());
			emission = component.get_emission();
			val = ((EmissionModule)(ref emission)).get_rateOverTime();
			mode = ((MinMaxCurve)(ref val)).get_mode();
			if (((object)(ParticleSystemCurveMode)(ref mode)).ToString() == "Constant")
			{
				num = 0;
			}
			else
			{
				emission = component.get_emission();
				val = ((EmissionModule)(ref emission)).get_rateOverTime();
				mode = ((MinMaxCurve)(ref val)).get_mode();
				if (((object)(ParticleSystemCurveMode)(ref mode)).ToString() == "Curve")
				{
					num = 1;
				}
				else
				{
					emission = component.get_emission();
					val = ((EmissionModule)(ref emission)).get_rateOverTime();
					mode = ((MinMaxCurve)(ref val)).get_mode();
					if (((object)(ParticleSystemCurveMode)(ref mode)).ToString() == "TwoConstants")
					{
						num = 2;
					}
					else
					{
						emission = component.get_emission();
						val = ((EmissionModule)(ref emission)).get_rateOverTime();
						mode = ((MinMaxCurve)(ref val)).get_mode();
						if (((object)(ParticleSystemCurveMode)(ref mode)).ToString() == "TwoCurves")
						{
							num = 3;
						}
					}
				}
			}
			emission = component.get_emission();
			val = ((EmissionModule)(ref emission)).get_rateOverTime();
			if (((MinMaxCurve)(ref val)).get_constant() != 10f)
			{
				global::g obj67 = g2;
				emission = component.get_emission();
				val = ((EmissionModule)(ref emission)).get_rateOverTime();
				obj67.d("emissionRate", ((MinMaxCurve)(ref val)).get_constant());
			}
			if (g2.h.Count != 0)
			{
				g16.d("bases", g2);
			}
			g6 = new global::g(global::g.a.e);
			emission = component.get_emission();
			Burst[] array = (Burst[])(object)new Burst[((EmissionModule)(ref emission)).get_burstCount()];
			emission = component.get_emission();
			((EmissionModule)(ref emission)).GetBursts(array);
			if (array.Length != 0)
			{
				for (int i = 0; i < array.Length; i++)
				{
					global::g g17 = new global::g(global::g.a.d);
					g17.d("time", ((Burst)(ref array[i])).get_time());
					g17.d("min", ((Burst)(ref array[i])).get_minCount());
					g17.d("max", ((Burst)(ref array[i])).get_maxCount());
					g6.f(g17);
				}
				g16.d("bursts", g6);
			}
		}
		shape = component.get_shape();
		if (((ShapeModule)(ref shape)).get_enabled())
		{
			g15 = new global::g(global::g.a.d);
			A_1.d("shape", g15);
			g2 = new global::g(global::g.a.d);
			g3 = new global::g(global::g.a.d);
			g4 = new global::g(global::g.a.d);
			g5 = new global::g(global::g.a.d);
			global::g obj68 = g2;
			shape = component.get_shape();
			obj68.d("enable", ((ShapeModule)(ref shape)).get_enabled());
			shape = component.get_shape();
			shapeType = ((ShapeModule)(ref shape)).get_shapeType();
			if (!(((object)(ParticleSystemShapeType)(ref shapeType)).ToString() == "Sphere"))
			{
				shape = component.get_shape();
				shapeType = ((ShapeModule)(ref shape)).get_shapeType();
				if (!(((object)(ParticleSystemShapeType)(ref shapeType)).ToString() == "SphereShell"))
				{
					shape = component.get_shape();
					shapeType = ((ShapeModule)(ref shape)).get_shapeType();
					if (!(((object)(ParticleSystemShapeType)(ref shapeType)).ToString() == "Hemisphere"))
					{
						shape = component.get_shape();
						shapeType = ((ShapeModule)(ref shape)).get_shapeType();
						if (!(((object)(ParticleSystemShapeType)(ref shapeType)).ToString() == "HemisphereShell"))
						{
							shape = component.get_shape();
							shapeType = ((ShapeModule)(ref shape)).get_shapeType();
							if (!(((object)(ParticleSystemShapeType)(ref shapeType)).ToString() == "Cone"))
							{
								shape = component.get_shape();
								shapeType = ((ShapeModule)(ref shape)).get_shapeType();
								if (!(((object)(ParticleSystemShapeType)(ref shapeType)).ToString() == "ConeShell"))
								{
									shape = component.get_shape();
									shapeType = ((ShapeModule)(ref shape)).get_shapeType();
									if (!(((object)(ParticleSystemShapeType)(ref shapeType)).ToString() == "ConeBase"))
									{
										shape = component.get_shape();
										shapeType = ((ShapeModule)(ref shape)).get_shapeType();
										if (!(((object)(ParticleSystemShapeType)(ref shapeType)).ToString() == "ConeBaseShell"))
										{
											shape = component.get_shape();
											shapeType = ((ShapeModule)(ref shape)).get_shapeType();
											if (!(((object)(ParticleSystemShapeType)(ref shapeType)).ToString() == "ConeVolume"))
											{
												shape = component.get_shape();
												shapeType = ((ShapeModule)(ref shape)).get_shapeType();
												if (!(((object)(ParticleSystemShapeType)(ref shapeType)).ToString() == "ConeVolumeShell"))
												{
													shape = component.get_shape();
													shapeType = ((ShapeModule)(ref shape)).get_shapeType();
													if (((object)(ParticleSystemShapeType)(ref shapeType)).ToString() == "Box")
													{
														num = 3;
													}
													else
													{
														shape = component.get_shape();
														shapeType = ((ShapeModule)(ref shape)).get_shapeType();
														if (((object)(ParticleSystemShapeType)(ref shapeType)).ToString() == "Mesh")
														{
															num = 4;
														}
														else
														{
															shape = component.get_shape();
															shapeType = ((ShapeModule)(ref shape)).get_shapeType();
															if (((object)(ParticleSystemShapeType)(ref shapeType)).ToString() == "MeshRenderer")
															{
																num = 5;
															}
															else
															{
																shape = component.get_shape();
																shapeType = ((ShapeModule)(ref shape)).get_shapeType();
																if (((object)(ParticleSystemShapeType)(ref shapeType)).ToString() == "SkinnedMeshRenderer")
																{
																	num = 6;
																}
																else
																{
																	shape = component.get_shape();
																	shapeType = ((ShapeModule)(ref shape)).get_shapeType();
																	if (!(((object)(ParticleSystemShapeType)(ref shapeType)).ToString() == "Circle"))
																	{
																		shape = component.get_shape();
																		shapeType = ((ShapeModule)(ref shape)).get_shapeType();
																		if (!(((object)(ParticleSystemShapeType)(ref shapeType)).ToString() == "CircleEdge"))
																		{
																			shape = component.get_shape();
																			shapeType = ((ShapeModule)(ref shape)).get_shapeType();
																			if (((object)(ParticleSystemShapeType)(ref shapeType)).ToString() == "SingleSidedEdge")
																			{
																				num = 8;
																			}
																			goto IL_1c53;
																		}
																	}
																	num = 7;
																}
															}
														}
													}
													goto IL_1c53;
												}
											}
										}
									}
								}
							}
							num = 2;
							goto IL_1c53;
						}
					}
					num = 1;
					goto IL_1c53;
				}
			}
			num = 0;
			goto IL_1c53;
		}
		goto IL_1fa7;
		IL_2a20:
		colorOverLifetime = component.get_colorOverLifetime();
		val2 = ((ColorOverLifetimeModule)(ref colorOverLifetime)).get_color();
		if (((MinMaxGradient)(ref val2)).get_colorMax().r == 0f)
		{
			colorOverLifetime = component.get_colorOverLifetime();
			val2 = ((ColorOverLifetimeModule)(ref colorOverLifetime)).get_color();
			if (((MinMaxGradient)(ref val2)).get_colorMax().g == 0f)
			{
				colorOverLifetime = component.get_colorOverLifetime();
				val2 = ((ColorOverLifetimeModule)(ref colorOverLifetime)).get_color();
				if (((MinMaxGradient)(ref val2)).get_colorMax().b == 0f)
				{
					colorOverLifetime = component.get_colorOverLifetime();
					val2 = ((ColorOverLifetimeModule)(ref colorOverLifetime)).get_color();
					if (((MinMaxGradient)(ref val2)).get_colorMax().a == 0f)
					{
						goto IL_2b53;
					}
				}
			}
		}
		g6 = new global::g(global::g.a.e);
		global::g obj69 = g6;
		colorOverLifetime = component.get_colorOverLifetime();
		val2 = ((ColorOverLifetimeModule)(ref colorOverLifetime)).get_color();
		obj69.d(((MinMaxGradient)(ref val2)).get_colorMax().r);
		global::g obj70 = g6;
		colorOverLifetime = component.get_colorOverLifetime();
		val2 = ((ColorOverLifetimeModule)(ref colorOverLifetime)).get_color();
		obj70.d(((MinMaxGradient)(ref val2)).get_colorMax().g);
		global::g obj71 = g6;
		colorOverLifetime = component.get_colorOverLifetime();
		val2 = ((ColorOverLifetimeModule)(ref colorOverLifetime)).get_color();
		obj71.d(((MinMaxGradient)(ref val2)).get_colorMax().b);
		global::g obj72 = g6;
		colorOverLifetime = component.get_colorOverLifetime();
		val2 = ((ColorOverLifetimeModule)(ref colorOverLifetime)).get_color();
		obj72.d(((MinMaxGradient)(ref val2)).get_colorMax().a);
		g7.d("constantMax", g6);
		goto IL_2b53;
		IL_36f1:
		rotationOverLifetime = component.get_rotationOverLifetime();
		MinMaxCurve a_29 = ((RotationOverLifetimeModule)(ref rotationOverLifetime)).get_z();
		global::g a_30 = g7;
		rotationOverLifetime = component.get_rotationOverLifetime();
		val = ((RotationOverLifetimeModule)(ref rotationOverLifetime)).get_z();
		a(a_29, a_30, "gradient", "angularVelocitys", 0, ((MinMaxCurve)(ref val)).get_curveMultiplier() * 180f / (float)Math.PI, 1f);
		rotationOverLifetime = component.get_rotationOverLifetime();
		MinMaxCurve a_31 = ((RotationOverLifetimeModule)(ref rotationOverLifetime)).get_x();
		global::g a_32 = g7;
		rotationOverLifetime = component.get_rotationOverLifetime();
		val = ((RotationOverLifetimeModule)(ref rotationOverLifetime)).get_x();
		a(a_31, a_32, "gradientX", "angularVelocitys", 0, ((MinMaxCurve)(ref val)).get_curveMultiplier() * 180f / (float)Math.PI, 1f);
		rotationOverLifetime = component.get_rotationOverLifetime();
		MinMaxCurve a_33 = ((RotationOverLifetimeModule)(ref rotationOverLifetime)).get_y();
		global::g a_34 = g7;
		rotationOverLifetime = component.get_rotationOverLifetime();
		val = ((RotationOverLifetimeModule)(ref rotationOverLifetime)).get_y();
		a(a_33, a_34, "gradientY", "angularVelocitys", 0, ((MinMaxCurve)(ref val)).get_curveMultiplier() * 180f / (float)Math.PI, -1f);
		rotationOverLifetime = component.get_rotationOverLifetime();
		MinMaxCurve a_35 = ((RotationOverLifetimeModule)(ref rotationOverLifetime)).get_z();
		global::g a_36 = g7;
		rotationOverLifetime = component.get_rotationOverLifetime();
		val = ((RotationOverLifetimeModule)(ref rotationOverLifetime)).get_z();
		a(a_35, a_36, "gradientZ", "angularVelocitys", 0, ((MinMaxCurve)(ref val)).get_curveMultiplier() * 180f / (float)Math.PI, -1f);
		rotationOverLifetime = component.get_rotationOverLifetime();
		MinMaxCurve a_37 = ((RotationOverLifetimeModule)(ref rotationOverLifetime)).get_z();
		global::g a_38 = g7;
		rotationOverLifetime = component.get_rotationOverLifetime();
		val = ((RotationOverLifetimeModule)(ref rotationOverLifetime)).get_z();
		a(a_37, a_38, "gradientMin", "angularVelocitys", -1, ((MinMaxCurve)(ref val)).get_curveMultiplier() * 180f / (float)Math.PI, 1f);
		rotationOverLifetime = component.get_rotationOverLifetime();
		MinMaxCurve a_39 = ((RotationOverLifetimeModule)(ref rotationOverLifetime)).get_z();
		global::g a_40 = g7;
		rotationOverLifetime = component.get_rotationOverLifetime();
		val = ((RotationOverLifetimeModule)(ref rotationOverLifetime)).get_z();
		a(a_39, a_40, "gradientMax", "angularVelocitys", 1, ((MinMaxCurve)(ref val)).get_curveMultiplier() * 180f / (float)Math.PI, 1f);
		rotationOverLifetime = component.get_rotationOverLifetime();
		MinMaxCurve a_41 = ((RotationOverLifetimeModule)(ref rotationOverLifetime)).get_z();
		global::g a_42 = g7;
		rotationOverLifetime = component.get_rotationOverLifetime();
		val = ((RotationOverLifetimeModule)(ref rotationOverLifetime)).get_x();
		a(a_41, a_42, "gradientXMin", "angularVelocitys", -1, ((MinMaxCurve)(ref val)).get_curveMultiplier() * 180f / (float)Math.PI, 1f);
		rotationOverLifetime = component.get_rotationOverLifetime();
		MinMaxCurve a_43 = ((RotationOverLifetimeModule)(ref rotationOverLifetime)).get_z();
		global::g a_44 = g7;
		rotationOverLifetime = component.get_rotationOverLifetime();
		val = ((RotationOverLifetimeModule)(ref rotationOverLifetime)).get_x();
		a(a_43, a_44, "gradientXMax", "angularVelocitys", 1, ((MinMaxCurve)(ref val)).get_curveMultiplier() * 180f / (float)Math.PI, 1f);
		rotationOverLifetime = component.get_rotationOverLifetime();
		MinMaxCurve a_45 = ((RotationOverLifetimeModule)(ref rotationOverLifetime)).get_z();
		global::g a_46 = g7;
		rotationOverLifetime = component.get_rotationOverLifetime();
		val = ((RotationOverLifetimeModule)(ref rotationOverLifetime)).get_y();
		a(a_45, a_46, "gradientYMin", "angularVelocitys", -1, ((MinMaxCurve)(ref val)).get_curveMultiplier() * 180f / (float)Math.PI, 1f);
		rotationOverLifetime = component.get_rotationOverLifetime();
		MinMaxCurve a_47 = ((RotationOverLifetimeModule)(ref rotationOverLifetime)).get_z();
		global::g a_48 = g7;
		rotationOverLifetime = component.get_rotationOverLifetime();
		val = ((RotationOverLifetimeModule)(ref rotationOverLifetime)).get_y();
		a(a_47, a_48, "gradientYMax", "angularVelocitys", 1, ((MinMaxCurve)(ref val)).get_curveMultiplier() * 180f / (float)Math.PI, 1f);
		rotationOverLifetime = component.get_rotationOverLifetime();
		MinMaxCurve a_49 = ((RotationOverLifetimeModule)(ref rotationOverLifetime)).get_z();
		global::g a_50 = g7;
		rotationOverLifetime = component.get_rotationOverLifetime();
		val = ((RotationOverLifetimeModule)(ref rotationOverLifetime)).get_z();
		a(a_49, a_50, "gradientZMin", "angularVelocitys", -1, ((MinMaxCurve)(ref val)).get_curveMultiplier() * 180f / (float)Math.PI, 1f);
		rotationOverLifetime = component.get_rotationOverLifetime();
		MinMaxCurve a_51 = ((RotationOverLifetimeModule)(ref rotationOverLifetime)).get_z();
		global::g a_52 = g7;
		rotationOverLifetime = component.get_rotationOverLifetime();
		val = ((RotationOverLifetimeModule)(ref rotationOverLifetime)).get_z();
		a(a_51, a_52, "gradientZMax", "angularVelocitys", 1, ((MinMaxCurve)(ref val)).get_curveMultiplier() * 180f / (float)Math.PI, 1f);
		global::g g18;
		if (g2.h.Count != 0)
		{
			g18.d("bases", g2);
		}
		if (g7.h.Count != 0)
		{
			g18.d("angularVelocity", g7);
		}
		goto IL_3aad;
		IL_08bd:
		main = component.get_main();
		val = ((MainModule)(ref main)).get_startSizeX();
		if (((MinMaxCurve)(ref val)).get_constantMin() == 0f)
		{
			main = component.get_main();
			val = ((MainModule)(ref main)).get_startSizeY();
			if (((MinMaxCurve)(ref val)).get_constantMin() == 0f)
			{
				main = component.get_main();
				val = ((MainModule)(ref main)).get_startSizeZ();
				if (((MinMaxCurve)(ref val)).get_constantMin() == 0f)
				{
					goto IL_0988;
				}
			}
		}
		g6 = new global::g(global::g.a.e);
		global::g obj73 = g6;
		main = component.get_main();
		val = ((MainModule)(ref main)).get_startSizeX();
		obj73.d(((MinMaxCurve)(ref val)).get_constantMin());
		global::g obj74 = g6;
		main = component.get_main();
		val = ((MainModule)(ref main)).get_startSizeY();
		obj74.d(((MinMaxCurve)(ref val)).get_constantMin());
		global::g obj75 = g6;
		main = component.get_main();
		val = ((MainModule)(ref main)).get_startSizeZ();
		obj75.d(((MinMaxCurve)(ref val)).get_constantMin());
		g3.d("startSizeConstantMinSeparate", g6);
		goto IL_0988;
		IL_2f84:
		sizeOverLifetime = component.get_sizeOverLifetime();
		val = ((SizeOverLifetimeModule)(ref sizeOverLifetime)).get_x();
		if (((MinMaxCurve)(ref val)).get_constantMax() == 0f)
		{
			sizeOverLifetime = component.get_sizeOverLifetime();
			val = ((SizeOverLifetimeModule)(ref sizeOverLifetime)).get_y();
			if (((MinMaxCurve)(ref val)).get_constantMax() == 0f)
			{
				sizeOverLifetime = component.get_sizeOverLifetime();
				val = ((SizeOverLifetimeModule)(ref sizeOverLifetime)).get_z();
				if (((MinMaxCurve)(ref val)).get_constantMax() == 0f)
				{
					goto IL_3054;
				}
			}
		}
		g12 = new global::g(global::g.a.e);
		global::g obj76 = g12;
		sizeOverLifetime = component.get_sizeOverLifetime();
		val = ((SizeOverLifetimeModule)(ref sizeOverLifetime)).get_x();
		obj76.d(((MinMaxCurve)(ref val)).get_constantMax());
		global::g obj77 = g12;
		sizeOverLifetime = component.get_sizeOverLifetime();
		val = ((SizeOverLifetimeModule)(ref sizeOverLifetime)).get_y();
		obj77.d(((MinMaxCurve)(ref val)).get_constantMax());
		global::g obj78 = g12;
		sizeOverLifetime = component.get_sizeOverLifetime();
		val = ((SizeOverLifetimeModule)(ref sizeOverLifetime)).get_z();
		obj78.d(((MinMaxCurve)(ref val)).get_constantMax());
		g7.d("constantMaxSeparate", g12);
		goto IL_3054;
		IL_0d1e:
		main = component.get_main();
		val = ((MainModule)(ref main)).get_startRotationX();
		if (((MinMaxCurve)(ref val)).get_constantMin() == 0f)
		{
			main = component.get_main();
			val = ((MainModule)(ref main)).get_startRotationY();
			if (((MinMaxCurve)(ref val)).get_constantMin() == 0f)
			{
				main = component.get_main();
				val = ((MainModule)(ref main)).get_startRotationZ();
				if (((MinMaxCurve)(ref val)).get_constantMin() == 0f)
				{
					goto IL_0df5;
				}
			}
		}
		g6 = new global::g(global::g.a.e);
		global::g obj79 = g6;
		main = component.get_main();
		val = ((MainModule)(ref main)).get_startRotationX();
		obj79.d(((MinMaxCurve)(ref val)).get_constantMin());
		global::g obj80 = g6;
		main = component.get_main();
		val = ((MainModule)(ref main)).get_startRotationY();
		obj80.d(-1f * ((MinMaxCurve)(ref val)).get_constantMin());
		global::g obj81 = g6;
		main = component.get_main();
		val = ((MainModule)(ref main)).get_startRotationZ();
		obj81.d(-1f * ((MinMaxCurve)(ref val)).get_constantMin());
		g3.d("startRotationConstantMinSeparate", g6);
		goto IL_0df5;
		IL_3212:
		SizeBySpeedModule sizeBySpeed = component.get_sizeBySpeed();
		if (((SizeBySpeedModule)(ref sizeBySpeed)).get_enabled())
		{
			Debug.LogWarning((object)("LayaAir3D Warning(Code:3100) : GameObject(" + ((Object)A_0).get_name() + ") ParticleSystem Componment can't support Size_By_Speed Module !"));
		}
		rotationOverLifetime = component.get_rotationOverLifetime();
		if (((RotationOverLifetimeModule)(ref rotationOverLifetime)).get_enabled())
		{
			g18 = new global::g(global::g.a.d);
			A_1.d("rotationOverLifetime", g18);
			g2 = new global::g(global::g.a.d);
			global::g obj82 = g2;
			rotationOverLifetime = component.get_rotationOverLifetime();
			obj82.d("enable", ((RotationOverLifetimeModule)(ref rotationOverLifetime)).get_enabled());
			g7 = new global::g(global::g.a.d);
			rotationOverLifetime = component.get_rotationOverLifetime();
			val = ((RotationOverLifetimeModule)(ref rotationOverLifetime)).get_z();
			mode = ((MinMaxCurve)(ref val)).get_mode();
			if (((object)(ParticleSystemCurveMode)(ref mode)).ToString() == "Constant")
			{
				num = 0;
			}
			else
			{
				rotationOverLifetime = component.get_rotationOverLifetime();
				val = ((RotationOverLifetimeModule)(ref rotationOverLifetime)).get_z();
				mode = ((MinMaxCurve)(ref val)).get_mode();
				if (((object)(ParticleSystemCurveMode)(ref mode)).ToString() == "Curve")
				{
					num = 1;
				}
				else
				{
					rotationOverLifetime = component.get_rotationOverLifetime();
					val = ((RotationOverLifetimeModule)(ref rotationOverLifetime)).get_z();
					mode = ((MinMaxCurve)(ref val)).get_mode();
					if (((object)(ParticleSystemCurveMode)(ref mode)).ToString() == "TwoConstants")
					{
						num = 2;
					}
					else
					{
						rotationOverLifetime = component.get_rotationOverLifetime();
						val = ((RotationOverLifetimeModule)(ref rotationOverLifetime)).get_z();
						mode = ((MinMaxCurve)(ref val)).get_mode();
						if (((object)(ParticleSystemCurveMode)(ref mode)).ToString() == "TwoCurves")
						{
							num = 3;
						}
					}
				}
			}
			g7.d("type", num);
			rotationOverLifetime = component.get_rotationOverLifetime();
			if (((RotationOverLifetimeModule)(ref rotationOverLifetime)).get_separateAxes())
			{
				global::g obj83 = g7;
				rotationOverLifetime = component.get_rotationOverLifetime();
				obj83.d("separateAxes", ((RotationOverLifetimeModule)(ref rotationOverLifetime)).get_separateAxes());
			}
			rotationOverLifetime = component.get_rotationOverLifetime();
			val = ((RotationOverLifetimeModule)(ref rotationOverLifetime)).get_z();
			if (((MinMaxCurve)(ref val)).get_constant() != (float)Math.PI / 4f)
			{
				global::g obj84 = g7;
				rotationOverLifetime = component.get_rotationOverLifetime();
				val = ((RotationOverLifetimeModule)(ref rotationOverLifetime)).get_z();
				obj84.d("constant", ((MinMaxCurve)(ref val)).get_constant());
			}
			rotationOverLifetime = component.get_rotationOverLifetime();
			val = ((RotationOverLifetimeModule)(ref rotationOverLifetime)).get_z();
			if (((MinMaxCurve)(ref val)).get_constantMin() != 0f)
			{
				global::g obj85 = g7;
				rotationOverLifetime = component.get_rotationOverLifetime();
				val = ((RotationOverLifetimeModule)(ref rotationOverLifetime)).get_z();
				obj85.d("constantMin", ((MinMaxCurve)(ref val)).get_constantMin());
			}
			rotationOverLifetime = component.get_rotationOverLifetime();
			val = ((RotationOverLifetimeModule)(ref rotationOverLifetime)).get_z();
			if (((MinMaxCurve)(ref val)).get_constantMax() != (float)Math.PI / 4f)
			{
				global::g obj86 = g7;
				rotationOverLifetime = component.get_rotationOverLifetime();
				val = ((RotationOverLifetimeModule)(ref rotationOverLifetime)).get_z();
				obj86.d("constantMax", ((MinMaxCurve)(ref val)).get_constantMax());
			}
			rotationOverLifetime = component.get_rotationOverLifetime();
			val = ((RotationOverLifetimeModule)(ref rotationOverLifetime)).get_x();
			if (((MinMaxCurve)(ref val)).get_constant() == 0f)
			{
				rotationOverLifetime = component.get_rotationOverLifetime();
				val = ((RotationOverLifetimeModule)(ref rotationOverLifetime)).get_y();
				if (((MinMaxCurve)(ref val)).get_constant() == 0f)
				{
					rotationOverLifetime = component.get_rotationOverLifetime();
					val = ((RotationOverLifetimeModule)(ref rotationOverLifetime)).get_z();
					if (((MinMaxCurve)(ref val)).get_constant() == (float)Math.PI / 4f)
					{
						goto IL_3551;
					}
				}
			}
			g12 = new global::g(global::g.a.e);
			global::g obj87 = g12;
			rotationOverLifetime = component.get_rotationOverLifetime();
			val = ((RotationOverLifetimeModule)(ref rotationOverLifetime)).get_x();
			obj87.d(((MinMaxCurve)(ref val)).get_constant());
			global::g obj88 = g12;
			rotationOverLifetime = component.get_rotationOverLifetime();
			val = ((RotationOverLifetimeModule)(ref rotationOverLifetime)).get_y();
			obj88.d(-1f * ((MinMaxCurve)(ref val)).get_constant());
			global::g obj89 = g12;
			rotationOverLifetime = component.get_rotationOverLifetime();
			val = ((RotationOverLifetimeModule)(ref rotationOverLifetime)).get_z();
			obj89.d(-1f * ((MinMaxCurve)(ref val)).get_constant());
			g7.d("constantSeparate", g12);
			goto IL_3551;
		}
		goto IL_3aad;
		IL_418f:
		LightsModule lights = component.get_lights();
		if (((LightsModule)(ref lights)).get_enabled())
		{
			Debug.LogWarning((object)("LayaAir3D Warning(Code:3190) : GameObject(" + ((Object)A_0).get_name() + ") ParticleSystem Componment can't support Lights Module !"));
		}
		TrailModule trails = component.get_trails();
		if (((TrailModule)(ref trails)).get_enabled())
		{
			Debug.LogWarning((object)("LayaAir3D Warning(Code:3200) : GameObject(" + ((Object)A_0).get_name() + ") ParticleSystem Componment can't support Trails Module !"));
		}
		CustomDataModule customData = component.get_customData();
		if (((CustomDataModule)(ref customData)).get_enabled())
		{
			Debug.LogWarning((object)("LayaAir3D Warning(Code:3014) : GameObject(" + ((Object)A_0).get_name() + ") ParticleSystem Componment can't support CustomData Module !"));
		}
		global::g g19 = new global::g(global::g.a.d);
		A_1.d("renderer", g19);
		g2 = new global::g(global::g.a.d);
		global::g g20 = new global::g(global::g.a.d);
		ParticleSystemRenderMode renderMode = component2.get_renderMode();
		int num4;
		if (((object)(ParticleSystemRenderMode)(ref renderMode)).ToString() == "Billboard")
		{
			num4 = 0;
		}
		else
		{
			renderMode = component2.get_renderMode();
			if (((object)(ParticleSystemRenderMode)(ref renderMode)).ToString() == "Stretch")
			{
				num4 = 1;
			}
			else
			{
				renderMode = component2.get_renderMode();
				if (((object)(ParticleSystemRenderMode)(ref renderMode)).ToString() == "HorizontalBillboard")
				{
					num4 = 2;
				}
				else
				{
					renderMode = component2.get_renderMode();
					if (((object)(ParticleSystemRenderMode)(ref renderMode)).ToString() == "VerticalBillboard")
					{
						num4 = 3;
					}
					else
					{
						renderMode = component2.get_renderMode();
						num4 = ((((object)(ParticleSystemRenderMode)(ref renderMode)).ToString() == "Mesh") ? 4 : 0);
					}
				}
			}
		}
		if (num4 != 0)
		{
			g2.d("renderMode", num4);
		}
		if (component2.get_cameraVelocityScale() != 0f)
		{
			g2.d("stretchedBillboardCameraSpeedScale", component2.get_cameraVelocityScale());
		}
		if (component2.get_velocityScale() != 0f)
		{
			g2.d("stretchedBillboardSpeedScale", component2.get_velocityScale());
		}
		if (component2.get_lengthScale() != 2f)
		{
			g2.d("stretchedBillboardLengthScale", component2.get_lengthScale());
		}
		if (component2.get_sortingFudge() != 0f)
		{
			g2.d("sortingFudge", component2.get_sortingFudge());
		}
		Material sharedMaterial = A_0.GetComponent<Renderer>().get_sharedMaterial();
		new global::g(global::g.a.e);
		if ((Object)(object)sharedMaterial != (Object)null)
		{
			string text = a(AssetDatabase.GetAssetPath(((Object)sharedMaterial).GetInstanceID()).Split('.')[0], A_1: false) + ".lmat";
			string a_53 = q + "/" + text;
			new global::g(global::g.a.d);
			g20.a("material", text);
			string name = ((Object)sharedMaterial.get_shader()).get_name();
			if (name != "LayaAir3D/Particle/ShurikenParticle")
			{
				Debug.LogWarning((object)("LayaAir3D Warning(Code:2002) : " + ((Object)A_0).get_name() + " dose's match " + name + " Shader, Must use ShurikenParticle Shader！"));
			}
			a(sharedMaterial, a_53, "ShurikenParticle");
		}
		if (num4 == 4)
		{
			Mesh mesh = A_0.GetComponent<ParticleSystemRenderer>().get_mesh();
			if ((Object)(object)mesh != (Object)null)
			{
				string str = a(((Object)mesh).get_name(), A_1: true);
				string text2 = a(AssetDatabase.GetAssetPath(((Object)mesh).GetInstanceID()).Split('.')[0], A_1: false) + "-" + str + ".lm";
				string text3 = q + "/" + text2;
				g20.a("mesh", text2);
				if (!File.Exists(text3))
				{
					a(mesh, text3, global::p.h);
				}
			}
			else
			{
				g20.a("mesh", "");
				Debug.LogWarning((object)("LayaAir3D Warning(Code:1001) : " + ((Object)A_0).get_name() + "'s MeshFilter Component Mesh data can't be null!"));
			}
		}
		if (g2.h.Count != 0)
		{
			g19.d("bases", g2);
		}
		if (g20.h.Count != 0)
		{
			g19.d("resources", g20);
		}
		return;
		IL_115e:
		main = component.get_main();
		val2 = ((MainModule)(ref main)).get_startColor();
		if (((MinMaxGradient)(ref val2)).get_colorMin().r == 0f)
		{
			main = component.get_main();
			val2 = ((MainModule)(ref main)).get_startColor();
			if (((MinMaxGradient)(ref val2)).get_colorMin().g == 0f)
			{
				main = component.get_main();
				val2 = ((MainModule)(ref main)).get_startColor();
				if (((MinMaxGradient)(ref val2)).get_colorMin().b == 0f)
				{
					main = component.get_main();
					val2 = ((MainModule)(ref main)).get_startColor();
					if (((MinMaxGradient)(ref val2)).get_colorMin().a == 0f)
					{
						goto IL_1291;
					}
				}
			}
		}
		g6 = new global::g(global::g.a.e);
		global::g obj90 = g6;
		main = component.get_main();
		val2 = ((MainModule)(ref main)).get_startColor();
		obj90.d(((MinMaxGradient)(ref val2)).get_colorMin().r);
		global::g obj91 = g6;
		main = component.get_main();
		val2 = ((MainModule)(ref main)).get_startColor();
		obj91.d(((MinMaxGradient)(ref val2)).get_colorMin().g);
		global::g obj92 = g6;
		main = component.get_main();
		val2 = ((MainModule)(ref main)).get_startColor();
		obj92.d(((MinMaxGradient)(ref val2)).get_colorMin().b);
		global::g obj93 = g6;
		main = component.get_main();
		val2 = ((MainModule)(ref main)).get_startColor();
		obj93.d(((MinMaxGradient)(ref val2)).get_colorMin().a);
		g5.d("startColorConstantMin", g6);
		goto IL_1291;
		IL_0a53:
		main = component.get_main();
		if (((MainModule)(ref main)).get_startRotation3D())
		{
			global::g obj94 = g2;
			main = component.get_main();
			obj94.d("threeDStartRotation", ((MainModule)(ref main)).get_startRotation3D());
		}
		main = component.get_main();
		val = ((MainModule)(ref main)).get_startRotationX();
		mode = ((MinMaxCurve)(ref val)).get_mode();
		if (((object)(ParticleSystemCurveMode)(ref mode)).ToString() == "Constant")
		{
			num = 0;
		}
		else
		{
			main = component.get_main();
			val = ((MainModule)(ref main)).get_startRotationX();
			mode = ((MinMaxCurve)(ref val)).get_mode();
			if (((object)(ParticleSystemCurveMode)(ref mode)).ToString() == "Curve")
			{
				num = 1;
			}
			else
			{
				main = component.get_main();
				val = ((MainModule)(ref main)).get_startRotationX();
				mode = ((MinMaxCurve)(ref val)).get_mode();
				if (((object)(ParticleSystemCurveMode)(ref mode)).ToString() == "TwoConstants")
				{
					num = 2;
				}
				else
				{
					main = component.get_main();
					val = ((MainModule)(ref main)).get_startRotationX();
					mode = ((MinMaxCurve)(ref val)).get_mode();
					if (((object)(ParticleSystemCurveMode)(ref mode)).ToString() == "TwoCurves")
					{
						num = 3;
					}
				}
			}
		}
		if (num != 0)
		{
			g2.d("startRotationType", num);
		}
		main = component.get_main();
		val = ((MainModule)(ref main)).get_startRotation();
		if (((MinMaxCurve)(ref val)).get_constant() != 0f)
		{
			global::g obj95 = g2;
			main = component.get_main();
			val = ((MainModule)(ref main)).get_startRotation();
			obj95.d("startRotationConstant", ((MinMaxCurve)(ref val)).get_constant());
		}
		main = component.get_main();
		val = ((MainModule)(ref main)).get_startRotation();
		if (((MinMaxCurve)(ref val)).get_constantMin() != 0f)
		{
			global::g obj96 = g2;
			main = component.get_main();
			val = ((MainModule)(ref main)).get_startRotation();
			obj96.d("startRotationConstantMin", ((MinMaxCurve)(ref val)).get_constantMin());
		}
		main = component.get_main();
		val = ((MainModule)(ref main)).get_startRotation();
		if (((MinMaxCurve)(ref val)).get_constantMax() != 0f)
		{
			global::g obj97 = g2;
			main = component.get_main();
			val = ((MainModule)(ref main)).get_startRotation();
			obj97.d("startRotationConstantMax", ((MinMaxCurve)(ref val)).get_constantMax());
		}
		main = component.get_main();
		val = ((MainModule)(ref main)).get_startRotationX();
		if (((MinMaxCurve)(ref val)).get_constant() == 0f)
		{
			main = component.get_main();
			val = ((MainModule)(ref main)).get_startRotationY();
			if (-1f * ((MinMaxCurve)(ref val)).get_constant() == 0f)
			{
				main = component.get_main();
				val = ((MainModule)(ref main)).get_startRotationZ();
				if (-1f * ((MinMaxCurve)(ref val)).get_constant() == 0f)
				{
					goto IL_0d1e;
				}
			}
		}
		g6 = new global::g(global::g.a.e);
		global::g obj98 = g6;
		main = component.get_main();
		val = ((MainModule)(ref main)).get_startRotationX();
		obj98.d(((MinMaxCurve)(ref val)).get_constant());
		global::g obj99 = g6;
		main = component.get_main();
		val = ((MainModule)(ref main)).get_startRotationY();
		obj99.d(-1f * ((MinMaxCurve)(ref val)).get_constant());
		global::g obj100 = g6;
		main = component.get_main();
		val = ((MainModule)(ref main)).get_startRotationZ();
		obj100.d(-1f * ((MinMaxCurve)(ref val)).get_constant());
		g3.d("startRotationConstantSeparate", g6);
		goto IL_0d1e;
		IL_3621:
		rotationOverLifetime = component.get_rotationOverLifetime();
		val = ((RotationOverLifetimeModule)(ref rotationOverLifetime)).get_x();
		if (((MinMaxCurve)(ref val)).get_constantMax() == 0f)
		{
			rotationOverLifetime = component.get_rotationOverLifetime();
			val = ((RotationOverLifetimeModule)(ref rotationOverLifetime)).get_y();
			if (((MinMaxCurve)(ref val)).get_constantMax() == 0f)
			{
				rotationOverLifetime = component.get_rotationOverLifetime();
				val = ((RotationOverLifetimeModule)(ref rotationOverLifetime)).get_z();
				if (((MinMaxCurve)(ref val)).get_constantMax() == (float)Math.PI / 4f)
				{
					goto IL_36f1;
				}
			}
		}
		g12 = new global::g(global::g.a.e);
		global::g obj101 = g12;
		rotationOverLifetime = component.get_rotationOverLifetime();
		val = ((RotationOverLifetimeModule)(ref rotationOverLifetime)).get_x();
		obj101.d(((MinMaxCurve)(ref val)).get_constantMax());
		global::g obj102 = g12;
		rotationOverLifetime = component.get_rotationOverLifetime();
		val = ((RotationOverLifetimeModule)(ref rotationOverLifetime)).get_y();
		obj102.d(((MinMaxCurve)(ref val)).get_constantMax());
		global::g obj103 = g12;
		rotationOverLifetime = component.get_rotationOverLifetime();
		val = ((RotationOverLifetimeModule)(ref rotationOverLifetime)).get_z();
		obj103.d(((MinMaxCurve)(ref val)).get_constantMax());
		g7.d("constantMaxSeparate", g12);
		goto IL_36f1;
		IL_0df5:
		main = component.get_main();
		val = ((MainModule)(ref main)).get_startRotationX();
		if (((MinMaxCurve)(ref val)).get_constantMax() == 0f)
		{
			main = component.get_main();
			val = ((MainModule)(ref main)).get_startRotationY();
			if (((MinMaxCurve)(ref val)).get_constantMax() == 0f)
			{
				main = component.get_main();
				val = ((MainModule)(ref main)).get_startRotationZ();
				if (((MinMaxCurve)(ref val)).get_constantMax() == 0f)
				{
					goto IL_0ecc;
				}
			}
		}
		g6 = new global::g(global::g.a.e);
		global::g obj104 = g6;
		main = component.get_main();
		val = ((MainModule)(ref main)).get_startRotationX();
		obj104.d(((MinMaxCurve)(ref val)).get_constantMax());
		global::g obj105 = g6;
		main = component.get_main();
		val = ((MainModule)(ref main)).get_startRotationY();
		obj105.d(-1f * ((MinMaxCurve)(ref val)).get_constantMax());
		global::g obj106 = g6;
		main = component.get_main();
		val = ((MainModule)(ref main)).get_startRotationZ();
		obj106.d(-1f * ((MinMaxCurve)(ref val)).get_constantMax());
		g3.d("startRotationConstantMaxSeparate", g6);
		goto IL_0ecc;
		IL_28c9:
		colorOverLifetime = component.get_colorOverLifetime();
		val2 = ((ColorOverLifetimeModule)(ref colorOverLifetime)).get_color();
		a(((MinMaxGradient)(ref val2)).get_gradient(), g7, "gradient");
		colorOverLifetime = component.get_colorOverLifetime();
		val2 = ((ColorOverLifetimeModule)(ref colorOverLifetime)).get_color();
		if (((MinMaxGradient)(ref val2)).get_colorMin().r == 0f)
		{
			colorOverLifetime = component.get_colorOverLifetime();
			val2 = ((ColorOverLifetimeModule)(ref colorOverLifetime)).get_color();
			if (((MinMaxGradient)(ref val2)).get_colorMin().g == 0f)
			{
				colorOverLifetime = component.get_colorOverLifetime();
				val2 = ((ColorOverLifetimeModule)(ref colorOverLifetime)).get_color();
				if (((MinMaxGradient)(ref val2)).get_colorMin().b == 0f)
				{
					colorOverLifetime = component.get_colorOverLifetime();
					val2 = ((ColorOverLifetimeModule)(ref colorOverLifetime)).get_color();
					if (((MinMaxGradient)(ref val2)).get_colorMin().a == 0f)
					{
						goto IL_2a20;
					}
				}
			}
		}
		g6 = new global::g(global::g.a.e);
		global::g obj107 = g6;
		colorOverLifetime = component.get_colorOverLifetime();
		val2 = ((ColorOverLifetimeModule)(ref colorOverLifetime)).get_color();
		obj107.d(((MinMaxGradient)(ref val2)).get_colorMin().r);
		global::g obj108 = g6;
		colorOverLifetime = component.get_colorOverLifetime();
		val2 = ((ColorOverLifetimeModule)(ref colorOverLifetime)).get_color();
		obj108.d(((MinMaxGradient)(ref val2)).get_colorMin().g);
		global::g obj109 = g6;
		colorOverLifetime = component.get_colorOverLifetime();
		val2 = ((ColorOverLifetimeModule)(ref colorOverLifetime)).get_color();
		obj109.d(((MinMaxGradient)(ref val2)).get_colorMin().b);
		global::g obj110 = g6;
		colorOverLifetime = component.get_colorOverLifetime();
		val2 = ((ColorOverLifetimeModule)(ref colorOverLifetime)).get_color();
		obj110.d(((MinMaxGradient)(ref val2)).get_colorMin().a);
		g7.d("constantMin", g6);
		goto IL_2a20;
		IL_0988:
		main = component.get_main();
		val = ((MainModule)(ref main)).get_startSizeX();
		if (((MinMaxCurve)(ref val)).get_constantMax() == 1f)
		{
			main = component.get_main();
			val = ((MainModule)(ref main)).get_startSizeY();
			if (((MinMaxCurve)(ref val)).get_constantMax() == 1f)
			{
				main = component.get_main();
				val = ((MainModule)(ref main)).get_startSizeZ();
				if (((MinMaxCurve)(ref val)).get_constantMax() == 1f)
				{
					goto IL_0a53;
				}
			}
		}
		g6 = new global::g(global::g.a.e);
		global::g obj111 = g6;
		main = component.get_main();
		val = ((MainModule)(ref main)).get_startSizeX();
		obj111.d(((MinMaxCurve)(ref val)).get_constantMax());
		global::g obj112 = g6;
		main = component.get_main();
		val = ((MainModule)(ref main)).get_startSizeY();
		obj112.d(((MinMaxCurve)(ref val)).get_constantMax());
		global::g obj113 = g6;
		main = component.get_main();
		val = ((MainModule)(ref main)).get_startSizeZ();
		obj113.d(((MinMaxCurve)(ref val)).get_constantMax());
		g3.d("startSizeConstantMaxSeparate", g6);
		goto IL_0a53;
		IL_1291:
		main = component.get_main();
		val2 = ((MainModule)(ref main)).get_startColor();
		if (((MinMaxGradient)(ref val2)).get_colorMax().r == 1f)
		{
			main = component.get_main();
			val2 = ((MainModule)(ref main)).get_startColor();
			if (((MinMaxGradient)(ref val2)).get_colorMax().g == 1f)
			{
				main = component.get_main();
				val2 = ((MainModule)(ref main)).get_startColor();
				if (((MinMaxGradient)(ref val2)).get_colorMax().b == 1f)
				{
					main = component.get_main();
					val2 = ((MainModule)(ref main)).get_startColor();
					if (((MinMaxGradient)(ref val2)).get_colorMax().a == 1f)
					{
						goto IL_13c4;
					}
				}
			}
		}
		g6 = new global::g(global::g.a.e);
		global::g obj114 = g6;
		main = component.get_main();
		val2 = ((MainModule)(ref main)).get_startColor();
		obj114.d(((MinMaxGradient)(ref val2)).get_colorMax().r);
		global::g obj115 = g6;
		main = component.get_main();
		val2 = ((MainModule)(ref main)).get_startColor();
		obj115.d(((MinMaxGradient)(ref val2)).get_colorMax().g);
		global::g obj116 = g6;
		main = component.get_main();
		val2 = ((MainModule)(ref main)).get_startColor();
		obj116.d(((MinMaxGradient)(ref val2)).get_colorMax().b);
		global::g obj117 = g6;
		main = component.get_main();
		val2 = ((MainModule)(ref main)).get_startColor();
		obj117.d(((MinMaxGradient)(ref val2)).get_colorMax().a);
		g5.d("startColorConstantMax", g6);
		goto IL_13c4;
		IL_0ecc:
		main = component.get_main();
		if (((MainModule)(ref main)).get_flipRotation() != 0f)
		{
			global::g obj118 = g2;
			main = component.get_main();
			obj118.d("randomizeRotationDirection", ((MainModule)(ref main)).get_flipRotation());
		}
		main = component.get_main();
		val2 = ((MainModule)(ref main)).get_startColor();
		mode2 = ((MinMaxGradient)(ref val2)).get_mode();
		if (((object)(ParticleSystemGradientMode)(ref mode2)).ToString() == "Color")
		{
			num = 0;
		}
		else
		{
			main = component.get_main();
			val2 = ((MainModule)(ref main)).get_startColor();
			mode2 = ((MinMaxGradient)(ref val2)).get_mode();
			if (((object)(ParticleSystemGradientMode)(ref mode2)).ToString() == "Gradient")
			{
				num = 1;
			}
			else
			{
				main = component.get_main();
				val2 = ((MainModule)(ref main)).get_startColor();
				mode2 = ((MinMaxGradient)(ref val2)).get_mode();
				if (((object)(ParticleSystemGradientMode)(ref mode2)).ToString() == "TwoColors")
				{
					num = 2;
				}
				else
				{
					main = component.get_main();
					val2 = ((MainModule)(ref main)).get_startColor();
					mode2 = ((MinMaxGradient)(ref val2)).get_mode();
					if (((object)(ParticleSystemGradientMode)(ref mode2)).ToString() == "TwoGradients")
					{
						num = 3;
					}
					else
					{
						main = component.get_main();
						val2 = ((MainModule)(ref main)).get_startColor();
						mode2 = ((MinMaxGradient)(ref val2)).get_mode();
						if (((object)(ParticleSystemGradientMode)(ref mode2)).ToString() == "RandomColor")
						{
							num = 4;
						}
					}
				}
			}
		}
		if (num != 0)
		{
			g2.d("startColorType", num);
		}
		main = component.get_main();
		val2 = ((MainModule)(ref main)).get_startColor();
		if (((MinMaxGradient)(ref val2)).get_color().r == 1f)
		{
			main = component.get_main();
			val2 = ((MainModule)(ref main)).get_startColor();
			if (((MinMaxGradient)(ref val2)).get_color().g == 1f)
			{
				main = component.get_main();
				val2 = ((MainModule)(ref main)).get_startColor();
				if (((MinMaxGradient)(ref val2)).get_color().b == 1f)
				{
					main = component.get_main();
					val2 = ((MainModule)(ref main)).get_startColor();
					if (((MinMaxGradient)(ref val2)).get_color().a == 1f)
					{
						goto IL_115e;
					}
				}
			}
		}
		g6 = new global::g(global::g.a.e);
		global::g obj119 = g6;
		main = component.get_main();
		val2 = ((MainModule)(ref main)).get_startColor();
		obj119.d(((MinMaxGradient)(ref val2)).get_color().r);
		global::g obj120 = g6;
		main = component.get_main();
		val2 = ((MainModule)(ref main)).get_startColor();
		obj120.d(((MinMaxGradient)(ref val2)).get_color().g);
		global::g obj121 = g6;
		main = component.get_main();
		val2 = ((MainModule)(ref main)).get_startColor();
		obj121.d(((MinMaxGradient)(ref val2)).get_color().b);
		global::g obj122 = g6;
		main = component.get_main();
		val2 = ((MainModule)(ref main)).get_startColor();
		obj122.d(((MinMaxGradient)(ref val2)).get_color().a);
		g5.d("startColorConstant", g6);
		goto IL_115e;
	}

	private static void g(GameObject A_0, global::g A_1)
	{
		//IL_005a: Unknown result type (might be due to invalid IL or missing references)
		//IL_006b: Unknown result type (might be due to invalid IL or missing references)
		//IL_007c: Unknown result type (might be due to invalid IL or missing references)
		//IL_008d: Unknown result type (might be due to invalid IL or missing references)
		global::g g = new global::g(global::g.a.e);
		Terrain component = A_0.GetComponent<Terrain>();
		if (global::p.k)
		{
			a(A_0, A_1, 3);
			a(A_0, A_1);
		}
		else
		{
			a(q, A_1);
		}
		if (component.get_lightmapIndex() > -1)
		{
			A_1.d("lightmapIndex", component.get_lightmapIndex());
			A_1.d("lightmapScaleOffset", g);
			g.d(component.get_lightmapScaleOffset().x);
			g.d(component.get_lightmapScaleOffset().y);
			g.d(component.get_lightmapScaleOffset().z);
			g.d(component.get_lightmapScaleOffset().w);
		}
	}

	private static void f(GameObject A_0, global::g A_1)
	{
		global::g g = new global::g(global::g.a.d);
		A_1.f(g);
		g.a("type", "PhysicsCollider");
		g.d("restitution", 0f);
		g.d("friction", 0.5f);
		g.d("rollingFriction", 0f);
		global::g a_ = new global::g(global::g.a.e);
		g.d("shapes", a_);
		g.d("isTrigger", b(A_0, a_));
	}

	private static void e(GameObject A_0, global::g A_1)
	{
		Rigidbody component = A_0.GetComponent<Rigidbody>();
		global::g g = new global::g(global::g.a.d);
		A_1.f(g);
		g.a("type", "Rigidbody3D");
		g.d("mass", component.get_mass());
		g.d("isKinematic", component.get_isKinematic());
		g.d("restitution", 0f);
		g.d("friction", 0.5f);
		g.d("rollingFriction", 0f);
		g.d("linearDamping", 0);
		g.d("angularDamping", 0);
		g.d("overrideGravity", !component.get_useGravity());
		global::g g2 = new global::g(global::g.a.e);
		g2.d(0);
		g2.d(0);
		g2.d(0);
		g.d("gravity", g2);
		global::g a_ = new global::g(global::g.a.e);
		g.d("shapes", a_);
		g.d("isTrigger", b(A_0, a_));
	}

	private static void d(GameObject A_0, global::g A_1)
	{
		//IL_003b: Unknown result type (might be due to invalid IL or missing references)
		//IL_0086: Unknown result type (might be due to invalid IL or missing references)
		//IL_008b: Unknown result type (might be due to invalid IL or missing references)
		//IL_01d3: Unknown result type (might be due to invalid IL or missing references)
		//IL_021e: Unknown result type (might be due to invalid IL or missing references)
		//IL_0223: Unknown result type (might be due to invalid IL or missing references)
		//IL_0229: Unknown result type (might be due to invalid IL or missing references)
		//IL_0262: Unknown result type (might be due to invalid IL or missing references)
		//IL_0264: Unknown result type (might be due to invalid IL or missing references)
		//IL_0269: Unknown result type (might be due to invalid IL or missing references)
		//IL_026d: Unknown result type (might be due to invalid IL or missing references)
		//IL_027b: Unknown result type (might be due to invalid IL or missing references)
		//IL_0289: Unknown result type (might be due to invalid IL or missing references)
		//IL_02ad: Unknown result type (might be due to invalid IL or missing references)
		//IL_02cf: Unknown result type (might be due to invalid IL or missing references)
		//IL_02d1: Unknown result type (might be due to invalid IL or missing references)
		//IL_02d6: Unknown result type (might be due to invalid IL or missing references)
		//IL_02da: Unknown result type (might be due to invalid IL or missing references)
		//IL_02e8: Unknown result type (might be due to invalid IL or missing references)
		//IL_02f6: Unknown result type (might be due to invalid IL or missing references)
		//IL_0315: Unknown result type (might be due to invalid IL or missing references)
		//IL_034e: Unknown result type (might be due to invalid IL or missing references)
		//IL_0350: Unknown result type (might be due to invalid IL or missing references)
		//IL_0355: Unknown result type (might be due to invalid IL or missing references)
		//IL_0359: Unknown result type (might be due to invalid IL or missing references)
		//IL_0367: Unknown result type (might be due to invalid IL or missing references)
		//IL_0375: Unknown result type (might be due to invalid IL or missing references)
		//IL_03c5: Unknown result type (might be due to invalid IL or missing references)
		//IL_03ca: Unknown result type (might be due to invalid IL or missing references)
		//IL_03d0: Unknown result type (might be due to invalid IL or missing references)
		//IL_03fa: Unknown result type (might be due to invalid IL or missing references)
		//IL_041e: Unknown result type (might be due to invalid IL or missing references)
		//IL_0431: Unknown result type (might be due to invalid IL or missing references)
		//IL_0450: Unknown result type (might be due to invalid IL or missing references)
		//IL_047a: Unknown result type (might be due to invalid IL or missing references)
		//IL_04a7: Unknown result type (might be due to invalid IL or missing references)
		//IL_04b1: Expected I4, but got Unknown
		TrailRenderer component = A_0.GetComponent<TrailRenderer>();
		A_1.d("time", component.get_time());
		A_1.d("minVertexDistance", component.get_minVertexDistance());
		A_1.d("widthMultiplier", component.get_widthMultiplier());
		if ((int)component.get_textureMode() == 0)
		{
			A_1.d("textureMode", 0);
		}
		else
		{
			A_1.d("textureMode", 1);
		}
		global::g g = new global::g(global::g.a.e);
		A_1.d("widthCurve", g);
		Keyframe[] keys = component.get_widthCurve().get_keys();
		for (int i = 0; i < keys.Length; i++)
		{
			Keyframe val = keys[i];
			global::g g2;
			if (i == 0 && ((Keyframe)(ref val)).get_time() != 0f)
			{
				g2 = new global::g(global::g.a.d);
				g2.d("time", 0);
				g2.d("inTangent", 0);
				g2.d("outTangent", 0);
				g2.d("value", ((Keyframe)(ref val)).get_value());
				g.f(g2);
			}
			g2 = new global::g(global::g.a.d);
			g2.d("time", ((Keyframe)(ref val)).get_time());
			g2.d("inTangent", ((Keyframe)(ref val)).get_inTangent());
			g2.d("outTangent", ((Keyframe)(ref val)).get_inTangent());
			g2.d("value", ((Keyframe)(ref val)).get_value());
			g.f(g2);
			if (i == keys.Length - 1 && ((Keyframe)(ref val)).get_time() != 1f)
			{
				g2 = new global::g(global::g.a.d);
				g2.d("time", 1);
				g2.d("inTangent", 0);
				g2.d("outTangent", 0);
				g2.d("value", ((Keyframe)(ref val)).get_value());
				g.f(g2);
			}
		}
		global::g g3 = new global::g(global::g.a.d);
		A_1.d("colorGradient", g3);
		Gradient colorGradient = component.get_colorGradient();
		if ((int)colorGradient.get_mode() == 0)
		{
			g3.d("mode", 0);
		}
		else
		{
			g3.d("mode", 1);
		}
		global::g g4 = new global::g(global::g.a.e);
		g3.d("colorKeys", g4);
		GradientColorKey[] colorKeys = colorGradient.get_colorKeys();
		for (int j = 0; j < colorKeys.Length; j++)
		{
			GradientColorKey val2 = colorKeys[j];
			global::g g5;
			global::g g6;
			Color color;
			if (j == 0 && val2.time != 0f)
			{
				g5 = new global::g(global::g.a.d);
				g5.d("time", 0);
				g6 = new global::g(global::g.a.e);
				g5.d("value", g6);
				color = val2.color;
				g6.d(color.r);
				g6.d(color.g);
				g6.d(color.b);
				g4.f(g5);
			}
			g5 = new global::g(global::g.a.d);
			g5.d("time", val2.time);
			g6 = new global::g(global::g.a.e);
			g5.d("value", g6);
			color = val2.color;
			g6.d(color.r);
			g6.d(color.g);
			g6.d(color.b);
			g4.f(g5);
			if (j == colorKeys.Length - 1 && val2.time != 1f)
			{
				g5 = new global::g(global::g.a.d);
				g5.d("time", 1);
				g6 = new global::g(global::g.a.e);
				g5.d("value", g6);
				color = val2.color;
				g6.d(color.r);
				g6.d(color.g);
				g6.d(color.b);
				g4.f(g5);
			}
		}
		global::g g7 = new global::g(global::g.a.e);
		g3.d("alphaKeys", g7);
		GradientAlphaKey[] alphaKeys = colorGradient.get_alphaKeys();
		for (int k = 0; k < alphaKeys.Length; k++)
		{
			GradientAlphaKey val3 = alphaKeys[k];
			global::g g8;
			if (k == 0 && val3.time != 0f)
			{
				g8 = new global::g(global::g.a.d);
				g8.d("time", 0);
				g8.d("value", val3.alpha);
				g7.f(g8);
			}
			g8 = new global::g(global::g.a.d);
			g8.d("time", val3.time);
			g8.d("value", val3.alpha);
			g7.f(g8);
			if (k == alphaKeys.Length - 1 && val3.time != 1f)
			{
				g8 = new global::g(global::g.a.d);
				g8.d("time", 1);
				g8.d("value", val3.alpha);
				g7.f(g8);
			}
		}
		A_1.d("alignment", (int)component.get_alignment());
		Material[] sharedMaterials = ((Renderer)component).get_sharedMaterials();
		global::g g9 = new global::g(global::g.a.e);
		A_1.d("materials", g9);
		foreach (Material val4 in sharedMaterials)
		{
			if (!((Object)(object)val4 == (Object)null))
			{
				string text = a(AssetDatabase.GetAssetPath(((Object)val4).GetInstanceID()).Split('.')[0], A_1: false) + ".lmat";
				string a_ = q + "/" + text;
				string name = ((Object)val4.get_shader()).get_name();
				if (name != "LayaAir3D/Trail")
				{
					Debug.LogWarning((object)("LayaAir3D Warning(Code:2003) : " + ((Object)A_0).get_name() + " dose's match " + name + "Shader, Must use Trail Shader！"));
				}
				global::g g10 = new global::g(global::g.a.d);
				g10.a("type", "Laya.TrailMaterial");
				g10.a("path", text);
				g9.f(g10);
				a(val4, a_, "Trail");
			}
		}
	}

	private static void c(GameObject A_0, global::g A_1)
	{
		//IL_002a: Unknown result type (might be due to invalid IL or missing references)
		//IL_0098: Unknown result type (might be due to invalid IL or missing references)
		//IL_009d: Unknown result type (might be due to invalid IL or missing references)
		//IL_00a0: Unknown result type (might be due to invalid IL or missing references)
		//IL_00ae: Unknown result type (might be due to invalid IL or missing references)
		//IL_00bb: Unknown result type (might be due to invalid IL or missing references)
		//IL_0105: Unknown result type (might be due to invalid IL or missing references)
		//IL_010a: Unknown result type (might be due to invalid IL or missing references)
		//IL_0259: Unknown result type (might be due to invalid IL or missing references)
		//IL_02a7: Unknown result type (might be due to invalid IL or missing references)
		//IL_02ac: Unknown result type (might be due to invalid IL or missing references)
		//IL_02b2: Unknown result type (might be due to invalid IL or missing references)
		//IL_02eb: Unknown result type (might be due to invalid IL or missing references)
		//IL_02ed: Unknown result type (might be due to invalid IL or missing references)
		//IL_02f2: Unknown result type (might be due to invalid IL or missing references)
		//IL_02f6: Unknown result type (might be due to invalid IL or missing references)
		//IL_0304: Unknown result type (might be due to invalid IL or missing references)
		//IL_0312: Unknown result type (might be due to invalid IL or missing references)
		//IL_0336: Unknown result type (might be due to invalid IL or missing references)
		//IL_0358: Unknown result type (might be due to invalid IL or missing references)
		//IL_035a: Unknown result type (might be due to invalid IL or missing references)
		//IL_035f: Unknown result type (might be due to invalid IL or missing references)
		//IL_0363: Unknown result type (might be due to invalid IL or missing references)
		//IL_0371: Unknown result type (might be due to invalid IL or missing references)
		//IL_037f: Unknown result type (might be due to invalid IL or missing references)
		//IL_039e: Unknown result type (might be due to invalid IL or missing references)
		//IL_03d7: Unknown result type (might be due to invalid IL or missing references)
		//IL_03d9: Unknown result type (might be due to invalid IL or missing references)
		//IL_03de: Unknown result type (might be due to invalid IL or missing references)
		//IL_03e2: Unknown result type (might be due to invalid IL or missing references)
		//IL_03f0: Unknown result type (might be due to invalid IL or missing references)
		//IL_03fe: Unknown result type (might be due to invalid IL or missing references)
		//IL_044f: Unknown result type (might be due to invalid IL or missing references)
		//IL_0454: Unknown result type (might be due to invalid IL or missing references)
		//IL_045a: Unknown result type (might be due to invalid IL or missing references)
		//IL_0484: Unknown result type (might be due to invalid IL or missing references)
		//IL_04a8: Unknown result type (might be due to invalid IL or missing references)
		//IL_04bb: Unknown result type (might be due to invalid IL or missing references)
		//IL_04da: Unknown result type (might be due to invalid IL or missing references)
		//IL_0504: Unknown result type (might be due to invalid IL or missing references)
		LineRenderer component = A_0.GetComponent<LineRenderer>();
		A_1.d("useWorldSpace", component.get_useWorldSpace());
		A_1.d("widthMultiplier", component.get_widthMultiplier());
		if ((int)component.get_textureMode() == 0)
		{
			A_1.d("textureMode", 0);
		}
		else
		{
			A_1.d("textureMode", 1);
		}
		global::g g = new global::g(global::g.a.d);
		A_1.d("positions", g);
		g.d("size", component.get_positionCount());
		global::g g2 = new global::g(global::g.a.e);
		g.d("values", g2);
		for (int i = 0; i < component.get_positionCount(); i++)
		{
			global::g g3 = new global::g(global::g.a.e);
			g2.f(g3);
			Vector3 position = component.GetPosition(i);
			g3.d(0f - position.x);
			g3.d(position.y);
			g3.d(position.z);
		}
		global::g g4 = new global::g(global::g.a.e);
		A_1.d("widthCurve", g4);
		Keyframe[] keys = component.get_widthCurve().get_keys();
		for (int j = 0; j < keys.Length; j++)
		{
			Keyframe val = keys[j];
			global::g g5;
			if (j == 0 && ((Keyframe)(ref val)).get_time() != 0f)
			{
				g5 = new global::g(global::g.a.d);
				g5.d("time", 0);
				g5.d("inTangent", 0);
				g5.d("outTangent", 0);
				g5.d("value", ((Keyframe)(ref val)).get_value());
				g4.f(g5);
			}
			g5 = new global::g(global::g.a.d);
			g5.d("time", ((Keyframe)(ref val)).get_time());
			g5.d("inTangent", ((Keyframe)(ref val)).get_inTangent());
			g5.d("outTangent", ((Keyframe)(ref val)).get_inTangent());
			g5.d("value", ((Keyframe)(ref val)).get_value());
			g4.f(g5);
			if (j == keys.Length - 1 && ((Keyframe)(ref val)).get_time() != 1f)
			{
				g5 = new global::g(global::g.a.d);
				g5.d("time", 1);
				g5.d("inTangent", 0);
				g5.d("outTangent", 0);
				g5.d("value", ((Keyframe)(ref val)).get_value());
				g4.f(g5);
			}
		}
		global::g g6 = new global::g(global::g.a.d);
		A_1.d("colorGradient", g6);
		Gradient colorGradient = component.get_colorGradient();
		if ((int)colorGradient.get_mode() == 0)
		{
			g6.d("mode", 0);
		}
		else
		{
			g6.d("mode", 1);
		}
		global::g g7 = new global::g(global::g.a.e);
		g6.d("colorKeys", g7);
		GradientColorKey[] colorKeys = colorGradient.get_colorKeys();
		for (int k = 0; k < colorKeys.Length; k++)
		{
			GradientColorKey val2 = colorKeys[k];
			global::g g8;
			global::g g9;
			Color color;
			if (k == 0 && val2.time != 0f)
			{
				g8 = new global::g(global::g.a.d);
				g8.d("time", 0);
				g9 = new global::g(global::g.a.e);
				g8.d("value", g9);
				color = val2.color;
				g9.d(color.r);
				g9.d(color.g);
				g9.d(color.b);
				g7.f(g8);
			}
			g8 = new global::g(global::g.a.d);
			g8.d("time", val2.time);
			g9 = new global::g(global::g.a.e);
			g8.d("value", g9);
			color = val2.color;
			g9.d(color.r);
			g9.d(color.g);
			g9.d(color.b);
			g7.f(g8);
			if (k == colorKeys.Length - 1 && val2.time != 1f)
			{
				g8 = new global::g(global::g.a.d);
				g8.d("time", 1);
				g9 = new global::g(global::g.a.e);
				g8.d("value", g9);
				color = val2.color;
				g9.d(color.r);
				g9.d(color.g);
				g9.d(color.b);
				g7.f(g8);
			}
		}
		global::g g10 = new global::g(global::g.a.e);
		g6.d("alphaKeys", g10);
		GradientAlphaKey[] alphaKeys = colorGradient.get_alphaKeys();
		for (int l = 0; l < alphaKeys.Length; l++)
		{
			GradientAlphaKey val3 = alphaKeys[l];
			global::g g11;
			if (l == 0 && val3.time != 0f)
			{
				g11 = new global::g(global::g.a.d);
				g11.d("time", 0);
				g11.d("value", val3.alpha);
				g10.f(g11);
			}
			g11 = new global::g(global::g.a.d);
			g11.d("time", val3.time);
			g11.d("value", val3.alpha);
			g10.f(g11);
			if (l == alphaKeys.Length - 1 && val3.time != 1f)
			{
				g11 = new global::g(global::g.a.d);
				g11.d("time", 1);
				g11.d("value", val3.alpha);
				g10.f(g11);
			}
		}
		Material[] sharedMaterials = ((Renderer)component).get_sharedMaterials();
		global::g g12 = new global::g(global::g.a.e);
		A_1.d("materials", g12);
		foreach (Material val4 in sharedMaterials)
		{
			if (!((Object)(object)val4 == (Object)null))
			{
				string text = a(AssetDatabase.GetAssetPath(((Object)val4).GetInstanceID()).Split('.')[0], A_1: false) + ".lmat";
				string a_ = q + "/" + text;
				string name = ((Object)val4.get_shader()).get_name();
				if (name != "LayaAir3D/Line")
				{
					Debug.LogWarning((object)("LayaAir3D Warning(Code:2004) : " + ((Object)A_0).get_name() + " dose's match " + name + "Shader, Must use Line Shader！"));
				}
				global::g g13 = new global::g(global::g.a.d);
				g13.a("type", "Laya.LineMaterial");
				g13.a("path", text);
				g12.f(g13);
				a(val4, a_, "Line");
			}
		}
	}

	private static bool b(GameObject A_0, global::g A_1)
	{
		//IL_003f: Unknown result type (might be due to invalid IL or missing references)
		//IL_0044: Unknown result type (might be due to invalid IL or missing references)
		//IL_0048: Unknown result type (might be due to invalid IL or missing references)
		//IL_0057: Unknown result type (might be due to invalid IL or missing references)
		//IL_0065: Unknown result type (might be due to invalid IL or missing references)
		//IL_0080: Unknown result type (might be due to invalid IL or missing references)
		//IL_0085: Unknown result type (might be due to invalid IL or missing references)
		//IL_0089: Unknown result type (might be due to invalid IL or missing references)
		//IL_0097: Unknown result type (might be due to invalid IL or missing references)
		//IL_00a5: Unknown result type (might be due to invalid IL or missing references)
		//IL_0118: Unknown result type (might be due to invalid IL or missing references)
		//IL_011d: Unknown result type (might be due to invalid IL or missing references)
		//IL_0121: Unknown result type (might be due to invalid IL or missing references)
		//IL_0130: Unknown result type (might be due to invalid IL or missing references)
		//IL_013e: Unknown result type (might be due to invalid IL or missing references)
		//IL_01c6: Unknown result type (might be due to invalid IL or missing references)
		//IL_01cb: Unknown result type (might be due to invalid IL or missing references)
		//IL_01cf: Unknown result type (might be due to invalid IL or missing references)
		//IL_01dd: Unknown result type (might be due to invalid IL or missing references)
		//IL_01eb: Unknown result type (might be due to invalid IL or missing references)
		bool result = false;
		BoxCollider[] components = A_0.GetComponents<BoxCollider>();
		foreach (BoxCollider obj in components)
		{
			global::g g = new global::g(global::g.a.d);
			global::g g2 = new global::g(global::g.a.e);
			global::g g3 = new global::g(global::g.a.e);
			g.a("type", "BoxColliderShape");
			Vector3 center = obj.get_center();
			g2.d(0f - center.x);
			g2.d(center.y);
			g2.d(center.z);
			g.d("center", g2);
			Vector3 size = obj.get_size();
			g3.d(size.x);
			g3.d(size.y);
			g3.d(size.z);
			g.d("size", g3);
			if (((Collider)obj).get_isTrigger())
			{
				result = true;
			}
			A_1.f(g);
		}
		SphereCollider[] components2 = A_0.GetComponents<SphereCollider>();
		foreach (SphereCollider val in components2)
		{
			global::g g4 = new global::g(global::g.a.d);
			global::g g5 = new global::g(global::g.a.e);
			g4.a("type", "SphereColliderShape");
			Vector3 center2 = val.get_center();
			g5.d(0f - center2.x);
			g5.d(center2.y);
			g5.d(center2.z);
			g4.d("center", g5);
			g4.d("radius", val.get_radius());
			if (((Collider)val).get_isTrigger())
			{
				result = true;
			}
			A_1.f(g4);
		}
		CapsuleCollider[] components3 = A_0.GetComponents<CapsuleCollider>();
		foreach (CapsuleCollider val2 in components3)
		{
			global::g g6 = new global::g(global::g.a.d);
			global::g g7 = new global::g(global::g.a.e);
			g6.a("type", "CapsuleColliderShape");
			Vector3 center3 = val2.get_center();
			g7.d(center3.x);
			g7.d(center3.y);
			g7.d(center3.z);
			g6.d("center", g7);
			g6.d("radius", val2.get_radius());
			g6.d("height", val2.get_height());
			g6.d("orientation", val2.get_direction());
			if (((Collider)val2).get_isTrigger())
			{
				result = true;
			}
			A_1.f(g6);
		}
		MeshCollider[] components4 = A_0.GetComponents<MeshCollider>();
		foreach (MeshCollider val3 in components4)
		{
			global::g g8 = new global::g(global::g.a.d);
			g8.a("type", "MeshColliderShape");
			Mesh sharedMesh = val3.get_sharedMesh();
			if ((Object)(object)sharedMesh != (Object)null)
			{
				string str = a(((Object)sharedMesh).get_name(), A_1: true);
				string str2 = a(AssetDatabase.GetAssetPath(((Object)sharedMesh).GetInstanceID()).Split('.')[0], A_1: false) + "-" + str;
				str2 += ".lm";
				g8.a("mesh", str2);
				string key = q + "/" + str2;
				if (!aj.ContainsKey(key))
				{
					aj.Add(key, sharedMesh);
				}
			}
			else
			{
				Debug.LogWarning((object)("LayaAir3D Warning(Code:1001) : " + ((Object)A_0).get_name() + "'s MeshFilter Component Mesh data can't be null!"));
			}
			if (((Collider)val3).get_isTrigger())
			{
				result = true;
			}
			A_1.f(g8);
		}
		return result;
	}

	private static void a(GameObject A_0, Material[] A_1, global::g A_2)
	{
		foreach (Material val in A_1)
		{
			if ((Object)(object)val == (Object)null)
			{
				continue;
			}
			string text = a(AssetDatabase.GetAssetPath(((Object)val).GetInstanceID()).Split('.')[0], A_1: false) + ".lmat";
			string a_ = q + "/" + text;
			string name = ((Object)val.get_shader()).get_name();
			if (name.Split('/')[0] == "LayaAir3D")
			{
				int num = name.Split('/').Length;
				global::g g = new global::g(global::g.a.d);
				A_2.f(g);
				string text2 = name.Split('/')[num - 1];
				if (text2 == "BlinnPhong")
				{
					g.a("path", text);
					b(val, a_, text2);
				}
				else if (text2 == "Unlit")
				{
					g.a("path", text);
					b(val, a_, text2);
				}
				else if (text2 == "Effect")
				{
					g.a("path", text);
					a(val, a_, text2);
				}
				else if (text2 == "PBR(Standard)")
				{
					g.a("path", text);
					b(val, a_, text2);
				}
				else if (text2 == "PBR(Specular)")
				{
					g.a("path", text);
					b(val, a_, text2);
				}
				else if (text2 == "Water (Primary)")
				{
					g.a("type", "Laya.WaterPrimaryMaterial");
					g.a("path", text);
					A_2.f(g);
					a(val, a_);
				}
				else
				{
					g.a("path", text);
					if (global::p.b.ContainsKey(name))
					{
						c(val, a_, global::p.b[name]);
					}
					else
					{
						Debug.LogWarning((object)("LayaAir3D Warning : " + text2 + " must config in CustomShaderConfig File."));
					}
				}
			}
			else
			{
				global::g g2 = new global::g(global::g.a.d);
				g2.a("type", "Laya.BlinnPhongMaterial");
				g2.a("path", text);
				A_2.f(g2);
				string a_2 = "BlinnPhong";
				b(val, a_, a_2);
				Debug.LogWarning((object)("LayaAir3D Warning(Code:2000) : " + ((Object)A_0).get_name() + " must use LayaAir3D shader!"));
			}
		}
	}

	private static bool d(GameObject A_0)
	{
		Transform parent = A_0.get_transform().get_parent();
		if ((Object)(object)parent != (Object)null)
		{
			if ((Object)(object)((Component)parent).get_gameObject().GetComponent<Animator>() == (Object)null)
			{
				return d(((Component)parent).get_gameObject());
			}
			return true;
		}
		return false;
	}

	private static void a(GameObject A_0, global::g A_1, GameObject A_2)
	{
		//IL_008f: Unknown result type (might be due to invalid IL or missing references)
		//IL_0094: Unknown result type (might be due to invalid IL or missing references)
		//IL_009c: Unknown result type (might be due to invalid IL or missing references)
		//IL_00a1: Unknown result type (might be due to invalid IL or missing references)
		//IL_00a9: Unknown result type (might be due to invalid IL or missing references)
		//IL_00ae: Unknown result type (might be due to invalid IL or missing references)
		//IL_00e1: Unknown result type (might be due to invalid IL or missing references)
		//IL_00f4: Unknown result type (might be due to invalid IL or missing references)
		//IL_0101: Unknown result type (might be due to invalid IL or missing references)
		//IL_0124: Unknown result type (might be due to invalid IL or missing references)
		//IL_0138: Unknown result type (might be due to invalid IL or missing references)
		//IL_0146: Unknown result type (might be due to invalid IL or missing references)
		//IL_0154: Unknown result type (might be due to invalid IL or missing references)
		//IL_017d: Unknown result type (might be due to invalid IL or missing references)
		//IL_018b: Unknown result type (might be due to invalid IL or missing references)
		//IL_0199: Unknown result type (might be due to invalid IL or missing references)
		b(A_0, A_1: true);
		bool flag = false;
		if (!A_0.get_activeSelf() && global::p.m)
		{
			return;
		}
		if ((Object)(object)A_0.GetComponent<Animator>() != (Object)null && d(A_0) && (Object)(object)A_0 != (Object)(object)A_2)
		{
			flag = true;
		}
		else if (((Object)(object)a(A_0, global::p.a.i) != (Object)(object)A_2 || b(A_0).IndexOf(global::p.a.i) != -1) && (Object)(object)A_0 != (Object)(object)A_2)
		{
			return;
		}
		global::g g = new global::g(global::g.a.d);
		global::g g2 = new global::g(global::g.a.d);
		global::g g3 = new global::g(global::g.a.e);
		global::g g4 = new global::g(global::g.a.e);
		global::g g5 = new global::g(global::g.a.e);
		Vector3 localPosition = A_0.get_transform().get_localPosition();
		Quaternion localRotation = A_0.get_transform().get_localRotation();
		Vector3 localScale = A_0.get_transform().get_localScale();
		g2.a("name", ((Object)A_0).get_name());
		g.d("props", g2);
		g3 = new global::g(global::g.a.e);
		g2.d("translate", g3);
		g3.d(localPosition.x * -1f);
		g3.d(localPosition.y);
		g3.d(localPosition.z);
		g4 = new global::g(global::g.a.e);
		g2.d("rotation", g4);
		g4.d(localRotation.x * -1f);
		g4.d(localRotation.y);
		g4.d(localRotation.z);
		g4.d(localRotation.w * -1f);
		g5 = new global::g(global::g.a.e);
		g2.d("scale", g5);
		g5.d(localScale.x);
		g5.d(localScale.y);
		g5.d(localScale.z);
		if (A_0.get_transform().get_childCount() > 0)
		{
			global::g a_ = new global::g(global::g.a.e);
			g.d("child", a_);
			if (!flag)
			{
				for (int i = 0; i < A_0.get_transform().get_childCount(); i++)
				{
					a(((Component)A_0.get_transform().GetChild(i)).get_gameObject(), a_, A_2);
				}
			}
		}
		else
		{
			g.d("child", new global::g(global::g.a.e));
		}
		A_1.f(g);
	}

	static p()
	{
		UNrqlvEiaD5r6WCLZt.IpxBSkcjWDvxT();
		global::p.a = "LayaAir3D UnityPlugin: ";
		global::p.b = new Dictionary<string, string>();
		global::p.j = 75;
		x = 24;
		y = 0.01f;
		z = new int[7];
		ac = 1;
		ad = 0;
		ae = 1;
		af = 0;
		ag = 1;
		ah = 0;
		ai = new Dictionary<string, TextureInfo>();
		aj = new Dictionary<string, Mesh>();
		ak = new Dictionary<string, SkinnedMeshRenderer>();
		al = new global::a();
		am = "LAYASCENE3D:02";
		an = "LAYAHIERARCHY:02";
		ao = "LAYAMODEL:05";
		ap = "LAYAMODEL:COMPRESSION_05";
		aq = "LAYAMATERIAL:02";
		ar = "LAYAANIMATION:04";
		@as = "LAYAANIMATION:COMPRESSION_04";
		at = 0;
		au = new Dictionary<string, int>();
		av = new List<string>();
		global::p.b.Add("LayaAir3D/Sky/Cubemap", "Laya.SkyBoxMaterial");
		global::p.b.Add("LayaAir3D/Sky/Procedural", "Laya.SkyProceduralMaterial");
		h();
	}

	private static void h()
	{
		global::g g = global::g.d(File.ReadAllText("Assets/LayaAir3D/LayaTool/CustomShaderConfig.json"));
		for (int i = 0; i < g.h.Count; i++)
		{
			string text = g.h[i];
			global::p.b.Add(text, g.n(text).i);
		}
	}

	private static void a(Material A_0, global::g A_1)
	{
		string text = a(AssetDatabase.GetAssetPath(((Object)A_0).GetInstanceID()).Split('.')[0], A_1: false) + ".lmat";
		string a_ = q + "/" + text;
		string name = ((Object)A_0.get_shader()).get_name();
		if (name == "LayaAir3D/Sky/Cubemap" || name == "LayaAir3D/Sky/Procedural")
		{
			string text2 = global::p.b[name];
			global::g g = new global::g(global::g.a.d);
			A_1.d("sky", g);
			global::g g2 = new global::g(global::g.a.d);
			g.d("material", g2);
			g2.a("type", text2);
			g2.a("path", text);
			g.a("mesh", (name == "LayaAir3D/Sky/Cubemap") ? "SkyBox" : "SkyDome");
			c(A_0, a_, text2);
		}
		else
		{
			Debug.LogWarning((object)"LayaAir3D UnityPlugin: unknown Shader    Please use LayaAir3D shader");
		}
	}

	private static void c(Material A_0, string A_1, string A_2)
	{
		//IL_054d: Unknown result type (might be due to invalid IL or missing references)
		//IL_0552: Unknown result type (might be due to invalid IL or missing references)
		//IL_055f: Unknown result type (might be due to invalid IL or missing references)
		//IL_057a: Expected I4, but got Unknown
		//IL_05ca: Unknown result type (might be due to invalid IL or missing references)
		//IL_05cf: Unknown result type (might be due to invalid IL or missing references)
		//IL_05d3: Unknown result type (might be due to invalid IL or missing references)
		//IL_05e1: Unknown result type (might be due to invalid IL or missing references)
		//IL_05ef: Unknown result type (might be due to invalid IL or missing references)
		//IL_05fd: Unknown result type (might be due to invalid IL or missing references)
		//IL_064f: Unknown result type (might be due to invalid IL or missing references)
		//IL_0666: Expected O, but got Unknown
		//IL_066a: Unknown result type (might be due to invalid IL or missing references)
		//IL_0678: Expected O, but got Unknown
		global::g g = new global::g(global::g.a.d);
		global::g g2 = new global::g(global::g.a.d);
		global::g g3 = new global::g(global::g.a.e);
		global::g g4 = new global::g(global::g.a.e);
		global::g g5 = new global::g(global::g.a.e);
		global::g g6 = new global::g(global::g.a.e);
		List<string> list = A_0.get_shaderKeywords().ToList();
		string name = ((Object)A_0).get_name();
		g.a("version", aq);
		g.d("props", g2);
		g2.a("type", A_2);
		g2.a("name", name);
		g2.d("renderStates", g3);
		g2.d("textures", g4);
		g2.d("vectors", g5);
		g2.d("defines", g6);
		global::g g7 = new global::g(global::g.a.d);
		g3.f(g7);
		g7.d("cull", A_0.HasProperty("_Cull") ? A_0.GetInt("_Cull") : 2);
		g7.d("blend", (list.IndexOf("_ALPHABLEND_ON") != -1) ? 1 : 0);
		if (A_0.HasProperty("_SrcBlend"))
		{
			switch (A_0.GetInt("_SrcBlend"))
			{
			case 0:
				g7.d("srcBlend", 0);
				break;
			case 1:
				g7.d("srcBlend", 1);
				break;
			case 2:
				g7.d("srcBlend", 774);
				break;
			case 3:
				g7.d("srcBlend", 768);
				break;
			case 4:
				g7.d("srcBlend", 775);
				break;
			case 5:
				g7.d("srcBlend", 770);
				break;
			case 6:
				g7.d("srcBlend", 769);
				break;
			case 7:
				g7.d("srcBlend", 772);
				break;
			case 8:
				g7.d("srcBlend", 773);
				break;
			case 9:
				g7.d("srcBlend", 776);
				break;
			case 10:
				g7.d("srcBlend", 771);
				break;
			default:
				g7.d("srcBlend", 1);
				break;
			}
		}
		else
		{
			g7.d("srcBlend", 1);
		}
		if (A_0.HasProperty("_DstBlend"))
		{
			switch (A_0.GetInt("_DstBlend"))
			{
			case 0:
				g7.d("dstBlend", 0);
				break;
			case 1:
				g7.d("dstBlend", 1);
				break;
			case 2:
				g7.d("dstBlend", 774);
				break;
			case 3:
				g7.d("dstBlend", 768);
				break;
			case 4:
				g7.d("dstBlend", 775);
				break;
			case 5:
				g7.d("dstBlend", 770);
				break;
			case 6:
				g7.d("dstBlend", 769);
				break;
			case 7:
				g7.d("dstBlend", 772);
				break;
			case 8:
				g7.d("dstBlend", 773);
				break;
			case 9:
				g7.d("dstBlend", 776);
				break;
			case 10:
				g7.d("dstBlend", 771);
				break;
			default:
				g7.d("dstBlend", 0);
				break;
			}
		}
		else
		{
			g7.d("dstBlend", 0);
		}
		if (A_0.HasProperty("_ZWrite"))
		{
			g7.d("depthWrite", (A_0.GetInt("_ZWrite") == 1) ? true : false);
		}
		else
		{
			g7.d("depthWrite", A_1: true);
		}
		if (A_0.HasProperty("_ZTest"))
		{
			switch (A_0.GetInt("_ZTest"))
			{
			case 0:
				g7.d("depthTest", 0);
				break;
			case 1:
				g7.d("depthTest", 512);
				break;
			case 2:
				g7.d("depthTest", 513);
				break;
			case 3:
				g7.d("depthTest", 514);
				break;
			case 4:
				g7.d("depthTest", 515);
				break;
			case 5:
				g7.d("depthTest", 516);
				break;
			case 6:
				g7.d("depthTest", 517);
				break;
			case 7:
				g7.d("depthTest", 518);
				break;
			case 8:
				g7.d("depthTest", 519);
				break;
			default:
				g7.d("depthTest", 0);
				break;
			}
		}
		else
		{
			g7.d("depthTest", 515);
		}
		g2.d("renderQueue", A_0.get_renderQueue());
		for (int i = 0; i < list.Count; i++)
		{
			string a_ = list[i];
			g6.k(a_);
		}
		Shader shader = A_0.get_shader();
		int j = 0;
		for (int propertyCount = ShaderUtil.GetPropertyCount(shader); j < propertyCount; j++)
		{
			if (ShaderUtil.IsShaderPropertyHidden(shader, j))
			{
				continue;
			}
			ShaderPropertyType propertyType = ShaderUtil.GetPropertyType(shader, j);
			string propertyName = ShaderUtil.GetPropertyName(shader, j);
			switch ((int)propertyType)
			{
			case 2:
				g2.d(propertyName, A_0.GetFloat(propertyName));
				break;
			case 3:
				g2.d(propertyName, A_0.GetFloat(propertyName));
				break;
			case 0:
			{
				global::g g9 = new global::g(global::g.a.d);
				g9.a("name", propertyName);
				global::g g10 = new global::g(global::g.a.e);
				Color color = A_0.GetColor(propertyName);
				g10.d(color.r);
				g10.d(color.g);
				g10.d(color.b);
				g10.d(color.a);
				g9.d("value", g10);
				g5.f(g9);
				break;
			}
			case 4:
			{
				global::g g8 = new global::g(global::g.a.d);
				g8.a("name", propertyName);
				Texture texture = A_0.GetTexture(propertyName);
				if (texture is Texture2D)
				{
					a(g8, (Texture2D)(object)(Texture2D)texture, v, A_1, name);
				}
				else
				{
					a((Cubemap)(object)(Cubemap)texture, g8, A_2: true, A_1);
				}
				g4.f(g8);
				break;
			}
			}
		}
		global::n.a(A_1, g);
	}

	private static void a(Mesh A_0, string A_1, bool A_2 = false)
	{
		//IL_0511: Unknown result type (might be due to invalid IL or missing references)
		//IL_0516: Unknown result type (might be due to invalid IL or missing references)
		//IL_0522: Unknown result type (might be due to invalid IL or missing references)
		//IL_0532: Unknown result type (might be due to invalid IL or missing references)
		//IL_0541: Unknown result type (might be due to invalid IL or missing references)
		//IL_0563: Unknown result type (might be due to invalid IL or missing references)
		//IL_0568: Unknown result type (might be due to invalid IL or missing references)
		//IL_0574: Unknown result type (might be due to invalid IL or missing references)
		//IL_059f: Unknown result type (might be due to invalid IL or missing references)
		//IL_05c9: Unknown result type (might be due to invalid IL or missing references)
		//IL_0603: Unknown result type (might be due to invalid IL or missing references)
		//IL_0608: Unknown result type (might be due to invalid IL or missing references)
		//IL_0614: Unknown result type (might be due to invalid IL or missing references)
		//IL_0625: Unknown result type (might be due to invalid IL or missing references)
		//IL_0636: Unknown result type (might be due to invalid IL or missing references)
		//IL_0647: Unknown result type (might be due to invalid IL or missing references)
		//IL_0668: Unknown result type (might be due to invalid IL or missing references)
		//IL_066d: Unknown result type (might be due to invalid IL or missing references)
		//IL_0679: Unknown result type (might be due to invalid IL or missing references)
		//IL_0688: Unknown result type (might be due to invalid IL or missing references)
		//IL_06ae: Unknown result type (might be due to invalid IL or missing references)
		//IL_06b3: Unknown result type (might be due to invalid IL or missing references)
		//IL_06bf: Unknown result type (might be due to invalid IL or missing references)
		//IL_06ce: Unknown result type (might be due to invalid IL or missing references)
		//IL_06f7: Unknown result type (might be due to invalid IL or missing references)
		//IL_06fc: Unknown result type (might be due to invalid IL or missing references)
		//IL_0708: Unknown result type (might be due to invalid IL or missing references)
		//IL_0733: Unknown result type (might be due to invalid IL or missing references)
		//IL_075d: Unknown result type (might be due to invalid IL or missing references)
		//IL_0787: Unknown result type (might be due to invalid IL or missing references)
		//IL_07d3: Unknown result type (might be due to invalid IL or missing references)
		//IL_07d8: Unknown result type (might be due to invalid IL or missing references)
		//IL_07e4: Unknown result type (might be due to invalid IL or missing references)
		//IL_07ef: Unknown result type (might be due to invalid IL or missing references)
		//IL_07f9: Unknown result type (might be due to invalid IL or missing references)
		//IL_0813: Unknown result type (might be due to invalid IL or missing references)
		//IL_0818: Unknown result type (might be due to invalid IL or missing references)
		//IL_0824: Unknown result type (might be due to invalid IL or missing references)
		//IL_082f: Unknown result type (might be due to invalid IL or missing references)
		//IL_0839: Unknown result type (might be due to invalid IL or missing references)
		//IL_0853: Unknown result type (might be due to invalid IL or missing references)
		//IL_0858: Unknown result type (might be due to invalid IL or missing references)
		//IL_0864: Unknown result type (might be due to invalid IL or missing references)
		//IL_086e: Unknown result type (might be due to invalid IL or missing references)
		//IL_0878: Unknown result type (might be due to invalid IL or missing references)
		//IL_0882: Unknown result type (might be due to invalid IL or missing references)
		//IL_089c: Unknown result type (might be due to invalid IL or missing references)
		//IL_08a1: Unknown result type (might be due to invalid IL or missing references)
		//IL_08ad: Unknown result type (might be due to invalid IL or missing references)
		//IL_08b7: Unknown result type (might be due to invalid IL or missing references)
		//IL_08dd: Unknown result type (might be due to invalid IL or missing references)
		//IL_08e2: Unknown result type (might be due to invalid IL or missing references)
		//IL_08ee: Unknown result type (might be due to invalid IL or missing references)
		//IL_08f8: Unknown result type (might be due to invalid IL or missing references)
		//IL_091e: Unknown result type (might be due to invalid IL or missing references)
		//IL_0923: Unknown result type (might be due to invalid IL or missing references)
		//IL_092f: Unknown result type (might be due to invalid IL or missing references)
		//IL_093a: Unknown result type (might be due to invalid IL or missing references)
		//IL_0944: Unknown result type (might be due to invalid IL or missing references)
		//IL_094e: Unknown result type (might be due to invalid IL or missing references)
		//IL_0989: Unknown result type (might be due to invalid IL or missing references)
		//IL_098f: Invalid comparison between Unknown and I4
		//IL_0a19: Unknown result type (might be due to invalid IL or missing references)
		//IL_0a1f: Invalid comparison between Unknown and I4
		string item = a(((Object)A_0).get_name(), A_1: true);
		ushort num = (ushort)A_0.get_subMeshCount();
		int num2 = num + 1;
		FileStream fileStream = global::n.a(A_1);
		ushort num3 = 0;
		string text = "";
		if (A_2 && !global::a.f)
		{
			Debug.LogWarning((object)"Compress Mesh function is open only to members. ");
			return;
		}
		for (int i = 0; i < z.Length; i++)
		{
			z[i] = 0;
		}
		Vector3[] vertices = A_0.get_vertices();
		Vector3[] normals = A_0.get_normals();
		Color[] colors = A_0.get_colors();
		Vector2[] uv = A_0.get_uv();
		Vector2[] uv2 = A_0.get_uv2();
		Vector4[] tangents = A_0.get_tangents();
		if (vertices != null && vertices.Length != 0)
		{
			z[0] = 1;
			text += "POSITION";
			num3 = (ushort)(num3 + 12);
		}
		if (normals != null && normals.Length != 0 && !global::p.f)
		{
			z[1] = 1;
			text += ",NORMAL";
			num3 = (ushort)(num3 + 12);
		}
		if (colors != null && colors.Length != 0 && !global::p.e)
		{
			z[2] = 1;
			text += ",COLOR";
			num3 = (ushort)(num3 + 16);
		}
		if (uv != null && uv.Length != 0 && !global::p.d)
		{
			z[3] = 1;
			text += ",UV";
			num3 = (ushort)(num3 + 8);
		}
		if (uv2 != null && uv2.Length != 0 && !global::p.d)
		{
			z[4] = 1;
			text += ",UV1";
			num3 = (ushort)(num3 + 8);
		}
		if (tangents != null && tangents.Length != 0 && !global::p.g)
		{
			z[6] = 1;
			text += ",TANGENT";
			num3 = (ushort)(num3 + 16);
		}
		int[] array = new int[num];
		int[] array2 = new int[num];
		for (int i = 0; i < num; i++)
		{
			int[] indices = A_0.GetIndices(i);
			array[i] = indices[0];
			array2[i] = indices.Length;
		}
		long num4 = 0L;
		long num5 = 0L;
		long num6 = 0L;
		long num7 = 0L;
		long num8 = 0L;
		long num9 = 0L;
		long num10 = 0L;
		long num11 = 0L;
		long num12 = 0L;
		long num13 = 0L;
		long num14 = 0L;
		long num15 = 0L;
		long num16 = 0L;
		long[] array3 = new long[num];
		long[] array4 = new long[num];
		long[] array5 = new long[num];
		List<string> list = new List<string>();
		list.Add("MESH");
		list.Add("SUBMESH");
		string a_ = A_2 ? ap : ao;
		global::n.a(fileStream, a_);
		_ = fileStream.Position;
		num4 = fileStream.Position;
		global::n.a(fileStream, default(uint));
		global::n.a(fileStream, default(uint));
		num9 = fileStream.Position;
		global::n.a(fileStream, (ushort)num2);
		for (int i = 0; i < num2; i++)
		{
			global::n.a(fileStream, default(uint));
			global::n.a(fileStream, default(uint));
		}
		num10 = fileStream.Position;
		global::n.a(fileStream, default(uint));
		global::n.a(fileStream, default(ushort));
		num5 = fileStream.Position;
		global::n.a(fileStream, (ushort)list.IndexOf("MESH"));
		list.Add(item);
		global::n.a(fileStream, (ushort)list.IndexOf(item));
		global::n.a(fileStream, new ushort[1]
		{
			1
		});
		num7 = fileStream.Position;
		for (int i = 0; i < 1; i++)
		{
			global::n.a(fileStream, default(uint));
			global::n.a(fileStream, default(uint));
			list.Add(text);
			global::n.a(fileStream, (ushort)list.IndexOf(text));
		}
		num8 = fileStream.Position;
		global::n.a(fileStream, default(uint));
		global::n.a(fileStream, default(uint));
		_ = fileStream.Position;
		global::n.a(fileStream, default(ushort));
		global::n.a(fileStream, default(uint));
		global::n.a(fileStream, default(uint));
		global::n.a(fileStream, default(uint));
		global::n.a(fileStream, default(uint));
		num6 = fileStream.Position - num5;
		for (int i = 0; i < num; i++)
		{
			array3[i] = fileStream.Position;
			global::n.a(fileStream, (ushort)list.IndexOf("SUBMESH"));
			global::n.a(fileStream, default(ushort));
			global::n.a(fileStream, default(uint));
			global::n.a(fileStream, default(uint));
			global::n.a(fileStream, new ushort[1]
			{
				1
			});
			global::n.a(fileStream, default(uint));
			global::n.a(fileStream, default(uint));
			global::n.a(fileStream, default(uint));
			global::n.a(fileStream, default(uint));
			array4[i] = fileStream.Position;
			array5[i] = array4[i] - array3[i];
		}
		num11 = fileStream.Position;
		for (int i = 0; i < list.Count; i++)
		{
			global::n.a(fileStream, list[i]);
		}
		num12 = fileStream.Position - num11;
		num13 = fileStream.Position;
		if (A_2)
		{
			for (int j = 0; j < A_0.get_vertexCount(); j++)
			{
				Vector3 val = vertices[j];
				global::n.a(fileStream, global::f.a(0f - val.x), global::f.a(val.y), global::f.a(val.z));
				if (z[1] == 1)
				{
					Vector3 val2 = normals[j];
					global::n.a(fileStream, (byte)(((double)(0f - val2.x) + 1.0) / 2.0 * 255.0), (byte)(((double)val2.y + 1.0) / 2.0 * 255.0), (byte)(((double)val2.z + 1.0) / 2.0 * 255.0));
				}
				if (z[2] == 1)
				{
					Color val3 = colors[j];
					global::n.a(fileStream, (byte)(val3.r * 255f), (byte)(val3.g * 255f), (byte)(val3.b * 255f), (byte)(val3.a * 255f));
				}
				if (z[3] == 1)
				{
					Vector2 val4 = uv[j];
					global::n.a(fileStream, global::f.a(val4.x), global::f.a(0f - val4.y + 1f));
				}
				if (z[4] == 1)
				{
					Vector2 val5 = uv2[j];
					global::n.a(fileStream, global::f.a(val5.x), global::f.a(0f - val5.y + 1f));
				}
				if (z[6] == 1)
				{
					Vector4 val6 = tangents[j];
					global::n.a(fileStream, (byte)(((double)(0f - val6.x) + 1.0) / 2.0 * 255.0), (byte)(((double)val6.y + 1.0) / 2.0 * 255.0), (byte)(((double)val6.z + 1.0) / 2.0 * 255.0), (byte)(((double)val6.w + 1.0) / 2.0 * 255.0));
				}
			}
		}
		else
		{
			for (int j = 0; j < A_0.get_vertexCount(); j++)
			{
				Vector3 val = vertices[j];
				global::n.a(fileStream, 0f - val.x, val.y, val.z);
				if (z[1] == 1)
				{
					Vector3 val2 = normals[j];
					global::n.a(fileStream, 0f - val2.x, val2.y, val2.z);
				}
				if (z[2] == 1)
				{
					Color val3 = colors[j];
					global::n.a(fileStream, val3.r, val3.g, val3.b, val3.a);
				}
				if (z[3] == 1)
				{
					Vector2 val4 = uv[j];
					global::n.a(fileStream, val4.x, val4.y * -1f + 1f);
				}
				if (z[4] == 1)
				{
					Vector2 val5 = uv2[j];
					global::n.a(fileStream, val5.x, val5.y * -1f + 1f);
				}
				if (z[6] == 1)
				{
					Vector4 val6 = tangents[j];
					global::n.a(fileStream, 0f - val6.x, val6.y, val6.z, val6.w);
				}
			}
		}
		num14 = fileStream.Position - num13;
		num15 = fileStream.Position;
		int[] triangles = A_0.get_triangles();
		if ((int)A_0.get_indexFormat() == 1 && A_0.get_vertexCount() > 65535)
		{
			for (int j = 0; j < triangles.Length; j++)
			{
				global::n.a(fileStream, (uint)triangles[j]);
			}
		}
		else
		{
			for (int j = 0; j < triangles.Length; j++)
			{
				global::n.a(fileStream, (ushort)triangles[j]);
			}
		}
		num16 = fileStream.Position - num15;
		uint num17 = 0u;
		uint num18 = 0u;
		uint num19 = 0u;
		for (int i = 0; i < num; i++)
		{
			fileStream.Position = array3[i] + 4;
			if (num == 1)
			{
				num17 = 0u;
				num18 = (uint)(((int)A_0.get_indexFormat() == 1) ? (num16 / 4) : (num16 / 2));
			}
			else if (i == 0)
			{
				num17 = num19;
				num18 = (uint)array2[i];
			}
			else if (i < num - 1)
			{
				num17 = num19;
				num18 = (uint)array2[i];
			}
			else
			{
				num17 = num19;
				num18 = (uint)array2[i];
			}
			global::n.a(fileStream, num17);
			global::n.a(fileStream, num18);
			num19 += num18;
			fileStream.Position += 2L;
			global::n.a(fileStream, num17);
			global::n.a(fileStream, num18);
		}
		fileStream.Position = num7;
		global::n.a(fileStream, (uint)(num13 - num11));
		global::n.a(fileStream, (uint)A_0.get_vertexCount());
		fileStream.Position = num8;
		global::n.a(fileStream, (uint)(num15 - num11));
		global::n.a(fileStream, (uint)num16);
		fileStream.Position = num10;
		global::n.a(fileStream, default(uint));
		global::n.a(fileStream, (ushort)list.Count);
		_ = fileStream.Position;
		fileStream.Position = num9 + 2;
		global::n.a(fileStream, (uint)num5);
		global::n.a(fileStream, (uint)num6);
		for (int i = 0; i < num; i++)
		{
			global::n.a(fileStream, (uint)array3[i]);
			global::n.a(fileStream, (uint)array5[i]);
		}
		fileStream.Position = num4;
		global::n.a(fileStream, (uint)num11);
		global::n.a(fileStream, (uint)(num11 + num12 + num14 + num16 + array5[0]));
		fileStream.Close();
	}

	private static void a(SkinnedMeshRenderer A_0, string A_1, bool A_2 = false)
	{
		//IL_0a50: Unknown result type (might be due to invalid IL or missing references)
		//IL_0a55: Unknown result type (might be due to invalid IL or missing references)
		//IL_0a61: Unknown result type (might be due to invalid IL or missing references)
		//IL_0a71: Unknown result type (might be due to invalid IL or missing references)
		//IL_0a80: Unknown result type (might be due to invalid IL or missing references)
		//IL_0aa1: Unknown result type (might be due to invalid IL or missing references)
		//IL_0aa6: Unknown result type (might be due to invalid IL or missing references)
		//IL_0ab2: Unknown result type (might be due to invalid IL or missing references)
		//IL_0add: Unknown result type (might be due to invalid IL or missing references)
		//IL_0b07: Unknown result type (might be due to invalid IL or missing references)
		//IL_0b40: Unknown result type (might be due to invalid IL or missing references)
		//IL_0b45: Unknown result type (might be due to invalid IL or missing references)
		//IL_0b51: Unknown result type (might be due to invalid IL or missing references)
		//IL_0b62: Unknown result type (might be due to invalid IL or missing references)
		//IL_0b73: Unknown result type (might be due to invalid IL or missing references)
		//IL_0b84: Unknown result type (might be due to invalid IL or missing references)
		//IL_0ba4: Unknown result type (might be due to invalid IL or missing references)
		//IL_0ba9: Unknown result type (might be due to invalid IL or missing references)
		//IL_0bb5: Unknown result type (might be due to invalid IL or missing references)
		//IL_0bc4: Unknown result type (might be due to invalid IL or missing references)
		//IL_0be9: Unknown result type (might be due to invalid IL or missing references)
		//IL_0bee: Unknown result type (might be due to invalid IL or missing references)
		//IL_0bfa: Unknown result type (might be due to invalid IL or missing references)
		//IL_0c09: Unknown result type (might be due to invalid IL or missing references)
		//IL_0c31: Unknown result type (might be due to invalid IL or missing references)
		//IL_0c36: Unknown result type (might be due to invalid IL or missing references)
		//IL_0c3a: Unknown result type (might be due to invalid IL or missing references)
		//IL_0c3f: Unknown result type (might be due to invalid IL or missing references)
		//IL_0c4b: Unknown result type (might be due to invalid IL or missing references)
		//IL_0c5c: Unknown result type (might be due to invalid IL or missing references)
		//IL_0c6d: Unknown result type (might be due to invalid IL or missing references)
		//IL_0c7e: Unknown result type (might be due to invalid IL or missing references)
		//IL_0c9c: Unknown result type (might be due to invalid IL or missing references)
		//IL_0ca7: Unknown result type (might be due to invalid IL or missing references)
		//IL_0cb2: Unknown result type (might be due to invalid IL or missing references)
		//IL_0cbd: Unknown result type (might be due to invalid IL or missing references)
		//IL_0cda: Unknown result type (might be due to invalid IL or missing references)
		//IL_0cdf: Unknown result type (might be due to invalid IL or missing references)
		//IL_0ceb: Unknown result type (might be due to invalid IL or missing references)
		//IL_0d16: Unknown result type (might be due to invalid IL or missing references)
		//IL_0d40: Unknown result type (might be due to invalid IL or missing references)
		//IL_0d6a: Unknown result type (might be due to invalid IL or missing references)
		//IL_0dc5: Unknown result type (might be due to invalid IL or missing references)
		//IL_0dca: Unknown result type (might be due to invalid IL or missing references)
		//IL_0dd6: Unknown result type (might be due to invalid IL or missing references)
		//IL_0de6: Unknown result type (might be due to invalid IL or missing references)
		//IL_0df0: Unknown result type (might be due to invalid IL or missing references)
		//IL_0e09: Unknown result type (might be due to invalid IL or missing references)
		//IL_0e0e: Unknown result type (might be due to invalid IL or missing references)
		//IL_0e1a: Unknown result type (might be due to invalid IL or missing references)
		//IL_0e2a: Unknown result type (might be due to invalid IL or missing references)
		//IL_0e34: Unknown result type (might be due to invalid IL or missing references)
		//IL_0e4d: Unknown result type (might be due to invalid IL or missing references)
		//IL_0e52: Unknown result type (might be due to invalid IL or missing references)
		//IL_0e5e: Unknown result type (might be due to invalid IL or missing references)
		//IL_0e68: Unknown result type (might be due to invalid IL or missing references)
		//IL_0e72: Unknown result type (might be due to invalid IL or missing references)
		//IL_0e7c: Unknown result type (might be due to invalid IL or missing references)
		//IL_0e95: Unknown result type (might be due to invalid IL or missing references)
		//IL_0e9a: Unknown result type (might be due to invalid IL or missing references)
		//IL_0ea6: Unknown result type (might be due to invalid IL or missing references)
		//IL_0eb0: Unknown result type (might be due to invalid IL or missing references)
		//IL_0ed0: Unknown result type (might be due to invalid IL or missing references)
		//IL_0ed5: Unknown result type (might be due to invalid IL or missing references)
		//IL_0ee1: Unknown result type (might be due to invalid IL or missing references)
		//IL_0eeb: Unknown result type (might be due to invalid IL or missing references)
		//IL_0f0e: Unknown result type (might be due to invalid IL or missing references)
		//IL_0f13: Unknown result type (might be due to invalid IL or missing references)
		//IL_0f17: Unknown result type (might be due to invalid IL or missing references)
		//IL_0f1c: Unknown result type (might be due to invalid IL or missing references)
		//IL_0f28: Unknown result type (might be due to invalid IL or missing references)
		//IL_0f32: Unknown result type (might be due to invalid IL or missing references)
		//IL_0f3c: Unknown result type (might be due to invalid IL or missing references)
		//IL_0f46: Unknown result type (might be due to invalid IL or missing references)
		//IL_0f5d: Unknown result type (might be due to invalid IL or missing references)
		//IL_0f68: Unknown result type (might be due to invalid IL or missing references)
		//IL_0f73: Unknown result type (might be due to invalid IL or missing references)
		//IL_0f7e: Unknown result type (might be due to invalid IL or missing references)
		//IL_0f98: Unknown result type (might be due to invalid IL or missing references)
		//IL_0f9d: Unknown result type (might be due to invalid IL or missing references)
		//IL_0fa9: Unknown result type (might be due to invalid IL or missing references)
		//IL_0fb9: Unknown result type (might be due to invalid IL or missing references)
		//IL_0fc3: Unknown result type (might be due to invalid IL or missing references)
		//IL_0fcd: Unknown result type (might be due to invalid IL or missing references)
		//IL_1004: Unknown result type (might be due to invalid IL or missing references)
		//IL_100a: Invalid comparison between Unknown and I4
		//IL_10c1: Unknown result type (might be due to invalid IL or missing references)
		//IL_10c6: Unknown result type (might be due to invalid IL or missing references)
		//IL_10d8: Unknown result type (might be due to invalid IL or missing references)
		//IL_10dd: Unknown result type (might be due to invalid IL or missing references)
		//IL_10eb: Unknown result type (might be due to invalid IL or missing references)
		//IL_1137: Unknown result type (might be due to invalid IL or missing references)
		//IL_1139: Unknown result type (might be due to invalid IL or missing references)
		//IL_113b: Unknown result type (might be due to invalid IL or missing references)
		//IL_113d: Unknown result type (might be due to invalid IL or missing references)
		//IL_1142: Unknown result type (might be due to invalid IL or missing references)
		//IL_1173: Unknown result type (might be due to invalid IL or missing references)
		//IL_1178: Unknown result type (might be due to invalid IL or missing references)
		//IL_1263: Unknown result type (might be due to invalid IL or missing references)
		//IL_1269: Invalid comparison between Unknown and I4
		Mesh sharedMesh = A_0.get_sharedMesh();
		ushort num = 1;
		ushort num2 = (ushort)sharedMesh.get_subMeshCount();
		ushort num3 = 0;
		string text = "";
		string item = a(((Object)sharedMesh).get_name(), A_1: true);
		for (int i = 0; i < z.Length; i++)
		{
			z[i] = 0;
		}
		if (A_2 && !global::a.f)
		{
			Debug.LogWarning((object)"CompressMesh function is open only to members. ");
			return;
		}
		if (sharedMesh.get_vertices() != null && sharedMesh.get_vertices().Length != 0)
		{
			z[0] = 1;
			text += "POSITION";
			num3 = (ushort)(num3 + 12);
		}
		if (sharedMesh.get_normals() != null && sharedMesh.get_normals().Length != 0 && !global::p.f)
		{
			z[1] = 1;
			text += ",NORMAL";
			num3 = (ushort)(num3 + 12);
		}
		if (sharedMesh.get_colors() != null && sharedMesh.get_colors().Length != 0 && !global::p.e)
		{
			z[2] = 1;
			text += ",COLOR";
			num3 = (ushort)(num3 + 16);
		}
		if (sharedMesh.get_uv() != null && sharedMesh.get_uv().Length != 0 && !global::p.d)
		{
			z[3] = 1;
			text += ",UV";
			num3 = (ushort)(num3 + 8);
		}
		if (sharedMesh.get_uv2() != null && sharedMesh.get_uv2().Length != 0 && !global::p.d)
		{
			z[4] = 1;
			text += ",UV1";
			num3 = (ushort)(num3 + 8);
		}
		if (sharedMesh.get_boneWeights() != null && sharedMesh.get_boneWeights().Length != 0)
		{
			z[5] = 1;
			text += ",BLENDWEIGHT,BLENDINDICES";
			num3 = (ushort)(num3 + 32);
		}
		if (sharedMesh.get_tangents() != null && sharedMesh.get_tangents().Length != 0 && !global::p.g)
		{
			z[6] = 1;
			text += ",TANGENT";
			num3 = (ushort)(num3 + 16);
		}
		List<Transform> list = new List<Transform>();
		for (int j = 0; j < A_0.get_bones().Length; j++)
		{
			Transform item2 = A_0.get_bones()[j];
			if (list.IndexOf(item2) == -1)
			{
				list.Add(item2);
			}
		}
		int vertexCount = sharedMesh.get_vertexCount();
		List<b> list2 = new List<b>();
		List<int> list3 = new List<int>();
		List<List<int>>[] array = new List<List<int>>[num2];
		List<int>[] array2 = new List<int>[num2];
		List<List<c>>[] array3 = new List<List<c>>[num2];
		Vector3[] vertices = sharedMesh.get_vertices();
		Vector3[] normals = sharedMesh.get_normals();
		Color[] colors = sharedMesh.get_colors();
		Vector2[] uv = sharedMesh.get_uv();
		Vector2[] uv2 = sharedMesh.get_uv2();
		BoneWeight[] boneWeights = sharedMesh.get_boneWeights();
		Vector4[] tangents = sharedMesh.get_tangents();
		for (int k = 0; k < vertexCount; k++)
		{
			list2.Add(a(vertices, normals, colors, uv, uv2, boneWeights, tangents, k));
		}
		for (int l = 0; l < num2; l++)
		{
			int[] indices = sharedMesh.GetIndices(l);
			array[l] = new List<List<int>>();
			array[l].Add(new List<int>());
			array2[l] = new List<int>();
			List<List<c>> list4 = array3[l] = new List<List<c>>();
			list4.Add(new List<c>());
			List<c> list5 = new List<c>();
			int m = 0;
			for (int num4 = indices.Length; m < num4; m += 3)
			{
				c c = new c();
				c.a = list2[indices[m]];
				c.b = list2[indices[m + 1]];
				c.c = list2[indices[m + 2]];
				list5.Add(c);
			}
			for (int n = 0; n < list5.Count; n++)
			{
				c c2 = list5[n];
				List<int> list6 = a(c2);
				bool flag = false;
				for (int num5 = 0; num5 < array[l].Count; num5++)
				{
					List<int> list7 = a(list6, array[l][num5]);
					if (list7.Count == 0)
					{
						list4[num5].Add(c2);
						flag = true;
						break;
					}
					if (array[l][num5].Count + list7.Count <= x)
					{
						for (int num6 = 0; num6 < list7.Count; num6++)
						{
							array[l][num5].Add(list7[num6]);
						}
						list4[num5].Add(c2);
						flag = true;
						break;
					}
				}
				if (!flag)
				{
					List<int> list8 = new List<int>();
					List<c> list9 = new List<c>();
					array[l].Add(list8);
					list4.Add(list9);
					for (int num7 = 0; num7 < list6.Count; num7++)
					{
						list8.Add(list6[num7]);
					}
					list9.Add(c2);
				}
			}
			for (int num8 = 0; num8 < list4.Count; num8++)
			{
				List<c> list10 = list4[num8];
				for (int num9 = 0; num9 < list10.Count; num9++)
				{
					c obj = list10[num9];
					obj.a = a(obj.a, l, num8, list2);
					obj.b = a(obj.b, l, num8, list2);
					obj.c = a(obj.c, l, num8, list2);
				}
			}
			int num10 = 0;
			for (int num11 = 0; num11 < list4.Count; num11++)
			{
				num10 += list4[num11].Count * 3;
				array2[l].Add(num10);
			}
		}
		for (int num12 = 0; num12 < num2; num12++)
		{
			List<List<c>> list11 = array3[num12];
			for (int num13 = 0; num13 < list11.Count; num13++)
			{
				List<int> a_ = array[num12][num13];
				for (int num14 = 0; num14 < list11[num13].Count; num14++)
				{
					c c3 = list11[num13][num14];
					a(a_, c3.c);
					a(a_, c3.b);
					a(a_, c3.a);
					list3.Add(c3.a.a);
					list3.Add(c3.b.a);
					list3.Add(c3.c.a);
				}
			}
		}
		int[] array4 = new int[num2];
		int[] array5 = new int[num2];
		int num15 = 0;
		for (int num16 = 0; num16 < num2; num16++)
		{
			int[] indices2 = sharedMesh.GetIndices(num16);
			array4[num16] = list3[num15];
			array5[num16] = indices2.Length;
			num15 += indices2.Length;
		}
		long num17 = 0L;
		long num18 = 0L;
		long num19 = 0L;
		long num20 = 0L;
		long num21 = 0L;
		long num22 = 0L;
		long num23 = 0L;
		long num24 = 0L;
		long num25 = 0L;
		long num26 = 0L;
		long num27 = 0L;
		long num28 = 0L;
		long num29 = 0L;
		long num30 = 0L;
		long num31 = 0L;
		long num32 = 0L;
		long[] array6 = new long[num2];
		long[] array7 = new long[num2];
		long[] array8 = new long[num2];
		List<string> list12 = new List<string>();
		list12.Add("MESH");
		list12.Add("SUBMESH");
		FileStream fileStream = global::n.a(A_1);
		string a_2 = A_2 ? ap : ao;
		global::n.a(fileStream, a_2);
		_ = fileStream.Position;
		num17 = fileStream.Position;
		global::n.a(fileStream, default(uint));
		global::n.a(fileStream, default(uint));
		num23 = fileStream.Position;
		int num33 = num2 + 1;
		global::n.a(fileStream, (ushort)num33);
		for (int num34 = 0; num34 < num33; num34++)
		{
			global::n.a(fileStream, default(uint));
			global::n.a(fileStream, default(uint));
		}
		num24 = fileStream.Position;
		global::n.a(fileStream, default(uint));
		global::n.a(fileStream, default(ushort));
		num18 = fileStream.Position;
		global::n.a(fileStream, (ushort)list12.IndexOf("MESH"));
		list12.Add(item);
		global::n.a(fileStream, (ushort)list12.IndexOf(item));
		global::n.a(fileStream, num);
		num20 = fileStream.Position;
		global::n.a(fileStream, default(uint));
		global::n.a(fileStream, default(uint));
		list12.Add(text);
		global::n.a(fileStream, (ushort)list12.IndexOf(text));
		num21 = fileStream.Position;
		global::n.a(fileStream, default(uint));
		global::n.a(fileStream, default(uint));
		num22 = fileStream.Position;
		global::n.a(fileStream, (ushort)list.Count);
		for (int num35 = 0; num35 < list.Count; num35++)
		{
			list12.Add(((Object)list[num35]).get_name());
			global::n.a(fileStream, (ushort)list12.IndexOf(((Object)list[num35]).get_name()));
		}
		global::n.a(fileStream, default(uint));
		global::n.a(fileStream, default(uint));
		num19 = fileStream.Position - num18;
		for (int num36 = 0; num36 < num2; num36++)
		{
			array6[num36] = fileStream.Position;
			global::n.a(fileStream, (ushort)list12.IndexOf("SUBMESH"));
			global::n.a(fileStream, default(ushort));
			global::n.a(fileStream, default(uint));
			global::n.a(fileStream, default(uint));
			global::n.a(fileStream, (ushort)array[num36].Count);
			for (int num37 = 0; num37 < array[num36].Count; num37++)
			{
				global::n.a(fileStream, default(uint));
				global::n.a(fileStream, default(uint));
				global::n.a(fileStream, default(uint));
				global::n.a(fileStream, default(uint));
			}
			array7[num36] = fileStream.Position;
			array8[num36] = array7[num36] - array6[num36];
		}
		num25 = fileStream.Position;
		for (int num38 = 0; num38 < list12.Count; num38++)
		{
			global::n.a(fileStream, list12[num38]);
		}
		num26 = fileStream.Position - num25;
		num27 = fileStream.Position;
		if (A_2)
		{
			for (int num39 = 0; num39 < list2.Count; num39++)
			{
				b b = list2[num39];
				Vector3 val = b.b;
				global::n.a(fileStream, global::f.a(0f - val.x), global::f.a(val.y), global::f.a(val.z));
				if (z[1] == 1)
				{
					Vector3 val2 = b.c;
					global::n.a(fileStream, (byte)(((double)(0f - val2.x) + 1.0) / 2.0 * 255.0), (byte)(((double)val2.y + 1.0) / 2.0 * 255.0), (byte)(((double)val2.z + 1.0) / 2.0 * 255.0));
				}
				if (z[2] == 1)
				{
					Color val3 = b.d;
					global::n.a(fileStream, (byte)(val3.r * 255f), (byte)(val3.g * 255f), (byte)(val3.b * 255f), (byte)(val3.a * 255f));
				}
				if (z[3] == 1)
				{
					Vector2 val4 = b.e;
					global::n.a(fileStream, global::f.a(val4.x), global::f.a(0f - val4.y + 1f));
				}
				if (z[4] == 1)
				{
					Vector2 val5 = b.f;
					global::n.a(fileStream, global::f.a(val5.x), global::f.a(0f - val5.y + 1f));
				}
				if (z[5] == 1)
				{
					Vector4 val6 = b.g;
					Vector4 val7 = b.h;
					global::n.a(fileStream, (byte)(val6.x * 255f), (byte)(val6.y * 255f), (byte)(val6.z * 255f), (byte)(val6.w * 255f));
					global::n.a(fileStream, (byte)val7.x, (byte)val7.y, (byte)val7.z, (byte)val7.w);
				}
				if (z[6] == 1)
				{
					Vector4 val8 = b.i;
					global::n.a(fileStream, (byte)(((double)(0f - val8.x) + 1.0) / 2.0 * 255.0), (byte)(((double)val8.y + 1.0) / 2.0 * 255.0), (byte)(((double)val8.z + 1.0) / 2.0 * 255.0), (byte)(((double)val8.w + 1.0) / 2.0 * 255.0));
				}
			}
		}
		else
		{
			for (int num40 = 0; num40 < list2.Count; num40++)
			{
				b b = list2[num40];
				Vector3 val9 = b.b;
				global::n.a(fileStream, val9.x * -1f, val9.y, val9.z);
				if (z[1] == 1)
				{
					Vector3 val10 = b.c;
					global::n.a(fileStream, val10.x * -1f, val10.y, val10.z);
				}
				if (z[2] == 1)
				{
					Color val11 = b.d;
					global::n.a(fileStream, val11.r, val11.g, val11.b, val11.a);
				}
				if (z[3] == 1)
				{
					Vector2 val12 = b.e;
					global::n.a(fileStream, val12.x, 0f - val12.y + 1f);
				}
				if (z[4] == 1)
				{
					Vector2 val13 = b.f;
					global::n.a(fileStream, val13.x, 0f - val13.y + 1f);
				}
				if (z[5] == 1)
				{
					Vector4 val14 = b.g;
					Vector4 val15 = b.h;
					global::n.a(fileStream, val14.x, val14.y, val14.z, val14.w);
					global::n.a(fileStream, (byte)val15.x, (byte)val15.y, (byte)val15.z, (byte)val15.w);
				}
				if (z[6] == 1)
				{
					Vector4 val16 = b.i;
					global::n.a(fileStream, val16.x * -1f, val16.y, val16.z, val16.w);
				}
			}
		}
		num28 = fileStream.Position - num27;
		num29 = fileStream.Position;
		if ((int)sharedMesh.get_indexFormat() == 1 && list2.Count > 65535)
		{
			for (int num41 = 0; num41 < list3.Count; num41++)
			{
				global::n.a(fileStream, (uint)list3[num41]);
			}
		}
		else
		{
			for (int num42 = 0; num42 < list3.Count; num42++)
			{
				global::n.a(fileStream, (ushort)list3[num42]);
			}
		}
		num30 = fileStream.Position - num29;
		if (sharedMesh.get_bindposes() != null && sharedMesh.get_bindposes().Length != 0)
		{
			Matrix4x4[] array9 = (Matrix4x4[])(object)new Matrix4x4[sharedMesh.get_bindposes().Length];
			for (int num43 = 0; num43 < sharedMesh.get_bindposes().Length; num43++)
			{
				array9[num43] = sharedMesh.get_bindposes()[num43];
				array9[num43] = ((Matrix4x4)(ref array9[num43])).get_inverse();
				global::o.a(((Matrix4x4)(ref array9[num43])).get_transpose(), out Vector3 A_3, out Quaternion A_4, out Vector3 A_5);
				A_5.x *= -1f;
				A_4.x *= -1f;
				A_4.w *= -1f;
				((Quaternion)(ref A_4)).Normalize();
				array9[num43] = Matrix4x4.TRS(A_5, A_4, A_3);
			}
			num31 = fileStream.Position;
			for (int num44 = 0; num44 < sharedMesh.get_bindposes().Length; num44++)
			{
				Matrix4x4 inverse = ((Matrix4x4)(ref array9[num44])).get_inverse();
				for (int num45 = 0; num45 < 16; num45++)
				{
					global::n.a(fileStream, ((Matrix4x4)(ref inverse)).get_Item(num45));
				}
			}
			num32 = fileStream.Position;
			for (int num46 = 0; num46 < num2; num46++)
			{
				for (int num47 = 0; num47 < array[num46].Count; num47++)
				{
					for (int num48 = 0; num48 < array[num46][num47].Count; num48++)
					{
						global::n.a(fileStream, (ushort)array[num46][num47][num48]);
					}
				}
			}
			_ = fileStream.Position;
		}
		uint num49 = 0u;
		uint num50 = 0u;
		uint num51 = 0u;
		long num52 = num32 - num25;
		for (int num53 = 0; num53 < num2; num53++)
		{
			fileStream.Position = array6[num53] + 4;
			if (num2 == 1)
			{
				num49 = 0u;
				num50 = (uint)(((int)sharedMesh.get_indexFormat() == 1) ? (num30 / 4) : (num30 / 2));
			}
			else if (num53 == 0)
			{
				num49 = num51;
				num50 = (uint)array5[num53];
			}
			else if (num53 < num2 - 1)
			{
				num49 = num51;
				num50 = (uint)array5[num53];
			}
			else
			{
				num49 = num51;
				num50 = (uint)array5[num53];
			}
			global::n.a(fileStream, num49);
			global::n.a(fileStream, num50);
			num51 += num50;
			fileStream.Position += 2L;
			int num54 = 0;
			for (int num55 = 0; num55 < array[num53].Count; num55++)
			{
				global::n.a(fileStream, (uint)(num54 + (int)num49));
				global::n.a(fileStream, (uint)(array2[num53][num55] - num54));
				num54 = array2[num53][num55];
				global::n.a(fileStream, (uint)num52);
				global::n.a(fileStream, (uint)(array[num53][num55].Count * 2));
				num52 += array[num53][num55].Count * 2;
			}
		}
		fileStream.Position = num20;
		global::n.a(fileStream, (uint)(num27 - num25));
		global::n.a(fileStream, (uint)list2.Count);
		fileStream.Position = num21;
		global::n.a(fileStream, (uint)(num29 - num25));
		global::n.a(fileStream, (uint)num30);
		fileStream.Position = num22 + (list.Count + 1) * 2;
		global::n.a(fileStream, (uint)(num31 - num25));
		global::n.a(fileStream, (uint)(num32 - num31));
		fileStream.Position = num24;
		global::n.a(fileStream, default(uint));
		global::n.a(fileStream, (ushort)list12.Count);
		_ = fileStream.Position;
		fileStream.Position = num23 + 2;
		global::n.a(fileStream, (uint)num18);
		global::n.a(fileStream, (uint)num19);
		for (int num56 = 0; num56 < num2; num56++)
		{
			global::n.a(fileStream, (uint)array6[num56]);
			global::n.a(fileStream, (uint)array8[num56]);
		}
		fileStream.Position = num17;
		global::n.a(fileStream, (uint)num25);
		global::n.a(fileStream, (uint)(num25 + num26 + num28 + num30 + array8[0]));
		fileStream.Close();
	}

	private static List<int> a(c A_0)
	{
		//IL_000c: Unknown result type (might be due to invalid IL or missing references)
		//IL_0011: Unknown result type (might be due to invalid IL or missing references)
		//IL_0018: Unknown result type (might be due to invalid IL or missing references)
		//IL_001d: Unknown result type (might be due to invalid IL or missing references)
		//IL_0024: Unknown result type (might be due to invalid IL or missing references)
		//IL_0029: Unknown result type (might be due to invalid IL or missing references)
		//IL_002b: Unknown result type (might be due to invalid IL or missing references)
		//IL_003b: Unknown result type (might be due to invalid IL or missing references)
		//IL_0048: Unknown result type (might be due to invalid IL or missing references)
		//IL_0058: Unknown result type (might be due to invalid IL or missing references)
		//IL_0065: Unknown result type (might be due to invalid IL or missing references)
		//IL_0075: Unknown result type (might be due to invalid IL or missing references)
		//IL_0082: Unknown result type (might be due to invalid IL or missing references)
		//IL_0092: Unknown result type (might be due to invalid IL or missing references)
		//IL_009f: Unknown result type (might be due to invalid IL or missing references)
		//IL_00af: Unknown result type (might be due to invalid IL or missing references)
		//IL_00bc: Unknown result type (might be due to invalid IL or missing references)
		//IL_00cc: Unknown result type (might be due to invalid IL or missing references)
		//IL_00d9: Unknown result type (might be due to invalid IL or missing references)
		//IL_00e9: Unknown result type (might be due to invalid IL or missing references)
		//IL_00f6: Unknown result type (might be due to invalid IL or missing references)
		//IL_0106: Unknown result type (might be due to invalid IL or missing references)
		//IL_0113: Unknown result type (might be due to invalid IL or missing references)
		//IL_0123: Unknown result type (might be due to invalid IL or missing references)
		//IL_0130: Unknown result type (might be due to invalid IL or missing references)
		//IL_0140: Unknown result type (might be due to invalid IL or missing references)
		//IL_014d: Unknown result type (might be due to invalid IL or missing references)
		//IL_015d: Unknown result type (might be due to invalid IL or missing references)
		//IL_016a: Unknown result type (might be due to invalid IL or missing references)
		//IL_017a: Unknown result type (might be due to invalid IL or missing references)
		List<int> list = new List<int>();
		Vector4 val = A_0.a.h;
		Vector4 val2 = A_0.b.h;
		Vector4 val3 = A_0.c.h;
		if (list.IndexOf((int)val.x) == -1)
		{
			list.Add((int)val.x);
		}
		if (list.IndexOf((int)val.y) == -1)
		{
			list.Add((int)val.y);
		}
		if (list.IndexOf((int)val.z) == -1)
		{
			list.Add((int)val.z);
		}
		if (list.IndexOf((int)val.w) == -1)
		{
			list.Add((int)val.w);
		}
		if (list.IndexOf((int)val2.x) == -1)
		{
			list.Add((int)val2.x);
		}
		if (list.IndexOf((int)val2.y) == -1)
		{
			list.Add((int)val2.y);
		}
		if (list.IndexOf((int)val2.z) == -1)
		{
			list.Add((int)val2.z);
		}
		if (list.IndexOf((int)val2.w) == -1)
		{
			list.Add((int)val2.w);
		}
		if (list.IndexOf((int)val3.x) == -1)
		{
			list.Add((int)val3.x);
		}
		if (list.IndexOf((int)val3.y) == -1)
		{
			list.Add((int)val3.y);
		}
		if (list.IndexOf((int)val3.z) == -1)
		{
			list.Add((int)val3.z);
		}
		if (list.IndexOf((int)val3.w) == -1)
		{
			list.Add((int)val3.w);
		}
		return list;
	}

	private static List<int> a(List<int> A_0, List<int> A_1)
	{
		List<int> list = new List<int>();
		for (int i = 0; i < A_0.Count; i++)
		{
			if (A_1.IndexOf(A_0[i]) == -1)
			{
				list.Add(A_0[i]);
			}
		}
		return list;
	}

	private static void a(List<int> A_0, b A_1)
	{
		if (A_1.j)
		{
			for (int i = 0; i < 4; i++)
			{
				((Vector4)(ref A_1.h)).set_Item(i, (float)A_0.IndexOf((int)((Vector4)(ref A_1.h)).get_Item(i)));
			}
			A_1.j = false;
		}
	}

	private static b a(b A_0, int A_1, int A_2, List<b> A_3)
	{
		if (A_0.k == -1 && A_0.l == -1)
		{
			A_0.k = A_1;
			A_0.l = A_2;
			return A_0;
		}
		if (A_0.k == A_1 && A_0.l == A_2)
		{
			return A_0;
		}
		if (A_0.m == null)
		{
			A_0.m = new Dictionary<string, int>();
			b b = new b();
			A_3.Add(b);
			b.n(A_0);
			b.a = A_3.Count - 1;
			A_0.m.Add(A_1.ToString() + "," + A_2.ToString(), A_3.Count - 1);
			return b;
		}
		if (A_0.m.ContainsKey(A_1.ToString() + "," + A_2.ToString()))
		{
			return A_3[A_0.m[A_1.ToString() + "," + A_2.ToString()]];
		}
		b b2 = new b();
		A_3.Add(b2);
		b2.n(A_0);
		b2.a = A_3.Count - 1;
		A_0.m.Add(A_1.ToString() + "," + A_2.ToString(), A_3.Count - 1);
		return b2;
	}

	private static void a(GameObject A_0, global::g A_1, int A_2)
	{
		//IL_001b: Unknown result type (might be due to invalid IL or missing references)
		//IL_0020: Unknown result type (might be due to invalid IL or missing references)
		//IL_002a: Unknown result type (might be due to invalid IL or missing references)
		//IL_0039: Unknown result type (might be due to invalid IL or missing references)
		//IL_003f: Unknown result type (might be due to invalid IL or missing references)
		//IL_00ea: Unknown result type (might be due to invalid IL or missing references)
		//IL_00ef: Unknown result type (might be due to invalid IL or missing references)
		//IL_00f1: Unknown result type (might be due to invalid IL or missing references)
		//IL_00f6: Unknown result type (might be due to invalid IL or missing references)
		//IL_0116: Unknown result type (might be due to invalid IL or missing references)
		//IL_011b: Unknown result type (might be due to invalid IL or missing references)
		//IL_011d: Unknown result type (might be due to invalid IL or missing references)
		//IL_0136: Unknown result type (might be due to invalid IL or missing references)
		//IL_013b: Unknown result type (might be due to invalid IL or missing references)
		//IL_0140: Unknown result type (might be due to invalid IL or missing references)
		//IL_01ae: Unknown result type (might be due to invalid IL or missing references)
		//IL_01b3: Unknown result type (might be due to invalid IL or missing references)
		//IL_02af: Unknown result type (might be due to invalid IL or missing references)
		//IL_02c4: Unknown result type (might be due to invalid IL or missing references)
		//IL_02d9: Unknown result type (might be due to invalid IL or missing references)
		//IL_0312: Unknown result type (might be due to invalid IL or missing references)
		//IL_0317: Unknown result type (might be due to invalid IL or missing references)
		//IL_031f: Unknown result type (might be due to invalid IL or missing references)
		//IL_0324: Unknown result type (might be due to invalid IL or missing references)
		//IL_032c: Unknown result type (might be due to invalid IL or missing references)
		//IL_0331: Unknown result type (might be due to invalid IL or missing references)
		//IL_0333: Unknown result type (might be due to invalid IL or missing references)
		//IL_033a: Unknown result type (might be due to invalid IL or missing references)
		//IL_034c: Unknown result type (might be due to invalid IL or missing references)
		//IL_0353: Unknown result type (might be due to invalid IL or missing references)
		//IL_0366: Unknown result type (might be due to invalid IL or missing references)
		//IL_036d: Unknown result type (might be due to invalid IL or missing references)
		//IL_0387: Unknown result type (might be due to invalid IL or missing references)
		//IL_038e: Unknown result type (might be due to invalid IL or missing references)
		//IL_03a0: Unknown result type (might be due to invalid IL or missing references)
		//IL_03a7: Unknown result type (might be due to invalid IL or missing references)
		//IL_03ba: Unknown result type (might be due to invalid IL or missing references)
		//IL_03c1: Unknown result type (might be due to invalid IL or missing references)
		//IL_03db: Unknown result type (might be due to invalid IL or missing references)
		//IL_03e2: Unknown result type (might be due to invalid IL or missing references)
		//IL_03f4: Unknown result type (might be due to invalid IL or missing references)
		//IL_03fb: Unknown result type (might be due to invalid IL or missing references)
		//IL_040e: Unknown result type (might be due to invalid IL or missing references)
		//IL_0415: Unknown result type (might be due to invalid IL or missing references)
		//IL_046c: Unknown result type (might be due to invalid IL or missing references)
		//IL_046e: Unknown result type (might be due to invalid IL or missing references)
		//IL_0470: Unknown result type (might be due to invalid IL or missing references)
		//IL_0475: Unknown result type (might be due to invalid IL or missing references)
		//IL_0477: Unknown result type (might be due to invalid IL or missing references)
		//IL_0479: Unknown result type (might be due to invalid IL or missing references)
		//IL_047e: Unknown result type (might be due to invalid IL or missing references)
		//IL_0483: Unknown result type (might be due to invalid IL or missing references)
		//IL_0487: Unknown result type (might be due to invalid IL or missing references)
		//IL_04a7: Unknown result type (might be due to invalid IL or missing references)
		//IL_04b2: Unknown result type (might be due to invalid IL or missing references)
		//IL_04b8: Unknown result type (might be due to invalid IL or missing references)
		//IL_04c6: Unknown result type (might be due to invalid IL or missing references)
		//IL_04cd: Unknown result type (might be due to invalid IL or missing references)
		//IL_04d2: Unknown result type (might be due to invalid IL or missing references)
		//IL_04d7: Unknown result type (might be due to invalid IL or missing references)
		//IL_04f0: Unknown result type (might be due to invalid IL or missing references)
		//IL_04f5: Unknown result type (might be due to invalid IL or missing references)
		//IL_058e: Unknown result type (might be due to invalid IL or missing references)
		//IL_0593: Unknown result type (might be due to invalid IL or missing references)
		//IL_059e: Unknown result type (might be due to invalid IL or missing references)
		//IL_05a3: Unknown result type (might be due to invalid IL or missing references)
		//IL_05ae: Unknown result type (might be due to invalid IL or missing references)
		//IL_05b3: Unknown result type (might be due to invalid IL or missing references)
		//IL_0aa5: Unknown result type (might be due to invalid IL or missing references)
		//IL_0aaa: Unknown result type (might be due to invalid IL or missing references)
		//IL_0ab6: Unknown result type (might be due to invalid IL or missing references)
		//IL_0ac6: Unknown result type (might be due to invalid IL or missing references)
		//IL_0ad0: Unknown result type (might be due to invalid IL or missing references)
		//IL_0adf: Unknown result type (might be due to invalid IL or missing references)
		//IL_0ae4: Unknown result type (might be due to invalid IL or missing references)
		//IL_0af0: Unknown result type (might be due to invalid IL or missing references)
		//IL_0b00: Unknown result type (might be due to invalid IL or missing references)
		//IL_0b0a: Unknown result type (might be due to invalid IL or missing references)
		//IL_0b19: Unknown result type (might be due to invalid IL or missing references)
		//IL_0b1e: Unknown result type (might be due to invalid IL or missing references)
		//IL_0b2a: Unknown result type (might be due to invalid IL or missing references)
		//IL_0b34: Unknown result type (might be due to invalid IL or missing references)
		TerrainData terrainData = A_0.GetComponent<Terrain>().get_terrainData();
		int heightmapWidth = terrainData.get_heightmapWidth();
		int heightmapHeight = terrainData.get_heightmapHeight();
		Vector3 size = terrainData.get_size();
		int num = global::p.l;
		Vector3 val = default(Vector3);
		((Vector3)(ref val))._002Ector(size.x / (float)(heightmapWidth - 1) * (float)num, size.y, size.z / (float)(heightmapHeight - 1) * (float)num);
		Vector2 val2 = default(Vector2);
		((Vector2)(ref val2))._002Ector(1f / (float)(heightmapWidth - 1), 1f / (float)(heightmapHeight - 1));
		float[,] heights = terrainData.GetHeights(0, 0, heightmapWidth, heightmapHeight);
		heightmapWidth = (heightmapWidth - 1) / num + 1;
		heightmapHeight = (heightmapHeight - 1) / num + 1;
		Vector3[] array = (Vector3[])(object)new Vector3[heightmapWidth * heightmapHeight];
		Vector3[] array2 = (Vector3[])(object)new Vector3[heightmapWidth * heightmapHeight];
		Vector2[] array3 = (Vector2[])(object)new Vector2[heightmapWidth * heightmapHeight];
		int[] array4 = new int[(heightmapWidth - 1) * (heightmapHeight - 1) * 6];
		for (int i = 0; i < heightmapHeight; i++)
		{
			for (int j = 0; j < heightmapWidth; j++)
			{
				array[i * heightmapWidth + j] = Vector3.Scale(new Vector3((float)i, heights[j * num, i * num], (float)j), val);
				array3[i * heightmapWidth + j] = Vector2.Scale(new Vector2((float)(j * num), 1f - (float)(i * num)), val2) - new Vector2(0f, 1f / (float)(terrainData.get_heightmapHeight() - 1));
				float num2 = array3[i * heightmapWidth + j].x;
				float num3 = array3[i * heightmapWidth + j].y;
				array3[i * heightmapWidth + j] = new Vector2(num2 * Mathf.Cos((float)Math.PI / 2f) - num3 * Mathf.Sin((float)Math.PI / 2f), num2 * Mathf.Sin((float)Math.PI / 2f) + num3 * Mathf.Cos((float)Math.PI / 2f));
			}
		}
		int num4 = 0;
		for (int k = 0; k < heightmapHeight - 1; k++)
		{
			for (int l = 0; l < heightmapWidth - 1; l++)
			{
				array4[num4++] = k * heightmapWidth + l;
				array4[num4++] = k * heightmapWidth + l + 1;
				array4[num4++] = (k + 1) * heightmapWidth + l;
				array4[num4++] = (k + 1) * heightmapWidth + l;
				array4[num4++] = k * heightmapWidth + l + 1;
				array4[num4++] = (k + 1) * heightmapWidth + l + 1;
			}
		}
		for (int m = 0; m < array.Length; m++)
		{
			List<Vector3> list = new List<Vector3>();
			for (int n = 0; n < array4.Length; n += 3)
			{
				if (array4[n] == m || array4[n + 1] == m || array4[n + 2] == m)
				{
					list.Add(array[array4[n]]);
					list.Add(array[array4[n + 1]]);
					list.Add(array[array4[n + 2]]);
				}
			}
			float num5 = 0f;
			List<float> list2 = new List<float>();
			List<Vector3> list3 = new List<Vector3>();
			for (int num6 = 0; num6 < list.Count; num6 += 3)
			{
				Vector3 val3 = list[num6];
				Vector3 val4 = list[num6 + 1];
				Vector3 val5 = list[num6 + 2];
				float num7 = Mathf.Sqrt(Mathf.Pow(val3.x - val4.x, 2f) + Mathf.Pow(val3.y - val4.y, 2f) + Mathf.Pow(val3.z - val4.z, 2f));
				float num8 = Mathf.Sqrt(Mathf.Pow(val3.x - val5.x, 2f) + Mathf.Pow(val3.y - val5.y, 2f) + Mathf.Pow(val3.z - val5.z, 2f));
				float num9 = Mathf.Sqrt(Mathf.Pow(val5.x - val4.x, 2f) + Mathf.Pow(val5.y - val4.y, 2f) + Mathf.Pow(val5.z - val4.z, 2f));
				float num10 = (num7 + num8 + num9) / 2f;
				float num11 = Mathf.Sqrt(num10 * (num10 - num7) * (num10 - num8) * (num10 - num9));
				list2.Add(num11);
				num5 += num11;
				Vector3 val6 = Vector3.Cross(val3 - val4, val3 - val5);
				list3.Add(((Vector3)(ref val6)).get_normalized());
			}
			Vector3 val7 = default(Vector3);
			for (int num12 = 0; num12 < list3.Count; num12++)
			{
				val7 += list3[num12] * list2[num12] / num5;
			}
			array2[m] = ((Vector3)(ref val7)).get_normalized();
		}
		int num13 = 65534;
		List<List<d>> list4 = new List<List<d>>();
		List<d> list5 = new List<d>();
		list4.Add(list5);
		List<List<int>> list6 = new List<List<int>>();
		List<int> list7 = new List<int>();
		list6.Add(list7);
		List<int> list8 = new List<int>();
		d item = default(d);
		for (int num14 = 0; num14 < array4.Length; num14++)
		{
			if (list5.Count == num13)
			{
				list5 = new List<d>();
				list4.Add(list5);
				list7 = new List<int>();
				list6.Add(list7);
				list8 = new List<int>();
			}
			int num15 = array4[num14];
			item.a = array[num15];
			item.b = array2[num15];
			item.c = array3[num15];
			int num16 = list8.IndexOf(num15);
			if (num16 == -1)
			{
				list5.Add(item);
				list7.Add(list5.Count - 1);
				list8.Add(num15);
			}
			else
			{
				list7.Add(num16);
			}
		}
		int count = list4.Count;
		string text = a("terrain_" + ((Object)A_0).get_name(), A_1: true);
		string text2 = "terrain/" + text + ".lm";
		A_1.a("meshPath", text2);
		global::g g = new global::g(global::g.a.e);
		A_1.d("materials", g);
		string str = a("terrain_" + ((Object)A_0).get_name(), A_1: true);
		string a_ = "terrain/" + str + ".lmat";
		global::g g2 = new global::g(global::g.a.d);
		g2.a("type", "Laya.ExtendTerrainMaterial");
		g2.a("path", a_);
		for (int num17 = 0; num17 < count; num17++)
		{
			g.f(g2);
		}
		string a_2 = q + "/" + text2;
		int num18 = 1 + count;
		ushort num19 = 32;
		string item2 = "POSITION,NORMAL,UV";
		long num20 = 0L;
		long num21 = 0L;
		long num22 = 0L;
		long[] array5 = new long[count];
		long num23 = 0L;
		long num24 = 0L;
		long num25 = 0L;
		long num26 = 0L;
		long num27 = 0L;
		long[] array6 = new long[count];
		long num28 = 0L;
		long num29 = 0L;
		long num30 = 0L;
		long num31 = 0L;
		long[] array7 = new long[count];
		long[] array8 = new long[count];
		long[] array9 = new long[count];
		List<string> list9 = new List<string>
		{
			"MESH",
			"SUBMESH"
		};
		FileStream fileStream = global::n.a(a_2);
		string a_3 = "LAYAMODEL:0301";
		global::n.a(fileStream, a_3);
		_ = fileStream.Position;
		num20 = fileStream.Position;
		global::n.a(fileStream, default(uint));
		global::n.a(fileStream, default(uint));
		num24 = fileStream.Position;
		global::n.a(fileStream, (ushort)num18);
		for (int num32 = 0; num32 < num18; num32++)
		{
			global::n.a(fileStream, default(uint));
			global::n.a(fileStream, default(uint));
		}
		num25 = fileStream.Position;
		global::n.a(fileStream, default(uint));
		global::n.a(fileStream, default(ushort));
		num21 = fileStream.Position;
		global::n.a(fileStream, (ushort)list9.IndexOf("MESH"));
		list9.Add(text);
		global::n.a(fileStream, (ushort)list9.IndexOf(text));
		global::n.a(fileStream, (ushort)list4.Count);
		list9.Add(item2);
		for (int num32 = 0; num32 < list4.Count; num32++)
		{
			array5[num32] = fileStream.Position;
			global::n.a(fileStream, default(uint));
			global::n.a(fileStream, default(uint));
			global::n.a(fileStream, (ushort)list9.IndexOf(item2));
		}
		num23 = fileStream.Position;
		global::n.a(fileStream, default(uint));
		global::n.a(fileStream, default(uint));
		_ = fileStream.Position;
		global::n.a(fileStream, default(ushort));
		global::n.a(fileStream, default(uint));
		global::n.a(fileStream, default(uint));
		global::n.a(fileStream, default(uint));
		global::n.a(fileStream, default(uint));
		num22 = fileStream.Position - num21;
		for (int num32 = 0; num32 < count; num32++)
		{
			array7[num32] = fileStream.Position;
			global::n.a(fileStream, (ushort)list9.IndexOf("SUBMESH"));
			global::n.a(fileStream, default(ushort));
			global::n.a(fileStream, default(uint));
			global::n.a(fileStream, default(uint));
			global::n.a(fileStream, default(uint));
			global::n.a(fileStream, default(uint));
			global::n.a(fileStream, new ushort[1]
			{
				1
			});
			global::n.a(fileStream, default(uint));
			global::n.a(fileStream, default(uint));
			global::n.a(fileStream, default(uint));
			global::n.a(fileStream, default(uint));
			array8[num32] = fileStream.Position;
			array9[num32] = array8[num32] - array7[num32];
		}
		num26 = fileStream.Position;
		for (int num32 = 0; num32 < list9.Count; num32++)
		{
			global::n.a(fileStream, list9[num32]);
		}
		num27 = fileStream.Position - num26;
		num28 = fileStream.Position;
		for (int num32 = 0; num32 < list4.Count; num32++)
		{
			array6[num32] = fileStream.Position;
			List<d> list10 = list4[num32];
			for (int num33 = 0; num33 < list10.Count; num33++)
			{
				d d = list10[num33];
				Vector3 val8 = d.a;
				global::n.a(fileStream, val8.x * -1f, val8.y, val8.z);
				Vector3 val9 = d.b;
				global::n.a(fileStream, val9.x * -1f, val9.y, val9.z);
				Vector2 val10 = d.c;
				global::n.a(fileStream, val10.x, val10.y * -1f + 1f);
			}
		}
		num29 = fileStream.Position - num28;
		num30 = fileStream.Position;
		for (int num32 = 0; num32 < list6.Count; num32++)
		{
			List<int> list11 = list6[num32];
			for (int num33 = 0; num33 < list11.Count; num33++)
			{
				global::n.a(fileStream, (ushort)list11[num33]);
			}
		}
		num31 = fileStream.Position - num30;
		uint num34 = 0u;
		uint num35 = 0u;
		uint num36 = 0u;
		uint num37 = 0u;
		uint num38 = 0u;
		uint num39 = 0u;
		for (int num32 = 0; num32 < count; num32++)
		{
			fileStream.Position = array7[num32] + 2;
			global::n.a(fileStream, (ushort)num32);
			num34 = num36;
			num35 = (uint)list4[num32].Count;
			num37 = num39;
			num38 = (uint)list6[num32].Count;
			global::n.a(fileStream, num34);
			global::n.a(fileStream, num35);
			global::n.a(fileStream, num37);
			global::n.a(fileStream, num38);
			num36 += num35;
			num39 += num38;
			fileStream.Position += 2L;
			global::n.a(fileStream, num37);
			global::n.a(fileStream, num38);
		}
		for (int num32 = 0; num32 < list4.Count; num32++)
		{
			fileStream.Position = array5[num32];
			global::n.a(fileStream, (uint)(array6[num32] - num26));
			global::n.a(fileStream, (uint)(list4[num32].Count * num19));
		}
		fileStream.Position = num23;
		global::n.a(fileStream, (uint)(num30 - num26));
		global::n.a(fileStream, (uint)num31);
		fileStream.Position = num25;
		global::n.a(fileStream, default(uint));
		global::n.a(fileStream, (ushort)list9.Count);
		_ = fileStream.Position;
		fileStream.Position = num24 + 2;
		global::n.a(fileStream, (uint)num21);
		global::n.a(fileStream, (uint)num22);
		for (int num32 = 0; num32 < count; num32++)
		{
			global::n.a(fileStream, (uint)array7[num32]);
			global::n.a(fileStream, (uint)array9[num32]);
		}
		fileStream.Position = num20;
		global::n.a(fileStream, (uint)num26);
		global::n.a(fileStream, (uint)(num26 + num27 + num29 + num31 + array9[0]));
		fileStream.Close();
	}

	private static void a(GameObject A_0, global::g A_1)
	{
		//IL_01b6: Unknown result type (might be due to invalid IL or missing references)
		//IL_01bd: Expected O, but got Unknown
		//IL_01d3: Unknown result type (might be due to invalid IL or missing references)
		//IL_01d8: Unknown result type (might be due to invalid IL or missing references)
		//IL_0314: Unknown result type (might be due to invalid IL or missing references)
		//IL_0320: Unknown result type (might be due to invalid IL or missing references)
		//IL_0333: Unknown result type (might be due to invalid IL or missing references)
		//IL_033f: Unknown result type (might be due to invalid IL or missing references)
		//IL_0353: Unknown result type (might be due to invalid IL or missing references)
		//IL_0366: Unknown result type (might be due to invalid IL or missing references)
		TerrainData terrainData = A_0.GetComponent<Terrain>().get_terrainData();
		string text = a("terrain_" + ((Object)A_0).get_name(), A_1: true);
		string str = "terrain/" + text + ".lmat";
		string a_ = q + "/" + str;
		global::g g = new global::g(global::g.a.d);
		global::g g2 = new global::g(global::g.a.d);
		global::g g3 = new global::g(global::g.a.e);
		global::g g4 = new global::g(global::g.a.e);
		global::g g5 = new global::g(global::g.a.e);
		global::g a_2 = new global::g(global::g.a.e);
		g.a("version", aq);
		g.d("props", g2);
		g2.a("type", "Laya.ExtendTerrainMaterial");
		g2.a("name", text);
		g2.d("renderStates", g3);
		global::g g6 = new global::g(global::g.a.d);
		g3.f(g6);
		g6.d("cull", 2);
		g6.d("blend", 0);
		g6.d("srcBlend", 1);
		g6.d("dstBlend", 0);
		g6.d("depthWrite", A_1: true);
		g6.d("depthTest", 515);
		g2.d("alphaTest", A_1: false);
		g2.d("renderQueue", 1);
		g2.d("textures", g4);
		g2.d("vectors", g5);
		g2.d("defines", a_2);
		if (terrainData.get_alphamapTextures().Length > 0)
		{
			for (int i = 0; i < 1; i++)
			{
				global::g g7 = new global::g(global::g.a.d);
				g7.a("name", "splatAlphaTexture");
				Color[] pixels = terrainData.get_alphamapTextures()[i].GetPixels();
				int num = pixels.Length;
				int num2 = (int)Mathf.Sqrt((float)num);
				Texture2D val = (Texture2D)(object)new Texture2D(num2, num2);
				Color[] array = (Color[])(object)new Color[num];
				for (int j = 0; j < num; j++)
				{
					array[j] = pixels[j];
					if (array[j].a == 0f)
					{
						array[j].a = 0.03125f;
					}
				}
				val.SetPixels(array);
				val.Apply();
				FileStream fileStream = File.Open(q + "/terrain/splatAlphaTexture.png", FileMode.Create);
				new BinaryWriter(fileStream).Write(ImageConversion.EncodeToPNG(val));
				fileStream.Close();
				g7.a("path", "splatAlphaTexture.png");
				g4.f(g7);
			}
		}
		int num3 = terrainData.get_terrainLayers().Length;
		for (int k = 0; k < num3; k++)
		{
			TerrainLayer val2 = terrainData.get_terrainLayers()[k];
			global::g g8 = new global::g(global::g.a.d);
			g8.a("name", "diffuseTexture" + (k + 1));
			a(g8, val2.get_diffuseTexture(), v, a(a_, A_1: false));
			g4.f(g8);
			global::g g9 = new global::g(global::g.a.d);
			g9.a("name", "diffuseScaleOffset" + (k + 1));
			global::g g10 = new global::g(global::g.a.e);
			g10.d(terrainData.get_size().x / val2.get_tileSize().x);
			g10.d(terrainData.get_size().z / val2.get_tileSize().y);
			g10.d(val2.get_tileOffset().x);
			g10.d(val2.get_tileOffset().y);
			g9.d("value", g10);
			g5.f(g9);
		}
		global::g g11 = new global::g(global::g.a.d);
		g11.a("name", "albedo");
		global::g g12 = new global::g(global::g.a.e);
		g12.d(1f);
		g12.d(1f);
		g12.d(1f);
		g12.d(1f);
		g11.d("value", g12);
		g5.f(g11);
		global::g g13 = new global::g(global::g.a.d);
		g13.a("name", "ambientColor");
		global::g g14 = new global::g(global::g.a.e);
		g14.d(0f);
		g14.d(0f);
		g14.d(0f);
		g13.d("value", g14);
		g5.f(g13);
		global::g g15 = new global::g(global::g.a.d);
		g15.a("name", "diffuseColor");
		global::g g16 = new global::g(global::g.a.e);
		g16.d(1f);
		g16.d(1f);
		g16.d(1f);
		g15.d("value", g16);
		g5.f(g15);
		global::g g17 = new global::g(global::g.a.d);
		g17.a("name", "specularColor");
		global::g g18 = new global::g(global::g.a.e);
		g18.d(1f);
		g18.d(1f);
		g18.d(1f);
		g18.d(8f);
		g17.d("value", g18);
		g5.f(g17);
		global::n.a(a_, g);
	}

	private static void b(Material A_0, string A_1, string A_2)
	{
		//IL_07ce: Unknown result type (might be due to invalid IL or missing references)
		//IL_07d5: Expected O, but got Unknown
		//IL_083d: Unknown result type (might be due to invalid IL or missing references)
		//IL_0842: Unknown result type (might be due to invalid IL or missing references)
		//IL_084a: Unknown result type (might be due to invalid IL or missing references)
		//IL_084f: Unknown result type (might be due to invalid IL or missing references)
		//IL_0853: Unknown result type (might be due to invalid IL or missing references)
		//IL_0861: Unknown result type (might be due to invalid IL or missing references)
		//IL_086f: Unknown result type (might be due to invalid IL or missing references)
		//IL_087d: Unknown result type (might be due to invalid IL or missing references)
		//IL_08b8: Unknown result type (might be due to invalid IL or missing references)
		//IL_08bf: Expected O, but got Unknown
		//IL_09b0: Unknown result type (might be due to invalid IL or missing references)
		//IL_09b7: Expected O, but got Unknown
		//IL_0a10: Unknown result type (might be due to invalid IL or missing references)
		//IL_0a17: Expected O, but got Unknown
		//IL_0a8c: Unknown result type (might be due to invalid IL or missing references)
		//IL_0a91: Unknown result type (might be due to invalid IL or missing references)
		//IL_0a95: Unknown result type (might be due to invalid IL or missing references)
		//IL_0aa3: Unknown result type (might be due to invalid IL or missing references)
		//IL_0ab1: Unknown result type (might be due to invalid IL or missing references)
		//IL_0abf: Unknown result type (might be due to invalid IL or missing references)
		//IL_0afa: Unknown result type (might be due to invalid IL or missing references)
		//IL_0b01: Expected O, but got Unknown
		//IL_0b5a: Unknown result type (might be due to invalid IL or missing references)
		//IL_0b61: Expected O, but got Unknown
		//IL_0bba: Unknown result type (might be due to invalid IL or missing references)
		//IL_0bc1: Expected O, but got Unknown
		//IL_0c36: Unknown result type (might be due to invalid IL or missing references)
		//IL_0c3b: Unknown result type (might be due to invalid IL or missing references)
		//IL_0c3f: Unknown result type (might be due to invalid IL or missing references)
		//IL_0c4d: Unknown result type (might be due to invalid IL or missing references)
		//IL_0c5b: Unknown result type (might be due to invalid IL or missing references)
		//IL_0c69: Unknown result type (might be due to invalid IL or missing references)
		//IL_0cc0: Unknown result type (might be due to invalid IL or missing references)
		//IL_0cc5: Unknown result type (might be due to invalid IL or missing references)
		//IL_0cc9: Unknown result type (might be due to invalid IL or missing references)
		//IL_0cd7: Unknown result type (might be due to invalid IL or missing references)
		//IL_0ce5: Unknown result type (might be due to invalid IL or missing references)
		//IL_0cf3: Unknown result type (might be due to invalid IL or missing references)
		global::g g = new global::g(global::g.a.d);
		global::g g2 = new global::g(global::g.a.d);
		global::g g3 = new global::g(global::g.a.e);
		global::g g4 = new global::g(global::g.a.e);
		global::g g5 = new global::g(global::g.a.e);
		global::g g6 = new global::g(global::g.a.e);
		g.a("version", aq);
		g.d("props", g2);
		if (A_2 == "BlinnPhong")
		{
			g2.a("type", "Laya.BlinnPhongMaterial");
		}
		else if (A_2 == "Unlit")
		{
			g2.a("type", "Laya.UnlitMaterial");
		}
		else if (A_2 == "Effect")
		{
			g2.a("type", "Laya.EffectMaterial");
		}
		else if (A_2 == "PBR(Standard)")
		{
			g2.a("type", "Laya.PBRStandardMaterial");
		}
		else if (A_2 == "PBR(Specular)")
		{
			g2.a("type", "Laya.PBRSpecularMaterial");
		}
		else
		{
			g2.a("type", "Laya.BlinnPhongMaterial");
		}
		List<string> list = A_0.get_shaderKeywords().ToList();
		string name = ((Object)A_0).get_name();
		g2.a("name", name);
		g2.d("renderStates", g3);
		global::g g7 = new global::g(global::g.a.d);
		g3.f(g7);
		if (A_0.HasProperty("_Cull"))
		{
			g7.d("cull", A_0.GetInt("_Cull"));
		}
		else
		{
			g7.d("cull", 2);
		}
		if (list.IndexOf("_ALPHABLEND_ON") != -1)
		{
			g7.d("blend", 1);
		}
		else
		{
			g7.d("blend", 0);
		}
		if (A_0.HasProperty("_SrcBlend"))
		{
			switch (A_0.GetInt("_SrcBlend"))
			{
			case 0:
				g7.d("srcBlend", 0);
				break;
			case 1:
				g7.d("srcBlend", 1);
				break;
			case 2:
				g7.d("srcBlend", 774);
				break;
			case 3:
				g7.d("srcBlend", 768);
				break;
			case 4:
				g7.d("srcBlend", 775);
				break;
			case 5:
				g7.d("srcBlend", 770);
				break;
			case 6:
				g7.d("srcBlend", 769);
				break;
			case 7:
				g7.d("srcBlend", 772);
				break;
			case 8:
				g7.d("srcBlend", 773);
				break;
			case 9:
				g7.d("srcBlend", 776);
				break;
			case 10:
				g7.d("srcBlend", 771);
				break;
			default:
				g7.d("srcBlend", 1);
				break;
			}
		}
		else
		{
			g7.d("srcBlend", 1);
		}
		if (A_0.HasProperty("_DstBlend"))
		{
			switch (A_0.GetInt("_DstBlend"))
			{
			case 0:
				g7.d("dstBlend", 0);
				break;
			case 1:
				g7.d("dstBlend", 1);
				break;
			case 2:
				g7.d("dstBlend", 774);
				break;
			case 3:
				g7.d("dstBlend", 768);
				break;
			case 4:
				g7.d("dstBlend", 775);
				break;
			case 5:
				g7.d("dstBlend", 770);
				break;
			case 6:
				g7.d("dstBlend", 769);
				break;
			case 7:
				g7.d("dstBlend", 772);
				break;
			case 8:
				g7.d("dstBlend", 773);
				break;
			case 9:
				g7.d("dstBlend", 776);
				break;
			case 10:
				g7.d("dstBlend", 771);
				break;
			default:
				g7.d("dstBlend", 0);
				break;
			}
		}
		else
		{
			g7.d("dstBlend", 0);
		}
		if (A_0.HasProperty("_ZWrite"))
		{
			if (A_0.GetInt("_ZWrite") == 1)
			{
				g7.d("depthWrite", A_1: true);
			}
			else
			{
				g7.d("depthWrite", A_1: false);
			}
		}
		else
		{
			g7.d("depthWrite", A_1: true);
		}
		if (A_0.HasProperty("_ZTest"))
		{
			switch (A_0.GetInt("_ZTest"))
			{
			case 0:
				g7.d("depthTest", 0);
				break;
			case 1:
				g7.d("depthTest", 512);
				break;
			case 2:
				g7.d("depthTest", 513);
				break;
			case 3:
				g7.d("depthTest", 514);
				break;
			case 4:
				g7.d("depthTest", 515);
				break;
			case 5:
				g7.d("depthTest", 516);
				break;
			case 6:
				g7.d("depthTest", 517);
				break;
			case 7:
				g7.d("depthTest", 518);
				break;
			case 8:
				g7.d("depthTest", 519);
				break;
			default:
				g7.d("depthTest", 0);
				break;
			}
		}
		else
		{
			g7.d("depthTest", 515);
		}
		if (A_0.HasProperty("_IsVertexColor"))
		{
			g2.d("enableVertexColor", (A_0.GetInt("_IsVertexColor") != 0) ? true : false);
		}
		if (list.IndexOf("_ALPHATEST_ON") != -1)
		{
			g2.d("alphaTest", A_1: true);
		}
		else
		{
			g2.d("alphaTest", A_1: false);
		}
		if (A_0.HasProperty("_Cutoff"))
		{
			g2.d("alphaTestValue", A_0.GetFloat("_Cutoff"));
		}
		else
		{
			g2.d("alphaTestValue", 0.5f);
		}
		g2.d("renderQueue", A_0.get_renderQueue());
		if (A_0.HasProperty("_AlbedoIntensity"))
		{
			g2.d("albedoIntensity", A_0.GetFloat("_AlbedoIntensity"));
		}
		if (A_0.HasProperty("_Metallic"))
		{
			g2.d("metallic", A_0.GetFloat("_Metallic"));
		}
		if (A_0.HasProperty("_Glossiness"))
		{
			g2.d("smoothness", A_0.GetFloat("_Glossiness"));
		}
		if (A_0.HasProperty("_GlossMapScale"))
		{
			g2.d("smoothnessTextureScale", A_0.GetFloat("_GlossMapScale"));
		}
		if (A_0.HasProperty("_SmoothnessTextureChannel"))
		{
			g2.d("smoothnessSource", A_0.GetFloat("_SmoothnessTextureChannel"));
		}
		if (A_0.HasProperty("_BumpScale"))
		{
			g2.d("normalTextureScale", A_0.GetFloat("_BumpScale"));
		}
		if (A_0.HasProperty("_Parallax"))
		{
			g2.d("parallaxTextureScale", A_0.GetFloat("_Parallax"));
		}
		if (A_0.HasProperty("_OcclusionStrength"))
		{
			g2.d("occlusionTextureStrength", A_0.GetFloat("_OcclusionStrength"));
		}
		if (A_0.HasProperty("_Reflection"))
		{
			if ((double)A_0.GetFloat("_Reflection") == 1.0)
			{
				g2.d("enableReflection", A_1: true);
			}
			else
			{
				g2.d("enableReflection", A_1: false);
			}
		}
		if (A_0.HasProperty("_EnableEmission"))
		{
			if ((double)A_0.GetFloat("_EnableEmission") == 1.0)
			{
				g2.d("enableEmission", A_1: true);
			}
			else
			{
				g2.d("enableEmission", A_1: false);
			}
		}
		if (A_0.HasProperty("_MainTex"))
		{
			Texture2D val = (Texture2D)(object)(Texture2D)A_0.GetTexture("_MainTex");
			if ((Object)(object)val != (Object)null)
			{
				global::g g8 = new global::g(global::g.a.d);
				g8.a("name", "albedoTexture");
				a(g8, val, v, A_1, name);
				g4.f(g8);
			}
			global::g g9 = new global::g(global::g.a.d);
			g9.a("name", "tilingOffset");
			global::g g10 = new global::g(global::g.a.e);
			Vector2 textureScale = A_0.GetTextureScale("_MainTex");
			Vector2 textureOffset = A_0.GetTextureOffset("_MainTex");
			g10.d(textureScale.x);
			g10.d(textureScale.y);
			g10.d(textureOffset.x);
			g10.d(textureOffset.y);
			g9.d("value", g10);
			g5.f(g9);
		}
		if (A_0.HasProperty("_MetallicGlossMap"))
		{
			Texture2D val2 = (Texture2D)(object)(Texture2D)A_0.GetTexture("_MetallicGlossMap");
			if ((Object)(object)val2 != (Object)null)
			{
				global::g g11 = new global::g(global::g.a.d);
				g11.a("name", "metallicGlossTexture");
				a(g11, val2, v, A_1, name);
				g4.f(g11);
			}
		}
		if (A_0.HasProperty("_Lighting"))
		{
			if ((double)A_0.GetFloat("_Lighting") == 0.0)
			{
				g2.d("enableLighting", A_1: true);
			}
			else
			{
				g2.d("enableLighting", A_1: false);
			}
		}
		if (!A_0.HasProperty("_Lighting") || (A_0.HasProperty("_Lighting") && (double)A_0.GetFloat("_Lighting") == 0.0))
		{
			if (A_0.HasProperty("_Shininess"))
			{
				g2.d("shininess", A_0.GetFloat("_Shininess"));
			}
			if (A_0.HasProperty("_SpecGlossMap"))
			{
				Texture2D val3 = (Texture2D)(object)(Texture2D)A_0.GetTexture("_SpecGlossMap");
				if ((Object)(object)val3 != (Object)null)
				{
					global::g g12 = new global::g(global::g.a.d);
					g12.a("name", "specularTexture");
					a(g12, val3, v, A_1, name);
					g4.f(g12);
				}
			}
			if (A_0.HasProperty("_BumpMap"))
			{
				Texture2D val4 = (Texture2D)(object)(Texture2D)A_0.GetTexture("_BumpMap");
				if ((Object)(object)val4 != (Object)null)
				{
					global::g g13 = new global::g(global::g.a.d);
					g13.a("name", "normalTexture");
					a(g13, val4, v, A_1, name);
					g4.f(g13);
				}
			}
			global::g g14 = new global::g(global::g.a.d);
			g14.a("name", "specularColor");
			global::g g15 = new global::g(global::g.a.e);
			if (A_0.HasProperty("_SpecColor"))
			{
				Color color = A_0.GetColor("_SpecColor");
				g15.d(color.r);
				g15.d(color.g);
				g15.d(color.b);
				g15.d(color.a);
				g14.d("value", g15);
				g5.f(g14);
			}
		}
		if (A_0.HasProperty("_ParallaxMap"))
		{
			Texture2D val5 = (Texture2D)(object)(Texture2D)A_0.GetTexture("_ParallaxMap");
			if ((Object)(object)val5 != (Object)null)
			{
				global::g g16 = new global::g(global::g.a.d);
				g16.a("name", "parallaxTexture");
				a(g16, val5, v, A_1, name);
				g4.f(g16);
			}
		}
		if (A_0.HasProperty("_OcclusionMap"))
		{
			Texture2D val6 = (Texture2D)(object)(Texture2D)A_0.GetTexture("_OcclusionMap");
			if ((Object)(object)val6 != (Object)null)
			{
				global::g g17 = new global::g(global::g.a.d);
				g17.a("name", "occlusionTexture");
				a(g17, val6, v, A_1, name);
				g4.f(g17);
			}
		}
		if (A_0.HasProperty("_EmissionMap"))
		{
			Texture2D val7 = (Texture2D)(object)(Texture2D)A_0.GetTexture("_EmissionMap");
			if ((Object)(object)val7 != (Object)null)
			{
				global::g g18 = new global::g(global::g.a.d);
				g18.a("name", "emissionTexture");
				a(g18, val7, v, A_1, name);
				g4.f(g18);
			}
		}
		global::g g19 = new global::g(global::g.a.d);
		g19.a("name", "albedoColor");
		global::g g20 = new global::g(global::g.a.e);
		if (A_0.HasProperty("_Color"))
		{
			Color color2 = A_0.GetColor("_Color");
			g20.d(color2.r);
			g20.d(color2.g);
			g20.d(color2.b);
			g20.d(color2.a);
			g19.d("value", g20);
			g5.f(g19);
		}
		global::g g21 = new global::g(global::g.a.d);
		g21.a("name", "emissionColor");
		global::g g22 = new global::g(global::g.a.e);
		if (A_0.HasProperty("_EmissionColor"))
		{
			Color color3 = A_0.GetColor("_EmissionColor");
			g22.d(color3.r);
			g22.d(color3.g);
			g22.d(color3.b);
			g22.d(color3.a);
			g21.d("value", g22);
			g5.f(g21);
		}
		if ((A_2 == "PBR(Standard)" || A_2 == "PBR(Specular)") && A_0.HasProperty("_Mode") && A_0.GetInt("_Mode") == 3)
		{
			g6.k("ALPHAPREMULTIPLY");
		}
		if (A_2 == "Unlit")
		{
			if (A_0.HasProperty("_Mode") && A_0.GetInt("_Mode") == 3)
			{
				g6.k("ADDTIVEFOG");
			}
			if (A_0.HasProperty("_EnableVertexColor") && A_0.GetInt("_EnableVertexColor") == 1)
			{
				g6.k("ENABLEVERTEXCOLOR");
			}
		}
		g2.d("textures", g4);
		g2.d("vectors", g5);
		g2.d("defines", g6);
		global::n.a(A_1, g);
	}

	private static void a(Material A_0, string A_1, string A_2)
	{
		//IL_059f: Unknown result type (might be due to invalid IL or missing references)
		//IL_05a6: Expected O, but got Unknown
		//IL_060e: Unknown result type (might be due to invalid IL or missing references)
		//IL_0613: Unknown result type (might be due to invalid IL or missing references)
		//IL_061b: Unknown result type (might be due to invalid IL or missing references)
		//IL_0620: Unknown result type (might be due to invalid IL or missing references)
		//IL_0624: Unknown result type (might be due to invalid IL or missing references)
		//IL_0632: Unknown result type (might be due to invalid IL or missing references)
		//IL_0640: Unknown result type (might be due to invalid IL or missing references)
		//IL_064e: Unknown result type (might be due to invalid IL or missing references)
		//IL_06a5: Unknown result type (might be due to invalid IL or missing references)
		//IL_06aa: Unknown result type (might be due to invalid IL or missing references)
		//IL_06ae: Unknown result type (might be due to invalid IL or missing references)
		//IL_06bc: Unknown result type (might be due to invalid IL or missing references)
		//IL_06ca: Unknown result type (might be due to invalid IL or missing references)
		//IL_06d8: Unknown result type (might be due to invalid IL or missing references)
		((Object)A_0.get_shader()).get_name();
		global::g g = new global::g(global::g.a.d);
		global::g g2 = new global::g(global::g.a.d);
		global::g g3 = new global::g(global::g.a.e);
		global::g g4 = new global::g(global::g.a.e);
		global::g g5 = new global::g(global::g.a.e);
		global::g g6 = new global::g(global::g.a.e);
		g.a("version", aq);
		g.d("props", g2);
		if (A_2 == "Trail")
		{
			g2.a("type", "Laya.TrailMaterial");
		}
		else if (A_2 == "Unlit")
		{
			g2.a("type", "Laya.LineMaterial");
		}
		else if (A_2 == "Effect")
		{
			g2.a("type", "Laya.EffectMaterial");
		}
		else if (A_2 == "ShurikenParticle")
		{
			g2.a("type", "Laya.ShurikenParticleMaterial");
		}
		else
		{
			g2.a("type", "Laya.EffectMaterial");
		}
		g2.d("renderStates", g3);
		global::g g7 = new global::g(global::g.a.d);
		g3.f(g7);
		List<string> list = A_0.get_shaderKeywords().ToList();
		string name = ((Object)A_0).get_name();
		g2.a("name", name);
		g7.d("cull", 0);
		if (list.IndexOf("_ALPHABLEND_ON") != -1)
		{
			g7.d("blend", 1);
		}
		else
		{
			g7.d("blend", 0);
		}
		if (A_0.HasProperty("_SrcBlend"))
		{
			switch (A_0.GetInt("_SrcBlend"))
			{
			case 0:
				g7.d("srcBlend", 0);
				break;
			case 1:
				g7.d("srcBlend", 1);
				break;
			case 2:
				g7.d("srcBlend", 774);
				break;
			case 3:
				g7.d("srcBlend", 768);
				break;
			case 4:
				g7.d("srcBlend", 775);
				break;
			case 5:
				g7.d("srcBlend", 770);
				break;
			case 6:
				g7.d("srcBlend", 769);
				break;
			case 7:
				g7.d("srcBlend", 772);
				break;
			case 8:
				g7.d("srcBlend", 773);
				break;
			case 9:
				g7.d("srcBlend", 776);
				break;
			case 10:
				g7.d("srcBlend", 771);
				break;
			default:
				g7.d("srcBlend", 1);
				break;
			}
		}
		else
		{
			g7.d("srcBlend", 1);
		}
		if (A_0.HasProperty("_DstBlend"))
		{
			switch (A_0.GetInt("_DstBlend"))
			{
			case 0:
				g7.d("dstBlend", 0);
				break;
			case 1:
				g7.d("dstBlend", 1);
				break;
			case 2:
				g7.d("dstBlend", 774);
				break;
			case 3:
				g7.d("dstBlend", 768);
				break;
			case 4:
				g7.d("dstBlend", 775);
				break;
			case 5:
				g7.d("dstBlend", 770);
				break;
			case 6:
				g7.d("dstBlend", 769);
				break;
			case 7:
				g7.d("dstBlend", 772);
				break;
			case 8:
				g7.d("dstBlend", 773);
				break;
			case 9:
				g7.d("dstBlend", 776);
				break;
			case 10:
				g7.d("dstBlend", 771);
				break;
			default:
				g7.d("dstBlend", 0);
				break;
			}
		}
		else
		{
			g7.d("dstBlend", 0);
		}
		if (A_0.HasProperty("_ZWrite"))
		{
			if (A_0.GetInt("_ZWrite") == 1)
			{
				g7.d("depthWrite", A_1: true);
			}
			else
			{
				g7.d("depthWrite", A_1: false);
			}
		}
		else
		{
			g7.d("depthWrite", A_1: true);
		}
		if (A_0.HasProperty("_ZTest"))
		{
			switch (A_0.GetInt("_ZTest"))
			{
			case 0:
				g7.d("depthTest", 0);
				break;
			case 1:
				g7.d("depthTest", 512);
				break;
			case 2:
				g7.d("depthTest", 513);
				break;
			case 3:
				g7.d("depthTest", 514);
				break;
			case 4:
				g7.d("depthTest", 515);
				break;
			case 5:
				g7.d("depthTest", 516);
				break;
			case 6:
				g7.d("depthTest", 517);
				break;
			case 7:
				g7.d("depthTest", 518);
				break;
			case 8:
				g7.d("depthTest", 519);
				break;
			default:
				g7.d("depthTest", 0);
				break;
			}
		}
		else
		{
			g7.d("depthTest", 515);
		}
		if (list.IndexOf("_ALPHATEST_ON") != -1)
		{
			g2.d("alphaTest", A_1: true);
		}
		else
		{
			g2.d("alphaTest", A_1: false);
		}
		g2.d("renderQueue", 3000);
		if (A_0.HasProperty("_MainTex"))
		{
			Texture2D val = (Texture2D)(object)(Texture2D)A_0.GetTexture("_MainTex");
			if ((Object)(object)val != (Object)null)
			{
				global::g g8 = new global::g(global::g.a.d);
				g8.a("name", "texture");
				a(g8, val, v, A_1, name);
				g4.f(g8);
			}
			global::g g9 = new global::g(global::g.a.d);
			g9.a("name", "tilingOffset");
			global::g g10 = new global::g(global::g.a.e);
			Vector2 textureScale = A_0.GetTextureScale("_MainTex");
			Vector2 textureOffset = A_0.GetTextureOffset("_MainTex");
			g10.d(textureScale.x);
			g10.d(textureScale.y);
			g10.d(textureOffset.x);
			g10.d(textureOffset.y);
			g9.d("value", g10);
			g5.f(g9);
		}
		global::g g11 = new global::g(global::g.a.d);
		g11.a("name", "color");
		global::g g12 = new global::g(global::g.a.e);
		if (A_0.HasProperty("_TintColor"))
		{
			Color color = A_0.GetColor("_TintColor");
			g12.d(color.r);
			g12.d(color.g);
			g12.d(color.b);
			g12.d(color.a);
			g11.d("value", g12);
			g5.f(g11);
		}
		if (A_0.HasProperty("_Mode") && A_0.GetInt("_Mode") == 0)
		{
			g6.k("ADDTIVEFOG");
		}
		g2.d("textures", g4);
		g2.d("vectors", g5);
		g2.d("defines", g6);
		global::n.a(A_1, g);
	}

	private static void a(Material A_0, string A_1)
	{
		//IL_00a4: Unknown result type (might be due to invalid IL or missing references)
		//IL_00ab: Expected O, but got Unknown
		//IL_0104: Unknown result type (might be due to invalid IL or missing references)
		//IL_010b: Expected O, but got Unknown
		//IL_0180: Unknown result type (might be due to invalid IL or missing references)
		//IL_0185: Unknown result type (might be due to invalid IL or missing references)
		//IL_0189: Unknown result type (might be due to invalid IL or missing references)
		//IL_0197: Unknown result type (might be due to invalid IL or missing references)
		//IL_01a5: Unknown result type (might be due to invalid IL or missing references)
		//IL_01b3: Unknown result type (might be due to invalid IL or missing references)
		//IL_0209: Unknown result type (might be due to invalid IL or missing references)
		//IL_020e: Unknown result type (might be due to invalid IL or missing references)
		//IL_0212: Unknown result type (might be due to invalid IL or missing references)
		//IL_0221: Unknown result type (might be due to invalid IL or missing references)
		//IL_022f: Unknown result type (might be due to invalid IL or missing references)
		//IL_023e: Unknown result type (might be due to invalid IL or missing references)
		global::g g = new global::g(global::g.a.d);
		global::g g2 = new global::g(global::g.a.e);
		global::g g3 = new global::g(global::g.a.e);
		global::g a_ = new global::g(global::g.a.e);
		g.a("version", aq);
		global::g g4 = new global::g(global::g.a.d);
		g.d("props", g4);
		g4.a("type", "Laya.WaterPrimaryMaterial");
		string name = ((Object)A_0).get_name();
		g4.a("name", name);
		if (A_0.HasProperty("_WaveScale"))
		{
			g4.d("waveScale", A_0.GetFloat("_WaveScale"));
		}
		if (A_0.HasProperty("_ColorControl"))
		{
			Texture2D val = (Texture2D)(object)(Texture2D)A_0.GetTexture("_ColorControl");
			if ((Object)(object)val != (Object)null)
			{
				global::g g5 = new global::g(global::g.a.d);
				g5.a("name", "mainTexture");
				a(g5, val, v, A_1, name);
				g2.f(g5);
			}
		}
		if (A_0.HasProperty("_BumpMap"))
		{
			Texture2D val2 = (Texture2D)(object)(Texture2D)A_0.GetTexture("_BumpMap");
			if ((Object)(object)val2 != (Object)null)
			{
				global::g g6 = new global::g(global::g.a.d);
				g6.a("name", "normalTexture");
				a(g6, val2, v, A_1, name);
				g2.f(g6);
			}
		}
		global::g g7 = new global::g(global::g.a.d);
		g7.a("name", "horizonColor");
		global::g g8 = new global::g(global::g.a.e);
		if (A_0.HasProperty("_horizonColor"))
		{
			Color color = A_0.GetColor("_horizonColor");
			g8.d(color.r);
			g8.d(color.g);
			g8.d(color.b);
			g8.d(color.a);
			g7.d("value", g8);
			g3.f(g7);
		}
		global::g g9 = new global::g(global::g.a.d);
		g9.a("name", "waveSpeed");
		global::g g10 = new global::g(global::g.a.e);
		if (A_0.HasProperty("_WaveSpeed"))
		{
			Color color2 = A_0.GetColor("_WaveSpeed");
			g10.d(0f - color2.r);
			g10.d(color2.g);
			g10.d(0f - color2.b);
			g10.d(color2.a);
			g9.d("value", g10);
			g3.f(g9);
		}
		g4.d("textures", g2);
		g4.d("vectors", g3);
		g4.d("defines", a_);
		global::n.a(A_1, g);
	}

	private static void a(global::g A_0)
	{
		//IL_00b4: Unknown result type (might be due to invalid IL or missing references)
		//IL_00cb: Unknown result type (might be due to invalid IL or missing references)
		//IL_00d1: Invalid comparison between Unknown and I4
		//IL_00e3: Unknown result type (might be due to invalid IL or missing references)
		//IL_00e9: Invalid comparison between Unknown and I4
		//IL_0108: Unknown result type (might be due to invalid IL or missing references)
		//IL_012c: Unknown result type (might be due to invalid IL or missing references)
		//IL_0132: Invalid comparison between Unknown and I4
		global::g g = new global::g(global::g.a.e);
		A_0.d("lightmaps", g);
		LightmapData[] lightmaps = LightmapSettings.get_lightmaps();
		if (lightmaps == null || lightmaps.Length == 0)
		{
			return;
		}
		if (!GraphicsSettings.HasShaderDefine((BuiltinShaderDefine)26))
		{
			Debug.LogError((object)"LightMap Encoding should be Normal,Please set it in Player Setting");
		}
		for (int i = 0; i < lightmaps.Length; i++)
		{
			global::g g2 = new global::g(global::g.a.d);
			Texture2D lightmapColor = lightmaps[i].get_lightmapColor();
			if ((Object)(object)lightmapColor == (Object)null)
			{
				continue;
			}
			global::g g3 = new global::g(global::g.a.e);
			global::g g4 = new global::g(global::g.a.d);
			g2.d("constructParams", g3);
			g2.d("propertyParams", g4);
			g3.d(((Texture)lightmapColor).get_width());
			g3.d(((Texture)lightmapColor).get_height());
			g3.d(1);
			g3.f(A_0: false);
			if ((int)((Texture)lightmapColor).get_filterMode() == 0)
			{
				g4.d("filterMode", 0);
			}
			else if ((int)((Texture)lightmapColor).get_filterMode() == 1)
			{
				g4.d("filterMode", 1);
			}
			else if ((int)((Texture)lightmapColor).get_filterMode() == 2)
			{
				g4.d("filterMode", 2);
			}
			else
			{
				g4.d("filterMode", 0);
			}
			if ((int)((Texture)lightmapColor).get_wrapMode() == 0)
			{
				g4.d("wrapModeU", 0);
				g4.d("wrapModeV", 0);
			}
			else if ((int)((Texture)lightmapColor).get_wrapMode() == 1)
			{
				g4.d("wrapModeU", 1);
				g4.d("wrapModeV", 1);
			}
			else
			{
				g4.d("wrapModeU", 0);
				g4.d("wrapModeV", 0);
			}
			g4.d("anisoLevel", ((Texture)lightmapColor).get_anisoLevel());
			if (!((Object)(object)lightmapColor != (Object)null))
			{
				continue;
			}
			string assetPath = AssetDatabase.GetAssetPath(((Object)lightmapColor).GetInstanceID());
			if (string.IsNullOrEmpty(assetPath))
			{
				Debug.LogError((object)"LayaAir:can't select Auto Generate checkbox with generate Lighting.");
				continue;
			}
			g.f(g2);
			string path = q + "/" + Path.GetDirectoryName(assetPath);
			if (!Directory.Exists(path))
			{
				Directory.CreateDirectory(path);
			}
			string text = q + "/" + assetPath;
			text = text.Substring(0, text.LastIndexOf(".")) + ".png";
			object obj = (object)(AssetImporter.GetAtPath(assetPath) as TextureImporter);
			((TextureImporter)obj).set_isReadable(true);
			((TextureImporter)obj).set_textureCompression((TextureImporterCompression)0);
			AssetDatabase.ImportAsset(assetPath);
			FileStream fileStream = File.Open(text, FileMode.Create, FileAccess.ReadWrite);
			new BinaryWriter(fileStream).Write(ImageConversion.EncodeToPNG(lightmapColor));
			fileStream.Close();
			g2.a("path", assetPath.Split('.')[0] + ".png");
		}
	}

	private static void a(global::g A_0, Texture2D A_1, int A_2, string A_3 = null, string A_4 = null, string A_5 = "path")
	{
		//IL_00ae: Unknown result type (might be due to invalid IL or missing references)
		//IL_00b3: Unknown result type (might be due to invalid IL or missing references)
		//IL_00bb: Unknown result type (might be due to invalid IL or missing references)
		//IL_00c0: Unknown result type (might be due to invalid IL or missing references)
		//IL_00d3: Unknown result type (might be due to invalid IL or missing references)
		//IL_00d9: Invalid comparison between Unknown and I4
		//IL_00f7: Unknown result type (might be due to invalid IL or missing references)
		//IL_00fe: Invalid comparison between Unknown and I4
		//IL_0101: Unknown result type (might be due to invalid IL or missing references)
		//IL_0108: Invalid comparison between Unknown and I4
		//IL_010b: Unknown result type (might be due to invalid IL or missing references)
		//IL_0112: Invalid comparison between Unknown and I4
		//IL_0115: Unknown result type (might be due to invalid IL or missing references)
		//IL_011c: Invalid comparison between Unknown and I4
		//IL_0135: Unknown result type (might be due to invalid IL or missing references)
		//IL_013c: Invalid comparison between Unknown and I4
		//IL_013f: Unknown result type (might be due to invalid IL or missing references)
		//IL_0146: Invalid comparison between Unknown and I4
		//IL_0149: Unknown result type (might be due to invalid IL or missing references)
		//IL_0150: Invalid comparison between Unknown and I4
		//IL_0153: Unknown result type (might be due to invalid IL or missing references)
		//IL_015a: Invalid comparison between Unknown and I4
		//IL_0198: Unknown result type (might be due to invalid IL or missing references)
		//IL_019e: Invalid comparison between Unknown and I4
		//IL_01a1: Unknown result type (might be due to invalid IL or missing references)
		//IL_01a8: Invalid comparison between Unknown and I4
		//IL_01ab: Unknown result type (might be due to invalid IL or missing references)
		//IL_01b2: Invalid comparison between Unknown and I4
		//IL_01bf: Unknown result type (might be due to invalid IL or missing references)
		//IL_01c5: Invalid comparison between Unknown and I4
		//IL_01c8: Unknown result type (might be due to invalid IL or missing references)
		//IL_01cf: Invalid comparison between Unknown and I4
		//IL_01d2: Unknown result type (might be due to invalid IL or missing references)
		//IL_01d9: Invalid comparison between Unknown and I4
		//IL_043d: Unknown result type (might be due to invalid IL or missing references)
		//IL_0454: Unknown result type (might be due to invalid IL or missing references)
		//IL_045a: Invalid comparison between Unknown and I4
		//IL_046c: Unknown result type (might be due to invalid IL or missing references)
		//IL_0472: Invalid comparison between Unknown and I4
		//IL_0491: Unknown result type (might be due to invalid IL or missing references)
		//IL_04b5: Unknown result type (might be due to invalid IL or missing references)
		//IL_04bb: Invalid comparison between Unknown and I4
		if ((Object)(object)A_1 != (Object)null)
		{
			string assetPath = AssetDatabase.GetAssetPath(((Object)A_1).GetInstanceID());
			string a_ = q + "/" + Path.GetDirectoryName(assetPath);
			a_ = a(a_, A_1: false);
			if (!Directory.Exists(a_))
			{
				Directory.CreateDirectory(a_);
			}
			TextureImporter val = AssetImporter.GetAtPath(assetPath) as TextureImporter;
			if ((Object)(object)val == (Object)null)
			{
				Debug.LogError((object)(global::p.a + assetPath + " can't export   You should check the texture file format"));
				return;
			}
			string text = q + "/" + assetPath;
			text = text.Substring(0, text.LastIndexOf("."));
			TextureInfo textureInfo;
			if (!ai.ContainsKey(assetPath))
			{
				textureInfo = new TextureInfo();
				textureInfo.lastType = val.get_textureType();
				textureInfo.lastCompression = val.get_textureCompression();
				textureInfo.lastReadable = val.get_isReadable();
				if ((int)val.get_textureType() == 1)
				{
					val.set_textureType((TextureImporterType)0);
				}
				val.set_isReadable(true);
				val.set_textureCompression((TextureImporterCompression)0);
				AssetDatabase.ImportAsset(assetPath);
				if ((int)A_1.get_format() == 10 || (int)A_1.get_format() == 12 || (int)A_1.get_format() == 28 || (int)A_1.get_format() == 29)
				{
					Debug.LogError((object)("LayaAir: Texture " + assetPath + " can't Readable,maybe you should cancel  Override for PC,MAC&Linux Standalone  checkbox."));
					return;
				}
				if ((int)A_1.get_format() == 30 || (int)A_1.get_format() == 32 || (int)A_1.get_format() == 31 || (int)A_1.get_format() == 33)
				{
					Debug.LogError((object)("LayaAir: Texture" + assetPath + " can't Readable,maybe you should cancel  Override for iOS."));
					return;
				}
				textureInfo.Path = assetPath;
				textureInfo.SavePath = text;
				textureInfo.texture = A_1;
				ai.Add(assetPath, textureInfo);
				if ((int)A_1.get_format() == 3 || (int)A_1.get_format() == 10 || (int)A_1.get_format() == 28)
				{
					textureInfo.format = 0;
				}
				else if ((int)A_1.get_format() == 4 || (int)A_1.get_format() == 12 || (int)A_1.get_format() == 29)
				{
					textureInfo.format = 1;
				}
				else
				{
					textureInfo.format = 1;
				}
				if (val.get_mipmapEnabled())
				{
					textureInfo.MipMap = A_1.get_mipmapCount();
				}
				else
				{
					textureInfo.MipMap = 0;
				}
			}
			else
			{
				textureInfo = ai[assetPath];
			}
			switch (A_2)
			{
			case 0:
				if (textureInfo.format == 0)
				{
					string[] array = assetPath.Split('.');
					string text2 = array[array.Length - 1];
					string str = (ab.IndexOf(text2) == -1) ? ".jpg" : text2;
					text += str;
				}
				else
				{
					string[] array2 = assetPath.Split('.');
					string text3 = array2[array2.Length - 1];
					string str2 = (ab.IndexOf(text3) == -1) ? ".png" : text3;
					text += str2;
				}
				text = a(text, A_1: false);
				break;
			case 1:
				text += ".pvr";
				break;
			case 2:
				if (textureInfo.format == 0)
				{
					text += ".ktx";
				}
				else if (textureInfo.format == 1)
				{
					text += ".png";
				}
				break;
			default:
				Debug.LogError((object)"no format select");
				break;
			}
			textureInfo.SavePath = text;
			if (File.Exists(assetPath))
			{
				string a_2 = global::n.a(A_3, text);
				A_0.a(A_5, a_2);
				global::g g = new global::g(global::g.a.e);
				global::g g2 = new global::g(global::g.a.d);
				A_0.d("constructParams", g);
				A_0.d("propertyParams", g2);
				if (A_2 == 1)
				{
					int a_3 = Mathf.Max(((Texture)A_1).get_width(), ((Texture)A_1).get_height());
					g.d(a_3);
					g.d(a_3);
				}
				else
				{
					g.d(((Texture)A_1).get_width());
					g.d(((Texture)A_1).get_height());
				}
				if (textureInfo.format == 0)
				{
					switch (A_2)
					{
					case 0:
						g.d(0);
						break;
					case 1:
						g.d(11);
						break;
					case 2:
						g.d(5);
						break;
					}
				}
				else if (textureInfo.format == 1)
				{
					switch (A_2)
					{
					case 0:
						g.d(1);
						break;
					case 1:
						g.d(12);
						break;
					case 2:
						g.d(1);
						break;
					}
				}
				else
				{
					g.d(1);
				}
				if ((Object)(object)val != (Object)null)
				{
					g.f(val.get_mipmapEnabled());
				}
				else
				{
					g.f(A_0: false);
				}
				if ((int)((Texture)A_1).get_filterMode() == 0)
				{
					g2.d("filterMode", 0);
				}
				else if ((int)((Texture)A_1).get_filterMode() == 1)
				{
					g2.d("filterMode", 1);
				}
				else if ((int)((Texture)A_1).get_filterMode() == 2)
				{
					g2.d("filterMode", 2);
				}
				else
				{
					g2.d("filterMode", 1);
				}
				if ((int)((Texture)A_1).get_wrapMode() == 0)
				{
					g2.d("wrapModeU", 0);
					g2.d("wrapModeV", 0);
				}
				else if ((int)((Texture)A_1).get_wrapMode() == 1)
				{
					g2.d("wrapModeU", 1);
					g2.d("wrapModeV", 1);
				}
				else
				{
					g2.d("wrapModeU", 0);
					g2.d("wrapModeV", 0);
				}
				if ((Object)(object)val != (Object)null)
				{
					g2.d("anisoLevel", ((Texture)A_1).get_anisoLevel());
				}
				else
				{
					g2.d("anisoLevel", 0);
				}
			}
			else
			{
				A_0.a(A_5, "");
			}
		}
		else
		{
			A_0.a(A_5, "");
		}
	}

	public static void a(Cubemap A_0, global::g A_1, bool A_2 = false, string A_3 = null)
	{
		if (!((Object)(object)A_0 == (Object)null))
		{
			string text = a(AssetDatabase.GetAssetPath(((Object)A_0).GetInstanceID()), A_1: false);
			text = text.Split('.')[0];
			if (A_2)
			{
				string a_ = global::n.a(A_3, q + "/" + text + ".ltc");
				A_1.a("path", a_);
			}
			else
			{
				A_1.a("reflectionTexture", text + ".ltc");
			}
			global::g g = new global::g(global::g.a.d);
			string str = text.Substring(text.LastIndexOf("/") + 1);
			g.a("front", str + "_PositiveZ.png");
			g.a("back", str + "_NegativeZ.png");
			g.a("left", str + "_PositiveX.png");
			g.a("right", str + "_NegativeX.png");
			g.a("up", str + "_PositiveY.png");
			g.a("down", str + "_NegativeY.png");
			text = q + "/" + text + ".ltc";
			global::n.a(text, g);
			try
			{
				Color[] pixels = A_0.GetPixels((CubemapFace)0);
				Color[] pixels2 = A_0.GetPixels((CubemapFace)1);
				Color[] pixels3 = A_0.GetPixels((CubemapFace)2);
				Color[] pixels4 = A_0.GetPixels((CubemapFace)3);
				Color[] pixels5 = A_0.GetPixels((CubemapFace)4);
				Color[] pixels6 = A_0.GetPixels((CubemapFace)5);
				Texture2D val = a(pixels);
				Texture2D val2 = a(pixels2);
				Texture2D val3 = a(pixels3);
				Texture2D val4 = a(pixels4);
				Texture2D val5 = a(pixels5);
				Texture2D val6 = a(pixels6);
				text = text.Substring(0, text.LastIndexOf('.'));
				File.WriteAllBytes(text + "_PositiveX.png", ImageConversion.EncodeToPNG(val));
				File.WriteAllBytes(text + "_NegativeX.png", ImageConversion.EncodeToPNG(val2));
				File.WriteAllBytes(text + "_PositiveY.png", ImageConversion.EncodeToPNG(val3));
				File.WriteAllBytes(text + "_NegativeY.png", ImageConversion.EncodeToPNG(val4));
				File.WriteAllBytes(text + "_PositiveZ.png", ImageConversion.EncodeToPNG(val5));
				File.WriteAllBytes(text + "_NegativeZ.png", ImageConversion.EncodeToPNG(val6));
			}
			catch (Exception ex)
			{
				ex.ToString();
				Debug.LogWarning((object)("LayaAir3D Warning(Code:2006) : " + ((Object)A_0).get_name() + "must set can read!"));
			}
		}
	}

	public static void a(GameObject A_0, global::g A_1, bool A_2 = false)
	{
		//IL_0220: Unknown result type (might be due to invalid IL or missing references)
		//IL_0227: Expected O, but got Unknown
		//IL_02a8: Unknown result type (might be due to invalid IL or missing references)
		//IL_02c0: Unknown result type (might be due to invalid IL or missing references)
		//IL_02c6: Invalid comparison between Unknown and I4
		//IL_0415: Unknown result type (might be due to invalid IL or missing references)
		//IL_041a: Unknown result type (might be due to invalid IL or missing references)
		//IL_0420: Expected O, but got Unknown
		//IL_042b: Unknown result type (might be due to invalid IL or missing references)
		//IL_08f3: Unknown result type (might be due to invalid IL or missing references)
		//IL_0930: Unknown result type (might be due to invalid IL or missing references)
		//IL_0982: Unknown result type (might be due to invalid IL or missing references)
		//IL_0987: Unknown result type (might be due to invalid IL or missing references)
		//IL_09b1: Unknown result type (might be due to invalid IL or missing references)
		//IL_09d6: Unknown result type (might be due to invalid IL or missing references)
		//IL_09fd: Unknown result type (might be due to invalid IL or missing references)
		//IL_0a02: Unknown result type (might be due to invalid IL or missing references)
		//IL_0a2d: Unknown result type (might be due to invalid IL or missing references)
		//IL_0a32: Unknown result type (might be due to invalid IL or missing references)
		//IL_0a62: Unknown result type (might be due to invalid IL or missing references)
		//IL_0a67: Unknown result type (might be due to invalid IL or missing references)
		//IL_0a9f: Unknown result type (might be due to invalid IL or missing references)
		//IL_0aa4: Unknown result type (might be due to invalid IL or missing references)
		//IL_0ab1: Unknown result type (might be due to invalid IL or missing references)
		//IL_0ab6: Unknown result type (might be due to invalid IL or missing references)
		//IL_0b04: Unknown result type (might be due to invalid IL or missing references)
		//IL_0b09: Unknown result type (might be due to invalid IL or missing references)
		//IL_0b16: Unknown result type (might be due to invalid IL or missing references)
		//IL_0b1b: Unknown result type (might be due to invalid IL or missing references)
		//IL_0b28: Unknown result type (might be due to invalid IL or missing references)
		//IL_0b2d: Unknown result type (might be due to invalid IL or missing references)
		//IL_0b3d: Unknown result type (might be due to invalid IL or missing references)
		//IL_0b42: Unknown result type (might be due to invalid IL or missing references)
		//IL_0b5b: Unknown result type (might be due to invalid IL or missing references)
		//IL_0b94: Unknown result type (might be due to invalid IL or missing references)
		//IL_0baa: Unknown result type (might be due to invalid IL or missing references)
		//IL_0bce: Unknown result type (might be due to invalid IL or missing references)
		//IL_0bd3: Unknown result type (might be due to invalid IL or missing references)
		//IL_0bf6: Unknown result type (might be due to invalid IL or missing references)
		//IL_0c0e: Unknown result type (might be due to invalid IL or missing references)
		//IL_0c32: Unknown result type (might be due to invalid IL or missing references)
		//IL_0c37: Unknown result type (might be due to invalid IL or missing references)
		//IL_0c5a: Unknown result type (might be due to invalid IL or missing references)
		//IL_11af: Unknown result type (might be due to invalid IL or missing references)
		//IL_11b4: Unknown result type (might be due to invalid IL or missing references)
		List<a> list = b(A_0);
		Dictionary<string, string> dictionary = new Dictionary<string, string>();
		dictionary.Add("UnityEngine.GameObject", "");
		dictionary.Add("UnityEngine.Transform", "transform");
		dictionary.Add("UnityEngine.MeshRenderer", "meshRenderer");
		dictionary.Add("UnityEngine.SkinnedMeshRenderer", "skinnedMeshRenderer");
		dictionary.Add("UnityEngine.ParticleSystemRenderer", "particleRenderer");
		dictionary.Add("UnityEngine.TrailRenderer", "trailRenderer");
		Dictionary<string, string> dictionary2 = new Dictionary<string, string>();
		dictionary2.Add("m_IsActive", "active");
		dictionary2.Add("m_LocalPosition", "localPosition");
		dictionary2.Add("m_LocalRotation", "localRotation");
		dictionary2.Add("m_LocalScale", "localScale");
		dictionary2.Add("localEulerAnglesRaw", "localRotationEuler");
		dictionary2.Add("material", "material");
		dictionary2.Add("m_Enabled", "enable");
		new Dictionary<string, byte>
		{
			{
				"m_LocalPosition",
				12
			},
			{
				"m_LocalRotation",
				16
			},
			{
				"m_LocalScale",
				12
			},
			{
				"localEulerAnglesRaw",
				12
			}
		};
		Dictionary<string, int> dictionary3 = new Dictionary<string, int>();
		dictionary3.Add("m_LocalPosition", 3);
		dictionary3.Add("m_LocalRotation", 4);
		dictionary3.Add("m_LocalScale", 3);
		dictionary3.Add("localEulerAnglesRaw", 3);
		List<string> list2 = new List<string>();
		list2.Add("x");
		list2.Add("y");
		list2.Add("z");
		List<string> list3 = new List<string>();
		list3.Add("x");
		list3.Add("y");
		list3.Add("z");
		list3.Add("w");
		new List<string>().Add("value");
		Dictionary<string, List<string>> dictionary4 = new Dictionary<string, List<string>>();
		dictionary4.Add("m_LocalPosition", list2);
		dictionary4.Add("m_LocalRotation", list3);
		dictionary4.Add("m_LocalScale", list2);
		dictionary4.Add("localEulerAnglesRaw", list2);
		new List<ushort>
		{
			12,
			16
		};
		AnimatorController val = (AnimatorController)(object)(AnimatorController)A_0.GetComponent<Animator>().get_runtimeAnimatorController();
		if ((Object)(object)val == (Object)null)
		{
			Debug.LogWarning((object)("LayaAir3D Warning(Code:1002) : " + ((Object)A_0).get_name() + "'s Animator Compoment must have a Controller!"));
			return;
		}
		AnimatorControllerLayer[] layers = val.get_layers();
		int num = layers.Length;
		g g4 = default(g);
		h item2 = default(h);
		g g5 = default(g);
		h item3 = default(h);
		g g6 = default(g);
		h item5 = default(h);
		g g7 = default(g);
		h value7 = default(h);
		f item7 = default(f);
		e item10 = default(e);
		for (int i = 0; i < num; i++)
		{
			AnimatorControllerLayer val2 = layers[i];
			ChildAnimatorState[] states = val2.get_stateMachine().get_states();
			global::g g = new global::g(global::g.a.d);
			g.a("name", val2.get_name());
			g.d("weight", val2.get_defaultWeight());
			if ((int)val2.get_blendingMode() == 0)
			{
				g.d("blendingMode", 0);
			}
			else if ((int)val2.get_blendingMode() == 1)
			{
				g.d("blendingMode", 1);
			}
			else
			{
				g.d("blendingMode", 0);
			}
			global::g g2 = new global::g(global::g.a.e);
			g.d("states", g2);
			A_1.f(g);
			for (int j = 0; j < states.Length; j++)
			{
				AnimatorState state = ((ChildAnimatorState)(ref states[j])).get_state();
				global::g g3 = new global::g(global::g.a.d);
				g3.a("name", ((Object)state).get_name());
				g2.f(g3);
				AnimationClip val3 = state.get_motion() as AnimationClip;
				List<double> list4 = new List<double>();
				List<string> list5 = new List<string>();
				list5.Add("ANIMATIONS");
				if (!((Object)(object)val3 != (Object)null))
				{
					continue;
				}
				((Object)A_0).get_name();
				int num2 = (int)val3.get_frameRate();
				string text = a(((Object)val3).get_name(), A_1: true);
				list5.Add(text);
				string text2 = a(AssetDatabase.GetAssetPath(((Object)val3).GetInstanceID()).Split('.')[0], A_1: false) + "-" + text + ".lani";
				string a_ = q + "/" + text2;
				g3.a("clipPath", text2);
				EditorCurveBinding[] curveBindings = AnimationUtility.GetCurveBindings(val3);
				AnimationClipCurveData[] array = (AnimationClipCurveData[])(object)new AnimationClipCurveData[curveBindings.Length];
				for (int k = 0; k < curveBindings.Length; k++)
				{
					array[k] = (AnimationClipCurveData)(object)new AnimationClipCurveData(curveBindings[k]);
					array[k].curve = AnimationUtility.GetEditorCurve(val3, curveBindings[k]);
				}
				for (int l = 0; l < array.Length; l++)
				{
					Keyframe[] keys = array[l].curve.get_keys();
					for (int m = 0; m < keys.Length; m++)
					{
						double item = Math.Round(((Keyframe)(ref keys[m])).get_time(), 3);
						if (list4.IndexOf(item) == -1)
						{
							list4.Add(item);
						}
					}
				}
				list4.Sort();
				List<string> list6 = new List<string>();
				List<h> list7 = new List<h>();
				foreach (AnimationClipCurveData val4 in array)
				{
					g4.a = val4.curve.get_keys();
					item2.a = g4;
					item2.b = val4.path;
					item2.c = val4.propertyName;
					item2.d = val4.type;
					list7.Add(item2);
				}
				List<h> list8 = new List<h>();
				List<h> list9 = new List<h>();
				foreach (AnimationClipCurveData val5 in array)
				{
					string path = val5.path;
					string propertyName = val5.propertyName;
					string text3 = "";
					if (!dictionary.ContainsKey(val5.type.ToString()))
					{
						continue;
					}
					switch (dictionary[val5.type.ToString()])
					{
					case "meshRenderer":
					case "skinnedMeshRenderer":
					case "particleRenderer":
					case "trailRenderer":
					case "":
					case "":
						g5.a = val5.curve.get_keys();
						item3.a = g5;
						item3.b = val5.path;
						item3.c = val5.propertyName;
						item3.d = val5.type;
						list9.Add(item3);
						continue;
					}
					string text4 = "";
					text4 = propertyName.Substring(0, propertyName.LastIndexOf('.'));
					text4 = propertyName.Substring(0, propertyName.LastIndexOf('.'));
					string item4 = text4 + "|" + path;
					if (list6.IndexOf(item4) != -1)
					{
						continue;
					}
					list6.Add(item4);
					list8 = new List<h>();
					for (int num4 = 0; num4 < dictionary4[text4].Count; num4++)
					{
						string text5 = text4 + "." + dictionary4[text4][num4];
						for (int num5 = 0; num5 < list7.Count; num5++)
						{
							if (list7[num5].c == text5 && list7[num5].b == path)
							{
								list8.Add(list7[num5]);
								list7.RemoveAt(list7.IndexOf(list7[num5]));
							}
						}
					}
					if (dictionary4[text4].Count != list8.Count)
					{
						List<h> list10 = new List<h>();
						for (int num6 = 0; num6 < dictionary4[text4].Count; num6++)
						{
							string text6 = text4 + "." + dictionary4[text4][num6];
							bool flag = false;
							for (int num7 = 0; num7 < list8.Count; num7++)
							{
								if (list8[num7].c == text6)
								{
									flag = true;
									list10.Add(list8[num7]);
								}
							}
							if (!flag)
							{
								g6.a = (Keyframe[])(object)new Keyframe[0];
								item5.b = list8[0].b;
								item5.c = text6;
								item5.d = list8[0].d;
								item5.a = g6;
								list10.Add(item5);
							}
						}
						list8 = list10;
					}
					List<double> list11 = new List<double>();
					for (int num8 = 0; num8 < list8.Count; num8++)
					{
						Keyframe[] array2 = list8[num8].a.a;
						for (int num9 = 0; num9 < array2.Length; num9++)
						{
							bool flag2 = false;
							for (int num10 = 0; num10 < list11.Count; num10++)
							{
								if (Math.Round(list11[num10], 3) == Math.Round(((Keyframe)(ref array2[num9])).get_time(), 3))
								{
									flag2 = true;
								}
							}
							if (!flag2)
							{
								list11.Add(((Keyframe)(ref array2[num9])).get_time());
							}
						}
					}
					list11.Sort();
					List<Keyframe> list12 = new List<Keyframe>();
					for (int num11 = 0; num11 < list11.Count; num11++)
					{
						Keyframe item6 = default(Keyframe);
						((Keyframe)(ref item6)).set_inTangent(float.NaN);
						((Keyframe)(ref item6)).set_outTangent(float.NaN);
						((Keyframe)(ref item6)).set_time((float)list11[num11]);
						((Keyframe)(ref item6)).set_value(float.NaN);
						list12.Add(item6);
					}
					for (int num12 = 0; num12 < list8.Count; num12++)
					{
						List<Keyframe> list13 = list8[num12].a.a.ToList();
						List<Keyframe> list14 = new List<Keyframe>();
						Keyframe val6;
						for (int num13 = 0; num13 < list11.Count; num13++)
						{
							bool flag3 = false;
							for (int num14 = 0; num14 < list13.Count; num14++)
							{
								val6 = list13[num14];
								if (Math.Round(((Keyframe)(ref val6)).get_time(), 3) == Math.Round(list11[num13], 3))
								{
									flag3 = true;
									list14.Add(list13[num14]);
								}
							}
							if (!flag3)
							{
								list14.Add(list12[num13]);
							}
						}
						for (int num15 = 0; num15 < list11.Count; num15++)
						{
							val6 = list14[num15];
							if (!float.IsNaN(((Keyframe)(ref val6)).get_value()))
							{
								continue;
							}
							bool flag4 = false;
							bool flag5 = false;
							int index = -1;
							int index2 = -1;
							for (int num16 = num15 - 1; num16 >= 0; num16--)
							{
								val6 = list14[num16];
								if (!float.IsNaN(((Keyframe)(ref val6)).get_value()))
								{
									flag4 = true;
									index = num16;
									break;
								}
							}
							for (int num17 = num15 + 1; num17 < list11.Count; num17++)
							{
								val6 = list14[num17];
								if (!float.IsNaN(((Keyframe)(ref val6)).get_value()))
								{
									flag5 = true;
									index2 = num17;
									break;
								}
							}
							if (flag4 && flag5)
							{
								val6 = list14[index2];
								float time = ((Keyframe)(ref val6)).get_time();
								val6 = list14[index];
								float num18 = time - ((Keyframe)(ref val6)).get_time();
								float a_2 = (float)((list11[num15] - list11[index]) / (list11[index2] - list11[index]));
								float a_3 = (float)list11[index];
								float a_4 = (float)list11[index2];
								val6 = list14[index];
								float value = ((Keyframe)(ref val6)).get_value();
								val6 = list14[index2];
								float value2 = ((Keyframe)(ref val6)).get_value();
								val6 = list14[index];
								float a_5 = ((Keyframe)(ref val6)).get_outTangent() * num18;
								val6 = list14[index2];
								float A_3;
								float value3 = global::o.a(a_3, a_4, value, value2, a_5, ((Keyframe)(ref val6)).get_inTangent() * num18, a_2, out A_3);
								Keyframe value4 = default(Keyframe);
								float inTangent;
								((Keyframe)(ref value4)).set_outTangent(inTangent = A_3);
								((Keyframe)(ref value4)).set_inTangent(inTangent);
								((Keyframe)(ref value4)).set_value(value3);
								((Keyframe)(ref value4)).set_time((float)list11[num15]);
								list14[num15] = value4;
							}
							else if (flag4 && !flag5)
							{
								Keyframe value5 = default(Keyframe);
								float inTangent;
								((Keyframe)(ref value5)).set_outTangent(inTangent = 0f);
								((Keyframe)(ref value5)).set_inTangent(inTangent);
								val6 = list14[index];
								((Keyframe)(ref value5)).set_value(((Keyframe)(ref val6)).get_value());
								((Keyframe)(ref value5)).set_time((float)list11[num15]);
								list14[num15] = value5;
							}
							else if (!flag4 && flag5)
							{
								Keyframe value6 = default(Keyframe);
								float inTangent;
								((Keyframe)(ref value6)).set_outTangent(inTangent = 0f);
								((Keyframe)(ref value6)).set_inTangent(inTangent);
								val6 = list14[index2];
								((Keyframe)(ref value6)).set_value(((Keyframe)(ref val6)).get_value());
								((Keyframe)(ref value6)).set_time((float)list11[num15]);
								list14[num15] = value6;
							}
							else
							{
								Debug.LogWarning((object)(((Object)A_0).get_name() + "'s Animator " + ((Object)A_0).get_name() + "/" + list8[num12].b + " " + list8[num12].c + " keyFrame data can't be null!"));
							}
						}
						g7.a = list14.ToArray();
						value7.a = g7;
						value7.b = list8[num12].b;
						value7.c = list8[num12].c;
						value7.d = list8[num12].d;
						list8[num12] = value7;
					}
					for (int num19 = 0; num19 < list8.Count; num19++)
					{
						list9.Add(list8[num19]);
					}
				}
				List<f> list15 = new List<f>();
				int num20 = 0;
				for (int num21 = 0; num21 < list9.Count; num21 += num20)
				{
					h h = list9[num21];
					List<ushort> list16 = new List<ushort>();
					string[] array3 = h.b.Split('/');
					for (int num22 = 0; num22 < array3.Length; num22++)
					{
						if (list5.IndexOf(array3[num22]) == -1)
						{
							list5.Add(array3[num22]);
						}
						list16.Add((ushort)list5.IndexOf(array3[num22]));
					}
					item7.b = (ushort)list16.Count;
					item7.c = list16;
					string item8 = dictionary[h.d.ToString()];
					if (list5.IndexOf(item8) == -1)
					{
						list5.Add(item8);
					}
					item7.d = (ushort)list5.IndexOf(item8);
					string[] array4 = h.c.Split('.');
					List<ushort> list17 = new List<ushort>();
					string key = array4[0];
					key = dictionary2[key];
					if (item8 == "transform")
					{
						if (list5.IndexOf(key) == -1)
						{
							list5.Add(key);
						}
						list17.Add((ushort)list5.IndexOf(key));
						item7.e = 1;
						item7.f = list17;
					}
					else if (item8 == "meshRenderer" || item8 == "skinnedMeshRenderer" || item8 == "particleRenderer" || item8 == "trailRenderer" || item8 == "")
					{
						if (array4.Length == 1)
						{
							if (list5.IndexOf(key) == -1)
							{
								list5.Add(key);
							}
							list17.Add((ushort)list5.IndexOf(key));
							item7.e = 1;
							item7.f = list17;
						}
						else if (array4.Length == 2)
						{
							if (list5.IndexOf(key) == -1)
							{
								list5.Add(key);
							}
							list17.Add((ushort)list5.IndexOf(key));
							string item9 = array4[1];
							if (list5.IndexOf(item9) == -1)
							{
								list5.Add(item9);
							}
							list17.Add((ushort)list5.IndexOf(item9));
							item7.e = 2;
							item7.f = list17;
						}
						else if (array4.Length == 3)
						{
							if (list5.IndexOf(key) == -1)
							{
								list5.Add(key);
							}
							list17.Add((ushort)list5.IndexOf(key));
							string str = array4[1];
							str += array4[2].ToUpper();
							if (list5.IndexOf(str) == -1)
							{
								list5.Add(str);
							}
							list17.Add((ushort)list5.IndexOf(str));
							item7.e = 2;
							item7.f = list17;
						}
						else
						{
							item7.e = 0;
							item7.f = list17;
							Debug.LogWarning((object)("LayaAir3D : " + ((Object)A_0).get_name() + " Animation attribute length overbounds!"));
						}
					}
					else
					{
						item7.e = 0;
						item7.f = list17;
						Debug.LogWarning((object)("LayaAir3D : " + ((Object)A_0).get_name() + " Animation attribute length overbounds!"));
					}
					if (array4[0] == "m_LocalPosition")
					{
						item7.a = 1;
					}
					else if (array4[0] == "m_LocalRotation")
					{
						item7.a = 2;
					}
					else if (array4[0] == "m_LocalScale")
					{
						item7.a = 3;
					}
					else if (array4[0] == "localEulerAnglesRaw")
					{
						item7.a = 4;
					}
					else
					{
						item7.a = 0;
					}
					try
					{
						num20 = dictionary3[array4[0]];
					}
					catch (Exception ex)
					{
						ex.ToString();
						num20 = 1;
					}
					List<e> list18 = new List<e>();
					Keyframe[] array5 = h.a.a;
					float num23 = 0f;
					for (int num24 = 0; num24 < array5.Length; num24++)
					{
						num23 = ((Keyframe)(ref array5[num24])).get_time();
						item10.a = (ushort)list4.IndexOf(Math.Round(num23, 3));
						List<float> list19 = new List<float>();
						List<float> list20 = new List<float>();
						List<float> list21 = new List<float>();
						int num25 = 0;
						for (int num26 = num21; num26 < num21 + num20; num26++)
						{
							Keyframe val7 = list9[num26].a.a[num24];
							if (key == "localPosition")
							{
								if (num25 == 0)
								{
									list19.Add(((Keyframe)(ref val7)).get_value() * -1f);
									list20.Add(((Keyframe)(ref val7)).get_inTangent() * -1f);
									list21.Add(((Keyframe)(ref val7)).get_outTangent() * -1f);
								}
								else
								{
									list19.Add(((Keyframe)(ref val7)).get_value());
									list20.Add(((Keyframe)(ref val7)).get_inTangent());
									list21.Add(((Keyframe)(ref val7)).get_outTangent());
								}
							}
							else if (key == "localRotation")
							{
								if (num25 == 0 || num25 == 3)
								{
									list19.Add(((Keyframe)(ref val7)).get_value() * -1f);
									list20.Add(((Keyframe)(ref val7)).get_inTangent() * -1f);
									list21.Add(((Keyframe)(ref val7)).get_outTangent() * -1f);
								}
								else
								{
									list19.Add(((Keyframe)(ref val7)).get_value());
									list20.Add(((Keyframe)(ref val7)).get_inTangent());
									list21.Add(((Keyframe)(ref val7)).get_outTangent());
								}
							}
							else if (key == "localRotationEuler")
							{
								if (list.IndexOf(global::p.a.b) != -1)
								{
									switch (num25)
									{
									case 0:
										list19.Add(((Keyframe)(ref val7)).get_value() * -1f);
										list20.Add(((Keyframe)(ref val7)).get_inTangent() * -1f);
										list21.Add(((Keyframe)(ref val7)).get_outTangent() * -1f);
										break;
									case 1:
										list19.Add(180f - ((Keyframe)(ref val7)).get_value());
										list20.Add(((Keyframe)(ref val7)).get_inTangent() * -1f);
										list21.Add(((Keyframe)(ref val7)).get_outTangent() * -1f);
										break;
									default:
										list19.Add(((Keyframe)(ref val7)).get_value());
										list20.Add(((Keyframe)(ref val7)).get_inTangent());
										list21.Add(((Keyframe)(ref val7)).get_outTangent());
										break;
									}
								}
								else if (num25 == 1 || num25 == 2)
								{
									list19.Add(((Keyframe)(ref val7)).get_value() * -1f);
									list20.Add(((Keyframe)(ref val7)).get_inTangent() * -1f);
									list21.Add(((Keyframe)(ref val7)).get_outTangent() * -1f);
								}
								else
								{
									list19.Add(((Keyframe)(ref val7)).get_value());
									list20.Add(((Keyframe)(ref val7)).get_inTangent());
									list21.Add(((Keyframe)(ref val7)).get_outTangent());
								}
							}
							else
							{
								list19.Add(((Keyframe)(ref val7)).get_value());
								list20.Add(((Keyframe)(ref val7)).get_inTangent());
								list21.Add(((Keyframe)(ref val7)).get_outTangent());
							}
							num25++;
						}
						item10.d = list19;
						item10.b = list20;
						item10.c = list21;
						list18.Add(item10);
					}
					item7.g = (ushort)array5.Length;
					item7.h = list18;
					list15.Add(item7);
				}
				FileStream fileStream = global::n.a(a_);
				long num27 = 0L;
				long num28 = 0L;
				long num29 = 0L;
				long num30 = 0L;
				long num31 = 0L;
				long num32 = 0L;
				string a_6 = (!A_2) ? ar : @as;
				global::n.a(fileStream, a_6);
				num27 = fileStream.Position;
				global::n.a(fileStream, default(uint));
				global::n.a(fileStream, default(uint));
				num28 = fileStream.Position;
				int num33 = 1;
				global::n.a(fileStream, (ushort)num33);
				for (int num34 = 0; num34 < num33; num34++)
				{
					global::n.a(fileStream, default(uint));
					global::n.a(fileStream, default(uint));
				}
				num29 = fileStream.Position;
				global::n.a(fileStream, default(uint));
				global::n.a(fileStream, default(ushort));
				num30 = fileStream.Position;
				global::n.a(fileStream, (ushort)list5.IndexOf("ANIMATIONS"));
				global::n.a(fileStream, (ushort)list4.Count);
				for (int num35 = 0; num35 < list4.Count; num35++)
				{
					global::n.a(fileStream, (float)list4[num35]);
				}
				global::n.a(fileStream, (ushort)list5.IndexOf(text));
				float num36 = (list4.Count == 0) ? 0f : ((float)list4[list4.Count - 1]);
				global::n.a(fileStream, num36);
				global::n.a(fileStream, ((Motion)val3).get_isLooping());
				global::n.a(fileStream, (ushort)num2);
				global::n.a(fileStream, (ushort)list15.Count);
				for (int num37 = 0; num37 < list15.Count; num37++)
				{
					item7 = list15[num37];
					global::n.a(fileStream, item7.a);
					global::n.a(fileStream, item7.b);
					for (int num38 = 0; num38 < item7.b; num38++)
					{
						global::n.a(fileStream, item7.c[num38]);
					}
					global::n.a(fileStream, item7.d);
					global::n.a(fileStream, item7.e);
					for (int num39 = 0; num39 < item7.e; num39++)
					{
						global::n.a(fileStream, item7.f[num39]);
					}
					global::n.a(fileStream, item7.g);
					if (A_2)
					{
						for (int num40 = 0; num40 < item7.g; num40++)
						{
							global::n.a(fileStream, item7.h[num40].a);
							List<float> list22 = item7.h[num40].d;
							List<float> list23 = item7.h[num40].b;
							List<float> list24 = item7.h[num40].c;
							for (int num41 = 0; num41 < list23.Count; num41++)
							{
								global::n.a(fileStream, global::f.a(list23[num41]));
							}
							for (int num42 = 0; num42 < list24.Count; num42++)
							{
								global::n.a(fileStream, global::f.a(list24[num42]));
							}
							for (int num43 = 0; num43 < list22.Count; num43++)
							{
								global::n.a(fileStream, global::f.a(list22[num43]));
							}
						}
						continue;
					}
					for (int num44 = 0; num44 < item7.g; num44++)
					{
						global::n.a(fileStream, item7.h[num44].a);
						List<float> list25 = item7.h[num44].d;
						List<float> list26 = item7.h[num44].b;
						List<float> list27 = item7.h[num44].c;
						for (int num45 = 0; num45 < list26.Count; num45++)
						{
							global::n.a(fileStream, list26[num45]);
						}
						for (int num46 = 0; num46 < list27.Count; num46++)
						{
							global::n.a(fileStream, list27[num46]);
						}
						for (int num47 = 0; num47 < list25.Count; num47++)
						{
							global::n.a(fileStream, list25[num47]);
						}
					}
				}
				AnimationEvent[] events = val3.get_events();
				int num48 = events.Length;
				global::n.a(fileStream, (short)num48);
				for (int num49 = 0; num49 < num48; num49++)
				{
					AnimationEvent val8 = events[num49];
					global::n.a(fileStream, val8.get_time());
					string functionName = val8.get_functionName();
					if (list5.IndexOf(functionName) == -1)
					{
						list5.Add(functionName);
					}
					global::n.a(fileStream, (ushort)list5.IndexOf(functionName));
					ushort num50 = 3;
					global::n.a(fileStream, num50);
					for (int num51 = 0; num51 < 1; num51++)
					{
						global::n.a(fileStream, new byte[1]
						{
							2
						});
						global::n.a(fileStream, val8.get_floatParameter());
						global::n.a(fileStream, new byte[1]
						{
							1
						});
						global::n.a(fileStream, val8.get_intParameter());
						global::n.a(fileStream, new byte[1]
						{
							3
						});
						string stringParameter = val8.get_stringParameter();
						if (list5.IndexOf(stringParameter) == -1)
						{
							list5.Add(stringParameter);
						}
						global::n.a(fileStream, (ushort)list5.IndexOf(stringParameter));
					}
				}
				num31 = fileStream.Position;
				for (int num52 = 0; num52 < list5.Count; num52++)
				{
					global::n.a(fileStream, list5[num52]);
				}
				num32 = fileStream.Position;
				fileStream.Position = num29 + 4;
				global::n.a(fileStream, (ushort)list5.Count);
				fileStream.Position = num28 + 2 + 4;
				global::n.a(fileStream, (uint)(num31 - num30));
				fileStream.Position = num27;
				global::n.a(fileStream, (uint)num31);
				global::n.a(fileStream, (uint)(num32 - num31));
				fileStream.Close();
			}
		}
	}

	public static void a(string A_0, global::g A_1, GameObject A_2 = null)
	{
		global::b.a(A_0, A_1);
	}

	public static void a(MinMaxCurve A_0, global::g A_1, string A_2, string A_3, int A_4, float A_5, float A_6, bool A_7 = false)
	{
		//IL_0078: Unknown result type (might be due to invalid IL or missing references)
		//IL_007d: Unknown result type (might be due to invalid IL or missing references)
		//IL_008f: Unknown result type (might be due to invalid IL or missing references)
		//IL_0094: Unknown result type (might be due to invalid IL or missing references)
		//IL_00a6: Unknown result type (might be due to invalid IL or missing references)
		//IL_00ab: Unknown result type (might be due to invalid IL or missing references)
		//IL_00bd: Unknown result type (might be due to invalid IL or missing references)
		//IL_00c2: Unknown result type (might be due to invalid IL or missing references)
		//IL_00fc: Unknown result type (might be due to invalid IL or missing references)
		//IL_0101: Unknown result type (might be due to invalid IL or missing references)
		AnimationCurve val;
		switch (A_4)
		{
		case -1:
			val = ((MinMaxCurve)(ref A_0)).get_curveMin();
			break;
		case 1:
			val = ((MinMaxCurve)(ref A_0)).get_curveMax();
			break;
		default:
			val = ((MinMaxCurve)(ref A_0)).get_curve();
			break;
		}
		global::g g = new global::g(global::g.a.d);
		global::g g2 = new global::g(global::g.a.e);
		global::g g3 = new global::g(global::g.a.d);
		if (val != null && val.get_length() != 0)
		{
			int length = val.get_length();
			if (length <= 0)
			{
				return;
			}
			if (!A_7)
			{
				A_1.d(A_2, g);
			}
			else
			{
				if (val.get_length() == 2)
				{
					Keyframe val2 = val.get_Item(0);
					if (((Keyframe)(ref val2)).get_time() == 0f)
					{
						val2 = val.get_Item(0);
						if (((Keyframe)(ref val2)).get_value() == 0f)
						{
							val2 = val.get_Item(1);
							if (((Keyframe)(ref val2)).get_time() == 1f)
							{
								val2 = val.get_Item(1);
								if (a(((Keyframe)(ref val2)).get_value(), 1f) && a(A_5, 1f))
								{
									return;
								}
							}
						}
					}
				}
				A_1.d(A_2, g);
			}
			for (int i = 0; i < length; i++)
			{
				Keyframe val3 = val.get_Item(i);
				if (i == 0)
				{
					g3 = new global::g(global::g.a.d);
					g3.d("key", 0f);
					g3.d("value", ((Keyframe)(ref val3)).get_value() * A_5 * A_6);
					g2.f(g3);
					if (((Keyframe)(ref val3)).get_time() - y > 0f && (double)((Keyframe)(ref val3)).get_time() < 0.5)
					{
						g3 = new global::g(global::g.a.d);
						g3.d("key", ((Keyframe)(ref val3)).get_time());
						g3.d("value", ((Keyframe)(ref val3)).get_value() * A_5 * A_6);
						g2.f(g3);
					}
				}
				if (i != 0 && i != length - 1)
				{
					g3 = new global::g(global::g.a.d);
					g3.d("key", ((Keyframe)(ref val3)).get_time());
					g3.d("value", ((Keyframe)(ref val3)).get_value() * A_5 * A_6);
					g2.f(g3);
				}
				if (i == length - 1)
				{
					if (((Keyframe)(ref val3)).get_time() + y < 1f && (double)((Keyframe)(ref val3)).get_time() >= 0.5)
					{
						g3 = new global::g(global::g.a.d);
						g3.d("key", ((Keyframe)(ref val3)).get_time());
						g3.d("value", ((Keyframe)(ref val3)).get_value() * A_5 * A_6);
						g2.f(g3);
					}
					g3 = new global::g(global::g.a.d);
					g3.d("key", 1f);
					g3.d("value", ((Keyframe)(ref val3)).get_value() * A_5 * A_6);
					g2.f(g3);
				}
			}
		}
		g.d(A_3, g2);
	}

	public static void a(Gradient A_0, global::g A_1, string A_2)
	{
		//IL_0048: Unknown result type (might be due to invalid IL or missing references)
		//IL_004d: Unknown result type (might be due to invalid IL or missing references)
		//IL_0076: Unknown result type (might be due to invalid IL or missing references)
		//IL_008b: Unknown result type (might be due to invalid IL or missing references)
		//IL_009f: Unknown result type (might be due to invalid IL or missing references)
		//IL_00c1: Unknown result type (might be due to invalid IL or missing references)
		//IL_00d4: Unknown result type (might be due to invalid IL or missing references)
		//IL_0104: Unknown result type (might be due to invalid IL or missing references)
		//IL_0117: Unknown result type (might be due to invalid IL or missing references)
		//IL_0137: Unknown result type (might be due to invalid IL or missing references)
		//IL_014b: Unknown result type (might be due to invalid IL or missing references)
		//IL_016d: Unknown result type (might be due to invalid IL or missing references)
		//IL_0180: Unknown result type (might be due to invalid IL or missing references)
		//IL_01b5: Unknown result type (might be due to invalid IL or missing references)
		//IL_0249: Unknown result type (might be due to invalid IL or missing references)
		//IL_024e: Unknown result type (might be due to invalid IL or missing references)
		//IL_027a: Unknown result type (might be due to invalid IL or missing references)
		//IL_027c: Unknown result type (might be due to invalid IL or missing references)
		//IL_028d: Unknown result type (might be due to invalid IL or missing references)
		//IL_028f: Unknown result type (might be due to invalid IL or missing references)
		//IL_02a0: Unknown result type (might be due to invalid IL or missing references)
		//IL_02a2: Unknown result type (might be due to invalid IL or missing references)
		//IL_02c8: Unknown result type (might be due to invalid IL or missing references)
		//IL_02df: Unknown result type (might be due to invalid IL or missing references)
		//IL_0301: Unknown result type (might be due to invalid IL or missing references)
		//IL_0317: Unknown result type (might be due to invalid IL or missing references)
		//IL_0319: Unknown result type (might be due to invalid IL or missing references)
		//IL_032a: Unknown result type (might be due to invalid IL or missing references)
		//IL_032c: Unknown result type (might be due to invalid IL or missing references)
		//IL_033d: Unknown result type (might be due to invalid IL or missing references)
		//IL_033f: Unknown result type (might be due to invalid IL or missing references)
		//IL_0380: Unknown result type (might be due to invalid IL or missing references)
		//IL_0396: Unknown result type (might be due to invalid IL or missing references)
		//IL_0398: Unknown result type (might be due to invalid IL or missing references)
		//IL_03a9: Unknown result type (might be due to invalid IL or missing references)
		//IL_03ab: Unknown result type (might be due to invalid IL or missing references)
		//IL_03bc: Unknown result type (might be due to invalid IL or missing references)
		//IL_03be: Unknown result type (might be due to invalid IL or missing references)
		//IL_03ef: Unknown result type (might be due to invalid IL or missing references)
		//IL_0406: Unknown result type (might be due to invalid IL or missing references)
		//IL_0428: Unknown result type (might be due to invalid IL or missing references)
		//IL_043e: Unknown result type (might be due to invalid IL or missing references)
		//IL_0440: Unknown result type (might be due to invalid IL or missing references)
		//IL_0451: Unknown result type (might be due to invalid IL or missing references)
		//IL_0453: Unknown result type (might be due to invalid IL or missing references)
		//IL_0464: Unknown result type (might be due to invalid IL or missing references)
		//IL_0466: Unknown result type (might be due to invalid IL or missing references)
		//IL_04af: Unknown result type (might be due to invalid IL or missing references)
		//IL_04b1: Unknown result type (might be due to invalid IL or missing references)
		//IL_04c2: Unknown result type (might be due to invalid IL or missing references)
		//IL_04c4: Unknown result type (might be due to invalid IL or missing references)
		//IL_04d5: Unknown result type (might be due to invalid IL or missing references)
		//IL_04d7: Unknown result type (might be due to invalid IL or missing references)
		if (A_0 == null)
		{
			return;
		}
		bool flag = false;
		GradientAlphaKey[] alphaKeys = A_0.get_alphaKeys();
		GradientColorKey[] colorKeys = A_0.get_colorKeys();
		global::g g = new global::g(global::g.a.d);
		global::g g2 = new global::g(global::g.a.e);
		global::g g3 = new global::g(global::g.a.d);
		if (alphaKeys != null && alphaKeys.Length != 0)
		{
			int num = alphaKeys.Length;
			for (int i = 0; i < num; i++)
			{
				GradientAlphaKey val = alphaKeys[i];
				if (i == 0)
				{
					g3 = new global::g(global::g.a.d);
					g3.d("key", 0f);
					g3.d("value", val.alpha);
					g2.f(g3);
					if (val.time - y > 0f && (double)val.time < 0.5)
					{
						g3 = new global::g(global::g.a.d);
						g3.d("key", val.time);
						g3.d("value", val.alpha);
						g2.f(g3);
					}
				}
				if (i != 0 && i != num - 1)
				{
					g3 = new global::g(global::g.a.d);
					g3.d("key", val.time);
					g3.d("value", val.alpha);
					g2.f(g3);
				}
				if (i == num - 1)
				{
					if (val.time + y < 1f && (double)val.time >= 0.5)
					{
						g3 = new global::g(global::g.a.d);
						g3.d("key", val.time);
						g3.d("value", val.alpha);
						g2.f(g3);
					}
					g3 = new global::g(global::g.a.d);
					g3.d("key", 1f);
					g3.d("value", val.alpha);
					g2.f(g3);
				}
			}
		}
		if (alphaKeys.Length != 2 || alphaKeys[0].alpha != 1f || alphaKeys[1].alpha != 1f)
		{
			g.d("alphas", g2);
			flag = true;
		}
		global::g g4 = new global::g(global::g.a.e);
		global::g g5 = new global::g(global::g.a.d);
		global::g g6 = new global::g(global::g.a.e);
		if (colorKeys != null && colorKeys.Length != 0)
		{
			int num2 = colorKeys.Length;
			for (int j = 0; j < num2; j++)
			{
				GradientColorKey val2 = colorKeys[j];
				if (j == 0)
				{
					g5 = new global::g(global::g.a.d);
					g5.d("key", 0f);
					g6 = new global::g(global::g.a.e);
					g6.d(val2.color.r);
					g6.d(val2.color.g);
					g6.d(val2.color.b);
					g5.d("value", g6);
					g4.f(g5);
					if (val2.time - y > 0f && (double)val2.time < 0.5)
					{
						g5 = new global::g(global::g.a.d);
						g5.d("key", val2.time);
						g6 = new global::g(global::g.a.e);
						g6.d(val2.color.r);
						g6.d(val2.color.g);
						g6.d(val2.color.b);
						g5.d("value", g6);
						g4.f(g5);
					}
				}
				if (j != 0 && j != num2 - 1)
				{
					g5 = new global::g(global::g.a.d);
					g5.d("key", val2.time);
					g6 = new global::g(global::g.a.e);
					g6.d(val2.color.r);
					g6.d(val2.color.g);
					g6.d(val2.color.b);
					g5.d("value", g6);
					g4.f(g5);
				}
				if (j == num2 - 1)
				{
					if (val2.time + y < 1f && (double)val2.time >= 0.5)
					{
						g5 = new global::g(global::g.a.d);
						g5.d("key", val2.time);
						g6 = new global::g(global::g.a.e);
						g6.d(val2.color.r);
						g6.d(val2.color.g);
						g6.d(val2.color.b);
						g5.d("value", g6);
						g4.f(g5);
					}
					g5 = new global::g(global::g.a.d);
					g5.d("key", 1f);
					g6 = new global::g(global::g.a.e);
					g6.d(val2.color.r);
					g6.d(val2.color.g);
					g6.d(val2.color.b);
					g5.d("value", g6);
					g4.f(g5);
				}
			}
		}
		if (colorKeys.Length != 2 || colorKeys[0].color.r != 1f || colorKeys[0].color.g != 1f || colorKeys[0].color.b != 1f || colorKeys[1].color.r != 1f || colorKeys[1].color.g != 1f || colorKeys[1].color.b != 1f)
		{
			g.d("rgbs", g4);
			flag = true;
		}
		if (flag)
		{
			A_1.d(A_2, g);
		}
	}

	public static Texture2D a(Color[] A_0)
	{
		//IL_0011: Unknown result type (might be due to invalid IL or missing references)
		//IL_0017: Expected O, but got Unknown
		//IL_0030: Unknown result type (might be due to invalid IL or missing references)
		int num = 0;
		int num2;
		int num3 = num2 = (int)Mathf.Sqrt((float)A_0.Length);
		Texture2D val = (Texture2D)(object)new Texture2D(num3, num2);
		for (int i = 0; i < num2; i++)
		{
			for (int j = 0; j < num3; j++)
			{
				val.SetPixel(j, num2 - 1 - i, A_0[num++]);
			}
		}
		return val;
	}

	private static b a(Vector3[] A_0, Vector3[] A_1, Color[] A_2, Vector2[] A_3, Vector2[] A_4, BoneWeight[] A_5, Vector4[] A_6, int A_7)
	{
		//IL_0012: Unknown result type (might be due to invalid IL or missing references)
		//IL_0017: Unknown result type (might be due to invalid IL or missing references)
		//IL_002a: Unknown result type (might be due to invalid IL or missing references)
		//IL_002f: Unknown result type (might be due to invalid IL or missing references)
		//IL_003c: Unknown result type (might be due to invalid IL or missing references)
		//IL_0050: Unknown result type (might be due to invalid IL or missing references)
		//IL_0055: Unknown result type (might be due to invalid IL or missing references)
		//IL_0062: Unknown result type (might be due to invalid IL or missing references)
		//IL_0076: Unknown result type (might be due to invalid IL or missing references)
		//IL_007b: Unknown result type (might be due to invalid IL or missing references)
		//IL_0088: Unknown result type (might be due to invalid IL or missing references)
		//IL_009d: Unknown result type (might be due to invalid IL or missing references)
		//IL_00a2: Unknown result type (might be due to invalid IL or missing references)
		//IL_00af: Unknown result type (might be due to invalid IL or missing references)
		//IL_00c6: Unknown result type (might be due to invalid IL or missing references)
		//IL_00cb: Unknown result type (might be due to invalid IL or missing references)
		//IL_0168: Unknown result type (might be due to invalid IL or missing references)
		//IL_0174: Unknown result type (might be due to invalid IL or missing references)
		//IL_0189: Unknown result type (might be due to invalid IL or missing references)
		//IL_018e: Unknown result type (might be due to invalid IL or missing references)
		//IL_019b: Unknown result type (might be due to invalid IL or missing references)
		b b = new b();
		b.a = A_7;
		b.b = A_0[A_7];
		if (z[1] == 1)
		{
			b.c = A_1[A_7];
		}
		else
		{
			b.c = default(Vector3);
		}
		if (z[2] == 1)
		{
			b.d = A_2[A_7];
		}
		else
		{
			b.d = default(Color);
		}
		if (z[3] == 1)
		{
			b.e = A_3[A_7];
		}
		else
		{
			b.e = default(Vector2);
		}
		if (z[4] == 1)
		{
			b.f = A_4[A_7];
		}
		else
		{
			b.f = default(Vector2);
		}
		if (z[5] == 1)
		{
			BoneWeight val = A_5[A_7];
			b.g.x = ((BoneWeight)(ref val)).get_weight0();
			b.g.y = ((BoneWeight)(ref val)).get_weight1();
			b.g.z = ((BoneWeight)(ref val)).get_weight2();
			b.g.w = ((BoneWeight)(ref val)).get_weight3();
			b.h.x = ((BoneWeight)(ref val)).get_boneIndex0();
			b.h.y = ((BoneWeight)(ref val)).get_boneIndex1();
			b.h.z = ((BoneWeight)(ref val)).get_boneIndex2();
			b.h.w = ((BoneWeight)(ref val)).get_boneIndex3();
		}
		else
		{
			b.g = default(Vector4);
			b.h = default(Vector4);
		}
		if (z[6] == 1)
		{
			b.i = A_6[A_7];
		}
		else
		{
			b.i = default(Vector4);
		}
		return b;
	}

	private static bool a(GameObject A_0, a A_1, bool A_2, bool A_3)
	{
		GameObject a_ = A_0;
		if (A_3)
		{
			a_ = ((Component)A_0.get_transform().get_parent()).get_gameObject();
		}
		List<GameObject> list = new List<GameObject>();
		a(a_, A_1, list, A_2);
		if (list.Count > 0)
		{
			return true;
		}
		return false;
	}

	private static void a(GameObject A_0, a A_1, List<GameObject> A_2, bool A_3)
	{
		if (A_0.get_transform().get_childCount() <= 0)
		{
			return;
		}
		for (int i = 0; i < A_0.get_transform().get_childCount(); i++)
		{
			GameObject gameObject = ((Component)A_0.get_transform().GetChild(i)).get_gameObject();
			if (b(gameObject).IndexOf(A_1) != -1)
			{
				A_2.Add(gameObject);
			}
			if (!A_3)
			{
				a(gameObject, A_1, A_2, A_3);
			}
		}
	}

	private static GameObject a(GameObject A_0, a A_1)
	{
		if ((Object)(object)A_0.get_transform().get_parent() == (Object)null)
		{
			return null;
		}
		GameObject gameObject = ((Component)A_0.get_transform().get_parent()).get_gameObject();
		if (b(gameObject).IndexOf(A_1) != -1)
		{
			return gameObject;
		}
		return a(gameObject, A_1);
	}

	private static bool c(GameObject A_0)
	{
		for (int i = 0; i < A_0.get_transform().get_childCount(); i++)
		{
			GameObject gameObject = ((Component)A_0.get_transform().GetChild(i)).get_gameObject();
			if (b(gameObject).Count > 1 && gameObject.get_activeInHierarchy())
			{
				return true;
			}
		}
		return false;
	}

	private static void c(GameObject A_0, bool A_1)
	{
		//IL_003c: Unknown result type (might be due to invalid IL or missing references)
		//IL_0041: Unknown result type (might be due to invalid IL or missing references)
		//IL_0044: Unknown result type (might be due to invalid IL or missing references)
		//IL_0049: Unknown result type (might be due to invalid IL or missing references)
		if (A_0.get_transform().get_childCount() <= 0)
		{
			return;
		}
		for (int i = 0; i < A_0.get_transform().get_childCount(); i++)
		{
			GameObject gameObject = ((Component)A_0.get_transform().GetChild(i)).get_gameObject();
			if (b(gameObject).IndexOf(global::p.a.j) != -1)
			{
				MainModule main = gameObject.GetComponent<ParticleSystem>().get_main();
				ParticleSystemScalingMode scalingMode = ((MainModule)(ref main)).get_scalingMode();
				_ = (((object)(ParticleSystemScalingMode)(ref scalingMode)).ToString() == "Local");
			}
			c(gameObject, A_1: false);
		}
	}

	private static void b(GameObject A_0, bool A_1)
	{
		_ = b(A_0).Count;
		_ = 1;
		if (A_0.get_transform().get_childCount() > 0)
		{
			for (int i = 0; i < A_0.get_transform().get_childCount(); i++)
			{
				GameObject gameObject = ((Component)A_0.get_transform().GetChild(i)).get_gameObject();
				_ = b(gameObject).Count;
				_ = 1;
				b(gameObject, A_1: false);
			}
		}
	}

	private static void a(GameObject A_0, bool A_1)
	{
		if (A_1)
		{
			w = false;
		}
		if (A_0.get_transform().get_childCount() <= 0)
		{
			return;
		}
		for (int i = 0; i < A_0.get_transform().get_childCount(); i++)
		{
			GameObject gameObject = ((Component)A_0.get_transform().GetChild(i)).get_gameObject();
			if (b(gameObject).Count >= 1)
			{
				w = true;
			}
			a(gameObject, A_1: false);
		}
	}

	private static bool a(Transform A_0, Transform A_1, Transform A_2, int A_3)
	{
		if ((Object)(object)A_0 == (Object)(object)A_1)
		{
			return true;
		}
		for (int i = 0; i < A_3; i++)
		{
			if ((Object)(object)A_2 == (Object)(object)A_0)
			{
				return false;
			}
			if ((Object)(object)A_1 == (Object)(object)A_2)
			{
				return true;
			}
			A_2 = A_2.get_parent();
		}
		return false;
	}

	private static List<a> b(GameObject A_0)
	{
		//IL_0131: Unknown result type (might be due to invalid IL or missing references)
		//IL_0137: Invalid comparison between Unknown and I4
		//IL_0143: Unknown result type (might be due to invalid IL or missing references)
		//IL_0149: Invalid comparison between Unknown and I4
		//IL_0155: Unknown result type (might be due to invalid IL or missing references)
		List<a> list = new List<a>();
		Camera component = A_0.GetComponent<Camera>();
		Light component2 = A_0.GetComponent<Light>();
		MeshFilter component3 = A_0.GetComponent<MeshFilter>();
		MeshRenderer component4 = A_0.GetComponent<MeshRenderer>();
		SkinnedMeshRenderer component5 = A_0.GetComponent<SkinnedMeshRenderer>();
		Animation component6 = A_0.GetComponent<Animation>();
		Animator component7 = A_0.GetComponent<Animator>();
		ParticleSystem component8 = A_0.GetComponent<ParticleSystem>();
		Terrain component9 = A_0.GetComponent<Terrain>();
		BoxCollider component10 = A_0.GetComponent<BoxCollider>();
		SphereCollider component11 = A_0.GetComponent<SphereCollider>();
		CapsuleCollider component12 = A_0.GetComponent<CapsuleCollider>();
		MeshCollider component13 = A_0.GetComponent<MeshCollider>();
		Rigidbody component14 = A_0.GetComponent<Rigidbody>();
		TrailRenderer component15 = A_0.GetComponent<TrailRenderer>();
		LineRenderer component16 = A_0.GetComponent<LineRenderer>();
		list.Add(global::p.a.a);
		if ((Object)(object)component16 != (Object)null)
		{
			list.Add(global::p.a.o);
		}
		if ((Object)(object)component15 != (Object)null)
		{
			list.Add(global::p.a.n);
		}
		if ((Object)(object)component14 != (Object)null)
		{
			list.Add(global::p.a.m);
		}
		else if ((Object)(object)component10 != (Object)null || (Object)(object)component11 != (Object)null || (Object)(object)component12 != (Object)null || (Object)(object)component13 != (Object)null)
		{
			list.Add(global::p.a.l);
		}
		if ((Object)(object)component6 != (Object)null)
		{
			Debug.LogWarning((object)("LayaAir3D Warning(Code:0000) : " + ((Object)A_0).get_name() + " can't use Animation Componment!"));
		}
		if ((Object)(object)component7 != (Object)null)
		{
			list.Add(global::p.a.i);
		}
		if ((Object)(object)component != (Object)null)
		{
			list.Add(global::p.a.b);
		}
		if ((Object)(object)component2 != (Object)null)
		{
			if ((int)component2.get_type() == 1)
			{
				list.Add(global::p.a.c);
			}
			else if ((int)component2.get_type() == 2)
			{
				list.Add(global::p.a.d);
			}
			else if ((int)component2.get_type() == 0)
			{
				list.Add(global::p.a.e);
			}
		}
		if ((Object)(object)component3 != (Object)null)
		{
			if ((Object)(object)component == (Object)null)
			{
				list.Add(global::p.a.f);
				if ((Object)(object)component4 == (Object)null)
				{
					Debug.LogWarning((object)("LayaAir3D : " + ((Object)A_0).get_name() + " need a MeshRenderer ComponentType !"));
				}
			}
			else if ((Object)(object)component != (Object)null)
			{
				Debug.LogWarning((object)("LayaAir3D : " + ((Object)A_0).get_name() + " Camera and MeshFilter can't exist at the same time !"));
			}
		}
		if ((Object)(object)component4 != (Object)null)
		{
			if ((Object)(object)component == (Object)null)
			{
				list.Add(global::p.a.g);
				if ((Object)(object)component3 == (Object)null)
				{
					Debug.LogWarning((object)("LayaAir3D : " + ((Object)A_0).get_name() + " need a meshFilter ComponentType !"));
				}
			}
			else if ((Object)(object)component != (Object)null)
			{
				Debug.LogWarning((object)("LayaAir3D : " + ((Object)A_0).get_name() + " Camera and MeshRenderer can't exist at the same time !"));
			}
		}
		if ((Object)(object)component5 != (Object)null)
		{
			if ((Object)(object)component == (Object)null && (Object)(object)component3 == (Object)null && (Object)(object)component4 == (Object)null)
			{
				list.Add(global::p.a.h);
			}
			else
			{
				if ((Object)(object)component != (Object)null)
				{
					Debug.LogWarning((object)("LayaAir3D : " + ((Object)A_0).get_name() + " Camera and SkinnedMeshRenderer can't exist at the same time !"));
				}
				if ((Object)(object)component3 != (Object)null)
				{
					Debug.LogWarning((object)("LayaAir3D : " + ((Object)A_0).get_name() + " MeshFilter and SkinnedMeshRenderer can't exist at the same time !"));
				}
				if ((Object)(object)component4 != (Object)null)
				{
					Debug.LogWarning((object)("LayaAir3D : " + ((Object)A_0).get_name() + " MeshRenderer and SkinnedMeshRenderer can't exist at the same time !"));
				}
			}
		}
		if ((Object)(object)component8 != (Object)null)
		{
			if ((Object)(object)component == (Object)null && (Object)(object)component3 == (Object)null && (Object)(object)component4 == (Object)null && (Object)(object)component5 == (Object)null)
			{
				list.Add(global::p.a.j);
			}
			else
			{
				if ((Object)(object)component != (Object)null)
				{
					Debug.LogWarning((object)("LayaAir3D : " + ((Object)A_0).get_name() + " Camera and ParticleSystem can't exist at the same time !"));
				}
				if ((Object)(object)component3 != (Object)null)
				{
					Debug.LogWarning((object)("LayaAir3D : " + ((Object)A_0).get_name() + " MeshFilter and ParticleSystem can't exist at the same time !"));
				}
				if ((Object)(object)component4 != (Object)null)
				{
					Debug.LogWarning((object)("LayaAir3D : " + ((Object)A_0).get_name() + " MeshRenderer and ParticleSystem can't exist at the same time !"));
				}
				if ((Object)(object)component5 != (Object)null)
				{
					Debug.LogWarning((object)("LayaAir3D : " + ((Object)A_0).get_name() + " SkinnedMeshRenderer and ParticleSystem can't exist at the same time !"));
				}
			}
		}
		if ((Object)(object)component9 != (Object)null)
		{
			if ((Object)(object)component == (Object)null && (Object)(object)component3 == (Object)null && (Object)(object)component4 == (Object)null && (Object)(object)component5 == (Object)null && (Object)(object)component8 == (Object)null)
			{
				list.Add(global::p.a.k);
			}
			else
			{
				if ((Object)(object)component != (Object)null)
				{
					Debug.LogWarning((object)("LayaAir3D : " + ((Object)A_0).get_name() + " Camera and Terrain can't exist at the same time !"));
				}
				if ((Object)(object)component3 != (Object)null)
				{
					Debug.LogWarning((object)("LayaAir3D : " + ((Object)A_0).get_name() + " MeshFilter and Terrain can't exist at the same time !"));
				}
				if ((Object)(object)component4 != (Object)null)
				{
					Debug.LogWarning((object)("LayaAir3D : " + ((Object)A_0).get_name() + " MeshRenderer and Terrain can't exist at the same time !"));
				}
				if ((Object)(object)component5 != (Object)null)
				{
					Debug.LogWarning((object)("LayaAir3D : " + ((Object)A_0).get_name() + " SkinnedMeshRenderer and Terrain can't exist at the same time !"));
				}
				if ((Object)(object)component8 != (Object)null)
				{
					Debug.LogWarning((object)("LayaAir3D : " + ((Object)A_0).get_name() + " ParticleSystem and Terrain can't exist at the same time !"));
				}
			}
		}
		return list;
	}

	private static string a(string A_0, bool A_1)
	{
		A_0 = A_0.Replace("<", "_");
		A_0 = A_0.Replace(">", "_");
		A_0 = A_0.Replace("\"", "_");
		A_0 = A_0.Replace("|", "_");
		A_0 = A_0.Replace("?", "_");
		A_0 = A_0.Replace("*", "_");
		A_0 = A_0.Replace("#", "_");
		if (A_1)
		{
			A_0 = A_0.Replace("/", "_");
			A_0 = A_0.Replace(":", "_");
		}
		return A_0;
	}

	private static bool a(float A_0, float A_1)
	{
		if ((double)Math.Abs(A_0 - A_1) > 0.01)
		{
			return false;
		}
		return true;
	}

	private static bool a(string A_0, List<string> A_1)
	{
		int num = A_0.Length - 4;
		for (int i = 0; i < A_1.Count; i++)
		{
			if (A_0.IndexOf(A_1[i]) == num)
			{
				return true;
			}
		}
		return false;
	}

	private static void a(string A_0)
	{
		FileStream fileStream = new FileStream(Application.get_dataPath() + "/StreamingAssets/LayaDemo/LayaAir3DSample.js", FileMode.Create, FileAccess.ReadWrite);
		StreamWriter streamWriter = new StreamWriter(fileStream);
		streamWriter.WriteLine("(function(global){");
		streamWriter.WriteLine("var Laya3D = global.Laya3D;");
		streamWriter.WriteLine("var Laya = global.Laya;");
		streamWriter.WriteLine("Laya3D.init(0, 0);");
		streamWriter.WriteLine("Laya.stage.scaleMode = Laya.Stage.SCALE_FULL;");
		streamWriter.WriteLine("Laya.stage.screenMode = Laya.Stage.SCREEN_NONE;");
		streamWriter.WriteLine("Laya.Stat.show();");
		if (global::p.c == 0)
		{
			streamWriter.WriteLine("Laya.Scene3D.load('.previewres" + A_0 + ".ls', Laya.Handler.create(null, function(scene){Laya.stage.addChild(scene); }));");
		}
		else
		{
			streamWriter.WriteLine("var scene = Laya.stage.addChild(new Laya.Scene3D());");
			streamWriter.WriteLine("Laya.Sprite3D.load('.previewres" + A_0 + ".lh', Laya.Handler.create(null, function(sprite){scene.addChild(sprite); }));");
		}
		streamWriter.WriteLine("})(this);");
		streamWriter.Close();
		fileStream.Close();
	}

	private static long g()
	{
		return Convert.ToInt64((DateTime.UtcNow - new DateTime(1970, 1, 1, 0, 0, 0, 0)).TotalMilliseconds);
	}

	private static void f()
	{
		foreach (KeyValuePair<string, TextureInfo> item in ai)
		{
			TextureInfo value = item.Value;
			Texture2D texture = value.texture;
			if (item.Value.format == 0)
			{
				byte[] bytes = ImageConversion.EncodeToJPG(texture, global::p.j);
				File.WriteAllBytes(value.SavePath, bytes);
			}
			else
			{
				byte[] bytes2 = ImageConversion.EncodeToPNG(texture);
				File.WriteAllBytes(value.SavePath, bytes2);
			}
		}
	}

	private static void e()
	{
		global::a.n = "pvr";
		global::a.a += ai.Count;
		foreach (KeyValuePair<string, TextureInfo> item in ai)
		{
			TextureInfo value = item.Value;
			Texture2D texture = value.texture;
			string savePath = value.SavePath;
			global::a.c = value.MipMap;
			int num = Mathf.Max(((Texture)texture).get_width(), ((Texture)texture).get_height());
			if ((num & (num - 1)) != 0)
			{
				int i;
				for (i = 0; (double)num > Math.Pow(2.0, i); i++)
				{
				}
				num = (int)Math.Pow(2.0, i);
			}
			global::a.b = " -m " + value.MipMap.ToString() + " -r " + num.ToString() + "," + num.ToString() + " -q pvrtcfast ";
			if (value.format == 0)
			{
				global::a.m = "PVRTC1_4_RGB";
			}
			else
			{
				global::a.m = "PVRTC1_4";
			}
			global::a.k = ((value.format == 0) ? ImageConversion.EncodeToJPG(texture, 100) : ImageConversion.EncodeToPNG(texture));
			global::a.l = ((value.format == 0) ? "jpg" : "png");
			al.b(savePath);
		}
	}

	private static void d()
	{
		global::a.n = "ktx";
		foreach (KeyValuePair<string, TextureInfo> item in ai)
		{
			TextureInfo value = item.Value;
			Texture2D texture = value.texture;
			if (value.format == 0)
			{
				string savePath = value.SavePath;
				global::a.m = "ETC1";
				global::a.k = ImageConversion.EncodeToJPG(texture, 100);
				global::a.l = "jpg";
				global::a.c = value.MipMap;
				global::a.b = " -m " + value.MipMap.ToString() + " -r " + ((Texture)texture).get_width().ToString() + "," + ((Texture)texture).get_height().ToString() + " -q etcfastperceptual ";
				al.b(savePath);
				global::a.a++;
			}
			else
			{
				string path = value.Path;
				string savePath2 = value.SavePath;
				object obj = (object)(AssetImporter.GetAtPath(path) as TextureImporter);
				((TextureImporter)obj).set_isReadable(true);
				((TextureImporter)obj).set_textureCompression((TextureImporterCompression)0);
				AssetDatabase.ImportAsset(path);
				byte[] bytes = ImageConversion.EncodeToPNG(texture);
				File.WriteAllBytes(savePath2, bytes);
			}
		}
	}

	private static void c()
	{
		foreach (KeyValuePair<string, Mesh> item in aj)
		{
			a(item.Value, item.Key, global::p.h);
		}
	}

	private static void b()
	{
		foreach (KeyValuePair<string, SkinnedMeshRenderer> item in ak)
		{
			a(item.Value, item.Key, global::p.h);
		}
	}

	public static void a()
	{
		//IL_0000: Unknown result type (might be due to invalid IL or missing references)
		//IL_0005: Unknown result type (might be due to invalid IL or missing references)
		Scene activeScene = SceneManager.GetActiveScene();
		GameObject[] rootGameObjects = ((Scene)(ref activeScene)).GetRootGameObjects();
		if (rootGameObjects.Length != 0)
		{
			for (int i = 0; i < rootGameObjects.Length; i++)
			{
				a(rootGameObjects[i].get_gameObject());
			}
		}
	}

	private static void a(GameObject A_0)
	{
		List<a> list = b(A_0);
		Shader shader = Shader.Find("LayaAir3D/Mesh/BlinnPhong");
		Shader shader2 = Shader.Find("LayaAir3D/Particle/ShurikenParticle");
		Shader shader3 = Shader.Find("LayaAir3D/Trail");
		if (list.IndexOf(global::p.a.g) != -1)
		{
			Material[] sharedMaterials = ((Renderer)A_0.GetComponent<MeshRenderer>()).get_sharedMaterials();
			foreach (Material val in sharedMaterials)
			{
				if (!((Object)(object)val == (Object)null))
				{
					val.set_shader(shader);
					b(val);
				}
			}
		}
		if (list.IndexOf(global::p.a.h) != -1)
		{
			Material[] sharedMaterials2 = ((Renderer)A_0.GetComponent<SkinnedMeshRenderer>()).get_sharedMaterials();
			foreach (Material val2 in sharedMaterials2)
			{
				if (!((Object)(object)val2 == (Object)null))
				{
					val2.set_shader(shader);
					b(val2);
				}
			}
		}
		if (list.IndexOf(global::p.a.j) != -1)
		{
			Material sharedMaterial = A_0.GetComponent<Renderer>().get_sharedMaterial();
			if ((Object)(object)sharedMaterial != (Object)null)
			{
				sharedMaterial.set_shader(shader2);
				a(sharedMaterial);
			}
		}
		if (list.IndexOf(global::p.a.n) != -1)
		{
			Material sharedMaterial2 = A_0.GetComponent<Renderer>().get_sharedMaterial();
			if ((Object)(object)sharedMaterial2 != (Object)null)
			{
				sharedMaterial2.set_shader(shader3);
				a(sharedMaterial2);
			}
		}
		if (A_0.get_transform().get_childCount() > 0)
		{
			for (int k = 0; k < A_0.get_transform().get_childCount(); k++)
			{
				a(((Component)A_0.get_transform().GetChild(k)).get_gameObject());
			}
		}
	}

	private static void b(Material A_0)
	{
		switch (A_0.GetInt("_Mode"))
		{
		case 0:
			A_0.SetInt("_AlphaTest", 0);
			A_0.SetInt("_AlphaBlend", 0);
			A_0.SetInt("_SrcBlend", 1);
			A_0.SetInt("_DstBlend", 0);
			A_0.SetInt("_ZWrite", 1);
			A_0.SetInt("_ZTest", 4);
			A_0.DisableKeyword("_ALPHATEST_ON");
			A_0.DisableKeyword("_ALPHABLEND_ON");
			A_0.DisableKeyword("EnableAlphaCutoff");
			A_0.EnableKeyword("EnableLighting");
			A_0.set_renderQueue(2000);
			break;
		case 1:
			A_0.SetInt("_AlphaTest", 1);
			A_0.SetInt("_AlphaBlend", 0);
			A_0.SetInt("_SrcBlend", 1);
			A_0.SetInt("_DstBlend", 0);
			A_0.SetInt("_ZWrite", 1);
			A_0.SetInt("_ZTest", 4);
			A_0.EnableKeyword("_ALPHATEST_ON");
			A_0.DisableKeyword("_ALPHABLEND_ON");
			A_0.EnableKeyword("EnableAlphaCutoff");
			A_0.EnableKeyword("EnableLighting");
			A_0.set_renderQueue(2450);
			break;
		case 2:
			A_0.SetInt("_AlphaTest", 0);
			A_0.SetInt("_AlphaBlend", 1);
			A_0.SetInt("_SrcBlend", 5);
			A_0.SetInt("_DstBlend", 10);
			A_0.SetInt("_ZWrite", 0);
			A_0.SetInt("_ZTest", 4);
			A_0.DisableKeyword("_ALPHATEST_ON");
			A_0.EnableKeyword("_ALPHABLEND_ON");
			A_0.DisableKeyword("EnableAlphaCutoff");
			A_0.EnableKeyword("EnableLighting");
			A_0.set_renderQueue(3000);
			break;
		default:
			A_0.SetInt("_AlphaTest", 0);
			A_0.SetInt("_AlphaBlend", 0);
			A_0.SetInt("_SrcBlend", 1);
			A_0.SetInt("_DstBlend", 0);
			A_0.SetInt("_ZWrite", 1);
			A_0.SetInt("_ZTest", 4);
			A_0.DisableKeyword("_ALPHATEST_ON");
			A_0.DisableKeyword("_ALPHABLEND_ON");
			A_0.DisableKeyword("EnableAlphaCutoff");
			A_0.EnableKeyword("EnableLighting");
			A_0.set_renderQueue(2000);
			break;
		}
	}

	private static void a(Material A_0)
	{
		switch (A_0.GetInt("_Mode"))
		{
		case 0:
			A_0.SetInt("_AlphaTest", 0);
			A_0.SetInt("_AlphaBlend", 1);
			A_0.SetInt("_SrcBlend", 5);
			A_0.SetInt("_DstBlend", 1);
			A_0.SetInt("_ZWrite", 0);
			A_0.SetInt("_ZTest", 4);
			A_0.DisableKeyword("_ALPHATEST_ON");
			A_0.EnableKeyword("_ALPHABLEND_ON");
			A_0.set_renderQueue(3000);
			break;
		case 1:
			A_0.SetInt("_AlphaTest", 0);
			A_0.SetInt("_AlphaBlend", 1);
			A_0.SetInt("_SrcBlend", 5);
			A_0.SetInt("_DstBlend", 10);
			A_0.SetInt("_ZWrite", 0);
			A_0.SetInt("_ZTest", 4);
			A_0.DisableKeyword("_ALPHATEST_ON");
			A_0.EnableKeyword("_ALPHABLEND_ON");
			A_0.set_renderQueue(3000);
			break;
		default:
			A_0.SetInt("_AlphaTest", 0);
			A_0.SetInt("_AlphaBlend", 1);
			A_0.SetInt("_SrcBlend", 5);
			A_0.SetInt("_DstBlend", 10);
			A_0.SetInt("_ZWrite", 0);
			A_0.SetInt("_ZTest", 4);
			A_0.DisableKeyword("_ALPHATEST_ON");
			A_0.EnableKeyword("_ALPHABLEND_ON");
			A_0.set_renderQueue(3000);
			break;
		}
	}

	public p()
	{
		UNrqlvEiaD5r6WCLZt.IpxBSkcjWDvxT();
		base._002Ector();
	}
}
