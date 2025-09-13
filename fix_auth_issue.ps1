# 修复认证检查问题的 PowerShell 脚本
# 将所有页面中的直接 user 检查改为使用 requireAuth() 函数

$files = @(
  "app/[locale]/(basic-layout)/(gen-image)/photo-to-3d-cartoon/PhotoTo3DCartoonClient.tsx",
  "app/[locale]/(basic-layout)/(gen-image)/photo-to-pencil-sketch/PhotoToPencilSketchClient.tsx",
  "app/[locale]/(basic-layout)/(gen-image)/photo-to-watercolor/PhotoToWatercolorClient.tsx",
  "app/[locale]/(basic-layout)/(gen-image)/photo-to-vintage/PhotoToVintageClient.tsx",
  "app/[locale]/(basic-layout)/(gen-image)/photo-to-sculpture/PhotoToSculptureClient.tsx",
  "app/[locale]/(basic-layout)/(gen-image)/photo-to-chinese-painting/PhotoToChinesePaintingClient.tsx",
  "app/[locale]/(basic-layout)/(gen-image)/photo-to-pop-art/PhotoToPopArtClient.tsx",
  "app/[locale]/(basic-layout)/(gen-image)/photo-to-vibrant/PhotoToVibrantClient.tsx",
  "app/[locale]/(basic-layout)/(gen-image)/photo-to-line-sketch/PhotoToLineSketchClient.tsx",
  "app/[locale]/(basic-layout)/(gen-image)/photo-to-illustration/PhotoToIllustrationClient.tsx",
  "app/[locale]/(basic-layout)/(gen-image)/photo-to-line-art/PhotoToLineArtClient.tsx",
  "app/[locale]/(basic-layout)/(gen-image)/photo-to-cartoon-drawing/PhotoToCartoonDrawingClient.tsx",
  "app/[locale]/(basic-layout)/(gen-image)/photo-to-coloring-page/PhotoToColoringPageClient.tsx",
  "app/[locale]/(basic-layout)/(gen-image)/flux-kontext-pro/FluxKontextProClient.tsx",
  "app/[locale]/(basic-layout)/(gen-image)/wedding-portrait/WeddingPortraitClient.tsx",
  "artimage/app/[locale]/(basic-layout)/(gen-image)/photo-to-chinese-painting/PhotoToChinesePaintingClient.tsx",
  "artimage/app/[locale]/(basic-layout)/(gen-image)/flux-kontext-pro/FluxKontextProClient.tsx"
)

foreach ($file in $files) {
  if (Test-Path $file) {
    Write-Host "Processing: $file"
        
    # 读取文件内容
    $content = Get-Content $file -Raw
        
    # 替换 handleImageUpload 中的认证检查
    $content = $content -replace 'if \(!user\) \{\s+toast\.error\("Please login to upload image", \{\s+action: \{\s+label: "Login",\s+onClick: \(\) => \{\s+const currentPath = window\.location\.pathname;\s+router\.push\(`/login\?next=\$\{encodeURIComponent\(currentPath\)\}`\);\s+\},\s+\},\s+\}\);\s+const currentPath = window\.location\.pathname;\s+router\.push\(`/login\?next=\$\{encodeURIComponent\(currentPath\)\}`\);\s+return;\s+\}', 'const authCheck = requireAuth();`n      if (!authCheck.isAuthenticated) {`n        if (authCheck.reason === "loading") {`n          toast.error("Please wait while we check your authentication status...");`n          return;`n        }`n        if (authCheck.reason === "not_authenticated") {`n          const currentPath = window.location.pathname;`n          router.push(`/login?next=${encodeURIComponent(currentPath)}`);`n          return;`n        }`n        return;`n      }'
        
    # 替换 handleSubmit 中的认证检查
    $content = $content -replace 'if \(!user\) \{\s+const currentPath = window\.location\.pathname;\s+router\.push\(`/login\?next=\$\{encodeURIComponent\(currentPath\)\}`\);\s+return;\s+\}', 'const authCheck = requireAuth();`n    if (!authCheck.isAuthenticated) {`n      if (authCheck.reason === "loading") {`n        toast.error("Please wait while we check your authentication status...");`n        return;`n      }`n      if (authCheck.reason === "not_authenticated") {`n        const currentPath = window.location.pathname;`n        router.push(`/login?next=${encodeURIComponent(currentPath)}`);`n        return;`n      }`n      return;`n    }'
        
    # 更新依赖数组，添加 requireAuth
    $content = $content -replace '\[user, router, t, locale\]', '[requireAuth, user, router, t, locale]'
        
    # 写回文件
    Set-Content $file $content -Encoding UTF8
        
    Write-Host "Fixed: $file"
  }
  else {
    Write-Host "File not found: $file"
  }
}

Write-Host "All files processed!" 