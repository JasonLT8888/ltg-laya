using mVjiDBJbRPt2wl7USA;
using UnityEditor;
using UnityEngine;

internal class e : EditorWindow
{
	private static Vector2 m_a;

	private static e m_b;

	private static Texture2D c;

	private static Texture2D d;

	private static int m_e;

	private static int f;

	private static int g;

	private static int h;

	private static int i;

	private static int j;

	private static GUIStyle k;

	private static GUIStyle l;

	private static GUIStyle m;

	private static GUIStyle n;

	private static Texture o;

	private static Texture p;

	private static Texture q;

	private static Texture r;

	private static Texture s;

	private static Texture t;

	[MenuItem("LayaAir3D/Help/Tutorial", false)]
	private static void a()
	{
		//IL_001d: Unknown result type (might be due to invalid IL or missing references)
		//IL_0023: Expected O, but got Unknown
		//IL_0034: Unknown result type (might be due to invalid IL or missing references)
		//IL_003a: Expected O, but got Unknown
		//IL_0049: Unknown result type (might be due to invalid IL or missing references)
		//IL_0053: Expected O, but got Unknown
		//IL_0066: Unknown result type (might be due to invalid IL or missing references)
		//IL_0070: Expected O, but got Unknown
		//IL_0089: Unknown result type (might be due to invalid IL or missing references)
		//IL_008e: Unknown result type (might be due to invalid IL or missing references)
		//IL_00b0: Unknown result type (might be due to invalid IL or missing references)
		//IL_00cc: Unknown result type (might be due to invalid IL or missing references)
		//IL_00f3: Unknown result type (might be due to invalid IL or missing references)
		//IL_010f: Unknown result type (might be due to invalid IL or missing references)
		global::e.m_b = (e)(object)EditorWindow.GetWindow(typeof(e));
		Texture2D val = (Texture2D)(object)new Texture2D(16, 16);
		PaymentPage.a("Assets/LayaAir3D/LayaTool/LayaResouce/layabox.png", val);
		GUIContent titleContent = (GUIContent)(object)new GUIContent("LayaAir3D", (Texture)(object)val);
		((EditorWindow)global::e.m_b).set_titleContent(titleContent);
		c = (Texture2D)(object)new Texture2D(14, 14);
		PaymentPage.a("Assets/LayaAir3D/LayaTool/LayaResouce/Open.png", c);
		d = (Texture2D)(object)new Texture2D(14, 14);
		PaymentPage.a("Assets/LayaAir3D/LayaTool/LayaResouce/Close.png", d);
		Color textColor = EditorStyles.get_label().get_normal().get_textColor();
		k.set_fontSize(15);
		k.set_fontStyle((FontStyle)1);
		k.get_normal().set_textColor(textColor);
		l.set_fontSize(12);
		l.get_normal().set_textColor(textColor);
		m.set_fontSize(16);
		m.set_fontStyle((FontStyle)1);
		m.get_normal().set_textColor(textColor);
		n.set_fontSize(12);
		n.get_normal().set_textColor(textColor);
		o = (Texture)(object)c;
		p = (Texture)(object)c;
		q = (Texture)(object)c;
		r = (Texture)(object)c;
		s = (Texture)(object)c;
		t = (Texture)(object)c;
	}

	private void OnGUI()
	{
		//IL_0000: Unknown result type (might be due to invalid IL or missing references)
		//IL_000b: Unknown result type (might be due to invalid IL or missing references)
		//IL_0010: Unknown result type (might be due to invalid IL or missing references)
		global::e.m_a = GUILayout.BeginScrollView(global::e.m_a, (GUILayoutOption[])(object)new GUILayoutOption[0]);
		GUILayout.Label("", (GUILayoutOption[])(object)new GUILayoutOption[1]
		{
			GUILayout.Height(20f)
		});
		GUILayout.Label("                            推荐使用Unity2018.4.7版本", m, (GUILayoutOption[])(object)new GUILayoutOption[1]
		{
			GUILayout.ExpandWidth(true)
		});
		GUILayout.Label("", (GUILayoutOption[])(object)new GUILayoutOption[1]
		{
			GUILayout.Height(20f)
		});
		a(ref o, "节点");
		if ((Object)(object)o == (Object)(object)c)
		{
			b(f, "(1)相机");
			b(g, "兼容Camera组件");
			b(f, "(2)光照");
			b(g, "兼容DirectionLight组件、PointLight组件、SpotLight组件,目前Mode为RealTime时仅支持三种类型灯光各一盏");
			a(h, "\u00a0Type(Directional、Point、Spot)");
			a(h, "\u00a0Color");
			a(h, " Mode(RealTime、Baked)   注：暂不支持Mixed,烘焙光照贴图需要选择Baked");
			a(h, "\u00a0Intensity");
			b(f, "(3)模型");
			b(g, "兼容MeshRender和MeshFilter组件");
			b(f, "(4)粒子");
			b(g, "兼容ParticleSystem组件部分模块");
			a(h, "\u00a0Emission");
			a(i, "\u00a0Rate over Time(Constant)");
			a(i, "\u00a0Bursts");
			a(h, " Shape(SphereShape、HemisphereShape、BoxShape、CircleShape、ConeShape)");
			a(h, "\u00a0Velocity over Lifetime");
			a(h, "\u00a0Color over Lifetime");
			a(h, " Size over Lifetime");
			a(h, "\u00a0Texture Sheet Animation");
			a(h, " Rotation Over LifeTime");
			b(f, "(5)拖尾");
			b(f + m_e, "兼容TrailRender组件");
			b(f, "(6)地形");
			b(f + m_e, "兼容Terrain组件 仅支持地表 不支持植被  导出时会转换为静态Mesh网格");
		}
		GUILayout.Label("", (GUILayoutOption[])(object)new GUILayoutOption[1]
		{
			GUILayout.Height(5f)
		});
		a(ref p, "纹理");
		if ((Object)(object)p == (Object)(object)c)
		{
			b(f, "兼容纹理属性面板中的部分属性");
			a(g, " Mip Map");
			a(g, " Wrap Mode");
			a(g, " Filter Mode");
			a(g, " Aniso Level");
		}
		GUILayout.Label("", (GUILayoutOption[])(object)new GUILayoutOption[1]
		{
			GUILayout.Height(5f)
		});
		a(ref q, "材质");
		if ((Object)(object)q == (Object)(object)c)
		{
			b(f, "支持Shader列表中LayaAir3D目录中的所有Shader");
			b(f, "如使用非LayaAir3D Shader会强制转换为LayaAir3D的默认Shader");
		}
		GUILayout.Label("", (GUILayoutOption[])(object)new GUILayoutOption[1]
		{
			GUILayout.Height(5f)
		});
		a(ref r, "动画");
		if ((Object)(object)r == (Object)(object)c)
		{
			b(f, "兼容Animator组件和关联的AnimatorState");
		}
		GUILayout.Label("", (GUILayoutOption[])(object)new GUILayoutOption[1]
		{
			GUILayout.Height(5f)
		});
		a(ref s, "物理");
		if ((Object)(object)s == (Object)(object)c)
		{
			b(f, "兼容BoxCollider、SphereCollider、CapsuleCollider、MeshCollider组件");
			b(f, "兼容Rigidbody组件");
		}
		GUILayout.Label("", (GUILayoutOption[])(object)new GUILayoutOption[1]
		{
			GUILayout.Height(5f)
		});
		a(ref t, "光照配置");
		if ((Object)(object)t == (Object)(object)c)
		{
			b(f, "兼容Lighting面板中的部分属性,不支持Auto Generate,需要手动点击Generate Lighting");
			b(g, "Scene:");
			a(h, " Lighting->");
			a(i, " Environment->");
			a(j, " Skybox Material(material)    注：请使用LayaAir3D/Sky目录下Shader");
			a(i, " Environment Lighting->");
			a(j, " Source(Skybox、Color)");
			a(j, " Ambient Color");
			a(j, " Ambient Mode(Realtime)");
			a(i, " Lightmapping Settings->");
			b(i, "    全部支持,但不包含 Directional Mode(Directional)    注：烘焙光照贴图必须使用Non-Directional");
			b(g, "Global maps:");
			b(g, "可导出,效果和PC、Mac & Linux Standalone保持一致");
		}
		GUILayout.EndScrollView();
	}

	private void a(ref Texture A_0, string A_1)
	{
		GUILayout.BeginHorizontal((GUILayoutOption[])(object)new GUILayoutOption[0]);
		GUILayout.Label("", (GUILayoutOption[])(object)new GUILayoutOption[1]
		{
			GUILayout.Width(15f)
		});
		if (GUILayout.Button(A_0, k, (GUILayoutOption[])(object)new GUILayoutOption[2]
		{
			GUILayout.Width(15f),
			GUILayout.Height(15f)
		}))
		{
			if ((Object)(object)A_0 == (Object)(object)c)
			{
				A_0 = (Texture)(object)d;
			}
			else
			{
				A_0 = (Texture)(object)c;
			}
		}
		GUILayout.Label(A_1, k, (GUILayoutOption[])(object)new GUILayoutOption[1]
		{
			GUILayout.ExpandWidth(true)
		});
		GUILayout.EndHorizontal();
	}

	private void b(int A_0, string A_1)
	{
		GUILayout.BeginHorizontal((GUILayoutOption[])(object)new GUILayoutOption[0]);
		GUILayout.Label("", (GUILayoutOption[])(object)new GUILayoutOption[1]
		{
			GUILayout.Width((float)A_0)
		});
		GUILayout.Label(A_1, l, (GUILayoutOption[])(object)new GUILayoutOption[1]
		{
			GUILayout.ExpandWidth(true)
		});
		GUILayout.EndHorizontal();
	}

	private void a(int A_0, string A_1)
	{
		GUILayout.BeginHorizontal((GUILayoutOption[])(object)new GUILayoutOption[0]);
		GUILayout.Label("", (GUILayoutOption[])(object)new GUILayoutOption[1]
		{
			GUILayout.Width((float)A_0)
		});
		GUILayout.Label(" · ", m, (GUILayoutOption[])(object)new GUILayoutOption[1]
		{
			GUILayout.Width(10f)
		});
		GUILayout.Label(A_1, n, (GUILayoutOption[])(object)new GUILayoutOption[1]
		{
			GUILayout.ExpandWidth(true)
		});
		GUILayout.EndHorizontal();
	}

	public e()
	{
		UNrqlvEiaD5r6WCLZt.IpxBSkcjWDvxT();
		((EditorWindow)this)._002Ector();
	}

	static e()
	{
		//IL_0059: Unknown result type (might be due to invalid IL or missing references)
		//IL_0063: Expected O, but got Unknown
		//IL_0063: Unknown result type (might be due to invalid IL or missing references)
		//IL_006d: Expected O, but got Unknown
		//IL_006d: Unknown result type (might be due to invalid IL or missing references)
		//IL_0077: Expected O, but got Unknown
		//IL_0077: Unknown result type (might be due to invalid IL or missing references)
		//IL_0081: Expected O, but got Unknown
		UNrqlvEiaD5r6WCLZt.IpxBSkcjWDvxT();
		m_e = 18;
		f = 30;
		g = f + m_e;
		h = f + m_e * 2;
		i = f + m_e * 3;
		j = f + m_e * 4;
		k = (GUIStyle)(object)new GUIStyle();
		l = (GUIStyle)(object)new GUIStyle();
		m = (GUIStyle)(object)new GUIStyle();
		n = (GUIStyle)(object)new GUIStyle();
	}
}
