using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using System;

public class LayaExportHelper : Util.CustomExport
{

    [UnityEditor.Callbacks.DidReloadScripts]
    static void _Init()
    {
        LayaAir3D.customExport = new LayaExportHelper();
        Debug.LogError("LTG导出插件已注入 at " + DateTime.Now.ToShortTimeString());
    }

    public void EndEachHierarchyExport(string hierarchyPath)
    {
        Debug.Log("EndEachHierarchyExport: " + hierarchyPath);
    }

    public void EndHierarchysExport(string savePath)
    {
        Debug.Log("EndHierarchysExport: " + savePath);
    }

    public bool StartEachHierarchyExport(string hierarchyPath)
    {
        Debug.Log("StartEachHierarchyExport: " + hierarchyPath);
        return true;
    }

    public void StartHierarchysExport(string savePath)
    {
        Debug.Log("StartHierarchysExport: " + savePath);
    }
}
