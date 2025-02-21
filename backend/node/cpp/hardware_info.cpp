#include "hardware_info.h"
#include <windows.h>
#include <sstream>

// For WMI
#include <comdef.h>
#include <Wbemidl.h>
#pragma comment(lib, "wbemuuid.lib")

// Returns the number of processors (cores) in the system.
int getNumberOfProcessors() {
    SYSTEM_INFO sysInfo;
    GetSystemInfo(&sysInfo);
    return static_cast<int>(sysInfo.dwNumberOfProcessors);
}

// Returns detailed CPU information using WMI.
std::string getCPUInfo() {
    HRESULT hres;

    // Step 1: Initialize COM.
    hres = CoInitializeEx(0, COINIT_MULTITHREADED);
    if (FAILED(hres))
        return "Failed to initialize COM library.";

    // Step 2: Set COM security.
    hres = CoInitializeSecurity(
        NULL, -1, NULL, NULL,
        RPC_C_AUTHN_LEVEL_DEFAULT,
        RPC_C_IMP_LEVEL_IMPERSONATE,
        NULL, EOAC_NONE, NULL
    );
    if (FAILED(hres)) {
        CoUninitialize();
        return "Failed to initialize security.";
    }

    // Step 3: Obtain the initial locator to WMI.
    IWbemLocator* pLoc = NULL;
    hres = CoCreateInstance(
        CLSID_WbemLocator, 0, CLSCTX_INPROC_SERVER,
        IID_IWbemLocator, (LPVOID*)&pLoc
    );
    if (FAILED(hres)) {
        CoUninitialize();
        return "Failed to create IWbemLocator object.";
    }

    // Step 4: Connect to WMI namespace.
    IWbemServices* pSvc = NULL;
    hres = pLoc->ConnectServer(
        _bstr_t(L"ROOT\\CIMV2"),
        NULL, NULL, 0, NULL, 0, 0, &pSvc
    );
    if (FAILED(hres)) {
        pLoc->Release();
        CoUninitialize();
        return "Could not connect to WMI namespace.";
    }

    // Step 5: Set security levels on the proxy.
    hres = CoSetProxyBlanket(
        pSvc,
        RPC_C_AUTHN_WINNT,
        RPC_C_AUTHZ_NONE,
        NULL,
        RPC_C_AUTHN_LEVEL_CALL,
        RPC_C_IMP_LEVEL_IMPERSONATE,
        NULL,
        EOAC_NONE
    );
    if (FAILED(hres)) {
        pSvc->Release();
        pLoc->Release();
        CoUninitialize();
        return "Could not set proxy blanket.";
    }

    // Step 6: Query for CPU information.
    IEnumWbemClassObject* pEnumerator = NULL;
    hres = pSvc->ExecQuery(
        bstr_t("WQL"),
        bstr_t("SELECT Name FROM Win32_Processor"),
        WBEM_FLAG_FORWARD_ONLY | WBEM_FLAG_RETURN_IMMEDIATELY,
        NULL,
        &pEnumerator
    );
    if (FAILED(hres)) {
        pSvc->Release();
        pLoc->Release();
        CoUninitialize();
        return "Query for processor information failed.";
    }

    // Step 7: Retrieve data from query.
    IWbemClassObject* pclsObj = NULL;
    ULONG uReturn = 0;
    std::string cpuName = "Unknown CPU";

    if (pEnumerator) {
        HRESULT hr = pEnumerator->Next(WBEM_INFINITE, 1, &pclsObj, &uReturn);
        if (uReturn != 0 && pclsObj) {
            VARIANT vtProp;
            hr = pclsObj->Get(L"Name", 0, &vtProp, 0, 0);
            if (SUCCEEDED(hr) && vtProp.vt == VT_BSTR) {
                cpuName = _bstr_t(vtProp.bstrVal);
            }
            VariantClear(&vtProp);
            pclsObj->Release();
        }
        pEnumerator->Release();
    }

    // Cleanup
    pSvc->Release();
    pLoc->Release();
    CoUninitialize();

    return cpuName;
}

// Returns simulated GPU info.
std::string getGPUInfo() {
    // For real data, integrate DirectX Diagnostic Tool (DXDiag) or vendor SDK.
    return "GPU: NVIDIA RTX 3080 (Simulated Data)";
}

// Returns simulated monitor info.
std::string getMonitorInfo() {
    // For real data, use EnumDisplayDevices or WMI.
    return "Monitor: Acer Nitro 240 Hz (Simulated Data)";
}

// Returns simulated mouse info.
std::string getMouseInfo() {
    // For real data, use Raw Input APIs or vendor-specific SDKs.
    return "Mouse: Razer Viper V3 Pro, DPI: 1200 (Simulated Data)";
}
