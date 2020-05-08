using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using LayaExport;

using UnityEditor;
using UnityEditor.Animations;
using UnityEngine;
using UnityEngine.Rendering;
using UnityEngine.SceneManagement;

// Token: 0x0200003A RID: 58
class Class32
{
    // Token: 0x0200003B RID: 59
    public enum Enum3
    {
        // Token: 0x040001F7 RID: 503
        const_0,
        // Token: 0x040001F8 RID: 504
        const_1,
        // Token: 0x040001F9 RID: 505
        const_2,
        // Token: 0x040001FA RID: 506
        const_3,
        // Token: 0x040001FB RID: 507
        const_4,
        // Token: 0x040001FC RID: 508
        const_5,
        // Token: 0x040001FD RID: 509
        const_6,
        // Token: 0x040001FE RID: 510
        const_7,
        // Token: 0x040001FF RID: 511
        const_8,
        // Token: 0x04000200 RID: 512
        const_9,
        // Token: 0x04000201 RID: 513
        const_10,
        // Token: 0x04000202 RID: 514
        const_11,
        // Token: 0x04000203 RID: 515
        const_12,
        // Token: 0x04000204 RID: 516
        const_13,
        // Token: 0x04000205 RID: 517
        const_14
    }

    // Token: 0x0200003C RID: 60
    class Class33
    {
        // Token: 0x0600020C RID: 524 RVA: 0x000207DC File Offset: 0x0001E9DC
        public void method_0(Class32.Class33 class33_0)
        {
            this.vector3_0 = class33_0.vector3_0;
            this.vector3_1 = class33_0.vector3_1;
            this.color_0 = class33_0.color_0;
            this.vector2_0 = class33_0.vector2_0;
            this.vector2_1 = class33_0.vector2_1;
            this.vector4_0 = class33_0.vector4_0;
            this.vector4_2 = class33_0.vector4_2;
            this.vector4_1 = new Vector4(class33_0.vector4_1.x, class33_0.vector4_1.y, class33_0.vector4_1.z, class33_0.vector4_1.w);
        }

        // Token: 0x0600020D RID: 525 RVA: 0x000031E4 File Offset: 0x000013E4
        public Class33()
        {

            this.bool_0 = true;
            this.int_1 = -1;
            this.int_2 = -1;

        }

        // Token: 0x04000206 RID: 518
        public int int_0;

        // Token: 0x04000207 RID: 519
        public Vector3 vector3_0;

        // Token: 0x04000208 RID: 520
        public Vector3 vector3_1;

        // Token: 0x04000209 RID: 521
        public Color color_0;

        // Token: 0x0400020A RID: 522
        public Vector2 vector2_0;

        // Token: 0x0400020B RID: 523
        public Vector2 vector2_1;

        // Token: 0x0400020C RID: 524
        public Vector4 vector4_0;

        // Token: 0x0400020D RID: 525
        public Vector4 vector4_1;

        // Token: 0x0400020E RID: 526
        public Vector4 vector4_2;

        // Token: 0x0400020F RID: 527
        public bool bool_0;

        // Token: 0x04000210 RID: 528
        public int int_1;

        // Token: 0x04000211 RID: 529
        public int int_2;

        // Token: 0x04000212 RID: 530
        public Dictionary<string, int> dictionary_0;
    }

    // Token: 0x0200003D RID: 61
    class Class34
    {
        // Token: 0x0600020E RID: 526 RVA: 0x000023C6 File Offset: 0x000005C6
        public Class34()
        {


        }

        // Token: 0x04000213 RID: 531
        public Class32.Class33 class33_0;

        // Token: 0x04000214 RID: 532
        public Class32.Class33 class33_1;

        // Token: 0x04000215 RID: 533
        public Class32.Class33 class33_2;
    }

    // Token: 0x0200003E RID: 62
    struct Struct6
    {
        // Token: 0x04000216 RID: 534
        public Vector3 vector3_0;

        // Token: 0x04000217 RID: 535
        public Vector3 vector3_1;

        // Token: 0x04000218 RID: 536
        public Vector2 vector2_0;
    }

    // Token: 0x0200003F RID: 63
    struct Struct7
    {
        // Token: 0x04000219 RID: 537
        public ushort ushort_0;

        // Token: 0x0400021A RID: 538
        public List<float> list_0;

        // Token: 0x0400021B RID: 539
        public List<float> list_1;

        // Token: 0x0400021C RID: 540
        public List<float> list_2;
    }

    // Token: 0x02000040 RID: 64
    struct Struct8
    {
        // Token: 0x0400021D RID: 541
        public byte byte_0;

        // Token: 0x0400021E RID: 542
        public ushort ushort_0;

        // Token: 0x0400021F RID: 543
        public List<ushort> list_0;

        // Token: 0x04000220 RID: 544
        public ushort ushort_1;

        // Token: 0x04000221 RID: 545
        public ushort ushort_2;

        // Token: 0x04000222 RID: 546
        public List<ushort> list_1;

        // Token: 0x04000223 RID: 547
        public ushort ushort_3;

        // Token: 0x04000224 RID: 548
        public List<Class32.Struct7> list_2;
    }

    // Token: 0x02000041 RID: 65
    struct Struct9
    {
        // Token: 0x04000225 RID: 549
        public Keyframe[] keyframe_0;
    }

    // Token: 0x02000042 RID: 66
    struct Struct10
    {
        // Token: 0x04000226 RID: 550
        public Class32.Struct9 struct9_0;

        // Token: 0x04000227 RID: 551
        public string string_0;

        // Token: 0x04000228 RID: 552
        public string string_1;

        // Token: 0x04000229 RID: 553
        public Type type_0;
    }

    // Token: 0x060001BE RID: 446 RVA: 0x000031B3 File Offset: 0x000013B3
    public static int smethod_0()
    {
        return Class32.int_12++;
    }

    // Token: 0x060001BF RID: 447 RVA: 0x0000ECD4 File Offset: 0x0000CED4
    public static void smethod_1(string string_11)
    {
        Class32.string_3 = SceneManager.GetActiveScene().name;
        Class32.string_3 = Class32.smethod_62(Class32.string_3, true);
        if (Class32.string_3 == "")
        {
            Class32.string_3 = "layaScene";
        }
        string text;
        if (Class32.bool_9 && Class32.string_1 != "")
        {
            Class32.string_1 = Class32.smethod_62(Class32.string_1, true);
            text = "/" + Class32.string_1 + string_11;
        }
        else
        {
            text = "/LayaScene_" + Class32.string_3 + string_11;
        }
        Class32.string_2 += text;
        Class32.list_0 = new List<string>();
        Class32.list_0.Add(".jpeg");
        Class32.list_0.Add(".JPEG");
        Class32.list_0.Add(".bmp");
        Class32.list_0.Add(".BMP");
        Class32.list_0.Add(".png");
        Class32.list_0.Add(".PNG");
        Class32.list_0.Add(".jpg");
        Class32.list_0.Add(".JPG");
        Class32.int_7 = 0;
        Class32.int_9 = 0;
        Class32.int_11 = 0;
        Class32.smethod_65(text + "/" + Class32.string_3);
        Class32.smethod_2();
        Class32.smethod_70();
        Class32.smethod_71();
        Class32.dictionary_2.Clear();
        Class32.dictionary_3.Clear();
        if (Class32.bool_12 && Class32.int_3 == 0)
        {
            Class32.smethod_67();
        }
        if (Class32.bool_11 && Class32.int_3 == 2)
        {
            Class32.smethod_69();
        }
        if (Class32.bool_10 && Class32.int_3 == 1)
        {
            Class32.smethod_68();
        }
        foreach (KeyValuePair<string, TextureInfo> keyValuePair in Class32.dictionary_1)
        {
            TextureInfo value = keyValuePair.Value;
            string path = value.Path;
            TextureImporter textureImporter = AssetImporter.GetAtPath(path) as TextureImporter;
            textureImporter.textureType = value.lastType;
            textureImporter.isReadable = value.lastReadable;
            textureImporter.textureCompression = value.lastCompression;
            AssetDatabase.ImportAsset(path);
        }
        Class32.dictionary_1.Clear();
        Class32.list_1.Clear();
    }

    // Token: 0x060001C0 RID: 448 RVA: 0x0000EF20 File Offset: 0x0000D120
    static void smethod_2()
    {
        Class32.int_12 = 0;
        Class32.dictionary_4.Clear();
        if (Class32.bool_8 && Class32.int_0 == 1)
        {
            Class32.smethod_4();
            return;
        }
        string item = "";
        if (Class32.int_0 == 0)
        {
            item = Class32.string_2 + "/" + Class32.string_3 + ".ls";
        }
        else if (Class32.int_0 == 1)
        {
            item = Class32.string_2 + "/" + Class32.string_3 + ".lh";
        }
        Class30.smethod_0(item, Class32.smethod_3());
        Class32.list_1.Add(item);
    }

    // Token: 0x060001C1 RID: 449 RVA: 0x0000EFB8 File Offset: 0x0000D1B8
    static Class19 smethod_3()
    {
        Class19 @class = new Class19(Class19.Enum2.const_3);
        Class19 class2 = new Class19(Class19.Enum2.const_3);
        Class19 class3 = new Class19(Class19.Enum2.const_3);
        class3.method_22("name", Class32.string_3);
        if (Class32.int_0 == 0)
        {
            @class.method_22("version", Class32.string_4);
            class2.method_22("type", "Scene3D");
        }
        else if (Class32.int_0 == 1)
        {
            @class.method_22("version", Class32.string_5);
            class2.method_22("type", "Sprite3D");
            class2.method_19("instanceID", Class32.smethod_0());
            Class32.dictionary_4.Add("scene", Class32.int_12 - 1);
            class3.method_17("active", true);
        }
        class2.method_23("props", class3);
        @class.method_23("data", class2);
        if (Class32.int_0 == 0)
        {
            Material skybox = RenderSettings.skybox;
            if (skybox != null)
            {
                Class32.smethod_31(skybox, class3);
            }
            Color ambientLight = RenderSettings.ambientLight;
            Class19 class4 = new Class19(Class19.Enum2.const_4);
            class4.method_12(ambientLight.r);
            class4.method_12(ambientLight.g);
            class4.method_12(ambientLight.b);
            class3.method_23("ambientColor", class4);
            if (RenderSettings.defaultReflectionMode == DefaultReflectionMode.Custom)
            {
                Class32.smethod_46(RenderSettings.customReflection, class3, false, null);
                class3.method_18("reflectionIntensity", RenderSettings.reflectionIntensity);
            }
            Class32.smethod_44(class3);
            class3.method_17("enableFog", RenderSettings.fog);
            class3.method_18("fogStart", RenderSettings.fogStartDistance);
            class3.method_18("fogRange", RenderSettings.fogEndDistance - RenderSettings.fogStartDistance);
            Class19 class5 = new Class19(Class19.Enum2.const_4);
            Color fogColor = RenderSettings.fogColor;
            class5.method_12(fogColor.r);
            class5.method_12(fogColor.g);
            class5.method_12(fogColor.b);
            class3.method_23("fogColor", class5);
        }
        else if (Class32.int_0 == 1)
        {
            Vector3 vector = new Vector3(0f, 0f, 0f);
            Quaternion quaternion = new Quaternion(0f, 0f, 0f, -1f);
            Vector3 vector2 = new Vector3(1f, 1f, 1f);
            Class19 class6 = new Class19(Class19.Enum2.const_4);
            class6.method_12(vector.x);
            class6.method_12(vector.y);
            class6.method_12(vector.z);
            class3.method_23("position", class6);
            Class19 class7 = new Class19(Class19.Enum2.const_4);
            class7.method_12(quaternion.x);
            class7.method_12(quaternion.y);
            class7.method_12(quaternion.z);
            class7.method_12(quaternion.w);
            class3.method_23("rotation", class7);
            Class19 class8 = new Class19(Class19.Enum2.const_4);
            class8.method_12(vector2.x);
            class8.method_12(vector2.y);
            class8.method_12(vector2.z);
            class3.method_23("scale", class8);
        }
        GameObject[] rootGameObjects = SceneManager.GetActiveScene().GetRootGameObjects();
        if (rootGameObjects.Length != 0)
        {
            Class19 class19_ = new Class19(Class19.Enum2.const_4);
            class2.method_23("child", class19_);
            string string_ = Class32.string_3;
            for (int i = 0; i < rootGameObjects.Length; i++)
            {
                Class32.smethod_5(rootGameObjects[i].gameObject, string_, class19_, false, false, false);
            }
        }
        else
        {
            class2.method_23("child", new Class19(Class19.Enum2.const_4));
        }
        return @class;
    }

    // Token: 0x060001C2 RID: 450 RVA: 0x0000F324 File Offset: 0x0000D524
    static Dictionary<string, Class19> smethod_4()
    {
        GameObject[] rootGameObjects = SceneManager.GetActiveScene().GetRootGameObjects();
        Dictionary<string, Class19> dictionary = new Dictionary<string, Class19>();
        if (rootGameObjects.Length != 0)
        {
            for (int i = 0; i < rootGameObjects.Length; i++)
            {
                if (LayaAir3D.customExport == null || LayaAir3D.customExport.StartEachHierarchyExport(Class32.string_2 + "/" + Class32.smethod_62(rootGameObjects[i].name, true) + ".lh"))
                {
                    List<Class32.Enum3> list = Class32.smethod_61(rootGameObjects[i]);
                    Class32.smethod_59(rootGameObjects[i], true);
                    if ((rootGameObjects[i].activeInHierarchy || !Class32.bool_7) && (list.Count > 1 || Class32.bool_13))
                    {
                        Class19 @class = new Class19(Class19.Enum2.const_3);
                        @class.method_22("version", Class32.string_5);
                        string string_ = Class32.string_3;
                        Class32.smethod_5(rootGameObjects[i].gameObject, string_, @class, false, false, true);
                        string hierarchyPath;
                        if (dictionary.ContainsKey(rootGameObjects[i].name))
                        {
                            hierarchyPath = string.Concat(new string[]
                            {
                                Class32.string_2,
                                "/",
                                rootGameObjects[i].name,
                                dictionary.Count.ToString(),
                                ".lh"
                            });
                            Class30.smethod_0(hierarchyPath, @class);
                        }
                        else
                        {
                            hierarchyPath = Class32.string_2 + "/" + rootGameObjects[i].name + ".lh";
                            Class30.smethod_0(hierarchyPath, @class);
                        }
                        if (LayaAir3D.customExport != null)
                        {
                            LayaAir3D.customExport.EndEachHierarchyExport(hierarchyPath);
                        }
                    }
                }
            }
        }
        return dictionary;
    }

    // Token: 0x060001C3 RID: 451 RVA: 0x0000F4A4 File Offset: 0x0000D6A4
    static void smethod_5(GameObject gameObject_0, string string_11, Class19 class19_0, bool bool_14 = false, bool bool_15 = false, bool bool_16 = false)
    {
        List<Class32.Enum3> list = Class32.smethod_61(gameObject_0);
        Class32.smethod_59(gameObject_0, true);
        if (!gameObject_0.activeSelf && Class32.bool_7)
        {
            return;
        }
        if (list.Count < 1 && !Class32.bool_13)
        {
            return;
        }
        if (list.Count < 1 && bool_14)
        {
            return;
        }
        if (list.IndexOf(Class32.Enum3.const_2) != -1 && Class32.int_7 >= Class32.int_6)
        {
            return;
        }
        if (list.IndexOf(Class32.Enum3.const_3) != -1 && Class32.int_9 >= Class32.int_8)
        {
            return;
        }
        if (list.IndexOf(Class32.Enum3.const_4) != -1 && Class32.int_11 >= Class32.int_10)
        {
            return;
        }
        Class19 @class = new Class19(Class19.Enum2.const_3);
        Class19 class2 = new Class19(Class19.Enum2.const_4);
        Vector3 localPosition = gameObject_0.transform.localPosition;
        Quaternion localRotation = gameObject_0.transform.localRotation;
        Vector3 localScale = gameObject_0.transform.localScale;
        string string_12 = string_11;
        Class32.smethod_9(gameObject_0, @class, class2, localPosition, localRotation, localScale, ref string_12);
        Class32.smethod_57(gameObject_0, true);
        if (gameObject_0.transform.childCount > 0 && !bool_15)
        {
            for (int i = 0; i < gameObject_0.transform.childCount; i++)
            {
                Class32.smethod_5(gameObject_0.transform.GetChild(i).gameObject, string_12, class2, false, false, false);
            }
        }
        @class.method_23("child", class2);
        if (bool_16)
        {
            class19_0.method_23("data", @class);
            return;
        }
        class19_0.method_16(@class);
    }

    // Token: 0x060001C4 RID: 452 RVA: 0x0000F5F0 File Offset: 0x0000D7F0
    static void smethod_6(GameObject gameObject_0, string string_11, Class19 class19_0)
    {
        List<Class32.Enum3> list = Class32.smethod_61(gameObject_0);
        Transform[] componentsInChildren = gameObject_0.GetComponentsInChildren<Transform>();
        for (int i = 0; i < componentsInChildren.Length; i++)
        {
            Class19 @class = new Class19(Class19.Enum2.const_3);
            Class19 class2 = new Class19(Class19.Enum2.const_4);
            GameObject gameObject = componentsInChildren[i].gameObject;
            List<Class32.Enum3> list2 = Class32.smethod_61(gameObject);
            Class32.smethod_59(gameObject, true);
            if (!(gameObject == gameObject_0) && (gameObject.activeInHierarchy || !Class32.bool_7) && !(Class32.smethod_55(gameObject, Class32.Enum3.const_8) != null) && (list.IndexOf(Class32.Enum3.const_2) == -1 || Class32.int_7 < Class32.int_6))
            {
                if (list.IndexOf(Class32.Enum3.const_3) != -1 && Class32.int_9 >= Class32.int_8)
                {
                    return;
                }
                if (list.IndexOf(Class32.Enum3.const_4) != -1 && Class32.int_11 >= Class32.int_10)
                {
                    return;
                }
                if (list2.Count > 1 || Class32.bool_13)
                {
                    Matrix4x4 matrix4x = gameObject_0.transform.worldToLocalMatrix * gameObject.transform.localToWorldMatrix;
                    Vector3 vector3_ = matrix4x.GetColumn(3);
                    Quaternion quaternion_ = Quaternion.LookRotation(matrix4x.GetColumn(2), matrix4x.GetColumn(1));
                    Vector3 vector3_2 = new Vector3(matrix4x.GetColumn(0).magnitude, matrix4x.GetColumn(1).magnitude, matrix4x.GetColumn(2).magnitude);
                    Class31.smethod_0(matrix4x.transpose, out vector3_2, out quaternion_, out vector3_);
                    string text = string_11;
                    Class32.smethod_9(gameObject, @class, class2, vector3_, quaternion_, vector3_2, ref text);
                    @class.method_23("child", class2);
                    class19_0.method_16(@class);
                }
            }
        }
    }

    // Token: 0x060001C5 RID: 453 RVA: 0x0000F7A4 File Offset: 0x0000D9A4
    static void smethod_7(Dictionary<GameObject, Class19> dictionary_5, GameObject gameObject_0, GameObject gameObject_1, string string_11, Class19 class19_0, List<string> list_2 = null)
    {
        List<Class32.Enum3> list = Class32.smethod_61(gameObject_1);
        Class32.smethod_59(gameObject_1, true);
        if (list.Count > 1 && gameObject_1.transform.parent.gameObject == gameObject_0)
        {
            Class19 @class = new Class19(Class19.Enum2.const_3);
            Class19 class2 = new Class19(Class19.Enum2.const_4);
            Matrix4x4 matrix4x = gameObject_0.transform.worldToLocalMatrix * gameObject_1.transform.localToWorldMatrix;
            Vector3 vector3_ = matrix4x.GetColumn(3);
            Quaternion quaternion_ = Quaternion.LookRotation(matrix4x.GetColumn(2), matrix4x.GetColumn(1));
            Vector3 vector3_2 = new Vector3(matrix4x.GetColumn(0).magnitude, matrix4x.GetColumn(1).magnitude, matrix4x.GetColumn(2).magnitude);
            Class31.smethod_0(matrix4x.transpose, out vector3_2, out quaternion_, out vector3_);
            string text = string_11;
            Class32.smethod_9(gameObject_1, @class, class2, vector3_, quaternion_, vector3_2, ref text);
            for (int i = 0; i < gameObject_1.transform.childCount; i++)
            {
                Class32.smethod_5(gameObject_1.transform.GetChild(i).gameObject, string_11, class2, true, false, false);
            }
            @class.method_23("child", class2);
            class19_0.method_16(@class);
            return;
        }
        if (list.Count <= 1)
        {
            int childCount = gameObject_1.transform.childCount;
            if (childCount == 0)
            {
                return;
            }
            for (int j = 0; j < childCount; j++)
            {
                Class32.smethod_7(dictionary_5, gameObject_0, gameObject_1.transform.GetChild(j).gameObject, string_11, class19_0, list_2);
            }
            return;
        }
        else
        {
            if (!gameObject_1.activeSelf && Class32.bool_7)
            {
                return;
            }
            if (list_2 != null && list_2.IndexOf(gameObject_1.name) == -1 && gameObject_1.GetComponent<SkinnedMeshRenderer>() == null)
            {
                list_2.Add(gameObject_1.name);
            }
            if (!dictionary_5.ContainsKey(gameObject_1))
            {
                Class19 class3 = new Class19(Class19.Enum2.const_4);
                Class19 class4 = new Class19(Class19.Enum2.const_3);
                Matrix4x4 matrix4x2 = gameObject_0.transform.worldToLocalMatrix * gameObject_1.transform.localToWorldMatrix;
                Vector3 vector3_3 = matrix4x2.GetColumn(3);
                Quaternion quaternion_2 = Quaternion.LookRotation(matrix4x2.GetColumn(2), matrix4x2.GetColumn(1));
                Vector3 vector3_4 = new Vector3(matrix4x2.GetColumn(0).magnitude, matrix4x2.GetColumn(1).magnitude, matrix4x2.GetColumn(2).magnitude);
                Class31.smethod_0(matrix4x2.transpose, out vector3_4, out quaternion_2, out vector3_3);
                string text2 = string_11;
                Class32.smethod_9(gameObject_1, class4, class3, vector3_3, quaternion_2, vector3_4, ref text2);
                class4.method_23("child", class3);
                class19_0.method_16(class4);
                dictionary_5.Add(gameObject_1, class4);
            }
            else
            {
                Class19 class19_ = dictionary_5[gameObject_1].method_43("child");
                Class32.smethod_5(gameObject_1, string_11, class19_, true, false, false);
            }
            if (gameObject_1.GetComponent<Animator>() == null)
            {
                int childCount2 = gameObject_1.transform.childCount;
                if (childCount2 == 0)
                {
                    return;
                }
                for (int k = 0; k < childCount2; k++)
                {
                    Class32.smethod_7(dictionary_5, gameObject_0, gameObject_1.transform.GetChild(k).gameObject, string_11, class19_0, list_2);
                }
            }
            return;
        }
    }

    // Token: 0x060001C6 RID: 454 RVA: 0x0000FAD0 File Offset: 0x0000DCD0
    static void smethod_8(GameObject gameObject_0, string string_11, Class19 class19_0, List<string> list_2 = null)
    {
        Dictionary<GameObject, Class19> dictionary_ = new Dictionary<GameObject, Class19>();
        int childCount = gameObject_0.transform.childCount;
        for (int i = 0; i < childCount; i++)
        {
            if (!Class32.bool_7 || gameObject_0.transform.GetChild(i).gameObject.activeSelf)
            {
                Class32.smethod_7(dictionary_, gameObject_0, gameObject_0.transform.GetChild(i).gameObject, string_11, class19_0, list_2);
            }
        }
    }

    // Token: 0x060001C7 RID: 455 RVA: 0x0000FB38 File Offset: 0x0000DD38
    static void smethod_9(GameObject gameObject_0, Class19 class19_0, Class19 class19_1, Vector3 vector3_0, Quaternion quaternion_0, Vector3 vector3_1, ref string string_11)
    {
        List<Class32.Enum3> list = Class32.smethod_61(gameObject_0);
        Class19 @class = new Class19(Class19.Enum2.const_3);
        Class19 class19_2 = new Class19(Class19.Enum2.const_4);
        class19_0.method_22("type", "");
        if (list.IndexOf(Class32.Enum3.const_0) != -1)
        {
            class19_0.method_24("type", "Sprite3D");
        }
        if (list.IndexOf(Class32.Enum3.const_11) != -1)
        {
            class19_0.method_24("type", "Sprite3D");
        }
        if (list.IndexOf(Class32.Enum3.const_12) != -1)
        {
            class19_0.method_24("type", "Sprite3D");
        }
        if (list.IndexOf(Class32.Enum3.const_8) != -1)
        {
            class19_0.method_24("type", "Sprite3D");
        }
        if (list.IndexOf(Class32.Enum3.const_2) != -1)
        {
            class19_0.method_24("type", "DirectionLight");
        }
        if (list.IndexOf(Class32.Enum3.const_3) != -1)
        {
            class19_0.method_24("type", "PointLight");
        }
        if (list.IndexOf(Class32.Enum3.const_4) != -1)
        {
            class19_0.method_24("type", "SpotLight");
        }
        if (list.IndexOf(Class32.Enum3.const_1) != -1)
        {
            class19_0.method_24("type", "Camera");
        }
        if (list.IndexOf(Class32.Enum3.const_5) != -1)
        {
            class19_0.method_24("type", "MeshSprite3D");
        }
        if (list.IndexOf(Class32.Enum3.const_6) != -1)
        {
            class19_0.method_24("type", "MeshSprite3D");
        }
        if (list.IndexOf(Class32.Enum3.const_7) != -1)
        {
            class19_0.method_24("type", "SkinnedMeshSprite3D");
        }
        if (list.IndexOf(Class32.Enum3.const_9) != -1)
        {
            class19_0.method_24("type", "ShuriKenParticle3D");
        }
        if (list.IndexOf(Class32.Enum3.const_10) != -1)
        {
            if (Class32.bool_6)
            {
                class19_0.method_24("type", "MeshSprite3D");
            }
            else
            {
                class19_0.method_24("type", "Terrain");
            }
        }
        if (list.IndexOf(Class32.Enum3.const_13) != -1)
        {
            class19_0.method_24("type", "TrailSprite3D");
        }
        if (list.IndexOf(Class32.Enum3.const_14) != -1)
        {
            class19_0.method_24("type", "LineSprite3D");
        }
        if (Class32.dictionary_4.ContainsKey(gameObject_0.GetInstanceID().ToString()))
        {
            class19_0.method_19("instanceID", Class32.dictionary_4[gameObject_0.GetInstanceID().ToString()]);
        }
        else
        {
            class19_0.method_19("instanceID", Class32.smethod_0());
            Class32.dictionary_4.Add(gameObject_0.GetInstanceID().ToString(), Class32.int_12 - 1);
        }
        class19_0.method_23("props", @class);
        StaticEditorFlags staticEditorFlags = GameObjectUtility.GetStaticEditorFlags(gameObject_0);
        @class.method_22("name", gameObject_0.name);
        @class.method_17("active", gameObject_0.activeSelf);
        @class.method_17("isStatic", (staticEditorFlags & StaticEditorFlags.BatchingStatic) > (StaticEditorFlags)0);
        string_11 = string_11 + "/" + gameObject_0.name;
        if (gameObject_0.layer == 31)
        {
            Debug.LogWarning("LayaUnityPlugin : layer must less than 31 !");
        }
        else
        {
            @class.method_19("layer", gameObject_0.layer);
        }
        class19_0.method_23("components", class19_2);
        if (list.IndexOf(Class32.Enum3.const_0) != -1)
        {
            Class32.smethod_10(gameObject_0, @class, vector3_0, quaternion_0, vector3_1);
        }
        if (list.IndexOf(Class32.Enum3.const_12) != -1)
        {
            Class32.smethod_23(gameObject_0, class19_2);
        }
        if (list.IndexOf(Class32.Enum3.const_11) != -1)
        {
            Class32.smethod_22(gameObject_0, class19_2);
        }
        if (list.IndexOf(Class32.Enum3.const_8) != -1)
        {
            Avatar avatar = gameObject_0.GetComponent<Animator>().avatar;
            List<string> list_ = new List<string>();
            Class32.smethod_18(gameObject_0, class19_2, list_);
        }
        if (list.IndexOf(Class32.Enum3.const_2) != -1)
        {
            Class32.smethod_12(gameObject_0, @class);
        }
        if (list.IndexOf(Class32.Enum3.const_3) != -1)
        {
            Class32.smethod_13(gameObject_0, @class);
        }
        if (list.IndexOf(Class32.Enum3.const_4) != -1)
        {
            Class32.smethod_14(gameObject_0, @class);
        }
        if (list.IndexOf(Class32.Enum3.const_1) != -1)
        {
            Class32.smethod_11(gameObject_0, @class);
        }
        if (list.IndexOf(Class32.Enum3.const_5) != -1)
        {
            Class32.smethod_15(gameObject_0, @class);
        }
        if (list.IndexOf(Class32.Enum3.const_6) != -1)
        {
            Class32.smethod_16(gameObject_0, @class);
        }
        if (list.IndexOf(Class32.Enum3.const_7) != -1)
        {
            Class32.smethod_17(gameObject_0, @class);
        }
        if (list.IndexOf(Class32.Enum3.const_9) != -1)
        {
            Class32.smethod_20(gameObject_0, @class);
        }
        if (list.IndexOf(Class32.Enum3.const_10) != -1)
        {
            Class32.smethod_21(gameObject_0, @class);
        }
        if (list.IndexOf(Class32.Enum3.const_13) != -1)
        {
            Class32.smethod_24(gameObject_0, @class);
        }
        if (list.IndexOf(Class32.Enum3.const_14) != -1)
        {
            Class32.smethod_25(gameObject_0, @class);
        }
    }

    // Token: 0x060001C8 RID: 456 RVA: 0x0000FF2C File Offset: 0x0000E12C
    static void smethod_10(GameObject gameObject_0, Class19 class19_0, Vector3 vector3_0, Quaternion quaternion_0, Vector3 vector3_1)
    {
        Class19 @class = new Class19(Class19.Enum2.const_4);
        Class19 class2 = new Class19(Class19.Enum2.const_4);
        Class19 class3 = new Class19(Class19.Enum2.const_4);
        class19_0.method_23("position", @class);
        class19_0.method_23("rotation", class2);
        class19_0.method_23("scale", class3);
        List<Class32.Enum3> list = Class32.smethod_61(gameObject_0);
        @class.method_12(vector3_0.x * -1f);
        @class.method_12(vector3_0.y);
        @class.method_12(vector3_0.z);
        if (list.IndexOf(Class32.Enum3.const_10) == -1)
        {
            if (list.IndexOf(Class32.Enum3.const_1) != -1 || list.IndexOf(Class32.Enum3.const_2) != -1 || list.IndexOf(Class32.Enum3.const_4) != -1)
            {
                quaternion_0 *= new Quaternion(0f, 1f, 0f, 0f);
            }
            class2.method_12(quaternion_0.x * -1f);
            class2.method_12(quaternion_0.y);
            class2.method_12(quaternion_0.z);
            class2.method_12(quaternion_0.w * -1f);
            class3.method_12(vector3_1.x);
            class3.method_12(vector3_1.y);
            class3.method_12(vector3_1.z);
            return;
        }
        class2.method_13(0);
        class2.method_13(0);
        class2.method_13(0);
        class2.method_13(-1);
        class3.method_13(1);
        class3.method_13(1);
        class3.method_13(1);
    }

    // Token: 0x060001C9 RID: 457 RVA: 0x00010088 File Offset: 0x0000E288
    static void smethod_11(GameObject gameObject_0, Class19 class19_0)
    {
        Camera component = gameObject_0.GetComponent<Camera>();
        if (component.clearFlags == CameraClearFlags.Skybox)
        {
            class19_0.method_19("clearFlag", 1);
        }
        else
        {
            if (component.clearFlags != CameraClearFlags.Color)
            {
                if (component.clearFlags != CameraClearFlags.Color)
                {
                    if (component.clearFlags == CameraClearFlags.Depth)
                    {
                        class19_0.method_19("clearFlag", 2);
                        goto IL_63;
                    }
                    class19_0.method_19("clearFlag", 3);
                    goto IL_63;
                }
            }
            class19_0.method_19("clearFlag", 0);
        }
    IL_63:
        class19_0.method_17("orthographic", component.orthographic);
        class19_0.method_18("orthographicVerticalSize", component.orthographicSize * 2f);
        class19_0.method_18("fieldOfView", component.fieldOfView);
        class19_0.method_17("enableHDR", component.allowHDR);
        class19_0.method_18("nearPlane", component.nearClipPlane);
        class19_0.method_18("farPlane", component.farClipPlane);
        Class19 @class = new Class19(Class19.Enum2.const_4);
        Rect rect = component.rect;
        @class.method_12(rect.x);
        @class.method_12(rect.y);
        @class.method_12(rect.width);
        @class.method_12(rect.height);
        class19_0.method_23("viewport", @class);
        Class19 class2 = new Class19(Class19.Enum2.const_4);
        Color backgroundColor = component.backgroundColor;
        class2.method_12(backgroundColor.r);
        class2.method_12(backgroundColor.g);
        class2.method_12(backgroundColor.b);
        class2.method_12(backgroundColor.a);
        class19_0.method_23("clearColor", class2);
        Skybox[] components = gameObject_0.GetComponents<Skybox>();
        if (components.Length != 0)
        {
            foreach (Skybox skybox in components)
            {
                if (skybox.enabled)
                {
                    Material material = skybox.material;
                    if (material != null)
                    {
                        Class32.smethod_31(material, class19_0);
                        return;
                    }
                }
            }
        }
    }

    // Token: 0x060001CA RID: 458 RVA: 0x00010250 File Offset: 0x0000E450
    static void smethod_12(GameObject gameObject_0, Class19 class19_0)
    {
        Light component = gameObject_0.GetComponent<Light>();
        class19_0.method_18("intensity", component.intensity);
        switch (component.lightmapBakeType)
        {
            case LightmapBakeType.Mixed:
                class19_0.method_19("lightmapBakedType", 1);
                goto IL_6F;
            case LightmapBakeType.Baked:
                class19_0.method_19("lightmapBakedType", 2);
                goto IL_6F;
            case LightmapBakeType.Realtime:
                class19_0.method_19("lightmapBakedType", 0);
                goto IL_6F;
        }
        class19_0.method_19("lightmapBakedType", 0);
    IL_6F:
        Class19 @class = new Class19(Class19.Enum2.const_4);
        Color color = component.color;
        @class.method_12(color.r);
        @class.method_12(color.g);
        @class.method_12(color.b);
        class19_0.method_23("color", @class);
        Class32.int_7++;
    }

    // Token: 0x060001CB RID: 459 RVA: 0x00010318 File Offset: 0x0000E518
    static void smethod_13(GameObject gameObject_0, Class19 class19_0)
    {
        Light component = gameObject_0.GetComponent<Light>();
        class19_0.method_18("intensity", component.intensity);
        switch (component.lightmapBakeType)
        {
            case LightmapBakeType.Mixed:
                class19_0.method_19("lightmapBakedType", 1);
                goto IL_6F;
            case LightmapBakeType.Baked:
                class19_0.method_19("lightmapBakedType", 2);
                goto IL_6F;
            case LightmapBakeType.Realtime:
                class19_0.method_19("lightmapBakedType", 0);
                goto IL_6F;
        }
        class19_0.method_19("lightmapBakedType", 0);
    IL_6F:
        class19_0.method_18("range", component.range);
        Class19 @class = new Class19(Class19.Enum2.const_4);
        Color color = component.color;
        @class.method_12(color.r);
        @class.method_12(color.g);
        @class.method_12(color.b);
        class19_0.method_23("color", @class);
        Class32.int_9++;
    }

    // Token: 0x060001CC RID: 460 RVA: 0x000103F0 File Offset: 0x0000E5F0
    static void smethod_14(GameObject gameObject_0, Class19 class19_0)
    {
        Light component = gameObject_0.GetComponent<Light>();
        class19_0.method_18("intensity", component.intensity);
        switch (component.lightmapBakeType)
        {
            case LightmapBakeType.Mixed:
                class19_0.method_19("lightmapBakedType", 1);
                goto IL_6F;
            case LightmapBakeType.Baked:
                class19_0.method_19("lightmapBakedType", 2);
                goto IL_6F;
            case LightmapBakeType.Realtime:
                class19_0.method_19("lightmapBakedType", 0);
                goto IL_6F;
        }
        class19_0.method_19("lightmapBakedType", 0);
    IL_6F:
        class19_0.method_18("range", component.range);
        class19_0.method_18("spotAngle", component.spotAngle);
        Class19 @class = new Class19(Class19.Enum2.const_4);
        Color color = component.color;
        @class.method_12(color.r);
        @class.method_12(color.g);
        @class.method_12(color.b);
        class19_0.method_23("color", @class);
        Class32.int_11++;
    }

    // Token: 0x060001CD RID: 461 RVA: 0x000104D8 File Offset: 0x0000E6D8
    static void smethod_15(GameObject gameObject_0, Class19 class19_0)
    {
        Mesh sharedMesh = gameObject_0.GetComponent<MeshFilter>().sharedMesh;
        if (sharedMesh != null)
        {
            string str = Class32.smethod_62(sharedMesh.name, true);
            string text = Class32.smethod_62(AssetDatabase.GetAssetPath(sharedMesh.GetInstanceID()).Split(new char[]
            {
                '.'
            })[0], false) + "-" + str;
            text += ".lm";
            string key = Class32.string_2 + "/" + text;
            while (Class32.dictionary_2.ContainsKey(key))
            {
                if (!(Class32.dictionary_2[key] != sharedMesh))
                {
                    class19_0.method_22("meshPath", text);
                    return;
                }
                text = text.Remove(text.Length - 3, 3);
                text += "-copy.lm";
                key = Class32.string_2 + "/" + text;
            }
            Class32.dictionary_2.Add(key, sharedMesh);
            class19_0.method_22("meshPath", text);
            return;
        }
        Debug.LogWarning("LayaAir3D Warning(Code:1001) : " + gameObject_0.name + "'s MeshFilter Component Mesh data can't be null!");
    }

    // Token: 0x060001CE RID: 462 RVA: 0x000105D8 File Offset: 0x0000E7D8
    static void smethod_16(GameObject gameObject_0, Class19 class19_0)
    {
        MeshRenderer component = gameObject_0.GetComponent<MeshRenderer>();
        Class19 @class = new Class19(Class19.Enum2.const_4);
        if (Class32.int_0 == 0 && component.lightmapIndex > -1)
        {
            class19_0.method_19("lightmapIndex", component.lightmapIndex);
            class19_0.method_23("lightmapScaleOffset", @class);
            @class.method_12(component.lightmapScaleOffset.x);
            @class.method_12(component.lightmapScaleOffset.y);
            @class.method_12(component.lightmapScaleOffset.z);
            @class.method_12(component.lightmapScaleOffset.w);
        }
        bool enabled = component.enabled;
        class19_0.method_17("enableRender", enabled);
        Material[] sharedMaterials = component.sharedMaterials;
        Class19 class19_ = new Class19(Class19.Enum2.const_4);
        class19_0.method_23("materials", class19_);
        Class32.smethod_27(gameObject_0, sharedMaterials, class19_);
    }

    // Token: 0x060001CF RID: 463 RVA: 0x0001069C File Offset: 0x0000E89C
    static void smethod_17(GameObject gameObject_0, Class19 class19_0)
    {
        SkinnedMeshRenderer component = gameObject_0.GetComponent<SkinnedMeshRenderer>();
        if (component.rootBone)
        {
            if (Class32.dictionary_4.ContainsKey(component.rootBone.gameObject.GetInstanceID().ToString()))
            {
                class19_0.method_19("rootBone", Class32.dictionary_4[component.rootBone.gameObject.GetInstanceID().ToString()]);
            }
            else
            {
                Class32.dictionary_4.Add(component.rootBone.gameObject.GetInstanceID().ToString(), Class32.smethod_0());
                class19_0.method_19("rootBone", Class32.dictionary_4[component.rootBone.gameObject.GetInstanceID().ToString()]);
            }
        }
        else
        {
            class19_0.method_22("rootBone", "");
        }
        Bounds localBounds = component.localBounds;
        Vector3 center = localBounds.center;
        Vector3 vector = new Vector3(-center.x, center.y, center.z);
        Vector3 extents = localBounds.extents;
        Vector3 vector2 = vector - extents;
        Vector3 vector3 = vector + extents;
        float num = Vector3.Distance(vector2, vector3) / 2f;
        Class19 @class = new Class19(Class19.Enum2.const_3);
        class19_0.method_23("boundBox", @class);
        Class19 class2 = new Class19(Class19.Enum2.const_4);
        class2.method_12(vector2.x);
        class2.method_12(vector2.y);
        class2.method_12(vector2.z);
        @class.method_23("min", class2);
        Class19 class3 = new Class19(Class19.Enum2.const_4);
        class3.method_12(vector3.x);
        class3.method_12(vector3.y);
        class3.method_12(vector3.z);
        @class.method_23("max", class3);
        Class19 class4 = new Class19(Class19.Enum2.const_3);
        class19_0.method_23("boundSphere", class4);
        Class19 class5 = new Class19(Class19.Enum2.const_4);
        class5.method_12(vector.x);
        class5.method_12(vector.y);
        class5.method_12(vector.z);
        class4.method_23("center", class5);
        class4.method_18("radius", num);
        Class19 class6 = new Class19(Class19.Enum2.const_4);
        class19_0.method_23("bones", class6);
        Transform[] bones = component.bones;
        for (int i = 0; i < bones.Length; i++)
        {
            if (Class32.dictionary_4.ContainsKey(bones[i].gameObject.GetInstanceID().ToString()))
            {
                class6.method_13(Class32.dictionary_4[bones[i].gameObject.GetInstanceID().ToString()]);
            }
            else
            {
                Class32.dictionary_4.Add(bones[i].gameObject.GetInstanceID().ToString(), Class32.smethod_0());
                class6.method_13(Class32.dictionary_4[bones[i].gameObject.GetInstanceID().ToString()]);
            }
        }
        Material[] sharedMaterials = component.sharedMaterials;
        Class19 class19_ = new Class19(Class19.Enum2.const_4);
        class19_0.method_23("materials", class19_);
        Class32.smethod_27(gameObject_0, sharedMaterials, class19_);
        Mesh sharedMesh = component.sharedMesh;
        if (sharedMesh != null)
        {
            string str = Class32.smethod_62(sharedMesh.name, true);
            string text = Class32.smethod_62(AssetDatabase.GetAssetPath(sharedMesh.GetInstanceID()).Split(new char[]
            {
                '.'
            })[0], false) + "-" + str;
            text += ".lm";
            string key = Class32.string_2 + "/" + text;
            while (Class32.dictionary_3.ContainsKey(key))
            {
                if (!(Class32.dictionary_3[key].sharedMesh != sharedMesh))
                {
                    class19_0.method_22("meshPath", text);
                    return;
                }
                text = text.Remove(text.Length - 3, 3);
                text += "-copy.lm";
                key = Class32.string_2 + "/" + text;
            }
            Class32.dictionary_3.Add(key, component);
            class19_0.method_22("meshPath", text);
            return;
        }
        Debug.LogWarning("LayaAir3D Warning(Code:1001) : " + gameObject_0.name + "'s MeshFilter Component Mesh data can't be null!");
    }

    // Token: 0x060001D0 RID: 464 RVA: 0x00010AD0 File Offset: 0x0000ECD0
    static void smethod_18(GameObject gameObject_0, Class19 class19_0, List<string> list_2)
    {
        Class19 @class = new Class19(Class19.Enum2.const_3);
        new Class19(Class19.Enum2.const_3);
        new Class19(Class19.Enum2.const_3);
        new Class19(Class19.Enum2.const_3);
        Class19 class19_ = new Class19(Class19.Enum2.const_4);
        @class.method_22("type", "Animator");
        Animator component = gameObject_0.GetComponent<Animator>();
        Avatar avatar = component.avatar;
        @class.method_23("layers", class19_);
        Class32.smethod_47(gameObject_0, class19_, Class32.bool_5);
        if (component.cullingMode == AnimatorCullingMode.AlwaysAnimate)
        {
            @class.method_19("cullingMode", 0);
        }
        else if (component.cullingMode == AnimatorCullingMode.CullCompletely)
        {
            @class.method_19("cullingMode", 2);
        }
        else
        {
            @class.method_19("cullingMode", 0);
        }
        Motion motion = (component.runtimeAnimatorController as AnimatorController).layers[0].stateMachine.defaultState.motion;
        @class.method_17("playOnWake", motion);
        class19_0.method_16(@class);
    }

    // Token: 0x060001D1 RID: 465 RVA: 0x00010BB0 File Offset: 0x0000EDB0
    static void smethod_19(AnimationCurve animationCurve_0, Class19 class19_0, string string_11, string string_12)
    {
        Class19 @class = new Class19(Class19.Enum2.const_4);
        if (animationCurve_0 != null && animationCurve_0.length > 0)
        {
            class19_0.method_23(string_11, @class);
            Class19 class2 = new Class19(Class19.Enum2.const_4);
            Class19 class3 = new Class19(Class19.Enum2.const_3);
            for (int i = 0; i < animationCurve_0.length; i++)
            {
                class3.method_46();
                class2.method_16(class3);
                class3.method_18("key", animationCurve_0[i].time);
                class3.method_18("value", animationCurve_0[i].value);
            }
            @class.method_23(string_12, class2);
        }
    }

    // Token: 0x060001D2 RID: 466 RVA: 0x00010C44 File Offset: 0x0000EE44
    static void smethod_20(GameObject gameObject_0, Class19 class19_0)
    {
        ParticleSystem component = gameObject_0.GetComponent<ParticleSystem>();
        ParticleSystemRenderer component2 = gameObject_0.GetComponent<ParticleSystemRenderer>();
        int num = 0;
        Class19 @class = new Class19(Class19.Enum2.const_3);
        class19_0.method_23("main", @class);
        Class19 class2 = new Class19(Class19.Enum2.const_3);
        Class19 class3 = new Class19(Class19.Enum2.const_3);
        Class19 class4 = new Class19(Class19.Enum2.const_3);
        Class19 class5 = new Class19(Class19.Enum2.const_3);
        class2.method_17("isPerformanceMode", true);
        if (component.main.duration != 5f)
        {
            class2.method_18("duration", component.main.duration);
        }
        if (!component.main.loop)
        {
            class2.method_17("looping", component.main.loop);
        }
        if (component.main.prewarm)
        {
            class2.method_17("prewarm", false);
        }
        if (component.main.startDelay.mode.ToString() == "Constant")
        {
            num = 0;
        }
        else if (component.main.startDelay.mode.ToString() == "TwoConstants")
        {
            num = 1;
        }
        if (num != 0)
        {
            class2.method_19("startDelayType", num);
        }
        if (component.main.startDelay.constant != 0f)
        {
            class2.method_18("startDelay", component.main.startDelay.constant);
        }
        if (component.main.startDelay.constantMin != 0f)
        {
            class2.method_18("startDelayMin", component.main.startDelay.constantMin);
        }
        if (component.main.startDelay.constantMax != 0f)
        {
            class2.method_18("startDelayMax", component.main.startDelay.constantMax);
        }
        if (component.main.startLifetime.mode.ToString() == "Constant")
        {
            num = 0;
        }
        else if (component.main.startLifetime.mode.ToString() == "Curves")
        {
            num = 1;
        }
        else if (component.main.startLifetime.mode.ToString() == "TwoConstants")
        {
            num = 2;
        }
        else if (component.main.startLifetime.mode.ToString() == "MinMaxCurves")
        {
            num = 3;
        }
        if (num != 0)
        {
            class2.method_19("startLifetimeType", num);
        }
        if (component.main.startLifetime.constant != 5f)
        {
            class2.method_18("startLifetimeConstant", component.main.startLifetime.constant);
        }
        if (component.main.startLifetime.constantMin != 0f)
        {
            class2.method_18("startLifetimeConstantMin", component.main.startLifetime.constantMin);
        }
        if (component.main.startLifetime.constantMax != 5f)
        {
            class2.method_18("startLifetimeConstantMax", component.main.startLifetime.constantMax);
        }
        Class32.smethod_19(component.main.startLifetime.curve, class4, "startLifetimeGradient", "startLifetimes");
        Class32.smethod_19(component.main.startLifetime.curveMin, class4, "startLifetimeGradientMin", "startLifetimes");
        Class32.smethod_19(component.main.startLifetime.curveMax, class4, "startLifetimeGradientMax", "startLifetimes");
        if (component.main.startSpeed.mode.ToString() == "Constant")
        {
            num = 0;
        }
        else if (component.main.startSpeed.mode.ToString() == "Curve")
        {
            num = 1;
        }
        else if (component.main.startSpeed.mode.ToString() == "TwoConstants")
        {
            num = 2;
        }
        else if (component.main.startSpeed.mode.ToString() == "TwoCurves")
        {
            num = 3;
        }
        if (num != 0)
        {
            class2.method_19("startSpeedType", num);
        }
        if (component.main.startSpeed.constant != 5f)
        {
            class2.method_18("startSpeedConstant", component.main.startSpeed.constant);
        }
        if (component.main.startSpeed.constantMin != 0f)
        {
            class2.method_18("startSpeedConstantMin", component.main.startSpeed.constantMin);
        }
        if (component.main.startSpeed.constantMax != 5f)
        {
            class2.method_18("startSpeedConstantMax", component.main.startSpeed.constantMax);
        }
        if (component.main.startSizeX.mode.ToString() == "Constant")
        {
            num = 0;
        }
        else if (component.main.startSizeX.mode.ToString() == "Curve")
        {
            num = 1;
        }
        else if (component.main.startSizeX.mode.ToString() == "TwoConstants")
        {
            num = 2;
        }
        else if (component.main.startSizeX.mode.ToString() == "TwoCurves")
        {
            num = 3;
        }
        if (component.main.startSize3D)
        {
            class2.method_17("threeDStartSize", component.main.startSize3D);
        }
        if (num != 0)
        {
            class2.method_19("startSizeType", num);
        }
        if (component.main.startSize.constant != 1f)
        {
            class2.method_18("startSizeConstant", component.main.startSize.constant);
        }
        if (component.main.startSize.constantMin != 0f)
        {
            class2.method_18("startSizeConstantMin", component.main.startSize.constantMin);
        }
        if (component.main.startSize.constantMax != 1f)
        {
            class2.method_18("startSizeConstantMax", component.main.startSize.constantMax);
        }
        if (component.main.startSizeX.constant != 1f || component.main.startSizeY.constant != 1f || component.main.startSizeZ.constant != 1f)
        {
            Class19 class6 = new Class19(Class19.Enum2.const_4);
            class6.method_12(component.main.startSizeX.constant);
            class6.method_12(component.main.startSizeY.constant);
            class6.method_12(component.main.startSizeZ.constant);
            class3.method_23("startSizeConstantSeparate", class6);
        }
        if (component.main.startSizeX.constantMin != 0f || component.main.startSizeY.constantMin != 0f || component.main.startSizeZ.constantMin != 0f)
        {
            Class19 class6 = new Class19(Class19.Enum2.const_4);
            class6.method_12(component.main.startSizeX.constantMin);
            class6.method_12(component.main.startSizeY.constantMin);
            class6.method_12(component.main.startSizeZ.constantMin);
            class3.method_23("startSizeConstantMinSeparate", class6);
        }
        if (component.main.startSizeX.constantMax != 1f || component.main.startSizeY.constantMax != 1f || component.main.startSizeZ.constantMax != 1f)
        {
            Class19 class6 = new Class19(Class19.Enum2.const_4);
            class6.method_12(component.main.startSizeX.constantMax);
            class6.method_12(component.main.startSizeY.constantMax);
            class6.method_12(component.main.startSizeZ.constantMax);
            class3.method_23("startSizeConstantMaxSeparate", class6);
        }
        if (component.main.startRotation3D)
        {
            class2.method_17("threeDStartRotation", component.main.startRotation3D);
        }
        if (component.main.startRotationX.mode.ToString() == "Constant")
        {
            num = 0;
        }
        else if (component.main.startRotationX.mode.ToString() == "Curve")
        {
            num = 1;
        }
        else if (component.main.startRotationX.mode.ToString() == "TwoConstants")
        {
            num = 2;
        }
        else if (component.main.startRotationX.mode.ToString() == "TwoCurves")
        {
            num = 3;
        }
        if (num != 0)
        {
            class2.method_19("startRotationType", num);
        }
        if (component.main.startRotation.constant != 0f)
        {
            class2.method_18("startRotationConstant", component.main.startRotation.constant);
        }
        if (component.main.startRotation.constantMin != 0f)
        {
            class2.method_18("startRotationConstantMin", component.main.startRotation.constantMin);
        }
        if (component.main.startRotation.constantMax != 0f)
        {
            class2.method_18("startRotationConstantMax", component.main.startRotation.constantMax);
        }
        if (component.main.startRotationX.constant != 0f || -1f * component.main.startRotationY.constant != 0f || -1f * component.main.startRotationZ.constant != 0f)
        {
            Class19 class6 = new Class19(Class19.Enum2.const_4);
            class6.method_12(component.main.startRotationX.constant);
            class6.method_12(-1f * component.main.startRotationY.constant);
            class6.method_12(-1f * component.main.startRotationZ.constant);
            class3.method_23("startRotationConstantSeparate", class6);
        }
        if (component.main.startRotationX.constantMin != 0f || component.main.startRotationY.constantMin != 0f || component.main.startRotationZ.constantMin != 0f)
        {
            Class19 class6 = new Class19(Class19.Enum2.const_4);
            class6.method_12(component.main.startRotationX.constantMin);
            class6.method_12(-1f * component.main.startRotationY.constantMin);
            class6.method_12(-1f * component.main.startRotationZ.constantMin);
            class3.method_23("startRotationConstantMinSeparate", class6);
        }
        if (component.main.startRotationX.constantMax != 0f || component.main.startRotationY.constantMax != 0f || component.main.startRotationZ.constantMax != 0f)
        {
            Class19 class6 = new Class19(Class19.Enum2.const_4);
            class6.method_12(component.main.startRotationX.constantMax);
            class6.method_12(-1f * component.main.startRotationY.constantMax);
            class6.method_12(-1f * component.main.startRotationZ.constantMax);
            class3.method_23("startRotationConstantMaxSeparate", class6);
        }
        if (component.main.flipRotation != 0f)
        {
            class2.method_18("randomizeRotationDirection", component.main.flipRotation);
        }
        if (component.main.startColor.mode.ToString() == "Color")
        {
            num = 0;
        }
        else if (component.main.startColor.mode.ToString() == "Gradient")
        {
            num = 1;
        }
        else if (component.main.startColor.mode.ToString() == "TwoColors")
        {
            num = 2;
        }
        else if (component.main.startColor.mode.ToString() == "TwoGradients")
        {
            num = 3;
        }
        else if (component.main.startColor.mode.ToString() == "RandomColor")
        {
            num = 4;
        }
        if (num != 0)
        {
            class2.method_19("startColorType", num);
        }
        if (component.main.startColor.color.r != 1f || component.main.startColor.color.g != 1f || component.main.startColor.color.b != 1f || component.main.startColor.color.a != 1f)
        {
            Class19 class6 = new Class19(Class19.Enum2.const_4);
            class6.method_12(component.main.startColor.color.r);
            class6.method_12(component.main.startColor.color.g);
            class6.method_12(component.main.startColor.color.b);
            class6.method_12(component.main.startColor.color.a);
            class5.method_23("startColorConstant", class6);
        }
        if (component.main.startColor.colorMin.r != 0f || component.main.startColor.colorMin.g != 0f || component.main.startColor.colorMin.b != 0f || component.main.startColor.colorMin.a != 0f)
        {
            Class19 class6 = new Class19(Class19.Enum2.const_4);
            class6.method_12(component.main.startColor.colorMin.r);
            class6.method_12(component.main.startColor.colorMin.g);
            class6.method_12(component.main.startColor.colorMin.b);
            class6.method_12(component.main.startColor.colorMin.a);
            class5.method_23("startColorConstantMin", class6);
        }
        if (component.main.startColor.colorMax.r != 1f || component.main.startColor.colorMax.g != 1f || component.main.startColor.colorMax.b != 1f || component.main.startColor.colorMax.a != 1f)
        {
            Class19 class6 = new Class19(Class19.Enum2.const_4);
            class6.method_12(component.main.startColor.colorMax.r);
            class6.method_12(component.main.startColor.colorMax.g);
            class6.method_12(component.main.startColor.colorMax.b);
            class6.method_12(component.main.startColor.colorMax.a);
            class5.method_23("startColorConstantMax", class6);
        }
        if (Physics.gravity.x != 0f || !Class32.smethod_63(Physics.gravity.y, -9.81f) || Physics.gravity.z != 0f)
        {
            Class19 class6 = new Class19(Class19.Enum2.const_4);
            class6.method_12(Physics.gravity.x);
            class6.method_12(Physics.gravity.y);
            class6.method_12(Physics.gravity.z);
            class3.method_23("gravity", class6);
        }
        if (component.main.gravityModifier.constant != 0f)
        {
            class2.method_18("gravityModifier", component.main.gravityModifier.constant);
        }
        if (component.main.simulationSpace.ToString() == "World")
        {
            num = 0;
        }
        else if (component.main.simulationSpace.ToString() == "Local")
        {
            num = 1;
        }
        if (num != 1)
        {
            class2.method_19("simulationSpace", num);
        }
        if (component.main.simulationSpeed != 1f)
        {
            class2.method_18("simulationSpeed", component.main.simulationSpeed);
        }
        if (component.main.scalingMode.ToString() == "Hierarchy")
        {
            num = 0;
        }
        else if (component.main.scalingMode.ToString() == "Local")
        {
            num = 1;
        }
        else if (component.main.scalingMode.ToString() == "Shape")
        {
            num = 2;
        }
        if (num != 1)
        {
            class2.method_19("scaleMode", num);
        }
        if (!component.main.playOnAwake)
        {
            class2.method_17("playOnAwake", component.main.playOnAwake);
        }
        class2.method_19("maxParticles", component.main.maxParticles);
        if (!component.useAutoRandomSeed)
        {
            class2.method_17("autoRandomSeed", component.useAutoRandomSeed);
        }
        @class.method_18("randomSeed", component.randomSeed);
        if (class2.list_1.Count != 0)
        {
            @class.method_23("bases", class2);
        }
        if (class3.list_1.Count != 0)
        {
            @class.method_23("vector3s", class3);
        }
        if (class4.list_1.Count != 0)
        {
            @class.method_23("gradientDataNumbers", class4);
        }
        if (class5.list_1.Count != 0)
        {
            @class.method_23("vector4s", class5);
        }
        if (component.emission.enabled)
        {
            Class19 class7 = new Class19(Class19.Enum2.const_3);
            class19_0.method_23("emission", class7);
            class2 = new Class19(Class19.Enum2.const_3);
            class2.method_17("enable", component.emission.enabled);
            if (component.emission.rateOverTime.mode.ToString() == "Constant")
            {
                num = 0;
            }
            else if (component.emission.rateOverTime.mode.ToString() == "Curve")
            {
                num = 1;
            }
            else if (component.emission.rateOverTime.mode.ToString() == "TwoConstants")
            {
                num = 2;
            }
            else if (component.emission.rateOverTime.mode.ToString() == "TwoCurves")
            {
                num = 3;
            }
            if (component.emission.rateOverTime.constant != 10f)
            {
                class2.method_18("emissionRate", component.emission.rateOverTime.constant);
            }
            if (class2.list_1.Count != 0)
            {
                class7.method_23("bases", class2);
            }
            Class19 class6 = new Class19(Class19.Enum2.const_4);
            ParticleSystem.Burst[] array = new ParticleSystem.Burst[component.emission.burstCount];
            component.emission.GetBursts(array);
            if (array.Length != 0)
            {
                for (int i = 0; i < array.Length; i++)
                {
                    Class19 class8 = new Class19(Class19.Enum2.const_3);
                    class8.method_18("time", array[i].time);
                    class8.method_19("min", (int)array[i].minCount);
                    class8.method_19("max", (int)array[i].maxCount);
                    class6.method_16(class8);
                }
                class7.method_23("bursts", class6);
            }
        }
        if (component.shape.enabled)
        {
            Class19 class9 = new Class19(Class19.Enum2.const_3);
            class19_0.method_23("shape", class9);
            class2 = new Class19(Class19.Enum2.const_3);
            class3 = new Class19(Class19.Enum2.const_3);
            class4 = new Class19(Class19.Enum2.const_3);
            class5 = new Class19(Class19.Enum2.const_3);
            class2.method_17("enable", component.shape.enabled);
            if (!(component.shape.shapeType.ToString() == "Sphere") && !(component.shape.shapeType.ToString() == "SphereShell"))
            {
                if (!(component.shape.shapeType.ToString() == "Hemisphere") && !(component.shape.shapeType.ToString() == "HemisphereShell"))
                {
                    if (!(component.shape.shapeType.ToString() == "Cone") && !(component.shape.shapeType.ToString() == "ConeShell") && !(component.shape.shapeType.ToString() == "ConeBase") && !(component.shape.shapeType.ToString() == "ConeBaseShell") && !(component.shape.shapeType.ToString() == "ConeVolume") && !(component.shape.shapeType.ToString() == "ConeVolumeShell"))
                    {
                        if (component.shape.shapeType.ToString() == "Box")
                        {
                            num = 3;
                        }
                        else if (component.shape.shapeType.ToString() == "Mesh")
                        {
                            num = 4;
                        }
                        else if (component.shape.shapeType.ToString() == "MeshRenderer")
                        {
                            num = 5;
                        }
                        else if (component.shape.shapeType.ToString() == "SkinnedMeshRenderer")
                        {
                            num = 6;
                        }
                        else if (!(component.shape.shapeType.ToString() == "Circle") && !(component.shape.shapeType.ToString() == "CircleEdge"))
                        {
                            if (component.shape.shapeType.ToString() == "SingleSidedEdge")
                            {
                                num = 8;
                            }
                        }
                        else
                        {
                            num = 7;
                        }
                    }
                    else
                    {
                        num = 2;
                    }
                }
                else
                {
                    num = 1;
                }
            }
            else
            {
                num = 0;
            }
            class9.method_19("shapeType", num);
            if (component.shape.radius != 1f)
            {
                class2.method_18("radius", component.shape.radius);
            }
            if (component.shape.shapeType.ToString() == "SphereShell")
            {
                class2.method_17("emitFromShell", true);
            }
            if (component.shape.randomDirectionAmount != 0f)
            {
                class2.method_18("randomDirection", component.shape.randomDirectionAmount);
            }
            if (component.shape.shapeType.ToString() == "HemisphereShell")
            {
                class2.method_17("emitFromShell", true);
            }
            if (component.shape.angle != 25f)
            {
                class2.method_18("angle", component.shape.angle * 3.14159274f / 180f);
            }
            if (component.shape.length != 5f)
            {
                class2.method_18("length", component.shape.length);
            }
            num = -1;
            if (component.shape.shapeType.ToString() == "Cone")
            {
                num = 0;
            }
            else if (component.shape.shapeType.ToString() == "ConeShell")
            {
                num = 1;
            }
            else if (component.shape.shapeType.ToString() == "ConeVolume")
            {
                num = 2;
            }
            else if (component.shape.shapeType.ToString() == "ConeVolumeShell")
            {
                num = 3;
            }
            if (num != -1)
            {
                class2.method_19("emitType", num);
            }
            if (component.shape.scale.x != 1f)
            {
                class2.method_18("x", component.shape.scale.x);
            }
            if (component.shape.scale.y != 1f)
            {
                class2.method_18("y", component.shape.scale.y);
            }
            if (component.shape.scale.z != 1f)
            {
                class2.method_18("z", component.shape.scale.z);
            }
            if (component.shape.arc != 360f)
            {
                class2.method_18("arc", component.shape.arc);
            }
            if (component.shape.shapeType.ToString() == "CircleEdge")
            {
                class2.method_17("emitFromEdge", true);
            }
            if (class2.list_1.Count != 0)
            {
                class9.method_23("bases", class2);
            }
        }
        if (component.velocityOverLifetime.enabled)
        {
            Class19 class10 = new Class19(Class19.Enum2.const_3);
            class19_0.method_23("velocityOverLifetime", class10);
            class2 = new Class19(Class19.Enum2.const_3);
            class2.method_17("enable", component.velocityOverLifetime.enabled);
            if (component.velocityOverLifetime.space.ToString() == "Local")
            {
                num = 0;
            }
            else if (component.velocityOverLifetime.space.ToString() == "World")
            {
                num = 1;
            }
            class2.method_19("space", num);
            Class19 class11 = new Class19(Class19.Enum2.const_3);
            if (component.velocityOverLifetime.x.mode.ToString() == "Constant")
            {
                num = 0;
            }
            else if (component.velocityOverLifetime.x.mode.ToString() == "Curve")
            {
                num = 1;
            }
            else if (component.velocityOverLifetime.x.mode.ToString() == "TwoConstants")
            {
                num = 2;
            }
            else if (component.velocityOverLifetime.x.mode.ToString() == "TwoCurves")
            {
                num = 3;
            }
            class11.method_19("type", num);
            if (component.velocityOverLifetime.x.constant != 0f || component.velocityOverLifetime.y.constant != 0f || component.velocityOverLifetime.z.constant != 0f)
            {
                Class19 class12 = new Class19(Class19.Enum2.const_4);
                class12.method_12(component.velocityOverLifetime.x.constant * -1f);
                class12.method_12(component.velocityOverLifetime.y.constant);
                class12.method_12(component.velocityOverLifetime.z.constant);
                class11.method_23("constant", class12);
            }
            Class32.smethod_49(component.velocityOverLifetime.x, class11, "gradientX", "velocitys", 0, component.velocityOverLifetime.x.curveMultiplier, -1f, false);
            Class32.smethod_49(component.velocityOverLifetime.y, class11, "gradientY", "velocitys", 0, component.velocityOverLifetime.y.curveMultiplier, 1f, false);
            Class32.smethod_49(component.velocityOverLifetime.z, class11, "gradientZ", "velocitys", 0, component.velocityOverLifetime.z.curveMultiplier, 1f, false);
            if (component.velocityOverLifetime.x.constantMin != 0f || component.velocityOverLifetime.y.constantMin != 0f || component.velocityOverLifetime.z.constantMin != 0f)
            {
                Class19 class12 = new Class19(Class19.Enum2.const_4);
                class12.method_12(component.velocityOverLifetime.x.constantMin * -1f);
                class12.method_12(component.velocityOverLifetime.y.constantMin);
                class12.method_12(component.velocityOverLifetime.z.constantMin);
                class11.method_23("constantMin", class12);
            }
            if (component.velocityOverLifetime.x.constantMax != 0f || component.velocityOverLifetime.y.constantMax != 0f || component.velocityOverLifetime.z.constantMax != 0f)
            {
                Class19 class12 = new Class19(Class19.Enum2.const_4);
                class12.method_12(component.velocityOverLifetime.x.constantMax * -1f);
                class12.method_12(component.velocityOverLifetime.y.constantMax);
                class12.method_12(component.velocityOverLifetime.z.constantMax);
                class11.method_23("constantMax", class12);
            }
            Class32.smethod_49(component.velocityOverLifetime.x, class11, "gradientXMin", "velocitys", -1, component.velocityOverLifetime.x.curveMultiplier, -1f, false);
            Class32.smethod_49(component.velocityOverLifetime.x, class11, "gradientXMax", "velocitys", 1, component.velocityOverLifetime.x.curveMultiplier, -1f, false);
            Class32.smethod_49(component.velocityOverLifetime.y, class11, "gradientYMin", "velocitys", -1, component.velocityOverLifetime.y.curveMultiplier, 1f, false);
            Class32.smethod_49(component.velocityOverLifetime.y, class11, "gradientYMax", "velocitys", 1, component.velocityOverLifetime.y.curveMultiplier, 1f, false);
            Class32.smethod_49(component.velocityOverLifetime.z, class11, "gradientZMin", "velocitys", -1, component.velocityOverLifetime.z.curveMultiplier, 1f, false);
            Class32.smethod_49(component.velocityOverLifetime.z, class11, "gradientZMax", "velocitys", 1, component.velocityOverLifetime.z.curveMultiplier, 1f, false);
            if (class2.list_1.Count != 0)
            {
                class10.method_23("bases", class2);
            }
            if (class11.list_1.Count != 0)
            {
                class10.method_23("velocity", class11);
            }
        }
        if (component.limitVelocityOverLifetime.enabled)
        {
            Debug.LogWarning("LayaAir3D Warning(Code:3040) : GameObject(" + gameObject_0.name + ") ParticleSystem Componment can't support Limit_Velocity_Over_Lifetime Module !");
        }
        if (component.inheritVelocity.enabled)
        {
            Debug.LogWarning("LayaAir3D Warning(Code:3050) : GameObject(" + gameObject_0.name + ") ParticleSystem Componment can't support Inherit_Velocity Module !");
        }
        if (component.forceOverLifetime.enabled)
        {
            Debug.LogWarning("LayaAir3D Warning(Code:3060) : GameObject(" + gameObject_0.name + ") ParticleSystem Componment can't support Force_Over_Lifetime Module !");
        }
        if (component.colorOverLifetime.enabled)
        {
            Class19 class13 = new Class19(Class19.Enum2.const_3);
            class19_0.method_23("colorOverLifetime", class13);
            class2 = new Class19(Class19.Enum2.const_3);
            class2.method_17("enable", component.colorOverLifetime.enabled);
            Class19 class11 = new Class19(Class19.Enum2.const_3);
            if (component.colorOverLifetime.color.mode.ToString() == "Gradient")
            {
                num = 1;
            }
            else if (component.colorOverLifetime.color.mode.ToString() == "TwoGradients")
            {
                num = 3;
            }
            class11.method_19("type", num);
            if (component.colorOverLifetime.color.color.r != 0f || component.colorOverLifetime.color.color.g != 0f || component.colorOverLifetime.color.color.b != 0f || component.colorOverLifetime.color.color.a != 0f)
            {
                Class19 class6 = new Class19(Class19.Enum2.const_4);
                class6.method_12(component.colorOverLifetime.color.color.r);
                class6.method_12(component.colorOverLifetime.color.color.g);
                class6.method_12(component.colorOverLifetime.color.color.b);
                class6.method_12(component.colorOverLifetime.color.color.a);
                class11.method_23("constant", class6);
            }
            Class32.smethod_50(component.colorOverLifetime.color.gradient, class11, "gradient");
            if (component.colorOverLifetime.color.colorMin.r != 0f || component.colorOverLifetime.color.colorMin.g != 0f || component.colorOverLifetime.color.colorMin.b != 0f || component.colorOverLifetime.color.colorMin.a != 0f)
            {
                Class19 class6 = new Class19(Class19.Enum2.const_4);
                class6.method_12(component.colorOverLifetime.color.colorMin.r);
                class6.method_12(component.colorOverLifetime.color.colorMin.g);
                class6.method_12(component.colorOverLifetime.color.colorMin.b);
                class6.method_12(component.colorOverLifetime.color.colorMin.a);
                class11.method_23("constantMin", class6);
            }
            if (component.colorOverLifetime.color.colorMax.r != 0f || component.colorOverLifetime.color.colorMax.g != 0f || component.colorOverLifetime.color.colorMax.b != 0f || component.colorOverLifetime.color.colorMax.a != 0f)
            {
                Class19 class6 = new Class19(Class19.Enum2.const_4);
                class6.method_12(component.colorOverLifetime.color.colorMax.r);
                class6.method_12(component.colorOverLifetime.color.colorMax.g);
                class6.method_12(component.colorOverLifetime.color.colorMax.b);
                class6.method_12(component.colorOverLifetime.color.colorMax.a);
                class11.method_23("constantMax", class6);
            }
            Class32.smethod_50(component.colorOverLifetime.color.gradientMin, class11, "gradientMin");
            Class32.smethod_50(component.colorOverLifetime.color.gradientMax, class11, "gradientMax");
            if (class2.list_1.Count != 0)
            {
                class13.method_23("bases", class2);
            }
            if (class11.list_1.Count != 0)
            {
                class13.method_23("color", class11);
            }
        }
        if (component.colorBySpeed.enabled)
        {
            Debug.LogWarning("LayaAir3D Warning(Code:3080) : GameObject(" + gameObject_0.name + ") ParticleSystem Componment can't support Color_By_Speed Module !");
        }
        if (component.sizeOverLifetime.enabled)
        {
            Class19 class14 = new Class19(Class19.Enum2.const_3);
            class19_0.method_23("sizeOverLifetime", class14);
            class2 = new Class19(Class19.Enum2.const_3);
            class2.method_17("enable", component.sizeOverLifetime.enabled);
            Class19 class11 = new Class19(Class19.Enum2.const_3);
            if (component.sizeOverLifetime.size.mode.ToString() == "Curve")
            {
                num = 0;
            }
            else if (component.sizeOverLifetime.size.mode.ToString() == "TwoConstants")
            {
                num = 1;
            }
            else if (component.sizeOverLifetime.size.mode.ToString() == "TwoCurves")
            {
                num = 2;
            }
            class11.method_19("type", num);
            if (component.sizeOverLifetime.separateAxes)
            {
                class11.method_17("separateAxes", component.sizeOverLifetime.separateAxes);
            }
            Class32.smethod_49(component.sizeOverLifetime.size, class11, "gradient", "sizes", 0, component.sizeOverLifetime.size.curveMultiplier, 1f, true);
            Class32.smethod_49(component.sizeOverLifetime.x, class11, "gradientX", "sizes", 0, component.sizeOverLifetime.x.curveMultiplier, 1f, true);
            Class32.smethod_49(component.sizeOverLifetime.y, class11, "gradientY", "sizes", 0, component.sizeOverLifetime.y.curveMultiplier, 1f, true);
            Class32.smethod_49(component.sizeOverLifetime.z, class11, "gradientZ", "sizes", 0, component.sizeOverLifetime.z.curveMultiplier, 1f, true);
            if (component.sizeOverLifetime.size.constantMin != 0f)
            {
                class11.method_18("constantMin", component.sizeOverLifetime.size.constantMin);
            }
            if (component.sizeOverLifetime.size.constantMax != 0f)
            {
                class11.method_18("constantMax", component.sizeOverLifetime.size.constantMax);
            }
            if (component.sizeOverLifetime.x.constantMin != 0f || component.sizeOverLifetime.y.constantMin != 0f || component.sizeOverLifetime.z.constantMin != 0f)
            {
                Class19 class12 = new Class19(Class19.Enum2.const_4);
                class12.method_12(component.sizeOverLifetime.x.constantMin);
                class12.method_12(component.sizeOverLifetime.y.constantMin);
                class12.method_12(component.sizeOverLifetime.z.constantMin);
                class11.method_23("constantMinSeparate", class12);
            }
            if (component.sizeOverLifetime.x.constantMax != 0f || component.sizeOverLifetime.y.constantMax != 0f || component.sizeOverLifetime.z.constantMax != 0f)
            {
                Class19 class12 = new Class19(Class19.Enum2.const_4);
                class12.method_12(component.sizeOverLifetime.x.constantMax);
                class12.method_12(component.sizeOverLifetime.y.constantMax);
                class12.method_12(component.sizeOverLifetime.z.constantMax);
                class11.method_23("constantMaxSeparate", class12);
            }
            Class32.smethod_49(component.sizeOverLifetime.size, class11, "gradientMin", "sizes", -1, component.sizeOverLifetime.size.curveMultiplier, 1f, true);
            Class32.smethod_49(component.sizeOverLifetime.size, class11, "gradientMax", "sizes", 1, component.sizeOverLifetime.size.curveMultiplier, 1f, true);
            Class32.smethod_49(component.sizeOverLifetime.x, class11, "gradientXMin", "sizes", -1, 1f, 1f, true);
            Class32.smethod_49(component.sizeOverLifetime.x, class11, "gradientXMax", "sizes", 1, 1f, 1f, true);
            Class32.smethod_49(component.sizeOverLifetime.y, class11, "gradientYMin", "sizes", -1, 1f, 1f, true);
            Class32.smethod_49(component.sizeOverLifetime.y, class11, "gradientYMax", "sizes", 1, 1f, 1f, true);
            Class32.smethod_49(component.sizeOverLifetime.z, class11, "gradientZMin", "sizes", -1, 1f, 1f, true);
            Class32.smethod_49(component.sizeOverLifetime.z, class11, "gradientZMax", "sizes", 1, 1f, 1f, true);
            if (class2.list_1.Count != 0)
            {
                class14.method_23("bases", class2);
            }
            if (class11.list_1.Count != 0)
            {
                class14.method_23("size", class11);
            }
        }
        if (component.sizeBySpeed.enabled)
        {
            Debug.LogWarning("LayaAir3D Warning(Code:3100) : GameObject(" + gameObject_0.name + ") ParticleSystem Componment can't support Size_By_Speed Module !");
        }
        if (component.rotationOverLifetime.enabled)
        {
            Class19 class15 = new Class19(Class19.Enum2.const_3);
            class19_0.method_23("rotationOverLifetime", class15);
            class2 = new Class19(Class19.Enum2.const_3);
            class2.method_17("enable", component.rotationOverLifetime.enabled);
            Class19 class11 = new Class19(Class19.Enum2.const_3);
            if (component.rotationOverLifetime.z.mode.ToString() == "Constant")
            {
                num = 0;
            }
            else if (component.rotationOverLifetime.z.mode.ToString() == "Curve")
            {
                num = 1;
            }
            else if (component.rotationOverLifetime.z.mode.ToString() == "TwoConstants")
            {
                num = 2;
            }
            else if (component.rotationOverLifetime.z.mode.ToString() == "TwoCurves")
            {
                num = 3;
            }
            class11.method_19("type", num);
            if (component.rotationOverLifetime.separateAxes)
            {
                class11.method_17("separateAxes", component.rotationOverLifetime.separateAxes);
            }
            if (component.rotationOverLifetime.z.constant != 0.7853982f)
            {
                class11.method_18("constant", component.rotationOverLifetime.z.constant);
            }
            if (component.rotationOverLifetime.z.constantMin != 0f)
            {
                class11.method_18("constantMin", component.rotationOverLifetime.z.constantMin);
            }
            if (component.rotationOverLifetime.z.constantMax != 0.7853982f)
            {
                class11.method_18("constantMax", component.rotationOverLifetime.z.constantMax);
            }
            if (component.rotationOverLifetime.x.constant != 0f || component.rotationOverLifetime.y.constant != 0f || component.rotationOverLifetime.z.constant != 0.7853982f)
            {
                Class19 class12 = new Class19(Class19.Enum2.const_4);
                class12.method_12(component.rotationOverLifetime.x.constant);
                class12.method_12(-1f * component.rotationOverLifetime.y.constant);
                class12.method_12(-1f * component.rotationOverLifetime.z.constant);
                class11.method_23("constantSeparate", class12);
            }
            if (component.rotationOverLifetime.x.constantMin != 0f || component.rotationOverLifetime.y.constantMin != 0f || component.rotationOverLifetime.z.constantMin != 0f)
            {
                Class19 class12 = new Class19(Class19.Enum2.const_4);
                class12.method_12(component.rotationOverLifetime.x.constantMin);
                class12.method_12(component.rotationOverLifetime.y.constantMin);
                class12.method_12(component.rotationOverLifetime.z.constantMin);
                class11.method_23("constantMinSeparate", class12);
            }
            if (component.rotationOverLifetime.x.constantMax != 0f || component.rotationOverLifetime.y.constantMax != 0f || component.rotationOverLifetime.z.constantMax != 0.7853982f)
            {
                Class19 class12 = new Class19(Class19.Enum2.const_4);
                class12.method_12(component.rotationOverLifetime.x.constantMax);
                class12.method_12(component.rotationOverLifetime.y.constantMax);
                class12.method_12(component.rotationOverLifetime.z.constantMax);
                class11.method_23("constantMaxSeparate", class12);
            }
            Class32.smethod_49(component.rotationOverLifetime.z, class11, "gradient", "angularVelocitys", 0, component.rotationOverLifetime.z.curveMultiplier * 180f / 3.14159274f, 1f, false);
            Class32.smethod_49(component.rotationOverLifetime.x, class11, "gradientX", "angularVelocitys", 0, component.rotationOverLifetime.x.curveMultiplier * 180f / 3.14159274f, 1f, false);
            Class32.smethod_49(component.rotationOverLifetime.y, class11, "gradientY", "angularVelocitys", 0, component.rotationOverLifetime.y.curveMultiplier * 180f / 3.14159274f, -1f, false);
            Class32.smethod_49(component.rotationOverLifetime.z, class11, "gradientZ", "angularVelocitys", 0, component.rotationOverLifetime.z.curveMultiplier * 180f / 3.14159274f, -1f, false);
            Class32.smethod_49(component.rotationOverLifetime.z, class11, "gradientMin", "angularVelocitys", -1, component.rotationOverLifetime.z.curveMultiplier * 180f / 3.14159274f, 1f, false);
            Class32.smethod_49(component.rotationOverLifetime.z, class11, "gradientMax", "angularVelocitys", 1, component.rotationOverLifetime.z.curveMultiplier * 180f / 3.14159274f, 1f, false);
            Class32.smethod_49(component.rotationOverLifetime.z, class11, "gradientXMin", "angularVelocitys", -1, component.rotationOverLifetime.x.curveMultiplier * 180f / 3.14159274f, 1f, false);
            Class32.smethod_49(component.rotationOverLifetime.z, class11, "gradientXMax", "angularVelocitys", 1, component.rotationOverLifetime.x.curveMultiplier * 180f / 3.14159274f, 1f, false);
            Class32.smethod_49(component.rotationOverLifetime.z, class11, "gradientYMin", "angularVelocitys", -1, component.rotationOverLifetime.y.curveMultiplier * 180f / 3.14159274f, 1f, false);
            Class32.smethod_49(component.rotationOverLifetime.z, class11, "gradientYMax", "angularVelocitys", 1, component.rotationOverLifetime.y.curveMultiplier * 180f / 3.14159274f, 1f, false);
            Class32.smethod_49(component.rotationOverLifetime.z, class11, "gradientZMin", "angularVelocitys", -1, component.rotationOverLifetime.z.curveMultiplier * 180f / 3.14159274f, 1f, false);
            Class32.smethod_49(component.rotationOverLifetime.z, class11, "gradientZMax", "angularVelocitys", 1, component.rotationOverLifetime.z.curveMultiplier * 180f / 3.14159274f, 1f, false);
            if (class2.list_1.Count != 0)
            {
                class15.method_23("bases", class2);
            }
            if (class11.list_1.Count != 0)
            {
                class15.method_23("angularVelocity", class11);
            }
        }
        if (component.rotationBySpeed.enabled)
        {
            Debug.LogWarning("LayaAir3D Warning(Code:3120) : GameObject(" + gameObject_0.name + ") ParticleSystem Componment can't support Rotation_By_Speed Module !");
        }
        if (component.externalForces.enabled)
        {
            Debug.LogWarning("LayaAir3D Warning(Code:3130) : GameObject(" + gameObject_0.name + ") ParticleSystem Componment can't support External_Forces Module !");
        }
        if (component.noise.enabled)
        {
            Debug.LogWarning("LayaAir3D Warning(Code:3140) : GameObject(" + gameObject_0.name + ") ParticleSystem Componment can't support Noise Module !");
        }
        if (component.collision.enabled)
        {
            Debug.LogWarning("LayaAir3D Warning(Code:3150) : GameObject(" + gameObject_0.name + ") ParticleSystem Componment can't support Collision Module !");
        }
        if (component.trigger.enabled)
        {
            Debug.LogWarning("LayaAir3D Warning(Code:3160) : GameObject(" + gameObject_0.name + ") ParticleSystem Componment can't support Trigger Module !");
        }
        if (component.subEmitters.enabled)
        {
            Debug.LogWarning("LayaAir3D Warning(Code:3170) : GameObject(" + gameObject_0.name + ") ParticleSystem Componment can't support SubEmitters Module !");
        }
        if (component.textureSheetAnimation.enabled)
        {
            Class19 class16 = new Class19(Class19.Enum2.const_3);
            class19_0.method_23("textureSheetAnimation", class16);
            class2 = new Class19(Class19.Enum2.const_3);
            Class19 class17 = new Class19(Class19.Enum2.const_3);
            class2.method_17("enable", component.textureSheetAnimation.enabled);
            if (component.textureSheetAnimation.numTilesX != 1 || component.textureSheetAnimation.numTilesY != 1)
            {
                Class19 class6 = new Class19(Class19.Enum2.const_4);
                class17.method_23("tiles", class6);
                class6.method_13(component.textureSheetAnimation.numTilesX);
                class6.method_13(component.textureSheetAnimation.numTilesY);
            }
            float num2 = 0f;
            ParticleSystemAnimationType animation = component.textureSheetAnimation.animation;
            if (animation != ParticleSystemAnimationType.WholeSheet)
            {
                if (animation == ParticleSystemAnimationType.SingleRow)
                {
                    num = 1;
                    num2 = (float)component.textureSheetAnimation.numTilesX;
                }
                else
                {
                    Debug.LogWarning("unknown type.");
                }
            }
            else
            {
                num = 0;
                num2 = (float)(component.textureSheetAnimation.numTilesX * component.textureSheetAnimation.numTilesY);
            }
            float float_ = num2 * component.textureSheetAnimation.frameOverTime.curveMultiplier;
            if (num != 0)
            {
                class2.method_19("type", num);
            }
            if (!component.textureSheetAnimation.useRandomRow)
            {
                class2.method_17("randomRow", component.textureSheetAnimation.useRandomRow);
            }
            if (component.textureSheetAnimation.rowIndex != 0)
            {
                class2.method_19("rowIndex", component.textureSheetAnimation.rowIndex);
            }
            Class19 class11 = new Class19(Class19.Enum2.const_3);
            if (component.textureSheetAnimation.frameOverTime.mode.ToString() == "Constant")
            {
                num = 0;
            }
            else if (component.textureSheetAnimation.frameOverTime.mode.ToString() == "Curve")
            {
                num = 1;
            }
            else if (component.textureSheetAnimation.frameOverTime.mode.ToString() == "TwoConstants")
            {
                num = 2;
            }
            else if (component.textureSheetAnimation.frameOverTime.mode.ToString() == "TwoCurves")
            {
                num = 3;
            }
            class11.method_19("type", num);
            if (component.textureSheetAnimation.frameOverTime.constant * num2 != 0f)
            {
                class11.method_18("constant", component.textureSheetAnimation.frameOverTime.constant * num2);
            }
            Class32.smethod_49(component.textureSheetAnimation.frameOverTime, class11, "overTime", "frames", 0, float_, 1f, true);
            if (component.textureSheetAnimation.frameOverTime.constantMin * num2 != 0f)
            {
                class11.method_18("constantMin", component.textureSheetAnimation.frameOverTime.constantMin * num2);
            }
            if (component.textureSheetAnimation.frameOverTime.constantMax * num2 != 0f)
            {
                class11.method_18("constantMax", component.textureSheetAnimation.frameOverTime.constantMax * num2);
            }
            Class32.smethod_49(component.textureSheetAnimation.frameOverTime, class11, "overTimeMin", "frames", -1, float_, 1f, false);
            Class32.smethod_49(component.textureSheetAnimation.frameOverTime, class11, "overTimeMax", "frames", 1, float_, 1f, true);
            Class19 class18 = new Class19(Class19.Enum2.const_3);
            class18.method_19("type", 0);
            if (component.textureSheetAnimation.startFrame.constant != 0f)
            {
                class18.method_18("constant", component.textureSheetAnimation.startFrame.constant);
            }
            if (component.textureSheetAnimation.startFrame.constantMin != 0f)
            {
                class18.method_18("constantMin", component.textureSheetAnimation.startFrame.constantMin);
            }
            if (component.textureSheetAnimation.startFrame.constantMax != 0f)
            {
                class18.method_18("constantMax", component.textureSheetAnimation.startFrame.constantMax);
            }
            if (component.textureSheetAnimation.cycleCount != 1)
            {
                class2.method_19("cycles", component.textureSheetAnimation.cycleCount);
            }
            if (!component.textureSheetAnimation.enabled)
            {
                class2.method_19("enableUVChannels", 0);
            }
            if (component.textureSheetAnimation.uvChannelMask.ToString() != "-1")
            {
                class2.method_22("enableUVChannelsTip", component.textureSheetAnimation.uvChannelMask.ToString());
            }
            if (class2.list_1.Count != 0)
            {
                class16.method_23("bases", class2);
            }
            if (class17.list_1.Count != 0)
            {
                class16.method_23("vector2s", class17);
            }
            if (class11.list_1.Count != 0)
            {
                class16.method_23("frame", class11);
            }
            if (class18.list_1.Count != 0)
            {
                class16.method_23("startFrame", class18);
            }
        }
        if (component.lights.enabled)
        {
            Debug.LogWarning("LayaAir3D Warning(Code:3190) : GameObject(" + gameObject_0.name + ") ParticleSystem Componment can't support Lights Module !");
        }
        if (component.trails.enabled)
        {
            Debug.LogWarning("LayaAir3D Warning(Code:3200) : GameObject(" + gameObject_0.name + ") ParticleSystem Componment can't support Trails Module !");
        }
        if (component.customData.enabled)
        {
            Debug.LogWarning("LayaAir3D Warning(Code:3014) : GameObject(" + gameObject_0.name + ") ParticleSystem Componment can't support CustomData Module !");
        }
        Class19 class19 = new Class19(Class19.Enum2.const_3);
        class19_0.method_23("renderer", class19);
        class2 = new Class19(Class19.Enum2.const_3);
        Class19 class20 = new Class19(Class19.Enum2.const_3);
        int num3;
        if (component2.renderMode.ToString() == "Billboard")
        {
            num3 = 0;
        }
        else if (component2.renderMode.ToString() == "Stretch")
        {
            num3 = 1;
        }
        else if (component2.renderMode.ToString() == "HorizontalBillboard")
        {
            num3 = 2;
        }
        else if (component2.renderMode.ToString() == "VerticalBillboard")
        {
            num3 = 3;
        }
        else if (component2.renderMode.ToString() == "Mesh")
        {
            num3 = 4;
        }
        else
        {
            num3 = 0;
        }
        if (num3 != 0)
        {
            class2.method_19("renderMode", num3);
        }
        if (component2.cameraVelocityScale != 0f)
        {
            class2.method_18("stretchedBillboardCameraSpeedScale", component2.cameraVelocityScale);
        }
        if (component2.velocityScale != 0f)
        {
            class2.method_18("stretchedBillboardSpeedScale", component2.velocityScale);
        }
        if (component2.lengthScale != 2f)
        {
            class2.method_18("stretchedBillboardLengthScale", component2.lengthScale);
        }
        if (component2.sortingFudge != 0f)
        {
            class2.method_18("sortingFudge", component2.sortingFudge);
        }
        Material sharedMaterial = gameObject_0.GetComponent<Renderer>().sharedMaterial;
        new Class19(Class19.Enum2.const_4);
        if (sharedMaterial != null)
        {
            string str = Class32.smethod_62(AssetDatabase.GetAssetPath(sharedMaterial.GetInstanceID()).Split(new char[]
            {
                '.'
            })[0], false) + ".lmat";
            string string_ = Class32.string_2 + "/" + str;
            new Class19(Class19.Enum2.const_3);
            class20.method_22("material", str);
            string name = sharedMaterial.shader.name;
            if (name != "LayaAir3D/Particle/ShurikenParticle")
            {
                Debug.LogWarning(string.Concat(new string[]
                {
                    "LayaAir3D Warning(Code:2002) : ",
                    gameObject_0.name,
                    " dose's match ",
                    name,
                    " Shader, Must use ShurikenParticle Shader！"
                }));
            }
            Class32.smethod_42(sharedMaterial, string_, "ShurikenParticle");
        }
        if (num3 == 4)
        {
            Mesh mesh = gameObject_0.GetComponent<ParticleSystemRenderer>().mesh;
            if (mesh != null)
            {
                string str2 = Class32.smethod_62(mesh.name, true);
                string str3 = Class32.smethod_62(AssetDatabase.GetAssetPath(mesh.GetInstanceID()).Split(new char[]
                {
                    '.'
                })[0], false) + "-" + str2 + ".lm";
                string text = Class32.string_2 + "/" + str3;
                class20.method_22("mesh", str3);
                if (!File.Exists(text))
                {
                    Class32.smethod_33(mesh, text, Class32.bool_4);
                }
            }
            else
            {
                class20.method_22("mesh", "");
                Debug.LogWarning("LayaAir3D Warning(Code:1001) : " + gameObject_0.name + "'s MeshFilter Component Mesh data can't be null!");
            }
        }
        if (class2.list_1.Count != 0)
        {
            class19.method_23("bases", class2);
        }
        if (class20.list_1.Count != 0)
        {
            class19.method_23("resources", class20);
        }
    }

    // Token: 0x060001D3 RID: 467 RVA: 0x000151C8 File Offset: 0x000133C8
    static void smethod_21(GameObject gameObject_0, Class19 class19_0)
    {
        Class19 @class = new Class19(Class19.Enum2.const_4);
        Terrain component = gameObject_0.GetComponent<Terrain>();
        if (Class32.bool_6)
        {
            Class32.smethod_39(gameObject_0, class19_0, 3);
            Class32.smethod_40(gameObject_0, class19_0);
        }
        else
        {
            Class32.smethod_48(Class32.string_2, class19_0, null);
        }
        if (component.lightmapIndex > -1)
        {
            class19_0.method_19("lightmapIndex", component.lightmapIndex);
            class19_0.method_23("lightmapScaleOffset", @class);
            @class.method_12(component.lightmapScaleOffset.x);
            @class.method_12(component.lightmapScaleOffset.y);
            @class.method_12(component.lightmapScaleOffset.z);
            @class.method_12(component.lightmapScaleOffset.w);
        }
    }

    // Token: 0x060001D4 RID: 468 RVA: 0x00015274 File Offset: 0x00013474
    static void smethod_22(GameObject gameObject_0, Class19 class19_0)
    {
        Class19 @class = new Class19(Class19.Enum2.const_3);
        class19_0.method_16(@class);
        @class.method_22("type", "PhysicsCollider");
        @class.method_18("restitution", 0f);
        @class.method_18("friction", 0.5f);
        @class.method_18("rollingFriction", 0f);
        Class19 class19_ = new Class19(Class19.Enum2.const_4);
        @class.method_23("shapes", class19_);
        @class.method_17("isTrigger", Class32.smethod_26(gameObject_0, class19_));
    }

    // Token: 0x060001D5 RID: 469 RVA: 0x000152F4 File Offset: 0x000134F4
    static void smethod_23(GameObject gameObject_0, Class19 class19_0)
    {
        Rigidbody component = gameObject_0.GetComponent<Rigidbody>();
        Class19 @class = new Class19(Class19.Enum2.const_3);
        class19_0.method_16(@class);
        @class.method_22("type", "Rigidbody3D");
        @class.method_18("mass", component.mass);
        @class.method_17("isKinematic", component.isKinematic);
        @class.method_18("restitution", 0f);
        @class.method_18("friction", 0.5f);
        @class.method_18("rollingFriction", 0f);
        @class.method_19("linearDamping", 0);
        @class.method_19("angularDamping", 0);
        @class.method_17("overrideGravity", !component.useGravity);
        Class19 class2 = new Class19(Class19.Enum2.const_4);
        class2.method_13(0);
        class2.method_13(0);
        class2.method_13(0);
        @class.method_23("gravity", class2);
        Class19 class19_ = new Class19(Class19.Enum2.const_4);
        @class.method_23("shapes", class19_);
        @class.method_17("isTrigger", Class32.smethod_26(gameObject_0, class19_));
    }

    // Token: 0x060001D6 RID: 470 RVA: 0x000153F4 File Offset: 0x000135F4
    static void smethod_24(GameObject gameObject_0, Class19 class19_0)
    {
        TrailRenderer component = gameObject_0.GetComponent<TrailRenderer>();
        class19_0.method_18("time", component.time);
        class19_0.method_18("minVertexDistance", component.minVertexDistance);
        class19_0.method_18("widthMultiplier", component.widthMultiplier);
        if (component.textureMode == LineTextureMode.Stretch)
        {
            class19_0.method_19("textureMode", 0);
        }
        else
        {
            class19_0.method_19("textureMode", 1);
        }
        Class19 @class = new Class19(Class19.Enum2.const_4);
        class19_0.method_23("widthCurve", @class);
        Keyframe[] keys = component.widthCurve.keys;
        for (int i = 0; i < keys.Length; i++)
        {
            Keyframe keyframe = keys[i];
            Class19 class2;
            if (i == 0 && keyframe.time != 0f)
            {
                class2 = new Class19(Class19.Enum2.const_3);
                class2.method_19("time", 0);
                class2.method_19("inTangent", 0);
                class2.method_19("outTangent", 0);
                class2.method_18("value", keyframe.value);
                @class.method_16(class2);
            }
            class2 = new Class19(Class19.Enum2.const_3);
            class2.method_18("time", keyframe.time);
            class2.method_18("inTangent", keyframe.inTangent);
            class2.method_18("outTangent", keyframe.inTangent);
            class2.method_18("value", keyframe.value);
            @class.method_16(class2);
            if (i == keys.Length - 1 && keyframe.time != 1f)
            {
                class2 = new Class19(Class19.Enum2.const_3);
                class2.method_19("time", 1);
                class2.method_19("inTangent", 0);
                class2.method_19("outTangent", 0);
                class2.method_18("value", keyframe.value);
                @class.method_16(class2);
            }
        }
        Class19 class3 = new Class19(Class19.Enum2.const_3);
        class19_0.method_23("colorGradient", class3);
        Gradient colorGradient = component.colorGradient;
        if (colorGradient.mode == GradientMode.Blend)
        {
            class3.method_19("mode", 0);
        }
        else
        {
            class3.method_19("mode", 1);
        }
        Class19 class4 = new Class19(Class19.Enum2.const_4);
        class3.method_23("colorKeys", class4);
        GradientColorKey[] colorKeys = colorGradient.colorKeys;
        for (int j = 0; j < colorKeys.Length; j++)
        {
            GradientColorKey gradientColorKey = colorKeys[j];
            Class19 class5;
            Class19 class6;
            Color color;
            if (j == 0 && gradientColorKey.time != 0f)
            {
                class5 = new Class19(Class19.Enum2.const_3);
                class5.method_19("time", 0);
                class6 = new Class19(Class19.Enum2.const_4);
                class5.method_23("value", class6);
                color = gradientColorKey.color;
                class6.method_12(color.r);
                class6.method_12(color.g);
                class6.method_12(color.b);
                class4.method_16(class5);
            }
            class5 = new Class19(Class19.Enum2.const_3);
            class5.method_18("time", gradientColorKey.time);
            class6 = new Class19(Class19.Enum2.const_4);
            class5.method_23("value", class6);
            color = gradientColorKey.color;
            class6.method_12(color.r);
            class6.method_12(color.g);
            class6.method_12(color.b);
            class4.method_16(class5);
            if (j == colorKeys.Length - 1 && gradientColorKey.time != 1f)
            {
                class5 = new Class19(Class19.Enum2.const_3);
                class5.method_19("time", 1);
                class6 = new Class19(Class19.Enum2.const_4);
                class5.method_23("value", class6);
                color = gradientColorKey.color;
                class6.method_12(color.r);
                class6.method_12(color.g);
                class6.method_12(color.b);
                class4.method_16(class5);
            }
        }
        Class19 class7 = new Class19(Class19.Enum2.const_4);
        class3.method_23("alphaKeys", class7);
        GradientAlphaKey[] alphaKeys = colorGradient.alphaKeys;
        for (int k = 0; k < alphaKeys.Length; k++)
        {
            GradientAlphaKey gradientAlphaKey = alphaKeys[k];
            Class19 class8;
            if (k == 0 && gradientAlphaKey.time != 0f)
            {
                class8 = new Class19(Class19.Enum2.const_3);
                class8.method_19("time", 0);
                class8.method_18("value", gradientAlphaKey.alpha);
                class7.method_16(class8);
            }
            class8 = new Class19(Class19.Enum2.const_3);
            class8.method_18("time", gradientAlphaKey.time);
            class8.method_18("value", gradientAlphaKey.alpha);
            class7.method_16(class8);
            if (k == alphaKeys.Length - 1 && gradientAlphaKey.time != 1f)
            {
                class8 = new Class19(Class19.Enum2.const_3);
                class8.method_19("time", 1);
                class8.method_18("value", gradientAlphaKey.alpha);
                class7.method_16(class8);
            }
        }
        class19_0.method_19("alignment", (int)component.alignment);
        Material[] sharedMaterials = component.sharedMaterials;
        Class19 class9 = new Class19(Class19.Enum2.const_4);
        class19_0.method_23("materials", class9);
        foreach (Material material in sharedMaterials)
        {
            if (!(material == null))
            {
                string str = Class32.smethod_62(AssetDatabase.GetAssetPath(material.GetInstanceID()).Split(new char[]
                {
                    '.'
                })[0], false) + ".lmat";
                string string_ = Class32.string_2 + "/" + str;
                string name = material.shader.name;
                if (name != "LayaAir3D/Trail")
                {
                    Debug.LogWarning(string.Concat(new string[]
                    {
                        "LayaAir3D Warning(Code:2003) : ",
                        gameObject_0.name,
                        " dose's match ",
                        name,
                        "Shader, Must use Trail Shader！"
                    }));
                }
                Class19 class10 = new Class19(Class19.Enum2.const_3);
                class10.method_22("type", "Laya.TrailMaterial");
                class10.method_22("path", str);
                class9.method_16(class10);
                Class32.smethod_42(material, string_, "Trail");
            }
        }
    }

    // Token: 0x060001D7 RID: 471 RVA: 0x000159D0 File Offset: 0x00013BD0
    static void smethod_25(GameObject gameObject_0, Class19 class19_0)
    {
        LineRenderer component = gameObject_0.GetComponent<LineRenderer>();
        class19_0.method_17("useWorldSpace", component.useWorldSpace);
        class19_0.method_18("widthMultiplier", component.widthMultiplier);
        if (component.textureMode == LineTextureMode.Stretch)
        {
            class19_0.method_19("textureMode", 0);
        }
        else
        {
            class19_0.method_19("textureMode", 1);
        }
        Class19 @class = new Class19(Class19.Enum2.const_3);
        class19_0.method_23("positions", @class);
        @class.method_19("size", component.positionCount);
        Class19 class2 = new Class19(Class19.Enum2.const_4);
        @class.method_23("values", class2);
        for (int i = 0; i < component.positionCount; i++)
        {
            Class19 class3 = new Class19(Class19.Enum2.const_4);
            class2.method_16(class3);
            Vector3 position = component.GetPosition(i);
            class3.method_12(-position.x);
            class3.method_12(position.y);
            class3.method_12(position.z);
        }
        Class19 class4 = new Class19(Class19.Enum2.const_4);
        class19_0.method_23("widthCurve", class4);
        Keyframe[] keys = component.widthCurve.keys;
        for (int j = 0; j < keys.Length; j++)
        {
            Keyframe keyframe = keys[j];
            Class19 class5;
            if (j == 0 && keyframe.time != 0f)
            {
                class5 = new Class19(Class19.Enum2.const_3);
                class5.method_19("time", 0);
                class5.method_19("inTangent", 0);
                class5.method_19("outTangent", 0);
                class5.method_18("value", keyframe.value);
                class4.method_16(class5);
            }
            class5 = new Class19(Class19.Enum2.const_3);
            class5.method_18("time", keyframe.time);
            class5.method_18("inTangent", keyframe.inTangent);
            class5.method_18("outTangent", keyframe.inTangent);
            class5.method_18("value", keyframe.value);
            class4.method_16(class5);
            if (j == keys.Length - 1 && keyframe.time != 1f)
            {
                class5 = new Class19(Class19.Enum2.const_3);
                class5.method_19("time", 1);
                class5.method_19("inTangent", 0);
                class5.method_19("outTangent", 0);
                class5.method_18("value", keyframe.value);
                class4.method_16(class5);
            }
        }
        Class19 class6 = new Class19(Class19.Enum2.const_3);
        class19_0.method_23("colorGradient", class6);
        Gradient colorGradient = component.colorGradient;
        if (colorGradient.mode == GradientMode.Blend)
        {
            class6.method_19("mode", 0);
        }
        else
        {
            class6.method_19("mode", 1);
        }
        Class19 class7 = new Class19(Class19.Enum2.const_4);
        class6.method_23("colorKeys", class7);
        GradientColorKey[] colorKeys = colorGradient.colorKeys;
        for (int k = 0; k < colorKeys.Length; k++)
        {
            GradientColorKey gradientColorKey = colorKeys[k];
            Class19 class8;
            Class19 class9;
            Color color;
            if (k == 0 && gradientColorKey.time != 0f)
            {
                class8 = new Class19(Class19.Enum2.const_3);
                class8.method_19("time", 0);
                class9 = new Class19(Class19.Enum2.const_4);
                class8.method_23("value", class9);
                color = gradientColorKey.color;
                class9.method_12(color.r);
                class9.method_12(color.g);
                class9.method_12(color.b);
                class7.method_16(class8);
            }
            class8 = new Class19(Class19.Enum2.const_3);
            class8.method_18("time", gradientColorKey.time);
            class9 = new Class19(Class19.Enum2.const_4);
            class8.method_23("value", class9);
            color = gradientColorKey.color;
            class9.method_12(color.r);
            class9.method_12(color.g);
            class9.method_12(color.b);
            class7.method_16(class8);
            if (k == colorKeys.Length - 1 && gradientColorKey.time != 1f)
            {
                class8 = new Class19(Class19.Enum2.const_3);
                class8.method_19("time", 1);
                class9 = new Class19(Class19.Enum2.const_4);
                class8.method_23("value", class9);
                color = gradientColorKey.color;
                class9.method_12(color.r);
                class9.method_12(color.g);
                class9.method_12(color.b);
                class7.method_16(class8);
            }
        }
        Class19 class10 = new Class19(Class19.Enum2.const_4);
        class6.method_23("alphaKeys", class10);
        GradientAlphaKey[] alphaKeys = colorGradient.alphaKeys;
        for (int l = 0; l < alphaKeys.Length; l++)
        {
            GradientAlphaKey gradientAlphaKey = alphaKeys[l];
            Class19 class11;
            if (l == 0 && gradientAlphaKey.time != 0f)
            {
                class11 = new Class19(Class19.Enum2.const_3);
                class11.method_19("time", 0);
                class11.method_18("value", gradientAlphaKey.alpha);
                class10.method_16(class11);
            }
            class11 = new Class19(Class19.Enum2.const_3);
            class11.method_18("time", gradientAlphaKey.time);
            class11.method_18("value", gradientAlphaKey.alpha);
            class10.method_16(class11);
            if (l == alphaKeys.Length - 1 && gradientAlphaKey.time != 1f)
            {
                class11 = new Class19(Class19.Enum2.const_3);
                class11.method_19("time", 1);
                class11.method_18("value", gradientAlphaKey.alpha);
                class10.method_16(class11);
            }
        }
        Material[] sharedMaterials = component.sharedMaterials;
        Class19 class12 = new Class19(Class19.Enum2.const_4);
        class19_0.method_23("materials", class12);
        foreach (Material material in sharedMaterials)
        {
            if (!(material == null))
            {
                string str = Class32.smethod_62(AssetDatabase.GetAssetPath(material.GetInstanceID()).Split(new char[]
                {
                    '.'
                })[0], false) + ".lmat";
                string string_ = Class32.string_2 + "/" + str;
                string name = material.shader.name;
                if (name != "LayaAir3D/Line")
                {
                    Debug.LogWarning(string.Concat(new string[]
                    {
                        "LayaAir3D Warning(Code:2004) : ",
                        gameObject_0.name,
                        " dose's match ",
                        name,
                        "Shader, Must use Line Shader！"
                    }));
                }
                Class19 class13 = new Class19(Class19.Enum2.const_3);
                class13.method_22("type", "Laya.LineMaterial");
                class13.method_22("path", str);
                class12.method_16(class13);
                Class32.smethod_42(material, string_, "Line");
            }
        }
    }

    // Token: 0x060001D8 RID: 472 RVA: 0x00016024 File Offset: 0x00014224
    static bool smethod_26(GameObject gameObject_0, Class19 class19_0)
    {
        bool result = false;
        foreach (BoxCollider boxCollider in gameObject_0.GetComponents<BoxCollider>())
        {
            Class19 @class = new Class19(Class19.Enum2.const_3);
            Class19 class2 = new Class19(Class19.Enum2.const_4);
            Class19 class3 = new Class19(Class19.Enum2.const_4);
            @class.method_22("type", "BoxColliderShape");
            Vector3 center = boxCollider.center;
            class2.method_12(-center.x);
            class2.method_12(center.y);
            class2.method_12(center.z);
            @class.method_23("center", class2);
            Vector3 size = boxCollider.size;
            class3.method_12(size.x);
            class3.method_12(size.y);
            class3.method_12(size.z);
            @class.method_23("size", class3);
            if (boxCollider.isTrigger)
            {
                result = true;
            }
            class19_0.method_16(@class);
        }
        foreach (SphereCollider sphereCollider in gameObject_0.GetComponents<SphereCollider>())
        {
            Class19 class4 = new Class19(Class19.Enum2.const_3);
            Class19 class5 = new Class19(Class19.Enum2.const_4);
            class4.method_22("type", "SphereColliderShape");
            Vector3 center2 = sphereCollider.center;
            class5.method_12(-center2.x);
            class5.method_12(center2.y);
            class5.method_12(center2.z);
            class4.method_23("center", class5);
            class4.method_18("radius", sphereCollider.radius);
            if (sphereCollider.isTrigger)
            {
                result = true;
            }
            class19_0.method_16(class4);
        }
        foreach (CapsuleCollider capsuleCollider in gameObject_0.GetComponents<CapsuleCollider>())
        {
            Class19 class6 = new Class19(Class19.Enum2.const_3);
            Class19 class7 = new Class19(Class19.Enum2.const_4);
            class6.method_22("type", "CapsuleColliderShape");
            Vector3 center3 = capsuleCollider.center;
            class7.method_12(center3.x);
            class7.method_12(center3.y);
            class7.method_12(center3.z);
            class6.method_23("center", class7);
            class6.method_18("radius", capsuleCollider.radius);
            class6.method_18("height", capsuleCollider.height);
            class6.method_19("orientation", capsuleCollider.direction);
            if (capsuleCollider.isTrigger)
            {
                result = true;
            }
            class19_0.method_16(class6);
        }
        foreach (MeshCollider meshCollider in gameObject_0.GetComponents<MeshCollider>())
        {
            Class19 class8 = new Class19(Class19.Enum2.const_3);
            class8.method_22("type", "MeshColliderShape");
            Mesh sharedMesh = meshCollider.sharedMesh;
            if (sharedMesh != null)
            {
                string str = Class32.smethod_62(sharedMesh.name, true);
                string text = Class32.smethod_62(AssetDatabase.GetAssetPath(sharedMesh.GetInstanceID()).Split(new char[]
                {
                    '.'
                })[0], false) + "-" + str;
                text += ".lm";
                class8.method_22("mesh", text);
                string key = Class32.string_2 + "/" + text;
                if (!Class32.dictionary_2.ContainsKey(key))
                {
                    Class32.dictionary_2.Add(key, sharedMesh);
                }
            }
            else
            {
                Debug.LogWarning("LayaAir3D Warning(Code:1001) : " + gameObject_0.name + "'s MeshFilter Component Mesh data can't be null!");
            }
            if (meshCollider.isTrigger)
            {
                result = true;
            }
            class19_0.method_16(class8);
        }
        return result;
    }

    // Token: 0x060001D9 RID: 473 RVA: 0x000163A8 File Offset: 0x000145A8
    static void smethod_27(GameObject gameObject_0, Material[] material_0, Class19 class19_0)
    {
        foreach (Material material in material_0)
        {
            if (!(material == null))
            {
                string str = Class32.smethod_62(AssetDatabase.GetAssetPath(material.GetInstanceID()).Split(new char[]
                {
                    '.'
                })[0], false) + ".lmat";
                string string_ = Class32.string_2 + "/" + str;
                string name = material.shader.name;
                if (name.Split(new char[]
                {
                    '/'
                })[0] == "LayaAir3D")
                {
                    int num = name.Split(new char[]
                    {
                        '/'
                    }).Length;
                    Class19 @class = new Class19(Class19.Enum2.const_3);
                    class19_0.method_16(@class);
                    string text = name.Split(new char[]
                    {
                        '/'
                    })[num - 1];
                    if (text == "BlinnPhong")
                    {
                        @class.method_22("path", str);
                        Class32.smethod_41(material, string_, text);
                    }
                    else if (text == "Unlit")
                    {
                        @class.method_22("path", str);
                        Class32.smethod_41(material, string_, text);
                    }
                    else if (text == "Effect")
                    {
                        @class.method_22("path", str);
                        Class32.smethod_42(material, string_, text);
                    }
                    else if (text == "PBR(Standard)")
                    {
                        @class.method_22("path", str);
                        Class32.smethod_41(material, string_, text);
                    }
                    else if (text == "PBR(Specular)")
                    {
                        @class.method_22("path", str);
                        Class32.smethod_41(material, string_, text);
                    }
                    else if (text == "Water (Primary)")
                    {
                        @class.method_22("type", "Laya.WaterPrimaryMaterial");
                        @class.method_22("path", str);
                        class19_0.method_16(@class);
                        Class32.smethod_43(material, string_);
                    }
                    else
                    {
                        @class.method_22("path", str);
                        if (Class32.dictionary_0.ContainsKey(name))
                        {
                            Class32.smethod_32(material, string_, Class32.dictionary_0[name]);
                        }
                        else
                        {
                            Debug.LogWarning("LayaAir3D Warning : " + text + " must config in CustomShaderConfig File.");
                        }
                    }
                }
                else
                {
                    Class19 class2 = new Class19(Class19.Enum2.const_3);
                    class2.method_22("type", "Laya.BlinnPhongMaterial");
                    class2.method_22("path", str);
                    class19_0.method_16(class2);
                    string string_2 = "BlinnPhong";
                    Class32.smethod_41(material, string_, string_2);
                    Debug.LogWarning("LayaAir3D Warning(Code:2000) : " + gameObject_0.name + " must use LayaAir3D shader!");
                }
            }
        }
    }

    // Token: 0x060001DA RID: 474 RVA: 0x00016634 File Offset: 0x00014834
    static bool smethod_28(GameObject gameObject_0)
    {
        Transform parent = gameObject_0.transform.parent;
        return parent != null && (!(parent.gameObject.GetComponent<Animator>() == null) || Class32.smethod_28(parent.gameObject));
    }

    // Token: 0x060001DB RID: 475 RVA: 0x00016678 File Offset: 0x00014878
    static void smethod_29(GameObject gameObject_0, Class19 class19_0, GameObject gameObject_1)
    {
        Class32.smethod_58(gameObject_0, true);
        bool flag = false;
        if (!gameObject_0.activeSelf && Class32.bool_7)
        {
            return;
        }
        if (gameObject_0.GetComponent<Animator>() != null && Class32.smethod_28(gameObject_0) && gameObject_0 != gameObject_1)
        {
            flag = true;
        }
        else if ((Class32.smethod_55(gameObject_0, Class32.Enum3.const_8) != gameObject_1 || Class32.smethod_61(gameObject_0).IndexOf(Class32.Enum3.const_8) != -1) && gameObject_0 != gameObject_1)
        {
            return;
        }
        Class19 @class = new Class19(Class19.Enum2.const_3);
        Class19 class2 = new Class19(Class19.Enum2.const_3);
        Class19 class3 = new Class19(Class19.Enum2.const_4);
        Class19 class4 = new Class19(Class19.Enum2.const_4);
        Class19 class5 = new Class19(Class19.Enum2.const_4);
        Vector3 localPosition = gameObject_0.transform.localPosition;
        Quaternion localRotation = gameObject_0.transform.localRotation;
        Vector3 localScale = gameObject_0.transform.localScale;
        class2.method_22("name", gameObject_0.name);
        @class.method_23("props", class2);
        class3 = new Class19(Class19.Enum2.const_4);
        class2.method_23("translate", class3);
        class3.method_12(localPosition.x * -1f);
        class3.method_12(localPosition.y);
        class3.method_12(localPosition.z);
        class4 = new Class19(Class19.Enum2.const_4);
        class2.method_23("rotation", class4);
        class4.method_12(localRotation.x * -1f);
        class4.method_12(localRotation.y);
        class4.method_12(localRotation.z);
        class4.method_12(localRotation.w * -1f);
        class5 = new Class19(Class19.Enum2.const_4);
        class2.method_23("scale", class5);
        class5.method_12(localScale.x);
        class5.method_12(localScale.y);
        class5.method_12(localScale.z);
        if (gameObject_0.transform.childCount > 0)
        {
            Class19 class19_ = new Class19(Class19.Enum2.const_4);
            @class.method_23("child", class19_);
            if (!flag)
            {
                for (int i = 0; i < gameObject_0.transform.childCount; i++)
                {
                    Class32.smethod_29(gameObject_0.transform.GetChild(i).gameObject, class19_, gameObject_1);
                }
            }
        }
        else
        {
            @class.method_23("child", new Class19(Class19.Enum2.const_4));
        }
        class19_0.method_16(@class);
    }

    // Token: 0x060001DC RID: 476 RVA: 0x000168A0 File Offset: 0x00014AA0
    static Class32()
    {

        Class32.string_0 = "LayaAir3D UnityPlugin: ";
        Class32.dictionary_0 = new Dictionary<string, string>();
        Class32.int_1 = 75;
        Class32.int_4 = 24;
        Class32.float_1 = 0.01f;
        Class32.int_5 = new int[7];
        Class32.int_6 = 1;
        Class32.int_7 = 0;
        Class32.int_8 = 1;
        Class32.int_9 = 0;
        Class32.int_10 = 1;
        Class32.int_11 = 0;
        Class32.dictionary_1 = new Dictionary<string, TextureInfo>();
        Class32.dictionary_2 = new Dictionary<string, Mesh>();
        Class32.dictionary_3 = new Dictionary<string, SkinnedMeshRenderer>();
        Class32.class0_0 = new Class0();
        Class32.string_4 = "LAYASCENE3D:02";
        Class32.string_5 = "LAYAHIERARCHY:02";
        Class32.string_6 = "LAYAMODEL:05";
        Class32.string_7 = "LAYAMODEL:COMPRESSION_05";
        Class32.string_8 = "LAYAMATERIAL:02";
        Class32.string_9 = "LAYAANIMATION:04";
        Class32.string_10 = "LAYAANIMATION:COMPRESSION_04";
        Class32.int_12 = 0;
        Class32.dictionary_4 = new Dictionary<string, int>();
        Class32.list_1 = new List<string>();
        Class32.dictionary_0.Add("LayaAir3D/Sky/Cubemap", "Laya.SkyBoxMaterial");
        Class32.dictionary_0.Add("LayaAir3D/Sky/Procedural", "Laya.SkyProceduralMaterial");
        Class32.smethod_30();
    }

    // Token: 0x060001DD RID: 477 RVA: 0x000169C4 File Offset: 0x00014BC4
    static void smethod_30()
    {
        Class19 @class = Class19.smethod_12(File.ReadAllText("Assets/LayaAir3D/LayaTool/CustomShaderConfig.json"), -2, false, false);
        for (int i = 0; i < @class.list_1.Count; i++)
        {
            string key = @class.list_1[i];
            Class32.dictionary_0.Add(key, @class.method_43(key).string_0);
        }
    }

    // Token: 0x060001DE RID: 478 RVA: 0x00016A20 File Offset: 0x00014C20
    static void smethod_31(Material material_0, Class19 class19_0)
    {
        string str = Class32.smethod_62(AssetDatabase.GetAssetPath(material_0.GetInstanceID()).Split(new char[]
        {
            '.'
        })[0], false) + ".lmat";
        string string_ = Class32.string_2 + "/" + str;
        string name = material_0.shader.name;
        if (!(name == "LayaAir3D/Sky/Cubemap") && !(name == "LayaAir3D/Sky/Procedural"))
        {
            Debug.LogWarning("LayaAir3D UnityPlugin: unknown Shader    Please use LayaAir3D shader");
            return;
        }
        string string_2 = Class32.dictionary_0[name];
        Class19 @class = new Class19(Class19.Enum2.const_3);
        class19_0.method_23("sky", @class);
        Class19 class2 = new Class19(Class19.Enum2.const_3);
        @class.method_23("material", class2);
        class2.method_22("type", string_2);
        class2.method_22("path", str);
        @class.method_22("mesh", (name == "LayaAir3D/Sky/Cubemap") ? "SkyBox" : "SkyDome");
        Class32.smethod_32(material_0, string_, string_2);
    }

    // Token: 0x060001DF RID: 479 RVA: 0x00016B1C File Offset: 0x00014D1C
    static void smethod_32(Material material_0, string string_11, string string_12)
    {
        Class19 @class = new Class19(Class19.Enum2.const_3);
        Class19 class2 = new Class19(Class19.Enum2.const_3);
        Class19 class3 = new Class19(Class19.Enum2.const_4);
        Class19 class4 = new Class19(Class19.Enum2.const_4);
        Class19 class5 = new Class19(Class19.Enum2.const_4);
        Class19 class6 = new Class19(Class19.Enum2.const_4);
        List<string> list = material_0.shaderKeywords.ToList<string>();
        string name = material_0.name;
        @class.method_22("version", Class32.string_8);
        @class.method_23("props", class2);
        class2.method_22("type", string_12);
        class2.method_22("name", name);
        class2.method_23("renderStates", class3);
        class2.method_23("textures", class4);
        class2.method_23("vectors", class5);
        class2.method_23("defines", class6);
        Class19 class7 = new Class19(Class19.Enum2.const_3);
        class3.method_16(class7);
        class7.method_19("cull", material_0.HasProperty("_Cull") ? material_0.GetInt("_Cull") : 2);
        class7.method_19("blend", (list.IndexOf("_ALPHABLEND_ON") != -1) ? 1 : 0);
        if (material_0.HasProperty("_SrcBlend"))
        {
            switch (material_0.GetInt("_SrcBlend"))
            {
                case 0:
                    class7.method_19("srcBlend", 0);
                    break;
                case 1:
                    class7.method_19("srcBlend", 1);
                    break;
                case 2:
                    class7.method_19("srcBlend", 774);
                    break;
                case 3:
                    class7.method_19("srcBlend", 768);
                    break;
                case 4:
                    class7.method_19("srcBlend", 775);
                    break;
                case 5:
                    class7.method_19("srcBlend", 770);
                    break;
                case 6:
                    class7.method_19("srcBlend", 769);
                    break;
                case 7:
                    class7.method_19("srcBlend", 772);
                    break;
                case 8:
                    class7.method_19("srcBlend", 773);
                    break;
                case 9:
                    class7.method_19("srcBlend", 776);
                    break;
                case 10:
                    class7.method_19("srcBlend", 771);
                    break;
                default:
                    class7.method_19("srcBlend", 1);
                    break;
            }
        }
        else
        {
            class7.method_19("srcBlend", 1);
        }
        if (material_0.HasProperty("_DstBlend"))
        {
            switch (material_0.GetInt("_DstBlend"))
            {
                case 0:
                    class7.method_19("dstBlend", 0);
                    break;
                case 1:
                    class7.method_19("dstBlend", 1);
                    break;
                case 2:
                    class7.method_19("dstBlend", 774);
                    break;
                case 3:
                    class7.method_19("dstBlend", 768);
                    break;
                case 4:
                    class7.method_19("dstBlend", 775);
                    break;
                case 5:
                    class7.method_19("dstBlend", 770);
                    break;
                case 6:
                    class7.method_19("dstBlend", 769);
                    break;
                case 7:
                    class7.method_19("dstBlend", 772);
                    break;
                case 8:
                    class7.method_19("dstBlend", 773);
                    break;
                case 9:
                    class7.method_19("dstBlend", 776);
                    break;
                case 10:
                    class7.method_19("dstBlend", 771);
                    break;
                default:
                    class7.method_19("dstBlend", 0);
                    break;
            }
        }
        else
        {
            class7.method_19("dstBlend", 0);
        }
        if (material_0.HasProperty("_ZWrite"))
        {
            class7.method_17("depthWrite", material_0.GetInt("_ZWrite") == 1);
        }
        else
        {
            class7.method_17("depthWrite", true);
        }
        if (material_0.HasProperty("_ZTest"))
        {
            switch (material_0.GetInt("_ZTest"))
            {
                case 0:
                    class7.method_19("depthTest", 0);
                    break;
                case 1:
                    class7.method_19("depthTest", 512);
                    break;
                case 2:
                    class7.method_19("depthTest", 513);
                    break;
                case 3:
                    class7.method_19("depthTest", 514);
                    break;
                case 4:
                    class7.method_19("depthTest", 515);
                    break;
                case 5:
                    class7.method_19("depthTest", 516);
                    break;
                case 6:
                    class7.method_19("depthTest", 517);
                    break;
                case 7:
                    class7.method_19("depthTest", 518);
                    break;
                case 8:
                    class7.method_19("depthTest", 519);
                    break;
                default:
                    class7.method_19("depthTest", 0);
                    break;
            }
        }
        else
        {
            class7.method_19("depthTest", 515);
        }
        class2.method_19("renderQueue", material_0.renderQueue);
        for (int i = 0; i < list.Count; i++)
        {
            string text = list[i];
            class6.method_14(text);
        }
        Shader shader = material_0.shader;
        int j = 0;
        int propertyCount = ShaderUtil.GetPropertyCount(shader);
        while (j < propertyCount)
        {
            if (!ShaderUtil.IsShaderPropertyHidden(shader, j))
            {
                ShaderUtil.ShaderPropertyType propertyType = ShaderUtil.GetPropertyType(shader, j);
                string propertyName = ShaderUtil.GetPropertyName(shader, j);
                switch (propertyType)
                {
                    case ShaderUtil.ShaderPropertyType.Color:
                        {
                            Class19 class8 = new Class19(Class19.Enum2.const_3);
                            class8.method_22("name", propertyName);
                            Class19 class9 = new Class19(Class19.Enum2.const_4);
                            Color color = material_0.GetColor(propertyName);
                            class9.method_12(color.r);
                            class9.method_12(color.g);
                            class9.method_12(color.b);
                            class9.method_12(color.a);
                            class8.method_23("value", class9);
                            class5.method_16(class8);
                            break;
                        }
                    case ShaderUtil.ShaderPropertyType.Float:
                        class2.method_18(propertyName, material_0.GetFloat(propertyName));
                        break;
                    case ShaderUtil.ShaderPropertyType.Range:
                        class2.method_18(propertyName, material_0.GetFloat(propertyName));
                        break;
                    case ShaderUtil.ShaderPropertyType.TexEnv:
                        {
                            Class19 class10 = new Class19(Class19.Enum2.const_3);
                            class10.method_22("name", propertyName);
                            Texture texture = material_0.GetTexture(propertyName);
                            if (texture is Texture2D)
                            {
                                Class32.smethod_45(class10, (Texture2D)texture, Class32.int_3, string_11, name, "path");
                            }
                            else
                            {
                                Class32.smethod_46((Cubemap)texture, class10, true, string_11);
                            }
                            class4.method_16(class10);
                            break;
                        }
                }
            }
            j++;
        }
        Class30.smethod_0(string_11, @class);
    }

    // Token: 0x060001E0 RID: 480 RVA: 0x000171B4 File Offset: 0x000153B4
    static void smethod_33(Mesh mesh_0, string string_11, bool bool_14 = false)
    {
        string item = Class32.smethod_62(mesh_0.name, true);
        ushort num = (ushort)mesh_0.subMeshCount;
        int num2 = (int)(num + 1);
        FileStream fileStream = Class30.smethod_0(string_11, null);
        ushort num3 = 0;
        string text = "";
        if (bool_14 && !Class0.bool_2)
        {
            Debug.LogWarning("Compress Mesh function is open only to members. ");
            return;
        }
        for (int i = 0; i < Class32.int_5.Length; i++)
        {
            Class32.int_5[i] = 0;
        }
        Vector3[] vertices = mesh_0.vertices;
        Vector3[] normals = mesh_0.normals;
        Color[] colors = mesh_0.colors;
        Vector2[] uv = mesh_0.uv;
        Vector2[] uv2 = mesh_0.uv2;
        Vector4[] tangents = mesh_0.tangents;
        if (vertices != null && vertices.Length != 0)
        {
            Class32.int_5[0] = 1;
            text += "POSITION";
            num3 += 12;
        }
        if (normals != null && normals.Length != 0 && !Class32.bool_2)
        {
            Class32.int_5[1] = 1;
            text += ",NORMAL";
            num3 += 12;
        }
        if (colors != null && colors.Length != 0 && !Class32.bool_1)
        {
            Class32.int_5[2] = 1;
            text += ",COLOR";
            num3 += 16;
        }
        if (uv != null && uv.Length != 0 && !Class32.bool_0)
        {
            Class32.int_5[3] = 1;
            text += ",UV";
            num3 += 8;
        }
        if (uv2 != null && uv2.Length != 0 && !Class32.bool_0)
        {
            Class32.int_5[4] = 1;
            text += ",UV1";
            num3 += 8;
        }
        if (tangents != null && tangents.Length != 0 && !Class32.bool_3)
        {
            Class32.int_5[6] = 1;
            text += ",TANGENT";
            num3 += 16;
        }
        int[] array = new int[(int)num];
        int[] array2 = new int[(int)num];
        for (int i = 0; i < (int)num; i++)
        {
            int[] indices = mesh_0.GetIndices(i);
            array[i] = indices[0];
            array2[i] = indices.Length;
        }
        long[] array3 = new long[(int)num];
        long[] array4 = new long[(int)num];
        long[] array5 = new long[(int)num];
        List<string> list = new List<string>();
        list.Add("MESH");
        list.Add("SUBMESH");
        string text2 = bool_14 ? Class32.string_7 : Class32.string_6;
        Class30.smethod_12(fileStream, text2);
        long position = fileStream.Position;
        long position2 = fileStream.Position;
        Class30.smethod_7(fileStream, new uint[1]);
        Class30.smethod_7(fileStream, new uint[1]);
        long position3 = fileStream.Position;
        Class30.smethod_5(fileStream, new ushort[]
        {
            (ushort)num2
        });
        for (int i = 0; i < num2; i++)
        {
            Class30.smethod_7(fileStream, new uint[1]);
            Class30.smethod_7(fileStream, new uint[1]);
        }
        long position4 = fileStream.Position;
        Class30.smethod_7(fileStream, new uint[1]);
        Class30.smethod_5(fileStream, new ushort[1]);
        long position5 = fileStream.Position;
        Class30.smethod_5(fileStream, new ushort[]
        {
            (ushort)list.IndexOf("MESH")
        });
        list.Add(item);
        Class30.smethod_5(fileStream, new ushort[]
        {
            (ushort)list.IndexOf(item)
        });
        Class30.smethod_5(fileStream, new ushort[]
        {
            1
        });
        long position6 = fileStream.Position;
        for (int i = 0; i < 1; i++)
        {
            Class30.smethod_7(fileStream, new uint[1]);
            Class30.smethod_7(fileStream, new uint[1]);
            list.Add(text);
            Class30.smethod_5(fileStream, new ushort[]
            {
                (ushort)list.IndexOf(text)
            });
        }
        long position7 = fileStream.Position;
        Class30.smethod_7(fileStream, new uint[1]);
        Class30.smethod_7(fileStream, new uint[1]);
        long position8 = fileStream.Position;
        Class30.smethod_5(fileStream, new ushort[1]);
        Class30.smethod_7(fileStream, new uint[1]);
        Class30.smethod_7(fileStream, new uint[1]);
        Class30.smethod_7(fileStream, new uint[1]);
        Class30.smethod_7(fileStream, new uint[1]);
        long num4 = fileStream.Position - position5;
        for (int i = 0; i < (int)num; i++)
        {
            array3[i] = fileStream.Position;
            Class30.smethod_5(fileStream, new ushort[]
            {
                (ushort)list.IndexOf("SUBMESH")
            });
            Class30.smethod_5(fileStream, new ushort[1]);
            Class30.smethod_7(fileStream, new uint[1]);
            Class30.smethod_7(fileStream, new uint[1]);
            Class30.smethod_5(fileStream, new ushort[]
            {
                1
            });
            Class30.smethod_7(fileStream, new uint[1]);
            Class30.smethod_7(fileStream, new uint[1]);
            Class30.smethod_7(fileStream, new uint[1]);
            Class30.smethod_7(fileStream, new uint[1]);
            array4[i] = fileStream.Position;
            array5[i] = array4[i] - array3[i];
        }
        long position9 = fileStream.Position;
        for (int i = 0; i < list.Count; i++)
        {
            Class30.smethod_12(fileStream, list[i]);
        }
        long num5 = fileStream.Position - position9;
        long position10 = fileStream.Position;
        if (bool_14)
        {
            for (int j = 0; j < mesh_0.vertexCount; j++)
            {
                Vector3 vector = vertices[j];
                Class30.smethod_5(fileStream, new ushort[]
                {
                    Class18.smethod_0(-vector.x),
                    Class18.smethod_0(vector.y),
                    Class18.smethod_0(vector.z)
                });
                if (Class32.int_5[1] == 1)
                {
                    Vector3 vector2 = normals[j];
                    Class30.smethod_4(fileStream, new byte[]
                    {
                        (byte)(((double)(-(double)vector2.x) + 1.0) / 2.0 * 255.0),
                        (byte)(((double)vector2.y + 1.0) / 2.0 * 255.0),
                        (byte)(((double)vector2.z + 1.0) / 2.0 * 255.0)
                    });
                }
                if (Class32.int_5[2] == 1)
                {
                    Color color = colors[j];
                    Class30.smethod_4(fileStream, new byte[]
                    {
                        (byte)(color.r * 255f),
                        (byte)(color.g * 255f),
                        (byte)(color.b * 255f),
                        (byte)(color.a * 255f)
                    });
                }
                if (Class32.int_5[3] == 1)
                {
                    Vector2 vector3 = uv[j];
                    Class30.smethod_5(fileStream, new ushort[]
                    {
                        Class18.smethod_0(vector3.x),
                        Class18.smethod_0(-vector3.y + 1f)
                    });
                }
                if (Class32.int_5[4] == 1)
                {
                    Vector2 vector4 = uv2[j];
                    Class30.smethod_5(fileStream, new ushort[]
                    {
                        Class18.smethod_0(vector4.x),
                        Class18.smethod_0(-vector4.y + 1f)
                    });
                }
                if (Class32.int_5[6] == 1)
                {
                    Vector4 vector5 = tangents[j];
                    Class30.smethod_4(fileStream, new byte[]
                    {
                        (byte)(((double)(-(double)vector5.x) + 1.0) / 2.0 * 255.0),
                        (byte)(((double)vector5.y + 1.0) / 2.0 * 255.0),
                        (byte)(((double)vector5.z + 1.0) / 2.0 * 255.0),
                        (byte)(((double)vector5.w + 1.0) / 2.0 * 255.0)
                    });
                }
            }
        }
        else
        {
            for (int j = 0; j < mesh_0.vertexCount; j++)
            {
                Vector3 vector = vertices[j];
                Class30.smethod_9(fileStream, new float[]
                {
                    -vector.x,
                    vector.y,
                    vector.z
                });
                if (Class32.int_5[1] == 1)
                {
                    Vector3 vector2 = normals[j];
                    Class30.smethod_9(fileStream, new float[]
                    {
                        -vector2.x,
                        vector2.y,
                        vector2.z
                    });
                }
                if (Class32.int_5[2] == 1)
                {
                    Color color = colors[j];
                    Class30.smethod_9(fileStream, new float[]
                    {
                        color.r,
                        color.g,
                        color.b,
                        color.a
                    });
                }
                if (Class32.int_5[3] == 1)
                {
                    Vector2 vector3 = uv[j];
                    Class30.smethod_9(fileStream, new float[]
                    {
                        vector3.x,
                        vector3.y * -1f + 1f
                    });
                }
                if (Class32.int_5[4] == 1)
                {
                    Vector2 vector4 = uv2[j];
                    Class30.smethod_9(fileStream, new float[]
                    {
                        vector4.x,
                        vector4.y * -1f + 1f
                    });
                }
                if (Class32.int_5[6] == 1)
                {
                    Vector4 vector5 = tangents[j];
                    Class30.smethod_9(fileStream, new float[]
                    {
                        -vector5.x,
                        vector5.y,
                        vector5.z,
                        vector5.w
                    });
                }
            }
        }
        long num6 = fileStream.Position - position10;
        long position11 = fileStream.Position;
        int[] triangles = mesh_0.triangles;
        if (mesh_0.indexFormat == IndexFormat.UInt32 && mesh_0.vertexCount > 65535)
        {
            for (int j = 0; j < triangles.Length; j++)
            {
                Class30.smethod_7(fileStream, new uint[]
                {
                    (uint)triangles[j]
                });
            }
        }
        else
        {
            for (int j = 0; j < triangles.Length; j++)
            {
                Class30.smethod_5(fileStream, new ushort[]
                {
                    (ushort)triangles[j]
                });
            }
        }
        long num7 = fileStream.Position - position11;
        uint num8 = 0U;
        for (int i = 0; i < (int)num; i++)
        {
            fileStream.Position = array3[i] + 4L;
            uint num9;
            uint num10;
            if (num == 1)
            {
                num9 = 0U;
                num10 = ((mesh_0.indexFormat == IndexFormat.UInt32) ? ((uint)(num7 / 4L)) : ((uint)(num7 / 2L)));
            }
            else if (i == 0)
            {
                num9 = num8;
                num10 = (uint)array2[i];
            }
            else if (i < (int)(num - 1))
            {
                num9 = num8;
                num10 = (uint)array2[i];
            }
            else
            {
                num9 = num8;
                num10 = (uint)array2[i];
            }
            Class30.smethod_7(fileStream, new uint[]
            {
                num9
            });
            Class30.smethod_7(fileStream, new uint[]
            {
                num10
            });
            num8 += num10;
            fileStream.Position += 2L;
            Class30.smethod_7(fileStream, new uint[]
            {
                num9
            });
            Class30.smethod_7(fileStream, new uint[]
            {
                num10
            });
        }
        fileStream.Position = position6;
        Class30.smethod_7(fileStream, new uint[]
        {
            (uint)(position10 - position9)
        });
        Class30.smethod_7(fileStream, new uint[]
        {
            (uint)mesh_0.vertexCount
        });
        fileStream.Position = position7;
        Class30.smethod_7(fileStream, new uint[]
        {
            (uint)(position11 - position9)
        });
        Class30.smethod_7(fileStream, new uint[]
        {
            (uint)num7
        });
        fileStream.Position = position4;
        Class30.smethod_7(fileStream, new uint[1]);
        Class30.smethod_5(fileStream, new ushort[]
        {
            (ushort)list.Count
        });
        long position12 = fileStream.Position;
        fileStream.Position = position3 + 2L;
        Class30.smethod_7(fileStream, new uint[]
        {
            (uint)position5
        });
        Class30.smethod_7(fileStream, new uint[]
        {
            (uint)num4
        });
        for (int i = 0; i < (int)num; i++)
        {
            Class30.smethod_7(fileStream, new uint[]
            {
                (uint)array3[i]
            });
            Class30.smethod_7(fileStream, new uint[]
            {
                (uint)array5[i]
            });
        }
        fileStream.Position = position2;
        Class30.smethod_7(fileStream, new uint[]
        {
            (uint)position9
        });
        Class30.smethod_7(fileStream, new uint[]
        {
            (uint)(position9 + num5 + num6 + num7 + array5[0])
        });
        fileStream.Close();
    }

    // Token: 0x060001E1 RID: 481 RVA: 0x00017E50 File Offset: 0x00016050
    static void smethod_34(SkinnedMeshRenderer skinnedMeshRenderer_0, string string_11, bool bool_14 = false)
    {
        Mesh sharedMesh = skinnedMeshRenderer_0.sharedMesh;
        ushort num = 1;
        ushort num2 = (ushort)sharedMesh.subMeshCount;
        ushort num3 = 0;
        string text = "";
        string item = Class32.smethod_62(sharedMesh.name, true);
        for (int i = 0; i < Class32.int_5.Length; i++)
        {
            Class32.int_5[i] = 0;
        }
        if (bool_14 && !Class0.bool_2)
        {
            Debug.LogWarning("CompressMesh function is open only to members. ");
            return;
        }
        if (sharedMesh.vertices != null && sharedMesh.vertices.Length != 0)
        {
            Class32.int_5[0] = 1;
            text += "POSITION";
            num3 += 12;
        }
        if (sharedMesh.normals != null && sharedMesh.normals.Length != 0 && !Class32.bool_2)
        {
            Class32.int_5[1] = 1;
            text += ",NORMAL";
            num3 += 12;
        }
        if (sharedMesh.colors != null && sharedMesh.colors.Length != 0 && !Class32.bool_1)
        {
            Class32.int_5[2] = 1;
            text += ",COLOR";
            num3 += 16;
        }
        if (sharedMesh.uv != null && sharedMesh.uv.Length != 0 && !Class32.bool_0)
        {
            Class32.int_5[3] = 1;
            text += ",UV";
            num3 += 8;
        }
        if (sharedMesh.uv2 != null && sharedMesh.uv2.Length != 0 && !Class32.bool_0)
        {
            Class32.int_5[4] = 1;
            text += ",UV1";
            num3 += 8;
        }
        if (sharedMesh.boneWeights != null && sharedMesh.boneWeights.Length != 0)
        {
            Class32.int_5[5] = 1;
            text += ",BLENDWEIGHT,BLENDINDICES";
            num3 += 32;
        }
        if (sharedMesh.tangents != null && sharedMesh.tangents.Length != 0 && !Class32.bool_3)
        {
            Class32.int_5[6] = 1;
            text += ",TANGENT";
            num3 += 16;
        }
        List<Transform> list = new List<Transform>();
        for (int j = 0; j < skinnedMeshRenderer_0.bones.Length; j++)
        {
            Transform item2 = skinnedMeshRenderer_0.bones[j];
            if (list.IndexOf(item2) == -1)
            {
                list.Add(item2);
            }
        }
        int vertexCount = sharedMesh.vertexCount;
        List<Class32.Class33> list2 = new List<Class32.Class33>();
        List<int> list3 = new List<int>();
        List<List<int>>[] array = new List<List<int>>[(int)num2];
        List<int>[] array2 = new List<int>[(int)num2];
        List<List<Class32.Class34>>[] array3 = new List<List<Class32.Class34>>[(int)num2];
        Vector3[] vertices = sharedMesh.vertices;
        Vector3[] normals = sharedMesh.normals;
        Color[] colors = sharedMesh.colors;
        Vector2[] uv = sharedMesh.uv;
        Vector2[] uv2 = sharedMesh.uv2;
        BoneWeight[] boneWeights = sharedMesh.boneWeights;
        Vector4[] tangents = sharedMesh.tangents;
        for (int k = 0; k < vertexCount; k++)
        {
            list2.Add(Class32.smethod_52(vertices, normals, colors, uv, uv2, boneWeights, tangents, k));
        }
        for (int l = 0; l < (int)num2; l++)
        {
            int[] indices = sharedMesh.GetIndices(l);
            array[l] = new List<List<int>>();
            array[l].Add(new List<int>());
            array2[l] = new List<int>();
            List<List<Class32.Class34>> list4 = new List<List<Class32.Class34>>();
            array3[l] = list4;
            list4.Add(new List<Class32.Class34>());
            List<Class32.Class34> list5 = new List<Class32.Class34>();
            int m = 0;
            int num4 = indices.Length;
            while (m < num4)
            {
                list5.Add(new Class32.Class34
                {
                    class33_0 = list2[indices[m]],
                    class33_1 = list2[indices[m + 1]],
                    class33_2 = list2[indices[m + 2]]
                });
                m += 3;
            }
            int n = 0;
            while (n < list5.Count)
            {
                Class32.Class34 @class = list5[n];
                List<int> list6 = Class32.smethod_35(@class);
                bool flag = false;
                for (var num5 = 0; num5 < array[l].Count; ++num5)
                {
                    List<int> list7 = Class32.smethod_36(list6, array[l][num5]);
                    if (list7.Count != 0)
                    {
                        if (array[l][num5].Count + list7.Count > Class32.int_4)
                        {
                            continue;
                        }
                        for (int num6 = 0; num6 < list7.Count; num6++)
                        {
                            array[l][num5].Add(list7[num6]);
                        }
                        list4[num5].Add(@class);
                        flag = true;
                    }
                    else
                    {
                        list4[num5].Add(@class);
                        flag = true;
                    }
                    if (!flag)
                    {
                        List<int> list8 = new List<int>();
                        List<Class32.Class34> list9 = new List<Class32.Class34>();
                        array[l].Add(list8);
                        list4.Add(list9);
                        for (int num7 = 0; num7 < list6.Count; num7++)
                        {
                            list8.Add(list6[num7]);
                        }
                        list9.Add(@class);
                    }
                    n++;
                }
                if (!flag)
                {
                    List<int> list8 = new List<int>();
                    List<Class32.Class34> list9 = new List<Class32.Class34>();
                    array[l].Add(list8);
                    list4.Add(list9);
                    for (int num7 = 0; num7 < list6.Count; num7++)
                    {
                        list8.Add(list6[num7]);
                    }
                    list9.Add(@class);
                }
            }
            for (int num8 = 0; num8 < list4.Count; num8++)
            {
                List<Class32.Class34> list10 = list4[num8];
                for (int num9 = 0; num9 < list10.Count; num9++)
                {
                    Class32.Class34 class2 = list10[num9];
                    class2.class33_0 = Class32.smethod_38(class2.class33_0, l, num8, list2);
                    class2.class33_1 = Class32.smethod_38(class2.class33_1, l, num8, list2);
                    class2.class33_2 = Class32.smethod_38(class2.class33_2, l, num8, list2);
                }
            }
            int num10 = 0;
            for (int num11 = 0; num11 < list4.Count; num11++)
            {
                num10 += list4[num11].Count * 3;
                array2[l].Add(num10);
            }
        }
        for (int num12 = 0; num12 < (int)num2; num12++)
        {
            List<List<Class32.Class34>> list11 = array3[num12];
            for (int num13 = 0; num13 < list11.Count; num13++)
            {
                List<int> list_ = array[num12][num13];
                for (int num14 = 0; num14 < list11[num13].Count; num14++)
                {
                    Class32.Class34 class3 = list11[num13][num14];
                    Class32.smethod_37(list_, class3.class33_2);
                    Class32.smethod_37(list_, class3.class33_1);
                    Class32.smethod_37(list_, class3.class33_0);
                    list3.Add(class3.class33_0.int_0);
                    list3.Add(class3.class33_1.int_0);
                    list3.Add(class3.class33_2.int_0);
                }
            }
        }
        int[] array4 = new int[(int)num2];
        int[] array5 = new int[(int)num2];
        int num15 = 0;
        for (int num16 = 0; num16 < (int)num2; num16++)
        {
            int[] indices2 = sharedMesh.GetIndices(num16);
            array4[num16] = list3[num15];
            array5[num16] = indices2.Length;
            num15 += indices2.Length;
        }
        long num17 = 0L;
        long num18 = 0L;
        long[] array6 = new long[(int)num2];
        long[] array7 = new long[(int)num2];
        long[] array8 = new long[(int)num2];
        List<string> list12 = new List<string>();
        list12.Add("MESH");
        list12.Add("SUBMESH");
        FileStream fileStream = Class30.smethod_0(string_11, null);
        string text2 = bool_14 ? Class32.string_7 : Class32.string_6;
        Class30.smethod_12(fileStream, text2);
        long position = fileStream.Position;
        long position2 = fileStream.Position;
        Class30.smethod_7(fileStream, new uint[1]);
        Class30.smethod_7(fileStream, new uint[1]);
        long position3 = fileStream.Position;
        int num19 = (int)(num2 + 1);
        Class30.smethod_5(fileStream, new ushort[]
        {
            (ushort)num19
        });
        for (int num20 = 0; num20 < num19; num20++)
        {
            Class30.smethod_7(fileStream, new uint[1]);
            Class30.smethod_7(fileStream, new uint[1]);
        }
        long position4 = fileStream.Position;
        Class30.smethod_7(fileStream, new uint[1]);
        Class30.smethod_5(fileStream, new ushort[1]);
        long position5 = fileStream.Position;
        Class30.smethod_5(fileStream, new ushort[]
        {
            (ushort)list12.IndexOf("MESH")
        });
        list12.Add(item);
        Class30.smethod_5(fileStream, new ushort[]
        {
            (ushort)list12.IndexOf(item)
        });
        Class30.smethod_5(fileStream, new ushort[]
        {
            num
        });
        long position6 = fileStream.Position;
        Class30.smethod_7(fileStream, new uint[1]);
        Class30.smethod_7(fileStream, new uint[1]);
        list12.Add(text);
        Class30.smethod_5(fileStream, new ushort[]
        {
            (ushort)list12.IndexOf(text)
        });
        long position7 = fileStream.Position;
        Class30.smethod_7(fileStream, new uint[1]);
        Class30.smethod_7(fileStream, new uint[1]);
        long position8 = fileStream.Position;
        Class30.smethod_5(fileStream, new ushort[]
        {
            (ushort)list.Count
        });
        for (int num21 = 0; num21 < list.Count; num21++)
        {
            list12.Add(list[num21].name);
            Class30.smethod_5(fileStream, new ushort[]
            {
                (ushort)list12.IndexOf(list[num21].name)
            });
        }
        Class30.smethod_7(fileStream, new uint[1]);
        Class30.smethod_7(fileStream, new uint[1]);
        long num22 = fileStream.Position - position5;
        for (int num23 = 0; num23 < (int)num2; num23++)
        {
            array6[num23] = fileStream.Position;
            Class30.smethod_5(fileStream, new ushort[]
            {
                (ushort)list12.IndexOf("SUBMESH")
            });
            Class30.smethod_5(fileStream, new ushort[1]);
            Class30.smethod_7(fileStream, new uint[1]);
            Class30.smethod_7(fileStream, new uint[1]);
            Class30.smethod_5(fileStream, new ushort[]
            {
                (ushort)array[num23].Count
            });
            for (int num24 = 0; num24 < array[num23].Count; num24++)
            {
                Class30.smethod_7(fileStream, new uint[1]);
                Class30.smethod_7(fileStream, new uint[1]);
                Class30.smethod_7(fileStream, new uint[1]);
                Class30.smethod_7(fileStream, new uint[1]);
            }
            array7[num23] = fileStream.Position;
            array8[num23] = array7[num23] - array6[num23];
        }
        long position9 = fileStream.Position;
        for (int num25 = 0; num25 < list12.Count; num25++)
        {
            Class30.smethod_12(fileStream, list12[num25]);
        }
        long num26 = fileStream.Position - position9;
        long position10 = fileStream.Position;
        if (bool_14)
        {
            for (int num27 = 0; num27 < list2.Count; num27++)
            {
                Class32.Class33 class4 = list2[num27];
                Vector3 vector3_ = class4.vector3_0;
                Class30.smethod_5(fileStream, new ushort[]
                {
                    Class18.smethod_0(-vector3_.x),
                    Class18.smethod_0(vector3_.y),
                    Class18.smethod_0(vector3_.z)
                });
                if (Class32.int_5[1] == 1)
                {
                    Vector3 vector3_2 = class4.vector3_1;
                    Class30.smethod_4(fileStream, new byte[]
                    {
                        (byte)(((double)(-(double)vector3_2.x) + 1.0) / 2.0 * 255.0),
                        (byte)(((double)vector3_2.y + 1.0) / 2.0 * 255.0),
                        (byte)(((double)vector3_2.z + 1.0) / 2.0 * 255.0)
                    });
                }
                if (Class32.int_5[2] == 1)
                {
                    Color color_ = class4.color_0;
                    Class30.smethod_4(fileStream, new byte[]
                    {
                        (byte)(color_.r * 255f),
                        (byte)(color_.g * 255f),
                        (byte)(color_.b * 255f),
                        (byte)(color_.a * 255f)
                    });
                }
                if (Class32.int_5[3] == 1)
                {
                    Vector2 vector2_ = class4.vector2_0;
                    Class30.smethod_5(fileStream, new ushort[]
                    {
                        Class18.smethod_0(vector2_.x),
                        Class18.smethod_0(-vector2_.y + 1f)
                    });
                }
                if (Class32.int_5[4] == 1)
                {
                    Vector2 vector2_2 = class4.vector2_1;
                    Class30.smethod_5(fileStream, new ushort[]
                    {
                        Class18.smethod_0(vector2_2.x),
                        Class18.smethod_0(-vector2_2.y + 1f)
                    });
                }
                if (Class32.int_5[5] == 1)
                {
                    Vector4 vector4_ = class4.vector4_0;
                    Vector4 vector4_2 = class4.vector4_1;
                    Class30.smethod_4(fileStream, new byte[]
                    {
                        (byte)(vector4_.x * 255f),
                        (byte)(vector4_.y * 255f),
                        (byte)(vector4_.z * 255f),
                        (byte)(vector4_.w * 255f)
                    });
                    Class30.smethod_4(fileStream, new byte[]
                    {
                        (byte)vector4_2.x,
                        (byte)vector4_2.y,
                        (byte)vector4_2.z,
                        (byte)vector4_2.w
                    });
                }
                if (Class32.int_5[6] == 1)
                {
                    Vector4 vector4_3 = class4.vector4_2;
                    Class30.smethod_4(fileStream, new byte[]
                    {
                        (byte)(((double)(-(double)vector4_3.x) + 1.0) / 2.0 * 255.0),
                        (byte)(((double)vector4_3.y + 1.0) / 2.0 * 255.0),
                        (byte)(((double)vector4_3.z + 1.0) / 2.0 * 255.0),
                        (byte)(((double)vector4_3.w + 1.0) / 2.0 * 255.0)
                    });
                }
            }
        }
        else
        {
            for (int num28 = 0; num28 < list2.Count; num28++)
            {
                Class32.Class33 class4 = list2[num28];
                Vector3 vector3_3 = class4.vector3_0;
                Class30.smethod_9(fileStream, new float[]
                {
                    vector3_3.x * -1f,
                    vector3_3.y,
                    vector3_3.z
                });
                if (Class32.int_5[1] == 1)
                {
                    Vector3 vector3_4 = class4.vector3_1;
                    Class30.smethod_9(fileStream, new float[]
                    {
                        vector3_4.x * -1f,
                        vector3_4.y,
                        vector3_4.z
                    });
                }
                if (Class32.int_5[2] == 1)
                {
                    Color color_2 = class4.color_0;
                    Class30.smethod_9(fileStream, new float[]
                    {
                        color_2.r,
                        color_2.g,
                        color_2.b,
                        color_2.a
                    });
                }
                if (Class32.int_5[3] == 1)
                {
                    Vector2 vector2_3 = class4.vector2_0;
                    Class30.smethod_9(fileStream, new float[]
                    {
                        vector2_3.x,
                        -vector2_3.y + 1f
                    });
                }
                if (Class32.int_5[4] == 1)
                {
                    Vector2 vector2_4 = class4.vector2_1;
                    Class30.smethod_9(fileStream, new float[]
                    {
                        vector2_4.x,
                        -vector2_4.y + 1f
                    });
                }
                if (Class32.int_5[5] == 1)
                {
                    Vector4 vector4_4 = class4.vector4_0;
                    Vector4 vector4_5 = class4.vector4_1;
                    Class30.smethod_9(fileStream, new float[]
                    {
                        vector4_4.x,
                        vector4_4.y,
                        vector4_4.z,
                        vector4_4.w
                    });
                    Class30.smethod_4(fileStream, new byte[]
                    {
                        (byte)vector4_5.x,
                        (byte)vector4_5.y,
                        (byte)vector4_5.z,
                        (byte)vector4_5.w
                    });
                }
                if (Class32.int_5[6] == 1)
                {
                    Vector4 vector4_6 = class4.vector4_2;
                    Class30.smethod_9(fileStream, new float[]
                    {
                        vector4_6.x * -1f,
                        vector4_6.y,
                        vector4_6.z,
                        vector4_6.w
                    });
                }
            }
        }
        long num29 = fileStream.Position - position10;
        long position11 = fileStream.Position;
        if (sharedMesh.indexFormat == IndexFormat.UInt32 && list2.Count > 65535)
        {
            for (int num30 = 0; num30 < list3.Count; num30++)
            {
                Class30.smethod_7(fileStream, new uint[]
                {
                    (uint)list3[num30]
                });
            }
        }
        else
        {
            for (int num31 = 0; num31 < list3.Count; num31++)
            {
                Class30.smethod_5(fileStream, new ushort[]
                {
                    (ushort)list3[num31]
                });
            }
        }
        long num32 = fileStream.Position - position11;
        if (sharedMesh.bindposes != null && sharedMesh.bindposes.Length != 0)
        {
            Matrix4x4[] array9 = new Matrix4x4[sharedMesh.bindposes.Length];
            for (int num33 = 0; num33 < sharedMesh.bindposes.Length; num33++)
            {
                array9[num33] = sharedMesh.bindposes[num33];
                array9[num33] = array9[num33].inverse;
                Vector3 s;
                Quaternion q;
                Vector3 pos;
                Class31.smethod_0(array9[num33].transpose, out s, out q, out pos);
                pos.x *= -1f;
                q.x *= -1f;
                q.w *= -1f;
                q.Normalize();
                array9[num33] = Matrix4x4.TRS(pos, q, s);
            }
            num17 = fileStream.Position;
            for (int num34 = 0; num34 < sharedMesh.bindposes.Length; num34++)
            {
                Matrix4x4 inverse = array9[num34].inverse;
                for (int num35 = 0; num35 < 16; num35++)
                {
                    Class30.smethod_9(fileStream, new float[]
                    {
                        inverse[num35]
                    });
                }
            }
            num18 = fileStream.Position;
            for (int num36 = 0; num36 < (int)num2; num36++)
            {
                for (int num37 = 0; num37 < array[num36].Count; num37++)
                {
                    for (int num38 = 0; num38 < array[num36][num37].Count; num38++)
                    {
                        Class30.smethod_5(fileStream, new ushort[]
                        {
                            (ushort)array[num36][num37][num38]
                        });
                    }
                }
            }
            long position12 = fileStream.Position;
        }
        uint num39 = 0U;
        long num40 = num18 - position9;
        for (int num41 = 0; num41 < (int)num2; num41++)
        {
            fileStream.Position = array6[num41] + 4L;
            uint num42;
            uint num43;
            if (num2 == 1)
            {
                num42 = 0U;
                num43 = ((sharedMesh.indexFormat == IndexFormat.UInt32) ? ((uint)(num32 / 4L)) : ((uint)(num32 / 2L)));
            }
            else if (num41 == 0)
            {
                num42 = num39;
                num43 = (uint)array5[num41];
            }
            else if (num41 < (int)(num2 - 1))
            {
                num42 = num39;
                num43 = (uint)array5[num41];
            }
            else
            {
                num42 = num39;
                num43 = (uint)array5[num41];
            }
            Class30.smethod_7(fileStream, new uint[]
            {
                num42
            });
            Class30.smethod_7(fileStream, new uint[]
            {
                num43
            });
            num39 += num43;
            fileStream.Position += 2L;
            int num44 = 0;
            for (int num45 = 0; num45 < array[num41].Count; num45++)
            {
                Class30.smethod_7(fileStream, new uint[]
                {
                    (uint)(num44 + (int)num42)
                });
                Class30.smethod_7(fileStream, new uint[]
                {
                    (uint)(array2[num41][num45] - num44)
                });
                num44 = array2[num41][num45];
                Class30.smethod_7(fileStream, new uint[]
                {
                    (uint)num40
                });
                Class30.smethod_7(fileStream, new uint[]
                {
                    (uint)(array[num41][num45].Count * 2)
                });
                num40 += (long)(array[num41][num45].Count * 2);
            }
        }
        fileStream.Position = position6;
        Class30.smethod_7(fileStream, new uint[]
        {
            (uint)(position10 - position9)
        });
        Class30.smethod_7(fileStream, new uint[]
        {
            (uint)list2.Count
        });
        fileStream.Position = position7;
        Class30.smethod_7(fileStream, new uint[]
        {
            (uint)(position11 - position9)
        });
        Class30.smethod_7(fileStream, new uint[]
        {
            (uint)num32
        });
        fileStream.Position = position8 + (long)((list.Count + 1) * 2);
        Class30.smethod_7(fileStream, new uint[]
        {
            (uint)(num17 - position9)
        });
        Class30.smethod_7(fileStream, new uint[]
        {
            (uint)(num18 - num17)
        });
        fileStream.Position = position4;
        Class30.smethod_7(fileStream, new uint[1]);
        Class30.smethod_5(fileStream, new ushort[]
        {
            (ushort)list12.Count
        });
        long position13 = fileStream.Position;
        fileStream.Position = position3 + 2L;
        Class30.smethod_7(fileStream, new uint[]
        {
            (uint)position5
        });
        Class30.smethod_7(fileStream, new uint[]
        {
            (uint)num22
        });
        for (int num46 = 0; num46 < (int)num2; num46++)
        {
            Class30.smethod_7(fileStream, new uint[]
            {
                (uint)array6[num46]
            });
            Class30.smethod_7(fileStream, new uint[]
            {
                (uint)array8[num46]
            });
        }
        fileStream.Position = position2;
        Class30.smethod_7(fileStream, new uint[]
        {
            (uint)position9
        });
        Class30.smethod_7(fileStream, new uint[]
        {
            (uint)(position9 + num26 + num29 + num32 + array8[0])
        });
        fileStream.Close();
    }

    // Token: 0x060001E2 RID: 482 RVA: 0x00019428 File Offset: 0x00017628
    static List<int> smethod_35(Class32.Class34 class34_0)
    {
        List<int> list = new List<int>();
        Vector4 vector4_ = class34_0.class33_0.vector4_1;
        Vector4 vector4_2 = class34_0.class33_1.vector4_1;
        Vector4 vector4_3 = class34_0.class33_2.vector4_1;
        if (list.IndexOf((int)vector4_.x) == -1)
        {
            list.Add((int)vector4_.x);
        }
        if (list.IndexOf((int)vector4_.y) == -1)
        {
            list.Add((int)vector4_.y);
        }
        if (list.IndexOf((int)vector4_.z) == -1)
        {
            list.Add((int)vector4_.z);
        }
        if (list.IndexOf((int)vector4_.w) == -1)
        {
            list.Add((int)vector4_.w);
        }
        if (list.IndexOf((int)vector4_2.x) == -1)
        {
            list.Add((int)vector4_2.x);
        }
        if (list.IndexOf((int)vector4_2.y) == -1)
        {
            list.Add((int)vector4_2.y);
        }
        if (list.IndexOf((int)vector4_2.z) == -1)
        {
            list.Add((int)vector4_2.z);
        }
        if (list.IndexOf((int)vector4_2.w) == -1)
        {
            list.Add((int)vector4_2.w);
        }
        if (list.IndexOf((int)vector4_3.x) == -1)
        {
            list.Add((int)vector4_3.x);
        }
        if (list.IndexOf((int)vector4_3.y) == -1)
        {
            list.Add((int)vector4_3.y);
        }
        if (list.IndexOf((int)vector4_3.z) == -1)
        {
            list.Add((int)vector4_3.z);
        }
        if (list.IndexOf((int)vector4_3.w) == -1)
        {
            list.Add((int)vector4_3.w);
        }
        return list;
    }

    // Token: 0x060001E3 RID: 483 RVA: 0x000195BC File Offset: 0x000177BC
    static List<int> smethod_36(List<int> list_2, List<int> list_3)
    {
        List<int> list = new List<int>();
        for (int i = 0; i < list_2.Count; i++)
        {
            if (list_3.IndexOf(list_2[i]) == -1)
            {
                list.Add(list_2[i]);
            }
        }
        return list;
    }

    // Token: 0x060001E4 RID: 484 RVA: 0x00019600 File Offset: 0x00017800
    static void smethod_37(List<int> list_2, Class32.Class33 class33_0)
    {
        if (class33_0.bool_0)
        {
            for (int i = 0; i < 4; i++)
            {
                class33_0.vector4_1[i] = (float)list_2.IndexOf((int)class33_0.vector4_1[i]);
            }
            class33_0.bool_0 = false;
        }
    }

    // Token: 0x060001E5 RID: 485 RVA: 0x00019648 File Offset: 0x00017848
    static Class32.Class33 smethod_38(Class32.Class33 class33_0, int int_13, int int_14, List<Class32.Class33> list_2)
    {
        if (class33_0.int_1 == -1 && class33_0.int_2 == -1)
        {
            class33_0.int_1 = int_13;
            class33_0.int_2 = int_14;
            return class33_0;
        }
        if (class33_0.int_1 == int_13 && class33_0.int_2 == int_14)
        {
            return class33_0;
        }
        if (class33_0.dictionary_0 == null)
        {
            class33_0.dictionary_0 = new Dictionary<string, int>();
            Class32.Class33 @class = new Class32.Class33();
            list_2.Add(@class);
            @class.method_0(class33_0);
            @class.int_0 = list_2.Count - 1;
            class33_0.dictionary_0.Add(int_13.ToString() + "," + int_14.ToString(), list_2.Count - 1);
            return @class;
        }
        if (class33_0.dictionary_0.ContainsKey(int_13.ToString() + "," + int_14.ToString()))
        {
            return list_2[class33_0.dictionary_0[int_13.ToString() + "," + int_14.ToString()]];
        }
        Class32.Class33 class2 = new Class32.Class33();
        list_2.Add(class2);
        class2.method_0(class33_0);
        class2.int_0 = list_2.Count - 1;
        class33_0.dictionary_0.Add(int_13.ToString() + "," + int_14.ToString(), list_2.Count - 1);
        return class2;
    }

    // Token: 0x060001E6 RID: 486 RVA: 0x0001978C File Offset: 0x0001798C
    static void smethod_39(GameObject gameObject_0, Class19 class19_0, int int_13)
    {
        TerrainData terrainData = gameObject_0.GetComponent<Terrain>().terrainData;
        int num = terrainData.heightmapWidth;
        int num2 = terrainData.heightmapHeight;
        Vector3 size = terrainData.size;
        int num3 = Class32.int_2;
        Vector3 b = new Vector3(size.x / (float)(num - 1) * (float)num3, size.y, size.z / (float)(num2 - 1) * (float)num3);
        Vector2 b2 = new Vector2(1f / (float)(num - 1), 1f / (float)(num2 - 1));
        float[,] heights = terrainData.GetHeights(0, 0, num, num2);
        num = (num - 1) / num3 + 1;
        num2 = (num2 - 1) / num3 + 1;
        Vector3[] array = new Vector3[num * num2];
        Vector3[] array2 = new Vector3[num * num2];
        Vector2[] array3 = new Vector2[num * num2];
        int[] array4 = new int[(num - 1) * (num2 - 1) * 6];
        for (int i = 0; i < num2; i++)
        {
            for (int j = 0; j < num; j++)
            {
                array[i * num + j] = Vector3.Scale(new Vector3((float)i, heights[j * num3, i * num3], (float)j), b);
                array3[i * num + j] = Vector2.Scale(new Vector2((float)(j * num3), 1f - (float)(i * num3)), b2) - new Vector2(0f, 1f / (float)(terrainData.heightmapHeight - 1));
                float x = array3[i * num + j].x;
                float y = array3[i * num + j].y;
                array3[i * num + j] = new Vector2(x * Mathf.Cos(1.57079637f) - y * Mathf.Sin(1.57079637f), x * Mathf.Sin(1.57079637f) + y * Mathf.Cos(1.57079637f));
            }
        }
        int num4 = 0;
        for (int k = 0; k < num2 - 1; k++)
        {
            for (int l = 0; l < num - 1; l++)
            {
                array4[num4++] = k * num + l;
                array4[num4++] = k * num + l + 1;
                array4[num4++] = (k + 1) * num + l;
                array4[num4++] = (k + 1) * num + l;
                array4[num4++] = k * num + l + 1;
                array4[num4++] = (k + 1) * num + l + 1;
            }
        }
        for (int m = 0; m < array.Length; m++)
        {
            List<Vector3> list = new List<Vector3>();
            for (int n = 0; n < array4.Length; n += 3)
            {
                if (array4[n] == m || array4[n + 1] == m || array4[n + 2] == m)
                {
                    list.Add(array[array4[n]]);
                    list.Add(array[array4[n + 1]]);
                    list.Add(array[array4[n + 2]]);
                }
            }
            float num5 = 0f;
            List<float> list2 = new List<float>();
            List<Vector3> list3 = new List<Vector3>();
            for (int num6 = 0; num6 < list.Count; num6 += 3)
            {
                Vector3 vector = list[num6];
                Vector3 vector2 = list[num6 + 1];
                Vector3 vector3 = list[num6 + 2];
                float num7 = Mathf.Sqrt(Mathf.Pow(vector.x - vector2.x, 2f) + Mathf.Pow(vector.y - vector2.y, 2f) + Mathf.Pow(vector.z - vector2.z, 2f));
                float num8 = Mathf.Sqrt(Mathf.Pow(vector.x - vector3.x, 2f) + Mathf.Pow(vector.y - vector3.y, 2f) + Mathf.Pow(vector.z - vector3.z, 2f));
                float num9 = Mathf.Sqrt(Mathf.Pow(vector3.x - vector2.x, 2f) + Mathf.Pow(vector3.y - vector2.y, 2f) + Mathf.Pow(vector3.z - vector2.z, 2f));
                float num10 = (num7 + num8 + num9) / 2f;
                float num11 = Mathf.Sqrt(num10 * (num10 - num7) * (num10 - num8) * (num10 - num9));
                list2.Add(num11);
                num5 += num11;
                list3.Add(Vector3.Cross(vector - vector2, vector - vector3).normalized);
            }
            Vector3 a = default(Vector3);
            for (int num12 = 0; num12 < list3.Count; num12++)
            {
                a += list3[num12] * list2[num12] / num5;
            }
            array2[m] = a.normalized;
        }
        int num13 = 65534;
        List<List<Class32.Struct6>> list4 = new List<List<Class32.Struct6>>();
        List<Class32.Struct6> list5 = new List<Class32.Struct6>();
        list4.Add(list5);
        List<List<int>> list6 = new List<List<int>>();
        List<int> list7 = new List<int>();
        list6.Add(list7);
        List<int> list8 = new List<int>();
        for (int num14 = 0; num14 < array4.Length; num14++)
        {
            if (list5.Count == num13)
            {
                list5 = new List<Class32.Struct6>();
                list4.Add(list5);
                list7 = new List<int>();
                list6.Add(list7);
                list8 = new List<int>();
            }
            int num15 = array4[num14];
            Class32.Struct6 item;
            item.vector3_0 = array[num15];
            item.vector3_1 = array2[num15];
            item.vector2_0 = array3[num15];
            int num16 = list8.IndexOf(num15);
            if (num16 == -1)
            {
                list5.Add(item);
                list7.Add(list5.Count - 1);
                list8.Add(num15);
            }
            else
            {
                list7.Add(num16);
            }
        }
        int count = list4.Count;
        string text = Class32.smethod_62("terrain_" + gameObject_0.name, true);
        string str = "terrain/" + text + ".lm";
        class19_0.method_22("meshPath", str);
        Class19 @class = new Class19(Class19.Enum2.const_4);
        class19_0.method_23("materials", @class);
        string str2 = Class32.smethod_62("terrain_" + gameObject_0.name, true);
        string text2 = "terrain/" + str2 + ".lmat";
        Class19 class2 = new Class19(Class19.Enum2.const_3);
        class2.method_22("type", "Laya.ExtendTerrainMaterial");
        class2.method_22("path", text2);
        for (int num17 = 0; num17 < count; num17++)
        {
            @class.method_16(class2);
        }
        string text3 = Class32.string_2 + "/" + str;
        int num18 = 1 + count;
        ushort num19 = 32;
        string item2 = "POSITION,NORMAL,UV";
        long[] array5 = new long[count];
        long[] array6 = new long[count];
        long[] array7 = new long[count];
        long[] array8 = new long[count];
        long[] array9 = new long[count];
        List<string> list9 = new List<string>();
        list9.Add("MESH");
        list9.Add("SUBMESH");
        FileStream fileStream = Class30.smethod_0(text3, null);
        string text4 = "LAYAMODEL:0301";
        Class30.smethod_12(fileStream, text4);
        long position = fileStream.Position;
        long position2 = fileStream.Position;
        Class30.smethod_7(fileStream, new uint[1]);
        Class30.smethod_7(fileStream, new uint[1]);
        long position3 = fileStream.Position;
        Class30.smethod_5(fileStream, new ushort[]
        {
            (ushort)num18
        });
        for (int num20 = 0; num20 < num18; num20++)
        {
            Class30.smethod_7(fileStream, new uint[1]);
            Class30.smethod_7(fileStream, new uint[1]);
        }
        long position4 = fileStream.Position;
        Class30.smethod_7(fileStream, new uint[1]);
        Class30.smethod_5(fileStream, new ushort[1]);
        long position5 = fileStream.Position;
        Class30.smethod_5(fileStream, new ushort[]
        {
            (ushort)list9.IndexOf("MESH")
        });
        list9.Add(text);
        Class30.smethod_5(fileStream, new ushort[]
        {
            (ushort)list9.IndexOf(text)
        });
        Class30.smethod_5(fileStream, new ushort[]
        {
            (ushort)list4.Count
        });
        list9.Add(item2);
        for (int num20 = 0; num20 < list4.Count; num20++)
        {
            array5[num20] = fileStream.Position;
            Class30.smethod_7(fileStream, new uint[1]);
            Class30.smethod_7(fileStream, new uint[1]);
            Class30.smethod_5(fileStream, new ushort[]
            {
                (ushort)list9.IndexOf(item2)
            });
        }
        long position6 = fileStream.Position;
        Class30.smethod_7(fileStream, new uint[1]);
        Class30.smethod_7(fileStream, new uint[1]);
        long position7 = fileStream.Position;
        Class30.smethod_5(fileStream, new ushort[1]);
        Class30.smethod_7(fileStream, new uint[1]);
        Class30.smethod_7(fileStream, new uint[1]);
        Class30.smethod_7(fileStream, new uint[1]);
        Class30.smethod_7(fileStream, new uint[1]);
        long num21 = fileStream.Position - position5;
        for (int num20 = 0; num20 < count; num20++)
        {
            array7[num20] = fileStream.Position;
            Class30.smethod_5(fileStream, new ushort[]
            {
                (ushort)list9.IndexOf("SUBMESH")
            });
            Class30.smethod_5(fileStream, new ushort[1]);
            Class30.smethod_7(fileStream, new uint[1]);
            Class30.smethod_7(fileStream, new uint[1]);
            Class30.smethod_7(fileStream, new uint[1]);
            Class30.smethod_7(fileStream, new uint[1]);
            Class30.smethod_5(fileStream, new ushort[]
            {
                1
            });
            Class30.smethod_7(fileStream, new uint[1]);
            Class30.smethod_7(fileStream, new uint[1]);
            Class30.smethod_7(fileStream, new uint[1]);
            Class30.smethod_7(fileStream, new uint[1]);
            array8[num20] = fileStream.Position;
            array9[num20] = array8[num20] - array7[num20];
        }
        long position8 = fileStream.Position;
        for (int num20 = 0; num20 < list9.Count; num20++)
        {
            Class30.smethod_12(fileStream, list9[num20]);
        }
        long num22 = fileStream.Position - position8;
        long position9 = fileStream.Position;
        for (int num20 = 0; num20 < list4.Count; num20++)
        {
            array6[num20] = fileStream.Position;
            List<Class32.Struct6> list10 = list4[num20];
            for (int num23 = 0; num23 < list10.Count; num23++)
            {
                Class32.Struct6 @struct = list10[num23];
                Vector3 vector3_ = @struct.vector3_0;
                Class30.smethod_9(fileStream, new float[]
                {
                    vector3_.x * -1f,
                    vector3_.y,
                    vector3_.z
                });
                Vector3 vector3_2 = @struct.vector3_1;
                Class30.smethod_9(fileStream, new float[]
                {
                    vector3_2.x * -1f,
                    vector3_2.y,
                    vector3_2.z
                });
                Vector2 vector2_ = @struct.vector2_0;
                Class30.smethod_9(fileStream, new float[]
                {
                    vector2_.x,
                    vector2_.y * -1f + 1f
                });
            }
        }
        long num24 = fileStream.Position - position9;
        long position10 = fileStream.Position;
        for (int num20 = 0; num20 < list6.Count; num20++)
        {
            List<int> list11 = list6[num20];
            for (int num23 = 0; num23 < list11.Count; num23++)
            {
                Class30.smethod_5(fileStream, new ushort[]
                {
                    (ushort)list11[num23]
                });
            }
        }
        long num25 = fileStream.Position - position10;
        uint num26 = 0U;
        uint num27 = 0U;
        for (int num20 = 0; num20 < count; num20++)
        {
            fileStream.Position = array7[num20] + 2L;
            Class30.smethod_5(fileStream, new ushort[]
            {
                (ushort)num20
            });
            uint num28 = num26;
            uint count2 = (uint)list4[num20].Count;
            uint num29 = num27;
            uint count3 = (uint)list6[num20].Count;
            Class30.smethod_7(fileStream, new uint[]
            {
                num28
            });
            Class30.smethod_7(fileStream, new uint[]
            {
                count2
            });
            Class30.smethod_7(fileStream, new uint[]
            {
                num29
            });
            Class30.smethod_7(fileStream, new uint[]
            {
                count3
            });
            num26 += count2;
            num27 += count3;
            fileStream.Position += 2L;
            Class30.smethod_7(fileStream, new uint[]
            {
                num29
            });
            Class30.smethod_7(fileStream, new uint[]
            {
                count3
            });
        }
        for (int num20 = 0; num20 < list4.Count; num20++)
        {
            fileStream.Position = array5[num20];
            Class30.smethod_7(fileStream, new uint[]
            {
                (uint)(array6[num20] - position8)
            });
            Class30.smethod_7(fileStream, new uint[]
            {
                (uint)(list4[num20].Count * (int)num19)
            });
        }
        fileStream.Position = position6;
        Class30.smethod_7(fileStream, new uint[]
        {
            (uint)(position10 - position8)
        });
        Class30.smethod_7(fileStream, new uint[]
        {
            (uint)num25
        });
        fileStream.Position = position4;
        Class30.smethod_7(fileStream, new uint[1]);
        Class30.smethod_5(fileStream, new ushort[]
        {
            (ushort)list9.Count
        });
        long position11 = fileStream.Position;
        fileStream.Position = position3 + 2L;
        Class30.smethod_7(fileStream, new uint[]
        {
            (uint)position5
        });
        Class30.smethod_7(fileStream, new uint[]
        {
            (uint)num21
        });
        for (int num20 = 0; num20 < count; num20++)
        {
            Class30.smethod_7(fileStream, new uint[]
            {
                (uint)array7[num20]
            });
            Class30.smethod_7(fileStream, new uint[]
            {
                (uint)array9[num20]
            });
        }
        fileStream.Position = position2;
        Class30.smethod_7(fileStream, new uint[]
        {
            (uint)position8
        });
        Class30.smethod_7(fileStream, new uint[]
        {
            (uint)(position8 + num22 + num24 + num25 + array9[0])
        });
        fileStream.Close();
    }

    // Token: 0x060001E7 RID: 487 RVA: 0x0001A660 File Offset: 0x00018860
    static void smethod_40(GameObject gameObject_0, Class19 class19_0)
    {
        TerrainData terrainData = gameObject_0.GetComponent<Terrain>().terrainData;
        string str = Class32.smethod_62("terrain_" + gameObject_0.name, true);
        string str2 = "terrain/" + str + ".lmat";
        string string_ = Class32.string_2 + "/" + str2;
        Class19 @class = new Class19(Class19.Enum2.const_3);
        Class19 class2 = new Class19(Class19.Enum2.const_3);
        Class19 class3 = new Class19(Class19.Enum2.const_4);
        Class19 class4 = new Class19(Class19.Enum2.const_4);
        Class19 class5 = new Class19(Class19.Enum2.const_4);
        Class19 class19_ = new Class19(Class19.Enum2.const_4);
        @class.method_22("version", Class32.string_8);
        @class.method_23("props", class2);
        class2.method_22("type", "Laya.ExtendTerrainMaterial");
        class2.method_22("name", str);
        class2.method_23("renderStates", class3);
        Class19 class6 = new Class19(Class19.Enum2.const_3);
        class3.method_16(class6);
        class6.method_19("cull", 2);
        class6.method_19("blend", 0);
        class6.method_19("srcBlend", 1);
        class6.method_19("dstBlend", 0);
        class6.method_17("depthWrite", true);
        class6.method_19("depthTest", 515);
        class2.method_17("alphaTest", false);
        class2.method_19("renderQueue", 1);
        class2.method_23("textures", class4);
        class2.method_23("vectors", class5);
        class2.method_23("defines", class19_);
        if (terrainData.alphamapTextures.Length > 0)
        {
            for (int i = 0; i < 1; i++)
            {
                Class19 class7 = new Class19(Class19.Enum2.const_3);
                class7.method_22("name", "splatAlphaTexture");
                Color[] pixels = terrainData.alphamapTextures[i].GetPixels();
                int num = pixels.Length;
                int num2 = (int)Mathf.Sqrt((float)num);
                Texture2D texture2D = new Texture2D(num2, num2);
                Color[] array = new Color[num];
                for (int j = 0; j < num; j++)
                {
                    array[j] = pixels[j];
                    if (array[j].a == 0f)
                    {
                        array[j].a = 0.03125f;
                    }
                }
                texture2D.SetPixels(array);
                texture2D.Apply();
                FileStream fileStream = File.Open(Class32.string_2 + "/terrain/splatAlphaTexture.png", FileMode.Create);
                new BinaryWriter(fileStream).Write(texture2D.EncodeToPNG());
                fileStream.Close();
                class7.method_22("path", "splatAlphaTexture.png");
                class4.method_16(class7);
            }
        }
        int num3 = terrainData.terrainLayers.Length;
        for (int k = 0; k < num3; k++)
        {
            TerrainLayer terrainLayer = terrainData.terrainLayers[k];
            Class19 class8 = new Class19(Class19.Enum2.const_3);
            class8.method_22("name", "diffuseTexture" + (k + 1));
            Class32.smethod_45(class8, terrainLayer.diffuseTexture, Class32.int_3, Class32.smethod_62(string_, false), null, "path");
            class4.method_16(class8);
            Class19 class9 = new Class19(Class19.Enum2.const_3);
            class9.method_22("name", "diffuseScaleOffset" + (k + 1));
            Class19 class10 = new Class19(Class19.Enum2.const_4);
            class10.method_12(terrainData.size.x / terrainLayer.tileSize.x);
            class10.method_12(terrainData.size.z / terrainLayer.tileSize.y);
            class10.method_12(terrainLayer.tileOffset.x);
            class10.method_12(terrainLayer.tileOffset.y);
            class9.method_23("value", class10);
            class5.method_16(class9);
        }
        Class19 class11 = new Class19(Class19.Enum2.const_3);
        class11.method_22("name", "albedo");
        Class19 class12 = new Class19(Class19.Enum2.const_4);
        class12.method_12(1f);
        class12.method_12(1f);
        class12.method_12(1f);
        class12.method_12(1f);
        class11.method_23("value", class12);
        class5.method_16(class11);
        Class19 class13 = new Class19(Class19.Enum2.const_3);
        class13.method_22("name", "ambientColor");
        Class19 class14 = new Class19(Class19.Enum2.const_4);
        class14.method_12(0f);
        class14.method_12(0f);
        class14.method_12(0f);
        class13.method_23("value", class14);
        class5.method_16(class13);
        Class19 class15 = new Class19(Class19.Enum2.const_3);
        class15.method_22("name", "diffuseColor");
        Class19 class16 = new Class19(Class19.Enum2.const_4);
        class16.method_12(1f);
        class16.method_12(1f);
        class16.method_12(1f);
        class15.method_23("value", class16);
        class5.method_16(class15);
        Class19 class17 = new Class19(Class19.Enum2.const_3);
        class17.method_22("name", "specularColor");
        Class19 class18 = new Class19(Class19.Enum2.const_4);
        class18.method_12(1f);
        class18.method_12(1f);
        class18.method_12(1f);
        class18.method_12(8f);
        class17.method_23("value", class18);
        class5.method_16(class17);
        Class30.smethod_0(string_, @class);
    }

    // Token: 0x060001E8 RID: 488 RVA: 0x0001AB9C File Offset: 0x00018D9C
    static void smethod_41(Material material_0, string string_11, string string_12)
    {
        Class19 @class = new Class19(Class19.Enum2.const_3);
        Class19 class2 = new Class19(Class19.Enum2.const_3);
        Class19 class3 = new Class19(Class19.Enum2.const_4);
        Class19 class4 = new Class19(Class19.Enum2.const_4);
        Class19 class5 = new Class19(Class19.Enum2.const_4);
        Class19 class6 = new Class19(Class19.Enum2.const_4);
        @class.method_22("version", Class32.string_8);
        @class.method_23("props", class2);
        if (string_12 == "BlinnPhong")
        {
            class2.method_22("type", "Laya.BlinnPhongMaterial");
        }
        else if (string_12 == "Unlit")
        {
            class2.method_22("type", "Laya.UnlitMaterial");
        }
        else if (string_12 == "Effect")
        {
            class2.method_22("type", "Laya.EffectMaterial");
        }
        else if (string_12 == "PBR(Standard)")
        {
            class2.method_22("type", "Laya.PBRStandardMaterial");
        }
        else if (string_12 == "PBR(Specular)")
        {
            class2.method_22("type", "Laya.PBRSpecularMaterial");
        }
        else
        {
            class2.method_22("type", "Laya.BlinnPhongMaterial");
        }
        List<string> list = material_0.shaderKeywords.ToList<string>();
        string name = material_0.name;
        class2.method_22("name", name);
        class2.method_23("renderStates", class3);
        Class19 class7 = new Class19(Class19.Enum2.const_3);
        class3.method_16(class7);
        if (material_0.HasProperty("_Cull"))
        {
            class7.method_19("cull", material_0.GetInt("_Cull"));
        }
        else
        {
            class7.method_19("cull", 2);
        }
        if (list.IndexOf("_ALPHABLEND_ON") != -1)
        {
            class7.method_19("blend", 1);
        }
        else
        {
            class7.method_19("blend", 0);
        }
        if (material_0.HasProperty("_SrcBlend"))
        {
            switch (material_0.GetInt("_SrcBlend"))
            {
                case 0:
                    class7.method_19("srcBlend", 0);
                    break;
                case 1:
                    class7.method_19("srcBlend", 1);
                    break;
                case 2:
                    class7.method_19("srcBlend", 774);
                    break;
                case 3:
                    class7.method_19("srcBlend", 768);
                    break;
                case 4:
                    class7.method_19("srcBlend", 775);
                    break;
                case 5:
                    class7.method_19("srcBlend", 770);
                    break;
                case 6:
                    class7.method_19("srcBlend", 769);
                    break;
                case 7:
                    class7.method_19("srcBlend", 772);
                    break;
                case 8:
                    class7.method_19("srcBlend", 773);
                    break;
                case 9:
                    class7.method_19("srcBlend", 776);
                    break;
                case 10:
                    class7.method_19("srcBlend", 771);
                    break;
                default:
                    class7.method_19("srcBlend", 1);
                    break;
            }
        }
        else
        {
            class7.method_19("srcBlend", 1);
        }
        if (material_0.HasProperty("_DstBlend"))
        {
            switch (material_0.GetInt("_DstBlend"))
            {
                case 0:
                    class7.method_19("dstBlend", 0);
                    break;
                case 1:
                    class7.method_19("dstBlend", 1);
                    break;
                case 2:
                    class7.method_19("dstBlend", 774);
                    break;
                case 3:
                    class7.method_19("dstBlend", 768);
                    break;
                case 4:
                    class7.method_19("dstBlend", 775);
                    break;
                case 5:
                    class7.method_19("dstBlend", 770);
                    break;
                case 6:
                    class7.method_19("dstBlend", 769);
                    break;
                case 7:
                    class7.method_19("dstBlend", 772);
                    break;
                case 8:
                    class7.method_19("dstBlend", 773);
                    break;
                case 9:
                    class7.method_19("dstBlend", 776);
                    break;
                case 10:
                    class7.method_19("dstBlend", 771);
                    break;
                default:
                    class7.method_19("dstBlend", 0);
                    break;
            }
        }
        else
        {
            class7.method_19("dstBlend", 0);
        }
        if (material_0.HasProperty("_ZWrite"))
        {
            if (material_0.GetInt("_ZWrite") == 1)
            {
                class7.method_17("depthWrite", true);
            }
            else
            {
                class7.method_17("depthWrite", false);
            }
        }
        else
        {
            class7.method_17("depthWrite", true);
        }
        if (material_0.HasProperty("_ZTest"))
        {
            switch (material_0.GetInt("_ZTest"))
            {
                case 0:
                    class7.method_19("depthTest", 0);
                    break;
                case 1:
                    class7.method_19("depthTest", 512);
                    break;
                case 2:
                    class7.method_19("depthTest", 513);
                    break;
                case 3:
                    class7.method_19("depthTest", 514);
                    break;
                case 4:
                    class7.method_19("depthTest", 515);
                    break;
                case 5:
                    class7.method_19("depthTest", 516);
                    break;
                case 6:
                    class7.method_19("depthTest", 517);
                    break;
                case 7:
                    class7.method_19("depthTest", 518);
                    break;
                case 8:
                    class7.method_19("depthTest", 519);
                    break;
                default:
                    class7.method_19("depthTest", 0);
                    break;
            }
        }
        else
        {
            class7.method_19("depthTest", 515);
        }
        if (material_0.HasProperty("_IsVertexColor"))
        {
            class2.method_17("enableVertexColor", material_0.GetInt("_IsVertexColor") != 0);
        }
        if (list.IndexOf("_ALPHATEST_ON") != -1)
        {
            class2.method_17("alphaTest", true);
        }
        else
        {
            class2.method_17("alphaTest", false);
        }
        if (material_0.HasProperty("_Cutoff"))
        {
            class2.method_18("alphaTestValue", material_0.GetFloat("_Cutoff"));
        }
        else
        {
            class2.method_18("alphaTestValue", 0.5f);
        }
        class2.method_19("renderQueue", material_0.renderQueue);
        if (material_0.HasProperty("_AlbedoIntensity"))
        {
            class2.method_18("albedoIntensity", material_0.GetFloat("_AlbedoIntensity"));
        }
        if (material_0.HasProperty("_Metallic"))
        {
            class2.method_18("metallic", material_0.GetFloat("_Metallic"));
        }
        if (material_0.HasProperty("_Glossiness"))
        {
            class2.method_18("smoothness", material_0.GetFloat("_Glossiness"));
        }
        if (material_0.HasProperty("_GlossMapScale"))
        {
            class2.method_18("smoothnessTextureScale", material_0.GetFloat("_GlossMapScale"));
        }
        if (material_0.HasProperty("_SmoothnessTextureChannel"))
        {
            class2.method_18("smoothnessSource", material_0.GetFloat("_SmoothnessTextureChannel"));
        }
        if (material_0.HasProperty("_BumpScale"))
        {
            class2.method_18("normalTextureScale", material_0.GetFloat("_BumpScale"));
        }
        if (material_0.HasProperty("_Parallax"))
        {
            class2.method_18("parallaxTextureScale", material_0.GetFloat("_Parallax"));
        }
        if (material_0.HasProperty("_OcclusionStrength"))
        {
            class2.method_18("occlusionTextureStrength", material_0.GetFloat("_OcclusionStrength"));
        }
        if (material_0.HasProperty("_Reflection"))
        {
            if ((double)material_0.GetFloat("_Reflection") == 1.0)
            {
                class2.method_17("enableReflection", true);
            }
            else
            {
                class2.method_17("enableReflection", false);
            }
        }
        if (material_0.HasProperty("_EnableEmission"))
        {
            if ((double)material_0.GetFloat("_EnableEmission") == 1.0)
            {
                class2.method_17("enableEmission", true);
            }
            else
            {
                class2.method_17("enableEmission", false);
            }
        }
        if (material_0.HasProperty("_MainTex"))
        {
            Texture2D texture2D = (Texture2D)material_0.GetTexture("_MainTex");
            if (texture2D != null)
            {
                Class19 class8 = new Class19(Class19.Enum2.const_3);
                class8.method_22("name", "albedoTexture");
                Class32.smethod_45(class8, texture2D, Class32.int_3, string_11, name, "path");
                class4.method_16(class8);
            }
            Class19 class9 = new Class19(Class19.Enum2.const_3);
            class9.method_22("name", "tilingOffset");
            Class19 class10 = new Class19(Class19.Enum2.const_4);
            Vector2 textureScale = material_0.GetTextureScale("_MainTex");
            Vector2 textureOffset = material_0.GetTextureOffset("_MainTex");
            class10.method_12(textureScale.x);
            class10.method_12(textureScale.y);
            class10.method_12(textureOffset.x);
            class10.method_12(textureOffset.y);
            class9.method_23("value", class10);
            class5.method_16(class9);
        }
        if (material_0.HasProperty("_MetallicGlossMap"))
        {
            Texture2D texture2D2 = (Texture2D)material_0.GetTexture("_MetallicGlossMap");
            if (texture2D2 != null)
            {
                Class19 class11 = new Class19(Class19.Enum2.const_3);
                class11.method_22("name", "metallicGlossTexture");
                Class32.smethod_45(class11, texture2D2, Class32.int_3, string_11, name, "path");
                class4.method_16(class11);
            }
        }
        if (material_0.HasProperty("_Lighting"))
        {
            if ((double)material_0.GetFloat("_Lighting") == 0.0)
            {
                class2.method_17("enableLighting", true);
            }
            else
            {
                class2.method_17("enableLighting", false);
            }
        }
        if (!material_0.HasProperty("_Lighting") || (material_0.HasProperty("_Lighting") && (double)material_0.GetFloat("_Lighting") == 0.0))
        {
            if (material_0.HasProperty("_Shininess"))
            {
                class2.method_18("shininess", material_0.GetFloat("_Shininess"));
            }
            if (material_0.HasProperty("_SpecGlossMap"))
            {
                Texture2D texture2D3 = (Texture2D)material_0.GetTexture("_SpecGlossMap");
                if (texture2D3 != null)
                {
                    Class19 class12 = new Class19(Class19.Enum2.const_3);
                    class12.method_22("name", "specularTexture");
                    Class32.smethod_45(class12, texture2D3, Class32.int_3, string_11, name, "path");
                    class4.method_16(class12);
                }
            }
            if (material_0.HasProperty("_BumpMap"))
            {
                Texture2D texture2D4 = (Texture2D)material_0.GetTexture("_BumpMap");
                if (texture2D4 != null)
                {
                    Class19 class13 = new Class19(Class19.Enum2.const_3);
                    class13.method_22("name", "normalTexture");
                    Class32.smethod_45(class13, texture2D4, Class32.int_3, string_11, name, "path");
                    class4.method_16(class13);
                }
            }
            Class19 class14 = new Class19(Class19.Enum2.const_3);
            class14.method_22("name", "specularColor");
            Class19 class15 = new Class19(Class19.Enum2.const_4);
            if (material_0.HasProperty("_SpecColor"))
            {
                Color color = material_0.GetColor("_SpecColor");
                class15.method_12(color.r);
                class15.method_12(color.g);
                class15.method_12(color.b);
                class15.method_12(color.a);
                class14.method_23("value", class15);
                class5.method_16(class14);
            }
        }
        if (material_0.HasProperty("_ParallaxMap"))
        {
            Texture2D texture2D5 = (Texture2D)material_0.GetTexture("_ParallaxMap");
            if (texture2D5 != null)
            {
                Class19 class16 = new Class19(Class19.Enum2.const_3);
                class16.method_22("name", "parallaxTexture");
                Class32.smethod_45(class16, texture2D5, Class32.int_3, string_11, name, "path");
                class4.method_16(class16);
            }
        }
        if (material_0.HasProperty("_OcclusionMap"))
        {
            Texture2D texture2D6 = (Texture2D)material_0.GetTexture("_OcclusionMap");
            if (texture2D6 != null)
            {
                Class19 class17 = new Class19(Class19.Enum2.const_3);
                class17.method_22("name", "occlusionTexture");
                Class32.smethod_45(class17, texture2D6, Class32.int_3, string_11, name, "path");
                class4.method_16(class17);
            }
        }
        if (material_0.HasProperty("_EmissionMap"))
        {
            Texture2D texture2D7 = (Texture2D)material_0.GetTexture("_EmissionMap");
            if (texture2D7 != null)
            {
                Class19 class18 = new Class19(Class19.Enum2.const_3);
                class18.method_22("name", "emissionTexture");
                Class32.smethod_45(class18, texture2D7, Class32.int_3, string_11, name, "path");
                class4.method_16(class18);
            }
        }
        Class19 class19 = new Class19(Class19.Enum2.const_3);
        class19.method_22("name", "albedoColor");
        Class19 class20 = new Class19(Class19.Enum2.const_4);
        if (material_0.HasProperty("_Color"))
        {
            Color color2 = material_0.GetColor("_Color");
            class20.method_12(color2.r);
            class20.method_12(color2.g);
            class20.method_12(color2.b);
            class20.method_12(color2.a);
            class19.method_23("value", class20);
            class5.method_16(class19);
        }
        Class19 class21 = new Class19(Class19.Enum2.const_3);
        class21.method_22("name", "emissionColor");
        Class19 class22 = new Class19(Class19.Enum2.const_4);
        if (material_0.HasProperty("_EmissionColor"))
        {
            Color color3 = material_0.GetColor("_EmissionColor");
            class22.method_12(color3.r);
            class22.method_12(color3.g);
            class22.method_12(color3.b);
            class22.method_12(color3.a);
            class21.method_23("value", class22);
            class5.method_16(class21);
        }
        if ((string_12 == "PBR(Standard)" || string_12 == "PBR(Specular)") && material_0.HasProperty("_Mode") && material_0.GetInt("_Mode") == 3)
        {
            class6.method_14("ALPHAPREMULTIPLY");
        }
        if (string_12 == "Unlit")
        {
            if (material_0.HasProperty("_Mode") && material_0.GetInt("_Mode") == 3)
            {
                class6.method_14("ADDTIVEFOG");
            }
            if (material_0.HasProperty("_EnableVertexColor") && material_0.GetInt("_EnableVertexColor") == 1)
            {
                class6.method_14("ENABLEVERTEXCOLOR");
            }
        }
        class2.method_23("textures", class4);
        class2.method_23("vectors", class5);
        class2.method_23("defines", class6);
        Class30.smethod_0(string_11, @class);
    }

    // Token: 0x060001E9 RID: 489 RVA: 0x0001B980 File Offset: 0x00019B80
    static void smethod_42(Material material_0, string string_11, string string_12)
    {
        string name = material_0.shader.name;
        Class19 @class = new Class19(Class19.Enum2.const_3);
        Class19 class2 = new Class19(Class19.Enum2.const_3);
        Class19 class3 = new Class19(Class19.Enum2.const_4);
        Class19 class4 = new Class19(Class19.Enum2.const_4);
        Class19 class5 = new Class19(Class19.Enum2.const_4);
        Class19 class6 = new Class19(Class19.Enum2.const_4);
        @class.method_22("version", Class32.string_8);
        @class.method_23("props", class2);
        if (string_12 == "Trail")
        {
            class2.method_22("type", "Laya.TrailMaterial");
        }
        else if (string_12 == "Unlit")
        {
            class2.method_22("type", "Laya.LineMaterial");
        }
        else if (string_12 == "Effect")
        {
            class2.method_22("type", "Laya.EffectMaterial");
        }
        else if (string_12 == "ShurikenParticle")
        {
            class2.method_22("type", "Laya.ShurikenParticleMaterial");
        }
        else
        {
            class2.method_22("type", "Laya.EffectMaterial");
        }
        class2.method_23("renderStates", class3);
        Class19 class7 = new Class19(Class19.Enum2.const_3);
        class3.method_16(class7);
        List<string> list = material_0.shaderKeywords.ToList<string>();
        string name2 = material_0.name;
        class2.method_22("name", name2);
        class7.method_19("cull", 0);
        if (list.IndexOf("_ALPHABLEND_ON") != -1)
        {
            class7.method_19("blend", 1);
        }
        else
        {
            class7.method_19("blend", 0);
        }
        if (material_0.HasProperty("_SrcBlend"))
        {
            switch (material_0.GetInt("_SrcBlend"))
            {
                case 0:
                    class7.method_19("srcBlend", 0);
                    break;
                case 1:
                    class7.method_19("srcBlend", 1);
                    break;
                case 2:
                    class7.method_19("srcBlend", 774);
                    break;
                case 3:
                    class7.method_19("srcBlend", 768);
                    break;
                case 4:
                    class7.method_19("srcBlend", 775);
                    break;
                case 5:
                    class7.method_19("srcBlend", 770);
                    break;
                case 6:
                    class7.method_19("srcBlend", 769);
                    break;
                case 7:
                    class7.method_19("srcBlend", 772);
                    break;
                case 8:
                    class7.method_19("srcBlend", 773);
                    break;
                case 9:
                    class7.method_19("srcBlend", 776);
                    break;
                case 10:
                    class7.method_19("srcBlend", 771);
                    break;
                default:
                    class7.method_19("srcBlend", 1);
                    break;
            }
        }
        else
        {
            class7.method_19("srcBlend", 1);
        }
        if (material_0.HasProperty("_DstBlend"))
        {
            switch (material_0.GetInt("_DstBlend"))
            {
                case 0:
                    class7.method_19("dstBlend", 0);
                    break;
                case 1:
                    class7.method_19("dstBlend", 1);
                    break;
                case 2:
                    class7.method_19("dstBlend", 774);
                    break;
                case 3:
                    class7.method_19("dstBlend", 768);
                    break;
                case 4:
                    class7.method_19("dstBlend", 775);
                    break;
                case 5:
                    class7.method_19("dstBlend", 770);
                    break;
                case 6:
                    class7.method_19("dstBlend", 769);
                    break;
                case 7:
                    class7.method_19("dstBlend", 772);
                    break;
                case 8:
                    class7.method_19("dstBlend", 773);
                    break;
                case 9:
                    class7.method_19("dstBlend", 776);
                    break;
                case 10:
                    class7.method_19("dstBlend", 771);
                    break;
                default:
                    class7.method_19("dstBlend", 0);
                    break;
            }
        }
        else
        {
            class7.method_19("dstBlend", 0);
        }
        if (material_0.HasProperty("_ZWrite"))
        {
            if (material_0.GetInt("_ZWrite") == 1)
            {
                class7.method_17("depthWrite", true);
            }
            else
            {
                class7.method_17("depthWrite", false);
            }
        }
        else
        {
            class7.method_17("depthWrite", true);
        }
        if (material_0.HasProperty("_ZTest"))
        {
            switch (material_0.GetInt("_ZTest"))
            {
                case 0:
                    class7.method_19("depthTest", 0);
                    break;
                case 1:
                    class7.method_19("depthTest", 512);
                    break;
                case 2:
                    class7.method_19("depthTest", 513);
                    break;
                case 3:
                    class7.method_19("depthTest", 514);
                    break;
                case 4:
                    class7.method_19("depthTest", 515);
                    break;
                case 5:
                    class7.method_19("depthTest", 516);
                    break;
                case 6:
                    class7.method_19("depthTest", 517);
                    break;
                case 7:
                    class7.method_19("depthTest", 518);
                    break;
                case 8:
                    class7.method_19("depthTest", 519);
                    break;
                default:
                    class7.method_19("depthTest", 0);
                    break;
            }
        }
        else
        {
            class7.method_19("depthTest", 515);
        }
        if (list.IndexOf("_ALPHATEST_ON") != -1)
        {
            class2.method_17("alphaTest", true);
        }
        else
        {
            class2.method_17("alphaTest", false);
        }
        class2.method_19("renderQueue", 3000);
        if (material_0.HasProperty("_MainTex"))
        {
            Texture2D texture2D = (Texture2D)material_0.GetTexture("_MainTex");
            if (texture2D != null)
            {
                Class19 class8 = new Class19(Class19.Enum2.const_3);
                class8.method_22("name", "texture");
                Class32.smethod_45(class8, texture2D, Class32.int_3, string_11, name2, "path");
                class4.method_16(class8);
            }
            Class19 class9 = new Class19(Class19.Enum2.const_3);
            class9.method_22("name", "tilingOffset");
            Class19 class10 = new Class19(Class19.Enum2.const_4);
            Vector2 textureScale = material_0.GetTextureScale("_MainTex");
            Vector2 textureOffset = material_0.GetTextureOffset("_MainTex");
            class10.method_12(textureScale.x);
            class10.method_12(textureScale.y);
            class10.method_12(textureOffset.x);
            class10.method_12(textureOffset.y);
            class9.method_23("value", class10);
            class5.method_16(class9);
        }
        Class19 class11 = new Class19(Class19.Enum2.const_3);
        class11.method_22("name", "color");
        Class19 class12 = new Class19(Class19.Enum2.const_4);
        if (material_0.HasProperty("_TintColor"))
        {
            Color color = material_0.GetColor("_TintColor");
            class12.method_12(color.r);
            class12.method_12(color.g);
            class12.method_12(color.b);
            class12.method_12(color.a);
            class11.method_23("value", class12);
            class5.method_16(class11);
        }
        if (material_0.HasProperty("_Mode") && material_0.GetInt("_Mode") == 0)
        {
            class6.method_14("ADDTIVEFOG");
        }
        class2.method_23("textures", class4);
        class2.method_23("vectors", class5);
        class2.method_23("defines", class6);
        Class30.smethod_0(string_11, @class);
    }

    // Token: 0x060001EA RID: 490 RVA: 0x0001C0D0 File Offset: 0x0001A2D0
    static void smethod_43(Material material_0, string string_11)
    {
        Class19 @class = new Class19(Class19.Enum2.const_3);
        Class19 class2 = new Class19(Class19.Enum2.const_4);
        Class19 class3 = new Class19(Class19.Enum2.const_4);
        Class19 class19_ = new Class19(Class19.Enum2.const_4);
        @class.method_22("version", Class32.string_8);
        Class19 class4 = new Class19(Class19.Enum2.const_3);
        @class.method_23("props", class4);
        class4.method_22("type", "Laya.WaterPrimaryMaterial");
        string name = material_0.name;
        class4.method_22("name", name);
        if (material_0.HasProperty("_WaveScale"))
        {
            class4.method_18("waveScale", material_0.GetFloat("_WaveScale"));
        }
        if (material_0.HasProperty("_ColorControl"))
        {
            Texture2D texture2D = (Texture2D)material_0.GetTexture("_ColorControl");
            if (texture2D != null)
            {
                Class19 class5 = new Class19(Class19.Enum2.const_3);
                class5.method_22("name", "mainTexture");
                Class32.smethod_45(class5, texture2D, Class32.int_3, string_11, name, "path");
                class2.method_16(class5);
            }
        }
        if (material_0.HasProperty("_BumpMap"))
        {
            Texture2D texture2D2 = (Texture2D)material_0.GetTexture("_BumpMap");
            if (texture2D2 != null)
            {
                Class19 class6 = new Class19(Class19.Enum2.const_3);
                class6.method_22("name", "normalTexture");
                Class32.smethod_45(class6, texture2D2, Class32.int_3, string_11, name, "path");
                class2.method_16(class6);
            }
        }
        Class19 class7 = new Class19(Class19.Enum2.const_3);
        class7.method_22("name", "horizonColor");
        Class19 class8 = new Class19(Class19.Enum2.const_4);
        if (material_0.HasProperty("_horizonColor"))
        {
            Color color = material_0.GetColor("_horizonColor");
            class8.method_12(color.r);
            class8.method_12(color.g);
            class8.method_12(color.b);
            class8.method_12(color.a);
            class7.method_23("value", class8);
            class3.method_16(class7);
        }
        Class19 class9 = new Class19(Class19.Enum2.const_3);
        class9.method_22("name", "waveSpeed");
        Class19 class10 = new Class19(Class19.Enum2.const_4);
        if (material_0.HasProperty("_WaveSpeed"))
        {
            Color color2 = material_0.GetColor("_WaveSpeed");
            class10.method_12(-color2.r);
            class10.method_12(color2.g);
            class10.method_12(-color2.b);
            class10.method_12(color2.a);
            class9.method_23("value", class10);
            class3.method_16(class9);
        }
        class4.method_23("textures", class2);
        class4.method_23("vectors", class3);
        class4.method_23("defines", class19_);
        Class30.smethod_0(string_11, @class);
    }

    // Token: 0x060001EB RID: 491 RVA: 0x0001C36C File Offset: 0x0001A56C
    static void smethod_44(Class19 class19_0)
    {
        Class19 @class = new Class19(Class19.Enum2.const_4);
        class19_0.method_23("lightmaps", @class);
        LightmapData[] lightmaps = LightmapSettings.lightmaps;
        if (lightmaps != null && lightmaps.Length != 0)
        {
            if (!GraphicsSettings.HasShaderDefine(BuiltinShaderDefine.UNITY_LIGHTMAP_RGBM_ENCODING))
            {
                Debug.LogError("LightMap Encoding should be Normal,Please set it in Player Setting");
            }
            for (int i = 0; i < lightmaps.Length; i++)
            {
                Class19 class2 = new Class19(Class19.Enum2.const_3);
                Texture2D lightmapColor = lightmaps[i].lightmapColor;
                if (!(lightmapColor == null))
                {
                    Class19 class3 = new Class19(Class19.Enum2.const_4);
                    Class19 class4 = new Class19(Class19.Enum2.const_3);
                    class2.method_23("constructParams", class3);
                    class2.method_23("propertyParams", class4);
                    class3.method_13(lightmapColor.width);
                    class3.method_13(lightmapColor.height);
                    class3.method_13(1);
                    class3.method_11(false);
                    if (lightmapColor.filterMode == FilterMode.Point)
                    {
                        class4.method_19("filterMode", 0);
                    }
                    else if (lightmapColor.filterMode == FilterMode.Bilinear)
                    {
                        class4.method_19("filterMode", 1);
                    }
                    else if (lightmapColor.filterMode == FilterMode.Trilinear)
                    {
                        class4.method_19("filterMode", 2);
                    }
                    else
                    {
                        class4.method_19("filterMode", 0);
                    }
                    if (lightmapColor.wrapMode == TextureWrapMode.Repeat)
                    {
                        class4.method_19("wrapModeU", 0);
                        class4.method_19("wrapModeV", 0);
                    }
                    else if (lightmapColor.wrapMode == TextureWrapMode.Clamp)
                    {
                        class4.method_19("wrapModeU", 1);
                        class4.method_19("wrapModeV", 1);
                    }
                    else
                    {
                        class4.method_19("wrapModeU", 0);
                        class4.method_19("wrapModeV", 0);
                    }
                    class4.method_19("anisoLevel", lightmapColor.anisoLevel);
                    if (lightmapColor != null)
                    {
                        string assetPath = AssetDatabase.GetAssetPath(lightmapColor.GetInstanceID());
                        if (string.IsNullOrEmpty(assetPath))
                        {
                            Debug.LogError("LayaAir:can't select Auto Generate checkbox with generate Lighting.");
                        }
                        else
                        {
                            @class.method_16(class2);
                            string path = Class32.string_2 + "/" + Path.GetDirectoryName(assetPath);
                            if (!Directory.Exists(path))
                            {
                                Directory.CreateDirectory(path);
                            }
                            string text = Class32.string_2 + "/" + assetPath;
                            text = text.Substring(0, text.LastIndexOf(".")) + ".png";
                            TextureImporter textureImporter = AssetImporter.GetAtPath(assetPath) as TextureImporter;
                            textureImporter.isReadable = true;
                            textureImporter.textureCompression = TextureImporterCompression.Uncompressed;
                            AssetDatabase.ImportAsset(assetPath);
                            FileStream fileStream = File.Open(text, FileMode.Create, FileAccess.ReadWrite);
                            new BinaryWriter(fileStream).Write(lightmapColor.EncodeToPNG());
                            fileStream.Close();
                            class2.method_22("path", assetPath.Split(new char[]
                            {
                                '.'
                            })[0] + ".png");
                        }
                    }
                }
            }
        }
    }

    // Token: 0x060001EC RID: 492 RVA: 0x0001C600 File Offset: 0x0001A800
    static void smethod_45(Class19 class19_0, Texture2D texture2D_0, int int_13, string string_11 = null, string string_12 = null, string string_13 = "path")
    {
        if (!(texture2D_0 != null))
        {
            class19_0.method_22(string_13, "");
            return;
        }
        string assetPath = AssetDatabase.GetAssetPath(texture2D_0.GetInstanceID());
        string text = Class32.string_2 + "/" + Path.GetDirectoryName(assetPath);
        text = Class32.smethod_62(text, false);
        if (!Directory.Exists(text))
        {
            Directory.CreateDirectory(text);
        }
        TextureImporter textureImporter = AssetImporter.GetAtPath(assetPath) as TextureImporter;
        if (textureImporter == null)
        {
            Debug.LogError(Class32.string_0 + assetPath + " can't export   You should check the texture file format");
            return;
        }
        string text2 = Class32.string_2 + "/" + assetPath;
        text2 = text2.Substring(0, text2.LastIndexOf("."));
        TextureInfo textureInfo;
        if (!Class32.dictionary_1.ContainsKey(assetPath))
        {
            textureInfo = new TextureInfo();
            textureInfo.lastType = textureImporter.textureType;
            textureInfo.lastCompression = textureImporter.textureCompression;
            textureInfo.lastReadable = textureImporter.isReadable;
            if (textureImporter.textureType == TextureImporterType.NormalMap)
            {
                textureImporter.textureType = TextureImporterType.Default;
            }
            textureImporter.isReadable = true;
            textureImporter.textureCompression = TextureImporterCompression.Uncompressed;
            AssetDatabase.ImportAsset(assetPath);
            if (texture2D_0.format != TextureFormat.DXT1 && texture2D_0.format != TextureFormat.DXT5 && texture2D_0.format != TextureFormat.DXT1Crunched)
            {
                if (texture2D_0.format != TextureFormat.DXT5Crunched)
                {
                    if (texture2D_0.format != TextureFormat.PVRTC_RGB2 && texture2D_0.format != TextureFormat.PVRTC_RGB4 && texture2D_0.format != TextureFormat.PVRTC_RGBA2)
                    {
                        if (texture2D_0.format != TextureFormat.PVRTC_RGBA4)
                        {
                            textureInfo.Path = assetPath;
                            textureInfo.SavePath = text2;
                            textureInfo.texture = texture2D_0;
                            Class32.dictionary_1.Add(assetPath, textureInfo);
                            if (texture2D_0.format != TextureFormat.RGB24 && texture2D_0.format != TextureFormat.DXT1)
                            {
                                if (texture2D_0.format != TextureFormat.DXT1Crunched)
                                {
                                    if (texture2D_0.format != TextureFormat.RGBA32 && texture2D_0.format != TextureFormat.DXT5)
                                    {
                                        if (texture2D_0.format != TextureFormat.DXT5Crunched)
                                        {
                                            textureInfo.format = 1;
                                            goto IL_1E1;
                                        }
                                    }
                                    textureInfo.format = 1;
                                    goto IL_1E1;
                                }
                            }
                            textureInfo.format = 0;
                        IL_1E1:
                            if (textureImporter.mipmapEnabled)
                            {
                                textureInfo.MipMap = texture2D_0.mipmapCount;
                                goto IL_23B;
                            }
                            textureInfo.MipMap = 0;
                            goto IL_23B;
                        }
                    }
                    Debug.LogError("LayaAir: Texture" + assetPath + " can't Readable,maybe you should cancel  Override for iOS.");
                    return;
                }
            }
            Debug.LogError("LayaAir: Texture " + assetPath + " can't Readable,maybe you should cancel  Override for PC,MAC&Linux Standalone  checkbox.");
            return;
        }
        textureInfo = Class32.dictionary_1[assetPath];
    IL_23B:
        switch (int_13)
        {
            case 0:
                if (textureInfo.format == 0)
                {
                    string[] array = assetPath.Split(new char[]
                    {
                    '.'
                    });
                    string text3 = array[array.Length - 1];
                    string str = (Class32.list_0.IndexOf(text3) == -1) ? ".jpg" : text3;
                    text2 += str;
                }
                else
                {
                    string[] array2 = assetPath.Split(new char[]
                    {
                    '.'
                    });
                    string text4 = array2[array2.Length - 1];
                    string str2 = (Class32.list_0.IndexOf(text4) == -1) ? ".png" : text4;
                    text2 += str2;
                }
                text2 = Class32.smethod_62(text2, false);
                break;
            case 1:
                text2 += ".pvr";
                break;
            case 2:
                if (textureInfo.format == 0)
                {
                    text2 += ".ktx";
                }
                else if (textureInfo.format == 1)
                {
                    text2 += ".png";
                }
                break;
            default:
                Debug.LogError("no format select");
                break;
        }
        textureInfo.SavePath = text2;
        if (!File.Exists(assetPath))
        {
            class19_0.method_22(string_13, "");
            return;
        }
        string text5 = Class30.smethod_1(string_11, text2);
        class19_0.method_22(string_13, text5);
        Class19 @class = new Class19(Class19.Enum2.const_4);
        Class19 class2 = new Class19(Class19.Enum2.const_3);
        class19_0.method_23("constructParams", @class);
        class19_0.method_23("propertyParams", class2);
        if (int_13 == 1)
        {
            int num = Mathf.Max(texture2D_0.width, texture2D_0.height);
            @class.method_13(num);
            @class.method_13(num);
        }
        else
        {
            @class.method_13(texture2D_0.width);
            @class.method_13(texture2D_0.height);
        }
        if (textureInfo.format == 0)
        {
            switch (int_13)
            {
                case 0:
                    @class.method_13(0);
                    break;
                case 1:
                    @class.method_13(11);
                    break;
                case 2:
                    @class.method_13(5);
                    break;
            }
        }
        else if (textureInfo.format == 1)
        {
            switch (int_13)
            {
                case 0:
                    @class.method_13(1);
                    break;
                case 1:
                    @class.method_13(12);
                    break;
                case 2:
                    @class.method_13(1);
                    break;
            }
        }
        else
        {
            @class.method_13(1);
        }
        if (textureImporter != null)
        {
            @class.method_11(textureImporter.mipmapEnabled);
        }
        else
        {
            @class.method_11(false);
        }
        if (texture2D_0.filterMode == FilterMode.Point)
        {
            class2.method_19("filterMode", 0);
        }
        else if (texture2D_0.filterMode == FilterMode.Bilinear)
        {
            class2.method_19("filterMode", 1);
        }
        else if (texture2D_0.filterMode == FilterMode.Trilinear)
        {
            class2.method_19("filterMode", 2);
        }
        else
        {
            class2.method_19("filterMode", 1);
        }
        if (texture2D_0.wrapMode == TextureWrapMode.Repeat)
        {
            class2.method_19("wrapModeU", 0);
            class2.method_19("wrapModeV", 0);
        }
        else if (texture2D_0.wrapMode == TextureWrapMode.Clamp)
        {
            class2.method_19("wrapModeU", 1);
            class2.method_19("wrapModeV", 1);
        }
        else
        {
            class2.method_19("wrapModeU", 0);
            class2.method_19("wrapModeV", 0);
        }
        if (textureImporter != null)
        {
            class2.method_19("anisoLevel", texture2D_0.anisoLevel);
            return;
        }
        class2.method_19("anisoLevel", 0);
    }

    // Token: 0x060001ED RID: 493 RVA: 0x0001CB64 File Offset: 0x0001AD64
    public static void smethod_46(Cubemap cubemap_0, Class19 class19_0, bool bool_14 = false, string string_11 = null)
    {
        if (cubemap_0 == null)
        {
            return;
        }
        string text = Class32.smethod_62(AssetDatabase.GetAssetPath(cubemap_0.GetInstanceID()), false);
        text = text.Split(new char[]
        {
            '.'
        })[0];
        if (bool_14)
        {
            string text2 = Class30.smethod_1(string_11, Class32.string_2 + "/" + text + ".ltc");
            class19_0.method_22("path", text2);
        }
        else
        {
            class19_0.method_22("reflectionTexture", text + ".ltc");
        }
        Class19 @class = new Class19(Class19.Enum2.const_3);
        string str = text.Substring(text.LastIndexOf("/") + 1);
        @class.method_22("front", str + "_PositiveZ.png");
        @class.method_22("back", str + "_NegativeZ.png");
        @class.method_22("left", str + "_PositiveX.png");
        @class.method_22("right", str + "_NegativeX.png");
        @class.method_22("up", str + "_PositiveY.png");
        @class.method_22("down", str + "_NegativeY.png");
        text = Class32.string_2 + "/" + text + ".ltc";
        Class30.smethod_0(text, @class);
        try
        {
            Color[] pixels = cubemap_0.GetPixels(CubemapFace.PositiveX);
            Color[] pixels2 = cubemap_0.GetPixels(CubemapFace.NegativeX);
            Color[] pixels3 = cubemap_0.GetPixels(CubemapFace.PositiveY);
            Color[] pixels4 = cubemap_0.GetPixels(CubemapFace.NegativeY);
            Color[] pixels5 = cubemap_0.GetPixels(CubemapFace.PositiveZ);
            Color[] pixels6 = cubemap_0.GetPixels(CubemapFace.NegativeZ);
            Texture2D tex = Class32.smethod_51(pixels);
            Texture2D tex2 = Class32.smethod_51(pixels2);
            Texture2D tex3 = Class32.smethod_51(pixels3);
            Texture2D tex4 = Class32.smethod_51(pixels4);
            Texture2D tex5 = Class32.smethod_51(pixels5);
            Texture2D tex6 = Class32.smethod_51(pixels6);
            text = text.Substring(0, text.LastIndexOf('.'));
            File.WriteAllBytes(text + "_PositiveX.png", tex.EncodeToPNG());
            File.WriteAllBytes(text + "_NegativeX.png", tex2.EncodeToPNG());
            File.WriteAllBytes(text + "_PositiveY.png", tex3.EncodeToPNG());
            File.WriteAllBytes(text + "_NegativeY.png", tex4.EncodeToPNG());
            File.WriteAllBytes(text + "_PositiveZ.png", tex5.EncodeToPNG());
            File.WriteAllBytes(text + "_NegativeZ.png", tex6.EncodeToPNG());
        }
        catch (Exception ex)
        {
            ex.ToString();
            Debug.LogWarning("LayaAir3D Warning(Code:2006) : " + cubemap_0.name + "must set can read!");
        }
    }

    // Token: 0x060001EE RID: 494 RVA: 0x0001CDE4 File Offset: 0x0001AFE4
    public static void smethod_47(GameObject gameObject_0, Class19 class19_0, bool bool_14 = false)
    {
        List<Class32.Enum3> list = Class32.smethod_61(gameObject_0);
        Dictionary<string, string> dictionary = new Dictionary<string, string>();
        dictionary.Add("UnityEngine.GameObject", "");
        dictionary.Add("UnityEngine.Transform", "transform");
        dictionary.Add("UnityEngine.MeshRenderer", "meshRenderer");
        dictionary.Add("UnityEngine.SkinnedMeshRenderer", "skinnedMeshRenderer");
        dictionary.Add("UnityEngine.ParticleSystemRenderer", "particleRenderer");
        dictionary.Add("UnityEngine.TrailRenderer", "trailRenderer");
        Dictionary<string, string> dictionary2 = new Dictionary<string, string>();
        dictionary2.Add("m_IsActive", "active");
        dictionary2.Add("m_LocalPosition", "localPosition");
        dictionary2.Add("m_LocalRotation", "localRotation");
        dictionary2.Add("m_LocalScale", "localScale");
        dictionary2.Add("localEulerAnglesRaw", "localRotationEuler");
        dictionary2.Add("material", "material");
        dictionary2.Add("m_Enabled", "enable");
        Dictionary<string, byte> dictionary3 = new Dictionary<string, byte>();
        dictionary3.Add("m_LocalPosition", 12);
        dictionary3.Add("m_LocalRotation", 16);
        dictionary3.Add("m_LocalScale", 12);
        dictionary3.Add("localEulerAnglesRaw", 12);
        Dictionary<string, int> dictionary4 = new Dictionary<string, int>();
        dictionary4.Add("m_LocalPosition", 3);
        dictionary4.Add("m_LocalRotation", 4);
        dictionary4.Add("m_LocalScale", 3);
        dictionary4.Add("localEulerAnglesRaw", 3);
        List<string> list2 = new List<string>();
        list2.Add("x");
        list2.Add("y");
        list2.Add("z");
        List<string> list3 = new List<string>();
        list3.Add("x");
        list3.Add("y");
        list3.Add("z");
        list3.Add("w");
        new List<string>().Add("value");
        Dictionary<string, List<string>> dictionary5 = new Dictionary<string, List<string>>();
        dictionary5.Add("m_LocalPosition", list2);
        dictionary5.Add("m_LocalRotation", list3);
        dictionary5.Add("m_LocalScale", list2);
        dictionary5.Add("localEulerAnglesRaw", list2);
        List<ushort> list4 = new List<ushort>();
        list4.Add(12);
        list4.Add(16);
        AnimatorController animatorController = (AnimatorController)gameObject_0.GetComponent<Animator>().runtimeAnimatorController;
        if (animatorController == null)
        {
            Debug.LogWarning("LayaAir3D Warning(Code:1002) : " + gameObject_0.name + "'s Animator Compoment must have a Controller!");
            return;
        }
        AnimatorControllerLayer[] layers = animatorController.layers;
        int num = layers.Length;
        for (int i = 0; i < num; i++)
        {
            AnimatorControllerLayer animatorControllerLayer = layers[i];
            ChildAnimatorState[] states = animatorControllerLayer.stateMachine.states;
            Class19 @class = new Class19(Class19.Enum2.const_3);
            @class.method_22("name", animatorControllerLayer.name);
            @class.method_18("weight", animatorControllerLayer.defaultWeight);
            if (animatorControllerLayer.blendingMode == AnimatorLayerBlendingMode.Override)
            {
                @class.method_19("blendingMode", 0);
            }
            else if (animatorControllerLayer.blendingMode == AnimatorLayerBlendingMode.Additive)
            {
                @class.method_19("blendingMode", 1);
            }
            else
            {
                @class.method_19("blendingMode", 0);
            }
            Class19 class2 = new Class19(Class19.Enum2.const_4);
            @class.method_23("states", class2);
            class19_0.method_16(@class);
            for (int j = 0; j < states.Length; j++)
            {
                AnimatorState state = states[j].state;
                Class19 class3 = new Class19(Class19.Enum2.const_3);
                class3.method_22("name", state.name);
                class2.method_16(class3);
                AnimationClip animationClip = state.motion as AnimationClip;
                List<double> list5 = new List<double>();
                List<string> list6 = new List<string>();
                list6.Add("ANIMATIONS");
                if (animationClip != null)
                {
                    string name = gameObject_0.name;
                    int num2 = (int)animationClip.frameRate;
                    string text = Class32.smethod_62(animationClip.name, true);
                    list6.Add(text);
                    string str = Class32.smethod_62(AssetDatabase.GetAssetPath(animationClip.GetInstanceID()).Split(new char[]
                    {
                        '.'
                    })[0], false) + "-" + text + ".lani";
                    string text2 = Class32.string_2 + "/" + str;
                    class3.method_22("clipPath", str);
                    EditorCurveBinding[] curveBindings = AnimationUtility.GetCurveBindings(animationClip);
                    AnimationClipCurveData[] array = new AnimationClipCurveData[curveBindings.Length];
                    for (int k = 0; k < curveBindings.Length; k++)
                    {
                        array[k] = new AnimationClipCurveData(curveBindings[k]);
                        array[k].curve = AnimationUtility.GetEditorCurve(animationClip, curveBindings[k]);
                    }
                    for (int l = 0; l < array.Length; l++)
                    {
                        Keyframe[] keys = array[l].curve.keys;
                        for (int m = 0; m < keys.Length; m++)
                        {
                            double item = Math.Round((double)keys[m].time, 3);
                            if (list5.IndexOf(item) == -1)
                            {
                                list5.Add(item);
                            }
                        }
                    }
                    list5.Sort();
                    List<string> list7 = new List<string>();
                    List<Class32.Struct10> list8 = new List<Class32.Struct10>();
                    foreach (AnimationClipCurveData animationClipCurveData in array)
                    {
                        Class32.Struct9 struct9_;
                        struct9_.keyframe_0 = animationClipCurveData.curve.keys;
                        Class32.Struct10 item2;
                        item2.struct9_0 = struct9_;
                        item2.string_0 = animationClipCurveData.path;
                        item2.string_1 = animationClipCurveData.propertyName;
                        item2.type_0 = animationClipCurveData.type;
                        list8.Add(item2);
                    }
                    List<Class32.Struct10> list9 = new List<Class32.Struct10>();
                    List<Class32.Struct10> list10 = new List<Class32.Struct10>();
                    foreach (AnimationClipCurveData animationClipCurveData2 in array)
                    {
                        string path = animationClipCurveData2.path;
                        string propertyName = animationClipCurveData2.propertyName;
                        if (dictionary.ContainsKey(animationClipCurveData2.type.ToString()))
                        {
                            string a = dictionary[animationClipCurveData2.type.ToString()];
                            if (!(a == "meshRenderer") && !(a == "skinnedMeshRenderer") && !(a == "particleRenderer") && !(a == "trailRenderer") && !(a == "") && !(a == ""))
                            {
                                string text3 = propertyName.Substring(0, propertyName.LastIndexOf('.'));
                                text3 = propertyName.Substring(0, propertyName.LastIndexOf('.'));
                                string item3 = text3 + "|" + path;
                                if (list7.IndexOf(item3) == -1)
                                {
                                    list7.Add(item3);
                                    list9 = new List<Class32.Struct10>();
                                    for (int num4 = 0; num4 < dictionary5[text3].Count; num4++)
                                    {
                                        string b = text3 + "." + dictionary5[text3][num4];
                                        for (int num5 = 0; num5 < list8.Count; num5++)
                                        {
                                            if (list8[num5].string_1 == b && list8[num5].string_0 == path)
                                            {
                                                list9.Add(list8[num5]);
                                                list8.RemoveAt(list8.IndexOf(list8[num5]));
                                            }
                                        }
                                    }
                                    if (dictionary5[text3].Count != list9.Count)
                                    {
                                        List<Class32.Struct10> list11 = new List<Class32.Struct10>();
                                        for (int num6 = 0; num6 < dictionary5[text3].Count; num6++)
                                        {
                                            string b2 = text3 + "." + dictionary5[text3][num6];
                                            bool flag = false;
                                            for (int num7 = 0; num7 < list9.Count; num7++)
                                            {
                                                if (list9[num7].string_1 == b2)
                                                {
                                                    flag = true;
                                                    list11.Add(list9[num7]);
                                                }
                                            }
                                            if (!flag)
                                            {
                                                Class32.Struct9 struct9_2;
                                                struct9_2.keyframe_0 = new Keyframe[0];
                                                Class32.Struct10 item4;
                                                item4.string_0 = list9[0].string_0;
                                                item4.string_1 = b2;
                                                item4.type_0 = list9[0].type_0;
                                                item4.struct9_0 = struct9_2;
                                                list11.Add(item4);
                                            }
                                        }
                                        list9 = list11;
                                    }
                                    List<double> list12 = new List<double>();
                                    for (int num8 = 0; num8 < list9.Count; num8++)
                                    {
                                        Keyframe[] keyframe_ = list9[num8].struct9_0.keyframe_0;
                                        for (int num9 = 0; num9 < keyframe_.Length; num9++)
                                        {
                                            bool flag2 = false;
                                            for (int num10 = 0; num10 < list12.Count; num10++)
                                            {
                                                if (Math.Round(list12[num10], 3) == Math.Round((double)keyframe_[num9].time, 3))
                                                {
                                                    flag2 = true;
                                                }
                                            }
                                            if (!flag2)
                                            {
                                                list12.Add((double)keyframe_[num9].time);
                                            }
                                        }
                                    }
                                    list12.Sort();
                                    List<Keyframe> list13 = new List<Keyframe>();
                                    for (int num11 = 0; num11 < list12.Count; num11++)
                                    {
                                        list13.Add(new Keyframe
                                        {
                                            inTangent = float.NaN,
                                            outTangent = float.NaN,
                                            time = (float)list12[num11],
                                            value = float.NaN
                                        });
                                    }
                                    for (int num12 = 0; num12 < list9.Count; num12++)
                                    {
                                        List<Keyframe> list14 = list9[num12].struct9_0.keyframe_0.ToList<Keyframe>();
                                        List<Keyframe> list15 = new List<Keyframe>();
                                        for (int num13 = 0; num13 < list12.Count; num13++)
                                        {
                                            bool flag3 = false;
                                            for (int num14 = 0; num14 < list14.Count; num14++)
                                            {
                                                if (Math.Round((double)list14[num14].time, 3) == Math.Round(list12[num13], 3))
                                                {
                                                    flag3 = true;
                                                    list15.Add(list14[num14]);
                                                }
                                            }
                                            if (!flag3)
                                            {
                                                list15.Add(list13[num13]);
                                            }
                                        }
                                        for (int num15 = 0; num15 < list12.Count; num15++)
                                        {
                                            if (float.IsNaN(list15[num15].value))
                                            {
                                                bool flag4 = false;
                                                bool flag5 = false;
                                                int index = -1;
                                                int index2 = -1;
                                                int num17 = 0;
                                                for (int num16 = num15 - 1; num16 >= 0; num16--)
                                                {
                                                    if (!float.IsNaN(list15[num16].value))
                                                    {
                                                        flag4 = true;
                                                        index = num16;
                                                        num17 = num15 + 1;
                                                        while (num17 < list12.Count)
                                                        {
                                                            if (float.IsNaN(list15[num17].value))
                                                            {
                                                                num17++;
                                                            }
                                                            else
                                                            {
                                                                flag5 = true;
                                                                index2 = num17;
                                                                if (flag4 && flag5)
                                                                {
                                                                    float num18 = list15[index2].time - list15[index].time;
                                                                    float float_ = (float)((list12[num15] - list12[index]) / (list12[index2] - list12[index]));
                                                                    float outTangent;
                                                                    float value = Class31.smethod_5((float)list12[index], (float)list12[index2], list15[index].value, list15[index2].value, list15[index].outTangent * num18, list15[index2].inTangent * num18, float_, out outTangent);
                                                                    Keyframe value2 = default(Keyframe);
                                                                    value2.inTangent = (value2.outTangent = outTangent);
                                                                    value2.value = value;
                                                                    value2.time = (float)list12[num15];
                                                                    list15[num15] = value2;
                                                                    goto IL_C97;
                                                                }
                                                                if (flag4 && !flag5)
                                                                {
                                                                    Keyframe value3 = default(Keyframe);
                                                                    float outTangent2 = 0f;
                                                                    float inTangent = 0f;
                                                                    value3.outTangent = outTangent2;
                                                                    value3.inTangent = inTangent;
                                                                    value3.value = list15[index].value;
                                                                    value3.time = (float)list12[num15];
                                                                    list15[num15] = value3;
                                                                    goto IL_C97;
                                                                }
                                                                if (!flag4 && flag5)
                                                                {
                                                                    Keyframe value4 = default(Keyframe);
                                                                    float outTangent3 = 0f;
                                                                    float inTangent = 0f;
                                                                    value4.outTangent = outTangent3;
                                                                    value4.inTangent = inTangent;
                                                                    value4.value = list15[index2].value;
                                                                    value4.time = (float)list12[num15];
                                                                    list15[num15] = value4;
                                                                    goto IL_C97;
                                                                }
                                                                Debug.LogWarning(string.Concat(new string[]
                                                                {
                                                                    gameObject_0.name,
                                                                    "'s Animator ",
                                                                    gameObject_0.name,
                                                                    "/",
                                                                    list9[num12].string_0,
                                                                    " ",
                                                                    list9[num12].string_1,
                                                                    " keyFrame data can't be null!"
                                                                }));
                                                                goto IL_C97;
                                                            }
                                                        }
                                                        if (flag4 && flag5)
                                                        {
                                                            float num18 = list15[index2].time - list15[index].time;
                                                            float float_ = (float)((list12[num15] - list12[index]) / (list12[index2] - list12[index]));
                                                            float outTangent;
                                                            float value = Class31.smethod_5((float)list12[index], (float)list12[index2], list15[index].value, list15[index2].value, list15[index].outTangent * num18, list15[index2].inTangent * num18, float_, out outTangent);
                                                            Keyframe value2 = default(Keyframe);
                                                            value2.inTangent = (value2.outTangent = outTangent);
                                                            value2.value = value;
                                                            value2.time = (float)list12[num15];
                                                            list15[num15] = value2;
                                                            goto IL_C97;
                                                        }
                                                        if (flag4 && !flag5)
                                                        {
                                                            Keyframe value3 = default(Keyframe);
                                                            float outTangent2 = 0f;
                                                            float inTangent = 0f;
                                                            value3.outTangent = outTangent2;
                                                            value3.inTangent = inTangent;
                                                            value3.value = list15[index].value;
                                                            value3.time = (float)list12[num15];
                                                            list15[num15] = value3;
                                                            goto IL_C97;
                                                        }
                                                        if (!flag4 && flag5)
                                                        {
                                                            Keyframe value4 = default(Keyframe);
                                                            float outTangent3 = 0f;
                                                            float inTangent = 0f;
                                                            value4.outTangent = outTangent3;
                                                            value4.inTangent = inTangent;
                                                            value4.value = list15[index2].value;
                                                            value4.time = (float)list12[num15];
                                                            list15[num15] = value4;
                                                            goto IL_C97;
                                                        }
                                                        Debug.LogWarning(string.Concat(new string[]
                                                        {
                                                                    gameObject_0.name,
                                                                    "'s Animator ",
                                                                    gameObject_0.name,
                                                                    "/",
                                                                    list9[num12].string_0,
                                                                    " ",
                                                                    list9[num12].string_1,
                                                                    " keyFrame data can't be null!"
                                                        }));
                                                        goto IL_C97;
                                                    }
                                                }
                                                num17 = num15 + 1;
                                                while (num17 < list12.Count)
                                                {
                                                    if (float.IsNaN(list15[num17].value))
                                                    {
                                                        num17++;
                                                    }
                                                    else
                                                    {
                                                        flag5 = true;
                                                        index2 = num17;
                                                        if (flag4 && flag5)
                                                        {
                                                            float num18 = list15[index2].time - list15[index].time;
                                                            float float_ = (float)((list12[num15] - list12[index]) / (list12[index2] - list12[index]));
                                                            float outTangent;
                                                            float value = Class31.smethod_5((float)list12[index], (float)list12[index2], list15[index].value, list15[index2].value, list15[index].outTangent * num18, list15[index2].inTangent * num18, float_, out outTangent);
                                                            Keyframe value2 = default(Keyframe);
                                                            value2.inTangent = (value2.outTangent = outTangent);
                                                            value2.value = value;
                                                            value2.time = (float)list12[num15];
                                                            list15[num15] = value2;
                                                            goto IL_C97;
                                                        }
                                                        if (flag4 && !flag5)
                                                        {
                                                            Keyframe value3 = default(Keyframe);
                                                            float outTangent2 = 0f;
                                                            float inTangent = 0f;
                                                            value3.outTangent = outTangent2;
                                                            value3.inTangent = inTangent;
                                                            value3.value = list15[index].value;
                                                            value3.time = (float)list12[num15];
                                                            list15[num15] = value3;
                                                            goto IL_C97;
                                                        }
                                                        if (!flag4 && flag5)
                                                        {
                                                            Keyframe value4 = default(Keyframe);
                                                            float outTangent3 = 0f;
                                                            float inTangent = 0f;
                                                            value4.outTangent = outTangent3;
                                                            value4.inTangent = inTangent;
                                                            value4.value = list15[index2].value;
                                                            value4.time = (float)list12[num15];
                                                            list15[num15] = value4;
                                                            goto IL_C97;
                                                        }
                                                        Debug.LogWarning(string.Concat(new string[]
                                                        {
                                                                    gameObject_0.name,
                                                                    "'s Animator ",
                                                                    gameObject_0.name,
                                                                    "/",
                                                                    list9[num12].string_0,
                                                                    " ",
                                                                    list9[num12].string_1,
                                                                    " keyFrame data can't be null!"
                                                        }));
                                                        goto IL_C97;
                                                    }
                                                }
                                                if (flag4 && flag5)
                                                {
                                                    float num18 = list15[index2].time - list15[index].time;
                                                    float float_ = (float)((list12[num15] - list12[index]) / (list12[index2] - list12[index]));
                                                    float outTangent;
                                                    float value = Class31.smethod_5((float)list12[index], (float)list12[index2], list15[index].value, list15[index2].value, list15[index].outTangent * num18, list15[index2].inTangent * num18, float_, out outTangent);
                                                    Keyframe value2 = default(Keyframe);
                                                    value2.inTangent = (value2.outTangent = outTangent);
                                                    value2.value = value;
                                                    value2.time = (float)list12[num15];
                                                    list15[num15] = value2;
                                                    goto IL_C97;
                                                }
                                                if (flag4 && !flag5)
                                                {
                                                    Keyframe value3 = default(Keyframe);
                                                    float outTangent2 = 0f;
                                                    float inTangent = 0f;
                                                    value3.outTangent = outTangent2;
                                                    value3.inTangent = inTangent;
                                                    value3.value = list15[index].value;
                                                    value3.time = (float)list12[num15];
                                                    list15[num15] = value3;
                                                    goto IL_C97;
                                                }
                                                if (!flag4 && flag5)
                                                {
                                                    Keyframe value4 = default(Keyframe);
                                                    float outTangent3 = 0f;
                                                    float inTangent = 0f;
                                                    value4.outTangent = outTangent3;
                                                    value4.inTangent = inTangent;
                                                    value4.value = list15[index2].value;
                                                    value4.time = (float)list12[num15];
                                                    list15[num15] = value4;
                                                    goto IL_C97;
                                                }
                                                Debug.LogWarning(string.Concat(new string[]
                                                {
                                                                    gameObject_0.name,
                                                                    "'s Animator ",
                                                                    gameObject_0.name,
                                                                    "/",
                                                                    list9[num12].string_0,
                                                                    " ",
                                                                    list9[num12].string_1,
                                                                    " keyFrame data can't be null!"
                                                }));
                                                goto IL_C97;
                                            }
                                        IL_C97:;
                                        }
                                        Class32.Struct9 struct9_3;
                                        struct9_3.keyframe_0 = list15.ToArray();
                                        Class32.Struct10 value5;
                                        value5.struct9_0 = struct9_3;
                                        value5.string_0 = list9[num12].string_0;
                                        value5.string_1 = list9[num12].string_1;
                                        value5.type_0 = list9[num12].type_0;
                                        list9[num12] = value5;
                                    }
                                    for (int num19 = 0; num19 < list9.Count; num19++)
                                    {
                                        list10.Add(list9[num19]);
                                    }
                                }
                            }
                            else
                            {
                                Class32.Struct9 struct9_4;
                                struct9_4.keyframe_0 = animationClipCurveData2.curve.keys;
                                Class32.Struct10 item5;
                                item5.struct9_0 = struct9_4;
                                item5.string_0 = animationClipCurveData2.path;
                                item5.string_1 = animationClipCurveData2.propertyName;
                                item5.type_0 = animationClipCurveData2.type;
                                list10.Add(item5);
                            }
                        }
                    }
                    List<Class32.Struct8> list16 = new List<Class32.Struct8>();
                    int num20 = 0;
                    int num21 = 0;
                    while (num21 < list10.Count)
                    {
                        Class32.Struct10 @struct = list10[num21];
                        List<ushort> list17 = new List<ushort>();
                        string[] array2 = @struct.string_0.Split(new char[]
                        {
                            '/'
                        });
                        for (int num22 = 0; num22 < array2.Length; num22++)
                        {
                            if (list6.IndexOf(array2[num22]) == -1)
                            {
                                list6.Add(array2[num22]);
                            }
                            list17.Add((ushort)list6.IndexOf(array2[num22]));
                        }
                        Class32.Struct8 struct2;
                        struct2.ushort_0 = (ushort)list17.Count;
                        struct2.list_0 = list17;
                        string text4 = dictionary[@struct.type_0.ToString()];
                        if (list6.IndexOf(text4) == -1)
                        {
                            list6.Add(text4);
                        }
                        struct2.ushort_1 = (ushort)list6.IndexOf(text4);
                        string[] array3 = @struct.string_1.Split(new char[]
                        {
                            '.'
                        });
                        List<ushort> list18 = new List<ushort>();
                        string text5 = array3[0];
                        text5 = dictionary2[text5];
                        if (text4 == "transform")
                        {
                            if (list6.IndexOf(text5) == -1)
                            {
                                list6.Add(text5);
                            }
                            list18.Add((ushort)list6.IndexOf(text5));
                            struct2.ushort_2 = 1;
                            struct2.list_1 = list18;
                        }
                        else if (!(text4 == "meshRenderer") && !(text4 == "skinnedMeshRenderer") && !(text4 == "particleRenderer") && !(text4 == "trailRenderer") && !(text4 == ""))
                        {
                            struct2.ushort_2 = 0;
                            struct2.list_1 = list18;
                            Debug.LogWarning("LayaAir3D : " + gameObject_0.name + " Animation attribute length overbounds!");
                        }
                        else if (array3.Length == 1)
                        {
                            if (list6.IndexOf(text5) == -1)
                            {
                                list6.Add(text5);
                            }
                            list18.Add((ushort)list6.IndexOf(text5));
                            struct2.ushort_2 = 1;
                            struct2.list_1 = list18;
                        }
                        else if (array3.Length == 2)
                        {
                            if (list6.IndexOf(text5) == -1)
                            {
                                list6.Add(text5);
                            }
                            list18.Add((ushort)list6.IndexOf(text5));
                            string item6 = array3[1];
                            if (list6.IndexOf(item6) == -1)
                            {
                                list6.Add(item6);
                            }
                            list18.Add((ushort)list6.IndexOf(item6));
                            struct2.ushort_2 = 2;
                            struct2.list_1 = list18;
                        }
                        else if (array3.Length == 3)
                        {
                            if (list6.IndexOf(text5) == -1)
                            {
                                list6.Add(text5);
                            }
                            list18.Add((ushort)list6.IndexOf(text5));
                            string text6 = array3[1];
                            text6 += array3[2].ToUpper();
                            if (list6.IndexOf(text6) == -1)
                            {
                                list6.Add(text6);
                            }
                            list18.Add((ushort)list6.IndexOf(text6));
                            struct2.ushort_2 = 2;
                            struct2.list_1 = list18;
                        }
                        else
                        {
                            struct2.ushort_2 = 0;
                            struct2.list_1 = list18;
                            Debug.LogWarning("LayaAir3D : " + gameObject_0.name + " Animation attribute length overbounds!");
                        }
                        if (array3[0] == "m_LocalPosition")
                        {
                            struct2.byte_0 = 1;
                        }
                        else if (array3[0] == "m_LocalRotation")
                        {
                            struct2.byte_0 = 2;
                        }
                        else if (array3[0] == "m_LocalScale")
                        {
                            struct2.byte_0 = 3;
                        }
                        else if (array3[0] == "localEulerAnglesRaw")
                        {
                            struct2.byte_0 = 4;
                        }
                        else
                        {
                            struct2.byte_0 = 0;
                        }
                        try
                        {
                            num20 = dictionary4[array3[0]];
                            goto IL_1C19;
                        }
                        catch (Exception ex)
                        {
                            ex.ToString();
                            num20 = 1;
                            goto IL_1C19;
                        }
                        goto IL_115D;
                    IL_1487:
                        int num23;
                        Keyframe[] keyframe_2;
                        List<Class32.Struct7> list19;
                        if (num23 >= keyframe_2.Length)
                        {
                            struct2.ushort_3 = (ushort)keyframe_2.Length;
                            struct2.list_2 = list19;
                            list16.Add(struct2);
                            num21 += num20;
                            continue;
                        }
                    IL_115D:
                        float time = keyframe_2[num23].time;
                        Class32.Struct7 item7;
                        item7.ushort_0 = (ushort)list5.IndexOf(Math.Round((double)time, 3));
                        List<float> list20 = new List<float>();
                        List<float> list21 = new List<float>();
                        List<float> list22 = new List<float>();
                        int num24 = 0;
                        for (int num25 = num21; num25 < num21 + num20; num25++)
                        {
                            Keyframe keyframe = list10[num25].struct9_0.keyframe_0[num23];
                            if (text5 == "localPosition")
                            {
                                if (num24 == 0)
                                {
                                    list20.Add(keyframe.value * -1f);
                                    list21.Add(keyframe.inTangent * -1f);
                                    list22.Add(keyframe.outTangent * -1f);
                                }
                                else
                                {
                                    list20.Add(keyframe.value);
                                    list21.Add(keyframe.inTangent);
                                    list22.Add(keyframe.outTangent);
                                }
                            }
                            else if (text5 == "localRotation")
                            {
                                if (num24 != 0)
                                {
                                    if (num24 != 3)
                                    {
                                        list20.Add(keyframe.value);
                                        list21.Add(keyframe.inTangent);
                                        list22.Add(keyframe.outTangent);
                                        goto IL_1445;
                                    }
                                }
                                list20.Add(keyframe.value * -1f);
                                list21.Add(keyframe.inTangent * -1f);
                                list22.Add(keyframe.outTangent * -1f);
                            }
                            else if (text5 == "localRotationEuler")
                            {
                                if (list.IndexOf(Class32.Enum3.const_1) != -1)
                                {
                                    if (num24 == 0)
                                    {
                                        list20.Add(keyframe.value * -1f);
                                        list21.Add(keyframe.inTangent * -1f);
                                        list22.Add(keyframe.outTangent * -1f);
                                    }
                                    else if (num24 == 1)
                                    {
                                        list20.Add(180f - keyframe.value);
                                        list21.Add(keyframe.inTangent * -1f);
                                        list22.Add(keyframe.outTangent * -1f);
                                    }
                                    else
                                    {
                                        list20.Add(keyframe.value);
                                        list21.Add(keyframe.inTangent);
                                        list22.Add(keyframe.outTangent);
                                    }
                                }
                                else
                                {
                                    if (num24 != 1)
                                    {
                                        if (num24 != 2)
                                        {
                                            list20.Add(keyframe.value);
                                            list21.Add(keyframe.inTangent);
                                            list22.Add(keyframe.outTangent);
                                            goto IL_1445;
                                        }
                                    }
                                    list20.Add(keyframe.value * -1f);
                                    list21.Add(keyframe.inTangent * -1f);
                                    list22.Add(keyframe.outTangent * -1f);
                                }
                            }
                            else
                            {
                                list20.Add(keyframe.value);
                                list21.Add(keyframe.inTangent);
                                list22.Add(keyframe.outTangent);
                            }
                        IL_1445:
                            num24++;
                        }
                        item7.list_2 = list20;
                        item7.list_0 = list21;
                        item7.list_1 = list22;
                        list19.Add(item7);
                        num23++;
                        goto IL_1487;
                    IL_1C19:
                        list19 = new List<Class32.Struct7>();
                        keyframe_2 = @struct.struct9_0.keyframe_0;
                        num23 = 0;
                        goto IL_1487;
                    }
                    FileStream fileStream = Class30.smethod_0(text2, null);
                    string text7;
                    if (bool_14)
                    {
                        text7 = Class32.string_10;
                    }
                    else
                    {
                        text7 = Class32.string_9;
                    }
                    Class30.smethod_12(fileStream, text7);
                    long position = fileStream.Position;
                    Class30.smethod_7(fileStream, new uint[1]);
                    Class30.smethod_7(fileStream, new uint[1]);
                    long position2 = fileStream.Position;
                    int num26 = 1;
                    Class30.smethod_5(fileStream, new ushort[]
                    {
                        1
                    });
                    for (int num27 = 0; num27 < num26; num27++)
                    {
                        Class30.smethod_7(fileStream, new uint[1]);
                        Class30.smethod_7(fileStream, new uint[1]);
                    }
                    long position3 = fileStream.Position;
                    Class30.smethod_7(fileStream, new uint[1]);
                    Class30.smethod_5(fileStream, new ushort[1]);
                    long position4 = fileStream.Position;
                    Class30.smethod_5(fileStream, new ushort[]
                    {
                        (ushort)list6.IndexOf("ANIMATIONS")
                    });
                    Class30.smethod_5(fileStream, new ushort[]
                    {
                        (ushort)list5.Count
                    });
                    for (int num28 = 0; num28 < list5.Count; num28++)
                    {
                        Class30.smethod_9(fileStream, new float[]
                        {
                            (float)list5[num28]
                        });
                    }
                    Class30.smethod_5(fileStream, new ushort[]
                    {
                        (ushort)list6.IndexOf(text)
                    });
                    float num29 = (list5.Count == 0) ? 0f : ((float)list5[list5.Count - 1]);
                    Class30.smethod_9(fileStream, new float[]
                    {
                        num29
                    });
                    Class30.smethod_11(fileStream, new bool[]
                    {
                        animationClip.isLooping
                    });
                    Class30.smethod_5(fileStream, new ushort[]
                    {
                        (ushort)num2
                    });
                    Class30.smethod_5(fileStream, new ushort[]
                    {
                        (ushort)list16.Count
                    });
                    for (int num30 = 0; num30 < list16.Count; num30++)
                    {
                        Class32.Struct8 struct2 = list16[num30];
                        Class30.smethod_4(fileStream, new byte[]
                        {
                            struct2.byte_0
                        });
                        Class30.smethod_5(fileStream, new ushort[]
                        {
                            struct2.ushort_0
                        });
                        for (int num31 = 0; num31 < (int)struct2.ushort_0; num31++)
                        {
                            Class30.smethod_5(fileStream, new ushort[]
                            {
                                struct2.list_0[num31]
                            });
                        }
                        Class30.smethod_5(fileStream, new ushort[]
                        {
                            struct2.ushort_1
                        });
                        Class30.smethod_5(fileStream, new ushort[]
                        {
                            struct2.ushort_2
                        });
                        for (int num32 = 0; num32 < (int)struct2.ushort_2; num32++)
                        {
                            Class30.smethod_5(fileStream, new ushort[]
                            {
                                struct2.list_1[num32]
                            });
                        }
                        Class30.smethod_5(fileStream, new ushort[]
                        {
                            struct2.ushort_3
                        });
                        if (bool_14)
                        {
                            for (int num33 = 0; num33 < (int)struct2.ushort_3; num33++)
                            {
                                Class30.smethod_5(fileStream, new ushort[]
                                {
                                    struct2.list_2[num33].ushort_0
                                });
                                List<float> list_ = struct2.list_2[num33].list_2;
                                List<float> list23 = struct2.list_2[num33].list_0;
                                List<float> list24 = struct2.list_2[num33].list_1;
                                for (int num34 = 0; num34 < list23.Count; num34++)
                                {
                                    Class30.smethod_5(fileStream, new ushort[]
                                    {
                                        Class18.smethod_0(list23[num34])
                                    });
                                }
                                for (int num35 = 0; num35 < list24.Count; num35++)
                                {
                                    Class30.smethod_5(fileStream, new ushort[]
                                    {
                                        Class18.smethod_0(list24[num35])
                                    });
                                }
                                for (int num36 = 0; num36 < list_.Count; num36++)
                                {
                                    Class30.smethod_5(fileStream, new ushort[]
                                    {
                                        Class18.smethod_0(list_[num36])
                                    });
                                }
                            }
                        }
                        else
                        {
                            for (int num37 = 0; num37 < (int)struct2.ushort_3; num37++)
                            {
                                Class30.smethod_5(fileStream, new ushort[]
                                {
                                    struct2.list_2[num37].ushort_0
                                });
                                List<float> list_2 = struct2.list_2[num37].list_2;
                                List<float> list25 = struct2.list_2[num37].list_0;
                                List<float> list26 = struct2.list_2[num37].list_1;
                                for (int num38 = 0; num38 < list25.Count; num38++)
                                {
                                    Class30.smethod_9(fileStream, new float[]
                                    {
                                        list25[num38]
                                    });
                                }
                                for (int num39 = 0; num39 < list26.Count; num39++)
                                {
                                    Class30.smethod_9(fileStream, new float[]
                                    {
                                        list26[num39]
                                    });
                                }
                                for (int num40 = 0; num40 < list_2.Count; num40++)
                                {
                                    Class30.smethod_9(fileStream, new float[]
                                    {
                                        list_2[num40]
                                    });
                                }
                            }
                        }
                    }
                    AnimationEvent[] events = animationClip.events;
                    int num41 = events.Length;
                    Class30.smethod_6(fileStream, new short[]
                    {
                        (short)num41
                    });
                    for (int num42 = 0; num42 < num41; num42++)
                    {
                        AnimationEvent animationEvent = events[num42];
                        Class30.smethod_9(fileStream, new float[]
                        {
                            animationEvent.time
                        });
                        string functionName = animationEvent.functionName;
                        if (list6.IndexOf(functionName) == -1)
                        {
                            list6.Add(functionName);
                        }
                        Class30.smethod_5(fileStream, new ushort[]
                        {
                            (ushort)list6.IndexOf(functionName)
                        });
                        Class30.smethod_5(fileStream, new ushort[]
                        {
                            3
                        });
                        for (int num43 = 0; num43 < 1; num43++)
                        {
                            Class30.smethod_4(fileStream, new byte[]
                            {
                                2
                            });
                            Class30.smethod_9(fileStream, new float[]
                            {
                                animationEvent.floatParameter
                            });
                            Class30.smethod_4(fileStream, new byte[]
                            {
                                1
                            });
                            Class30.smethod_2(fileStream, new int[]
                            {
                                animationEvent.intParameter
                            });
                            Class30.smethod_4(fileStream, new byte[]
                            {
                                3
                            });
                            string stringParameter = animationEvent.stringParameter;
                            if (list6.IndexOf(stringParameter) == -1)
                            {
                                list6.Add(stringParameter);
                            }
                            Class30.smethod_5(fileStream, new ushort[]
                            {
                                (ushort)list6.IndexOf(stringParameter)
                            });
                        }
                    }
                    long position5 = fileStream.Position;
                    for (int num44 = 0; num44 < list6.Count; num44++)
                    {
                        Class30.smethod_12(fileStream, list6[num44]);
                    }
                    long position6 = fileStream.Position;
                    fileStream.Position = position3 + 4L;
                    Class30.smethod_5(fileStream, new ushort[]
                    {
                        (ushort)list6.Count
                    });
                    fileStream.Position = position2 + 2L + 4L;
                    Class30.smethod_7(fileStream, new uint[]
                    {
                        (uint)(position5 - position4)
                    });
                    fileStream.Position = position;
                    Class30.smethod_7(fileStream, new uint[]
                    {
                        (uint)position5
                    });
                    Class30.smethod_7(fileStream, new uint[]
                    {
                        (uint)(position6 - position5)
                    });
                    fileStream.Close();
                }
            }
        }
    }

    // Token: 0x060001EF RID: 495 RVA: 0x000031C2 File Offset: 0x000013C2
    public static void smethod_48(string string_11, Class19 class19_0, GameObject gameObject_0 = null)
    {
        Class14.smethod_0(string_11, class19_0);
    }

    // Token: 0x060001F0 RID: 496 RVA: 0x0001EA40 File Offset: 0x0001CC40
    public static void smethod_49(ParticleSystem.MinMaxCurve minMaxCurve_0, Class19 class19_0, string string_11, string string_12, int int_13, float float_2, float float_3, bool bool_14 = false)
    {
        AnimationCurve animationCurve;
        if (int_13 == -1)
        {
            animationCurve = minMaxCurve_0.curveMin;
        }
        else if (int_13 == 1)
        {
            animationCurve = minMaxCurve_0.curveMax;
        }
        else
        {
            animationCurve = minMaxCurve_0.curve;
        }
        Class19 @class = new Class19(Class19.Enum2.const_3);
        Class19 class2 = new Class19(Class19.Enum2.const_4);
        Class19 class3 = new Class19(Class19.Enum2.const_3);
        if (animationCurve != null && animationCurve.length != 0)
        {
            int length = animationCurve.length;
            if (length <= 0)
            {
                return;
            }
            if (!bool_14)
            {
                class19_0.method_23(string_11, @class);
            }
            else
            {
                if (animationCurve.length == 2 && animationCurve[0].time == 0f && animationCurve[0].value == 0f && animationCurve[1].time == 1f && Class32.smethod_63(animationCurve[1].value, 1f) && Class32.smethod_63(float_2, 1f))
                {
                    return;
                }
                class19_0.method_23(string_11, @class);
            }
            for (int i = 0; i < length; i++)
            {
                Keyframe keyframe = animationCurve[i];
                if (i == 0)
                {
                    class3 = new Class19(Class19.Enum2.const_3);
                    class3.method_18("key", 0f);
                    class3.method_18("value", keyframe.value * float_2 * float_3);
                    class2.method_16(class3);
                    if (keyframe.time - Class32.float_1 > 0f && (double)keyframe.time < 0.5)
                    {
                        class3 = new Class19(Class19.Enum2.const_3);
                        class3.method_18("key", keyframe.time);
                        class3.method_18("value", keyframe.value * float_2 * float_3);
                        class2.method_16(class3);
                    }
                }
                if (i != 0 && i != length - 1)
                {
                    class3 = new Class19(Class19.Enum2.const_3);
                    class3.method_18("key", keyframe.time);
                    class3.method_18("value", keyframe.value * float_2 * float_3);
                    class2.method_16(class3);
                }
                if (i == length - 1)
                {
                    if (keyframe.time + Class32.float_1 < 1f && (double)keyframe.time >= 0.5)
                    {
                        class3 = new Class19(Class19.Enum2.const_3);
                        class3.method_18("key", keyframe.time);
                        class3.method_18("value", keyframe.value * float_2 * float_3);
                        class2.method_16(class3);
                    }
                    class3 = new Class19(Class19.Enum2.const_3);
                    class3.method_18("key", 1f);
                    class3.method_18("value", keyframe.value * float_2 * float_3);
                    class2.method_16(class3);
                }
            }
        }
        @class.method_23(string_12, class2);
    }

    // Token: 0x060001F1 RID: 497 RVA: 0x0001ECE8 File Offset: 0x0001CEE8
    public static void smethod_50(Gradient gradient_0, Class19 class19_0, string string_11)
    {
        if (gradient_0 == null)
        {
            return;
        }
        bool flag = false;
        GradientAlphaKey[] alphaKeys = gradient_0.alphaKeys;
        GradientColorKey[] colorKeys = gradient_0.colorKeys;
        Class19 @class = new Class19(Class19.Enum2.const_3);
        Class19 class2 = new Class19(Class19.Enum2.const_4);
        Class19 class3 = new Class19(Class19.Enum2.const_3);
        if (alphaKeys != null && alphaKeys.Length != 0)
        {
            int num = alphaKeys.Length;
            for (int i = 0; i < num; i++)
            {
                GradientAlphaKey gradientAlphaKey = alphaKeys[i];
                if (i == 0)
                {
                    class3 = new Class19(Class19.Enum2.const_3);
                    class3.method_18("key", 0f);
                    class3.method_18("value", gradientAlphaKey.alpha);
                    class2.method_16(class3);
                    if (gradientAlphaKey.time - Class32.float_1 > 0f && (double)gradientAlphaKey.time < 0.5)
                    {
                        class3 = new Class19(Class19.Enum2.const_3);
                        class3.method_18("key", gradientAlphaKey.time);
                        class3.method_18("value", gradientAlphaKey.alpha);
                        class2.method_16(class3);
                    }
                }
                if (i != 0 && i != num - 1)
                {
                    class3 = new Class19(Class19.Enum2.const_3);
                    class3.method_18("key", gradientAlphaKey.time);
                    class3.method_18("value", gradientAlphaKey.alpha);
                    class2.method_16(class3);
                }
                if (i == num - 1)
                {
                    if (gradientAlphaKey.time + Class32.float_1 < 1f && (double)gradientAlphaKey.time >= 0.5)
                    {
                        class3 = new Class19(Class19.Enum2.const_3);
                        class3.method_18("key", gradientAlphaKey.time);
                        class3.method_18("value", gradientAlphaKey.alpha);
                        class2.method_16(class3);
                    }
                    class3 = new Class19(Class19.Enum2.const_3);
                    class3.method_18("key", 1f);
                    class3.method_18("value", gradientAlphaKey.alpha);
                    class2.method_16(class3);
                }
            }
        }
        if (alphaKeys.Length != 2 || alphaKeys[0].alpha != 1f || alphaKeys[1].alpha != 1f)
        {
            @class.method_23("alphas", class2);
            flag = true;
        }
        Class19 class4 = new Class19(Class19.Enum2.const_4);
        Class19 class5 = new Class19(Class19.Enum2.const_3);
        Class19 class6 = new Class19(Class19.Enum2.const_4);
        if (colorKeys != null && colorKeys.Length != 0)
        {
            int num2 = colorKeys.Length;
            for (int j = 0; j < num2; j++)
            {
                GradientColorKey gradientColorKey = colorKeys[j];
                if (j == 0)
                {
                    class5 = new Class19(Class19.Enum2.const_3);
                    class5.method_18("key", 0f);
                    class6 = new Class19(Class19.Enum2.const_4);
                    class6.method_12(gradientColorKey.color.r);
                    class6.method_12(gradientColorKey.color.g);
                    class6.method_12(gradientColorKey.color.b);
                    class5.method_23("value", class6);
                    class4.method_16(class5);
                    if (gradientColorKey.time - Class32.float_1 > 0f && (double)gradientColorKey.time < 0.5)
                    {
                        class5 = new Class19(Class19.Enum2.const_3);
                        class5.method_18("key", gradientColorKey.time);
                        class6 = new Class19(Class19.Enum2.const_4);
                        class6.method_12(gradientColorKey.color.r);
                        class6.method_12(gradientColorKey.color.g);
                        class6.method_12(gradientColorKey.color.b);
                        class5.method_23("value", class6);
                        class4.method_16(class5);
                    }
                }
                if (j != 0 && j != num2 - 1)
                {
                    class5 = new Class19(Class19.Enum2.const_3);
                    class5.method_18("key", gradientColorKey.time);
                    class6 = new Class19(Class19.Enum2.const_4);
                    class6.method_12(gradientColorKey.color.r);
                    class6.method_12(gradientColorKey.color.g);
                    class6.method_12(gradientColorKey.color.b);
                    class5.method_23("value", class6);
                    class4.method_16(class5);
                }
                if (j == num2 - 1)
                {
                    if (gradientColorKey.time + Class32.float_1 < 1f && (double)gradientColorKey.time >= 0.5)
                    {
                        class5 = new Class19(Class19.Enum2.const_3);
                        class5.method_18("key", gradientColorKey.time);
                        class6 = new Class19(Class19.Enum2.const_4);
                        class6.method_12(gradientColorKey.color.r);
                        class6.method_12(gradientColorKey.color.g);
                        class6.method_12(gradientColorKey.color.b);
                        class5.method_23("value", class6);
                        class4.method_16(class5);
                    }
                    class5 = new Class19(Class19.Enum2.const_3);
                    class5.method_18("key", 1f);
                    class6 = new Class19(Class19.Enum2.const_4);
                    class6.method_12(gradientColorKey.color.r);
                    class6.method_12(gradientColorKey.color.g);
                    class6.method_12(gradientColorKey.color.b);
                    class5.method_23("value", class6);
                    class4.method_16(class5);
                }
            }
        }
        if (colorKeys.Length != 2 || colorKeys[0].color.r != 1f || colorKeys[0].color.g != 1f || colorKeys[0].color.b != 1f || colorKeys[1].color.r != 1f || colorKeys[1].color.g != 1f || colorKeys[1].color.b != 1f)
        {
            @class.method_23("rgbs", class4);
            flag = true;
        }
        if (flag)
        {
            class19_0.method_23(string_11, @class);
        }
    }

    // Token: 0x060001F2 RID: 498 RVA: 0x0001F2B4 File Offset: 0x0001D4B4
    public static Texture2D smethod_51(Color[] color_0)
    {
        int num = 0;
        int num3;
        int num2 = num3 = (int)Mathf.Sqrt((float)color_0.Length);
        Texture2D texture2D = new Texture2D(num3, num2);
        for (int i = 0; i < num2; i++)
        {
            for (int j = 0; j < num3; j++)
            {
                texture2D.SetPixel(j, num2 - 1 - i, color_0[num++]);
            }
        }
        return texture2D;
    }

    // Token: 0x060001F3 RID: 499 RVA: 0x0001F314 File Offset: 0x0001D514
    static Class32.Class33 smethod_52(Vector3[] vector3_0, Vector3[] vector3_1, Color[] color_0, Vector2[] vector2_0, Vector2[] vector2_1, BoneWeight[] boneWeight_0, Vector4[] vector4_0, int int_13)
    {
        Class32.Class33 @class = new Class32.Class33();
        @class.int_0 = int_13;
        @class.vector3_0 = vector3_0[int_13];
        if (Class32.int_5[1] == 1)
        {
            @class.vector3_1 = vector3_1[int_13];
        }
        else
        {
            @class.vector3_1 = default(Vector3);
        }
        if (Class32.int_5[2] == 1)
        {
            @class.color_0 = color_0[int_13];
        }
        else
        {
            @class.color_0 = default(Color);
        }
        if (Class32.int_5[3] == 1)
        {
            @class.vector2_0 = vector2_0[int_13];
        }
        else
        {
            @class.vector2_0 = default(Vector2);
        }
        if (Class32.int_5[4] == 1)
        {
            @class.vector2_1 = vector2_1[int_13];
        }
        else
        {
            @class.vector2_1 = default(Vector2);
        }
        if (Class32.int_5[5] == 1)
        {
            BoneWeight boneWeight = boneWeight_0[int_13];
            @class.vector4_0.x = boneWeight.weight0;
            @class.vector4_0.y = boneWeight.weight1;
            @class.vector4_0.z = boneWeight.weight2;
            @class.vector4_0.w = boneWeight.weight3;
            @class.vector4_1.x = (float)boneWeight.boneIndex0;
            @class.vector4_1.y = (float)boneWeight.boneIndex1;
            @class.vector4_1.z = (float)boneWeight.boneIndex2;
            @class.vector4_1.w = (float)boneWeight.boneIndex3;
        }
        else
        {
            @class.vector4_0 = default(Vector4);
            @class.vector4_1 = default(Vector4);
        }
        if (Class32.int_5[6] == 1)
        {
            @class.vector4_2 = vector4_0[int_13];
        }
        else
        {
            @class.vector4_2 = default(Vector4);
        }
        return @class;
    }

    // Token: 0x060001F4 RID: 500 RVA: 0x0001F4C4 File Offset: 0x0001D6C4
    static bool smethod_53(GameObject gameObject_0, Class32.Enum3 enum3_0, bool bool_14, bool bool_15)
    {
        GameObject gameObject_ = gameObject_0;
        if (bool_15)
        {
            gameObject_ = gameObject_0.transform.parent.gameObject;
        }
        List<GameObject> list = new List<GameObject>();
        Class32.smethod_54(gameObject_, enum3_0, list, bool_14);
        return list.Count > 0;
    }

    // Token: 0x060001F5 RID: 501 RVA: 0x0001F504 File Offset: 0x0001D704
    static void smethod_54(GameObject gameObject_0, Class32.Enum3 enum3_0, List<GameObject> list_2, bool bool_14)
    {
        if (gameObject_0.transform.childCount > 0)
        {
            for (int i = 0; i < gameObject_0.transform.childCount; i++)
            {
                GameObject gameObject = gameObject_0.transform.GetChild(i).gameObject;
                if (Class32.smethod_61(gameObject).IndexOf(enum3_0) != -1)
                {
                    list_2.Add(gameObject);
                }
                if (!bool_14)
                {
                    Class32.smethod_54(gameObject, enum3_0, list_2, bool_14);
                }
            }
        }
    }

    // Token: 0x060001F6 RID: 502 RVA: 0x0001F56C File Offset: 0x0001D76C
    static GameObject smethod_55(GameObject gameObject_0, Class32.Enum3 enum3_0)
    {
        if (gameObject_0.transform.parent == null)
        {
            return null;
        }
        GameObject gameObject = gameObject_0.transform.parent.gameObject;
        if (Class32.smethod_61(gameObject).IndexOf(enum3_0) != -1)
        {
            return gameObject;
        }
        return Class32.smethod_55(gameObject, enum3_0);
    }

    // Token: 0x060001F7 RID: 503 RVA: 0x0001F5B8 File Offset: 0x0001D7B8
    static bool smethod_56(GameObject gameObject_0)
    {
        for (int i = 0; i < gameObject_0.transform.childCount; i++)
        {
            GameObject gameObject = gameObject_0.transform.GetChild(i).gameObject;
            if (Class32.smethod_61(gameObject).Count > 1 && gameObject.activeInHierarchy)
            {
                return true;
            }
        }
        return false;
    }

    // Token: 0x060001F8 RID: 504 RVA: 0x0001F608 File Offset: 0x0001D808
    static void smethod_57(GameObject gameObject_0, bool bool_14)
    {
        if (gameObject_0.transform.childCount > 0)
        {
            for (int i = 0; i < gameObject_0.transform.childCount; i++)
            {
                GameObject gameObject = gameObject_0.transform.GetChild(i).gameObject;
                if (Class32.smethod_61(gameObject).IndexOf(Class32.Enum3.const_9) != -1)
                {
                    // gameObject.GetComponent<ParticleSystem>().main.scalingMode.ToString() == "Local";
                }
                Class32.smethod_57(gameObject, false);
            }
        }
    }

    // Token: 0x060001F9 RID: 505 RVA: 0x0001F690 File Offset: 0x0001D890
    static void smethod_58(GameObject gameObject_0, bool bool_14)
    {
        int count = Class32.smethod_61(gameObject_0).Count;
        if (gameObject_0.transform.childCount > 0)
        {
            for (int i = 0; i < gameObject_0.transform.childCount; i++)
            {
                GameObject gameObject = gameObject_0.transform.GetChild(i).gameObject;
                int count2 = Class32.smethod_61(gameObject).Count;
                Class32.smethod_58(gameObject, false);
            }
        }
    }

    // Token: 0x060001FA RID: 506 RVA: 0x0001F6F0 File Offset: 0x0001D8F0
    static void smethod_59(GameObject gameObject_0, bool bool_14)
    {
        if (bool_14)
        {
            Class32.bool_13 = false;
        }
        if (gameObject_0.transform.childCount > 0)
        {
            for (int i = 0; i < gameObject_0.transform.childCount; i++)
            {
                GameObject gameObject = gameObject_0.transform.GetChild(i).gameObject;
                if (Class32.smethod_61(gameObject).Count >= 1)
                {
                    Class32.bool_13 = true;
                }
                Class32.smethod_59(gameObject, false);
            }
        }
    }

    // Token: 0x060001FB RID: 507 RVA: 0x0001F758 File Offset: 0x0001D958
    static bool smethod_60(Transform transform_0, Transform transform_1, Transform transform_2, int int_13)
    {
        if (transform_0 == transform_1)
        {
            return true;
        }
        for (int i = 0; i < int_13; i++)
        {
            if (transform_2 == transform_0)
            {
                return false;
            }
            if (transform_1 == transform_2)
            {
                return true;
            }
            transform_2 = transform_2.parent;
        }
        return false;
    }

    // Token: 0x060001FC RID: 508 RVA: 0x0001F79C File Offset: 0x0001D99C
    static List<Class32.Enum3> smethod_61(GameObject gameObject_0)
    {
        List<Class32.Enum3> list = new List<Class32.Enum3>();
        Camera component = gameObject_0.GetComponent<Camera>();
        Light component2 = gameObject_0.GetComponent<Light>();
        MeshFilter component3 = gameObject_0.GetComponent<MeshFilter>();
        MeshRenderer component4 = gameObject_0.GetComponent<MeshRenderer>();
        SkinnedMeshRenderer component5 = gameObject_0.GetComponent<SkinnedMeshRenderer>();
        UnityEngine.Object component6 = gameObject_0.GetComponent<Animation>();
        Animator component7 = gameObject_0.GetComponent<Animator>();
        ParticleSystem component8 = gameObject_0.GetComponent<ParticleSystem>();
        Terrain component9 = gameObject_0.GetComponent<Terrain>();
        BoxCollider component10 = gameObject_0.GetComponent<BoxCollider>();
        SphereCollider component11 = gameObject_0.GetComponent<SphereCollider>();
        CapsuleCollider component12 = gameObject_0.GetComponent<CapsuleCollider>();
        MeshCollider component13 = gameObject_0.GetComponent<MeshCollider>();
        UnityEngine.Object component14 = gameObject_0.GetComponent<Rigidbody>();
        UnityEngine.Object component15 = gameObject_0.GetComponent<TrailRenderer>();
        UnityEngine.Object component16 = gameObject_0.GetComponent<LineRenderer>();
        list.Add(Class32.Enum3.const_0);
        if (component16 != null)
        {
            list.Add(Class32.Enum3.const_14);
        }
        if (component15 != null)
        {
            list.Add(Class32.Enum3.const_13);
        }
        if (component14 != null)
        {
            list.Add(Class32.Enum3.const_12);
        }
        else if (component10 != null || component11 != null || component12 != null || component13 != null)
        {
            list.Add(Class32.Enum3.const_11);
        }
        if (component6 != null)
        {
            Debug.LogWarning("LayaAir3D Warning(Code:0000) : " + gameObject_0.name + " can't use Animation Componment!");
        }
        if (component7 != null)
        {
            list.Add(Class32.Enum3.const_8);
        }
        if (component != null)
        {
            list.Add(Class32.Enum3.const_1);
        }
        if (component2 != null)
        {
            if (component2.type == LightType.Directional)
            {
                list.Add(Class32.Enum3.const_2);
            }
            else if (component2.type == LightType.Point)
            {
                list.Add(Class32.Enum3.const_3);
            }
            else if (component2.type == LightType.Spot)
            {
                list.Add(Class32.Enum3.const_4);
            }
        }
        if (component3 != null)
        {
            if (component == null)
            {
                list.Add(Class32.Enum3.const_5);
                if (component4 == null)
                {
                    Debug.LogWarning("LayaAir3D : " + gameObject_0.name + " need a MeshRenderer ComponentType !");
                }
            }
            else if (component != null)
            {
                Debug.LogWarning("LayaAir3D : " + gameObject_0.name + " Camera and MeshFilter can't exist at the same time !");
            }
        }
        if (component4 != null)
        {
            if (component == null)
            {
                list.Add(Class32.Enum3.const_6);
                if (component3 == null)
                {
                    Debug.LogWarning("LayaAir3D : " + gameObject_0.name + " need a meshFilter ComponentType !");
                }
            }
            else if (component != null)
            {
                Debug.LogWarning("LayaAir3D : " + gameObject_0.name + " Camera and MeshRenderer can't exist at the same time !");
            }
        }
        if (component5 != null)
        {
            if (component == null && component3 == null && component4 == null)
            {
                list.Add(Class32.Enum3.const_7);
            }
            else
            {
                if (component != null)
                {
                    Debug.LogWarning("LayaAir3D : " + gameObject_0.name + " Camera and SkinnedMeshRenderer can't exist at the same time !");
                }
                if (component3 != null)
                {
                    Debug.LogWarning("LayaAir3D : " + gameObject_0.name + " MeshFilter and SkinnedMeshRenderer can't exist at the same time !");
                }
                if (component4 != null)
                {
                    Debug.LogWarning("LayaAir3D : " + gameObject_0.name + " MeshRenderer and SkinnedMeshRenderer can't exist at the same time !");
                }
            }
        }
        if (component8 != null)
        {
            if (component == null && component3 == null && component4 == null && component5 == null)
            {
                list.Add(Class32.Enum3.const_9);
            }
            else
            {
                if (component != null)
                {
                    Debug.LogWarning("LayaAir3D : " + gameObject_0.name + " Camera and ParticleSystem can't exist at the same time !");
                }
                if (component3 != null)
                {
                    Debug.LogWarning("LayaAir3D : " + gameObject_0.name + " MeshFilter and ParticleSystem can't exist at the same time !");
                }
                if (component4 != null)
                {
                    Debug.LogWarning("LayaAir3D : " + gameObject_0.name + " MeshRenderer and ParticleSystem can't exist at the same time !");
                }
                if (component5 != null)
                {
                    Debug.LogWarning("LayaAir3D : " + gameObject_0.name + " SkinnedMeshRenderer and ParticleSystem can't exist at the same time !");
                }
            }
        }
        if (component9 != null)
        {
            if (component == null && component3 == null && component4 == null && component5 == null && component8 == null)
            {
                list.Add(Class32.Enum3.const_10);
            }
            else
            {
                if (component != null)
                {
                    Debug.LogWarning("LayaAir3D : " + gameObject_0.name + " Camera and Terrain can't exist at the same time !");
                }
                if (component3 != null)
                {
                    Debug.LogWarning("LayaAir3D : " + gameObject_0.name + " MeshFilter and Terrain can't exist at the same time !");
                }
                if (component4 != null)
                {
                    Debug.LogWarning("LayaAir3D : " + gameObject_0.name + " MeshRenderer and Terrain can't exist at the same time !");
                }
                if (component5 != null)
                {
                    Debug.LogWarning("LayaAir3D : " + gameObject_0.name + " SkinnedMeshRenderer and Terrain can't exist at the same time !");
                }
                if (component8 != null)
                {
                    Debug.LogWarning("LayaAir3D : " + gameObject_0.name + " ParticleSystem and Terrain can't exist at the same time !");
                }
            }
        }
        return list;
    }

    // Token: 0x060001FD RID: 509 RVA: 0x0001FC38 File Offset: 0x0001DE38
    static string smethod_62(string string_11, bool bool_14)
    {
        string_11 = string_11.Replace("<", "_");
        string_11 = string_11.Replace(">", "_");
        string_11 = string_11.Replace("\"", "_");
        string_11 = string_11.Replace("|", "_");
        string_11 = string_11.Replace("?", "_");
        string_11 = string_11.Replace("*", "_");
        string_11 = string_11.Replace("#", "_");
        if (bool_14)
        {
            string_11 = string_11.Replace("/", "_");
            string_11 = string_11.Replace(":", "_");
        }
        return string_11;
    }

    // Token: 0x060001FE RID: 510 RVA: 0x000031CB File Offset: 0x000013CB
    static bool smethod_63(float float_2, float float_3)
    {
        return (double)Math.Abs(float_2 - float_3) <= 0.01;
    }

    // Token: 0x060001FF RID: 511 RVA: 0x0001FCEC File Offset: 0x0001DEEC
    static bool smethod_64(string string_11, List<string> list_2)
    {
        int num = string_11.Length - 4;
        for (int i = 0; i < list_2.Count; i++)
        {
            if (string_11.IndexOf(list_2[i]) == num)
            {
                return true;
            }
        }
        return false;
    }

    // Token: 0x06000200 RID: 512 RVA: 0x0001FD28 File Offset: 0x0001DF28
    static void smethod_65(string string_11)
    {
        FileStream fileStream = new FileStream(Application.dataPath + "/StreamingAssets/LayaDemo/LayaAir3DSample.js", FileMode.Create, FileAccess.ReadWrite);
        StreamWriter streamWriter = new StreamWriter(fileStream);
        streamWriter.WriteLine("(function(global){");
        streamWriter.WriteLine("var Laya3D = global.Laya3D;");
        streamWriter.WriteLine("var Laya = global.Laya;");
        streamWriter.WriteLine("Laya3D.init(0, 0);");
        streamWriter.WriteLine("Laya.stage.scaleMode = Laya.Stage.SCALE_FULL;");
        streamWriter.WriteLine("Laya.stage.screenMode = Laya.Stage.SCREEN_NONE;");
        streamWriter.WriteLine("Laya.Stat.show();");
        if (Class32.int_0 == 0)
        {
            streamWriter.WriteLine("Laya.Scene3D.load('.previewres" + string_11 + ".ls', Laya.Handler.create(null, function(scene){Laya.stage.addChild(scene); }));");
        }
        else
        {
            streamWriter.WriteLine("var scene = Laya.stage.addChild(new Laya.Scene3D());");
            streamWriter.WriteLine("Laya.Sprite3D.load('.previewres" + string_11 + ".lh', Laya.Handler.create(null, function(sprite){scene.addChild(sprite); }));");
        }
        streamWriter.WriteLine("})(this);");
        streamWriter.Close();
        fileStream.Close();
    }

    // Token: 0x06000201 RID: 513 RVA: 0x0001FDF8 File Offset: 0x0001DFF8
    static long smethod_66()
    {
        return Convert.ToInt64((DateTime.UtcNow - new DateTime(1970, 1, 1, 0, 0, 0, 0)).TotalMilliseconds);
    }

    // Token: 0x06000202 RID: 514 RVA: 0x0001FE2C File Offset: 0x0001E02C
    static void smethod_67()
    {
        foreach (KeyValuePair<string, TextureInfo> keyValuePair in Class32.dictionary_1)
        {
            TextureInfo value = keyValuePair.Value;
            Texture2D texture = value.texture;
            if (keyValuePair.Value.format == 0)
            {
                byte[] bytes = texture.EncodeToJPG(Class32.int_1);
                File.WriteAllBytes(value.SavePath, bytes);
            }
            else
            {
                byte[] bytes2 = texture.EncodeToPNG();
                File.WriteAllBytes(value.SavePath, bytes2);
            }
        }
    }

    // Token: 0x06000203 RID: 515 RVA: 0x0001FEC8 File Offset: 0x0001E0C8
    static void smethod_68()
    {
        Class0.string_7 = "pvr";
        Class0.int_0 += Class32.dictionary_1.Count;
        foreach (KeyValuePair<string, TextureInfo> keyValuePair in Class32.dictionary_1)
        {
            TextureInfo value = keyValuePair.Value;
            Texture2D texture = value.texture;
            string savePath = value.SavePath;
            Class0.int_1 = value.MipMap;
            int num = Mathf.Max(texture.width, texture.height);
            if ((num & num - 1) != 0)
            {
                int num2 = 0;
                while ((double)num > Math.Pow(2.0, (double)num2))
                {
                    num2++;
                }
                num = (int)Math.Pow(2.0, (double)num2);
            }
            Class0.string_0 = string.Concat(new string[]
            {
                " -m ",
                value.MipMap.ToString(),
                " -r ",
                num.ToString(),
                ",",
                num.ToString(),
                " -q pvrtcfast "
            });
            if (value.format == 0)
            {
                Class0.string_6 = "PVRTC1_4_RGB";
            }
            else
            {
                Class0.string_6 = "PVRTC1_4";
            }
            Class0.byte_0 = ((value.format == 0) ? texture.EncodeToJPG(100) : texture.EncodeToPNG());
            Class0.string_5 = ((value.format == 0) ? "jpg" : "png");
            Class32.class0_0.method_1(savePath);
        }
    }

    // Token: 0x06000204 RID: 516 RVA: 0x0002006C File Offset: 0x0001E26C
    static void smethod_69()
    {
        Class0.string_7 = "ktx";
        foreach (KeyValuePair<string, TextureInfo> keyValuePair in Class32.dictionary_1)
        {
            TextureInfo value = keyValuePair.Value;
            Texture2D texture = value.texture;
            if (value.format == 0)
            {
                string savePath = value.SavePath;
                Class0.string_6 = "ETC1";
                Class0.byte_0 = texture.EncodeToJPG(100);
                Class0.string_5 = "jpg";
                Class0.int_1 = value.MipMap;
                Class0.string_0 = string.Concat(new string[]
                {
                    " -m ",
                    value.MipMap.ToString(),
                    " -r ",
                    texture.width.ToString(),
                    ",",
                    texture.height.ToString(),
                    " -q etcfastperceptual "
                });
                Class32.class0_0.method_1(savePath);
                Class0.int_0++;
            }
            else
            {
                string path = value.Path;
                string savePath2 = value.SavePath;
                TextureImporter textureImporter = AssetImporter.GetAtPath(path) as TextureImporter;
                textureImporter.isReadable = true;
                textureImporter.textureCompression = TextureImporterCompression.Uncompressed;
                AssetDatabase.ImportAsset(path);
                byte[] bytes = texture.EncodeToPNG();
                File.WriteAllBytes(savePath2, bytes);
            }
        }
    }

    // Token: 0x06000205 RID: 517 RVA: 0x000201DC File Offset: 0x0001E3DC
    static void smethod_70()
    {
        foreach (KeyValuePair<string, Mesh> keyValuePair in Class32.dictionary_2)
        {
            Class32.smethod_33(keyValuePair.Value, keyValuePair.Key, Class32.bool_4);
        }
    }

    // Token: 0x06000206 RID: 518 RVA: 0x00020240 File Offset: 0x0001E440
    static void smethod_71()
    {
        foreach (KeyValuePair<string, SkinnedMeshRenderer> keyValuePair in Class32.dictionary_3)
        {
            Class32.smethod_34(keyValuePair.Value, keyValuePair.Key, Class32.bool_4);
        }
    }

    // Token: 0x06000207 RID: 519 RVA: 0x000202A4 File Offset: 0x0001E4A4
    public static void smethod_72()
    {
        GameObject[] rootGameObjects = SceneManager.GetActiveScene().GetRootGameObjects();
        if (rootGameObjects.Length != 0)
        {
            for (int i = 0; i < rootGameObjects.Length; i++)
            {
                Class32.smethod_73(rootGameObjects[i].gameObject);
            }
        }
    }

    // Token: 0x06000208 RID: 520 RVA: 0x000202E0 File Offset: 0x0001E4E0
    static void smethod_73(GameObject gameObject_0)
    {
        List<Class32.Enum3> list = Class32.smethod_61(gameObject_0);
        Shader shader = Shader.Find("LayaAir3D/Mesh/BlinnPhong");
        Shader shader2 = Shader.Find("LayaAir3D/Particle/ShurikenParticle");
        Shader shader3 = Shader.Find("LayaAir3D/Trail");
        if (list.IndexOf(Class32.Enum3.const_6) != -1)
        {
            foreach (Material material in gameObject_0.GetComponent<MeshRenderer>().sharedMaterials)
            {
                if (!(material == null))
                {
                    material.shader = shader;
                    Class32.smethod_74(material);
                }
            }
        }
        if (list.IndexOf(Class32.Enum3.const_7) != -1)
        {
            foreach (Material material2 in gameObject_0.GetComponent<SkinnedMeshRenderer>().sharedMaterials)
            {
                if (!(material2 == null))
                {
                    material2.shader = shader;
                    Class32.smethod_74(material2);
                }
            }
        }
        if (list.IndexOf(Class32.Enum3.const_9) != -1)
        {
            Material sharedMaterial = gameObject_0.GetComponent<Renderer>().sharedMaterial;
            if (sharedMaterial != null)
            {
                sharedMaterial.shader = shader2;
                Class32.smethod_75(sharedMaterial);
            }
        }
        if (list.IndexOf(Class32.Enum3.const_13) != -1)
        {
            Material sharedMaterial2 = gameObject_0.GetComponent<Renderer>().sharedMaterial;
            if (sharedMaterial2 != null)
            {
                sharedMaterial2.shader = shader3;
                Class32.smethod_75(sharedMaterial2);
            }
        }
        if (gameObject_0.transform.childCount > 0)
        {
            for (int k = 0; k < gameObject_0.transform.childCount; k++)
            {
                Class32.smethod_73(gameObject_0.transform.GetChild(k).gameObject);
            }
        }
    }

    // Token: 0x06000209 RID: 521 RVA: 0x0002044C File Offset: 0x0001E64C
    static void smethod_74(Material material_0)
    {
        switch (material_0.GetInt("_Mode"))
        {
            case 0:
                material_0.SetInt("_AlphaTest", 0);
                material_0.SetInt("_AlphaBlend", 0);
                material_0.SetInt("_SrcBlend", 1);
                material_0.SetInt("_DstBlend", 0);
                material_0.SetInt("_ZWrite", 1);
                material_0.SetInt("_ZTest", 4);
                material_0.DisableKeyword("_ALPHATEST_ON");
                material_0.DisableKeyword("_ALPHABLEND_ON");
                material_0.DisableKeyword("EnableAlphaCutoff");
                material_0.EnableKeyword("EnableLighting");
                material_0.renderQueue = 2000;
                return;
            case 1:
                material_0.SetInt("_AlphaTest", 1);
                material_0.SetInt("_AlphaBlend", 0);
                material_0.SetInt("_SrcBlend", 1);
                material_0.SetInt("_DstBlend", 0);
                material_0.SetInt("_ZWrite", 1);
                material_0.SetInt("_ZTest", 4);
                material_0.EnableKeyword("_ALPHATEST_ON");
                material_0.DisableKeyword("_ALPHABLEND_ON");
                material_0.EnableKeyword("EnableAlphaCutoff");
                material_0.EnableKeyword("EnableLighting");
                material_0.renderQueue = 2450;
                return;
            case 2:
                material_0.SetInt("_AlphaTest", 0);
                material_0.SetInt("_AlphaBlend", 1);
                material_0.SetInt("_SrcBlend", 5);
                material_0.SetInt("_DstBlend", 10);
                material_0.SetInt("_ZWrite", 0);
                material_0.SetInt("_ZTest", 4);
                material_0.DisableKeyword("_ALPHATEST_ON");
                material_0.EnableKeyword("_ALPHABLEND_ON");
                material_0.DisableKeyword("EnableAlphaCutoff");
                material_0.EnableKeyword("EnableLighting");
                material_0.renderQueue = 3000;
                return;
            default:
                material_0.SetInt("_AlphaTest", 0);
                material_0.SetInt("_AlphaBlend", 0);
                material_0.SetInt("_SrcBlend", 1);
                material_0.SetInt("_DstBlend", 0);
                material_0.SetInt("_ZWrite", 1);
                material_0.SetInt("_ZTest", 4);
                material_0.DisableKeyword("_ALPHATEST_ON");
                material_0.DisableKeyword("_ALPHABLEND_ON");
                material_0.DisableKeyword("EnableAlphaCutoff");
                material_0.EnableKeyword("EnableLighting");
                material_0.renderQueue = 2000;
                return;
        }
    }

    // Token: 0x0600020A RID: 522 RVA: 0x00020678 File Offset: 0x0001E878
    static void smethod_75(Material material_0)
    {
        int @int = material_0.GetInt("_Mode");
        if (@int == 0)
        {
            material_0.SetInt("_AlphaTest", 0);
            material_0.SetInt("_AlphaBlend", 1);
            material_0.SetInt("_SrcBlend", 5);
            material_0.SetInt("_DstBlend", 1);
            material_0.SetInt("_ZWrite", 0);
            material_0.SetInt("_ZTest", 4);
            material_0.DisableKeyword("_ALPHATEST_ON");
            material_0.EnableKeyword("_ALPHABLEND_ON");
            material_0.renderQueue = 3000;
            return;
        }
        if (@int != 1)
        {
            material_0.SetInt("_AlphaTest", 0);
            material_0.SetInt("_AlphaBlend", 1);
            material_0.SetInt("_SrcBlend", 5);
            material_0.SetInt("_DstBlend", 10);
            material_0.SetInt("_ZWrite", 0);
            material_0.SetInt("_ZTest", 4);
            material_0.DisableKeyword("_ALPHATEST_ON");
            material_0.EnableKeyword("_ALPHABLEND_ON");
            material_0.renderQueue = 3000;
            return;
        }
        material_0.SetInt("_AlphaTest", 0);
        material_0.SetInt("_AlphaBlend", 1);
        material_0.SetInt("_SrcBlend", 5);
        material_0.SetInt("_DstBlend", 10);
        material_0.SetInt("_ZWrite", 0);
        material_0.SetInt("_ZTest", 4);
        material_0.DisableKeyword("_ALPHATEST_ON");
        material_0.EnableKeyword("_ALPHABLEND_ON");
        material_0.renderQueue = 3000;
    }

    // Token: 0x0600020B RID: 523 RVA: 0x000023C6 File Offset: 0x000005C6
    public Class32()
    {


    }

    // Token: 0x040001C6 RID: 454
    public static string string_0;

    // Token: 0x040001C7 RID: 455
    public static Dictionary<string, string> dictionary_0;

    // Token: 0x040001C8 RID: 456
    public static int int_0;

    // Token: 0x040001C9 RID: 457
    public static bool bool_0;

    // Token: 0x040001CA RID: 458
    public static bool bool_1;

    // Token: 0x040001CB RID: 459
    public static bool bool_2;

    // Token: 0x040001CC RID: 460
    public static bool bool_3;

    // Token: 0x040001CD RID: 461
    public static bool bool_4;

    // Token: 0x040001CE RID: 462
    public static bool bool_5;

    // Token: 0x040001CF RID: 463
    public static int int_1;

    // Token: 0x040001D0 RID: 464
    public static bool bool_6;

    // Token: 0x040001D1 RID: 465
    public static int int_2;

    // Token: 0x040001D2 RID: 466
    public static bool bool_7;

    // Token: 0x040001D3 RID: 467
    public static bool bool_8;

    // Token: 0x040001D4 RID: 468
    public static bool bool_9;

    // Token: 0x040001D5 RID: 469
    public static string string_1;

    // Token: 0x040001D6 RID: 470
    public static string string_2;

    // Token: 0x040001D7 RID: 471
    public static float float_0;

    // Token: 0x040001D8 RID: 472
    public static bool bool_10;

    // Token: 0x040001D9 RID: 473
    public static bool bool_11;

    // Token: 0x040001DA RID: 474
    public static bool bool_12;

    // Token: 0x040001DB RID: 475
    public static int int_3;

    // Token: 0x040001DC RID: 476
    static bool bool_13;

    // Token: 0x040001DD RID: 477
    static int int_4;

    // Token: 0x040001DE RID: 478
    static float float_1;

    // Token: 0x040001DF RID: 479
    static int[] int_5;

    // Token: 0x040001E0 RID: 480
    static string string_3;

    // Token: 0x040001E1 RID: 481
    static List<string> list_0;

    // Token: 0x040001E2 RID: 482
    static int int_6;

    // Token: 0x040001E3 RID: 483
    static int int_7;

    // Token: 0x040001E4 RID: 484
    static int int_8;

    // Token: 0x040001E5 RID: 485
    static int int_9;

    // Token: 0x040001E6 RID: 486
    static int int_10;

    // Token: 0x040001E7 RID: 487
    static int int_11;

    // Token: 0x040001E8 RID: 488
    public static Dictionary<string, TextureInfo> dictionary_1;

    // Token: 0x040001E9 RID: 489
    public static Dictionary<string, Mesh> dictionary_2;

    // Token: 0x040001EA RID: 490
    public static Dictionary<string, SkinnedMeshRenderer> dictionary_3;

    // Token: 0x040001EB RID: 491
    static Class0 class0_0;

    // Token: 0x040001EC RID: 492
    static string string_4;

    // Token: 0x040001ED RID: 493
    static string string_5;

    // Token: 0x040001EE RID: 494
    static string string_6;

    // Token: 0x040001EF RID: 495
    static string string_7;

    // Token: 0x040001F0 RID: 496
    static string string_8;

    // Token: 0x040001F1 RID: 497
    static string string_9;

    // Token: 0x040001F2 RID: 498
    static string string_10;

    // Token: 0x040001F3 RID: 499
    public static int int_12;

    // Token: 0x040001F4 RID: 500
    public static Dictionary<string, int> dictionary_4;

    // Token: 0x040001F5 RID: 501
    public static List<string> list_1;
}
