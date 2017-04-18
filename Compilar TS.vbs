Dim oShell
Set oShell = WScript.CreateObject ("WScript.Shell")
oShell.run "cmd.exe /C tsc --out js\Categoria.js js\ts\Categoria.ts "
oShell.run "cmd.exe /C tsc --out js\customCategoria.js js\ts\customCategoria.ts "
oShell.run "cmd.exe /C tsc --out js\customProduto.js js\ts\customProduto.ts "
oShell.run "cmd.exe /C tsc --out js\front.js js\ts\front.ts "
oShell.run "cmd.exe /C tsc --out js\Produto.js js\ts\Produto.ts "
Set oShell = Nothing'