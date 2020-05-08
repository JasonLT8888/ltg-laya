using System;
using System.IO;
using System.Text;

using UnityEditor;
using UnityEngine;
using UnityEngine.AI;
using UnityEngine.SceneManagement;

// Token: 0x0200001A RID: 26
class Class15 : MonoBehaviour
{
	// Token: 0x060000A9 RID: 169 RVA: 0x0000A5A4 File Offset: 0x000087A4
	[MenuItem("Tools/Export NavMesh Data")]
	static void smethod_0()
	{
		NavMeshTriangulation navMeshTriangulation = NavMesh.CalculateTriangulation();
		Mesh mesh = new Mesh();
		mesh.name = "_NavMesh";
		mesh.vertices = navMeshTriangulation.vertices;
		mesh.triangles = navMeshTriangulation.indices;
		string text = "navmesh_" + SceneManager.GetActiveScene().name;
		string text2 = Application.dataPath + "/NavMeshTest/" + text + ".obj";
		Class15.smethod_3(mesh, text2);
		AssetDatabase.Refresh();
		GameObject gameObject = UnityEngine.Object.Instantiate<GameObject>(AssetDatabase.LoadAssetAtPath<GameObject>(text2.Replace(Application.dataPath, "Assets")));
		gameObject.name = text;
		Class15.smethod_4(gameObject);
		Debug.Log("导出完成：" + text);
		AssetDatabase.Refresh();
	}

	// Token: 0x060000AA RID: 170 RVA: 0x0000A654 File Offset: 0x00008854
	[MenuItem("Tools/NavMesh Data Test")]
	static void smethod_1()
	{
		GameObject gameObject = GameObject.Find("_NavMesh");
		Vector3[] vertices = gameObject.GetComponent<MeshFilter>().sharedMesh.vertices;
		int[] triangles = gameObject.GetComponent<MeshFilter>().sharedMesh.triangles;
		Vector3[] array = new Vector3[vertices.Length];
		for (int i = 0; i < vertices.Length; i++)
		{
			Vector3 vector = gameObject.transform.TransformPoint(vertices[i]);
			array[i] = vector;
		}
		Vector3 position = GameObject.Find("TestPoint").transform.position;
		bool flag = false;
		int j = 0;
		while (j < triangles.Length)
		{
			if (!Class15.smethod_6(array[triangles[j]], array[triangles[j + 1]], array[triangles[j + 2]], position))
			{
				j += 3;
			}
			else
			{
                Debug.Log("该点合法");
                return;
            }
		}
        Debug.Log("该点非法");
    }

	// Token: 0x060000AB RID: 171 RVA: 0x0000A73C File Offset: 0x0000893C
	static string smethod_2(Mesh mesh_0)
	{
		StringBuilder stringBuilder = new StringBuilder();
		stringBuilder.Append("g ").Append(mesh_0.name).Append("\n");
		foreach (Vector3 vector in mesh_0.vertices)
		{
			stringBuilder.Append(string.Format("v {0} {1} {2}\n", vector.x, vector.y, vector.z));
		}
		stringBuilder.Append("\n");
		foreach (Vector3 vector2 in mesh_0.normals)
		{
			stringBuilder.Append(string.Format("vn {0} {1} {2}\n", vector2.x, vector2.y, vector2.z));
		}
		stringBuilder.Append("\n");
		Vector2[] uv = mesh_0.uv;
		for (int i = 0; i < uv.Length; i++)
		{
			Vector3 vector3 = uv[i];
			stringBuilder.Append(string.Format("vt {0} {1}\n", vector3.x, vector3.y));
		}
		for (int j = 0; j < mesh_0.subMeshCount; j++)
		{
			stringBuilder.Append("\n");
			int[] triangles = mesh_0.GetTriangles(j);
			for (int k = 0; k < triangles.Length; k += 3)
			{
				stringBuilder.Append(string.Format("f {0}/{0}/{0} {1}/{1}/{1} {2}/{2}/{2}\n", triangles[k] + 1, triangles[k + 1] + 1, triangles[k + 2] + 1));
			}
		}
		return stringBuilder.ToString();
	}

	// Token: 0x060000AC RID: 172 RVA: 0x0000A8F8 File Offset: 0x00008AF8
	static void smethod_3(Mesh mesh_0, string string_0)
	{
		using (StreamWriter streamWriter = new StreamWriter(string_0))
		{
			streamWriter.Write(Class15.smethod_2(mesh_0));
		}
	}

	// Token: 0x060000AD RID: 173 RVA: 0x0000A934 File Offset: 0x00008B34
	static void smethod_4(GameObject gameObject_1)
	{
		Vector3[] vertices = gameObject_1.transform.Find("_NavMesh").GetComponent<MeshFilter>().sharedMesh.vertices;
		int[] triangles = gameObject_1.transform.Find("_NavMesh").GetComponent<MeshFilter>().sharedMesh.triangles;
		Vector3[] array = new Vector3[vertices.Length];
		for (int i = 0; i < vertices.Length; i++)
		{
			Vector3 vector = gameObject_1.transform.TransformPoint(vertices[i]);
			array[i] = vector;
		}
		StringBuilder stringBuilder = new StringBuilder();
		stringBuilder.Append("local nav = {\n");
		for (int j = 0; j < triangles.Length; j += 3)
		{
			stringBuilder.AppendFormat("\t{{{0},{1},{2}}},\n", Class15.smethod_5(array[triangles[j]]), Class15.smethod_5(array[triangles[j + 1]]), Class15.smethod_5(array[triangles[j + 2]]));
		}
		stringBuilder.Append("}\n");
		stringBuilder.Append("return nav");
		using (StreamWriter streamWriter = new StreamWriter(Application.dataPath + "/NavMeshTest/" + gameObject_1.name + ".lua"))
		{
			streamWriter.Write(stringBuilder.ToString());
		}
		UnityEngine.Object.DestroyImmediate(gameObject_1);
	}

	// Token: 0x060000AE RID: 174 RVA: 0x000026AA File Offset: 0x000008AA
	static string smethod_5(Vector3 vector3_0)
	{
		return string.Format("{{{0},{1},{2}}}", vector3_0.x, vector3_0.y, vector3_0.z);
	}

	// Token: 0x060000AF RID: 175 RVA: 0x0000AA88 File Offset: 0x00008C88
	static bool smethod_6(Vector3 vector3_0, Vector3 vector3_1, Vector3 vector3_2, Vector3 vector3_3)
	{
		Vector3 vector = vector3_2 - vector3_0;
		Vector3 vector2 = vector3_1 - vector3_0;
		Vector3 rhs = vector3_3 - vector3_0;
		float num = Vector3.Dot(vector, vector);
		float num2 = Vector3.Dot(vector, vector2);
		float num3 = Vector3.Dot(vector, rhs);
		float num4 = Vector3.Dot(vector2, vector2);
		float num5 = Vector3.Dot(vector2, rhs);
		float num6 = 1f / (num * num4 - num2 * num2);
		float num7 = (num4 * num3 - num2 * num5) * num6;
		if (num7 >= 0f && num7 <= 1f)
		{
			float num8 = (num * num5 - num2 * num3) * num6;
			return num8 >= 0f && num8 <= 1f && num7 + num8 <= 1f;
		}
		return false;
	}

	// Token: 0x060000B0 RID: 176 RVA: 0x000026D7 File Offset: 0x000008D7
	public Class15()
	{
		
		
	}

	// Token: 0x04000133 RID: 307
	GameObject gameObject_0;
}
