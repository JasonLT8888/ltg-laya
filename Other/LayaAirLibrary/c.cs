using mVjiDBJbRPt2wl7USA;
using System.IO;
using System.Text;
using UnityEditor;
using UnityEngine;
using UnityEngine.AI;
using UnityEngine.SceneManagement;

internal class c : MonoBehaviour
{
	private GameObject m_a;

	[MenuItem("Tools/Export NavMesh Data")]
	private static void b()
	{
		//IL_0000: Unknown result type (might be due to invalid IL or missing references)
		//IL_0005: Unknown result type (might be due to invalid IL or missing references)
		//IL_0006: Unknown result type (might be due to invalid IL or missing references)
		//IL_000b: Unknown result type (might be due to invalid IL or missing references)
		//IL_0016: Unknown result type (might be due to invalid IL or missing references)
		//IL_0017: Unknown result type (might be due to invalid IL or missing references)
		//IL_0022: Unknown result type (might be due to invalid IL or missing references)
		//IL_0023: Unknown result type (might be due to invalid IL or missing references)
		//IL_0033: Unknown result type (might be due to invalid IL or missing references)
		//IL_0038: Unknown result type (might be due to invalid IL or missing references)
		//IL_0062: Expected O, but got Unknown
		NavMeshTriangulation val = NavMesh.CalculateTriangulation();
		Mesh val2 = new Mesh();
		((Object)val2).set_name("_NavMesh");
		val2.set_vertices(val.vertices);
		val2.set_triangles(val.indices);
		Scene activeScene = SceneManager.GetActiveScene();
		string text = "navmesh_" + ((Scene)(ref activeScene)).get_name();
		string text2 = Application.get_dataPath() + "/NavMeshTest/" + text + ".obj";
		a((Mesh)(object)val2, text2);
		AssetDatabase.Refresh();
		GameObject obj = Object.Instantiate<GameObject>(AssetDatabase.LoadAssetAtPath<GameObject>(text2.Replace(Application.get_dataPath(), "Assets")));
		((Object)obj).set_name(text);
		a(obj);
		Debug.Log((object)("导出完成：" + text));
		AssetDatabase.Refresh();
	}

	[MenuItem("Tools/NavMesh Data Test")]
	private static void a()
	{
		//IL_0044: Unknown result type (might be due to invalid IL or missing references)
		//IL_0049: Unknown result type (might be due to invalid IL or missing references)
		//IL_004e: Unknown result type (might be due to invalid IL or missing references)
		//IL_0053: Unknown result type (might be due to invalid IL or missing references)
		//IL_0055: Unknown result type (might be due to invalid IL or missing references)
		//IL_0076: Unknown result type (might be due to invalid IL or missing references)
		//IL_007b: Unknown result type (might be due to invalid IL or missing references)
		//IL_008a: Unknown result type (might be due to invalid IL or missing references)
		//IL_0096: Unknown result type (might be due to invalid IL or missing references)
		//IL_00a2: Unknown result type (might be due to invalid IL or missing references)
		//IL_00a7: Unknown result type (might be due to invalid IL or missing references)
		GameObject val = GameObject.Find("_NavMesh");
		Vector3[] vertices = val.GetComponent<MeshFilter>().get_sharedMesh().get_vertices();
		int[] triangles = val.GetComponent<MeshFilter>().get_sharedMesh().get_triangles();
		Vector3[] array = (Vector3[])(object)new Vector3[vertices.Length];
		for (int i = 0; i < vertices.Length; i++)
		{
			Vector3 val2 = array[i] = val.get_transform().TransformPoint(vertices[i]);
		}
		Vector3 position = GameObject.Find("TestPoint").get_transform().get_position();
		bool flag = false;
		for (int j = 0; j < triangles.Length; j += 3)
		{
			if (a(array[triangles[j]], array[triangles[j + 1]], array[triangles[j + 2]], position))
			{
				flag = true;
				break;
			}
		}
		if (flag)
		{
			Debug.Log((object)"该点合法");
		}
		else
		{
			Debug.Log((object)"该点非法");
		}
	}

	private static string a(Mesh A_0)
	{
		//IL_0034: Unknown result type (might be due to invalid IL or missing references)
		//IL_0039: Unknown result type (might be due to invalid IL or missing references)
		//IL_0040: Unknown result type (might be due to invalid IL or missing references)
		//IL_004b: Unknown result type (might be due to invalid IL or missing references)
		//IL_0056: Unknown result type (might be due to invalid IL or missing references)
		//IL_008f: Unknown result type (might be due to invalid IL or missing references)
		//IL_0094: Unknown result type (might be due to invalid IL or missing references)
		//IL_009c: Unknown result type (might be due to invalid IL or missing references)
		//IL_00a8: Unknown result type (might be due to invalid IL or missing references)
		//IL_00b4: Unknown result type (might be due to invalid IL or missing references)
		//IL_00f0: Unknown result type (might be due to invalid IL or missing references)
		//IL_00f5: Unknown result type (might be due to invalid IL or missing references)
		//IL_00fa: Unknown result type (might be due to invalid IL or missing references)
		//IL_0102: Unknown result type (might be due to invalid IL or missing references)
		//IL_010e: Unknown result type (might be due to invalid IL or missing references)
		StringBuilder stringBuilder = new StringBuilder();
		stringBuilder.Append("g ").Append(((Object)A_0).get_name()).Append("\n");
		Vector3[] vertices = A_0.get_vertices();
		foreach (Vector3 val in vertices)
		{
			stringBuilder.Append($"v {val.x} {val.y} {val.z}\n");
		}
		stringBuilder.Append("\n");
		vertices = A_0.get_normals();
		foreach (Vector3 val2 in vertices)
		{
			stringBuilder.Append($"vn {val2.x} {val2.y} {val2.z}\n");
		}
		stringBuilder.Append("\n");
		Vector2[] uv = A_0.get_uv();
		for (int i = 0; i < uv.Length; i++)
		{
			Vector3 val3 = Vector2.op_Implicit(uv[i]);
			stringBuilder.Append($"vt {val3.x} {val3.y}\n");
		}
		for (int j = 0; j < A_0.get_subMeshCount(); j++)
		{
			stringBuilder.Append("\n");
			int[] triangles = A_0.GetTriangles(j);
			for (int k = 0; k < triangles.Length; k += 3)
			{
				stringBuilder.Append(string.Format("f {0}/{0}/{0} {1}/{1}/{1} {2}/{2}/{2}\n", triangles[k] + 1, triangles[k + 1] + 1, triangles[k + 2] + 1));
			}
		}
		return stringBuilder.ToString();
	}

	private static void a(Mesh A_0, string A_1)
	{
		using (StreamWriter streamWriter = new StreamWriter(A_1))
		{
			streamWriter.Write(a(A_0));
		}
	}

	private static void a(GameObject A_0)
	{
		//IL_0057: Unknown result type (might be due to invalid IL or missing references)
		//IL_005c: Unknown result type (might be due to invalid IL or missing references)
		//IL_0061: Unknown result type (might be due to invalid IL or missing references)
		//IL_0066: Unknown result type (might be due to invalid IL or missing references)
		//IL_0068: Unknown result type (might be due to invalid IL or missing references)
		//IL_009c: Unknown result type (might be due to invalid IL or missing references)
		//IL_00ad: Unknown result type (might be due to invalid IL or missing references)
		//IL_00be: Unknown result type (might be due to invalid IL or missing references)
		Vector3[] vertices = ((Component)A_0.get_transform().Find("_NavMesh")).GetComponent<MeshFilter>().get_sharedMesh().get_vertices();
		int[] triangles = ((Component)A_0.get_transform().Find("_NavMesh")).GetComponent<MeshFilter>().get_sharedMesh().get_triangles();
		Vector3[] array = (Vector3[])(object)new Vector3[vertices.Length];
		for (int i = 0; i < vertices.Length; i++)
		{
			Vector3 val = array[i] = A_0.get_transform().TransformPoint(vertices[i]);
		}
		StringBuilder stringBuilder = new StringBuilder();
		stringBuilder.Append("local nav = {\n");
		for (int j = 0; j < triangles.Length; j += 3)
		{
			stringBuilder.AppendFormat("\t{{{0},{1},{2}}},\n", a(array[triangles[j]]), a(array[triangles[j + 1]]), a(array[triangles[j + 2]]));
		}
		stringBuilder.Append("}\n");
		stringBuilder.Append("return nav");
		using (StreamWriter streamWriter = new StreamWriter(Application.get_dataPath() + "/NavMeshTest/" + ((Object)A_0).get_name() + ".lua"))
		{
			streamWriter.Write(stringBuilder.ToString());
		}
		Object.DestroyImmediate((Object)(object)A_0);
	}

	private static string a(Vector3 A_0)
	{
		//IL_0005: Unknown result type (might be due to invalid IL or missing references)
		//IL_0010: Unknown result type (might be due to invalid IL or missing references)
		//IL_001b: Unknown result type (might be due to invalid IL or missing references)
		return $"{{{A_0.x},{A_0.y},{A_0.z}}}";
	}

	private static bool a(Vector3 A_0, Vector3 A_1, Vector3 A_2, Vector3 A_3)
	{
		//IL_0000: Unknown result type (might be due to invalid IL or missing references)
		//IL_0001: Unknown result type (might be due to invalid IL or missing references)
		//IL_0002: Unknown result type (might be due to invalid IL or missing references)
		//IL_0007: Unknown result type (might be due to invalid IL or missing references)
		//IL_0008: Unknown result type (might be due to invalid IL or missing references)
		//IL_0009: Unknown result type (might be due to invalid IL or missing references)
		//IL_000e: Unknown result type (might be due to invalid IL or missing references)
		//IL_000f: Unknown result type (might be due to invalid IL or missing references)
		//IL_0010: Unknown result type (might be due to invalid IL or missing references)
		//IL_0011: Unknown result type (might be due to invalid IL or missing references)
		//IL_0016: Unknown result type (might be due to invalid IL or missing references)
		//IL_0017: Unknown result type (might be due to invalid IL or missing references)
		//IL_0018: Unknown result type (might be due to invalid IL or missing references)
		//IL_001f: Unknown result type (might be due to invalid IL or missing references)
		//IL_0020: Unknown result type (might be due to invalid IL or missing references)
		//IL_0027: Unknown result type (might be due to invalid IL or missing references)
		//IL_002f: Unknown result type (might be due to invalid IL or missing references)
		//IL_0030: Unknown result type (might be due to invalid IL or missing references)
		//IL_0038: Unknown result type (might be due to invalid IL or missing references)
		//IL_0039: Unknown result type (might be due to invalid IL or missing references)
		Vector3 val = A_2 - A_0;
		Vector3 val2 = A_1 - A_0;
		Vector3 val3 = A_3 - A_0;
		float num = Vector3.Dot(val, val);
		float num2 = Vector3.Dot(val, val2);
		float num3 = Vector3.Dot(val, val3);
		float num4 = Vector3.Dot(val2, val2);
		float num5 = Vector3.Dot(val2, val3);
		float num6 = 1f / (num * num4 - num2 * num2);
		float num7 = (num4 * num3 - num2 * num5) * num6;
		if (num7 < 0f || num7 > 1f)
		{
			return false;
		}
		float num8 = (num * num5 - num2 * num3) * num6;
		if (num8 < 0f || num8 > 1f)
		{
			return false;
		}
		return num7 + num8 <= 1f;
	}

	public c()
	{
		UNrqlvEiaD5r6WCLZt.IpxBSkcjWDvxT();
		((MonoBehaviour)this)._002Ector();
	}
}
