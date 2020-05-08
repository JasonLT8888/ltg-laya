using System;

using UnityEngine;

// Token: 0x02000039 RID: 57
class Class31
{
	// Token: 0x060001B7 RID: 439 RVA: 0x0000E70C File Offset: 0x0000C90C
	public static bool smethod_0(Matrix4x4 matrix4x4_0, out Vector3 vector3_0, out Quaternion quaternion_0, out Vector3 vector3_1)
	{
		Matrix4x4 matrix4x4_;
		Class31.smethod_1(matrix4x4_0, out vector3_0, out matrix4x4_, out vector3_1);
		Class31.smethod_2(matrix4x4_, out quaternion_0);
		return true;
	}

	// Token: 0x060001B8 RID: 440 RVA: 0x0000E72C File Offset: 0x0000C92C
	static bool smethod_1(Matrix4x4 matrix4x4_0, out Vector3 vector3_0, out Matrix4x4 matrix4x4_1, out Vector3 vector3_1)
	{
		vector3_1.x = matrix4x4_0.m30;
		vector3_1.y = matrix4x4_0.m31;
		vector3_1.z = matrix4x4_0.m32;
		vector3_0.x = (float)Math.Sqrt((double)(matrix4x4_0.m00 * matrix4x4_0.m00 + matrix4x4_0.m01 * matrix4x4_0.m01 + matrix4x4_0.m02 * matrix4x4_0.m02));
		vector3_0.y = (float)Math.Sqrt((double)(matrix4x4_0.m10 * matrix4x4_0.m10 + matrix4x4_0.m11 * matrix4x4_0.m11 + matrix4x4_0.m12 * matrix4x4_0.m12));
		vector3_0.z = (float)Math.Sqrt((double)(matrix4x4_0.m20 * matrix4x4_0.m20 + matrix4x4_0.m21 * matrix4x4_0.m21 + matrix4x4_0.m22 * matrix4x4_0.m22));
		if (!Class31.smethod_3(vector3_0.x) && !Class31.smethod_3(vector3_0.y) && !Class31.smethod_3(vector3_0.z))
		{
			Vector3 vector = new Vector3(matrix4x4_0.m20 / vector3_0.z, matrix4x4_0.m21 / vector3_0.z, matrix4x4_0.m22 / vector3_0.z);
			Vector3 vector2 = Vector3.Cross(vector, new Vector3(matrix4x4_0.m00 / vector3_0.x, matrix4x4_0.m01 / vector3_0.x, matrix4x4_0.m02 / vector3_0.x));
			Vector3 vector3 = Vector3.Cross(vector2, vector);
			matrix4x4_1 = Matrix4x4.identity;
			matrix4x4_1.m00 = vector3.x;
			matrix4x4_1.m01 = vector3.y;
			matrix4x4_1.m02 = vector3.z;
			matrix4x4_1.m10 = vector2.x;
			matrix4x4_1.m11 = vector2.y;
			matrix4x4_1.m12 = vector2.z;
			matrix4x4_1.m20 = vector.x;
			matrix4x4_1.m21 = vector.y;
			matrix4x4_1.m22 = vector.z;
			vector3_0.x = ((Vector3.Dot(vector3, new Vector3(matrix4x4_0.m00, matrix4x4_0.m01, matrix4x4_0.m02)) > 0f) ? vector3_0.x : (-vector3_0.x));
			vector3_0.y = ((Vector3.Dot(vector2, new Vector3(matrix4x4_0.m10, matrix4x4_0.m11, matrix4x4_0.m12)) > 0f) ? vector3_0.y : (-vector3_0.y));
			vector3_0.z = ((Vector3.Dot(vector, new Vector3(matrix4x4_0.m20, matrix4x4_0.m21, matrix4x4_0.m22)) > 0f) ? vector3_0.z : (-vector3_0.z));
			return true;
		}
		matrix4x4_1 = Matrix4x4.identity;
		return false;
	}

	// Token: 0x060001B9 RID: 441 RVA: 0x0000E9C8 File Offset: 0x0000CBC8
	static void smethod_2(Matrix4x4 matrix4x4_0, out Quaternion quaternion_0)
	{
		float num = matrix4x4_0.m00 + matrix4x4_0.m11 + matrix4x4_0.m22;
		float num2;
		if (num > 0f)
		{
			num2 = (float)Math.Sqrt((double)(num + 1f));
			quaternion_0.w = num2 * 0.5f;
			num2 = 0.5f / num2;
			quaternion_0.x = (matrix4x4_0.m12 - matrix4x4_0.m21) * num2;
			quaternion_0.y = (matrix4x4_0.m20 - matrix4x4_0.m02) * num2;
			quaternion_0.z = (matrix4x4_0.m01 - matrix4x4_0.m10) * num2;
			return;
		}
		float num3;
		if (matrix4x4_0.m00 >= matrix4x4_0.m11 && matrix4x4_0.m00 >= matrix4x4_0.m22)
		{
			num2 = (float)Math.Sqrt((double)(1f + matrix4x4_0.m00 - matrix4x4_0.m11 - matrix4x4_0.m22));
			num3 = 0.5f / num2;
			quaternion_0.x = 0.5f * num2;
			quaternion_0.y = (matrix4x4_0.m01 + matrix4x4_0.m10) * num3;
			quaternion_0.z = (matrix4x4_0.m02 + matrix4x4_0.m20) * num3;
			quaternion_0.w = (matrix4x4_0.m12 - matrix4x4_0.m21) * num3;
			return;
		}
		if (matrix4x4_0.m11 > matrix4x4_0.m22)
		{
			num2 = (float)Math.Sqrt((double)(1f + matrix4x4_0.m11 - matrix4x4_0.m00 - matrix4x4_0.m22));
			num3 = 0.5f / num2;
			quaternion_0.x = (matrix4x4_0.m10 + matrix4x4_0.m01) * num3;
			quaternion_0.y = 0.5f * num2;
			quaternion_0.z = (matrix4x4_0.m21 + matrix4x4_0.m12) * num3;
			quaternion_0.w = (matrix4x4_0.m20 - matrix4x4_0.m02) * num3;
			return;
		}
		num2 = (float)Math.Sqrt((double)(1f + matrix4x4_0.m22 - matrix4x4_0.m00 - matrix4x4_0.m11));
		num3 = 0.5f / num2;
		quaternion_0.x = (matrix4x4_0.m20 + matrix4x4_0.m02) * num3;
		quaternion_0.y = (matrix4x4_0.m21 + matrix4x4_0.m12) * num3;
		quaternion_0.z = 0.5f * num2;
		quaternion_0.w = (matrix4x4_0.m01 - matrix4x4_0.m10) * num3;
	}

	// Token: 0x060001BA RID: 442 RVA: 0x00003190 File Offset: 0x00001390
	static bool smethod_3(float float_0)
	{
		return Math.Abs(float_0) < 1E-06f;
	}

	// Token: 0x060001BB RID: 443 RVA: 0x0000319F File Offset: 0x0000139F
	public static bool smethod_4(float float_0, float float_1)
	{
		return (double)(float_0 - float_1) <= 0.001;
	}

	// Token: 0x060001BC RID: 444 RVA: 0x0000EBE8 File Offset: 0x0000CDE8
	public static float smethod_5(float float_0, float float_1, float float_2, float float_3, float float_4, float float_5, float float_6, out float float_7)
	{
		float result = (2f * float_6 * float_6 * float_6 - 3f * float_6 * float_6 + 1f) * float_2 + (float_6 * float_6 * float_6 - 2f * float_6 * float_6 + float_6) * float_4 + (-2f * float_6 * float_6 * float_6 + 3f * float_6 * float_6) * float_3 + (float_6 * float_6 * float_6 - float_6 * float_6) * float_5;
		float_7 = (6f * float_6 * float_6 - 6f * float_6) * float_2 + (3f * float_6 * float_6 - 4f * float_6 + 1f) * float_4 + (-6f * float_6 * float_6 + 6f * float_6) * float_3 + (3f * float_6 * float_6 - 2f * float_6) * float_5;
		float_7 /= float_1 - float_0;
		return result;
	}

	// Token: 0x060001BD RID: 445 RVA: 0x000023C6 File Offset: 0x000005C6
	public Class31()
	{
		
		
	}
}
