using System;

using UnityEditor;
using UnityEngine;

// Token: 0x0200002A RID: 42
public class Setting : EditorWindow
{
	// Token: 0x0200002B RID: 43
	public enum languages
	{
		// Token: 0x04000198 RID: 408
		English,
		// Token: 0x04000199 RID: 409
		中文
	}

	// Token: 0x06000157 RID: 343 RVA: 0x0000D760 File Offset: 0x0000B960
	[MenuItem("LayaAir3D/Setting")]
	public static void initTutorial()
	{
		PaymentPage.bool_2 = true;
		Setting.languages_0 = Setting.languages.中文;
		Setting.languages_1 = Setting.languages.中文;
		Setting.setting_0 = (Setting)EditorWindow.GetWindow(typeof(Setting));
		Texture2D texture2D = new Texture2D(16, 16);
		PaymentPage.smethod_3("Assets/LayaAir3D/LayaTool/LayaResouce/layabox.png", texture2D);
		GUIContent titleContent = new GUIContent("LayaAir3D", texture2D);
		Setting.setting_0.titleContent = titleContent;
		PaymentPage.bool_2 = true;
		Setting.languages_1 = (Setting.languages)LayaAir3D.language;
	}

	// Token: 0x06000158 RID: 344 RVA: 0x0000D7D4 File Offset: 0x0000B9D4
	void OnGUI()
	{
		GUILayout.BeginHorizontal(new GUILayoutOption[0]);
		GUILayout.Label("", new GUILayoutOption[]
		{
			GUILayout.Width(15f)
		});
		Setting.languages_1 = (Setting.languages)EditorGUILayout.EnumPopup("Language", Setting.languages_1, new GUILayoutOption[0]);
		if (Setting.languages_1 != Setting.languages_0)
		{
			Setting.languages_0 = Setting.languages_1;
			if (LayaAir3D.layaWindow != null)
			{
				LayaAir3D.ReadLanguage((int)Setting.languages_1);
				LayaAir3D.layaWindow.Repaint();
			}
			else
			{
				LayaAir3D.initLayaExport();
				LayaAir3D.language = (int)Setting.languages_1;
				LayaAir3D.ReadLanguage((int)Setting.languages_1);
			}
			if (LoginWindow.loginWindow_0 != null)
			{
				LoginWindow.loginWindow_0.Repaint();
			}
		}
		GUILayout.EndHorizontal();
	}

	// Token: 0x06000159 RID: 345 RVA: 0x000026A2 File Offset: 0x000008A2
	void OnDestroy()
	{
		PaymentPage.bool_2 = false;
	}

	// Token: 0x0600015A RID: 346 RVA: 0x000025F9 File Offset: 0x000007F9
	public Setting()
	{
		
		
	}

	// Token: 0x04000193 RID: 403
	static Setting setting_0;

	// Token: 0x04000194 RID: 404
	static Vector2 vector2_0;

	// Token: 0x04000195 RID: 405
	static Setting.languages languages_0;

	// Token: 0x04000196 RID: 406
	static Setting.languages languages_1;
}
