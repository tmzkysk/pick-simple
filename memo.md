## 必要なコンポーネント
- パレット(React Color使用)
- キャンバス
- プレビュー用キャンバス
- ツール

# アクション(& reducer)の種類
- キャンバス
  - マスクリック
- パレット
  - カラーピッカー変更
  - パレットクリック
- ツール
  - 塗りつぶしクリック
  - 回転クリック
  - 上下反転クリック
  - グリッド切り替えクリック
  - 消去クリック
  - undoクリック

## storeとして保持するもの
- 現在の色
- canvasの状態
- 一つ前のcanvasの状態
- マスの数はとりあえず16 * 16 = 32固定で良い？

```js
const initialState = {
  // 現在設定されている色
  currentColor: {r:255 , g:255 , b:255 },
  // 各パレットに設定されている色
  palettes: {
    palette1: {r:0 , g:0 , b:0 },
    palette2: {r:255 , g:255 , b:255 },
    palette3: {r:255 , g:0 , b:0 },
    palette4: {r:0 , g:255 , b:0 },
    palette5: {r:0 , g:0 , b:255 },
  },
  canvasState: new Array(32, {r:0 , g:0 , b:0 }),
  prevState: new Array(32, {r:0 , g:0 , b:0 }),
}
```

## コンポーネント図
```
app
 └─Container
   ├─MainCanvas
   ├─SideMenu
   │  ├─ColorPicker
   │  └─ToolBar
   └─PreviewCanvas
```