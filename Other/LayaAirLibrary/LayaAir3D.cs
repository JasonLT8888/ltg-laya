using mVjiDBJbRPt2wl7USA;
using System;
using System.Collections.Generic;
using System.Collections.Specialized;
using System.Diagnostics;
using System.Net;
using System.Net.Sockets;
using System.Text.RegularExpressions;
using System.Xml;
using UnityEditor;
using UnityEngine;
using Util;

public class LayaAir3D : EditorWindow
{
	public enum ConfigEnum
	{
		config1,
		config2,
		config3,
		config4,
		config5
	}

	private enum a
	{
		a,
		b
	}

	public enum TerrainToMeshResolution
	{
		VeryHeight = 2,
		Height = 4,
		Medium = 8,
		Low = 0x10,
		VeryLow = 0x20
	}

	public enum TerrainToMeshResolutionHanHua
	{
		非常高 = 2,
		高 = 4,
		中等 = 8,
		低 = 0x10,
		非常低 = 0x20
	}

	private static int m_a;

	private static bool m_b;

	private static bool m_c;

	public static int curNodePort;

	public static bool isHaveCmdPath;

	private static ConfigEnum m_d;

	public static int curConfigIndex;

	private static int m_e;

	private static int m_f;

	private static Vector2 m_g;

	private static bool m_h;

	private static bool m_i;

	private static bool m_j;

	private static bool m_k;

	private static bool m_l;

	private static bool m;

	private static bool n;

	private static bool o;

	private static bool p;

	private static TerrainToMeshResolution q;

	private static TerrainToMeshResolutionHanHua r;

	private static bool s;

	private static bool t;

	private static bool u;

	private static bool v;

	private static bool w;

	private static bool x;

	private static bool y;

	private static string z;

	private static bool aa;

	public static bool Android;

	public static bool Ios;

	public static bool Conventional;

	private static string ab;

	private static Texture2D ac;

	private static Texture2D ad;

	private static Texture2D ae;

	private static float af;

	private static GUIStyle ag;

	private static bool ah;

	private bool ai;

	private int aj;

	private bool ak;

	private int al;

	private bool am;

	private int an;

	private bool ao;

	private int ap;

	public static LayaAir3D layaWindow;

	public static int language;

	public static long adTime;

	public static string str_Scene;

	public static string str_Sprite3D;

	public static string str_MeshSetting;

	public static string str_IgnoreVerticesUV;

	public static string str_IgnoreVerticesColor;

	public static string str_IgnoreVerticesNormal;

	public static string str_IgnoreVerticesTangent;

	public static string str_Compress;

	public static string str_ThisfunctionneedVIP;

	public static string str_PleaseBindthecurrentdevice;

	public static string str_TerrainSetting;

	public static string str_ConvertTerrainToMesh;

	public static string str_Resolution;

	public static string str_GameObjectSetting;

	public static string str_IgnoreNotActiveGameObjects;

	public static string str_BatchMakeTheFirstLevelGameObjects;

	public static string str_Assetsplatform;

	public static string str_AnimationSetting;

	public static string str_OtherSetting;

	public static string str_CustomizeExportRootDirectoryName;

	public static string str_SavePathcannotbeempty;

	public static string str_SavePath;

	public static string str_Browse;

	public static string str_ClearConfig;

	public static string str_LayaAirRun;

	public static string str_LayaAirExport;

	public static string str_Exportaddresscannotbeempty;

	public static string str_JPGQuality;

	public static string str_erweimaIcon;

	public static string str_time;

	public static string str_Copy;

	public static string str_ip;

	public static CustomExport customExport;

	[MenuItem("LayaAir3D/Export Tool", false, 1)]
	public static void initLayaExport()
	{
		//IL_001d: Unknown result type (might be due to invalid IL or missing references)
		//IL_0023: Expected O, but got Unknown
		//IL_0034: Unknown result type (might be due to invalid IL or missing references)
		//IL_003a: Expected O, but got Unknown
		//IL_005a: Unknown result type (might be due to invalid IL or missing references)
		//IL_0064: Expected O, but got Unknown
		//IL_0077: Unknown result type (might be due to invalid IL or missing references)
		//IL_0081: Expected O, but got Unknown
		//IL_0094: Unknown result type (might be due to invalid IL or missing references)
		//IL_009e: Expected O, but got Unknown
		//IL_00b7: Unknown result type (might be due to invalid IL or missing references)
		layaWindow = (LayaAir3D)(object)EditorWindow.GetWindow(typeof(LayaAir3D));
		Texture2D val = (Texture2D)(object)new Texture2D(16, 16);
		PaymentPage.a("Assets/LayaAir3D/LayaTool/LayaResouce/layabox.png", val);
		GUIContent titleContent = (GUIContent)(object)new GUIContent(" LayaAir3D", (Texture)(object)val);
		((EditorWindow)layaWindow).set_titleContent(titleContent);
		((EditorWindow)layaWindow).Show(true);
		readConfiguration(readConfig: true);
		ac = (Texture2D)(object)new Texture2D(52, 52);
		PaymentPage.a("Assets/LayaAir3D/LayaTool/LayaResouce/erweitu.png", ac);
		ad = (Texture2D)(object)new Texture2D(52, 52);
		PaymentPage.a("Assets/LayaAir3D/LayaTool/LayaResouce/Play.png", ad);
		ae = (Texture2D)(object)new Texture2D(52, 52);
		PaymentPage.a("Assets/LayaAir3D/LayaTool/LayaResouce/Export.png", ae);
		ag.get_normal().set_textColor(Color.get_red());
	}

	[MenuItem("LayaAir3D/Shortcuts/Switch to LayaAir3D Shader", false)]
	private static void l()
	{
		global::p.a();
	}

	[MenuItem("LayaAir3D/Help/Demo", false)]
	private static void k()
	{
		Application.OpenURL("https://layaair.ldc.layabox.com/demo2");
	}

	[MenuItem("LayaAir3D/Help/Study")]
	private static void j()
	{
		Application.OpenURL("https://ldc.layabox.com/doc");
	}

	[MenuItem("LayaAir3D/Help/Answsers")]
	private static void i()
	{
		Application.OpenURL("https://ask.layabox.com");
	}

	private void OnEnable()
	{
		str_ip = b();
	}

	private void OnGUI()
	{
		//IL_005f: Unknown result type (might be due to invalid IL or missing references)
		//IL_0089: Expected O, but got Unknown
		//IL_0106: Unknown result type (might be due to invalid IL or missing references)
		//IL_0130: Expected O, but got Unknown
		//IL_016b: Unknown result type (might be due to invalid IL or missing references)
		//IL_0195: Expected O, but got Unknown
		//IL_01db: Unknown result type (might be due to invalid IL or missing references)
		//IL_01e0: Unknown result type (might be due to invalid IL or missing references)
		//IL_0204: Unknown result type (might be due to invalid IL or missing references)
		//IL_0209: Unknown result type (might be due to invalid IL or missing references)
		//IL_021c: Unknown result type (might be due to invalid IL or missing references)
		//IL_0253: Unknown result type (might be due to invalid IL or missing references)
		//IL_0258: Unknown result type (might be due to invalid IL or missing references)
		//IL_026c: Unknown result type (might be due to invalid IL or missing references)
		//IL_0271: Unknown result type (might be due to invalid IL or missing references)
		//IL_028e: Unknown result type (might be due to invalid IL or missing references)
		//IL_02ad: Unknown result type (might be due to invalid IL or missing references)
		//IL_02b2: Unknown result type (might be due to invalid IL or missing references)
		//IL_02cf: Unknown result type (might be due to invalid IL or missing references)
		//IL_0330: Unknown result type (might be due to invalid IL or missing references)
		//IL_0335: Unknown result type (might be due to invalid IL or missing references)
		//IL_0358: Unknown result type (might be due to invalid IL or missing references)
		//IL_0363: Unknown result type (might be due to invalid IL or missing references)
		//IL_0368: Unknown result type (might be due to invalid IL or missing references)
		//IL_046c: Unknown result type (might be due to invalid IL or missing references)
		//IL_0471: Unknown result type (might be due to invalid IL or missing references)
		//IL_06a2: Unknown result type (might be due to invalid IL or missing references)
		//IL_06a7: Unknown result type (might be due to invalid IL or missing references)
		//IL_06d9: Unknown result type (might be due to invalid IL or missing references)
		//IL_070b: Unknown result type (might be due to invalid IL or missing references)
		//IL_07ee: Unknown result type (might be due to invalid IL or missing references)
		//IL_07f3: Unknown result type (might be due to invalid IL or missing references)
		//IL_08f6: Unknown result type (might be due to invalid IL or missing references)
		//IL_08fb: Unknown result type (might be due to invalid IL or missing references)
		//IL_0940: Unknown result type (might be due to invalid IL or missing references)
		//IL_0945: Unknown result type (might be due to invalid IL or missing references)
		//IL_099d: Unknown result type (might be due to invalid IL or missing references)
		//IL_09a2: Unknown result type (might be due to invalid IL or missing references)
		//IL_0a81: Unknown result type (might be due to invalid IL or missing references)
		//IL_0a86: Unknown result type (might be due to invalid IL or missing references)
		//IL_0ab8: Unknown result type (might be due to invalid IL or missing references)
		//IL_0aea: Unknown result type (might be due to invalid IL or missing references)
		//IL_0bd2: Unknown result type (might be due to invalid IL or missing references)
		//IL_0bd7: Unknown result type (might be due to invalid IL or missing references)
		//IL_0d27: Unknown result type (might be due to invalid IL or missing references)
		//IL_0d2c: Unknown result type (might be due to invalid IL or missing references)
		//IL_0da9: Unknown result type (might be due to invalid IL or missing references)
		//IL_0dae: Unknown result type (might be due to invalid IL or missing references)
		//IL_0de3: Unknown result type (might be due to invalid IL or missing references)
		//IL_0e2d: Unknown result type (might be due to invalid IL or missing references)
		//IL_0ec5: Unknown result type (might be due to invalid IL or missing references)
		//IL_0eca: Unknown result type (might be due to invalid IL or missing references)
		//IL_0eff: Unknown result type (might be due to invalid IL or missing references)
		//IL_0f49: Unknown result type (might be due to invalid IL or missing references)
		//IL_1090: Unknown result type (might be due to invalid IL or missing references)
		//IL_1095: Unknown result type (might be due to invalid IL or missing references)
		//IL_11c9: Unknown result type (might be due to invalid IL or missing references)
		//IL_11ce: Unknown result type (might be due to invalid IL or missing references)
		//IL_1203: Unknown result type (might be due to invalid IL or missing references)
		//IL_1209: Expected O, but got Unknown
		//IL_120f: Unknown result type (might be due to invalid IL or missing references)
		if (str_Scene == null)
		{
			ReadLanguage(1);
		}
		if ((Object)(object)ac == (Object)null)
		{
			initLayaExport();
		}
		EditorGUI.BeginDisabledGroup(PaymentPage.al);
		EditorGUI.BeginDisabledGroup(global::a.a != 0);
		GUILayout.Space(23f);
		GUILayout.BeginHorizontal((GUILayoutOption[])(object)new GUILayoutOption[0]);
		GUILayout.Space(30f);
		if (GUILayout.Button((GUIContent)(object)new GUIContent(str_LayaAirRun, (Texture)(object)ad), (GUILayoutOption[])(object)new GUILayoutOption[2]
		{
			GUILayout.Height(26f),
			GUILayout.Width(80f)
		}))
		{
			Debug.Log((object)(global::p.a + "Start Exporting"));
			global::p.c = 0;
			exportResource(isDebug: true, 0, "/Conventional");
			runLayaDemo();
			if (global::a.a == 0)
			{
				Debug.Log((object)(global::p.a + "Exporting Success"));
			}
		}
		GUILayout.Label("", (GUILayoutOption[])(object)new GUILayoutOption[2]
		{
			GUILayout.Height(26f),
			GUILayout.Width(14f)
		});
		if (GUILayout.Button((GUIContent)(object)new GUIContent(str_erweimaIcon, (Texture)(object)ac), (GUILayoutOption[])(object)new GUILayoutOption[2]
		{
			GUILayout.Height(26f),
			GUILayout.Width(80f)
		}))
		{
			global::d.b();
		}
		GUILayout.Label("", (GUILayoutOption[])(object)new GUILayoutOption[2]
		{
			GUILayout.Height(26f),
			GUILayout.Width(14f)
		});
		if (GUILayout.Button((GUIContent)(object)new GUIContent(str_LayaAirExport, (Texture)(object)ae), (GUILayoutOption[])(object)new GUILayoutOption[2]
		{
			GUILayout.Height(26f),
			GUILayout.Width(80f)
		}))
		{
			ExportResources();
		}
		GUILayout.EndHorizontal();
		GUILayout.Space(21f);
		GUILayout.BeginHorizontal((GUILayoutOption[])(object)new GUILayoutOption[0]);
		GUILayout.Space(25f);
		GUILayoutOption[] obj = new GUILayoutOption[2]
		{
			GUILayout.Height(3f),
			default(GUILayoutOption)
		};
		Rect position = ((EditorWindow)this).get_position();
		obj[1] = GUILayout.Width(((Rect)(ref position)).get_width() - 50f);
		GUILayout.Box("", (GUILayoutOption[])(object)obj);
		position = ((EditorWindow)this).get_position();
		GUI.Box(new Rect(24f, 74f, ((Rect)(ref position)).get_width() - 50f, 2f), "");
		GUILayout.EndHorizontal();
		GUILayout.Space(10f);
		GUILayout.BeginHorizontal((GUILayoutOption[])(object)new GUILayoutOption[1]
		{
			GUILayout.Height(30f)
		});
		position = ((EditorWindow)this).get_position();
		GUILayout.Space(((Rect)(ref position)).get_width() - 105f);
		position = ((EditorWindow)this).get_position();
		LayaAir3D.m_d = (ConfigEnum)(object)EditorGUI.EnumPopup(new Rect(((Rect)(ref position)).get_width() - 193f, 95f, 70f, 20f), (Enum)LayaAir3D.m_d);
		position = ((EditorWindow)this).get_position();
		if (GUI.Button(new Rect(((Rect)(ref position)).get_width() - 119f, 95f, 95f, 15f), str_ClearConfig))
		{
			g();
		}
		GUILayout.EndHorizontal();
		GUILayout.BeginHorizontal((GUILayoutOption[])(object)new GUILayoutOption[0]);
		GUILayout.Space(24f);
		int num = LayaAir3D.m_f;
		string[] obj2 = new string[2]
		{
			str_Scene,
			str_Sprite3D
		};
		GUILayoutOption[] obj3 = new GUILayoutOption[2]
		{
			GUILayout.Height(30f),
			default(GUILayoutOption)
		};
		position = ((EditorWindow)this).get_position();
		obj3[1] = GUILayout.Width(((Rect)(ref position)).get_width() - 48f);
		LayaAir3D.m_f = GUILayout.Toolbar(num, obj2, (GUILayoutOption[])(object)obj3);
		GUILayout.EndHorizontal();
		LayaAir3D.m_g = GUILayout.BeginScrollView(LayaAir3D.m_g, (GUILayoutOption[])(object)new GUILayoutOption[0]);
		GUILayout.Space(25f);
		GUILayout.BeginHorizontal((GUILayoutOption[])(object)new GUILayoutOption[0]);
		GUILayout.Space(21f);
		s = EditorGUILayout.Foldout(s, str_GameObjectSetting, true);
		GUILayout.EndHorizontal();
		if (s)
		{
			GUILayout.BeginHorizontal((GUILayoutOption[])(object)new GUILayoutOption[0]);
			GUILayout.Space(21f);
			GUILayout.Label("", (GUILayoutOption[])(object)new GUILayoutOption[1]
			{
				GUILayout.Width(15f)
			});
			GUILayout.BeginVertical((GUILayoutOption[])(object)new GUILayoutOption[1]
			{
				GUILayout.ExpandWidth(true)
			});
			t = GUILayout.Toggle(t, str_IgnoreNotActiveGameObjects, (GUILayoutOption[])(object)new GUILayoutOption[0]);
			if (LayaAir3D.m_f == 1)
			{
				u = GUILayout.Toggle(u, str_BatchMakeTheFirstLevelGameObjects, (GUILayoutOption[])(object)new GUILayoutOption[0]);
			}
			GUILayout.EndVertical();
			GUILayout.EndHorizontal();
		}
		GUILayout.BeginHorizontal((GUILayoutOption[])(object)new GUILayoutOption[0]);
		GUILayout.Space(25f);
		GUILayoutOption[] obj4 = new GUILayoutOption[2]
		{
			GUILayout.Height(1f),
			default(GUILayoutOption)
		};
		position = ((EditorWindow)this).get_position();
		obj4[1] = GUILayout.Width(((Rect)(ref position)).get_width() - 50f);
		GUILayout.Box("", (GUILayoutOption[])(object)obj4);
		GUILayout.EndHorizontal();
		GUILayout.Space(10f);
		GUILayout.BeginHorizontal((GUILayoutOption[])(object)new GUILayoutOption[0]);
		GUILayout.Space(21f);
		LayaAir3D.m_h = EditorGUILayout.Foldout(LayaAir3D.m_h, str_MeshSetting, true);
		GUILayout.EndHorizontal();
		if (LayaAir3D.m_h)
		{
			GUILayout.BeginVertical((GUILayoutOption[])(object)new GUILayoutOption[1]
			{
				GUILayout.ExpandWidth(true)
			});
			GUILayout.BeginHorizontal((GUILayoutOption[])(object)new GUILayoutOption[0]);
			GUILayout.Space(21f);
			GUILayout.Label("", ag, (GUILayoutOption[])(object)new GUILayoutOption[1]
			{
				GUILayout.Width(15f)
			});
			LayaAir3D.m_i = GUILayout.Toggle(LayaAir3D.m_i, str_IgnoreVerticesUV, (GUILayoutOption[])(object)new GUILayoutOption[0]);
			GUILayout.EndHorizontal();
			GUILayout.BeginHorizontal((GUILayoutOption[])(object)new GUILayoutOption[0]);
			GUILayout.Space(21f);
			GUILayout.Label("", ag, (GUILayoutOption[])(object)new GUILayoutOption[1]
			{
				GUILayout.Width(15f)
			});
			LayaAir3D.m_l = GUILayout.Toggle(LayaAir3D.m_l, str_IgnoreVerticesColor, (GUILayoutOption[])(object)new GUILayoutOption[0]);
			GUILayout.EndHorizontal();
			GUILayout.BeginHorizontal((GUILayoutOption[])(object)new GUILayoutOption[0]);
			GUILayout.Space(21f);
			GUILayout.Label("", ag, (GUILayoutOption[])(object)new GUILayoutOption[1]
			{
				GUILayout.Width(15f)
			});
			LayaAir3D.m_j = GUILayout.Toggle(LayaAir3D.m_j, str_IgnoreVerticesNormal, (GUILayoutOption[])(object)new GUILayoutOption[0]);
			GUILayout.EndHorizontal();
			GUILayout.BeginHorizontal((GUILayoutOption[])(object)new GUILayoutOption[0]);
			GUILayout.Space(21f);
			GUILayout.Label("", ag, (GUILayoutOption[])(object)new GUILayoutOption[1]
			{
				GUILayout.Width(15f)
			});
			LayaAir3D.m_k = GUILayout.Toggle(LayaAir3D.m_k, str_IgnoreVerticesTangent, (GUILayoutOption[])(object)new GUILayoutOption[0]);
			GUILayout.EndHorizontal();
			GUILayout.BeginHorizontal((GUILayoutOption[])(object)new GUILayoutOption[0]);
			GUILayout.Space(21f);
			GUILayout.Label("", ag, (GUILayoutOption[])(object)new GUILayoutOption[1]
			{
				GUILayout.Width(15f)
			});
			m = GUILayout.Toggle(m, str_Compress, (GUILayoutOption[])(object)new GUILayoutOption[0]);
			GUIStyle obj5 = ag;
			GUILayoutOption[] array = new GUILayoutOption[1];
			position = ((EditorWindow)this).get_position();
			array[0] = GUILayout.Width(((Rect)(ref position)).get_width() - 240f);
			GUILayout.Label("", obj5, (GUILayoutOption[])(object)array);
			if (ai)
			{
				if (!global::a.e)
				{
					ag.get_normal().set_textColor(Color.get_red());
					GUILayout.Label(str_ThisfunctionneedVIP, ag, (GUILayoutOption[])(object)new GUILayoutOption[0]);
				}
				else if (!global::a.s)
				{
					ag.get_normal().set_textColor(Color.get_red());
					GUILayout.Label(str_PleaseBindthecurrentdevice, ag, (GUILayoutOption[])(object)new GUILayoutOption[0]);
				}
			}
			else
			{
				GUILayout.Label("", ag, (GUILayoutOption[])(object)new GUILayoutOption[0]);
			}
			if (m)
			{
				if (global::a.u == 2)
				{
					if (!global::a.e)
					{
						ai = true;
						aj = 0;
						PaymentPage.b();
					}
					if (!global::a.s)
					{
						ai = true;
						aj = 0;
					}
				}
				else
				{
					LoginWindow.e = true;
					ai = true;
					aj = 0;
					LoginWindow.initExport();
				}
			}
			if (!global::a.e)
			{
				m = false;
			}
			if (!global::a.s)
			{
				m = false;
			}
			GUILayout.EndHorizontal();
			GUILayout.EndVertical();
		}
		GUILayout.BeginHorizontal((GUILayoutOption[])(object)new GUILayoutOption[0]);
		GUILayout.Space(25f);
		GUILayoutOption[] obj6 = new GUILayoutOption[2]
		{
			GUILayout.Height(1f),
			default(GUILayoutOption)
		};
		position = ((EditorWindow)this).get_position();
		obj6[1] = GUILayout.Width(((Rect)(ref position)).get_width() - 50f);
		GUILayout.Box("", (GUILayoutOption[])(object)obj6);
		GUILayout.EndHorizontal();
		GUILayout.Space(10f);
		GUILayout.BeginHorizontal((GUILayoutOption[])(object)new GUILayoutOption[0]);
		GUILayout.Space(21f);
		o = EditorGUILayout.Foldout(o, str_TerrainSetting, true);
		GUILayout.EndHorizontal();
		if (o)
		{
			GUILayout.BeginHorizontal((GUILayoutOption[])(object)new GUILayoutOption[0]);
			GUILayout.Space(21f);
			GUILayout.Label("", (GUILayoutOption[])(object)new GUILayoutOption[1]
			{
				GUILayout.Width(15f)
			});
			p = GUILayout.Toggle(p, str_ConvertTerrainToMesh, (GUILayoutOption[])(object)new GUILayoutOption[0]);
			GUILayout.EndHorizontal();
			if (p)
			{
				GUILayout.BeginHorizontal((GUILayoutOption[])(object)new GUILayoutOption[0]);
				GUILayout.Label("", (GUILayoutOption[])(object)new GUILayoutOption[1]
				{
					GUILayout.Width(30f)
				});
				if (language == 0)
				{
					string text = str_Resolution;
					object obj7 = q;
					GUILayoutOption[] array2 = new GUILayoutOption[1];
					position = ((EditorWindow)this).get_position();
					array2[0] = GUILayout.Width(((Rect)(ref position)).get_width() - 63f);
					q = (TerrainToMeshResolution)(object)EditorGUILayout.EnumPopup(text, (Enum)obj7, (GUILayoutOption[])(object)array2);
				}
				else if (language == 1)
				{
					string text2 = str_Resolution;
					object obj8 = r;
					GUILayoutOption[] array3 = new GUILayoutOption[1];
					position = ((EditorWindow)this).get_position();
					array3[0] = GUILayout.Width(((Rect)(ref position)).get_width() - 63f);
					r = (TerrainToMeshResolutionHanHua)(object)EditorGUILayout.EnumPopup(text2, (Enum)obj8, (GUILayoutOption[])(object)array3);
				}
				GUILayout.EndHorizontal();
			}
		}
		GUILayout.BeginHorizontal((GUILayoutOption[])(object)new GUILayoutOption[0]);
		GUILayout.Space(25f);
		GUILayoutOption[] obj9 = new GUILayoutOption[2]
		{
			GUILayout.Height(1f),
			default(GUILayoutOption)
		};
		position = ((EditorWindow)this).get_position();
		obj9[1] = GUILayout.Width(((Rect)(ref position)).get_width() - 50f);
		GUILayout.Box("", (GUILayoutOption[])(object)obj9);
		GUILayout.EndHorizontal();
		GUILayout.Space(10f);
		GUILayout.BeginHorizontal((GUILayoutOption[])(object)new GUILayoutOption[0]);
		GUILayout.Space(21f);
		w = EditorGUILayout.Foldout(w, str_AnimationSetting, true);
		GUILayout.EndHorizontal();
		if (w)
		{
			GUILayout.BeginHorizontal((GUILayoutOption[])(object)new GUILayoutOption[0]);
			GUILayout.Space(21f);
			GUILayout.Label("", (GUILayoutOption[])(object)new GUILayoutOption[1]
			{
				GUILayout.Width(15f)
			});
			GUILayout.BeginVertical((GUILayoutOption[])(object)new GUILayoutOption[1]
			{
				GUILayout.ExpandWidth(true)
			});
			GUILayout.BeginHorizontal((GUILayoutOption[])(object)new GUILayoutOption[0]);
			x = GUILayout.Toggle(x, str_Compress, (GUILayoutOption[])(object)new GUILayoutOption[0]);
			GUIStyle obj10 = ag;
			GUILayoutOption[] array4 = new GUILayoutOption[1];
			position = ((EditorWindow)this).get_position();
			array4[0] = GUILayout.Width(((Rect)(ref position)).get_width() - 240f);
			GUILayout.Label("", obj10, (GUILayoutOption[])(object)array4);
			if (ao)
			{
				if (!global::a.e)
				{
					ag.get_normal().set_textColor(Color.get_red());
					GUILayout.Label(str_ThisfunctionneedVIP, ag, (GUILayoutOption[])(object)new GUILayoutOption[0]);
				}
				else if (!global::a.s)
				{
					ag.get_normal().set_textColor(Color.get_red());
					GUILayout.Label(str_PleaseBindthecurrentdevice, ag, (GUILayoutOption[])(object)new GUILayoutOption[0]);
				}
			}
			else
			{
				GUILayout.Label("", ag, (GUILayoutOption[])(object)new GUILayoutOption[0]);
			}
			if (x)
			{
				if (global::a.u == 2)
				{
					if (!global::a.e)
					{
						ao = true;
						ap = 0;
						PaymentPage.b();
					}
					if (!global::a.s)
					{
						ao = true;
						ap = 0;
					}
				}
				else
				{
					LoginWindow.e = true;
					ao = true;
					ap = 0;
					LoginWindow.initExport();
				}
			}
			if (!global::a.e)
			{
				x = false;
			}
			if (!global::a.s)
			{
				x = false;
			}
			GUILayout.EndHorizontal();
			GUILayout.EndVertical();
			GUILayout.EndHorizontal();
		}
		GUILayout.BeginHorizontal((GUILayoutOption[])(object)new GUILayoutOption[0]);
		GUILayout.Space(25f);
		GUILayoutOption[] obj11 = new GUILayoutOption[2]
		{
			GUILayout.Height(1f),
			default(GUILayoutOption)
		};
		position = ((EditorWindow)this).get_position();
		obj11[1] = GUILayout.Width(((Rect)(ref position)).get_width() - 50f);
		GUILayout.Box("", (GUILayoutOption[])(object)obj11);
		GUILayout.EndHorizontal();
		GUILayout.Space(10f);
		GUILayout.BeginHorizontal((GUILayoutOption[])(object)new GUILayoutOption[0]);
		GUILayout.Space(21f);
		aa = EditorGUILayout.Foldout(aa, str_Assetsplatform, true);
		GUILayout.EndHorizontal();
		if (aa)
		{
			GUILayout.BeginHorizontal((GUILayoutOption[])(object)new GUILayoutOption[0]);
			GUILayout.Space(17f);
			GUILayout.Label("", (GUILayoutOption[])(object)new GUILayoutOption[1]
			{
				GUILayout.Width(15f)
			});
			GUILayout.BeginVertical((GUILayoutOption[])(object)new GUILayoutOption[1]
			{
				GUILayout.ExpandWidth(true)
			});
			GUILayout.BeginHorizontal((GUILayoutOption[])(object)new GUILayoutOption[0]);
			Conventional = GUILayout.Toggle(Conventional, " Conventional", (GUILayoutOption[])(object)new GUILayoutOption[0]);
			GUILayout.Label("", ag, (GUILayoutOption[])(object)new GUILayoutOption[0]);
			GUILayout.EndHorizontal();
			if (Conventional)
			{
				GUILayout.BeginHorizontal((GUILayoutOption[])(object)new GUILayoutOption[0]);
				GUILayout.Space(21f);
				GUILayout.Label("", (GUILayoutOption[])(object)new GUILayoutOption[1]
				{
					GUILayout.Width(15f)
				});
				GUILayout.Label(str_JPGQuality, (GUILayoutOption[])(object)new GUILayoutOption[1]
				{
					GUILayout.Width(70f)
				});
				int num2 = global::p.j;
				GUILayoutOption[] array5 = new GUILayoutOption[1];
				position = ((EditorWindow)this).get_position();
				array5[0] = GUILayout.Width(((Rect)(ref position)).get_width() - 175f);
				global::p.j = EditorGUILayout.IntSlider(num2, 1, 100, (GUILayoutOption[])(object)array5);
				GUILayout.Label("", ag, (GUILayoutOption[])(object)new GUILayoutOption[0]);
				GUILayout.EndHorizontal();
			}
			GUILayout.BeginHorizontal((GUILayoutOption[])(object)new GUILayoutOption[0]);
			Android = GUILayout.Toggle(Android, " Android", (GUILayoutOption[])(object)new GUILayoutOption[1]
			{
				GUILayout.Height(15f)
			});
			GUIStyle obj12 = ag;
			GUILayoutOption[] array6 = new GUILayoutOption[1];
			position = ((EditorWindow)this).get_position();
			array6[0] = GUILayout.Width(((Rect)(ref position)).get_width() - 270f);
			GUILayout.Label("", obj12, (GUILayoutOption[])(object)array6);
			if (ak)
			{
				if (!global::a.e)
				{
					ag.get_normal().set_textColor(Color.get_red());
					ag.set_alignment((TextAnchor)6);
					GUILayout.Label(str_ThisfunctionneedVIP, ag, (GUILayoutOption[])(object)new GUILayoutOption[1]
					{
						GUILayout.Height(15f)
					});
				}
				else if (!global::a.s)
				{
					ag.get_normal().set_textColor(Color.get_red());
					ag.set_alignment((TextAnchor)6);
					GUILayout.Label(str_PleaseBindthecurrentdevice, ag, (GUILayoutOption[])(object)new GUILayoutOption[1]
					{
						GUILayout.Height(15f)
					});
				}
			}
			else
			{
				GUILayout.Label("", ag, (GUILayoutOption[])(object)new GUILayoutOption[1]
				{
					GUILayout.Height(15f)
				});
			}
			GUILayout.EndHorizontal();
			GUILayout.BeginHorizontal((GUILayoutOption[])(object)new GUILayoutOption[0]);
			Ios = GUILayout.Toggle(Ios, " iOS", (GUILayoutOption[])(object)new GUILayoutOption[0]);
			GUIStyle obj13 = ag;
			GUILayoutOption[] array7 = new GUILayoutOption[1];
			position = ((EditorWindow)this).get_position();
			array7[0] = GUILayout.Width(((Rect)(ref position)).get_width() - 242f);
			GUILayout.Label("", obj13, (GUILayoutOption[])(object)array7);
			if (am)
			{
				if (!global::a.e)
				{
					ag.get_normal().set_textColor(Color.get_red());
					ag.set_alignment((TextAnchor)6);
					GUILayout.Label(str_ThisfunctionneedVIP, ag, (GUILayoutOption[])(object)new GUILayoutOption[1]
					{
						GUILayout.Height(15f)
					});
				}
				else if (!global::a.s)
				{
					ag.get_normal().set_textColor(Color.get_red());
					ag.set_alignment((TextAnchor)6);
					GUILayout.Label(str_PleaseBindthecurrentdevice, ag, (GUILayoutOption[])(object)new GUILayoutOption[1]
					{
						GUILayout.Height(15f)
					});
				}
			}
			else
			{
				GUILayout.Label("", ag, (GUILayoutOption[])(object)new GUILayoutOption[1]
				{
					GUILayout.Height(15f)
				});
			}
			GUILayout.EndHorizontal();
			if (Android || Ios)
			{
				if (global::a.u == 2)
				{
					if (!global::a.d || !global::a.s)
					{
						if (Android)
						{
							ak = true;
							al = 0;
						}
						else
						{
							am = true;
							an = 0;
						}
						if (!global::a.d)
						{
							PaymentPage.b();
						}
					}
				}
				else
				{
					LoginWindow.e = true;
					if (Android)
					{
						ak = true;
						al = 0;
					}
					else
					{
						am = true;
						an = 0;
					}
					LoginWindow.initExport();
				}
			}
			if (!global::a.d)
			{
				Android = false;
				Ios = false;
			}
			if (!global::a.s)
			{
				Android = false;
				Ios = false;
			}
			GUILayout.EndVertical();
			GUILayout.EndHorizontal();
		}
		GUILayout.BeginHorizontal((GUILayoutOption[])(object)new GUILayoutOption[0]);
		GUILayout.Space(25f);
		GUILayoutOption[] obj14 = new GUILayoutOption[2]
		{
			GUILayout.Height(1f),
			default(GUILayoutOption)
		};
		position = ((EditorWindow)this).get_position();
		obj14[1] = GUILayout.Width(((Rect)(ref position)).get_width() - 50f);
		GUILayout.Box("", (GUILayoutOption[])(object)obj14);
		GUILayout.EndHorizontal();
		GUILayout.Space(10f);
		GUILayout.BeginHorizontal((GUILayoutOption[])(object)new GUILayoutOption[0]);
		GUILayout.Space(21f);
		v = EditorGUILayout.Foldout(v, str_OtherSetting, true);
		GUILayout.EndHorizontal();
		if (v)
		{
			GUILayout.BeginHorizontal((GUILayoutOption[])(object)new GUILayoutOption[0]);
			GUILayout.Space(21f);
			GUILayout.Label("", (GUILayoutOption[])(object)new GUILayoutOption[1]
			{
				GUILayout.Width(15f)
			});
			GUILayout.BeginVertical((GUILayoutOption[])(object)new GUILayoutOption[1]
			{
				GUILayout.ExpandWidth(true)
			});
			GUILayout.BeginHorizontal((GUILayoutOption[])(object)new GUILayoutOption[0]);
			y = GUILayout.Toggle(y, str_CustomizeExportRootDirectoryName, (GUILayoutOption[])(object)new GUILayoutOption[1]
			{
				GUILayout.Width(250f)
			});
			if (y)
			{
				z = GUILayout.TextField(z, (GUILayoutOption[])(object)new GUILayoutOption[0]);
			}
			GUILayout.EndHorizontal();
			GUILayout.EndVertical();
			GUILayout.EndHorizontal();
		}
		GUILayout.BeginHorizontal((GUILayoutOption[])(object)new GUILayoutOption[0]);
		GUILayout.Space(25f);
		GUILayoutOption[] obj15 = new GUILayoutOption[2]
		{
			GUILayout.Height(1f),
			default(GUILayoutOption)
		};
		position = ((EditorWindow)this).get_position();
		obj15[1] = GUILayout.Width(((Rect)(ref position)).get_width() - 50f);
		GUILayout.Box("", (GUILayoutOption[])(object)obj15);
		GUILayout.EndHorizontal();
		GUILayout.EndScrollView();
		GUILayout.BeginHorizontal((GUILayoutOption[])(object)new GUILayoutOption[0]);
		if (ah)
		{
			GUIStyle val = (GUIStyle)(object)new GUIStyle();
			val.get_normal().set_textColor(Color.get_red());
			GUILayout.Label(str_SavePathcannotbeempty, val, (GUILayoutOption[])(object)new GUILayoutOption[0]);
		}
		GUILayout.EndHorizontal();
		GUILayout.BeginHorizontal((GUILayoutOption[])(object)new GUILayoutOption[0]);
		GUILayout.Space(21f);
		GUILayout.Label(str_SavePath, (GUILayoutOption[])(object)new GUILayoutOption[1]
		{
			GUILayout.Width(65f)
		});
		ab = GUILayout.TextField(ab, (GUILayoutOption[])(object)new GUILayoutOption[1]
		{
			GUILayout.Height(21f)
		});
		if (ab != "")
		{
			ah = false;
			((EditorWindow)this).Repaint();
		}
		if (GUILayout.Button(str_Browse, (GUILayoutOption[])(object)new GUILayoutOption[2]
		{
			GUILayout.MaxWidth(100f),
			GUILayout.Height(22f)
		}))
		{
			ab = EditorUtility.SaveFolderPanel("LayaUnityPlugin", "Assets", "");
		}
		GUILayout.Space(21f);
		GUILayout.EndHorizontal();
		GUILayout.Space(30f);
		EditorGUI.EndDisabledGroup();
		EditorGUI.EndDisabledGroup();
	}

	public static void ReadFileExportResources()
	{
		ReadExportConfig();
		ExportResources();
	}

	public static void ExportResources()
	{
		if (ab == "")
		{
			ah = true;
			Debug.LogError((object)str_Exportaddresscannotbeempty);
			return;
		}
		if (customExport != null)
		{
			customExport.StartHierarchysExport(ab);
		}
		global::p.c = LayaAir3D.m_f;
		if (Ios || Android || m || x)
		{
			if (global::a.j == "")
			{
				LoginWindow.initExport();
			}
			else
			{
				LoginWindow.d.j();
			}
			return;
		}
		Debug.Log((object)(global::p.a + "Start Exporting"));
		if (Conventional)
		{
			exportResource(isDebug: false, 0, "/Conventional");
		}
		if (global::a.a == 0)
		{
			Debug.Log((object)(global::p.a + "Exporting Success"));
		}
		if (customExport != null)
		{
			customExport.EndHierarchysExport(ab);
		}
	}

	private void h()
	{
		if (LayaAir3D.m_d == ConfigEnum.config1)
		{
			curConfigIndex = 1;
		}
		else if (LayaAir3D.m_d == ConfigEnum.config2)
		{
			curConfigIndex = 2;
		}
		else if (LayaAir3D.m_d == ConfigEnum.config3)
		{
			curConfigIndex = 3;
		}
		else if (LayaAir3D.m_d == ConfigEnum.config4)
		{
			curConfigIndex = 4;
		}
		else if (LayaAir3D.m_d == ConfigEnum.config5)
		{
			curConfigIndex = 5;
		}
		if (LayaAir3D.m_e != curConfigIndex)
		{
			readConfiguration(readConfig: false);
			LayaAir3D.m_e = curConfigIndex;
		}
	}

	public static void exportResource(bool isDebug, int Platformindex, string lastname)
	{
		if ((ab != null && ab.Length != 0) | isDebug)
		{
			f();
			global::p.d = LayaAir3D.m_i;
			global::p.f = LayaAir3D.m_j;
			global::p.g = LayaAir3D.m_k;
			global::p.e = LayaAir3D.m_l;
			global::p.h = m;
			global::p.i = x;
			global::p.k = p;
			if (language == 0)
			{
				global::p.l = (int)q;
			}
			else if (language == 1)
			{
				global::p.l = (int)r;
			}
			global::p.m = t;
			global::p.n = u;
			global::p.o = y;
			global::p.p = z;
			global::p.r = af;
			global::p.t = Android;
			global::p.s = Ios;
			global::p.u = Conventional;
			if (isDebug)
			{
				global::p.q = Application.get_dataPath() + "/StreamingAssets/LayaDemo/.previewres";
				global::p.n = false;
			}
			else
			{
				global::p.q = ab;
			}
			global::p.v = Platformindex;
			global::p.b(lastname);
			global::p.ai.Clear();
		}
		else
		{
			Debug.LogWarning((object)"LayaUnityPlugin : Please check exporting path !");
		}
	}

	private static void g()
	{
		LayaAir3D.m_f = 0;
		LayaAir3D.m_h = false;
		LayaAir3D.m_i = false;
		LayaAir3D.m_j = false;
		LayaAir3D.m_k = false;
		LayaAir3D.m_l = false;
		m = false;
		n = false;
		global::p.j = 75;
		o = false;
		p = false;
		if (language == 0)
		{
			q = TerrainToMeshResolution.Medium;
		}
		else if (language == 1)
		{
			r = TerrainToMeshResolutionHanHua.中等;
		}
		s = false;
		t = false;
		u = false;
		v = false;
		x = false;
		w = false;
		y = false;
		z = "";
		ab = "";
		LayaAir3D.m_g.y = 0f;
		Ios = false;
		Android = false;
		Conventional = true;
	}

	public static void ReadExportConfig()
	{
		readConfiguration(readConfig: true);
	}

	public static void readConfiguration(bool readConfig)
	{
		XmlDocument xmlDocument = new XmlDocument();
		xmlDocument.Load("Assets/LayaAir3D/LayaTool/Configuration.xml");
		XmlNodeList childNodes = xmlDocument.SelectSingleNode("LayaExportSetting").ChildNodes;
		if (readConfig)
		{
			switch (int.Parse(childNodes[0].InnerText))
			{
			case 1:
				LayaAir3D.m_d = ConfigEnum.config1;
				break;
			case 2:
				LayaAir3D.m_d = ConfigEnum.config2;
				break;
			case 3:
				LayaAir3D.m_d = ConfigEnum.config3;
				break;
			case 4:
				LayaAir3D.m_d = ConfigEnum.config4;
				break;
			case 5:
				LayaAir3D.m_d = ConfigEnum.config5;
				break;
			}
			LayaAir3D.m_e = (curConfigIndex = int.Parse(childNodes[0].InnerText));
		}
		LayaAir3D.m_f = int.Parse(childNodes[curConfigIndex].SelectSingleNode("FirstlevelMenu").InnerText);
		LayaAir3D.m_h = bool.Parse(childNodes[curConfigIndex].SelectSingleNode("MeshSetting").InnerText);
		LayaAir3D.m_i = bool.Parse(childNodes[curConfigIndex].SelectSingleNode("IgnoreVerticesUV").InnerText);
		LayaAir3D.m_j = bool.Parse(childNodes[curConfigIndex].SelectSingleNode("IgnoreVerticesNormal").InnerText);
		LayaAir3D.m_k = bool.Parse(childNodes[curConfigIndex].SelectSingleNode("IgnoreVerticesTangent").InnerText);
		LayaAir3D.m_l = bool.Parse(childNodes[curConfigIndex].SelectSingleNode("IgnoreVerticesColor").InnerText);
		m = bool.Parse(childNodes[curConfigIndex].SelectSingleNode("CompressMesh").InnerText);
		x = bool.Parse(childNodes[curConfigIndex].SelectSingleNode("AnimatorCompress").InnerText);
		n = bool.Parse(childNodes[curConfigIndex].SelectSingleNode("TextureSetting").InnerText);
		global::p.j = int.Parse(childNodes[curConfigIndex].SelectSingleNode("JPGQuality").InnerText);
		o = bool.Parse(childNodes[curConfigIndex].SelectSingleNode("TerrainSetting").InnerText);
		p = bool.Parse(childNodes[curConfigIndex].SelectSingleNode("ConvertTerrain").InnerText);
		switch (int.Parse(childNodes[curConfigIndex].SelectSingleNode("TerrainToMeshResolution").InnerText))
		{
		case 2:
			q = TerrainToMeshResolution.VeryHeight;
			r = TerrainToMeshResolutionHanHua.非常高;
			break;
		case 4:
			q = TerrainToMeshResolution.Height;
			r = TerrainToMeshResolutionHanHua.高;
			break;
		case 8:
			q = TerrainToMeshResolution.Medium;
			r = TerrainToMeshResolutionHanHua.中等;
			break;
		case 16:
			q = TerrainToMeshResolution.Low;
			r = TerrainToMeshResolutionHanHua.低;
			break;
		case 32:
			q = TerrainToMeshResolution.VeryLow;
			r = TerrainToMeshResolutionHanHua.非常低;
			break;
		default:
			q = TerrainToMeshResolution.Medium;
			r = TerrainToMeshResolutionHanHua.中等;
			break;
		}
		s = bool.Parse(childNodes[curConfigIndex].SelectSingleNode("GameObjectSetting").InnerText);
		t = bool.Parse(childNodes[curConfigIndex].SelectSingleNode("IgnoreNotActiveGameObject").InnerText);
		u = bool.Parse(childNodes[curConfigIndex].SelectSingleNode("BatchMade").InnerText);
		v = bool.Parse(childNodes[curConfigIndex].SelectSingleNode("OtherSetting").InnerText);
		y = bool.Parse(childNodes[curConfigIndex].SelectSingleNode("CustomizeDirectory").InnerText);
		z = childNodes[curConfigIndex].SelectSingleNode("CustomizeDirectoryName").InnerText;
		Ios = bool.Parse(childNodes[curConfigIndex].SelectSingleNode("Ios").InnerText);
		Android = bool.Parse(childNodes[curConfigIndex].SelectSingleNode("Android").InnerText);
		Conventional = bool.Parse(childNodes[curConfigIndex].SelectSingleNode("Conventional").InnerText);
		ab = childNodes[curConfigIndex].SelectSingleNode("SavePath").InnerText;
		LayaAir3D.m_g.y = float.Parse(childNodes[curConfigIndex].SelectSingleNode("ScrollPositionY").InnerText);
		language = int.Parse(childNodes[6].InnerText);
		adTime = long.Parse(childNodes[7].InnerText);
		if (adTime == 0L)
		{
			adTime = global::a.a();
			childNodes[7].InnerText = adTime.ToString();
			LoginWindow.d.l();
		}
		else if (global::a.a() - adTime > 86400)
		{
			adTime = global::a.a();
			LoginWindow.d.l();
			childNodes[7].InnerText = adTime.ToString();
		}
		ReadLanguage(language);
		if ((Object)(object)layaWindow != (Object)null)
		{
			((EditorWindow)layaWindow).Repaint();
		}
		xmlDocument.Save("Assets/LayaAir3D/LayaTool/Configuration.xml");
	}

	private void OnInspectorUpdate()
	{
		if (ai)
		{
			aj++;
			if (aj == 5)
			{
				ai = false;
			}
		}
		if (ak)
		{
			al++;
			if (al == 5)
			{
				ak = false;
			}
		}
		if (am)
		{
			an++;
			if (an == 5)
			{
				am = false;
			}
		}
		if (ao)
		{
			ap++;
			if (ap == 5)
			{
				ao = false;
			}
		}
	}

	private static void f()
	{
		XmlDocument xmlDocument = new XmlDocument();
		xmlDocument.Load("Assets/LayaAir3D/LayaTool/Configuration.xml");
		XmlNodeList childNodes = xmlDocument.SelectSingleNode("LayaExportSetting").ChildNodes;
		childNodes[0].InnerText = curConfigIndex.ToString();
		childNodes[curConfigIndex].SelectSingleNode("FirstlevelMenu").InnerText = LayaAir3D.m_f.ToString();
		childNodes[curConfigIndex].SelectSingleNode("MeshSetting").InnerText = LayaAir3D.m_h.ToString();
		childNodes[curConfigIndex].SelectSingleNode("IgnoreVerticesUV").InnerText = LayaAir3D.m_i.ToString();
		childNodes[curConfigIndex].SelectSingleNode("IgnoreVerticesNormal").InnerText = LayaAir3D.m_j.ToString();
		childNodes[curConfigIndex].SelectSingleNode("IgnoreVerticesTangent").InnerText = LayaAir3D.m_k.ToString();
		childNodes[curConfigIndex].SelectSingleNode("IgnoreVerticesColor").InnerText = LayaAir3D.m_l.ToString();
		childNodes[curConfigIndex].SelectSingleNode("CompressMesh").InnerText = m.ToString();
		childNodes[curConfigIndex].SelectSingleNode("AnimatorCompress").InnerText = x.ToString();
		childNodes[curConfigIndex].SelectSingleNode("TextureSetting").InnerText = n.ToString();
		childNodes[curConfigIndex].SelectSingleNode("JPGQuality").InnerText = global::p.j.ToString();
		childNodes[curConfigIndex].SelectSingleNode("TerrainSetting").InnerText = o.ToString();
		childNodes[curConfigIndex].SelectSingleNode("ConvertTerrain").InnerText = p.ToString();
		if (language == 0)
		{
			XmlNode xmlNode = childNodes[curConfigIndex].SelectSingleNode("TerrainToMeshResolution");
			int num = (int)q;
			xmlNode.InnerText = num.ToString();
		}
		else if (language == 1)
		{
			XmlNode xmlNode2 = childNodes[curConfigIndex].SelectSingleNode("TerrainToMeshResolution");
			int num = (int)r;
			xmlNode2.InnerText = num.ToString();
		}
		childNodes[curConfigIndex].SelectSingleNode("GameObjectSetting").InnerText = s.ToString();
		childNodes[curConfigIndex].SelectSingleNode("IgnoreNotActiveGameObject").InnerText = t.ToString();
		childNodes[curConfigIndex].SelectSingleNode("BatchMade").InnerText = u.ToString();
		childNodes[curConfigIndex].SelectSingleNode("OtherSetting").InnerText = v.ToString();
		childNodes[curConfigIndex].SelectSingleNode("CustomizeDirectory").InnerText = y.ToString();
		childNodes[curConfigIndex].SelectSingleNode("CustomizeDirectoryName").InnerText = z;
		childNodes[curConfigIndex].SelectSingleNode("Ios").InnerText = Ios.ToString();
		childNodes[curConfigIndex].SelectSingleNode("Android").InnerText = Android.ToString();
		childNodes[curConfigIndex].SelectSingleNode("Conventional").InnerText = Conventional.ToString();
		childNodes[curConfigIndex].SelectSingleNode("SavePath").InnerText = ab;
		childNodes[curConfigIndex].SelectSingleNode("ScrollPositionY").InnerText = LayaAir3D.m_g.y.ToString();
		childNodes[6].InnerText = language.ToString();
		xmlDocument.Save("Assets/LayaAir3D/LayaTool/Configuration.xml");
	}

	private static void e()
	{
		XmlDocument xmlDocument = new XmlDocument();
		xmlDocument.Load("Assets/LayaAir3D/LayaTool/English.xml");
		Debug.Log((object)xmlDocument.SelectSingleNode("EnglishLanguage").SelectSingleNode("IgnoreNotActiveGameObject").InnerText);
	}

	public static void ReadLanguage(int index)
	{
		language = index;
		XmlDocument xmlDocument = new XmlDocument();
		XmlNode xmlNode;
		if (index == 0)
		{
			xmlDocument.Load("Assets/LayaAir3D/LayaTool/English.xml");
			xmlNode = xmlDocument.SelectSingleNode("EnglishLanguage");
		}
		else
		{
			xmlDocument.Load("Assets/LayaAir3D/LayaTool/Chinese.xml");
			xmlNode = xmlDocument.SelectSingleNode("ChineseLanguage");
		}
		str_Scene = xmlNode.SelectSingleNode("Scene").InnerText;
		str_Sprite3D = xmlNode.SelectSingleNode("Sprite3D").InnerText;
		str_MeshSetting = xmlNode.SelectSingleNode("MeshSetting").InnerText;
		str_IgnoreVerticesUV = xmlNode.SelectSingleNode("IgnoreVerticesUV").InnerText;
		str_IgnoreVerticesColor = xmlNode.SelectSingleNode("IgnoreVerticesColor").InnerText;
		str_IgnoreVerticesNormal = xmlNode.SelectSingleNode("IgnoreVerticesNormal").InnerText;
		str_IgnoreVerticesTangent = xmlNode.SelectSingleNode("IgnoreVerticesTangent").InnerText;
		str_Compress = xmlNode.SelectSingleNode("Compress").InnerText;
		str_ThisfunctionneedVIP = xmlNode.SelectSingleNode("ThisfunctionneedVIP").InnerText;
		str_PleaseBindthecurrentdevice = xmlNode.SelectSingleNode("PleaseBindthecurrentdevice").InnerText;
		str_TerrainSetting = xmlNode.SelectSingleNode("TerrainSetting").InnerText;
		str_ConvertTerrainToMesh = xmlNode.SelectSingleNode("ConvertTerrainToMesh").InnerText;
		str_Resolution = xmlNode.SelectSingleNode("Resolution").InnerText;
		str_GameObjectSetting = xmlNode.SelectSingleNode("GameObjectSetting").InnerText;
		str_IgnoreNotActiveGameObjects = xmlNode.SelectSingleNode("IgnoreNotActiveGameObjects").InnerText;
		str_BatchMakeTheFirstLevelGameObjects = xmlNode.SelectSingleNode("BatchMakeTheFirstLevelGameObjects").InnerText;
		str_Assetsplatform = xmlNode.SelectSingleNode("Assetsplatform").InnerText;
		str_AnimationSetting = xmlNode.SelectSingleNode("AnimationSetting").InnerText;
		str_OtherSetting = xmlNode.SelectSingleNode("OtherSetting").InnerText;
		str_CustomizeExportRootDirectoryName = xmlNode.SelectSingleNode("CustomizeExportRootDirectoryName").InnerText;
		str_SavePathcannotbeempty = xmlNode.SelectSingleNode("SavePathcannotbeempty").InnerText;
		str_SavePath = xmlNode.SelectSingleNode("SavePath").InnerText;
		str_Browse = xmlNode.SelectSingleNode("Browse").InnerText;
		str_ClearConfig = xmlNode.SelectSingleNode("ClearConfig").InnerText;
		str_LayaAirRun = xmlNode.SelectSingleNode("LayaAirRun").InnerText;
		str_LayaAirExport = xmlNode.SelectSingleNode("LayaAirExport").InnerText;
		str_Exportaddresscannotbeempty = xmlNode.SelectSingleNode("Exportaddresscannotbeempty").InnerText;
		str_JPGQuality = xmlNode.SelectSingleNode("JPGquality").InnerText;
		str_Copy = xmlNode.SelectSingleNode("Copy").InnerText;
		str_erweimaIcon = xmlNode.SelectSingleNode("erweimatu").InnerText;
		LoginWindow.y = xmlNode.SelectSingleNode("Accountorpassworderror").InnerText;
		LoginWindow.z = xmlNode.SelectSingleNode("Accountpasswordcannotbeempty").InnerText;
		LoginWindow.aa = xmlNode.SelectSingleNode("Pleaserecheckthenetwork").InnerText;
		LoginWindow.ab = xmlNode.SelectSingleNode("Logonfailed").InnerText;
		LoginWindow.ac = xmlNode.SelectSingleNode("Account").InnerText;
		LoginWindow.ad = xmlNode.SelectSingleNode("Password").InnerText;
		LoginWindow.ae = xmlNode.SelectSingleNode("Login").InnerText;
		LoginWindow.af = xmlNode.SelectSingleNode("Forgetpassword").InnerText;
		LoginWindow.ag = xmlNode.SelectSingleNode("register").InnerText;
		LoginWindow.ah = xmlNode.SelectSingleNode("NotOpen").InnerText;
		LoginWindow.ai = xmlNode.SelectSingleNode("Recharge").InnerText;
		LoginWindow.aj = xmlNode.SelectSingleNode("VIPFunction").InnerText;
		LoginWindow.ak = xmlNode.SelectSingleNode("Function1").InnerText;
		LoginWindow.al = xmlNode.SelectSingleNode("Function2").InnerText;
		LoginWindow.am = xmlNode.SelectSingleNode("Function3").InnerText;
		LoginWindow.ao = xmlNode.SelectSingleNode("BindingDevice").InnerText;
		LoginWindow.ap = xmlNode.SelectSingleNode("Unbind").InnerText;
		LoginWindow.aq = xmlNode.SelectSingleNode("SignOut").InnerText;
		LoginWindow.ar = xmlNode.SelectSingleNode("Refresh").InnerText;
		LoginWindow.@as = xmlNode.SelectSingleNode("Invoice").InnerText;
		LoginWindow.an = xmlNode.SelectSingleNode("LearnMore").InnerText;
		LoginWindow.at = xmlNode.SelectSingleNode("qiyeVIP").InnerText;
		LoginWindow.au = xmlNode.SelectSingleNode("gerenVIP").InnerText;
		LoginWindow.av = xmlNode.SelectSingleNode("putongVIP").InnerText;
		global::h.a = xmlNode.SelectSingleNode("LayaBoxVersion").InnerText;
		global::h.b = xmlNode.SelectSingleNode("AboutLayaAir").InnerText;
		global::i.c = xmlNode.SelectSingleNode("downloadNodejs").InnerText;
		global::i.d = xmlNode.SelectSingleNode("unity").InnerText;
		global::i.e = xmlNode.SelectSingleNode("down").InnerText;
		global::j.b = xmlNode.SelectSingleNode("Unbindlingfail").InnerText;
		global::j.c = xmlNode.SelectSingleNode("accountDevice").InnerText;
		global::j.d = xmlNode.SelectSingleNode("UnbindSuccess").InnerText;
		global::j.e = xmlNode.SelectSingleNode("YourAcountNeedReLogin").InnerText;
		global::a.y = xmlNode.SelectSingleNode("Expired").InnerText;
	}

	private static void d()
	{
		//IL_0006: Unknown result type (might be due to invalid IL or missing references)
		//IL_000c: Invalid comparison between Unknown and I4
		//IL_0016: Unknown result type (might be due to invalid IL or missing references)
		//IL_001c: Invalid comparison between Unknown and I4
		string text = "";
		if ((int)SystemInfo.get_operatingSystemFamily() == 1)
		{
			text = "lsof -i tcp:port | awk '{print $2}' | tail -n +2";
		}
		else if ((int)SystemInfo.get_operatingSystemFamily() == 2)
		{
			text = "netstat -ano | findstr :port";
		}
		text = text.Replace("port", curNodePort.ToString());
		string text2 = global::q.a(text);
		for (int i = 0; i < 50; i++)
		{
			if (text2 == null)
			{
				break;
			}
			if (text2.Contains("TIME_WAIT"))
			{
				break;
			}
			text = text.Replace(curNodePort.ToString(), (curNodePort + 2).ToString());
			text2 = global::q.a(text);
			curNodePort += 2;
		}
	}

	private static void c()
	{
		//IL_0000: Unknown result type (might be due to invalid IL or missing references)
		//IL_0006: Invalid comparison between Unknown and I4
		//IL_0037: Unknown result type (might be due to invalid IL or missing references)
		//IL_003d: Invalid comparison between Unknown and I4
		if ((int)SystemInfo.get_operatingSystemFamily() == 1)
		{
			string environmentVariable = Environment.GetEnvironmentVariable("PATH");
			if (!environmentVariable.Contains("/usr/local/bin"))
			{
				environmentVariable += ":/usr/local/bin/";
				Environment.SetEnvironmentVariable("PATH", environmentVariable);
			}
		}
		if ((int)SystemInfo.get_operatingSystemFamily() == 2 && !isHaveCmdPath)
		{
			string str = Environment.ExpandEnvironmentVariables("%SystemRoot%");
			string text = str + "/system32";
			string text2 = str + "/System32/Wbem";
			string environmentVariable2 = Environment.GetEnvironmentVariable("PATH");
			environmentVariable2 = environmentVariable2 + ";" + text + ";" + text2;
			Environment.SetEnvironmentVariable("PATH", environmentVariable2);
			isHaveCmdPath = true;
		}
		string text3 = global::q.a("node -v");
		if (text3 != null && text3.Contains("v"))
		{
			LayaAir3D.m_b = true;
		}
	}

	public static void runLayaDemo(bool isSilent = false)
	{
		if (LayaAir3D.m_c)
		{
			if (!isSilent)
			{
				string str = str_ip + ":" + curNodePort;
				str = "http://" + str + "/index.html";
				Application.OpenURL(str);
			}
			return;
		}
		if (!LayaAir3D.m_b)
		{
			c();
			if (!LayaAir3D.m_b)
			{
				Debug.Log((object)"Please install and configure Node.js first!");
				global::i.a();
				return;
			}
		}
		d();
		string a_ = Application.get_dataPath() + "/StreamingAssets/LayaDemo";
		string arg = "node ./node_modules/anywhere/bin/anywhere ";
		arg = arg + "-p " + curNodePort;
		LayaAir3D.m_a = global::q.a(a_, arg, isSilent);
		LayaAir3D.m_c = true;
	}

	private void OnDestroy()
	{
		if (LayaAir3D.m_b && LayaAir3D.m_a != 0)
		{
			Process.GetProcessById(LayaAir3D.m_a).Kill();
			LayaAir3D.m_c = false;
			LayaAir3D.m_a = 0;
			destoryNodeProcess();
		}
		f();
	}

	public static void destoryNodeProcess()
	{
		//IL_0006: Unknown result type (might be due to invalid IL or missing references)
		//IL_000c: Invalid comparison between Unknown and I4
		//IL_0016: Unknown result type (might be due to invalid IL or missing references)
		//IL_001c: Invalid comparison between Unknown and I4
		//IL_0051: Unknown result type (might be due to invalid IL or missing references)
		//IL_0057: Invalid comparison between Unknown and I4
		//IL_006b: Unknown result type (might be due to invalid IL or missing references)
		//IL_0071: Invalid comparison between Unknown and I4
		try
		{
			string text = "";
			if ((int)SystemInfo.get_operatingSystemFamily() == 1)
			{
				text = "lsof -i tcp:port | awk '{print $2}' | tail -n +2";
			}
			else if ((int)SystemInfo.get_operatingSystemFamily() == 2)
			{
				text = "netstat -ano | findstr :port";
			}
			text = text.Replace("port", curNodePort.ToString());
			string text2 = global::q.a(text);
			if (text2 != null)
			{
				new List<int>();
				int result = 0;
				bool flag = false;
				if ((int)SystemInfo.get_operatingSystemFamily() == 1)
				{
					text2 = text2.Trim();
					flag = int.TryParse(text2, out result);
				}
				else if ((int)SystemInfo.get_operatingSystemFamily() == 2)
				{
					text2 = text2.Trim();
					if (text2.Length > 0 && (text2.Contains("TCP") || text2.Contains("UDP")))
					{
						string[] array = new Regex("\\s+").Split(text2);
						if (array.Length >= 4)
						{
							flag = int.TryParse(array[4], out result);
						}
					}
				}
				if (flag)
				{
					Process.GetProcessById(result).Kill();
				}
			}
		}
		catch (Exception ex)
		{
			Debug.LogError((object)ex);
		}
	}

	private string b()
	{
		using (Socket socket = new Socket(AddressFamily.InterNetwork, SocketType.Dgram, ProtocolType.IP))
		{
			socket.Connect("8.8.8.8", 65530);
			return (socket.LocalEndPoint as IPEndPoint).Address.ToString();
		}
	}

	private string a()
	{
		IPAddress[] hostAddresses = Dns.GetHostAddresses(Dns.GetHostName());
		StringCollection stringCollection = new StringCollection();
		IPAddress[] array = hostAddresses;
		foreach (IPAddress iPAddress in array)
		{
			if (iPAddress.AddressFamily == AddressFamily.InterNetwork)
			{
				stringCollection.Add(iPAddress.ToString());
			}
		}
		string[] array2 = new string[stringCollection.Count];
		stringCollection.CopyTo(array2, 0);
		return array2[0];
	}

	public LayaAir3D()
	{
		UNrqlvEiaD5r6WCLZt.IpxBSkcjWDvxT();
		((EditorWindow)this)._002Ector();
	}

	static LayaAir3D()
	{
		//IL_005d: Unknown result type (might be due to invalid IL or missing references)
		//IL_0067: Expected O, but got Unknown
		UNrqlvEiaD5r6WCLZt.IpxBSkcjWDvxT();
		LayaAir3D.m_a = 0;
		LayaAir3D.m_b = false;
		LayaAir3D.m_c = false;
		curNodePort = 8024;
		isHaveCmdPath = false;
		curConfigIndex = 1;
		z = "";
		Android = false;
		Ios = false;
		Conventional = true;
		ab = "";
		af = 1f;
		ag = (GUIStyle)(object)new GUIStyle();
		ah = false;
	}
}
