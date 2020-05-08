using System;

namespace Util
{
	// Token: 0x02000046 RID: 70
	public interface CustomExport
	{
		// Token: 0x06000213 RID: 531
		void StartHierarchysExport(string savePath);

		// Token: 0x06000214 RID: 532
		bool StartEachHierarchyExport(string hierarchyPath);

		// Token: 0x06000215 RID: 533
		void EndEachHierarchyExport(string hierarchyPath);

		// Token: 0x06000216 RID: 534
		void EndHierarchysExport(string savePath);
	}
}
