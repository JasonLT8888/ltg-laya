using mVjiDBJbRPt2wl7USA;
using UnityEditor;
using UnityEngine;

internal class j : EditorWindow
{
	private static j m_a;

	public static string b;

	public static string c;

	public static string d;

	public static string e;

	private static string f;

	public static void a()
	{
		//IL_001e: Unknown result type (might be due to invalid IL or missing references)
		//IL_0024: Expected O, but got Unknown
		//IL_0035: Unknown result type (might be due to invalid IL or missing references)
		//IL_003b: Expected O, but got Unknown
		//IL_00a9: Unknown result type (might be due to invalid IL or missing references)
		//IL_00c2: Unknown result type (might be due to invalid IL or missing references)
		j.m_a = (j)(object)EditorWindow.GetWindow(typeof(j), true);
		Texture2D val = (Texture2D)(object)new Texture2D(16, 16);
		PaymentPage.a("Assets/LayaAir3D/LayaTool/LayaResouce/layabox.png", val);
		GUIContent titleContent = (GUIContent)(object)new GUIContent("LayaAir3D", (Texture)(object)val);
		((EditorWindow)j.m_a).set_titleContent(titleContent);
		switch (LoginWindow.g)
		{
		case 1:
			f = b;
			break;
		case 2:
			f = c;
			break;
		case 3:
			f = d;
			break;
		case 4:
			f = e;
			break;
		}
		PaymentPage.al = true;
		((EditorWindow)j.m_a).set_minSize(new Vector2(400f, 180f));
		((EditorWindow)j.m_a).set_maxSize(new Vector2(400f, 180f));
	}

	private void OnGUI()
	{
		//IL_0001: Unknown result type (might be due to invalid IL or missing references)
		//IL_0006: Unknown result type (might be due to invalid IL or missing references)
		//IL_001b: Unknown result type (might be due to invalid IL or missing references)
		//IL_0020: Unknown result type (might be due to invalid IL or missing references)
		//IL_003e: Unknown result type (might be due to invalid IL or missing references)
		Rect position = ((EditorWindow)this).get_position();
		float num = ((Rect)(ref position)).get_width() / 2f - 160f;
		position = ((EditorWindow)this).get_position();
		GUI.Label(new Rect(num, ((Rect)(ref position)).get_height() / 2f - 20f, 350f, 30f), f);
	}

	private void OnDestroy()
	{
		PaymentPage.al = false;
	}

	public j()
	{
		UNrqlvEiaD5r6WCLZt.IpxBSkcjWDvxT();
		((EditorWindow)this)._002Ector();
	}

	static j()
	{
		UNrqlvEiaD5r6WCLZt.IpxBSkcjWDvxT();
		f = "";
	}
}
