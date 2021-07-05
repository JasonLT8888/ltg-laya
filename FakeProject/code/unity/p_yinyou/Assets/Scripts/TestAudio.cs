using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class TestAudio : MonoBehaviour
{
    // Start is called before the first frame update
    public AudioSource audio;
    void Start()
    {
        float[] spectrumDatanew = new float[8192];
        audio.GetSpectrumData(spectrumDatanew, 1, FFTWindow.BlackmanHarris);
        
    }

    // Update is called once per frame
    void Update()
    {
        
    }
}
