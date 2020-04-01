using mVjiDBJbRPt2wl7USA;
using System;
using UnityEngine;

internal class o
{
	public static bool a(Matrix4x4 A_0, out Vector3 A_1, out Quaternion A_2, out Vector3 A_3)
	{
		//IL_0000: Unknown result type (might be due to invalid IL or missing references)
		//IL_000b: Unknown result type (might be due to invalid IL or missing references)
		a(A_0, out A_1, out Matrix4x4 A_4, out A_3);
		a(A_4, out A_2);
		return true;
	}

	private static bool a(Matrix4x4 A_0, out Vector3 A_1, out Matrix4x4 A_2, out Vector3 A_3)
	{
		//IL_0001: Unknown result type (might be due to invalid IL or missing references)
		//IL_000d: Unknown result type (might be due to invalid IL or missing references)
		//IL_0019: Unknown result type (might be due to invalid IL or missing references)
		//IL_0025: Unknown result type (might be due to invalid IL or missing references)
		//IL_002b: Unknown result type (might be due to invalid IL or missing references)
		//IL_0032: Unknown result type (might be due to invalid IL or missing references)
		//IL_0038: Unknown result type (might be due to invalid IL or missing references)
		//IL_0040: Unknown result type (might be due to invalid IL or missing references)
		//IL_0046: Unknown result type (might be due to invalid IL or missing references)
		//IL_005b: Unknown result type (might be due to invalid IL or missing references)
		//IL_0061: Unknown result type (might be due to invalid IL or missing references)
		//IL_0068: Unknown result type (might be due to invalid IL or missing references)
		//IL_006e: Unknown result type (might be due to invalid IL or missing references)
		//IL_0076: Unknown result type (might be due to invalid IL or missing references)
		//IL_007c: Unknown result type (might be due to invalid IL or missing references)
		//IL_0091: Unknown result type (might be due to invalid IL or missing references)
		//IL_0097: Unknown result type (might be due to invalid IL or missing references)
		//IL_009e: Unknown result type (might be due to invalid IL or missing references)
		//IL_00a4: Unknown result type (might be due to invalid IL or missing references)
		//IL_00ac: Unknown result type (might be due to invalid IL or missing references)
		//IL_00b2: Unknown result type (might be due to invalid IL or missing references)
		//IL_00ee: Unknown result type (might be due to invalid IL or missing references)
		//IL_00f3: Unknown result type (might be due to invalid IL or missing references)
		//IL_00fc: Unknown result type (might be due to invalid IL or missing references)
		//IL_0109: Unknown result type (might be due to invalid IL or missing references)
		//IL_0116: Unknown result type (might be due to invalid IL or missing references)
		//IL_0128: Unknown result type (might be due to invalid IL or missing references)
		//IL_0129: Unknown result type (might be due to invalid IL or missing references)
		//IL_0136: Unknown result type (might be due to invalid IL or missing references)
		//IL_0143: Unknown result type (might be due to invalid IL or missing references)
		//IL_0150: Unknown result type (might be due to invalid IL or missing references)
		//IL_0155: Unknown result type (might be due to invalid IL or missing references)
		//IL_015a: Unknown result type (might be due to invalid IL or missing references)
		//IL_015b: Unknown result type (might be due to invalid IL or missing references)
		//IL_015c: Unknown result type (might be due to invalid IL or missing references)
		//IL_015d: Unknown result type (might be due to invalid IL or missing references)
		//IL_0162: Unknown result type (might be due to invalid IL or missing references)
		//IL_0164: Unknown result type (might be due to invalid IL or missing references)
		//IL_0169: Unknown result type (might be due to invalid IL or missing references)
		//IL_016f: Unknown result type (might be due to invalid IL or missing references)
		//IL_017b: Unknown result type (might be due to invalid IL or missing references)
		//IL_0187: Unknown result type (might be due to invalid IL or missing references)
		//IL_0193: Unknown result type (might be due to invalid IL or missing references)
		//IL_019f: Unknown result type (might be due to invalid IL or missing references)
		//IL_01ab: Unknown result type (might be due to invalid IL or missing references)
		//IL_01b7: Unknown result type (might be due to invalid IL or missing references)
		//IL_01c3: Unknown result type (might be due to invalid IL or missing references)
		//IL_01cf: Unknown result type (might be due to invalid IL or missing references)
		//IL_01db: Unknown result type (might be due to invalid IL or missing references)
		//IL_01dc: Unknown result type (might be due to invalid IL or missing references)
		//IL_01e2: Unknown result type (might be due to invalid IL or missing references)
		//IL_01e8: Unknown result type (might be due to invalid IL or missing references)
		//IL_01ee: Unknown result type (might be due to invalid IL or missing references)
		//IL_0214: Unknown result type (might be due to invalid IL or missing references)
		//IL_0215: Unknown result type (might be due to invalid IL or missing references)
		//IL_021b: Unknown result type (might be due to invalid IL or missing references)
		//IL_0221: Unknown result type (might be due to invalid IL or missing references)
		//IL_0227: Unknown result type (might be due to invalid IL or missing references)
		//IL_024d: Unknown result type (might be due to invalid IL or missing references)
		//IL_024e: Unknown result type (might be due to invalid IL or missing references)
		//IL_0254: Unknown result type (might be due to invalid IL or missing references)
		//IL_025a: Unknown result type (might be due to invalid IL or missing references)
		//IL_0260: Unknown result type (might be due to invalid IL or missing references)
		A_3.x = A_0.m30;
		A_3.y = A_0.m31;
		A_3.z = A_0.m32;
		A_1.x = (float)Math.Sqrt(A_0.m00 * A_0.m00 + A_0.m01 * A_0.m01 + A_0.m02 * A_0.m02);
		A_1.y = (float)Math.Sqrt(A_0.m10 * A_0.m10 + A_0.m11 * A_0.m11 + A_0.m12 * A_0.m12);
		A_1.z = (float)Math.Sqrt(A_0.m20 * A_0.m20 + A_0.m21 * A_0.m21 + A_0.m22 * A_0.m22);
		if (a(A_1.x) || a(A_1.y) || a(A_1.z))
		{
			A_2 = Matrix4x4.get_identity();
			return false;
		}
		Vector3 val = default(Vector3);
		((Vector3)(ref val))._002Ector(A_0.m20 / A_1.z, A_0.m21 / A_1.z, A_0.m22 / A_1.z);
		Vector3 val2 = Vector3.Cross(val, new Vector3(A_0.m00 / A_1.x, A_0.m01 / A_1.x, A_0.m02 / A_1.x));
		Vector3 val3 = Vector3.Cross(val2, val);
		A_2 = Matrix4x4.get_identity();
		A_2.m00 = val3.x;
		A_2.m01 = val3.y;
		A_2.m02 = val3.z;
		A_2.m10 = val2.x;
		A_2.m11 = val2.y;
		A_2.m12 = val2.z;
		A_2.m20 = val.x;
		A_2.m21 = val.y;
		A_2.m22 = val.z;
		A_1.x = ((Vector3.Dot(val3, new Vector3(A_0.m00, A_0.m01, A_0.m02)) > 0f) ? A_1.x : (0f - A_1.x));
		A_1.y = ((Vector3.Dot(val2, new Vector3(A_0.m10, A_0.m11, A_0.m12)) > 0f) ? A_1.y : (0f - A_1.y));
		A_1.z = ((Vector3.Dot(val, new Vector3(A_0.m20, A_0.m21, A_0.m22)) > 0f) ? A_1.z : (0f - A_1.z));
		return true;
	}

	private static void a(Matrix4x4 A_0, out Quaternion A_1)
	{
		//IL_0000: Unknown result type (might be due to invalid IL or missing references)
		//IL_0006: Unknown result type (might be due to invalid IL or missing references)
		//IL_000d: Unknown result type (might be due to invalid IL or missing references)
		//IL_0042: Unknown result type (might be due to invalid IL or missing references)
		//IL_0048: Unknown result type (might be due to invalid IL or missing references)
		//IL_0057: Unknown result type (might be due to invalid IL or missing references)
		//IL_005d: Unknown result type (might be due to invalid IL or missing references)
		//IL_006c: Unknown result type (might be due to invalid IL or missing references)
		//IL_0072: Unknown result type (might be due to invalid IL or missing references)
		//IL_0081: Unknown result type (might be due to invalid IL or missing references)
		//IL_0087: Unknown result type (might be due to invalid IL or missing references)
		//IL_0092: Unknown result type (might be due to invalid IL or missing references)
		//IL_0098: Unknown result type (might be due to invalid IL or missing references)
		//IL_00a5: Unknown result type (might be due to invalid IL or missing references)
		//IL_00ac: Unknown result type (might be due to invalid IL or missing references)
		//IL_00b3: Unknown result type (might be due to invalid IL or missing references)
		//IL_00d8: Unknown result type (might be due to invalid IL or missing references)
		//IL_00de: Unknown result type (might be due to invalid IL or missing references)
		//IL_00ed: Unknown result type (might be due to invalid IL or missing references)
		//IL_00f3: Unknown result type (might be due to invalid IL or missing references)
		//IL_0102: Unknown result type (might be due to invalid IL or missing references)
		//IL_0108: Unknown result type (might be due to invalid IL or missing references)
		//IL_0117: Unknown result type (might be due to invalid IL or missing references)
		//IL_011d: Unknown result type (might be due to invalid IL or missing references)
		//IL_012a: Unknown result type (might be due to invalid IL or missing references)
		//IL_0131: Unknown result type (might be due to invalid IL or missing references)
		//IL_0138: Unknown result type (might be due to invalid IL or missing references)
		//IL_0150: Unknown result type (might be due to invalid IL or missing references)
		//IL_0156: Unknown result type (might be due to invalid IL or missing references)
		//IL_0172: Unknown result type (might be due to invalid IL or missing references)
		//IL_0178: Unknown result type (might be due to invalid IL or missing references)
		//IL_0187: Unknown result type (might be due to invalid IL or missing references)
		//IL_018d: Unknown result type (might be due to invalid IL or missing references)
		//IL_01a1: Unknown result type (might be due to invalid IL or missing references)
		//IL_01a8: Unknown result type (might be due to invalid IL or missing references)
		//IL_01af: Unknown result type (might be due to invalid IL or missing references)
		//IL_01c7: Unknown result type (might be due to invalid IL or missing references)
		//IL_01cd: Unknown result type (might be due to invalid IL or missing references)
		//IL_01dc: Unknown result type (might be due to invalid IL or missing references)
		//IL_01e2: Unknown result type (might be due to invalid IL or missing references)
		//IL_01fe: Unknown result type (might be due to invalid IL or missing references)
		//IL_0204: Unknown result type (might be due to invalid IL or missing references)
		float num = A_0.m00 + A_0.m11 + A_0.m22;
		if (num > 0f)
		{
			float num2 = (float)Math.Sqrt(num + 1f);
			A_1.w = num2 * 0.5f;
			num2 = 0.5f / num2;
			A_1.x = (A_0.m12 - A_0.m21) * num2;
			A_1.y = (A_0.m20 - A_0.m02) * num2;
			A_1.z = (A_0.m01 - A_0.m10) * num2;
		}
		else if (A_0.m00 >= A_0.m11 && A_0.m00 >= A_0.m22)
		{
			float num2 = (float)Math.Sqrt(1f + A_0.m00 - A_0.m11 - A_0.m22);
			float num3 = 0.5f / num2;
			A_1.x = 0.5f * num2;
			A_1.y = (A_0.m01 + A_0.m10) * num3;
			A_1.z = (A_0.m02 + A_0.m20) * num3;
			A_1.w = (A_0.m12 - A_0.m21) * num3;
		}
		else if (A_0.m11 > A_0.m22)
		{
			float num2 = (float)Math.Sqrt(1f + A_0.m11 - A_0.m00 - A_0.m22);
			float num3 = 0.5f / num2;
			A_1.x = (A_0.m10 + A_0.m01) * num3;
			A_1.y = 0.5f * num2;
			A_1.z = (A_0.m21 + A_0.m12) * num3;
			A_1.w = (A_0.m20 - A_0.m02) * num3;
		}
		else
		{
			float num2 = (float)Math.Sqrt(1f + A_0.m22 - A_0.m00 - A_0.m11);
			float num3 = 0.5f / num2;
			A_1.x = (A_0.m20 + A_0.m02) * num3;
			A_1.y = (A_0.m21 + A_0.m12) * num3;
			A_1.z = 0.5f * num2;
			A_1.w = (A_0.m01 - A_0.m10) * num3;
		}
	}

	private static bool a(float A_0)
	{
		return Math.Abs(A_0) < 1E-06f;
	}

	public static bool a(float A_0, float A_1)
	{
		return (double)(A_0 - A_1) <= 0.001;
	}

	public static float a(float A_0, float A_1, float A_2, float A_3, float A_4, float A_5, float A_6, out float A_7)
	{
		float result = (2f * A_6 * A_6 * A_6 - 3f * A_6 * A_6 + 1f) * A_2 + (A_6 * A_6 * A_6 - 2f * A_6 * A_6 + A_6) * A_4 + (-2f * A_6 * A_6 * A_6 + 3f * A_6 * A_6) * A_3 + (A_6 * A_6 * A_6 - A_6 * A_6) * A_5;
		A_7 = (6f * A_6 * A_6 - 6f * A_6) * A_2 + (3f * A_6 * A_6 - 4f * A_6 + 1f) * A_4 + (-6f * A_6 * A_6 + 6f * A_6) * A_3 + (3f * A_6 * A_6 - 2f * A_6) * A_5;
		A_7 /= A_1 - A_0;
		return result;
	}

	public o()
	{
		UNrqlvEiaD5r6WCLZt.IpxBSkcjWDvxT();
		base._002Ector();
	}
}
