using mVjiDBJbRPt2wl7USA;
using System;
using UnityEditor;
using UnityEngine;

public class Setting : EditorWindow
{
	public enum languages
	{
		English,
		中文
	}

	private static Setting a;

	private static Vector2 b;

	private static languages c;

	private static languages d;

	[MenuItem("LayaAir3D/Setting")]
	public static void initTutorial()
	{
		//IL_002f: Unknown result type (might be due to invalid IL or missing references)
		//IL_0035: Expected O, but got Unknown
		//IL_0046: Unknown result type (might be due to invalid IL or missing references)
		//IL_004c: Expected O, but got Unknown
		PaymentPage.al = true;
		c = languages.中文;
		d = languages.中文;
		a = (Setting)(object)EditorWindow.GetWindow(typeof(Setting));
		Texture2D val = (Texture2D)(object)new Texture2D(16, 16);
		PaymentPage.a("Assets/LayaAir3D/LayaTool/LayaResouce/layabox.png", val);
		GUIContent titleContent = (GUIContent)(object)new GUIContent("LayaAir3D", (Texture)(object)val);
		((EditorWindow)a).set_titleContent(titleContent);
		PaymentPage.al = true;
		d = (languages)LayaAir3D.language;
	}

	private void OnGUI()
	{
		GUILayout.BeginHorizontal((GUILayoutOption[])(object)new GUILayoutOption[0]);
		GUILayout.Label("", (GUILayoutOption[])(object)new GUILayoutOption[1]
		{
			GUILayout.Width(15f)
		});
		d = (languages)(object)EditorGUILayout.EnumPopup("Language", (Enum)d, (GUILayoutOption[])(object)new GUILayoutOption[0]);
		if (d != c)
		{
			c = d;
			if ((Object)(object)LayaAir3D.layaWindow != (Object)null)
			{
				LayaAir3D.ReadLanguage((int)d);
				((EditorWindow)LayaAir3D.layaWindow).Repaint();
			}
			else
			{
				LayaAir3D.initLayaExport();
				LayaAir3D.language = (int)d;
				LayaAir3D.ReadLanguage((int)d);
			}
			if ((Object)(object)LoginWindow.h != (Object)null)
			{
				((EditorWindow)LoginWindow.h).Repaint();
			}
		}
		GUILayout.EndHorizontal();
	}

	private void OnDestroy()
	{
		PaymentPage.al = false;
	}

	public Setting()
	{
		UNrqlvEiaD5r6WCLZt.IpxBSkcjWDvxT();
		((EditorWindow)this)._002Ector();
	}
}
