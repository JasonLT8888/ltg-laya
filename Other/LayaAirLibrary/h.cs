using mVjiDBJbRPt2wl7USA;
using UnityEditor;
using UnityEngine;

internal class h : EditorWindow
{
	public static string a;

	public static string b;

	private static h c;

	[MenuItem("LayaAir3D/Help/About LayaAir")]
	private static void a()
	{
		//IL_001d: Unknown result type (might be due to invalid IL or missing references)
		//IL_0023: Expected O, but got Unknown
		//IL_0034: Unknown result type (might be due to invalid IL or missing references)
		//IL_003a: Expected O, but got Unknown
		c = (h)(object)EditorWindow.GetWindow(typeof(h));
		Texture2D val = (Texture2D)(object)new Texture2D(16, 16);
		PaymentPage.a("Assets/LayaAir3D/LayaTool/LayaResouce/layabox.png", val);
		GUIContent titleContent = (GUIContent)(object)new GUIContent("LayaAir3D", (Texture)(object)val);
		((EditorWindow)c).set_titleContent(titleContent);
		if (h.a != null)
		{
			LayaAir3D.ReadLanguage(1);
		}
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
		Rect position = ((EditorWindow)this).get_position();
		float num = ((Rect)(ref position)).get_width() / 2f - 70f;
		position = ((EditorWindow)this).get_position();
		GUI.Label(new Rect(num, ((Rect)(ref position)).get_height() / 2f - 20f, 200f, 30f), h.a);
		position = ((EditorWindow)this).get_position();
		float num2 = ((Rect)(ref position)).get_width() / 2f - 70f;
		position = ((EditorWindow)this).get_position();
		if (GUI.Button(new Rect(num2, ((Rect)(ref position)).get_height() / 2f + 10f, 100f, 30f), b))
		{
			Application.OpenURL("https://www.layabox.com");
		}
	}

	public h()
	{
		UNrqlvEiaD5r6WCLZt.IpxBSkcjWDvxT();
		((EditorWindow)this)._002Ector();
	}
}
