using mVjiDBJbRPt2wl7USA;
using System;
using System.Collections.Generic;
using System.IO;
using UnityEditor;
using UnityEngine;

internal class b
{
	private static int m_a;

	private static int m_b;

	private static int m_c;

	private static int m_d;

	private static int m_e;

	private static Color[] f;

	private static g g;

	private static List<KeyValuePair<string, Color[]>> h;

	private static Terrain i;

	private static string j;

	private static g k;

	private static g l;

	private static g m;

	private static g n;

	private static string o;

	private static bool p;

	private static bool q;

	public static void a(string A_0, g A_1)
	{
		j = A_0 + "/terrain";
		Terrain[] activeTerrains = Terrain.get_activeTerrains();
		foreach (Terrain obj in activeTerrains)
		{
			d();
			global::b.i = obj;
			A_1.a("dataPath", "terrain/" + ((Object)global::b.i).get_name().ToLower() + ".lt");
			e();
		}
	}

	private static void b(g A_0)
	{
		//IL_004b: Unknown result type (might be due to invalid IL or missing references)
		//IL_0060: Unknown result type (might be due to invalid IL or missing references)
		//IL_0075: Unknown result type (might be due to invalid IL or missing references)
		//IL_008a: Unknown result type (might be due to invalid IL or missing references)
		if ((Object)(object)i != (Object)null && i.get_lightmapIndex() > -1)
		{
			A_0.d("lightmapIndex", i.get_lightmapIndex());
			g g = new g(g.a.e);
			A_0.d("lightmapScaleOffset", g);
			g.d(i.get_lightmapScaleOffset().x);
			g.d(i.get_lightmapScaleOffset().y);
			g.d(i.get_lightmapScaleOffset().z);
			g.d(0f - i.get_lightmapScaleOffset().w);
		}
	}

	private static void e()
	{
		//IL_0079: Unknown result type (might be due to invalid IL or missing references)
		//IL_01b8: Unknown result type (might be due to invalid IL or missing references)
		//IL_038f: Unknown result type (might be due to invalid IL or missing references)
		//IL_03a4: Unknown result type (might be due to invalid IL or missing references)
		//IL_03cf: Unknown result type (might be due to invalid IL or missing references)
		//IL_03e2: Unknown result type (might be due to invalid IL or missing references)
		//IL_04a4: Unknown result type (might be due to invalid IL or missing references)
		//IL_0599: Unknown result type (might be due to invalid IL or missing references)
		//IL_059e: Unknown result type (might be due to invalid IL or missing references)
		//IL_05f7: Unknown result type (might be due to invalid IL or missing references)
		//IL_066a: Unknown result type (might be due to invalid IL or missing references)
		if (!Directory.Exists(global::b.j))
		{
			Directory.CreateDirectory(global::b.j);
		}
		if ((Object)(object)global::b.i.get_terrainData() == (Object)null)
		{
			Debug.LogWarning((object)("LayaAir3D : " + ((Object)global::b.i).get_name() + "'s TerrainData can't find!"));
			return;
		}
		g g = new g(g.a.d);
		g.a("version", "1.0");
		g.d("cameraCoordinateInverse", q);
		float num = global::b.i.get_terrainData().get_size().x / (float)(global::b.i.get_terrainData().get_heightmapWidth() - 1);
		g.d("gridSize", num);
		if ((global::b.i.get_terrainData().get_heightmapWidth() - 1) % global::b.m_a != 0)
		{
			Debug.LogError((object)("高度图的宽减去一必须是" + global::b.m_a + "的倍数"));
			return;
		}
		if ((global::b.i.get_terrainData().get_heightmapHeight() - 1) % global::b.m_a != 0)
		{
			Debug.LogError((object)("高度图的高减去一必须是" + global::b.m_a + "的倍数"));
			return;
		}
		int num2 = (global::b.i.get_terrainData().get_heightmapWidth() - 1) / global::b.m_a;
		int num3 = (global::b.i.get_terrainData().get_heightmapHeight() - 1) / global::b.m_a;
		g.d("chunkNumX", num2);
		g.d("chunkNumZ", num3);
		g g2 = new g(g.a.d);
		g2.d("numX", global::b.i.get_terrainData().get_heightmapWidth());
		g2.d("numZ", global::b.i.get_terrainData().get_heightmapHeight());
		g2.d("bitType", 16);
		g2.d("value", global::b.i.get_terrainData().get_size().y);
		g2.a("url", ((Object)global::b.i).get_name().ToLower() + "_heightmap.thdata");
		g.d("heightData", g2);
		g g3 = new g(g.a.d);
		g.d("material", g3);
		g g4 = new g(g.a.e);
		g4.d(0f);
		g4.d(0f);
		g4.d(0f);
		g3.d("ambient", g4);
		g g5 = new g(g.a.e);
		g5.d(1f);
		g5.d(1f);
		g5.d(1f);
		g3.d("diffuse", g5);
		g g6 = new g(g.a.e);
		g6.d(0.2f);
		g6.d(0.2f);
		g6.d(0.2f);
		g6.d(32f);
		g3.d("specular", g6);
		g g7 = new g(g.a.e);
		g.d("detailTexture", g7);
		int num4 = global::b.i.get_terrainData().get_terrainLayers().Length;
		_ = global::b.i.get_terrainData().get_terrainLayers()[0];
		for (int i = 0; i < num4; i++)
		{
			g g8 = new g(g.a.d);
			TerrainLayer val = global::b.i.get_terrainData().get_terrainLayers()[i];
			g8.a("diffuse", ((Object)val.get_diffuseTexture()).get_name().ToLower() + ".jpg");
			if ((Object)(object)val.get_normalMapTexture() != (Object)null)
			{
				g8.a("normal", ((Object)val.get_normalMapTexture()).get_name().ToLower() + ".jpg");
			}
			g g9 = new g(g.a.e);
			g9.d(val.get_tileSize().x / num);
			g9.d(val.get_tileSize().y / num);
			g8.d("scale", g9);
			g g10 = new g(g.a.e);
			g10.d(val.get_tileOffset().x);
			g10.d(val.get_tileOffset().y);
			g8.d("offset", g10);
			g7.f(g8);
		}
		n = new g(g.a.e);
		g.d("chunkInfo", n);
		float[,] a_ = b();
		Texture2D val2 = a(a(a_, num2 * global::b.m_b * num3 * global::b.m_b * 2, num));
		g g11 = new g(g.a.e);
		g11.k(((Object)val2).get_name().ToLower() + ".png");
		g.d("normalMap", g11);
		int num5 = 0;
		int num6 = 0;
		int num7 = 0;
		int num8 = 0;
		int num9 = 0;
		int num10 = 0;
		int num11 = 0;
		Color[] array = null;
		TextureFormat a_2 = (TextureFormat)0;
		for (num5 = 0; num5 < num3; num5++)
		{
			for (num6 = 0; num6 < num2; num6++)
			{
				num4 = global::b.i.get_terrainData().get_alphamapTextures().Length;
				m = new g(g.a.d);
				k = new g(g.a.e);
				l = new g(g.a.e);
				global::b.m_c = 0;
				for (num7 = 0; num7 < num4; num7++)
				{
					Texture2D val3 = global::b.i.get_terrainData().get_alphamapTextures()[num7];
					if (((Texture)val3).get_width() % num2 != 0)
					{
						Debug.LogError((object)("Control Texture(alpha map) 的宽必须是" + num2 + "的倍数"));
						return;
					}
					if (((Texture)val3).get_height() % num3 != 0)
					{
						Debug.LogError((object)("Control Texture(alpha map) 的高必须是" + num3 + "的倍数"));
						return;
					}
					num10 = ((Texture)val3).get_width() / num2;
					num11 = ((Texture)val3).get_height() / num3;
					num8 = num6 * num10;
					num9 = ((Texture)val3).get_height() - (num5 + 1) * num11;
					array = val3.GetPixels(num8, num9, num10, num11);
					a_2 = val3.get_format();
					a(((Object)global::b.i).get_name().ToLower() + "_splatalpha{0}_" + num6 + "_" + num5 + (p ? ".jpg" : ".png"), a_2, num10, num11, array);
				}
				a(((Object)global::b.i).get_name().ToLower() + "_splatalpha{0}_" + num6 + "_" + num5 + (p ? ".jpg" : ".png"), a_2, num10, num11);
				m.d("normalMap", 0);
			}
			a();
			a(a_);
			c();
		}
		g g12 = new g(g.a.e);
		for (int j = 0; j < h.Count; j++)
		{
			g12.k(h[j].Key.ToLower());
		}
		g.d("alphaMap", g12);
		a(g);
	}

	private static void d()
	{
		global::b.m_c = 0;
		global::b.m_d = 0;
		global::b.m_e = 0;
		f = null;
		g = null;
		h.Clear();
		i = null;
		k = null;
		l = null;
		n = null;
		o = "";
	}

	private static void b(string A_0, TextureFormat A_1, int A_2, int A_3)
	{
		//IL_0030: Unknown result type (might be due to invalid IL or missing references)
		//IL_0032: Unknown result type (might be due to invalid IL or missing references)
		//IL_0038: Expected O, but got Unknown
		if (global::b.m_d <= 0 || !a(f))
		{
			int num = a(f, h);
			if (num == -1)
			{
				Texture2D val = (Texture2D)(object)new Texture2D(A_2, A_3, A_1, false);
				Color[] array = (Color[])(object)new Color[f.Length];
				for (int i = 0; i < f.Length; i++)
				{
					float r = f[i].r;
					float num2 = f[i].g;
					float num3 = f[i].b;
					float num4 = f[i].a;
					array[i].r = num2;
					array[i].g = num3;
					array[i].b = num4;
					float num5 = r + num2 + num3 + num4;
					array[i].a = ((num5 > 1f) ? 1f : num5);
				}
				val.SetPixels(array);
				val.Apply();
				string text = string.Format(A_0, global::b.m_d).ToLower();
				File.WriteAllBytes(j + "/" + text, p ? ImageConversion.EncodeToJPG(val) : ImageConversion.EncodeToPNG(val));
				h.Add(new KeyValuePair<string, Color[]>(text, f));
				num = h.Count - 1;
			}
			k.d(num);
			l.f(g);
		}
		global::b.m_d++;
		f = null;
		global::b.m_e = 0;
	}

	private static void a(string A_0, TextureFormat A_1, int A_2, int A_3)
	{
		//IL_0008: Unknown result type (might be due to invalid IL or missing references)
		if (f != null)
		{
			b(A_0, A_1, A_2, A_3);
		}
		global::b.m_d = 0;
		o = "";
		m.d("alphaMap", k);
		m.d("detailID", l);
		n.f(m);
	}

	private static void a(string A_0, TextureFormat A_1, int A_2, int A_3, Color[] A_4)
	{
		//IL_004b: Unknown result type (might be due to invalid IL or missing references)
		//IL_0050: Unknown result type (might be due to invalid IL or missing references)
		//IL_00d1: Unknown result type (might be due to invalid IL or missing references)
		for (int i = 0; i < 4; i++)
		{
			if (f == null)
			{
				g = new g(g.a.e);
				o = A_0;
				f = (Color[])(object)new Color[A_4.Length];
				for (int j = 0; j < f.Length; j++)
				{
					f[j] = new Color(0f, 0f, 0f, 0f);
				}
			}
			bool flag = true;
			for (int k = 0; k < A_4.Length; k++)
			{
				float num = ((Color)(ref A_4[k])).get_Item(i);
				((Color)(ref f[k])).set_Item(global::b.m_e, num);
				if (num != 0f)
				{
					flag = false;
				}
			}
			if (!flag)
			{
				g.d(global::b.m_c);
				global::b.m_e++;
				if (global::b.m_e > 3)
				{
					b(o, A_1, A_2, A_3);
				}
			}
			global::b.m_c++;
		}
	}

	private static bool a(Color[] A_0)
	{
		//IL_0006: Unknown result type (might be due to invalid IL or missing references)
		//IL_000b: Unknown result type (might be due to invalid IL or missing references)
		for (int i = 0; i < A_0.Length; i++)
		{
			if (A_0[i] != Color.get_clear())
			{
				return false;
			}
		}
		return true;
	}

	private static int a(Color[] A_0, List<KeyValuePair<string, Color[]>> A_1)
	{
		//IL_000c: Unknown result type (might be due to invalid IL or missing references)
		//IL_0021: Unknown result type (might be due to invalid IL or missing references)
		for (int i = 0; i < A_1.Count; i++)
		{
			bool flag = true;
			for (int j = 0; j < A_0.Length; j++)
			{
				if (A_0[j] != A_1[i].Value[j])
				{
					flag = false;
					break;
				}
			}
			if (flag)
			{
				return i;
			}
		}
		return -1;
	}

	private static void a(float[,] A_0)
	{
		byte[] array = new byte[global::b.i.get_terrainData().get_heightmapWidth() * global::b.i.get_terrainData().get_heightmapHeight() * 2];
		float num = 65536f;
		int num2 = 0;
		for (int i = 0; i < global::b.i.get_terrainData().get_heightmapHeight(); i++)
		{
			for (int j = 0; j < global::b.i.get_terrainData().get_heightmapWidth(); j++)
			{
				byte[] bytes = BitConverter.GetBytes((ushort)Mathf.Clamp(Mathf.RoundToInt(A_0[i, j] * num), 0, 65535));
				array[num2 * 2] = bytes[0];
				array[num2 * 2 + 1] = bytes[1];
				num2++;
			}
		}
		FileStream fileStream = new FileStream(global::b.j + "/" + ((Object)global::b.i).get_name().ToLower() + "_heightmap.thdata", FileMode.Create);
		fileStream.Write(array, 0, array.Length);
		fileStream.Close();
	}

	private static void c()
	{
		int num = global::b.i.get_terrainData().get_alphamapTextures().Length;
		for (int i = 0; i < num; i++)
		{
			Texture2D val = global::b.i.get_terrainData().get_alphamapTextures()[i];
			FileStream fileStream = File.Open(j + "/" + ((Object)val).get_name().ToLower() + ".png", FileMode.Create);
			new BinaryWriter(fileStream).Write(ImageConversion.EncodeToPNG(val));
			fileStream.Close();
		}
	}

	private static float[,] b()
	{
		float[,] heights = global::b.i.get_terrainData().GetHeights(0, 0, global::b.i.get_terrainData().get_heightmapWidth(), global::b.i.get_terrainData().get_heightmapHeight());
		float[,] array = new float[global::b.i.get_terrainData().get_heightmapWidth(), global::b.i.get_terrainData().get_heightmapHeight()];
		for (int num = global::b.i.get_terrainData().get_heightmapHeight() - 1; num >= 0; num--)
		{
			for (int i = 0; i < global::b.i.get_terrainData().get_heightmapWidth(); i++)
			{
				array[global::b.i.get_terrainData().get_heightmapHeight() - 1 - num, i] = heights[num, i];
			}
		}
		return array;
	}

	private static void a()
	{
		int num = global::b.i.get_terrainData().get_terrainLayers().Length;
		for (int i = 0; i < num; i++)
		{
			TerrainLayer val = global::b.i.get_terrainData().get_terrainLayers()[i];
			Texture2D diffuseTexture = val.get_diffuseTexture();
			string assetPath = AssetDatabase.GetAssetPath(((Object)diffuseTexture).GetInstanceID());
			object obj = (object)(AssetImporter.GetAtPath(assetPath) as TextureImporter);
			((TextureImporter)obj).set_isReadable(true);
			((TextureImporter)obj).set_textureCompression((TextureImporterCompression)0);
			AssetDatabase.ImportAsset(assetPath);
			FileStream fileStream = File.Open(j + "/" + ((Object)diffuseTexture).get_name().ToLower() + ".jpg", FileMode.Create);
			new BinaryWriter(fileStream).Write(ImageConversion.EncodeToJPG(diffuseTexture));
			fileStream.Close();
			if ((Object)(object)val.get_normalMapTexture() != (Object)null)
			{
				diffuseTexture = val.get_normalMapTexture();
				string assetPath2 = AssetDatabase.GetAssetPath(((Object)diffuseTexture).GetInstanceID());
				object obj2 = (object)(AssetImporter.GetAtPath(assetPath2) as TextureImporter);
				((TextureImporter)obj2).set_isReadable(true);
				((TextureImporter)obj2).set_textureCompression((TextureImporterCompression)0);
				AssetDatabase.ImportAsset(assetPath2);
				FileStream fileStream2 = File.Open(j + "/" + ((Object)diffuseTexture).get_name().ToLower() + ".jpg", FileMode.Create);
				new BinaryWriter(fileStream2).Write(ImageConversion.EncodeToJPG(diffuseTexture));
				fileStream2.Close();
			}
		}
	}

	private static Vector3[] a(float[,] A_0, int A_1, float A_2)
	{
		//IL_002d: Unknown result type (might be due to invalid IL or missing references)
		//IL_0035: Unknown result type (might be due to invalid IL or missing references)
		//IL_003d: Unknown result type (might be due to invalid IL or missing references)
		//IL_0045: Unknown result type (might be due to invalid IL or missing references)
		//IL_00c2: Unknown result type (might be due to invalid IL or missing references)
		//IL_0136: Unknown result type (might be due to invalid IL or missing references)
		//IL_013e: Unknown result type (might be due to invalid IL or missing references)
		//IL_0148: Unknown result type (might be due to invalid IL or missing references)
		//IL_014d: Unknown result type (might be due to invalid IL or missing references)
		//IL_0152: Unknown result type (might be due to invalid IL or missing references)
		//IL_015e: Unknown result type (might be due to invalid IL or missing references)
		//IL_017a: Unknown result type (might be due to invalid IL or missing references)
		//IL_0184: Unknown result type (might be due to invalid IL or missing references)
		//IL_0189: Unknown result type (might be due to invalid IL or missing references)
		//IL_018e: Unknown result type (might be due to invalid IL or missing references)
		//IL_0198: Unknown result type (might be due to invalid IL or missing references)
		//IL_019a: Unknown result type (might be due to invalid IL or missing references)
		//IL_019c: Unknown result type (might be due to invalid IL or missing references)
		//IL_01a1: Unknown result type (might be due to invalid IL or missing references)
		//IL_01ea: Unknown result type (might be due to invalid IL or missing references)
		//IL_01eb: Unknown result type (might be due to invalid IL or missing references)
		//IL_01f0: Unknown result type (might be due to invalid IL or missing references)
		//IL_022c: Unknown result type (might be due to invalid IL or missing references)
		//IL_022d: Unknown result type (might be due to invalid IL or missing references)
		//IL_0232: Unknown result type (might be due to invalid IL or missing references)
		//IL_0266: Unknown result type (might be due to invalid IL or missing references)
		//IL_0267: Unknown result type (might be due to invalid IL or missing references)
		//IL_026c: Unknown result type (might be due to invalid IL or missing references)
		//IL_02a4: Unknown result type (might be due to invalid IL or missing references)
		//IL_02a6: Unknown result type (might be due to invalid IL or missing references)
		//IL_02ab: Unknown result type (might be due to invalid IL or missing references)
		//IL_02ad: Unknown result type (might be due to invalid IL or missing references)
		//IL_02ae: Unknown result type (might be due to invalid IL or missing references)
		//IL_02af: Unknown result type (might be due to invalid IL or missing references)
		//IL_02b4: Unknown result type (might be due to invalid IL or missing references)
		//IL_02b6: Unknown result type (might be due to invalid IL or missing references)
		//IL_02b7: Unknown result type (might be due to invalid IL or missing references)
		//IL_02bc: Unknown result type (might be due to invalid IL or missing references)
		//IL_02c1: Unknown result type (might be due to invalid IL or missing references)
		//IL_02cd: Unknown result type (might be due to invalid IL or missing references)
		//IL_02cf: Unknown result type (might be due to invalid IL or missing references)
		//IL_02da: Unknown result type (might be due to invalid IL or missing references)
		//IL_02dc: Unknown result type (might be due to invalid IL or missing references)
		//IL_02dd: Unknown result type (might be due to invalid IL or missing references)
		//IL_02e2: Unknown result type (might be due to invalid IL or missing references)
		//IL_02e3: Unknown result type (might be due to invalid IL or missing references)
		//IL_02e4: Unknown result type (might be due to invalid IL or missing references)
		//IL_02e9: Unknown result type (might be due to invalid IL or missing references)
		//IL_02ee: Unknown result type (might be due to invalid IL or missing references)
		//IL_02fa: Unknown result type (might be due to invalid IL or missing references)
		//IL_02fc: Unknown result type (might be due to invalid IL or missing references)
		Vector3[] array = (Vector3[])(object)new Vector3[(global::b.i.get_terrainData().get_heightmapWidth() - 1) * (global::b.i.get_terrainData().get_heightmapHeight() - 1) * 2];
		Vector3 val = default(Vector3);
		Vector3 val2 = default(Vector3);
		Vector3 val3 = default(Vector3);
		Vector3 val4 = default(Vector3);
		float[] array2 = new float[global::b.i.get_terrainData().get_heightmapWidth() * global::b.i.get_terrainData().get_heightmapHeight()];
		float num = 65536f;
		int num2 = 0;
		for (int i = 0; i < global::b.i.get_terrainData().get_heightmapHeight(); i++)
		{
			for (int j = 0; j < global::b.i.get_terrainData().get_heightmapWidth(); j++)
			{
				ushort num3 = (ushort)Mathf.Clamp(Mathf.RoundToInt(A_0[i, j] * num), 0, 65535);
				array2[num2] = (float)(int)num3 * 1f / 32766f * global::b.i.get_terrainData().get_size().y * 0.5f;
				num2++;
			}
		}
		int heightmapWidth = global::b.i.get_terrainData().get_heightmapWidth();
		int heightmapHeight = global::b.i.get_terrainData().get_heightmapHeight();
		int num4 = 0;
		Matrix4x4 val5 = default(Matrix4x4);
		((Matrix4x4)(ref val5)).SetTRS(Vector3.get_zero(), Quaternion.AngleAxis(180f, Vector3.get_up()), Vector3.get_one());
		Matrix4x4 val6 = default(Matrix4x4);
		((Matrix4x4)(ref val6)).SetTRS(new Vector3(0f, 0f, global::b.i.get_terrainData().get_size().y), Quaternion.get_identity(), Vector3.get_one());
		Matrix4x4 val7 = val6 * val5;
		for (int k = 0; k < heightmapHeight - 1; k++)
		{
			for (int l = 0; l < heightmapWidth - 1; l++)
			{
				val.x = (float)l * A_2;
				val.y = array2[(k + 1) * heightmapWidth + l];
				val.z = (float)(k + 1) * A_2;
				if (q)
				{
					val = ((Matrix4x4)(ref val7)).MultiplyPoint(val);
				}
				val2.x = (float)(l + 1) * A_2;
				val2.y = array2[(k + 1) * heightmapWidth + l + 1];
				val2.z = (float)(k + 1) * A_2;
				if (q)
				{
					val2 = ((Matrix4x4)(ref val7)).MultiplyPoint(val2);
				}
				val3.x = (float)l * A_2;
				val3.y = array2[k * heightmapWidth + l];
				val3.z = (float)k * A_2;
				if (q)
				{
					val3 = ((Matrix4x4)(ref val7)).MultiplyPoint(val3);
				}
				val4.x = (float)(l + 1) * A_2;
				val4.y = array2[k * heightmapWidth + l + 1];
				val4.z = (float)k * A_2;
				if (q)
				{
					val4 = ((Matrix4x4)(ref val7)).MultiplyPoint(val4);
				}
				Vector3 val8 = Vector3.Cross(val - val3, val4 - val3);
				((Vector3)(ref val8)).Normalize();
				array[num4] = val8;
				num4++;
				Vector3 val9 = Vector3.Cross(val4 - val2, val - val2);
				((Vector3)(ref val9)).Normalize();
				array[num4] = val9;
				num4++;
			}
		}
		return array;
	}

	private static Vector3 a(int A_0, int A_1, Vector3[] A_2, int A_3, int A_4)
	{
		//IL_0154: Unknown result type (might be due to invalid IL or missing references)
		int num = A_1 - 1;
		int num2 = A_0 - 1;
		int[] array = new int[6]
		{
			(num * A_3 + num2) * 2 + 1,
			(A_1 * A_3 + num2) * 2,
			(A_1 * A_3 + num2) * 2 + 1,
			(A_1 * A_3 + A_0) * 2,
			(num * A_3 + A_0) * 2 + 1,
			(num * A_3 + A_0) * 2
		};
		if (num < 0)
		{
			array[0] = (array[4] = (array[5] = -1));
		}
		if (A_1 >= A_4)
		{
			array[1] = -1;
			array[2] = -1;
			array[3] = -1;
		}
		if (num2 < 0)
		{
			array[0] = (array[1] = (array[2] = -1));
		}
		if (A_0 >= A_3)
		{
			array[3] = -1;
			array[4] = -1;
			array[5] = -1;
		}
		float num3 = 0f;
		float num4 = 0f;
		float num5 = 0f;
		float num6 = 0f;
		for (int i = 0; i < array.Length; i++)
		{
			int num7 = array[i];
			if (array[i] >= 0)
			{
				num3 += A_2[num7].x;
				num4 += A_2[num7].y;
				num5 += A_2[num7].z;
				num6 += 1f;
			}
		}
		Vector3 result = default(Vector3);
		((Vector3)(ref result))._002Ector(num3 / num6, num4 / num6, num5 / num6);
		((Vector3)(ref result)).Normalize();
		return result;
	}

	private static Texture2D a(Vector3[] A_0)
	{
		//IL_006c: Unknown result type (might be due to invalid IL or missing references)
		//IL_0071: Unknown result type (might be due to invalid IL or missing references)
		//IL_0075: Unknown result type (might be due to invalid IL or missing references)
		//IL_008f: Unknown result type (might be due to invalid IL or missing references)
		//IL_00a9: Unknown result type (might be due to invalid IL or missing references)
		//IL_00c3: Unknown result type (might be due to invalid IL or missing references)
		//IL_00ca: Unknown result type (might be due to invalid IL or missing references)
		//IL_00d1: Unknown result type (might be due to invalid IL or missing references)
		//IL_00dd: Unknown result type (might be due to invalid IL or missing references)
		//IL_00e2: Unknown result type (might be due to invalid IL or missing references)
		//IL_0132: Unknown result type (might be due to invalid IL or missing references)
		//IL_0138: Expected O, but got Unknown
		Color[] array = (Color[])(object)new Color[global::b.i.get_terrainData().get_heightmapWidth() * global::b.i.get_terrainData().get_heightmapHeight()];
		int num = 0;
		for (int num2 = global::b.i.get_terrainData().get_heightmapHeight() - 1; num2 >= 0; num2--)
		{
			for (int i = 0; i < global::b.i.get_terrainData().get_heightmapWidth(); i++)
			{
				Vector3 val = a(i, num2, A_0, global::b.i.get_terrainData().get_heightmapWidth() - 1, global::b.i.get_terrainData().get_heightmapHeight() - 1);
				val.x = (val.x + 1f) * 0.5f;
				val.y = (val.y + 1f) * 0.5f;
				val.z = (val.z + 1f) * 0.5f;
				array[num] = new Color(val.x, val.y, val.z, 1f);
				num++;
			}
		}
		Texture2D val2 = (Texture2D)(object)new Texture2D(global::b.i.get_terrainData().get_heightmapWidth(), global::b.i.get_terrainData().get_heightmapHeight(), (TextureFormat)4, false);
		val2.SetPixels(array);
		val2.Apply();
		((Object)val2).set_name(((Object)global::b.i).get_name().ToLower() + "_normalMap");
		File.WriteAllBytes(j + "/" + ((Object)val2).get_name() + ".png", ImageConversion.EncodeToPNG(val2));
		return val2;
	}

	private static void a(g A_0)
	{
		string value = A_0.g();
		StreamWriter streamWriter = new StreamWriter(new FileStream(j + "/" + ((Object)i).get_name().ToLower() + ".lt", FileMode.Create, FileAccess.Write));
		streamWriter.Write(value);
		streamWriter.Close();
	}

	public b()
	{
		UNrqlvEiaD5r6WCLZt.IpxBSkcjWDvxT();
		base._002Ector();
	}

	static b()
	{
		UNrqlvEiaD5r6WCLZt.IpxBSkcjWDvxT();
		global::b.m_a = 64;
		global::b.m_b = 32;
		global::b.m_c = 0;
		global::b.m_d = 0;
		global::b.m_e = 0;
		f = null;
		g = null;
		h = new List<KeyValuePair<string, Color[]>>();
		k = null;
		l = null;
		m = null;
		n = null;
		o = "";
		p = false;
		q = true;
	}
}
