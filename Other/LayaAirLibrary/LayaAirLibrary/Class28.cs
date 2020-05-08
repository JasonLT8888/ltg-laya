using System;
using System.Collections;
using System.Collections.Generic;
using System.Reflection;

using UnityEditor;
using UnityEngine;

// Token: 0x0200002F RID: 47
class Class28
{
	// Token: 0x02000030 RID: 48
	internal class Class29
	{
		// Token: 0x060001A0 RID: 416 RVA: 0x0000E270 File Offset: 0x0000C470
		public Class29(IEnumerator ienumerator_1, int int_1, string string_4)
		{
			
			this.interface0_0 = default(Class28.Struct0);
			this.string_2 = "";
			
			this.ienumerator_0 = ienumerator_1;
			this.int_0 = int_1;
			this.string_3 = string_4;
			this.string_1 = int_1 + "_" + string_4;
			if (ienumerator_1 != null)
			{
				string[] array = ienumerator_1.ToString().Split(new char[]
				{
					'<',
					'>'
				});
				if (array.Length == 3)
				{
					this.string_2 = array[1];
				}
			}
			this.string_0 = string.Concat(new object[]
			{
				int_1,
				"_",
				string_4,
				"_",
				this.string_2
			});
		}

		// Token: 0x060001A1 RID: 417 RVA: 0x0000E338 File Offset: 0x0000C538
		public Class29(string string_4, int int_1, string string_5)
		{
			
			this.interface0_0 = default(Class28.Struct0);
			this.string_2 = "";
			
			this.string_2 = string_4;
			this.int_0 = int_1;
			this.string_3 = string_5;
			this.string_1 = int_1 + "_" + string_5;
			this.string_0 = string.Concat(new object[]
			{
				int_1,
				"_",
				string_5,
				"_",
				this.string_2
			});
		}

		// Token: 0x040001B9 RID: 441
		public Class28.Interface0 interface0_0;

		// Token: 0x040001BA RID: 442
		public IEnumerator ienumerator_0;

		// Token: 0x040001BB RID: 443
		public string string_0;

		// Token: 0x040001BC RID: 444
		public string string_1;

		// Token: 0x040001BD RID: 445
		public string string_2;

		// Token: 0x040001BE RID: 446
		public int int_0;

		// Token: 0x040001BF RID: 447
		public string string_3;

		// Token: 0x040001C0 RID: 448
		public bool bool_0;
	}

	// Token: 0x02000031 RID: 49
	public interface Interface0
	{
		// Token: 0x060001A2 RID: 418
		bool imethod_0(float float_0);
	}

	// Token: 0x02000032 RID: 50
	struct Struct0 : Class28.Interface0
	{
		// Token: 0x060001A3 RID: 419 RVA: 0x00003139 File Offset: 0x00001339
		public bool imethod_0(float float_0)
		{
			return true;
		}
	}

	// Token: 0x02000033 RID: 51
	struct Struct1 : Class28.Interface0
	{
		// Token: 0x060001A4 RID: 420 RVA: 0x0000313C File Offset: 0x0000133C
		public bool imethod_0(float float_1)
		{
			this.float_0 -= float_1;
			return this.float_0 < 0f;
		}

		// Token: 0x040001C1 RID: 449
		public float float_0;
	}

	// Token: 0x02000034 RID: 52
	struct Struct2 : Class28.Interface0
	{
		// Token: 0x060001A5 RID: 421 RVA: 0x00003159 File Offset: 0x00001359
		public bool imethod_0(float float_0)
		{
			return !this.customYieldInstruction_0.keepWaiting;
		}

		// Token: 0x040001C2 RID: 450
		public CustomYieldInstruction customYieldInstruction_0;
	}

	// Token: 0x02000035 RID: 53
	struct Struct3 : Class28.Interface0
	{
		// Token: 0x060001A6 RID: 422 RVA: 0x00003169 File Offset: 0x00001369
		public bool imethod_0(float float_0)
		{
			return this.www_0.isDone;
		}

		// Token: 0x040001C3 RID: 451
		public WWW www_0;
	}

	// Token: 0x02000036 RID: 54
	struct Struct4 : Class28.Interface0
	{
		// Token: 0x060001A7 RID: 423 RVA: 0x00003176 File Offset: 0x00001376
		public bool imethod_0(float float_0)
		{
			return this.asyncOperation_0.isDone;
		}

		// Token: 0x040001C4 RID: 452
		public AsyncOperation asyncOperation_0;
	}

	// Token: 0x02000037 RID: 55
	struct Struct5 : Class28.Interface0
	{
		// Token: 0x060001A8 RID: 424 RVA: 0x00003183 File Offset: 0x00001383
		public bool imethod_0(float float_0)
		{
			return this.class29_0.bool_0;
		}

		// Token: 0x040001C5 RID: 453
		public Class28.Class29 class29_0;
	}

	// Token: 0x0600018A RID: 394 RVA: 0x00002FEB File Offset: 0x000011EB
	public static Class28.Class29 smethod_0(IEnumerator ienumerator_0, object object_0)
	{
		Class28.smethod_6();
		return Class28.class28_0.method_5(ienumerator_0, object_0);
	}

	// Token: 0x0600018B RID: 395 RVA: 0x00002FFE File Offset: 0x000011FE
	public static Class28.Class29 smethod_1(string string_0, object object_0)
	{
		return Class28.smethod_2(string_0, null, object_0);
	}

	// Token: 0x0600018C RID: 396 RVA: 0x0000DD00 File Offset: 0x0000BF00
	public static Class28.Class29 smethod_2(string string_0, object object_0, object object_1)
	{
		MethodInfo method = object_1.GetType().GetMethod(string_0, BindingFlags.Instance | BindingFlags.Public | BindingFlags.NonPublic);
		if (method == null)
		{
			Debug.LogError("Coroutine '" + string_0 + "' couldn't be started, the method doesn't exist!");
		}
		object obj;
		if (object_0 == null)
		{
			obj = method.Invoke(object_1, null);
		}
		else
		{
			obj = method.Invoke(object_1, new object[]
			{
				object_0
			});
		}
		if (obj is IEnumerator)
		{
			Class28.smethod_6();
			return Class28.class28_0.method_5((IEnumerator)obj, object_1);
		}
		Debug.LogError("Coroutine '" + string_0 + "' couldn't be started, the method doesn't return an IEnumerator!");
		return null;
	}

	// Token: 0x0600018D RID: 397 RVA: 0x00003008 File Offset: 0x00001208
	public static void smethod_3(IEnumerator ienumerator_0, object object_0)
	{
		Class28.smethod_6();
		Class28.class28_0.method_1(ienumerator_0, object_0);
	}

	// Token: 0x0600018E RID: 398 RVA: 0x0000301B File Offset: 0x0000121B
	public static void smethod_4(string string_0, object object_0)
	{
		Class28.smethod_6();
		Class28.class28_0.method_2(string_0, object_0);
	}

	// Token: 0x0600018F RID: 399 RVA: 0x0000302E File Offset: 0x0000122E
	public static void smethod_5(object object_0)
	{
		Class28.smethod_6();
		Class28.class28_0.method_4(object_0);
	}

	// Token: 0x06000190 RID: 400 RVA: 0x00003040 File Offset: 0x00001240
	static void smethod_6()
	{
		if (Class28.class28_0 == null)
		{
			Class28.class28_0 = new Class28();
			Class28.class28_0.method_0();
		}
	}

	// Token: 0x06000191 RID: 401 RVA: 0x0000305D File Offset: 0x0000125D
	void method_0()
	{
		this.dateTime_0 = DateTime.Now;
		EditorApplication.update = (EditorApplication.CallbackFunction)Delegate.Combine(EditorApplication.update, new EditorApplication.CallbackFunction(this.method_9));
	}

	// Token: 0x06000192 RID: 402 RVA: 0x0000308A File Offset: 0x0000128A
	void method_1(IEnumerator ienumerator_0, object object_0)
	{
		this.method_3(this.method_7(ienumerator_0, object_0));
	}

	// Token: 0x06000193 RID: 403 RVA: 0x0000309A File Offset: 0x0000129A
	void method_2(string string_0, object object_0)
	{
		this.method_3(this.method_8(string_0, object_0));
	}

	// Token: 0x06000194 RID: 404 RVA: 0x0000DD8C File Offset: 0x0000BF8C
	void method_3(Class28.Class29 class29_0)
	{
		if (this.dictionary_0.ContainsKey(class29_0.string_0))
		{
			this.dictionary_1[class29_0.string_1].Remove(class29_0.string_0);
			this.dictionary_0.Remove(class29_0.string_0);
		}
	}

	// Token: 0x06000195 RID: 405 RVA: 0x0000DDDC File Offset: 0x0000BFDC
	void method_4(object object_0)
	{
		Class28.Class29 @class = this.method_7(null, object_0);
		if (this.dictionary_1.ContainsKey(@class.string_1))
		{
			foreach (KeyValuePair<string, Class28.Class29> keyValuePair in this.dictionary_1[@class.string_1])
			{
				this.dictionary_0.Remove(keyValuePair.Value.string_0);
			}
			this.dictionary_1.Remove(@class.string_1);
		}
	}

	// Token: 0x06000196 RID: 406 RVA: 0x0000DE7C File Offset: 0x0000C07C
	Class28.Class29 method_5(IEnumerator ienumerator_0, object object_0)
	{
		if (ienumerator_0 == null)
		{
			Debug.LogException(new Exception("IEnumerator is null!"), null);
		}
		Class28.Class29 @class = this.method_7(ienumerator_0, object_0);
		this.method_6(@class);
		return @class;
	}

	// Token: 0x06000197 RID: 407 RVA: 0x0000DEB0 File Offset: 0x0000C0B0
	void method_6(Class28.Class29 class29_0)
	{
		if (!this.dictionary_0.ContainsKey(class29_0.string_0))
		{
			List<Class28.Class29> value = new List<Class28.Class29>();
			this.dictionary_0.Add(class29_0.string_0, value);
		}
		this.dictionary_0[class29_0.string_0].Add(class29_0);
		if (!this.dictionary_1.ContainsKey(class29_0.string_1))
		{
			Dictionary<string, Class28.Class29> value2 = new Dictionary<string, Class28.Class29>();
			this.dictionary_1.Add(class29_0.string_1, value2);
		}
		if (!this.dictionary_1[class29_0.string_1].ContainsKey(class29_0.string_0))
		{
			this.dictionary_1[class29_0.string_1].Add(class29_0.string_0, class29_0);
		}
		Class28.smethod_7(class29_0);
	}

	// Token: 0x06000198 RID: 408 RVA: 0x000030AA File Offset: 0x000012AA
	Class28.Class29 method_7(IEnumerator ienumerator_0, object object_0)
	{
		return new Class28.Class29(ienumerator_0, object_0.GetHashCode(), object_0.GetType().ToString());
	}

	// Token: 0x06000199 RID: 409 RVA: 0x000030C3 File Offset: 0x000012C3
	Class28.Class29 method_8(string string_0, object object_0)
	{
		return new Class28.Class29(string_0, object_0.GetHashCode(), object_0.GetType().ToString());
	}

	// Token: 0x0600019A RID: 410 RVA: 0x0000DF6C File Offset: 0x0000C16C
	void method_9()
	{
		float float_ = (float)(DateTime.Now.Subtract(this.dateTime_0).TotalMilliseconds / 1000.0);
		this.dateTime_0 = DateTime.Now;
		if (this.dictionary_0.Count == 0)
		{
			return;
		}
		this.list_0.Clear();
		foreach (KeyValuePair<string, List<Class28.Class29>> keyValuePair in this.dictionary_0)
		{
			this.list_0.Add(keyValuePair.Value);
		}
		for (int i = this.list_0.Count - 1; i >= 0; i--)
		{
			List<Class28.Class29> list = this.list_0[i];
			for (int j = list.Count - 1; j >= 0; j--)
			{
				Class28.Class29 @class = list[j];
				if (@class.interface0_0.imethod_0(float_))
				{
					if (!Class28.smethod_7(@class))
					{
						list.RemoveAt(j);
						@class.interface0_0 = null;
						@class.bool_0 = true;
					}
					if (list.Count == 0)
					{
						this.dictionary_0.Remove(@class.string_1);
					}
				}
			}
		}
	}

	// Token: 0x0600019B RID: 411 RVA: 0x000030DC File Offset: 0x000012DC
	static bool smethod_7(Class28.Class29 class29_0)
	{
		return class29_0.ienumerator_0.MoveNext() && Class28.smethod_8(class29_0);
	}

	// Token: 0x0600019C RID: 412 RVA: 0x0000E0B8 File Offset: 0x0000C2B8
	static bool smethod_8(Class28.Class29 class29_0)
	{
		object obj = class29_0.ienumerator_0.Current;
		if (obj == null)
		{
			class29_0.interface0_0 = default(Class28.Struct0);
		}
		else if (obj is WaitForSeconds)
		{
			float float_ = float.Parse(Class28.smethod_9(typeof(WaitForSeconds), obj, "m_Seconds").ToString());
			class29_0.interface0_0 = new Class28.Struct1
			{
				float_0 = float_
			};
		}
		else if (obj is CustomYieldInstruction)
		{
			class29_0.interface0_0 = new Class28.Struct2
			{
				customYieldInstruction_0 = (obj as CustomYieldInstruction)
			};
		}
		else if (obj is WWW)
		{
			class29_0.interface0_0 = new Class28.Struct3
			{
				www_0 = (WWW)obj
			};
		}
		else if (!(obj is WaitForFixedUpdate) && !(obj is WaitForEndOfFrame))
		{
			if (obj is AsyncOperation)
			{
				class29_0.interface0_0 = new Class28.Struct4
				{
					asyncOperation_0 = (AsyncOperation)obj
				};
			}
			else if (obj is Class28.Class29)
			{
				class29_0.interface0_0 = new Class28.Struct5
				{
					class29_0 = (Class28.Class29)obj
				};
			}
			else
			{
				Debug.LogException(new Exception(string.Concat(new object[]
				{
					"<",
					class29_0.string_2,
					"> yielded an unknown or unsupported type! (",
					obj.GetType(),
					")"
				})), null);
				class29_0.interface0_0 = default(Class28.Struct0);
			}
		}
		else
		{
			class29_0.interface0_0 = default(Class28.Struct0);
		}
		return true;
	}

	// Token: 0x0600019D RID: 413 RVA: 0x000030F3 File Offset: 0x000012F3
	static object smethod_9(Type type_0, object object_0, string string_0)
	{
		return type_0.GetField(string_0, BindingFlags.Instance | BindingFlags.Static | BindingFlags.Public | BindingFlags.NonPublic).GetValue(object_0);
	}

	// Token: 0x0600019E RID: 414 RVA: 0x00003104 File Offset: 0x00001304
	public Class28()
	{
		
		this.dictionary_0 = new Dictionary<string, List<Class28.Class29>>();
		this.list_0 = new List<List<Class28.Class29>>();
		this.dictionary_1 = new Dictionary<string, Dictionary<string, Class28.Class29>>();
		
	}

	// Token: 0x0600019F RID: 415 RVA: 0x00003132 File Offset: 0x00001332
	// Note: this type is marked as 'beforefieldinit'.
	static Class28()
	{
		
	}

	// Token: 0x040001B4 RID: 436
	static Class28 class28_0;

	// Token: 0x040001B5 RID: 437
	Dictionary<string, List<Class28.Class29>> dictionary_0;

	// Token: 0x040001B6 RID: 438
	List<List<Class28.Class29>> list_0;

	// Token: 0x040001B7 RID: 439
	Dictionary<string, Dictionary<string, Class28.Class29>> dictionary_1;

	// Token: 0x040001B8 RID: 440
	DateTime dateTime_0;
}
