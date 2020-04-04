namespace Util
{
	public interface CustomExport
	{
		void StartHierarchysExport(string savePath);

		bool StartEachHierarchyExport(string hierarchyPath);

		void EndEachHierarchyExport(string hierarchyPath);

		void EndHierarchysExport(string savePath);
	}
}
