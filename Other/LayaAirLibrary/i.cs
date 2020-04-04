using mVjiDBJbRPt2wl7USA;
using UnityEditor;
using UnityEngine;

internal class i : EditorWindow
{
	private static Vector2 m_a;

	private static i b;

	public static string c;

	public static string d;

	public static string e;

	public static void a()
	{
		//IL_001d: Unknown result type (might be due to invalid IL or missing references)
		//IL_0023: Expected O, but got Unknown
		//IL_0034: Unknown result type (might be due to invalid IL or missing references)
		//IL_003a: Expected O, but got Unknown
		//IL_004a: Unknown result type (might be due to invalid IL or missing references)
		//IL_0059: Unknown result type (might be due to invalid IL or missing references)
		b = (i)(object)EditorWindow.GetWindow(typeof(i));
		Texture2D val = (Texture2D)(object)new Texture2D(16, 16);
		PaymentPage.a("Assets/LayaAir3D/LayaTool/LayaResouce/layabox.png", val);
		GUIContent titleContent = (GUIContent)(object)new GUIContent("LayaAir3D", (Texture)(object)val);
		((EditorWindow)b).set_titleContent(titleContent);
		((EditorWindow)b).set_maxSize(i.m_a);
		((EditorWindow)b).set_minSize(i.m_a);
	}

	private void OnGUI()
	{
		//IL_0001: Unknown result type (might be due to invalid IL or missing references)
		//IL_0006: Unknown result type (might be due to invalid IL or missing references)
		//IL_001b: Unknown result type (might be due to invalid IL or missing references)
		//IL_0020: Unknown result type (might be due to invalid IL or missing references)
		//IL_003e: Unknown result type (might be due to invalid IL or missing references)
		//IL_004e: Unknown result type (might be due to invalid IL or missing references)
		//IL_0053: Unknown result type (might be due to invalid IL or missing references)
		//IL_0068: Unknown result type (might be due to invalid IL or missing references)
		//IL_006d: Unknown result type (might be due to invalid IL or missing references)
		//IL_008b: Unknown result type (might be due to invalid IL or missing references)
		//IL_009b: Unknown result type (might be due to invalid IL or missing references)
		//IL_00a0: Unknown result type (might be due to invalid IL or missing references)
		//IL_00b5: Unknown result type (might be due to invalid IL or missing references)
		//IL_00ba: Unknown result type (might be due to invalid IL or missing references)
		//IL_00d8: Unknown result type (might be due to invalid IL or missing references)
		Rect position = ((EditorWindow)this).get_position();
		float num = ((Rect)(ref position)).get_width() / 2f - 95f;
		position = ((EditorWindow)this).get_position();
		GUI.Label(new Rect(num, ((Rect)(ref position)).get_height() / 2f - 50f, 300f, 30f), c);
		position = ((EditorWindow)this).get_position();
		float num2 = ((Rect)(ref position)).get_width() / 2f - 55f;
		position = ((EditorWindow)this).get_position();
		GUI.Label(new Rect(num2, ((Rect)(ref position)).get_height() / 2f - 30f, 300f, 30f), d);
		position = ((EditorWindow)this).get_position();
		float num3 = ((Rect)(ref position)).get_width() / 2f - 70f;
		position = ((EditorWindow)this).get_position();
		if (GUI.Button(new Rect(num3, ((Rect)(ref position)).get_height() / 2f + 10f, 150f, 30f), e))
		{
			Application.OpenURL("http://nodejs.cn/");
		}
	}

	public i()
	{
		UNrqlvEiaD5r6WCLZt.IpxBSkcjWDvxT();
		((EditorWindow)this)._002Ector();
	}

	static i()
	{
		//IL_000f: Unknown result type (might be due to invalid IL or missing references)
		//IL_0014: Unknown result type (might be due to invalid IL or missing references)
		UNrqlvEiaD5r6WCLZt.IpxBSkcjWDvxT();
		i.m_a = new Vector2(300f, 200f);
	}
}
