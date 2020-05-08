using System;
using System.Collections.Generic;
using System.IO;

using UnityEditor;
using UnityEngine;

// Token: 0x02000016 RID: 22
class Class14
{
	// Token: 0x06000086 RID: 134 RVA: 0x000077E0 File Offset: 0x000059E0
	public static void smethod_0(string string_2, Class19 class19_5)
	{
		Class14.string_0 = string_2 + "/terrain";
		foreach (Terrain terrain in Terrain.activeTerrains)
		{
			Class14.smethod_3();
			Class14.terrain_0 = terrain;
			class19_5.method_22("dataPath", "terrain/" + Class14.terrain_0.name.ToLower() + ".lt");
			Class14.smethod_2();
		}
	}

	// Token: 0x06000087 RID: 135 RVA: 0x0000784C File Offset: 0x00005A4C
	static void smethod_1(Class19 class19_5)
	{
		if (Class14.terrain_0 != null && Class14.terrain_0.lightmapIndex > -1)
		{
			class19_5.method_19("lightmapIndex", Class14.terrain_0.lightmapIndex);
			Class19 @class = new Class19(Class19.Enum2.const_4);
			class19_5.method_23("lightmapScaleOffset", @class);
			@class.method_12(Class14.terrain_0.lightmapScaleOffset.x);
			@class.method_12(Class14.terrain_0.lightmapScaleOffset.y);
			@class.method_12(Class14.terrain_0.lightmapScaleOffset.z);
			@class.method_12(-Class14.terrain_0.lightmapScaleOffset.w);
		}
	}

	// Token: 0x06000088 RID: 136 RVA: 0x000078F4 File Offset: 0x00005AF4
	static void smethod_2()
	{
		if (!Directory.Exists(Class14.string_0))
		{
			Directory.CreateDirectory(Class14.string_0);
		}
		if (Class14.terrain_0.terrainData == null)
		{
			Debug.LogWarning("LayaAir3D : " + Class14.terrain_0.name + "'s TerrainData can't find!");
			return;
		}
		Class19 @class = new Class19(Class19.Enum2.const_3);
		@class.method_22("version", "1.0");
		@class.method_17("cameraCoordinateInverse", Class14.bool_1);
		float num = Class14.terrain_0.terrainData.size.x / (float)(Class14.terrain_0.terrainData.heightmapWidth - 1);
		@class.method_18("gridSize", num);
		if ((Class14.terrain_0.terrainData.heightmapWidth - 1) % Class14.int_0 != 0)
		{
			Debug.LogError("高度图的宽减去一必须是" + Class14.int_0 + "的倍数");
			return;
		}
		if ((Class14.terrain_0.terrainData.heightmapHeight - 1) % Class14.int_0 != 0)
		{
			Debug.LogError("高度图的高减去一必须是" + Class14.int_0 + "的倍数");
			return;
		}
		int num2 = (Class14.terrain_0.terrainData.heightmapWidth - 1) / Class14.int_0;
		int num3 = (Class14.terrain_0.terrainData.heightmapHeight - 1) / Class14.int_0;
		@class.method_19("chunkNumX", num2);
		@class.method_19("chunkNumZ", num3);
		Class19 class2 = new Class19(Class19.Enum2.const_3);
		class2.method_19("numX", Class14.terrain_0.terrainData.heightmapWidth);
		class2.method_19("numZ", Class14.terrain_0.terrainData.heightmapHeight);
		class2.method_19("bitType", 16);
		class2.method_18("value", Class14.terrain_0.terrainData.size.y);
		class2.method_22("url", Class14.terrain_0.name.ToLower() + "_heightmap.thdata");
		@class.method_23("heightData", class2);
		Class19 class3 = new Class19(Class19.Enum2.const_3);
		@class.method_23("material", class3);
		Class19 class4 = new Class19(Class19.Enum2.const_4);
		class4.method_12(0f);
		class4.method_12(0f);
		class4.method_12(0f);
		class3.method_23("ambient", class4);
		Class19 class5 = new Class19(Class19.Enum2.const_4);
		class5.method_12(1f);
		class5.method_12(1f);
		class5.method_12(1f);
		class3.method_23("diffuse", class5);
		Class19 class6 = new Class19(Class19.Enum2.const_4);
		class6.method_12(0.2f);
		class6.method_12(0.2f);
		class6.method_12(0.2f);
		class6.method_12(32f);
		class3.method_23("specular", class6);
		Class19 class7 = new Class19(Class19.Enum2.const_4);
		@class.method_23("detailTexture", class7);
		int num4 = Class14.terrain_0.terrainData.terrainLayers.Length;
		TerrainLayer terrainLayer = Class14.terrain_0.terrainData.terrainLayers[0];
		for (int i = 0; i < num4; i++)
		{
			Class19 class8 = new Class19(Class19.Enum2.const_3);
			TerrainLayer terrainLayer2 = Class14.terrain_0.terrainData.terrainLayers[i];
			class8.method_22("diffuse", terrainLayer2.diffuseTexture.name.ToLower() + ".jpg");
			if (terrainLayer2.normalMapTexture != null)
			{
				class8.method_22("normal", terrainLayer2.normalMapTexture.name.ToLower() + ".jpg");
			}
			Class19 class9 = new Class19(Class19.Enum2.const_4);
			class9.method_12(terrainLayer2.tileSize.x / num);
			class9.method_12(terrainLayer2.tileSize.y / num);
			class8.method_23("scale", class9);
			Class19 class10 = new Class19(Class19.Enum2.const_4);
			class10.method_12(terrainLayer2.tileOffset.x);
			class10.method_12(terrainLayer2.tileOffset.y);
			class8.method_23("offset", class10);
			class7.method_16(class8);
		}
		Class14.class19_4 = new Class19(Class19.Enum2.const_4);
		@class.method_23("chunkInfo", Class14.class19_4);
		float[,] float_ = Class14.smethod_11();
		Texture2D texture2D = Class14.smethod_15(Class14.smethod_13(float_, num2 * Class14.int_1 * num3 * Class14.int_1 * 2, num));
		Class19 class11 = new Class19(Class19.Enum2.const_4);
		class11.method_14(texture2D.name.ToLower() + ".png");
		@class.method_23("normalMap", class11);
		int num5 = 0;
		int num6 = 0;
		TextureFormat textureFormat_ = (TextureFormat)0;
		for (int j = 0; j < num3; j++)
		{
			for (int k = 0; k < num2; k++)
			{
				num4 = Class14.terrain_0.terrainData.alphamapTextures.Length;
				Class14.class19_3 = new Class19(Class19.Enum2.const_3);
				Class14.class19_1 = new Class19(Class19.Enum2.const_4);
				Class14.class19_2 = new Class19(Class19.Enum2.const_4);
				Class14.int_2 = 0;
				for (int l = 0; l < num4; l++)
				{
					Texture2D texture2D2 = Class14.terrain_0.terrainData.alphamapTextures[l];
					if (texture2D2.width % num2 != 0)
					{
						Debug.LogError("Control Texture(alpha map) 的宽必须是" + num2 + "的倍数");
						return;
					}
					if (texture2D2.height % num3 != 0)
					{
						Debug.LogError("Control Texture(alpha map) 的高必须是" + num3 + "的倍数");
						return;
					}
					num5 = texture2D2.width / num2;
					num6 = texture2D2.height / num3;
					int x = k * num5;
					int y = texture2D2.height - (j + 1) * num6;
					Color[] pixels = texture2D2.GetPixels(x, y, num5, num6);
					textureFormat_ = texture2D2.format;
					Class14.smethod_6(string.Concat(new object[]
					{
						Class14.terrain_0.name.ToLower(),
						"_splatalpha{0}_",
						k,
						"_",
						j,
						Class14.bool_0 ? ".jpg" : ".png"
					}), textureFormat_, num5, num6, pixels);
				}
				Class14.smethod_5(string.Concat(new object[]
				{
					Class14.terrain_0.name.ToLower(),
					"_splatalpha{0}_",
					k,
					"_",
					j,
					Class14.bool_0 ? ".jpg" : ".png"
				}), textureFormat_, num5, num6);
				Class14.class19_3.method_19("normalMap", 0);
			}
			Class14.smethod_12();
			Class14.smethod_9(float_);
			Class14.smethod_10();
		}
		Class19 class12 = new Class19(Class19.Enum2.const_4);
		for (int m = 0; m < Class14.list_0.Count; m++)
		{
			class12.method_14(Class14.list_0[m].Key.ToLower());
		}
		@class.method_23("alphaMap", class12);
		Class14.smethod_16(@class);
	}

	// Token: 0x06000089 RID: 137 RVA: 0x00008010 File Offset: 0x00006210
	static void smethod_3()
	{
		Class14.int_2 = 0;
		Class14.int_3 = 0;
		Class14.int_4 = 0;
		Class14.color_0 = null;
		Class14.class19_0 = null;
		Class14.list_0.Clear();
		Class14.terrain_0 = null;
		Class14.class19_1 = null;
		Class14.class19_2 = null;
		Class14.class19_4 = null;
		Class14.string_1 = "";
	}

	// Token: 0x0600008A RID: 138 RVA: 0x00008068 File Offset: 0x00006268
	static void smethod_4(string string_2, TextureFormat textureFormat_0, int int_5, int int_6)
	{
		if (Class14.int_3 <= 0 || !Class14.smethod_7(Class14.color_0))
		{
			int num = Class14.smethod_8(Class14.color_0, Class14.list_0);
			if (num == -1)
			{
				Texture2D texture2D = new Texture2D(int_5, int_6, textureFormat_0, false);
				Color[] array = new Color[Class14.color_0.Length];
				for (int i = 0; i < Class14.color_0.Length; i++)
				{
					float r = Class14.color_0[i].r;
					float g = Class14.color_0[i].g;
					float b = Class14.color_0[i].b;
					float a = Class14.color_0[i].a;
					array[i].r = g;
					array[i].g = b;
					array[i].b = a;
					float num2 = r + g + b + a;
					array[i].a = ((num2 > 1f) ? 1f : num2);
				}
				texture2D.SetPixels(array);
				texture2D.Apply();
				string text = string.Format(string_2, Class14.int_3).ToLower();
				File.WriteAllBytes(Class14.string_0 + "/" + text, Class14.bool_0 ? texture2D.EncodeToJPG() : texture2D.EncodeToPNG());
				Class14.list_0.Add(new KeyValuePair<string, Color[]>(text, Class14.color_0));
				num = Class14.list_0.Count - 1;
			}
			Class14.class19_1.method_13(num);
			Class14.class19_2.method_16(Class14.class19_0);
		}
		Class14.int_3++;
		Class14.color_0 = null;
		Class14.int_4 = 0;
	}

	// Token: 0x0600008B RID: 139 RVA: 0x00008218 File Offset: 0x00006418
	static void smethod_5(string string_2, TextureFormat textureFormat_0, int int_5, int int_6)
	{
		if (Class14.color_0 != null)
		{
			Class14.smethod_4(string_2, textureFormat_0, int_5, int_6);
		}
		Class14.int_3 = 0;
		Class14.string_1 = "";
		Class14.class19_3.method_23("alphaMap", Class14.class19_1);
		Class14.class19_3.method_23("detailID", Class14.class19_2);
		Class14.class19_4.method_16(Class14.class19_3);
	}

	// Token: 0x0600008C RID: 140 RVA: 0x0000827C File Offset: 0x0000647C
	static void smethod_6(string string_2, TextureFormat textureFormat_0, int int_5, int int_6, Color[] color_1)
	{
		for (int i = 0; i < 4; i++)
		{
			if (Class14.color_0 == null)
			{
				Class14.class19_0 = new Class19(Class19.Enum2.const_4);
				Class14.string_1 = string_2;
				Class14.color_0 = new Color[color_1.Length];
				for (int j = 0; j < Class14.color_0.Length; j++)
				{
					Class14.color_0[j] = new Color(0f, 0f, 0f, 0f);
				}
			}
			bool flag = true;
			for (int k = 0; k < color_1.Length; k++)
			{
				float num = color_1[k][i];
				Class14.color_0[k][Class14.int_4] = num;
				if (num != 0f)
				{
					flag = false;
				}
			}
			if (!flag)
			{
				Class14.class19_0.method_13(Class14.int_2);
				Class14.int_4++;
				if (Class14.int_4 > 3)
				{
					Class14.smethod_4(Class14.string_1, textureFormat_0, int_5, int_6);
				}
			}
			Class14.int_2++;
		}
	}

	// Token: 0x0600008D RID: 141 RVA: 0x0000837C File Offset: 0x0000657C
	static bool smethod_7(Color[] color_1)
	{
		for (int i = 0; i < color_1.Length; i++)
		{
			if (color_1[i] != Color.clear)
			{
				return false;
			}
		}
		return true;
	}

	// Token: 0x0600008E RID: 142 RVA: 0x000083B0 File Offset: 0x000065B0
	static int smethod_8(Color[] color_1, List<KeyValuePair<string, Color[]>> list_1)
	{
        for(var i = 0; i< list_1.Count; ++i)
        {
            for(var j = 0;j< color_1.Length; ++j)
            {
                if ((color_1[j] != list_1[i].Value[j]))
                {
                    return i;
                }
            }
        }
        return -1;
	}

	// Token: 0x0600008F RID: 143 RVA: 0x0000840C File Offset: 0x0000660C
	static void smethod_9(float[,] float_0)
	{
		byte[] array = new byte[Class14.terrain_0.terrainData.heightmapWidth * Class14.terrain_0.terrainData.heightmapHeight * 2];
		float num = 65536f;
		int num2 = 0;
		for (int i = 0; i < Class14.terrain_0.terrainData.heightmapHeight; i++)
		{
			for (int j = 0; j < Class14.terrain_0.terrainData.heightmapWidth; j++)
			{
				byte[] bytes = BitConverter.GetBytes((ushort)Mathf.Clamp(Mathf.RoundToInt(float_0[i, j] * num), 0, 65535));
				array[num2 * 2] = bytes[0];
				array[num2 * 2 + 1] = bytes[1];
				num2++;
			}
		}
		FileStream fileStream = new FileStream(Class14.string_0 + "/" + Class14.terrain_0.name.ToLower() + "_heightmap.thdata", FileMode.Create);
		fileStream.Write(array, 0, array.Length);
		fileStream.Close();
	}

	// Token: 0x06000090 RID: 144 RVA: 0x000084F4 File Offset: 0x000066F4
	static void smethod_10()
	{
		int num = Class14.terrain_0.terrainData.alphamapTextures.Length;
		for (int i = 0; i < num; i++)
		{
			Texture2D texture2D = Class14.terrain_0.terrainData.alphamapTextures[i];
			FileStream fileStream = File.Open(Class14.string_0 + "/" + texture2D.name.ToLower() + ".png", FileMode.Create);
			new BinaryWriter(fileStream).Write(texture2D.EncodeToPNG());
			fileStream.Close();
		}
	}

	// Token: 0x06000091 RID: 145 RVA: 0x0000856C File Offset: 0x0000676C
	static float[,] smethod_11()
	{
		float[,] heights = Class14.terrain_0.terrainData.GetHeights(0, 0, Class14.terrain_0.terrainData.heightmapWidth, Class14.terrain_0.terrainData.heightmapHeight);
		float[,] array = new float[Class14.terrain_0.terrainData.heightmapWidth, Class14.terrain_0.terrainData.heightmapHeight];
		for (int i = Class14.terrain_0.terrainData.heightmapHeight - 1; i >= 0; i--)
		{
			for (int j = 0; j < Class14.terrain_0.terrainData.heightmapWidth; j++)
			{
				array[Class14.terrain_0.terrainData.heightmapHeight - 1 - i, j] = heights[i, j];
			}
		}
		return array;
	}

	// Token: 0x06000092 RID: 146 RVA: 0x00008628 File Offset: 0x00006828
	static void smethod_12()
	{
		int num = Class14.terrain_0.terrainData.terrainLayers.Length;
		for (int i = 0; i < num; i++)
		{
			TerrainLayer terrainLayer = Class14.terrain_0.terrainData.terrainLayers[i];
			Texture2D texture2D = terrainLayer.diffuseTexture;
			string assetPath = AssetDatabase.GetAssetPath(texture2D.GetInstanceID());
			TextureImporter textureImporter = AssetImporter.GetAtPath(assetPath) as TextureImporter;
			textureImporter.isReadable = true;
			textureImporter.textureCompression = TextureImporterCompression.Uncompressed;
			AssetDatabase.ImportAsset(assetPath);
			FileStream fileStream = File.Open(Class14.string_0 + "/" + texture2D.name.ToLower() + ".jpg", FileMode.Create);
			new BinaryWriter(fileStream).Write(texture2D.EncodeToJPG());
			fileStream.Close();
			if (terrainLayer.normalMapTexture != null)
			{
				texture2D = terrainLayer.normalMapTexture;
				string assetPath2 = AssetDatabase.GetAssetPath(texture2D.GetInstanceID());
				TextureImporter textureImporter2 = AssetImporter.GetAtPath(assetPath2) as TextureImporter;
				textureImporter2.isReadable = true;
				textureImporter2.textureCompression = TextureImporterCompression.Uncompressed;
				AssetDatabase.ImportAsset(assetPath2);
				FileStream fileStream2 = File.Open(Class14.string_0 + "/" + texture2D.name.ToLower() + ".jpg", FileMode.Create);
				new BinaryWriter(fileStream2).Write(texture2D.EncodeToJPG());
				fileStream2.Close();
			}
		}
	}

	// Token: 0x06000093 RID: 147 RVA: 0x00008750 File Offset: 0x00006950
	static Vector3[] smethod_13(float[,] float_0, int int_5, float float_1)
	{
		Vector3[] array = new Vector3[(Class14.terrain_0.terrainData.heightmapWidth - 1) * (Class14.terrain_0.terrainData.heightmapHeight - 1) * 2];
		Vector3 vector = default(Vector3);
		Vector3 vector2 = default(Vector3);
		Vector3 vector3 = default(Vector3);
		Vector3 vector4 = default(Vector3);
		float[] array2 = new float[Class14.terrain_0.terrainData.heightmapWidth * Class14.terrain_0.terrainData.heightmapHeight];
		float num = 65536f;
		int num2 = 0;
		for (int i = 0; i < Class14.terrain_0.terrainData.heightmapHeight; i++)
		{
			for (int j = 0; j < Class14.terrain_0.terrainData.heightmapWidth; j++)
			{
				ushort num3 = (ushort)Mathf.Clamp(Mathf.RoundToInt(float_0[i, j] * num), 0, 65535);
				array2[num2] = (float)num3 * 1f / 32766f * Class14.terrain_0.terrainData.size.y * 0.5f;
				num2++;
			}
		}
		int heightmapWidth = Class14.terrain_0.terrainData.heightmapWidth;
		int heightmapHeight = Class14.terrain_0.terrainData.heightmapHeight;
		int num4 = 0;
		Matrix4x4 rhs = default(Matrix4x4);
		rhs.SetTRS(Vector3.zero, Quaternion.AngleAxis(180f, Vector3.up), Vector3.one);
		Matrix4x4 lhs = default(Matrix4x4);
		lhs.SetTRS(new Vector3(0f, 0f, Class14.terrain_0.terrainData.size.y), Quaternion.identity, Vector3.one);
		Matrix4x4 matrix4x = lhs * rhs;
		for (int k = 0; k < heightmapHeight - 1; k++)
		{
			for (int l = 0; l < heightmapWidth - 1; l++)
			{
				vector.x = (float)l * float_1;
				vector.y = array2[(k + 1) * heightmapWidth + l];
				vector.z = (float)(k + 1) * float_1;
				if (Class14.bool_1)
				{
					vector = matrix4x.MultiplyPoint(vector);
				}
				vector2.x = (float)(l + 1) * float_1;
				vector2.y = array2[(k + 1) * heightmapWidth + l + 1];
				vector2.z = (float)(k + 1) * float_1;
				if (Class14.bool_1)
				{
					vector2 = matrix4x.MultiplyPoint(vector2);
				}
				vector3.x = (float)l * float_1;
				vector3.y = array2[k * heightmapWidth + l];
				vector3.z = (float)k * float_1;
				if (Class14.bool_1)
				{
					vector3 = matrix4x.MultiplyPoint(vector3);
				}
				vector4.x = (float)(l + 1) * float_1;
				vector4.y = array2[k * heightmapWidth + l + 1];
				vector4.z = (float)k * float_1;
				if (Class14.bool_1)
				{
					vector4 = matrix4x.MultiplyPoint(vector4);
				}
				Vector3 vector5 = Vector3.Cross(vector - vector3, vector4 - vector3);
				vector5.Normalize();
				array[num4] = vector5;
				num4++;
				Vector3 vector6 = Vector3.Cross(vector4 - vector2, vector - vector2);
				vector6.Normalize();
				array[num4] = vector6;
				num4++;
			}
		}
		return array;
	}

	// Token: 0x06000094 RID: 148 RVA: 0x00008A88 File Offset: 0x00006C88
	static Vector3 smethod_14(int int_5, int int_6, Vector3[] vector3_0, int int_7, int int_8)
	{
		int num = int_6 - 1;
		int num2 = int_5 - 1;
		int[] array = new int[]
		{
			(num * int_7 + num2) * 2 + 1,
			(int_6 * int_7 + num2) * 2,
			(int_6 * int_7 + num2) * 2 + 1,
			(int_6 * int_7 + int_5) * 2,
			(num * int_7 + int_5) * 2 + 1,
			(num * int_7 + int_5) * 2
		};
		if (num < 0)
		{
			int[] array2 = array;
			int num3 = 0;
			int[] array3 = array;
			int num4 = 4;
			array[5] = -1;
			array3[num4] = -1;
			array2[num3] = -1;
		}
		if (int_6 >= int_8)
		{
			array[1] = -1;
			array[2] = -1;
			array[3] = -1;
		}
		if (num2 < 0)
		{
			int[] array4 = array;
			int num5 = 0;
			int[] array5 = array;
			int num6 = 1;
			array[2] = -1;
			array5[num6] = -1;
			array4[num5] = -1;
		}
		if (int_5 >= int_7)
		{
			array[3] = -1;
			array[4] = -1;
			array[5] = -1;
		}
		float num7 = 0f;
		float num8 = 0f;
		float num9 = 0f;
		float num10 = 0f;
		for (int i = 0; i < array.Length; i++)
		{
			int num11 = array[i];
			if (array[i] >= 0)
			{
				num7 += vector3_0[num11].x;
				num8 += vector3_0[num11].y;
				num9 += vector3_0[num11].z;
				num10 += 1f;
			}
		}
		Vector3 result = new Vector3(num7 / num10, num8 / num10, num9 / num10);
		result.Normalize();
		return result;
	}

	// Token: 0x06000095 RID: 149 RVA: 0x00008BDC File Offset: 0x00006DDC
	static Texture2D smethod_15(Vector3[] vector3_0)
	{
		Color[] array = new Color[Class14.terrain_0.terrainData.heightmapWidth * Class14.terrain_0.terrainData.heightmapHeight];
		int num = 0;
		for (int i = Class14.terrain_0.terrainData.heightmapHeight - 1; i >= 0; i--)
		{
			for (int j = 0; j < Class14.terrain_0.terrainData.heightmapWidth; j++)
			{
				Vector3 vector = Class14.smethod_14(j, i, vector3_0, Class14.terrain_0.terrainData.heightmapWidth - 1, Class14.terrain_0.terrainData.heightmapHeight - 1);
				vector.x = (vector.x + 1f) * 0.5f;
				vector.y = (vector.y + 1f) * 0.5f;
				vector.z = (vector.z + 1f) * 0.5f;
				array[num] = new Color(vector.x, vector.y, vector.z, 1f);
				num++;
			}
		}
		Texture2D texture2D = new Texture2D(Class14.terrain_0.terrainData.heightmapWidth, Class14.terrain_0.terrainData.heightmapHeight, TextureFormat.RGBA32, false);
		texture2D.SetPixels(array);
		texture2D.Apply();
		texture2D.name = Class14.terrain_0.name.ToLower() + "_normalMap";
		File.WriteAllBytes(Class14.string_0 + "/" + texture2D.name + ".png", texture2D.EncodeToPNG());
		return texture2D;
	}

	// Token: 0x06000096 RID: 150 RVA: 0x00008D74 File Offset: 0x00006F74
	static void smethod_16(Class19 class19_5)
	{
		string value = class19_5.method_51(true);
		StreamWriter streamWriter = new StreamWriter(new FileStream(Class14.string_0 + "/" + Class14.terrain_0.name.ToLower() + ".lt", FileMode.Create, FileAccess.Write));
		streamWriter.Write(value);
		streamWriter.Close();
	}

	// Token: 0x06000097 RID: 151 RVA: 0x000023C6 File Offset: 0x000005C6
	public Class14()
	{
		
		
	}

	// Token: 0x06000098 RID: 152 RVA: 0x00008DC4 File Offset: 0x00006FC4
	// Note: this type is marked as 'beforefieldinit'.
	static Class14()
	{
		
		Class14.int_0 = 64;
		Class14.int_1 = 32;
		Class14.int_2 = 0;
		Class14.int_3 = 0;
		Class14.int_4 = 0;
		Class14.color_0 = null;
		Class14.class19_0 = null;
		Class14.list_0 = new List<KeyValuePair<string, Color[]>>();
		Class14.class19_1 = null;
		Class14.class19_2 = null;
		Class14.class19_3 = null;
		Class14.class19_4 = null;
		Class14.string_1 = "";
		Class14.bool_0 = false;
		Class14.bool_1 = true;
	}

	// Token: 0x040000C2 RID: 194
	static int int_0;

	// Token: 0x040000C3 RID: 195
	static int int_1;

	// Token: 0x040000C4 RID: 196
	static int int_2;

	// Token: 0x040000C5 RID: 197
	static int int_3;

	// Token: 0x040000C6 RID: 198
	static int int_4;

	// Token: 0x040000C7 RID: 199
	static Color[] color_0;

	// Token: 0x040000C8 RID: 200
	static Class19 class19_0;

	// Token: 0x040000C9 RID: 201
	static List<KeyValuePair<string, Color[]>> list_0;

	// Token: 0x040000CA RID: 202
	static Terrain terrain_0;

	// Token: 0x040000CB RID: 203
	static string string_0;

	// Token: 0x040000CC RID: 204
	static Class19 class19_1;

	// Token: 0x040000CD RID: 205
	static Class19 class19_2;

	// Token: 0x040000CE RID: 206
	static Class19 class19_3;

	// Token: 0x040000CF RID: 207
	static Class19 class19_4;

	// Token: 0x040000D0 RID: 208
	static string string_1;

	// Token: 0x040000D1 RID: 209
	static bool bool_0;

	// Token: 0x040000D2 RID: 210
	static bool bool_1;
}
