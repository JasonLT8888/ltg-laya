using System.Collections;
using UnityEditor;

internal static class l
{
	private static m.a b(this EditorWindow A_0, IEnumerator A_1)
	{
		return m.e(A_1, A_0);
	}

	private static m.a b(this EditorWindow A_0, string A_1)
	{
		return m.d(A_1, A_0);
	}

	private static m.a a(this EditorWindow A_0, string A_1, object A_2)
	{
		return m.a(A_1, A_2, A_0);
	}

	private static void a(this EditorWindow A_0, IEnumerator A_1)
	{
		m.d(A_1, A_0);
	}

	private static void a(this EditorWindow A_0, string A_1)
	{
		m.c(A_1, A_0);
	}

	private static void a(this EditorWindow A_0)
	{
		m.b(A_0);
	}
}
