!macro customInstall
  WriteRegStr SHCTX "SOFTWARE\RegisteredApplications" "TotoB12" "Software\Clients\StartMenuInternet\TotoB12\Capabilities"

  WriteRegStr SHCTX "SOFTWARE\Classes\TotoB12" "" "TotoB12 HTML Document"
  WriteRegStr SHCTX "SOFTWARE\Classes\TotoB12\Application" "AppUserModelId" "TotoB12"
  WriteRegStr SHCTX "SOFTWARE\Classes\TotoB12\Application" "ApplicationIcon" "$INSTDIR\TotoB12.exe,0"
  WriteRegStr SHCTX "SOFTWARE\Classes\TotoB12\Application" "ApplicationName" "TotoB12"
  WriteRegStr SHCTX "SOFTWARE\Classes\TotoB12\Application" "ApplicationCompany" "TotoB12"      
  WriteRegStr SHCTX "SOFTWARE\Classes\TotoB12\Application" "ApplicationDescription" "A privacy-focused, extensible and beautiful web browser"      
  WriteRegStr SHCTX "SOFTWARE\Classes\TotoB12\DefaultIcon" "DefaultIcon" "$INSTDIR\TotoB12.exe,0"
  WriteRegStr SHCTX "SOFTWARE\Classes\TotoB12\shell\open\command" "" '"$INSTDIR\TotoB12.exe" "%1"'

  WriteRegStr SHCTX "SOFTWARE\Classes\.htm\OpenWithProgIds" "TotoB12" ""
  WriteRegStr SHCTX "SOFTWARE\Classes\.html\OpenWithProgIds" "TotoB12" ""

  WriteRegStr SHCTX "SOFTWARE\Clients\StartMenuInternet\TotoB12" "" "TotoB12"
  WriteRegStr SHCTX "SOFTWARE\Clients\StartMenuInternet\TotoB12\DefaultIcon" "" "$INSTDIR\TotoB12.exe,0"
  WriteRegStr SHCTX "SOFTWARE\Clients\StartMenuInternet\TotoB12\Capabilities" "ApplicationDescription" "A privacy-focused, extensible and beautiful web browser, Free and open source."
  WriteRegStr SHCTX "SOFTWARE\Clients\StartMenuInternet\TotoB12\Capabilities" "ApplicationName" "TotoB12"
  WriteRegStr SHCTX "SOFTWARE\Clients\StartMenuInternet\TotoB12\Capabilities" "ApplicationIcon" "$INSTDIR\TotoB12.exe,0"
  WriteRegStr SHCTX "SOFTWARE\Clients\StartMenuInternet\TotoB12\Capabilities\FileAssociations" ".htm" "TotoB12"
  WriteRegStr SHCTX "SOFTWARE\Clients\StartMenuInternet\TotoB12\Capabilities\FileAssociations" ".html" "TotoB12"
  WriteRegStr SHCTX "SOFTWARE\Clients\StartMenuInternet\TotoB12\Capabilities\URLAssociations" "http" "TotoB12"
  WriteRegStr SHCTX "SOFTWARE\Clients\StartMenuInternet\TotoB12\Capabilities\URLAssociations" "https" "TotoB12"
  WriteRegStr SHCTX "SOFTWARE\Clients\StartMenuInternet\TotoB12\Capabilities\StartMenu" "StartMenuInternet" "TotoB12"
  
  WriteRegDWORD SHCTX "SOFTWARE\Clients\StartMenuInternet\TotoB12\InstallInfo" "IconsVisible" 1
  
  WriteRegStr SHCTX "SOFTWARE\Clients\StartMenuInternet\TotoB12\shell\open\command" "" "$INSTDIR\TotoB12.exe"
!macroend
!macro customUnInstall
  DeleteRegKey SHCTX "SOFTWARE\Classes\TotoB12"
  DeleteRegKey SHCTX "SOFTWARE\Clients\StartMenuInternet\TotoB12"
  DeleteRegValue SHCTX "SOFTWARE\RegisteredApplications" "TotoB12"
!macroend
