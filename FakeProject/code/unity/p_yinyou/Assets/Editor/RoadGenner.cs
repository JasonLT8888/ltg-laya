using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEditor;
using LTGame;
using NPOI.SS.UserModel;
using LitJson;

public class RoadGenner : EditorWindow
{

    private static RoadGenner _window;

    [MenuItem("音游跑酷/关卡生成")]
    static void Init()
    {
        if (_window == null)
        {
            _window = GetWindow<RoadGenner>();
            _window.titleContent = new GUIContent("关卡生成");
        }
        _window.Show();
        _window.Focus();
    }

    private string _chooseFile;
    private AudioClip _chooseAudio;

    private void OnGUI()
    {
        EditorGUILayout.BeginVertical();
        ShowLine("选择关卡配置", ref _chooseFile, "", true);
        EditorGUILayout.BeginHorizontal();
        EditorGUILayout.LabelField("选择音乐文件", GUILayout.Width(130));
        _chooseAudio = EditorGUILayout.ObjectField(_chooseAudio, typeof(AudioClip), false) as AudioClip;
        EditorGUILayout.EndHorizontal();
        // EditorGUIUtility.ShowObjectPicker<AudioClip>(_chooseAudio, false, "", 0);
        if (GUILayout.Button("生成关卡", GUILayout.Width(100)))
        {
            var wss = LTExcelHelper.ReadExcel(_chooseFile);
            if (wss == null)
            {
                Debug.LogError("请选择关卡配置");
            }
            else if (_chooseAudio == null)
            {
                Debug.LogError("请选择关卡音效");
            }
            else
            {
                var sheet = wss.GetSheetAt(0);
                var rowIndex = 1;
                IRow row = null;
                var jsonData = new JsonData();
                jsonData.SetJsonType(JsonType.Object);
                var timeList = new JsonData();
                timeList.SetJsonType(JsonType.Array);
                var dataList = new JsonData();
                dataList.SetJsonType(JsonType.Array);
                var index = 0;
                while ((row = sheet.GetRow(rowIndex++)) != null)
                {
                    var time = row.GetCell(5).NumericCellValue;
                    var lineData = new JsonData();
                    lineData.SetJsonType(JsonType.Array);
                    for (var i = 0; i < 5; ++i)
                    {
                        lineData.Add(Mathf.RoundToInt((float)row.GetCell(i).NumericCellValue));
                    }
                    timeList.Add(time);
                    dataList.Add(lineData);
                    index++;
                }
                jsonData["bgm"] = _chooseAudio.name;
                jsonData["length"] = _chooseAudio.length;
                jsonData["time"] = timeList;
                jsonData["data"] = dataList;
                var json = jsonData.ToJson();
                var minJson = JsonFormatterPlus.JsonFormatter.Minify(json);

                var savePath = Application.dataPath + "/_out/level/" + _chooseAudio.name + ".json";
                LTExcelHelper.WriteStrToFile(minJson, savePath);
                Debug.Log("生成关卡配置:" + savePath);
            }
        }
        EditorGUILayout.EndVertical();
    }

    public void ShowLine(string label, ref string value, string defaultValue, bool showBrowse = true)
    {
        EditorGUILayout.BeginHorizontal();
        EditorGUILayout.LabelField(label + ":", GUILayout.Width(130));
        value = EditorGUILayout.TextField(value);
        if (showBrowse)
        {
            if (GUILayout.Button("选择", GUILayout.Width(100)))
            {
                var openPath = string.IsNullOrEmpty(value) ? defaultValue : value;
                var selectPath = UnityEditor.EditorUtility.OpenFilePanelWithFilters("Choose " + label, Application.dataPath + openPath, new string[] { "关卡配置", "xlsx" });
                value = selectPath;
            }
        }

        EditorGUILayout.EndHorizontal();
    }
}
