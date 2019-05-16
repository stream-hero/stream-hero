!macro customInstall
  DetailPrint "Register Stream Hero URI Handler"
  DeleteRegKey HKCR "stream"
  WriteRegStr HKCR "stream" "" "URL:stream"
  WriteRegStr HKCR "stream" "URL Protocol" ""
  WriteRegStr HKCR "stream\DefaultIcon" "" "$INSTDIR\${APP_EXECUTABLE_FILENAME}"
  WriteRegStr HKCR "stream\shell" "" ""
  WriteRegStr HKCR "stream\shell\Open" "" ""
  WriteRegStr HKCR "stream\shell\Open\command" "" "$INSTDIR\${APP_EXECUTABLE_FILENAME} %1"
!macroend
