(() => {
  // examples.mjs
  var examples = [
    {
      name: "\u65C5\u6E38\u884C\u7A0B\u5206\u914D",
      idea: "\u6211\u60F3\u505A\u4E2A\u591A\u4EBA\u65C5\u884C\u7528\u7684\u7F51\u9875\u3002\u5927\u5BB6\u586B\u65C5\u884C\u5929\u6570\u3001\u666F\u70B9\u540D\u5B57\u548C\u9884\u8BA1\u65F6\u957F\uFF0C\u7CFB\u7EDF\u5E2E\u6211\u4EEC\u5206\u5230\u6BCF\u5929\u3002\u6BCF\u5929\u6700\u591A\u73A9 8 \u5C0F\u65F6\uFF0C\u540C\u4E00\u4E2A\u666F\u70B9\u522B\u6392\u4E24\u6B21\uFF0C\u6392\u4E0D\u4E0B\u7684\u5355\u72EC\u5217\u51FA\u6765\u3002\u540C\u884C\u7684\u4EBA\u8FD8\u53EF\u4EE5\u624B\u52A8\u632A\u666F\u70B9\uFF0C\u632A\u8FC7\u53BB\u8D85\u65F6\u5C31\u63D0\u9192\u3002",
      spec: `# \u65C5\u6E38\u884C\u7A0B\u5206\u914D
\u76EE\u6807\uFF1A\u4E3A\u591A\u4EBA\u65C5\u884C\u751F\u6210\u6309\u5929\u5206\u914D\u7684\u884C\u7A0B\uFF0C\u65B9\u4FBF\u540C\u4F34\u4E00\u8D77\u786E\u8BA4\u5B89\u6392\u3002

## \u529F\u80FD\u548C\u9A8C\u6536
1. \u5F55\u5165\u65C5\u884C\u5929\u6570\u548C\u666F\u70B9\u6E05\u5355\u3002\u6BCF\u4E2A\u666F\u70B9\u5305\u542B\u540D\u79F0\u3001\u6E38\u73A9\u65F6\u957F\u3002\u5929\u6570\u53CA\u6E38\u73A9\u65F6\u957F\u5FC5\u987B\u662F\u6B63\u6570\uFF0C\u5929\u6570\u987B\u4E3A\u6574\u6570\u3002\u8F93\u5165\u65E0\u6548\u65F6\u63D0\u793A\u5E76\u963B\u6B62\u63D0\u4EA4\u3002
2. \u751F\u6210\u6309\u5929\u7684\u5206\u914D\u7ED3\u679C\u3002\u6BCF\u4E2A\u666F\u70B9\u6700\u591A\u51FA\u73B0\u4E00\u6B21\uFF0C\u6BCF\u5929\u6E38\u73A9\u603B\u65F6\u957F\u4E0D\u8D85\u8FC7 8 \u5C0F\u65F6\u3002\u65E0\u6CD5\u6392\u5165\u7684\u666F\u70B9\u5355\u72EC\u5217\u51FA\u3002
3. \u5C55\u793A\u884C\u7A0B\uFF0C\u6309\u5929\u663E\u793A\u666F\u70B9\u3001\u603B\u65F6\u957F\u548C\u672A\u6392\u5165\u5217\u8868\u3002\u5141\u8BB8\u624B\u52A8\u628A\u666F\u70B9\u79FB\u5230\u53E6\u4E00\u5929\uFF0C\u82E5\u8D85\u51FA 8 \u5C0F\u65F6\u5219\u62D2\u7EDD\u5E76\u63D0\u793A\u3002

## \u8303\u56F4
\u4F7F\u7528\u624B\u5DE5\u5F55\u5165\u7684\u666F\u70B9\u6570\u636E\u3002\u63D0\u4F9B\u7F51\u9875\u754C\u9762\u3002`
    },
    {
      name: "\u6821\u56ED\u6D3B\u52A8\u62A5\u540D",
      idea: "\u6211\u60F3\u8BA9\u540C\u5B66\u5728\u7EBF\u62A5\u540D\u6821\u56ED\u6D3B\u52A8\u3002\u5B66\u751F\u80FD\u770B\u5230\u65F6\u95F4\u548C\u5269\u4F59\u540D\u989D\uFF0C\u4E00\u4E2A\u4EBA\u4E0D\u80FD\u91CD\u590D\u62A5\uFF0C\u4E24\u4E2A\u4EBA\u62A2\u6700\u540E\u4E00\u4E2A\u540D\u989D\u65F6\u53EA\u80FD\u6709\u4E00\u4EBA\u6210\u529F\u3002\u7EC4\u7EC7\u8005\u53EF\u4EE5\u770B\u540D\u5355\u5E76\u5BFC\u51FA\u5B66\u53F7\u548C\u62A5\u540D\u65F6\u95F4\uFF0C\u5176\u4ED6\u4EBA\u770B\u4E0D\u5230\u540D\u5355\u3002",
      spec: `# \u6821\u56ED\u6D3B\u52A8\u62A5\u540D
\u76EE\u6807\uFF1A\u5B66\u751F\u5728\u7EBF\u62A5\u540D\u6D3B\u52A8\uFF0C\u7EC4\u7EC7\u8005\u53EF\u4EE5\u6838\u5BF9\u62A5\u540D\u540D\u5355\u3002

## \u529F\u80FD\u548C\u9A8C\u6536
1. \u5B66\u751F\u67E5\u770B\u6D3B\u52A8\u9875\u9762\u4E0A\u7684\u6807\u9898\u3001\u5F00\u59CB\u65F6\u95F4\u3001\u5269\u4F59\u540D\u989D\uFF0C\u63D0\u4EA4\u62A5\u540D\u3002\u7EC4\u7EC7\u8005\u9884\u5148\u914D\u7F6E\u6D3B\u52A8\u53CA\u540D\u989D\u3002
2. \u540C\u4E00\u5B66\u751F\u5BF9\u540C\u4E00\u6D3B\u52A8\u6700\u591A\u6210\u529F\u62A5\u540D\u4E00\u6B21\u3002\u540D\u989D\u4E3A\u96F6\u65F6\u62D2\u7EDD\u62A5\u540D\uFF0C\u4E24\u4E2A\u5B66\u751F\u540C\u65F6\u62A2\u6700\u540E\u4E00\u4E2A\u540D\u989D\u65F6\u6700\u591A\u4E00\u4EBA\u6210\u529F\u3002
3. \u7EC4\u7EC7\u8005\u67E5\u770B\u5E76\u5BFC\u51FA\u672C\u6D3B\u52A8\u7684\u62A5\u540D\u540D\u5355\uFF0CCSV \u5305\u542B\u5B66\u53F7\u4E0E\u62A5\u540D\u65F6\u95F4\u3002\u975E\u7EC4\u7EC7\u8005\u8BBF\u95EE\u540D\u5355\u6216\u5BFC\u51FA\u63A5\u53E3\u65F6\u62D2\u7EDD\u8BBF\u95EE\u3002

## \u8303\u56F4
\u590D\u7528\u5DF2\u5B58\u5728\u7684\u6821\u56ED\u8EAB\u4EFD\u548C\u89D2\u8272\u4FE1\u606F\u3002\u63D0\u4F9B\u7F51\u9875\u754C\u9762\u3002`
    },
    {
      name: "\u4EFF\u5FAE\u4FE1\u6838\u5FC3\u793E\u4EA4\uFF08WeChat Lite\uFF09",
      idea: "\u6211\u60F3\u505A\u4E00\u4E2A\u7B80\u7248\u5FAE\u4FE1\u7F51\u9875\uFF0C\u7528\u6237\u767B\u5F55\u540E\u53EF\u4EE5\u641C\u7D22\u548C\u7533\u8BF7\u52A0\u597D\u53CB\uFF0C\u597D\u53CB\u540C\u610F\u540E\u80FD\u4E92\u53D1\u6587\u5B57\u3001\u8868\u60C5\u548C\u56FE\u7247\u3002\u6536\u5230\u65B0\u6D88\u606F\u65F6\u663E\u793A\u672A\u8BFB\u63D0\u9192\u3002\u5148\u505A\u767B\u5F55\u3001\u597D\u53CB\u548C\u5355\u804A\u3002",
      spec: `# \u4EFF\u5FAE\u4FE1\u6838\u5FC3\u793E\u4EA4\uFF08MVP\u7248\uFF09
\u76EE\u6807\uFF1A\u5B9E\u73B0\u4E00\u4E2A\u7C7B\u4F3C\u4E8E\u5FAE\u4FE1\u7684\u6838\u5FC3\u79FB\u52A8\u7AEF\u53CA\u7F51\u9875\u7AEF\u793E\u4EA4\u95ED\u73AF\u3002

## \u529F\u80FD\u548C\u9A8C\u6536
1. \u7528\u6237\u9274\u6743\uFF1A\u652F\u6301\u624B\u673A\u53F7+\u9A8C\u8BC1\u7801\u767B\u5F55\uFF0C\u6216\u8D26\u53F7\u5BC6\u7801\u767B\u5F55\u3002\u767B\u5F55\u6001\u8FC7\u671F\u9700\u81EA\u52A8\u8DF3\u8F6C\u81F3\u767B\u5F55\u9875\u3002
2. \u901A\u8BAF\u5F55\u4E0E\u597D\u53CB\uFF1A\u5C55\u793A\u597D\u53CB\u5217\u8868\uFF0C\u6309\u9996\u5B57\u6BCD\u6392\u5E8F\u3002\u652F\u6301\u901A\u8FC7\u641C\u7D22ID\u6DFB\u52A0\u597D\u53CB\uFF0C\u53D1\u9001\u597D\u53CB\u7533\u8BF7\uFF0C\u5BF9\u65B9\u540C\u610F\u540E\u52A0\u5165\u5217\u8868\u3002
3. \u5373\u65F6\u901A\u8BAF\uFF08\u5355\u804A\uFF09\uFF1A\u8FDB\u5165\u597D\u53CB\u804A\u5929\u754C\u9762\uFF0C\u652F\u6301\u53D1\u9001\u6587\u5B57\u3001\u8868\u60C5\u548C\u56FE\u7247\u3002\u6D88\u606F\u5217\u8868\u6309\u65F6\u95F4\u5012\u5E8F\u6392\u5217\uFF0C\u53D1\u9001\u6210\u529F\u9700\u663E\u793A\u65F6\u95F4\u6233\u3002
4. \u6D88\u606F\u63A8\u9001\uFF1A\u63A5\u6536\u5BF9\u65B9\u6D88\u606F\u65F6\uFF0C\u5728\u5F53\u524D\u975E\u804A\u5929\u9875\u9762\u9700\u5C55\u793A\u7EA2\u70B9\u63D0\u793A\uFF0C\u5E76\u66F4\u65B0\u672A\u8BFB\u6D88\u606F\u6570\u3002

## \u8303\u56F4
\u4EC5\u5305\u542B\u5FAE\u4FE1\u6700\u6838\u5FC3\u7684\u201C\u767B\u5F55-\u597D\u53CB-\u5355\u804A\u201D\u95ED\u73AF\u3002\u4E0D\u5305\u542B\u670B\u53CB\u5708\u3001\u652F\u4ED8\u7B49\u590D\u6742\u529F\u80FD\u3002\u63D0\u4F9B Web \u754C\u9762\u3002`
    },
    {
      name: "\u4EFF\u5C0F\u7EA2\u4E66\u56FE\u6587\u793E\u533A\uFF08RED Lite\uFF09",
      idea: "\u6211\u60F3\u505A\u4E00\u4E2A\u7B80\u7248\u5C0F\u7EA2\u4E66\u56FE\u6587\u793E\u533A\u3002\u9996\u9875\u53EF\u4EE5\u5F80\u4E0B\u5237\u56FE\u6587\uFF0C\u767B\u5F55\u540E\u80FD\u53D1\u56FE\u6587\u3001\u70B9\u8D5E\u3001\u6536\u85CF\u548C\u5173\u6CE8\u4F5C\u8005\u3002\u53D1\u5E03\u6700\u591A\u5E26 9 \u5F20\u7167\u7247\uFF0C\u6807\u9898\u6700\u591A 20 \u5B57\uFF0C\u53D1\u51FA\u540E\u4E2A\u4EBA\u4E3B\u9875\u9A6C\u4E0A\u80FD\u770B\u5230\u3002",
      spec: `# \u4EFF\u5C0F\u7EA2\u4E66\u56FE\u6587\u793E\u533A\uFF08MVP\u7248\uFF09
\u76EE\u6807\uFF1A\u5B9E\u73B0\u4E00\u4E2A\u7C7B\u4F3C\u5C0F\u7EA2\u4E66\u7684\u56FE\u6587\u5185\u5BB9\u793E\u533A\uFF0C\u5305\u542B\u5185\u5BB9\u521B\u4F5C\u4E0E\u6D88\u8D39\u3002

## \u529F\u80FD\u548C\u9A8C\u6536
1. \u7011\u5E03\u6D41\u4FE1\u606F\u6D41\uFF1A\u9996\u9875\u5C55\u793A\u56FE\u6587\u5361\u7247\uFF08\u5C01\u9762\u56FE\u3001\u6807\u9898\u3001\u4F5C\u8005\u5934\u50CF\u3001\u70B9\u8D5E\u6570\uFF09\uFF0C\u91C7\u7528\u53CC\u5217\u7011\u5E03\u6D41\u5E03\u5C40\uFF0C\u652F\u6301\u4E0A\u6ED1\u65E0\u9650\u52A0\u8F7D\u3002
2. \u56FE\u6587\u53D1\u5E03\uFF1A\u7528\u6237\u53EF\u4E0A\u4F20 1-9 \u5F20\u56FE\u7247\uFF0C\u586B\u5199\u6807\u9898\uFF08\u6700\u591A 20 \u5B57\uFF09\u548C\u6B63\u6587\u3002\u53D1\u5E03\u6210\u529F\u540E\uFF0C\u7ACB\u5373\u5728\u4E2A\u4EBA\u4E3B\u9875\u5C55\u793A\uFF0C\u5E76\u5728 2 \u79D2\u5185\u8FDB\u5165\u5168\u5C40\u4FE1\u606F\u6D41\u3002
3. \u4E92\u52A8\u4E0E\u5173\u6CE8\uFF1A\u8BE6\u60C5\u9875\u652F\u6301\u70B9\u8D5E\u3001\u6536\u85CF\u3002\u70B9\u8D5E\u540E\u6309\u94AE\u53D8\u7EA2\uFF0C\u70B9\u8D5E\u6570+1\u3002\u70B9\u51FB\u4F5C\u8005\u5934\u50CF\u53EF\u8FDB\u5165\u4E2A\u4EBA\u4E3B\u9875\u5E76\u5173\u6CE8\u3002
4. \u8EAB\u4EFD\u4F53\u7CFB\uFF1A\u5305\u542B\u666E\u901A\u7528\u6237\u548C\u521B\u4F5C\u8005\u8EAB\u4EFD\uFF0C\u672A\u767B\u5F55\u72B6\u6001\u4E0B\u70B9\u8D5E\u6216\u53D1\u5E03\u89E6\u53D1\u767B\u5F55\u62E6\u622A\u3002

## \u8303\u56F4
\u624B\u5DE5\u8F93\u5165\u56FE\u7247\u548C\u6587\u672C\u3002\u63D0\u4F9B\u524D\u7AEF Web \u754C\u9762\uFF0C\u540E\u7AEF\u63D0\u4F9B\u5206\u9875\u63A5\u53E3\u3002`
    },
    {
      name: "\u4EE3\u7801\u5BA1\u67E5\u5DE5\u4F5C\u6D41",
      idea: "\u6211\u60F3\u505A\u4E00\u4E2A\u4EE3\u7801\u5BA1\u67E5\u7F16\u6392\u5668\u3002\u5B83\u6536\u5230\u5DF2\u786E\u8BA4\u7684\u89C4\u683C\u548C PM Agent \u7684\u4EFB\u52A1\u5206\u89E3\u540E\uFF0C\u5148\u68C0\u67E5\u4EFB\u52A1\u7F16\u53F7\u3001\u524D\u7F6E\u662F\u5426\u7F3A\u5931\u548C\u4F9D\u8D56\u6709\u6CA1\u6709\u73AF\uFF1B\u6709\u95EE\u9898\u5C31\u9000\u56DE PM \u4FEE\u8BA2\u3002\u901A\u8FC7\u540E\u5E76\u884C\u505A\u683C\u5F0F\u3001\u903B\u8F91\u548C\u5B89\u5168\u5BA1\u67E5\uFF0C\u4E09\u4EFD\u62A5\u544A\u90FD\u901A\u8FC7\u7ED3\u6784\u6821\u9A8C\u624D\u6C47\u603B\uFF0C\u683C\u5F0F\u95EE\u9898\u4E3A\u7A7A\u4E5F\u7B97\u6210\u529F\u3002\u6C47\u603B\u53D1\u73B0 Critical \u5C31\u9000\u56DE\u4FEE\u6539\uFF0C\u6700\u591A\u9000\u56DE 3 \u8F6E\uFF0C\u8D85\u9650\u8F6C\u4EBA\u5DE5\uFF1B\u6CA1\u6709 Critical \u65F6\u8F93\u51FA\u7ED3\u8BBA\u5E76\u5141\u8BB8\u5408\u5E76\u3002\u903B\u8F91\u5BA1\u67E5\u4E34\u65F6\u8D85\u65F6\u4E14\u53EF\u5B89\u5168\u91CD\u8DD1\u65F6\u6700\u591A\u91CD\u8BD5\u4E24\u6B21\uFF0C\u4FDD\u7559\u65E5\u5FD7\uFF1B\u4ECD\u5931\u8D25\u5C31\u8BA9\u8D1F\u8D23\u4EBA\u63A5\u7BA1\u5E76\u963B\u585E\u7B49\u5F85\u8BE5\u62A5\u544A\u7684\u4EFB\u52A1\u3002\u8D1F\u8D23\u4EBA\u82E5\u8981\u6C42\u6539\u8BA1\u5212\uFF0C\u8981\u63A5\u6536\u65B0\u7248\u4EFB\u52A1\u5206\u89E3\u91CD\u65B0\u6821\u9A8C\u3002",
      spec: `# \u4EE3\u7801\u5BA1\u67E5\u5DE5\u4F5C\u6D41
\u76EE\u6807\uFF1A\u6839\u636E\u5DF2\u786E\u8BA4\u7684\u89C4\u683C\u548C PM Agent \u63D0\u4F9B\u7684\u4EFB\u52A1\u5206\u89E3\u5B89\u6392\u4EE3\u7801\u5BA1\u67E5\uFF0C\u4FDD\u7559\u5BA1\u67E5\u7ED3\u679C\u548C\u5F02\u5E38\u5904\u7406\u8BB0\u5F55\u3002

## \u529F\u80FD\u548C\u9A8C\u6536
1. \u63A5\u6536\u4EFB\u52A1\u5206\u89E3\u540E\u68C0\u67E5\u91CD\u590D\u7F16\u53F7\u3001\u524D\u7F6E\u4EFB\u52A1\u7F3A\u5931\u53CA\u4F9D\u8D56\u73AF\u3002\u6821\u9A8C\u5931\u8D25\u65F6\u9000\u56DE PM Agent \u4FEE\u8BA2\uFF0C\u672C\u8F6E\u5BA1\u67E5\u4EFB\u52A1\u4E0D\u542F\u52A8\u3002
2. \u683C\u5F0F\u3001\u903B\u8F91\u548C\u5B89\u5168\u5BA1\u67E5\u53EF\u5E76\u884C\u6267\u884C\u3002\u4E09\u9879\u5BA1\u67E5\u90FD\u6210\u529F\u4E14\u62A5\u544A\u7ED3\u6784\u6821\u9A8C\u901A\u8FC7\u540E\u624D\u5141\u8BB8\u6C47\u603B\u3002\u683C\u5F0F\u5BA1\u67E5\u6CA1\u6709\u95EE\u9898\u65F6\u53EF\u4EE5\u63D0\u4EA4\u7A7A\u5217\u8868\u3002
3. \u6C47\u603B\u540E\u7684\u7A0B\u5E8F\u95E8\u7981\u68C0\u67E5\u662F\u5426\u6709 Critical \u95EE\u9898\u3002\u65E0 Critical \u65F6\u8F93\u51FA\u7ED3\u6784\u5316\u7ED3\u8BBA\u5E76\u5141\u8BB8\u5408\u5E76\uFF1B\u6709 Critical \u65F6\u9000\u56DE\u4FEE\u6539\uFF0C\u6700\u591A\u9000\u56DE 3 \u8F6E\uFF0C\u8FBE\u5230\u4E0A\u9650\u540E\u8F6C\u4EBA\u5DE5\u3002
4. \u903B\u8F91\u5BA1\u67E5\u53D1\u751F\u4E34\u65F6\u8D85\u65F6\u4E14\u53EF\u5B89\u5168\u91CD\u8DD1\u65F6\uFF0C\u6700\u591A\u81EA\u52A8\u91CD\u8BD5\u4E24\u6B21\u5E76\u4FDD\u7559\u5931\u8D25\u65E5\u5FD7\u3002\u4ECD\u5931\u8D25\u6216\u4E0D\u53EF\u5B89\u5168\u91CD\u8DD1\u65F6\u901A\u77E5\u8D1F\u8D23\u4EBA\uFF0C\u4F9D\u8D56\u8BE5\u4EFB\u52A1\u7684\u6B65\u9AA4\u4FDD\u6301\u963B\u585E\u3002\u8D1F\u8D23\u4EBA\u53EF\u4FEE\u590D\u540E\u91CD\u8DD1\uFF0C\u6216\u8981\u6C42 PM Agent \u66F4\u65B0\u4EFB\u52A1\u5206\u89E3\u5E76\u91CD\u65B0\u6821\u9A8C\u3002

## \u8303\u56F4
\u7528\u6D4B\u8BD5\u7528\u4F8B\u8986\u76D6\u6B63\u5E38\u5BA1\u67E5\u3001\u7ED3\u6784\u6821\u9A8C\u5931\u8D25\u3001\u8D85\u65F6\u91CD\u8BD5\u548C\u4EBA\u5DE5\u63A5\u7BA1\u3002\u5B9E\u9645\u5BA1\u67E5\u4EA7\u7269\u7531\u5BF9\u5E94\u4EFB\u52A1\u6267\u884C\u65F6\u751F\u6210\u3002`
    }
  ];

  // agents.mjs
  var roles = {
    "\u4EA7\u54C1\u8BBE\u8BA1": { name: "\u8BBE\u8BA1 Agent", duty: "\u68B3\u7406\u63A5\u53E3\u3001\u6570\u636E\u7ED3\u6784\u3001\u7EA6\u675F\u548C\u5F02\u5E38\uFF0C\u4EA4\u4ED8\u53EF\u4F9B\u4E0B\u6E38\u5B9E\u73B0\u7684\u5951\u7EA6\u6587\u6863\u3002" },
    "\u524D\u7AEF": { name: "\u524D\u7AEF\u5F00\u53D1 Agent", duty: "\u6309\u8BBE\u8BA1\u548C\u524D\u7F6E\u5951\u7EA6\u7F16\u5199\u524D\u7AEF\u4EE3\u7801\uFF0C\u8986\u76D6\u4EA4\u4E92\u3001\u9519\u8BEF\u53CD\u9988\u548C\u8FB9\u754C\u3002" },
    "\u540E\u7AEF": { name: "\u540E\u7AEF\u5F00\u53D1 Agent", duty: "\u6309\u8BBE\u8BA1\u548C\u524D\u7F6E\u5951\u7EA6\u7F16\u5199\u540E\u7AEF\u4EE3\u7801\uFF0C\u8986\u76D6\u6570\u636E\u6821\u9A8C\u3001\u63A5\u53E3\u548C\u5F02\u5E38\u884C\u4E3A\u3002" },
    "\u6D4B\u8BD5": { name: "\u6D4B\u8BD5 Agent", duty: "\u6309\u6D4B\u8BD5\u5C42\u6B21\u548C\u5206\u914D\u7684\u7528\u4F8B\u7F16\u5199\u6D4B\u8BD5\u811A\u672C\u6216\u53EF\u6267\u884C\u6B65\u9AA4\uFF0C\u5E76\u5199\u51FA\u8FD0\u884C\u65B9\u6CD5\u3002" },
    "\u8BC4\u5BA1": { name: "\u4EE3\u7801\u8BC4\u5BA1 Agent", duty: "\u8BFB\u53D6\u88AB\u8BC4\u5BA1\u7684\u4EE3\u7801\uFF0C\u6838\u5BF9\u9700\u6C42\u3001\u8BBE\u8BA1\u4E0E\u8FB9\u754C\uFF1B\u6309\u6587\u4EF6\u548C\u4F4D\u7F6E\u8BF4\u660E\u95EE\u9898\u53CA\u4FEE\u6539\u5EFA\u8BAE\u3002" }
  };
  var planningAgents = {
    discussion: "\u8BA8\u8BBA\u63D0\u70BC Agent",
    requirements: "\u9700\u6C42\u5206\u6790 Agent",
    design: "\u8F6F\u4EF6\u67B6\u6784 Agent",
    decompose: "PM Agent",
    "test-plan": "\u6D4B\u8BD5\u8BBE\u8BA1 Agent"
  };
  function agentForTask(task) {
    return roles[task.kind === "contract" && ["\u524D\u7AEF", "\u540E\u7AEF"].includes(task.role) ? "\u4EA7\u54C1\u8BBE\u8BA1" : task.role];
  }
  function validateAgentOutput(value, task) {
    if (typeof value?.summary !== "string" || !value.summary.trim() || value.summary.length > 1200 || !Array.isArray(value.artifacts) || !value.artifacts.length || value.artifacts.length > 4) {
      throw new Error("Agent \u9700\u8FD4\u56DE\u6458\u8981\u548C 1 \u81F3 4 \u4E2A\u4EA4\u4ED8\u6587\u4EF6");
    }
    const paths = /* @__PURE__ */ new Set();
    const artifacts = value.artifacts.map((file2) => {
      if (typeof file2?.path !== "string" || file2.path.length > 120 || !/^[A-Za-z0-9_-][A-Za-z0-9_.-]*(\/[A-Za-z0-9_-][A-Za-z0-9_.-]*)*$/.test(file2.path) || paths.has(file2.path) || typeof file2.content !== "string" || !file2.content.trim() || file2.content.length > 16e3) {
        throw new Error("\u4EA4\u4ED8\u6587\u4EF6\u9700\u8981\u552F\u4E00\u7684\u76F8\u5BF9\u8DEF\u5F84\u548C\u5B8C\u6574\u5185\u5BB9");
      }
      paths.add(file2.path);
      return { path: file2.path, content: file2.content };
    });
    if (artifacts.reduce((sum, file2) => sum + file2.content.length, 0) > 24e3) {
      throw new Error("\u4EA4\u4ED8\u6587\u4EF6\u603B\u957F\u5EA6\u4E0D\u80FD\u8D85\u8FC7 24000 \u5B57");
    }
    const output = { summary: value.summary.trim(), artifacts };
    if (task.role === "\u8BC4\u5BA1") {
      if (!["pass", "changes_requested", "needs_evidence"].includes(value.verdict)) throw new Error("\u9700\u63D0\u4F9B\u6709\u6548\u7684\u8BC4\u5BA1\u7ED3\u8BBA");
      output.verdict = value.verdict;
    }
    if (task.role === "\u6D4B\u8BD5" && value.verdict !== void 0) throw new Error("\u6D4B\u8BD5\u4EFB\u52A1\u53EA\u80FD\u4EA4\u4ED8\u811A\u672C\u6216\u6B65\u9AA4\uFF0C\u4E0D\u80FD\u58F0\u660E\u6D4B\u8BD5\u7ED3\u679C");
    return output;
  }
  function currentAgentOutput(record) {
    return record?.agentOutput && record.agentOutput.attempt === record.attempts ? record.agentOutput : void 0;
  }
  function approvedHandoffs(ids, runtime) {
    const handoffs = ids.map((id) => {
      const record = runtime[id];
      if (record?.status !== "done") throw new Error(id + " \u5C1A\u672A\u786E\u8BA4\u4EA4\u4ED8");
      const delivered = currentAgentOutput(record);
      const note = record.notes.findLast((item) => item.action === "complete")?.note ?? "";
      return { id, note, artifacts: delivered?.artifacts ?? [] };
    });
    for (const handoff of handoffs) {
      recordEvent({
        event_type: EVENT_TYPES.HANDOFF,
        entity_ref: handoff.id,
        t_id: handoff.id,
        to_status: "done",
        attempt_number: runtime[handoff.id].attempts,
        actor: "agent",
        evidence_ref: handoff.artifacts.length ? handoff.artifacts.map((file2) => file2.path).join("|") : "runtime." + handoff.id + ".notes"
      });
    }
    return handoffs;
  }

  // interaction.mjs
  var stateLabels = {
    pending: "\u7B49\u5F85\u524D\u7F6E",
    ready: "\u53EF\u5F00\u59CB",
    running: "\u6267\u884C\u4E2D",
    waiting: "\u7B49\u5F85\u4EBA\u5DE5\u8865\u5145",
    failed: "\u5931\u8D25\u5F85\u5904\u7406",
    done: "\u5DF2\u786E\u8BA4\u5B8C\u6210"
  };
  function taskState(id, runtime, arrangement2) {
    const saved = runtime[id];
    if (saved && saved.status !== "pending") return saved.status;
    return arrangement2.dependencies[id].every((parent) => runtime[parent]?.status === "done") ? "ready" : "pending";
  }
  function transition(id, action, note, runtime, arrangement2) {
    if (!Object.hasOwn(arrangement2.dependencies, id)) throw new Error("\u4EFB\u52A1\u4E0D\u5B58\u5728");
    const state = taskState(id, runtime, arrangement2);
    const allowed = {
      start: ["ready"],
      complete: ["running"],
      ask: ["running"],
      fail: ["running"],
      answer: ["waiting"],
      retry: ["failed"]
    };
    if (!allowed[action]?.includes(state)) throw new Error("\u5F53\u524D\u72B6\u6001\u4E0D\u652F\u6301\u8FD9\u9879\u64CD\u4F5C");
    if (typeof note !== "string" || !note.trim() || note.length > 2e3) throw new Error("\u8BF7\u586B\u5199\u5904\u7406\u8BF4\u660E\uFF0C\u5B8C\u6210\u65F6\u586B\u5199\u4EA4\u4ED8\u7269\u4F4D\u7F6E\u6216\u7ED3\u679C\u6458\u8981");
    const next = { start: "running", complete: "done", ask: "waiting", fail: "failed", answer: "running", retry: "running" };
    const record = runtime[id] ?? { status: "pending", attempts: 0, notes: [] };
    const verdict = currentAgentOutput(record)?.verdict;
    if (action === "complete" && verdict && verdict !== "pass") {
      throw new Error("\u8BC4\u5BA1\u5C1A\u672A\u901A\u8FC7\uFF0C\u8BF7\u8865\u5145\u8BC1\u636E\u6216\u8BB0\u5F55\u8FD4\u5DE5");
    }
    const attemptNumber = record.attempts + Number(action === "start" || action === "retry");
    const noteRef = "runtime." + id + ".notes[" + record.notes.length + "]";
    recordEvent({
      event_type: EVENT_TYPES.TASK_STATUS_CHANGE,
      entity_ref: id,
      t_id: id,
      from_status: state,
      to_status: next[action],
      batch_id: batchIdFor(id, arrangement2),
      actor: ["start", "retry"].includes(action) ? "agent" : "human",
      reason_code: action === "fail" ? reasonForTask(id) : action === "retry" ? REASON_CODES.HUMAN_REJECTED : null,
      evidence_ref: noteRef
    });
    if (action === "fail" || action === "retry") {
      recordEvent({
        event_type: EVENT_TYPES.ATTEMPT,
        entity_ref: id,
        t_id: id,
        batch_id: batchIdFor(id, arrangement2),
        attempt_number: attemptNumber,
        failed_tc_ids: taskCasesFor(id),
        reason_code: action === "fail" ? reasonForTask(id) : REASON_CODES.HUMAN_REJECTED,
        previous_attempt_ref: lastEventRef(EVENT_TYPES.ATTEMPT, id),
        actor: "human",
        evidence_ref: noteRef
      });
    }
    if (action === "complete") {
      recordEvent({
        event_type: EVENT_TYPES.DELIVERY_CONFIRMED,
        entity_ref: id,
        t_id: id,
        batch_id: batchIdFor(id, arrangement2),
        to_status: "done",
        actor: "human",
        evidence_ref: noteRef
      });
    }
    return {
      ...record,
      status: next[action],
      attempts: record.attempts + Number(action === "start" || action === "retry"),
      notes: [...record.notes, { action, note: note.trim(), time: (/* @__PURE__ */ new Date()).toISOString() }]
    };
  }
  function rollbackScope(target, arrangement2) {
    const affected = /* @__PURE__ */ new Set([target]);
    for (const id of arrangement2.rounds.flat()) {
      if (arrangement2.dependencies[id].some((parent) => affected.has(parent))) affected.add(id);
    }
    return [...affected].slice(1);
  }
  function rollbackTargets(task) {
    return task.test?.targets ?? (task.review ? [task.review.target] : []);
  }
  function rollbackTask(checkpoint, target, note, runtime, arrangement2) {
    if (!rollbackTargets(checkpoint).includes(target) || !arrangement2.dependencies[checkpoint.id]?.includes(target)) {
      throw new Error("\u8BF7\u9009\u62E9\u8BE5\u6D4B\u8BD5\u6216\u8BC4\u5BA1\u5B9E\u9645\u4F9D\u8D56\u7684\u5B9E\u73B0\u4EFB\u52A1");
    }
    if (runtime[checkpoint.id]?.status !== "failed" || runtime[target]?.status !== "done") {
      throw new Error("\u6D4B\u8BD5\u6216\u8BC4\u5BA1\u987B\u5904\u4E8E\u5931\u8D25\u5F85\u5904\u7406\u72B6\u6001\uFF0C\u4E14\u5B9E\u73B0\u4EFB\u52A1\u5DF2\u4EA4\u4ED8");
    }
    if (typeof note !== "string" || !note.trim() || note.length > 2e3) {
      throw new Error("\u8BF7\u586B\u5199\u5B9A\u4F4D\u4F9D\u636E\u6216\u5931\u8D25\u73B0\u8C61");
    }
    const affected = rollbackScope(target, arrangement2);
    const updated = { ...runtime };
    const time = (/* @__PURE__ */ new Date()).toISOString();
    function mark(id, status, action) {
      const previous = runtime[id] ?? { attempts: 0, notes: [] };
      updated[id] = { ...previous, status, notes: [...previous.notes, {
        time,
        action,
        note: note.trim(),
        test: checkpoint.id,
        target
      }] };
    }
    mark(target, "failed", "rollback");
    for (const id of affected) {
      if (runtime[id]) mark(id, "pending", "invalidated");
    }
    recordEvent({
      event_type: EVENT_TYPES.ROLLBACK_EXECUTED,
      entity_ref: target,
      t_id: target,
      from_status: "done",
      to_status: "failed",
      batch_id: batchIdFor(target, arrangement2),
      actor: "human",
      reason_code: reasonForCheckpoint(checkpoint),
      affected_task_ids: affected,
      evidence_ref: "runtime." + checkpoint.id + ".notes[" + (runtime[checkpoint.id]?.notes.length ?? 0) + "]"
    });
    return { runtime: updated, affected };
  }
  function validateDiscussion(value, transcript) {
    const lines = transcript.split(/\r?\n/);
    if (typeof value?.mainline !== "string" || !value.mainline.trim() || value.mainline.length > 2e3 || !Array.isArray(value.points) || !value.points.length || value.points.length > 12) {
      throw new Error("\u8BA8\u8BBA\u6458\u8981\u9700\u8981\u4E3B\u7EBF\u548C 1 \u81F3 12 \u6761\u8981\u70B9");
    }
    const ids = /* @__PURE__ */ new Set();
    for (const point of value.points) {
      if (!/^P[1-9]\d*$/.test(point?.id) || ids.has(point.id) || !["decision", "open"].includes(point.kind) || typeof point.text !== "string" || !point.text.trim() || point.text.length > 1e3 || !Array.isArray(point.evidence) || !point.evidence.length) throw new Error("\u8BA8\u8BBA\u8981\u70B9\u683C\u5F0F\u6216\u7F16\u53F7\u65E0\u6548");
      ids.add(point.id);
      for (const source of point.evidence) {
        if (!Number.isInteger(source.line) || typeof source.quote !== "string" || !source.quote.trim() || !lines[source.line - 1]?.includes(source.quote)) throw new Error(point.id + " \u7684\u8BC1\u636E\u672A\u5728\u5BF9\u5E94\u539F\u6587\u884C\u4E2D\u627E\u5230");
      }
    }
  }
  function validateRuntime(runtime, plan, arrangement2) {
    if (!runtime || typeof runtime !== "object" || Array.isArray(runtime)) throw new Error("\u4EFB\u52A1\u72B6\u6001\u65E0\u6548");
    const tasks = new Map(plan.tasks.map((task) => [task.id, task]));
    for (const [id, record] of Object.entries(runtime)) {
      if (!tasks.has(id) || !["pending", "running", "waiting", "failed", "done"].includes(record.status) || !Number.isInteger(record.attempts) || record.attempts < 0 || !Array.isArray(record.notes) || record.notes.length > 1e3 || record.notes.some((item) => typeof item.note !== "string" || item.note.length > 2e3)) {
        throw new Error("\u5BFC\u5165\u7684\u6267\u884C\u8BB0\u5F55\u65E0\u6548");
      }
      if (record.agentOutput !== void 0) {
        const output = record.agentOutput;
        if (!output || !Number.isInteger(output.attempt) || output.attempt < 1 || output.attempt > record.attempts || typeof output.model !== "string" || !output.model.trim() || output.model.length > 150) {
          throw new Error("\u5BFC\u5165\u7684 Agent \u4EA7\u7269\u8BB0\u5F55\u65E0\u6548");
        }
        validateAgentOutput(output, tasks.get(id));
        const verdict = currentAgentOutput(record)?.verdict;
        if (record.status === "done" && verdict && verdict !== "pass") throw new Error("\u5DF2\u786E\u8BA4\u7684\u8BC4\u5BA1\u5FC5\u987B\u901A\u8FC7");
      }
      if (record.status !== "pending" && arrangement2.dependencies[id].some((parent) => runtime[parent]?.status !== "done")) {
        throw new Error("\u6267\u884C\u8BB0\u5F55\u4E0E\u524D\u7F6E\u4EFB\u52A1\u72B6\u6001\u4E0D\u4E00\u81F4");
      }
    }
  }

  // consensus.mjs
  var stanceLabels = { agree: "\u540C\u610F", object: "\u53CD\u5BF9", reserve: "\u4FDD\u7559\u610F\u89C1" };
  function requireValue(condition, message) {
    if (!condition) throw new Error(message);
  }
  function cleanText(value, limit, message) {
    requireValue(typeof value === "string" && value.trim().length > 0 && value.trim().length <= limit, message);
    return value.trim();
  }
  function discussionParticipants(transcript) {
    const names = transcript.split(/\r?\n/).map((line) => /^\s*([^：:\r\n]{1,50})[：:]/.exec(line)?.[1].trim());
    return [...new Set(names.filter(Boolean))];
  }
  function acknowledgedAll(discussion) {
    const round = discussion.rounds?.at(-1);
    return Boolean(round && discussion.participants.every((name) => round.votes.some((vote) => vote.participant === name && vote.stance === "agree")));
  }
  function proposalText(round) {
    return [round.proposal, ...Object.entries(round.resolutions).map(([id, answer]) => id + " \u7684\u5171\u8BC6\u51B3\u5B9A\uFF1A" + answer)].join("\n");
  }
  function startConsensusRound(discussion, { participants, proposal, resolutions, responses }) {
    requireValue(!discussion.confirmed, "\u5171\u540C\u7406\u89E3\u5DF2\u7ECF\u786E\u8BA4");
    const history = discussion.rounds ?? [];
    requireValue(history.length < 40, "\u8BA8\u8BBA\u8BB0\u5F55\u6700\u591A\u652F\u6301 40 \u8F6E");
    const previous = history.at(-1);
    const names = previous ? discussion.participants : participants;
    requireValue(Array.isArray(names) && names.length >= 2 && names.length <= 30, "\u8BF7\u767B\u8BB0 2 \u81F3 30 \u4F4D\u53C2\u4E0E\u8005");
    const roster = names.map((name) => cleanText(name, 50, "\u53C2\u4E0E\u8005\u540D\u79F0\u9700\u5728 1 \u81F3 50 \u5B57\u4E4B\u95F4"));
    requireValue(new Set(roster).size === roster.length, "\u53C2\u4E0E\u8005\u540D\u79F0\u987B\u552F\u4E00");
    const summary = cleanText(proposal, 2e3, "\u8BF7\u586B\u5199\u672C\u8F6E\u51B3\u7B56\u63D0\u6848\uFF0C\u6700\u591A 2000 \u5B57");
    const decisions = Object.fromEntries(discussion.points.filter((point) => point.kind === "open").map((point) => [
      point.id,
      cleanText(resolutions?.[point.id], 500, "\u8BF7\u586B\u5199 " + point.id + " \u7684\u62DF\u8BAE\u51B3\u5B9A\uFF0C\u6700\u591A 500 \u5B57")
    ]));
    const objections = (previous?.votes ?? []).filter((vote) => vote.stance !== "agree");
    const replies = Object.fromEntries(objections.map((vote) => [
      vote.participant,
      cleanText(
        Object.hasOwn(responses ?? {}, vote.participant) ? responses[vote.participant] : void 0,
        500,
        "\u8BF7\u5148\u56DE\u5E94 " + vote.participant + " \u7684\u610F\u89C1\uFF0C\u6700\u591A 500 \u5B57"
      )
    ]));
    const round = {
      number: history.length + 1,
      proposal: summary,
      resolutions: decisions,
      responses: replies,
      votes: [],
      openedAt: (/* @__PURE__ */ new Date()).toISOString()
    };
    const input = proposalText(round);
    requireValue(input.length >= 15 && input.length <= 4e3, "\u63D0\u6848\u4E0E\u5206\u6B67\u5904\u7406\u5408\u8BA1\u9700\u5728 15 \u81F3 4000 \u5B57\u4E4B\u95F4");
    return { ...discussion, participants: roster, rounds: [...history, round] };
  }
  function registerStance(discussion, { participant, stance, point, note }) {
    const round = discussion.rounds?.at(-1);
    requireValue(round && !discussion.confirmed, "\u8BF7\u5148\u5F00\u542F\u53EF\u767B\u8BB0\u7684\u786E\u8BA4\u8F6E\u6B21");
    requireValue(discussion.participants.includes(participant), "\u8BF7\u9009\u62E9\u672C\u8F6E\u53C2\u4E0E\u8005");
    requireValue(Object.hasOwn(stanceLabels, stance), "\u8BF7\u9009\u62E9\u7ACB\u573A");
    requireValue(!round.votes.some((vote2) => vote2.participant === participant), "\u8FD9\u4F4D\u53C2\u4E0E\u8005\u5728\u672C\u8F6E\u5DF2\u6709\u8BB0\u5F55");
    const pointId = stance === "agree" ? "" : point;
    requireValue(pointId === "" || discussion.points.some((item) => item.id === pointId), "\u8BF7\u9009\u62E9\u6709\u6548\u7684\u8BA8\u8BBA\u8981\u70B9");
    const reason = stance === "agree" && typeof note === "string" && !note.trim() ? "" : cleanText(note, 500, "\u8BF7\u586B\u5199\u610F\u89C1\uFF0C\u6700\u591A 500 \u5B57");
    const vote = { participant, stance, point: pointId, note: reason, time: (/* @__PURE__ */ new Date()).toISOString() };
    return { ...discussion, rounds: [...discussion.rounds.slice(0, -1), { ...round, votes: [...round.votes, vote] }] };
  }
  function confirmConsensus(discussion) {
    requireValue(!discussion.confirmed && acknowledgedAll(discussion), "\u672C\u8F6E\u5168\u4F53\u53C2\u4E0E\u8005\u540C\u610F\u540E\u624D\u53EF\u786E\u8BA4\u5171\u8BC6");
    const round = discussion.rounds.at(-1);
    return { text: proposalText(round), discussion: {
      ...discussion,
      confirmed: true,
      confirmedText: round.proposal,
      resolutions: round.resolutions,
      confirmedRound: round.number
    } };
  }
  function validateConsensus(record) {
    if (record.rounds === void 0) return;
    requireValue(Array.isArray(record.rounds) && record.rounds.length > 0, "\u8F6E\u6B21\u8BB0\u5F55\u65E0\u6548");
    let replay2 = { ...record, rounds: [], confirmed: false };
    for (const saved of record.rounds) {
      requireValue(saved?.number === replay2.rounds.length + 1 && Array.isArray(saved.votes) && typeof saved.openedAt === "string", "\u8F6E\u6B21\u8BB0\u5F55\u65E0\u6548");
      replay2 = startConsensusRound(replay2, {
        participants: record.participants,
        proposal: saved.proposal,
        resolutions: saved.resolutions,
        responses: saved.responses
      });
      for (const vote of saved.votes) {
        requireValue(typeof vote?.time === "string" && typeof vote.note === "string", "\u7ACB\u573A\u8BB0\u5F55\u65E0\u6548");
        replay2 = registerStance(replay2, vote);
      }
    }
    if (record.confirmed) {
      const final = confirmConsensus(replay2).discussion;
      requireValue(
        record.confirmedRound === final.confirmedRound && record.confirmedText === final.confirmedText,
        "\u5171\u8BC6\u786E\u8BA4\u4E0E\u6700\u540E\u4E00\u8F6E\u7ACB\u573A\u4E0D\u4E00\u81F4"
      );
    }
  }

  // status.mjs
  var statusOrder = ["pending", "ready", "running", "waiting", "failed", "done"];
  var statusGlyphs = Object.freeze({
    pending: "\u22EF",
    ready: "\u25B6",
    running: "\u25CF",
    waiting: "\u25F7",
    failed: "!",
    done: "\u2713"
  });
  function statusBadge(state, label, { rollbackAffected = false } = {}) {
    const safeState = statusOrder.includes(state) ? state : "pending";
    const badge = document.createElement("span");
    badge.className = "status-badge status-" + safeState + (rollbackAffected ? " is-rollback-affected" : "");
    badge.setAttribute("aria-label", label + (rollbackAffected ? "\uFF0C\u53D7\u56DE\u9000\u5F71\u54CD" : ""));
    const glyph = document.createElement("span");
    glyph.className = "status-glyph";
    glyph.setAttribute("aria-hidden", "true");
    glyph.textContent = statusGlyphs[safeState];
    badge.append(glyph, document.createTextNode(label));
    if (rollbackAffected) {
      const marker = document.createElement("span");
      marker.className = "status-marker";
      marker.setAttribute("aria-hidden", "true");
      marker.textContent = "\u21BA";
      badge.append(marker);
    }
    return badge;
  }
  function statusLegend(labels) {
    const legend = document.createElement("div");
    legend.className = "status-legend";
    legend.setAttribute("aria-label", "\u4EFB\u52A1\u72B6\u6001\u56FE\u4F8B");
    for (const state of statusOrder) legend.append(statusBadge(state, labels[state]));
    const note = document.createElement("span");
    note.className = "status-legend-note";
    note.textContent = "\u21BA \u53D7\u56DE\u9000\u5F71\u54CD\uFF08\u53E0\u52A0\u5728\u4EFB\u52A1\u72B6\u6001\u4E0A\uFF09";
    legend.append(note);
    return legend;
  }
  function rollbackAffectedIds(tasks, arrangement2, runtime, getTargets) {
    const targets = /* @__PURE__ */ new Set();
    for (const checkpoint of tasks) {
      if (runtime[checkpoint.id]?.status !== "failed") continue;
      for (const target of getTargets(checkpoint) ?? []) {
        const record = runtime[target];
        const rolledBack = record?.attempts > 0 && record.notes?.some((item) => item.action === "rollback");
        if (rolledBack) targets.add(target);
      }
    }
    const affected = /* @__PURE__ */ new Set();
    for (const id of arrangement2.rounds.flat()) {
      if (targets.has(id) || arrangement2.dependencies[id]?.some((parent) => affected.has(parent))) {
        affected.add(id);
      }
    }
    return affected;
  }

  // observability.mjs
  var EVENT_TYPES = Object.freeze({
    STAGE_START: "STAGE_START",
    STAGE_COMPLETE: "STAGE_COMPLETE",
    STAGE_FAIL: "STAGE_FAIL",
    TASK_STATUS_CHANGE: "TASK_STATUS_CHANGE",
    ATTEMPT: "ATTEMPT",
    DELIVERY_CONFIRMED: "DELIVERY_CONFIRMED",
    ROLLBACK_TARGET_SELECTED: "ROLLBACK_TARGET_SELECTED",
    ROLLBACK_PREVIEW: "ROLLBACK_PREVIEW",
    ROLLBACK_EXECUTED: "ROLLBACK_EXECUTED",
    HUMAN_INTERVENTION: "HUMAN_INTERVENTION",
    HANDOFF: "HANDOFF",
    BATCH_PLANNED: "BATCH_PLANNED",
    TEST_CASES_ASSIGNED: "TEST_CASES_ASSIGNED"
  });
  var REASON_CODES = Object.freeze({
    TEST_ASSERTION_FAIL: "TEST_ASSERTION_FAIL",
    DESIGN_CONFLICT: "DESIGN_CONFLICT",
    MISSING_DEPENDENCY: "MISSING_DEPENDENCY",
    HUMAN_REJECTED: "HUMAN_REJECTED",
    API_TIMEOUT: "API_TIMEOUT",
    VALIDATION_FAIL: "VALIDATION_FAIL",
    NETWORK_ERROR: "NETWORK_ERROR",
    UNKNOWN: "UNKNOWN"
  });
  var HUMAN_INTERVENTION_TYPES = Object.freeze({
    FIELD_CLARIFICATION: "FIELD_CLARIFICATION",
    ROLLBACK_DECISION: "ROLLBACK_DECISION"
  });
  var EVENT_DEFAULTS = Object.freeze({
    batch_id: null,
    entity_ref: null,
    r_id: null,
    d_id: null,
    t_id: null,
    tc_id: null,
    from_status: null,
    to_status: null,
    actor: "system",
    reason_code: null,
    attempt_number: 0,
    evidence_ref: null,
    payload_ref: null,
    affected_task_ids: [],
    failed_tc_ids: [],
    batch_ids: [],
    subtype: null,
    previous_attempt_ref: null
  });
  var BODY_KEYS = ["content", "prompt", "response", "messages", "transcript", "input", "output", "source"];
  var ALLOWED_EVENT_TYPES = new Set(Object.values(EVENT_TYPES));
  var ALLOWED_REASON_CODES = new Set(Object.values(REASON_CODES));
  var structuredEvents = [];
  var eventSeq = 0;
  var taskCaseIndex = /* @__PURE__ */ new Map();
  var taskMetaIndex = /* @__PURE__ */ new Map();
  function registerTaskMeta(taskId, meta) {
    taskMetaIndex.set(taskId, { ...meta });
  }
  function taskCasesFor(taskId) {
    return [...taskCaseIndex.get(taskId) ?? []];
  }
  function reasonForTask(taskId) {
    return taskMetaIndex.get(taskId)?.review ? REASON_CODES.HUMAN_REJECTED : REASON_CODES.TEST_ASSERTION_FAIL;
  }
  function reasonForCheckpoint(checkpoint) {
    if (checkpoint?.test) return REASON_CODES.TEST_ASSERTION_FAIL;
    if (checkpoint?.review) return REASON_CODES.HUMAN_REJECTED;
    return REASON_CODES.DESIGN_CONFLICT;
  }
  function batchIdFor(taskId, arrangement2) {
    const index = arrangement2?.rounds?.findIndex((batch) => batch.includes(taskId)) ?? -1;
    return index < 0 ? null : "B" + (index + 1);
  }
  function lastEventRef(eventType, entityRef) {
    let latestAny = null;
    for (let index = structuredEvents.length - 1; index >= 0; index--) {
      const event = structuredEvents[index];
      if (event.event_type !== eventType) continue;
      if (event.entity_ref === entityRef || event.t_id === entityRef) return event.event_id;
      if (!latestAny) latestAny = event.event_id;
    }
    return latestAny;
  }
  function recordEvent(partial = {}) {
    try {
      const source = partial && typeof partial === "object" ? partial : {};
      const event = { ...EVENT_DEFAULTS, ...source };
      for (const key of BODY_KEYS) {
        if (Object.hasOwn(event, key)) {
          delete event[key];
          console.warn("[observability] \u5DF2\u5254\u9664\u6B63\u6587\u952E\uFF08\u4EC5\u4FDD\u7559\u5F15\u7528\uFF09\uFF1A" + key);
        }
      }
      event.event_id = source.event_id || "evt_" + Date.now().toString(36) + "_" + (++eventSeq).toString(36) + "_" + Math.random().toString(36).slice(2, 7);
      event.timestamp = source.timestamp || (/* @__PURE__ */ new Date()).toISOString();
      if (source.event_type !== void 0 && !ALLOWED_EVENT_TYPES.has(source.event_type)) {
        console.warn("[observability] \u672A\u77E5 event_type\uFF08\u4EC5\u544A\u8B66\uFF09\uFF1A" + source.event_type);
      }
      if (event.reason_code !== null && !ALLOWED_REASON_CODES.has(event.reason_code)) {
        console.warn("[observability] \u672A\u77E5 reason_code\uFF08\u4EC5\u544A\u8B66\uFF09\uFF1A" + event.reason_code);
      }
      structuredEvents.push(event);
      return { ...event };
    } catch (error) {
      console.warn("[observability] recordEvent \u5FFD\u7565\u5F02\u5E38\uFF1A", error);
      return void 0;
    }
  }
  function getStructuredEvents() {
    return structuredEvents.map((event) => ({ ...event }));
  }
  function mergeStructuredEvents(list) {
    try {
      if (!Array.isArray(list)) return 0;
      let added = 0;
      for (const event of list) {
        if (!event || typeof event !== "object" || typeof event.event_type !== "string") continue;
        structuredEvents.push({ ...EVENT_DEFAULTS, ...event });
        added++;
      }
      return added;
    } catch (error) {
      console.warn("[observability] mergeStructuredEvents \u5FFD\u7565\u5F02\u5E38\uFF1A", error);
      return 0;
    }
  }
  function restoreStructuredEvents(list) {
    if (!Array.isArray(list) || list.length > 1e4 || list.some((event) => !event || typeof event !== "object" || typeof event.event_type !== "string" || typeof event.event_id !== "string" || typeof event.timestamp !== "string")) {
      throw new Error("\u7ED3\u6784\u5316\u4E8B\u4EF6\u8BB0\u5F55\u683C\u5F0F\u65E0\u6548");
    }
    structuredEvents = list.map((event) => ({ ...EVENT_DEFAULTS, ...event }));
    return structuredEvents.length;
  }
  function buildSummary(events = structuredEvents) {
    const list = Array.isArray(events) ? events : [];
    const rollbacks_by_reason = {};
    const attempts_per_task = {};
    const human_interventions_by_type = {};
    const observedBatches = [];
    const plannedBatches = [];
    const appendBatch = (target, id) => {
      if (id && target.at(-1) !== id) target.push(id);
    };
    const executionTypes = /* @__PURE__ */ new Set([
      EVENT_TYPES.TASK_STATUS_CHANGE,
      EVENT_TYPES.ROLLBACK_EXECUTED,
      EVENT_TYPES.ATTEMPT,
      EVENT_TYPES.DELIVERY_CONFIRMED,
      EVENT_TYPES.HANDOFF
    ]);
    let total_rollbacks = 0;
    for (const event of list) {
      if (event.event_type === EVENT_TYPES.ROLLBACK_EXECUTED) {
        total_rollbacks++;
        const code = event.reason_code ?? REASON_CODES.UNKNOWN;
        rollbacks_by_reason[code] = (rollbacks_by_reason[code] || 0) + 1;
      } else if (event.event_type === EVENT_TYPES.ATTEMPT) {
        const key = event.t_id || event.entity_ref || "unknown";
        attempts_per_task[key] = (attempts_per_task[key] || 0) + 1;
      } else if (event.event_type === EVENT_TYPES.HUMAN_INTERVENTION) {
        const key = event.subtype || "UNKNOWN";
        human_interventions_by_type[key] = (human_interventions_by_type[key] || 0) + 1;
      } else if (event.event_type === EVENT_TYPES.BATCH_PLANNED) {
        for (const id of event.batch_ids ?? []) appendBatch(plannedBatches, id);
      }
      if (executionTypes.has(event.event_type)) appendBatch(observedBatches, event.batch_id);
    }
    const batch_sequence = observedBatches.length ? observedBatches : plannedBatches;
    return { total_rollbacks, rollbacks_by_reason, attempts_per_task, human_interventions_by_type, batch_sequence };
  }
  var actionLabels = { start: "\u5F00\u59CB\u6267\u884C", complete: "\u786E\u8BA4\u4EA4\u4ED8", ask: "\u8BF7\u6C42\u8865\u5145", answer: "\u63D0\u4EA4\u7B54\u590D", fail: "\u62A5\u544A\u5931\u8D25", retry: "\u4EBA\u5DE5\u91CD\u8BD5" };
  actionLabels.rollback = "\u56DE\u9000\u5B9E\u73B0";
  actionLabels.invalidated = "\u4EA4\u4ED8\u9700\u91CD\u9A8C";
  function historyText(item) {
    return actionLabels[item.action] + (item.test ? " \xB7 " + item.test + " \u2192 " + item.target : "") + " \xB7 " + item.note;
  }
  var node = (tag, text2 = "", className = "") => {
    const item = document.createElement(tag);
    item.textContent = text2;
    item.className = className;
    return item;
  };
  var button = (text2, handler) => {
    const item = node("button", text2);
    item.type = "button";
    item.addEventListener("click", handler);
    return item;
  };
  var verdictLabels = { pass: "\u8BC4\u5BA1\u901A\u8FC7", changes_requested: "\u5EFA\u8BAE\u8FD4\u5DE5", needs_evidence: "\u9700\u8981\u8865\u5145\u8BC1\u636E" };
  function createObservability({
    request,
    ready,
    adopt,
    getResult,
    getArrangement,
    download,
    isBusy,
    setBusy,
    renderCases,
    openPlan,
    refreshExecution
  }) {
    let events = [], runtime = {}, discussion;
    const pendingAgents = /* @__PURE__ */ new Map();
    const noteDrafts = /* @__PURE__ */ new Map();
    const activity = document.getElementById("activity");
    const discussionResult = document.getElementById("discussion-result");
    const transcript = document.getElementById("transcript");
    const extract = document.getElementById("extract-discussion");
    const discussionError = document.getElementById("discussion-error");
    function log(stage, status, message, details = {}) {
      events.push({ time: (/* @__PURE__ */ new Date()).toISOString(), stage, status, message, ...details });
      renderActivity();
    }
    function renderActivity() {
      activity.replaceChildren(...events.slice(-100).reverse().map((event) => {
        const row = node("li");
        row.append(
          node("time", new Date(event.time).toLocaleTimeString("zh-CN")),
          node("strong", [event.stage, event.agent, event.status].filter(Boolean).join(" \xB7 ")),
          node("span", event.message)
        );
        return row;
      }));
      document.getElementById("event-count").textContent = events.length;
      document.getElementById("activity-empty").hidden = events.length > 0;
    }
    extract.addEventListener("click", async () => {
      if (isBusy()) return;
      discussionError.textContent = "";
      if (transcript.value.trim().length < 15) {
        discussionError.textContent = "\u8BF7\u586B\u5199\u81F3\u5C11 15 \u5B57\u7684\u8BA8\u8BBA\u8BB0\u5F55\u3002";
        return;
      }
      if (!await ready()) return;
      extract.disabled = transcript.disabled = true;
      setBusy(true);
      const source = transcript.value;
      try {
        const response = await request("discussion", { transcript: source });
        const { mainline, points } = response.discussion;
        discussion = { transcript: source, mainline, points, confirmed: false };
        renderDiscussion();
      } catch (error) {
        discussionError.textContent = error.message;
      } finally {
        extract.disabled = transcript.disabled = false;
        setBusy(false);
      }
    });
    transcript.addEventListener("input", () => {
      discussion = void 0;
      discussionResult.replaceChildren();
    });
    document.getElementById("discussion-example").addEventListener("click", () => {
      if (isBusy() || transcript.disabled) return;
      transcript.value = "\u4EA7\u54C1\u540C\u5B66\uFF1A\u5148\u505A\u591A\u4EBA\u65C5\u6E38\u884C\u7A0B\u7F51\u9875\uFF0C\u6BCF\u5929\u6700\u591A 8 \u5C0F\u65F6\u3002\n\u524D\u7AEF Agent\uFF1A\u6211\u5EFA\u8BAE\u5148\u652F\u6301\u624B\u5DE5\u5F55\u5165\u666F\u70B9\u540D\u79F0\u548C\u65F6\u957F\u3002\n\u540E\u7AEF Agent\uFF1A\u540C\u610F\u3002\u6BCF\u4E2A\u666F\u70B9\u53EA\u80FD\u6392\u4E00\u6B21\uFF0C\u6392\u4E0D\u4E0B\u7684\u5355\u72EC\u5217\u51FA\u6765\u3002\n\u6D4B\u8BD5\u540C\u5B66\uFF1A\u666F\u70B9\u62D6\u5230\u53E6\u4E00\u5929\u8D85\u65F6\uFF0C\u662F\u62D2\u7EDD\u8FD8\u662F\u5141\u8BB8\u8B66\u544A\u540E\u4FDD\u5B58\uFF1F\n\u4EA7\u54C1\u540C\u5B66\uFF1A\u8FD9\u4E2A\u8FD8\u9700\u8981\u786E\u8BA4\u3002";
      discussion = void 0;
      discussionResult.replaceChildren();
    });
    function renderDiscussion() {
      discussionResult.replaceChildren();
      if (!discussion) return;
      discussionResult.append(node("h3", "\u8BA8\u8BBA \u2192 \u8981\u70B9 \u2192 \u5171\u540C\u7406\u89E3\u8349\u7A3F"));
      const original = node("details");
      original.append(
        node("summary", "\u67E5\u770B\u5E26\u884C\u53F7\u7684\u8BA8\u8BBA\u539F\u6587"),
        node("pre", discussion.transcript.split(/\r?\n/).map((line, i) => i + 1 + "  " + line).join("\n"), "transcript-source")
      );
      discussionResult.append(original);
      for (const point of discussion.points) {
        const card = node("article", "", "chain-card");
        card.append(
          node("h4", point.id + " \xB7 " + (point.kind === "open" ? "\u5F85\u786E\u8BA4" : "\u660E\u786E\u610F\u89C1")),
          node("p", point.text)
        );
        for (const evidence of point.evidence) card.append(node("blockquote", "\u7B2C " + evidence.line + " \u884C \xB7 " + evidence.quote));
        discussionResult.append(card);
      }
      const rounds = discussion.rounds ?? [];
      const current = rounds.at(-1);
      if (!current) {
        if (discussion.confirmed) {
          discussionResult.append(node("h3", "\u65E7\u7248\u8BB0\u5F55 \xB7 \u5DF2\u7531\u8D1F\u8D23\u4EBA\u786E\u8BA4"), node("p", discussion.confirmedText || discussion.mainline));
        } else {
          discussionResult.append(proposalEditor());
        }
        return;
      }
      discussionResult.append(roundCard(current));
      if (rounds.length > 1) {
        const history = node("details", "", "consensus-history");
        history.append(
          node("summary", "\u67E5\u770B\u5386\u53F2\u8F6E\u6B21\uFF08" + (rounds.length - 1) + " \u8F6E\uFF09"),
          ...rounds.slice(0, -1).reverse().map(roundCard)
        );
        discussionResult.append(history);
      }
      if (discussion.confirmed) {
        discussionResult.append(node(
          "p",
          "\u5171\u8BC6\u5DF2\u786E\u8BA4 \xB7 \u7B2C " + current.number + " \u8F6E\u5168\u5458\u540C\u610F \xB7 \u5DF2\u8F6C\u5165\u4EA7\u54C1\u60F3\u6CD5",
          "consensus-confirmed"
        ), button("\u67E5\u770B\u4EA7\u54C1\u60F3\u6CD5", openPlan));
        return;
      }
      const readyToConfirm = acknowledgedAll(discussion);
      const confirm = button("\u786E\u8BA4\u5171\u8BC6\u5E76\u8F6C\u5165\u4EA7\u54C1\u60F3\u6CD5", () => updateDiscussion(() => {
        const accepted = confirmConsensus(discussion);
        adopt(accepted.text);
        discussion = accepted.discussion;
        log(
          "\u5171\u8BC6\u786E\u8BA4",
          "\u5168\u5458\u540C\u610F",
          "\u7B2C " + current.number + " \u8F6E\u83B7 " + discussion.participants.length + " \u4F4D\u53C2\u4E0E\u8005\u540C\u610F\uFF0C\u5DF2\u8F6C\u5165\u4EA7\u54C1\u60F3\u6CD5",
          { round: current.number, participants: discussion.participants }
        );
      }));
      confirm.disabled = !readyToConfirm;
      discussionResult.append(node("p", readyToConfirm ? "\u5168\u5458\u5DF2\u540C\u610F\u672C\u8F6E\u63D0\u6848\u3002" : "\u672C\u8F6E\u5168\u5458\u540C\u610F\u540E\u53EF\u8F6C\u5165\u4EA7\u54C1\u60F3\u6CD5\u3002", "hint"), confirm);
      const revise = node("details", "", "consensus-history");
      revise.append(node("summary", "\u4FEE\u8BA2\u63D0\u6848\u5E76\u5F00\u542F\u65B0\u4E00\u8F6E"), proposalEditor(current));
      discussionResult.append(revise);
    }
    function updateDiscussion(action) {
      if (isBusy()) return;
      try {
        action();
        discussionError.textContent = "";
        renderDiscussion();
      } catch (error) {
        discussionError.textContent = error.message;
      }
    }
    function labeled(parent, title, control) {
      const label = node("label", title);
      label.append(control);
      parent.append(label);
      return control;
    }
    function proposalEditor(previous) {
      const editor = node("section", "", "chain-card");
      editor.append(node("h3", previous ? "\u7B2C " + (previous.number + 1) + " \u8F6E\u63D0\u6848" : "\u8D77\u8349\u63D0\u6848"));
      let roster;
      if (!previous) {
        roster = labeled(editor, "\u53C2\u4E0E\u8005\u540D\u5355\uFF08\u6BCF\u884C\u4E00\u4F4D\uFF09", node("textarea"));
        roster.rows = 3;
        roster.value = discussionParticipants(discussion.transcript).join("\n");
      }
      const proposal = labeled(editor, "\u5171\u540C\u51B3\u7B56\u63D0\u6848", node("textarea"));
      proposal.rows = 3;
      proposal.maxLength = 2e3;
      proposal.value = previous?.proposal ?? discussion.mainline;
      const decisions = discussion.points.filter((point) => point.kind === "open").map((point) => {
        const field = labeled(editor, point.id + " \u7684\u62DF\u8BAE\u51B3\u5B9A \xB7 " + point.text, node("input"));
        field.maxLength = 500;
        field.value = previous?.resolutions[point.id] ?? "";
        return [point.id, field];
      });
      const responses = (previous?.votes ?? []).filter((vote) => vote.stance !== "agree").map((vote) => {
        const field = labeled(editor, "\u56DE\u5E94 " + vote.participant + " \u7684\u610F\u89C1 \xB7 " + vote.note, node("input"));
        field.maxLength = 500;
        return [vote.participant, field];
      });
      const read = (fields) => Object.fromEntries(fields.map(([id, field]) => [id, field.value]));
      editor.append(button(previous ? "\u63D0\u4EA4\u4FEE\u8BA2\u5E76\u5F00\u542F\u65B0\u4E00\u8F6E" : "\u5F00\u542F\u7B2C\u4E00\u8F6E\u786E\u8BA4", () => updateDiscussion(() => {
        discussion = startConsensusRound(discussion, {
          participants: roster?.value.split(/\r?\n/).filter((line) => line.trim()),
          proposal: proposal.value,
          resolutions: read(decisions),
          responses: read(responses)
        });
        const round = discussion.rounds.at(-1);
        log(
          "\u5171\u8BC6\u786E\u8BA4",
          "\u5F00\u542F\u7B2C " + round.number + " \u8F6E",
          round.proposal,
          { round: round.number, participants: discussion.participants, responses: round.responses }
        );
      })));
      return editor;
    }
    function roundCard(round) {
      const current = discussion.rounds.at(-1) === round;
      const byName = new Map(round.votes.map((vote) => [vote.participant, vote]));
      const agrees = round.votes.filter((vote) => vote.stance === "agree").length;
      const card = node("article", "", "chain-card consensus-round");
      card.append(
        node("h3", "\u7B2C " + round.number + " \u8F6E \xB7 " + agrees + " / " + discussion.participants.length + " \u540C\u610F"),
        node("p", round.proposal, "chain-text")
      );
      for (const [id, answer] of Object.entries(round.resolutions)) card.append(node("p", id + " \xB7 " + answer));
      const list = node("ul");
      for (const name of discussion.participants) {
        const vote = byName.get(name);
        const row = node("li", name + " \xB7 " + (vote ? stanceLabels[vote.stance] : "\u5F85\u767B\u8BB0"));
        if (vote?.note) row.append(node("span", (vote.point ? vote.point + " \xB7 " : "") + vote.note));
        if (vote && vote.stance !== "agree") {
          const revised = discussion.rounds[round.number];
          const reply = revised?.responses[name];
          const closed = discussion.rounds.slice(round.number).find((later) => later.votes.some((item) => item.participant === name && item.stance === "agree"));
          if (reply) row.append(node("span", "\u7B2C " + revised.number + " \u8F6E\u56DE\u5E94 \xB7 " + reply));
          row.append(node("span", closed ? "\u5F02\u8BAE\u5DF2\u5173\u95ED \xB7 \u672C\u4EBA\u4E8E\u7B2C " + closed.number + " \u8F6E\u540C\u610F\u4FEE\u8BA2\u7A3F" : reply ? "\u7B49\u5F85\u8BE5\u53C2\u4E0E\u8005\u786E\u8BA4\u4FEE\u8BA2\u7A3F" : "\u5F85\u56DE\u5E94"));
        }
        list.append(row);
      }
      card.append(list);
      if (current && !discussion.confirmed && byName.size < discussion.participants.length) {
        card.append(stanceForm(discussion.participants.filter((name) => !byName.has(name))));
      }
      if (current && discussion.confirmed) card.append(node("p", "\u5DF2\u786E\u8BA4\u5171\u8BC6\u5E76\u8F6C\u5165\u4EA7\u54C1\u60F3\u6CD5", "execution-status"));
      return card;
    }
    function stanceForm(names) {
      const form = node("div", "", "consensus-form");
      const participant = labeled(form, "\u53C2\u4E0E\u8005", node("select"));
      participant.add(new Option("\u9009\u62E9\u5F85\u767B\u8BB0\u53C2\u4E0E\u8005", ""));
      names.forEach((name) => participant.add(new Option(name, name)));
      const stance = labeled(form, "\u7ACB\u573A", node("select"));
      stance.add(new Option("\u9009\u62E9\u7ACB\u573A", ""));
      for (const [id, label] of Object.entries(stanceLabels)) stance.add(new Option(label, id));
      const point = labeled(form, "\u6D89\u53CA\u8981\u70B9\uFF08\u9002\u7528\u4E8E\u5F02\u8BAE\uFF09", node("select"));
      point.add(new Option("\u6574\u4EFD\u63D0\u6848", ""));
      for (const item of discussion.points) point.add(new Option(item.id + " \xB7 " + item.text, item.id));
      const note = labeled(form, "\u610F\u89C1\u8BF4\u660E\uFF08\u53CD\u5BF9\u6216\u4FDD\u7559\u65F6\u5FC5\u586B\uFF09", node("input"));
      note.maxLength = 500;
      form.append(
        node("p", "\u8BF7\u767B\u8BB0\u53C2\u4E0E\u8005\u5DF2\u7ECF\u8868\u8FBE\u7684\u7ACB\u573A\u3002", "hint"),
        button("\u767B\u8BB0\u7ACB\u573A", () => updateDiscussion(() => {
          discussion = registerStance(discussion, {
            participant: participant.value,
            stance: stance.value,
            point: point.value,
            note: note.value
          });
          const round = discussion.rounds.at(-1);
          const vote = round.votes.at(-1);
          log("\u5171\u8BC6\u786E\u8BA4", stanceLabels[vote.stance], "\u7B2C " + round.number + " \u8F6E \xB7 " + vote.participant + (vote.note ? " \xB7 " + vote.note : ""), { round: round.number, ...vote });
        }))
      );
      return form;
    }
    async function callNodeAgent(task) {
      const result2 = getResult();
      const arrangement2 = getArrangement();
      const state = taskState(task.id, runtime, arrangement2);
      if (isBusy() || pendingAgents.has(task.id) || pendingAgents.size >= arrangement2.capacity || !["ready", "running", "failed"].includes(state)) return;
      const token = {};
      const name = agentForTask(task).name;
      const note = noteDrafts.get(task.id)?.trim() || "";
      const saved = runtime[task.id];
      let started;
      const latestFailure = saved?.notes.findLast((item) => ["rollback", "fail", "invalidated"].includes(item.action))?.note;
      const instruction = [latestFailure ? "\u4E0A\u6B21\u95EE\u9898\uFF1A" + latestFailure : "", note].filter(Boolean).join("\n").slice(0, 2e3);
      try {
        const handoffs = approvedHandoffs(arrangement2.dependencies[task.id], runtime);
        if (state !== "running") {
          runtime[task.id] = transition(
            task.id,
            state === "ready" ? "start" : "retry",
            "\u8C03\u7528 " + name,
            runtime,
            arrangement2
          );
        }
        started = runtime[task.id];
        pendingAgents.set(task.id, token);
        log(task.id, "\u8C03\u7528", "\u8BFB\u53D6 " + handoffs.length + " \u4E2A\u524D\u7F6E\u4EFB\u52A1\u7684\u5DF2\u786E\u8BA4\u4EA4\u4ED8\u7269", { agent: name });
        refreshExecution();
        const design = result2.pipeline?.design;
        const designContext = design && { summary: design.summary, components: design.components.filter((part) => task.designs?.includes(part.id)) };
        const testPlan = result2.pipeline?.testPlan ?? result2.testPlan;
        const data = await request("task-agent", {
          plan: result2.plan,
          taskId: task.id,
          handoffs,
          designContext,
          spec: designContext ? void 0 : result2.spec,
          cases: testPlan?.cases.filter((item) => item.task === task.id),
          note: instruction,
          previous: saved?.agentOutput
        }, false);
        if (getResult() !== result2 || runtime[task.id] !== started) return;
        const output = validateAgentOutput(data.agentOutput, task);
        runtime[task.id] = { ...started, agentOutput: { ...output, model: data.model, attempt: started.attempts } };
        log(task.id, "\u5F85\u786E\u8BA4\u4EA4\u4ED8", output.summary, { agent: name, model: data.model, artifacts: output.artifacts.map((file2) => file2.path) });
        for (const message of data.validations ?? []) log(task.id, "\u6821\u9A8C\u4FEE\u6B63", message, { agent: name });
      } catch (error) {
        if (getResult() === result2 && (!started || runtime[task.id] === started)) {
          log(task.id, "\u8C03\u7528\u5931\u8D25", error.message, { agent: name });
          token.error = error.message;
        }
      } finally {
        if (pendingAgents.get(task.id) === token) pendingAgents.delete(task.id);
        if (getResult() === result2) {
          if (token.error) agentErrors.set(task.id, token.error);
          else agentErrors.delete(task.id);
          refreshExecution();
        }
      }
    }
    const agentErrors = /* @__PURE__ */ new Map();
    function renderExecution(container) {
      const { plan } = getResult();
      const arrangement2 = getArrangement();
      const tasks = new Map(plan.tasks.map((task) => [task.id, task]));
      const affected = rollbackAffectedIds(plan.tasks, arrangement2, runtime, rollbackTargets);
      container.append(node("p", "\u8282\u70B9\u901A\u8FC7 DeepSeek API \u8C03\u7528\u5BF9\u5E94 Agent\u3002\u8D1F\u8D23\u4EBA\u786E\u8BA4\u540E\uFF0C\u4EA7\u7269\u624D\u4F1A\u4F20\u7ED9\u4F9D\u8D56\u5B83\u7684\u8282\u70B9\u3002\u6D4B\u8BD5\u811A\u672C\u7531\u8D1F\u8D23\u4EBA\u5728\u9879\u76EE\u73AF\u5883\u8FD0\u884C\u3002", "hint"));
      const batch = button("\u5E76\u884C\u8C03\u7528\u5C31\u7EEA Agent", async () => {
        if (isBusy() || !await ready() || getResult()?.plan !== plan) return;
        const available = arrangement2.rounds.flat().filter((id) => taskState(id, runtime, arrangement2) === "ready");
        await Promise.all(available.slice(0, Math.max(0, arrangement2.capacity - pendingAgents.size)).map((id) => callNodeAgent(tasks.get(id))));
      });
      batch.disabled = pendingAgents.size >= arrangement2.capacity || !plan.tasks.some((task) => taskState(task.id, runtime, arrangement2) === "ready");
      container.append(batch);
      for (const task of plan.tasks) {
        const state = taskState(task.id, runtime, arrangement2);
        const card = node("article", "", "execution-card");
        card.id = "execution-" + task.id;
        card.tabIndex = -1;
        const agent = agentForTask(task);
        const output = currentAgentOutput(runtime[task.id]);
        const inFlight = pendingAgents.has(task.id);
        const stateLine = node("p", "", "execution-status");
        stateLine.append(
          statusBadge(state, stateLabels[state], { rollbackAffected: affected.has(task.id) }),
          node("span", " \xB7 " + agent.name + " \xB7 " + taskStage(task) + (inFlight ? " \xB7 Agent \u751F\u6210\u4E2D" : "") + " \xB7 \u5C1D\u8BD5 " + (runtime[task.id]?.attempts || 0) + " \u6B21")
        );
        card.append(
          node("h3", task.id + " \xB7 " + task.title),
          stateLine,
          node("p", agent.duty),
          node("p", "\u9884\u671F\u4EA4\u4ED8\u7269\uFF1A" + task.output),
          node("p", "\u524D\u7F6E\uFF1A" + (arrangement2.dependencies[task.id].map((id) => id + " " + stateLabels[taskState(id, runtime, arrangement2)]).join("\u3001") || "\u65E0"))
        );
        if (task.test) card.append(node("p", "\u6D4B\u8BD5\u76EE\u6807\uFF1A" + task.test.targets.map((id) => id + " " + tasks.get(id).title).join("\u3001")), ...renderCases(task));
        if (task.review) card.append(
          node("p", "\u8BC4\u5BA1\u5BF9\u8C61\uFF1A" + task.review.target + " " + tasks.get(task.review.target).title),
          node("p", task.acceptance)
        );
        if (output) {
          card.append(node("p", (output.verdict ? verdictLabels[output.verdict] + " \xB7 " : "") + "DeepSeek \xB7 " + output.model + " \xB7 " + output.summary));
          for (const file2 of output.artifacts) {
            const detail = node("details", "", "agent-artifact");
            detail.append(
              node("summary", file2.path),
              node("pre", file2.content),
              button("\u4E0B\u8F7D\u6587\u4EF6", () => download(file2.path.split("/").at(-1), file2.content, "text/plain;charset=utf-8"))
            );
            card.append(detail);
          }
        }
        const list = node("ul", "", "execution-history");
        for (const item of runtime[task.id]?.notes || []) list.append(node(
          "li",
          new Date(item.time).toLocaleTimeString("zh-CN") + " \xB7 " + historyText(item)
        ));
        if (list.childElementCount) card.append(list);
        const allowed = { ready: ["start"], running: ["ask", "fail", "complete"], waiting: ["answer"], failed: ["retry"] }[state] || [];
        if (allowed.length) {
          const label = node("label", task.role === "\u6D4B\u8BD5" ? "\u5904\u7406\u8BF4\u660E\uFF0F\u5B9E\u9645\u6D4B\u8BD5\u7ED3\u679C" : "\u5904\u7406\u8BF4\u660E\uFF0F\u4EA4\u4ED8\u7269\u4F4D\u7F6E");
          const note = node("textarea");
          note.rows = 2;
          note.maxLength = 2e3;
          note.value = noteDrafts.get(task.id) ?? "";
          note.addEventListener("input", () => noteDrafts.set(task.id, note.value));
          label.append(note);
          const actions = node("div", "", "execution-actions");
          const error = node("p", "", "error");
          error.setAttribute("role", "alert");
          if (allowed.some((action) => ["start", "complete", "retry"].includes(action))) {
            const invoke = button((output ? "\u91CD\u65B0\u8C03\u7528 " : "\u8C03\u7528 ") + agent.name, async () => {
              if (!isBusy() && await ready() && getResult()?.plan === plan) await callNodeAgent(task);
            });
            invoke.disabled = inFlight || pendingAgents.size >= arrangement2.capacity;
            actions.append(invoke);
          }
          for (const action of allowed) {
            const control = button(actionLabels[action], () => {
              try {
                const evidence = note.value.trim() || (action === "complete" && output && task.role !== "\u6D4B\u8BD5" ? "\u5DF2\u786E\u8BA4 " + output.artifacts.map((file2) => file2.path).join("\u3001") : "");
                runtime[task.id] = transition(task.id, action, evidence, runtime, arrangement2);
                log(task.id, actionLabels[action], evidence);
                if (action === "ask" || action === "answer") recordEvent({
                  event_type: EVENT_TYPES.HUMAN_INTERVENTION,
                  entity_ref: task.id,
                  t_id: task.id,
                  batch_id: batchIdFor(task.id, arrangement2),
                  subtype: HUMAN_INTERVENTION_TYPES.FIELD_CLARIFICATION,
                  actor: "human",
                  payload_ref: "runtime." + task.id + ".notes[" + (runtime[task.id].notes.length - 1) + "].note",
                  evidence_ref: "runtime." + task.id + ".notes"
                });
                noteDrafts.delete(task.id);
                refreshExecution();
              } catch (issue) {
                error.textContent = issue.message;
              }
            });
            control.disabled = inFlight || action === "complete" && Boolean(output?.verdict && output.verdict !== "pass");
            actions.append(control);
          }
          const candidates = rollbackTargets(task);
          if (state === "failed" && candidates.length) {
            const targetLabel = node("label", "\u56DE\u9000\u76EE\u6807");
            const targets = node("select");
            targets.append(new Option("\u9009\u5B9A\u786E\u8BA4\u6709\u7F3A\u9677\u7684\u5B9E\u73B0\u4EFB\u52A1", ""));
            for (const id of candidates) targets.append(new Option(id + " \xB7 " + tasks.get(id).title, id));
            if (candidates.length === 1) targets.value = candidates[0];
            targetLabel.append(targets);
            const impact = node("p", "", "hint");
            const rollback = button("\u56DE\u9000\u5E76\u8981\u6C42\u91CD\u9A8C", () => {
              try {
                const id = targets.value;
                const update = rollbackTask(task, id, note.value, runtime, arrangement2);
                runtime = update.runtime;
                log(
                  task.id,
                  "\u56DE\u9000\u5230 " + id,
                  note.value.trim() + "\u3002\u9700\u91CD\u65B0\u9A8C\u8BC1\uFF1A" + update.affected.join("\u3001"),
                  { rollbackTarget: id, affected: update.affected }
                );
                recordEvent({
                  event_type: EVENT_TYPES.HUMAN_INTERVENTION,
                  entity_ref: id,
                  t_id: id,
                  batch_id: batchIdFor(id, arrangement2),
                  subtype: HUMAN_INTERVENTION_TYPES.ROLLBACK_DECISION,
                  reason_code: reasonForCheckpoint(task),
                  actor: "human",
                  payload_ref: "runtime." + task.id + ".notes[" + (runtime[task.id].notes.length - 1) + "].note",
                  evidence_ref: "runtime." + task.id + ".status"
                });
                noteDrafts.delete(task.id);
                refreshExecution();
              } catch (issue) {
                error.textContent = issue.message;
              }
            });
            const showImpact = () => {
              rollback.disabled = !targets.value;
              impact.textContent = targets.value ? "\u4FEE\u590D " + targets.value + " \u540E\u91CD\u65B0\u9A8C\u8BC1 " + rollbackScope(targets.value, arrangement2).join("\u3001") + "\u3002" : "\u9009\u5B9A\u5B9E\u73B0\u4EFB\u52A1\u540E\u53EF\u9884\u89C8\u5F71\u54CD\u8303\u56F4\u3002";
              if (targets.value) recordEvent({
                event_type: EVENT_TYPES.ROLLBACK_PREVIEW,
                entity_ref: targets.value,
                t_id: targets.value,
                batch_id: batchIdFor(targets.value, arrangement2),
                affected_task_ids: rollbackScope(targets.value, arrangement2),
                reason_code: reasonForCheckpoint(task),
                actor: "human",
                evidence_ref: "runtime." + task.id + ".status"
              });
            };
            targets.addEventListener("change", () => {
              if (targets.value) recordEvent({
                event_type: EVENT_TYPES.ROLLBACK_TARGET_SELECTED,
                entity_ref: targets.value,
                t_id: targets.value,
                batch_id: batchIdFor(targets.value, arrangement2),
                actor: "human",
                reason_code: reasonForCheckpoint(task),
                evidence_ref: "runtime." + task.id + ".status"
              });
            });
            targets.addEventListener("change", showImpact);
            showImpact();
            card.append(targetLabel, impact);
            actions.append(rollback);
          }
          if (agentErrors.has(task.id)) error.textContent = agentErrors.get(task.id);
          card.append(label, actions, error);
        }
        container.append(card);
      }
    }
    document.getElementById("export-task-md").addEventListener("click", () => {
      const result2 = getResult();
      if (!result2) return;
      const arrangement2 = getArrangement();
      const lines = ["# " + result2.plan.project + " \xB7 task.md", "", "\u4EFB\u52A1\u6267\u884C\u8BB0\u5F55\u7531\u8D1F\u8D23\u4EBA\u586B\u5199\u3002", ""];
      for (const task of result2.plan.tasks) {
        lines.push(
          "## " + task.id + " \xB7 " + task.title,
          "",
          "- \u5DE5\u79CD\uFF1A" + task.role,
          "- \u6267\u884C Agent\uFF1A" + agentForTask(task).name,
          "- \u5DE5\u4F5C\u7C7B\u578B\uFF1A" + taskStage(task),
          "- \u9700\u6C42\uFF1A" + task.requirements.join("\u3001"),
          "- \u8BBE\u8BA1\uFF1A" + (task.designs?.join("\u3001") || "\u5DF2\u6709\u8BBE\u8BA1\u89C4\u683C"),
          "- \u8F93\u5165\uFF1A" + (task.inputs.join("\u3001") || "\u8BBE\u8BA1\u89C4\u683C"),
          "- \u524D\u7F6E\u4EFB\u52A1\uFF1A" + (arrangement2.dependencies[task.id].join("\u3001") || "\u65E0"),
          "- \u4EA4\u4ED8\u7269\uFF1A" + task.output,
          "- \u9A8C\u6536\uFF1A" + task.acceptance,
          "- \u6267\u884C\u72B6\u6001\uFF1A" + stateLabels[taskState(task.id, runtime, arrangement2)],
          ""
        );
        if (task.test) lines.push(
          "- \u6D4B\u8BD5\u5C42\u6B21\uFF1A" + testLevelLabels[task.test.level],
          "- \u9A8C\u8BC1\u53CA\u5931\u8D25\u5B9A\u4F4D\u8303\u56F4\uFF1A" + task.test.targets.join("\u3001")
        );
        if (task.review) lines.push("- \u8BC4\u5BA1\u5BF9\u8C61\uFF1A" + task.review.target);
        const output = currentAgentOutput(runtime[task.id]);
        if (output) lines.push(
          "- Agent \u4EA7\u7269\uFF1A" + output.artifacts.map((file2) => file2.path).join("\u3001"),
          "- \u6A21\u578B\uFF1ADeepSeek \xB7 " + output.model
        );
        const testPlan = result2.pipeline?.testPlan ?? result2.testPlan;
        for (const test of testPlan?.cases.filter((test2) => test2.task === task.id) ?? []) {
          lines.push(
            "",
            "### " + test.id + " \xB7 " + test.title,
            "",
            "\u524D\u7F6E\u6761\u4EF6\uFF1A" + test.setup,
            "",
            ...test.steps.map((step, index) => index + 1 + ". " + step),
            "",
            "\u9884\u671F\u7ED3\u679C\uFF1A" + test.expected,
            ""
          );
        }
        for (const item of runtime[task.id]?.notes || []) lines.push("- " + historyText(item));
        lines.push("");
      }
      download("task.md", lines.join("\n"), "text/markdown;charset=utf-8");
    });
    document.getElementById("export-activity").addEventListener("click", () => {
      download("\u8FD0\u884C\u4E0E\u4EA4\u4E92\u8BB0\u5F55.json", JSON.stringify({
        events,
        runtime,
        discussion,
        structured_events: getStructuredEvents(),
        summary: buildSummary()
      }, null, 2), "application/json");
    });
    return {
      log,
      renderExecution,
      getRuntime() {
        return runtime;
      },
      reset() {
        events = [];
        this.resetRuntime();
        discussion = void 0;
        discussionResult.replaceChildren();
        renderActivity();
      },
      resetRuntime() {
        runtime = {};
        pendingAgents.clear();
        agentErrors.clear();
        noteDrafts.clear();
      },
      snapshot() {
        return structuredClone({ events, runtime, discussion });
      },
      restore(value, plan, arrangement2) {
        const restored = value || { events: [], runtime: {} };
        if (!Array.isArray(restored.events) || restored.events.length > 1e4 || restored.events.some((event) => typeof event.stage !== "string" || typeof event.message !== "string" || typeof event.status !== "string" || typeof event.time !== "string")) throw new Error("\u8FD0\u884C\u65E5\u5FD7\u683C\u5F0F\u65E0\u6548");
        validateRuntime(restored.runtime, plan, arrangement2);
        if (restored.discussion) {
          if (typeof restored.discussion.transcript !== "string") throw new Error("\u8BA8\u8BBA\u539F\u6587\u65E0\u6548");
          validateDiscussion(restored.discussion, restored.discussion.transcript);
          validateConsensus(restored.discussion);
        }
        this.resetRuntime();
        events = restored.events;
        runtime = restored.runtime;
        discussion = restored.discussion;
        if (discussion) transcript.value = discussion.transcript;
        renderActivity();
        renderDiscussion();
      }
    };
  }

  // workflow.mjs
  var roles2 = ["\u4EA7\u54C1\u8BBE\u8BA1", "\u524D\u7AEF", "\u540E\u7AEF", "\u6D4B\u8BD5", "\u8BC4\u5BA1"];
  var testLevelLabels = { unit: "\u5355\u5143\u6D4B\u8BD5", integration: "\u8054\u8C03\u6D4B\u8BD5", e2e: "\u7AEF\u5230\u7AEF\u9A8C\u6536" };
  var developmentRoles = /* @__PURE__ */ new Set(["\u524D\u7AEF", "\u540E\u7AEF"]);
  var isImplementation = (task) => developmentRoles.has(task?.role) && task.kind !== "contract";
  function taskStage(task) {
    if (task.review) return "\u8BC4\u5BA1";
    if (task.test) return testLevelLabels[task.test.level];
    if (task.role === "\u6D4B\u8BD5") return "\u6D4B\u8BD5";
    return isImplementation(task) ? "\u7F16\u7801" : "\u8BBE\u8BA1\u4E0E\u5951\u7EA6";
  }
  function check(condition, message) {
    if (!condition) throw new Error(message);
  }
  function present(value) {
    return typeof value === "string" && Boolean(value.trim());
  }
  function validate(plan) {
    check(present(plan?.project), "\u7F3A\u5C11\u9879\u76EE\u540D\u79F0");
    check(Array.isArray(plan.requirements) && plan.requirements.length > 0, "\u7F3A\u5C11\u9700\u6C42");
    check(Array.isArray(plan.tasks) && plan.tasks.length >= 2 && plan.tasks.length <= 40, "\u4EFB\u52A1\u6570\u91CF\u5E94\u5728 2 \u81F3 40 \u4E4B\u95F4");
    const requirements = /* @__PURE__ */ new Set();
    for (const req of plan.requirements) {
      check(/^R\d+$/.test(req.id) && !requirements.has(req.id) && present(req.text) && present(req.acceptance), "\u9700\u6C42\u7F16\u53F7\u91CD\u590D\u3001\u65E0\u6548\u6216\u7F3A\u5C11\u9A8C\u6536\u6807\u51C6");
      requirements.add(req.id);
    }
    const tasksById = /* @__PURE__ */ new Map();
    const covered = /* @__PURE__ */ new Set();
    const tested = /* @__PURE__ */ new Set();
    for (const task of plan.tasks) {
      check(/^T\d+$/.test(task.id) && !tasksById.has(task.id), "\u4EFB\u52A1\u7F16\u53F7\u91CD\u590D\u6216\u65E0\u6548");
      check(present(task.title) && present(task.acceptance) && roles2.includes(task.role), task.id + " \u7F3A\u5C11\u4EFB\u52A1\u540D\u79F0\u3001\u89D2\u8272\u6216\u9A8C\u6536\u6807\u51C6");
      check(Array.isArray(task.requirements) && task.requirements.length > 0 && task.requirements.every((id) => requirements.has(id)), task.id + " \u5F15\u7528\u4E86\u672A\u77E5\u9700\u6C42");
      for (const id of task.requirements) {
        if (task.role === "\u6D4B\u8BD5") tested.add(id);
        else covered.add(id);
      }
      check(Array.isArray(task.inputs) && task.inputs.every(present) && present(task.output), task.id + " \u7684\u8F93\u5165\u6216\u4EA4\u4ED8\u7269\u65E0\u6548");
      tasksById.set(task.id, task);
    }
    for (const task of plan.tasks) {
      if (task.review !== void 0 || task.role === "\u8BC4\u5BA1") {
        const target = tasksById.get(task.review?.target);
        check(
          task.role === "\u8BC4\u5BA1" && isImplementation(target) && task.inputs.includes(target.output),
          task.id + " \u7684\u8BC4\u5BA1\u5FC5\u987B\u5173\u8054\u5BF9\u5E94\u7684\u7F16\u7801\u4EA4\u4ED8\u7269"
        );
      }
      if (task.test === void 0) continue;
      const { level, targets } = task.test ?? {};
      check(task.role === "\u6D4B\u8BD5" && Object.hasOwn(testLevelLabels, level) && Array.isArray(targets) && new Set(targets).size === targets.length && targets.length >= (level === "integration" ? 2 : 1) && (level !== "unit" || targets.length === 1), task.id + " \u7684\u6D4B\u8BD5\u5C42\u6B21\u6216\u5B9E\u73B0\u76EE\u6807\u65E0\u6548");
      check(targets.every((id) => {
        const target = tasksById.get(id);
        return isImplementation(target) && task.inputs.includes(target.output);
      }), task.id + " \u5FC5\u987B\u4F9D\u8D56\u5176\u6D4B\u8BD5\u76EE\u6807\u7684\u5B9E\u73B0\u4EA4\u4ED8\u7269");
      if (task.test.cases !== void 0) {
        check(Array.isArray(task.test.cases) && task.test.cases.length > 0 && new Set(task.test.cases).size === task.test.cases.length && task.test.cases.every((id) => /^TC[1-9]\d*$/.test(id)), task.id + " \u7684\u6D4B\u8BD5\u7528\u4F8B\u7F16\u53F7\u65E0\u6548");
      }
    }
    check([...requirements].every((id) => covered.has(id) && tested.has(id)), "\u6BCF\u6761\u9700\u6C42\u90FD\u5E94\u6709\u975E\u6D4B\u8BD5\u4EFB\u52A1\u548C\u6D4B\u8BD5\u4EFB\u52A1\u8986\u76D6");
  }
  function schedule(plan, capacity2) {
    check(Number.isInteger(capacity2) && capacity2 >= 1 && capacity2 <= 8, "\u5E76\u884C\u4E0A\u9650\u987B\u5728 1 \u81F3 8 \u4E4B\u95F4");
    validate(plan);
    const producers = /* @__PURE__ */ new Map();
    for (const task of plan.tasks) {
      check(!producers.has(task.output), "\u4EA4\u4ED8\u7269\u6709\u591A\u4E2A\u751F\u4EA7\u4EFB\u52A1\uFF1A" + task.output);
      producers.set(task.output, task.id);
    }
    const dependencies = {};
    const edges = [];
    for (const task of plan.tasks) {
      dependencies[task.id] = [];
      const inputs = new Set(task.inputs);
      if (task.role === "\u6D4B\u8BD5" && !task.test) {
        for (const implementation of plan.tasks) {
          if (implementation.role !== "\u6D4B\u8BD5" && implementation.requirements.some((id) => task.requirements.includes(id))) {
            inputs.add(implementation.output);
          }
        }
      }
      for (const input of inputs) {
        const from = producers.get(input);
        check(from, task.id + " \u7684\u8F93\u5165\u7F3A\u5C11\u751F\u4EA7\u4EFB\u52A1\uFF1A" + input);
        check(from !== task.id, task.id + " \u4F9D\u8D56\u81EA\u5DF1\u7684\u4EA4\u4ED8\u7269");
        dependencies[task.id].push(from);
        edges.push({ from, to: task.id, artifact: input });
      }
    }
    const completed = /* @__PURE__ */ new Set();
    const rounds = [];
    while (completed.size < plan.tasks.length) {
      const ready = plan.tasks.filter((task) => !completed.has(task.id) && dependencies[task.id].every((id) => completed.has(id)));
      check(ready.length > 0, "\u68C0\u6D4B\u5230\u5FAA\u73AF\u4F9D\u8D56\uFF0C\u5269\u4F59\u4EFB\u52A1\uFF1A" + plan.tasks.filter((task) => !completed.has(task.id)).map((task) => task.id).join("\u3001"));
      const batch = ready.slice(0, capacity2).map((task) => task.id);
      rounds.push(batch);
      for (const id of batch) completed.add(id);
    }
    for (const task of plan.tasks) registerTaskMeta(task.id, task);
    recordEvent({
      event_type: EVENT_TYPES.BATCH_PLANNED,
      batch_ids: rounds.map((_, index) => "B" + (index + 1)),
      evidence_ref: "arrangement.rounds",
      actor: "system"
    });
    return { capacity: capacity2, rounds, dependencies, edges };
  }

  // pipeline.mjs
  function check2(condition, message) {
    if (!condition) throw new Error(message);
  }
  function text(value, limit = 500) {
    return typeof value === "string" && value.trim() && value.length <= limit;
  }
  function entries(list, prefix, label, limit = 12) {
    check2(Array.isArray(list) && list.length > 0 && list.length <= limit, label + "\u9700\u8981 1 \u81F3 " + limit + " \u4E2A\u6761\u76EE");
    const ids = /* @__PURE__ */ new Set();
    for (const item of list) {
      check2(typeof item?.id === "string" && new RegExp("^" + prefix + "[1-9]\\d*$").test(item.id) && !ids.has(item.id), label + "\u6761\u76EE\u7F16\u53F7\u65E0\u6548\u6216\u91CD\u590D");
      ids.add(item.id);
    }
    return ids;
  }
  function references(ids, available) {
    return Array.isArray(ids) && ids.length > 0 && new Set(ids).size === ids.length && ids.every((id) => available.has(id));
  }
  function validateRequirements(document2) {
    check2(text(document2?.project, 120) && text(document2.goal) && text(document2.scope), "\u9700\u6C42\u89C4\u683C\u7F3A\u5C11\u9879\u76EE\u540D\u79F0\u3001\u76EE\u6807\u6216\u8303\u56F4");
    entries(document2.requirements, "R", "\u9700\u6C42\u89C4\u683C");
    for (const req of document2.requirements) {
      check2(text(req.text) && text(req.acceptance), req.id + " \u7F3A\u5C11\u9700\u6C42\u63CF\u8FF0\u6216\u53EF\u9A8C\u8BC1\u7684\u9A8C\u6536\u6761\u4EF6");
    }
  }
  function validateDesign(design, requirements) {
    validateRequirements(requirements);
    check2(text(design?.summary, 1e3), "\u8BBE\u8BA1\u89C4\u683C\u7F3A\u5C11\u603B\u4F53\u8BBE\u8BA1");
    entries(design.components, "D", "\u8BBE\u8BA1\u89C4\u683C");
    const known = new Set(requirements.requirements.map((req) => req.id));
    const covered = /* @__PURE__ */ new Set();
    for (const part of design.components) {
      check2(
        text(part.title, 120) && text(part.design, 800) && text(part.contract, 600),
        part.id + " \u7F3A\u5C11\u6A21\u5757\u540D\u79F0\u3001\u5B9E\u73B0\u8BBE\u8BA1\u6216\u63A5\u53E3\u4E0E\u6570\u636E\u7EA6\u5B9A"
      );
      check2(references(part.requirements, known), part.id + " \u5F15\u7528\u4E86\u4E0D\u5B58\u5728\u6216\u91CD\u590D\u7684\u9700\u6C42\u7F16\u53F7");
      for (const id of part.requirements) covered.add(id);
    }
    check2(covered.size === known.size, "\u5B58\u5728\u5C1A\u672A\u5173\u8054\u8BBE\u8BA1\u6A21\u5757\u7684\u9700\u6C42");
  }
  function validateTaskLinks(plan, design) {
    const components = new Map(design.components.map((part) => [part.id, part]));
    const development = /* @__PURE__ */ new Set();
    const tests = /* @__PURE__ */ new Set();
    for (const task of plan.tasks) {
      check2(references(task.designs, components), task.id + " \u9700\u8981\u5173\u8054\u6709\u6548\u7684\u8BBE\u8BA1\u7F16\u53F7");
      const implied = new Set(task.designs.flatMap((id) => components.get(id).requirements));
      check2(task.requirements.every((id) => implied.has(id)), task.id + " \u7684\u9700\u6C42\u7F16\u53F7\u8D85\u51FA\u5173\u8054\u8BBE\u8BA1\u8986\u76D6\u7684\u8303\u56F4");
      check2(
        task.designs.every((id) => components.get(id).requirements.some((req) => task.requirements.includes(req))),
        task.id + " \u7684\u5173\u8054\u8BBE\u8BA1\u548C\u9700\u6C42\u9700\u8981\u6709\u4EA4\u96C6"
      );
      const target = task.role === "\u6D4B\u8BD5" ? tests : development;
      for (const id of task.designs) target.add(id);
    }
    check2(
      development.size === components.size && tests.size === components.size,
      "\u6BCF\u9879\u8BBE\u8BA1\u90FD\u9700\u8981\u5F00\u53D1\u4EFB\u52A1\u548C\u9A8C\u6536\u6D4B\u8BD5"
    );
  }
  function validateTestPlan(value, design, plan) {
    check2(text(value?.strategy, 1e3), "\u6D4B\u8BD5\u65B9\u6848\u7F3A\u5C11\u8303\u56F4\u4E0E\u65B9\u6CD5");
    entries(value.cases, "TC", "\u6D4B\u8BD5\u65B9\u6848", 48);
    const designById = new Map((design?.components ?? []).map((part) => [part.id, part]));
    const testers = new Map(plan.tasks.filter((task) => task.role === "\u6D4B\u8BD5").map((task) => [task.id, task]));
    const coveredRequirements = /* @__PURE__ */ new Set();
    const coveredDesigns = /* @__PURE__ */ new Set();
    const coveredTasks = /* @__PURE__ */ new Set();
    for (const test of value.cases) {
      const task = testers.get(test.task);
      const parts = test.designs ?? (test.design ? [test.design] : []);
      check2(
        task && (design ? references(parts, designById) && parts[0] === test.design && parts.every((id) => task.designs.includes(id)) : !parts.length && test.design === void 0),
        test.id + " \u7684\u8BBE\u8BA1\u7F16\u53F7\u4E0E\u6D4B\u8BD5\u4EFB\u52A1\u4E0D\u5339\u914D"
      );
      const applicable = new Set(parts.flatMap((id) => designById.get(id).requirements));
      check2(
        references(test.requirements, new Set(task.requirements.filter((id) => !design || applicable.has(id)))) && parts.every((id) => designById.get(id).requirements.some((req) => test.requirements.includes(req))),
        test.id + " \u5F15\u7528\u4E86\u4E0E\u8BBE\u8BA1\u6216\u6D4B\u8BD5\u4EFB\u52A1\u65E0\u5173\u7684\u9700\u6C42"
      );
      check2(
        text(test.title, 120) && text(test.setup) && text(test.expected) && Array.isArray(test.steps) && test.steps.length > 0 && test.steps.length <= 10 && test.steps.every((step) => text(step, 300)),
        test.id + " \u7F3A\u5C11\u6807\u9898\u3001\u524D\u7F6E\u6761\u4EF6\u3001\u53EF\u6267\u884C\u6B65\u9AA4\u6216\u9884\u671F\u7ED3\u679C"
      );
      test.requirements.forEach((id) => coveredRequirements.add(id));
      parts.forEach((id) => coveredDesigns.add(id));
      coveredTasks.add(task.id);
    }
    check2(plan.requirements.every((req) => coveredRequirements.has(req.id)), "\u5B58\u5728\u672A\u88AB\u7528\u4F8B\u8986\u76D6\u7684\u9700\u6C42");
    check2(
      coveredDesigns.size === designById.size && coveredTasks.size === testers.size,
      "\u6BCF\u9879\u8BBE\u8BA1\u53CA\u6D4B\u8BD5\u4EFB\u52A1\u90FD\u9700\u8981\u5173\u8054\u6D4B\u8BD5\u7528\u4F8B"
    );
    for (const task of testers.values()) {
      if (!task.test?.cases) continue;
      const cases = value.cases.filter((test) => test.task === task.id);
      const ids = cases.map((test) => test.id);
      check2(
        ids.length === task.test.cases.length && task.test.cases.every((id) => ids.includes(id)),
        task.id + " \u7684\u7528\u4F8B\u6E05\u5355\u4E0E\u6D4B\u8BD5\u65B9\u6848\u4E0D\u4E00\u81F4"
      );
      const covered = new Set(cases.flatMap((test) => test.requirements));
      check2(task.requirements.every((id) => covered.has(id)), task.id + " \u7684\u7528\u4F8B\u672A\u8986\u76D6\u4EFB\u52A1\u7684\u5168\u90E8\u9700\u6C42");
    }
  }
  function designMarkdown(requirements, design) {
    const lines = [
      "# " + requirements.project + " \xB7 \u8BBE\u8BA1\u89C4\u683C",
      "",
      "## \u603B\u4F53\u8BBE\u8BA1",
      "",
      design.summary,
      "",
      "## \u6A21\u5757\u8BBE\u8BA1",
      ""
    ];
    for (const part of design.components) {
      lines.push(
        "### " + part.id + " \xB7 " + part.title,
        "",
        "\u5173\u8054\u9700\u6C42\uFF1A" + part.requirements.join("\u3001"),
        "",
        part.design,
        "",
        "\u63A5\u53E3\u4E0E\u6570\u636E\u7EA6\u5B9A\uFF1A" + part.contract,
        ""
      );
    }
    return lines.join("\n");
  }
  function designFeedback(design, plan, arrangement2) {
    const batchOf = new Map(arrangement2.rounds.flatMap((ids, index) => ids.map((id) => [id, index + 1])));
    return design.components.map((part) => ({
      ...part,
      tasks: plan.tasks.filter((task) => task.designs.includes(part.id)).map((task) => ({
        id: task.id,
        title: task.title,
        role: task.role,
        batch: batchOf.get(task.id),
        output: task.output,
        acceptance: task.acceptance,
        predecessors: arrangement2.dependencies[task.id]
      }))
    }));
  }

  // graph/layout.mjs
  function average(values) {
    return values.length ? values.reduce((sum, value) => sum + value, 0) / values.length : Infinity;
  }
  function sweep(layers, edges, forward) {
    const positions = /* @__PURE__ */ new Map();
    layers.forEach((layer, index) => layer.forEach((id, order) => positions.set(id, { layer: index, order })));
    const start = forward ? 1 : layers.length - 2;
    const end = forward ? layers.length : -1;
    const step = forward ? 1 : -1;
    for (let layerIndex = start; layerIndex !== end; layerIndex += step) {
      const adjacent = new Map(layers[layerIndex].map((id) => [id, []]));
      for (const edge of edges) {
        const source = forward ? edge.from : edge.to;
        const target = forward ? edge.to : edge.from;
        if (positions.get(target)?.layer !== layerIndex || positions.get(source)?.layer !== layerIndex - step) continue;
        adjacent.get(target)?.push(positions.get(source).order);
      }
      const original = new Map(layers[layerIndex].map((id, order) => [id, order]));
      layers[layerIndex].sort((a, b) => average(adjacent.get(a)) - average(adjacent.get(b)) || original.get(a) - original.get(b));
      layers[layerIndex].forEach((id, order) => {
        positions.get(id).order = order;
      });
    }
  }
  function orderLayers(rounds, edges) {
    const layers = rounds.map((layer) => [...layer]);
    sweep(layers, edges, true);
    sweep(layers, edges, false);
    return layers;
  }

  // app.mjs
  var byId = (id) => document.getElementById(id);
  var directFile = location.protocol === "file:";
  var apiBase = directFile ? "http://127.0.0.1:8765" : "";
  var spec = byId("spec");
  var inputMode = byId("input-mode");
  var example = byId("example");
  var capacity = byId("capacity");
  var file = byId("file");
  var run = byId("run");
  var replay = byId("replay");
  var notice = byId("notice");
  var view = byId("view");
  var keyDialog = byId("key-dialog");
  var keyInput = byId("key-input");
  var tabs = [...document.querySelectorAll("[data-view]")];
  var result;
  var arrangement;
  var observer;
  var pageKey;
  var apiStatus;
  var active = "tasks";
  var selected = "";
  var requirementFilter = "";
  var busy = false;
  var pipeline;
  var draft;
  var chainView = "idea";
  var runningStage = "";
  var graphLayout = "horizontal";
  var inputCollapsed = false;
  var steps = [
    ["idea", "\u4EA7\u54C1\u60F3\u6CD5"],
    ["requirements", "\u9700\u6C42\u89C4\u683C"],
    ["design", "\u8BBE\u8BA1\u89C4\u683C"],
    ["tests", "\u6D4B\u8BD5\u65B9\u6848"],
    ["schedule", "\u4EFB\u52A1\u7F16\u6392"],
    ["feedback", "\u8BBE\u8BA1\u56DE\u586B"]
  ];
  var stepLabels = new Map(steps);
  var monitor = createObservability({
    request: requestStage,
    ready: ensureReady,
    getResult: () => result,
    getArrangement: () => arrangement,
    download: downloadFile,
    isBusy: () => busy,
    setBusy: lock,
    renderCases: taskCases,
    openPlan: () => selectWorkspace(false, true),
    refreshExecution: () => {
      if (result && active === "execution") render();
    },
    adopt: (text2) => {
      inputMode.value = "idea";
      spec.value = text2;
      changeSpec(true);
    }
  });
  function selectWorkspace(discussion, focus = false) {
    byId("workspace").hidden = discussion;
    byId("discussion-panel").hidden = !discussion;
    byId("workspace-plan").setAttribute("aria-pressed", String(!discussion));
    byId("workspace-discussion").setAttribute("aria-pressed", String(discussion));
    if (!discussion && result && active === "graph") render();
    if (focus) byId(discussion ? "workspace-discussion" : "workspace-plan").focus();
  }
  function showInput(visible) {
    inputCollapsed = !visible;
    byId("input-body").hidden = !visible;
    byId("workspace").classList.toggle("input-collapsed", !visible);
    const toggle = byId("toggle-input");
    toggle.setAttribute("aria-expanded", String(visible));
    toggle.textContent = visible ? "\u6536\u8D77\u8F93\u5165" : "\u5C55\u5F00\u8F93\u5165";
  }
  byId("workspace-plan").addEventListener("click", () => selectWorkspace(false));
  byId("workspace-discussion").addEventListener("click", () => selectWorkspace(true));
  byId("toggle-input").addEventListener("click", () => showInput(inputCollapsed));
  byId("open-activity").addEventListener("click", () => byId("activity-dialog").showModal());
  function element(tag, content = "", className = "") {
    const node2 = document.createElement(tag);
    node2.textContent = content;
    node2.className = className;
    return node2;
  }
  example.add(new Option("\u81EA\u5B9A\u4E49\u8F93\u5165", ""));
  examples.forEach(({ name }, index) => example.add(new Option(name, String(index))));
  for (let n = 1; n <= 8; n++) capacity.add(new Option(String(n), String(n)));
  capacity.value = "4";
  function modeLabel() {
    return inputMode.value === "idea" ? "\u4EA7\u54C1\u60F3\u6CD5" : "\u8BBE\u8BA1\u89C4\u683C";
  }
  function runLabel() {
    if (inputMode.value === "design") return draft ? "\u7EE7\u7EED\u751F\u6210\u6D4B\u8BD5\u65B9\u6848 \u2197" : "\u8FD0\u884C\u4EFB\u52A1\u7F16\u6392 \u2197";
    if (pipeline?.requirements && !pipeline.testPlan) return "\u7EE7\u7EED\u5B8C\u6574\u6D41\u7A0B \u2197";
    return "\u8FD0\u884C\u5B8C\u6574\u6D41\u7A0B \u2197";
  }
  function updateInput() {
    byId("count").textContent = spec.value.length + " / 4000";
    byId("spec-label").textContent = modeLabel();
    const field = inputMode.value === "idea" ? "idea" : "spec";
    const match = examples.findIndex((item) => item[field] === spec.value);
    example.value = match < 0 ? "" : String(match);
    byId("input-error").textContent = "";
  }
  function statusMessage(title, body) {
    notice.hidden = false;
    byId("results").hidden = true;
    byId("exports").hidden = true;
    byId("result-title").textContent = "\u5DE5\u4F5C\u6D41\u8F93\u51FA";
    byId("provenance").textContent = "";
    byId("notice-title").textContent = title;
    byId("notice-body").textContent = body;
    observer?.disconnect();
  }
  function changeSpec(preserveDiscussion = false) {
    result = void 0;
    pipeline = void 0;
    draft = void 0;
    chainView = "idea";
    if (preserveDiscussion !== true) monitor.reset();
    updateInput();
    run.textContent = runLabel();
    statusMessage("\u7B49\u5F85\u8FD0\u884C\u5DE5\u4F5C\u6D41", inputMode.value === "idea" ? "\u8F93\u5165\u60F3\u6CD5\u6216\u9009\u62E9\u6848\u4F8B\uFF0C\u751F\u6210\u9700\u6C42\u3001\u8BBE\u8BA1\u548C\u6D4B\u8BD5\u65B9\u6848\uFF0C\u67E5\u770B\u5B9E\u73B0\u7F16\u6392\u4E0E\u8BBE\u8BA1\u56DE\u586B\u3002" : "\u8F93\u5165\u5DF2\u6709\u8BBE\u8BA1\u89C4\u683C\uFF0C\u67E5\u770B\u7F16\u7801\u3001\u6D4B\u8BD5\u548C\u8BC4\u5BA1\u7684\u4F9D\u8D56\u5173\u7CFB\u3002");
    renderChain();
  }
  spec.value = examples[0].idea;
  spec.addEventListener("input", changeSpec);
  example.addEventListener("change", () => {
    const field = inputMode.value === "idea" ? "idea" : "spec";
    spec.value = examples[example.value]?.[field] ?? "";
    changeSpec();
    if (!example.value) spec.focus();
  });
  inputMode.addEventListener("change", () => {
    const item = examples[example.value];
    if (item) spec.value = inputMode.value === "idea" ? item.idea : item.spec;
    changeSpec();
  });
  file.addEventListener("change", async () => {
    const chosen = file.files[0];
    file.value = "";
    if (!chosen) return;
    try {
      const content = await chosen.text();
      if (content.length > 4e3) throw new Error("\u6587\u4EF6\u6B63\u6587\u6700\u591A 4000 \u5B57\u3002");
      if (content.includes("\uFFFD")) throw new Error("\u8BF7\u5C06\u6587\u4EF6\u53E6\u5B58\u4E3A UTF-8 \u540E\u91CD\u65B0\u5BFC\u5165\u3002");
      if (busy) return;
      spec.value = content;
      changeSpec();
    } catch (error) {
      byId("input-error").textContent = error.message;
    }
  });
  function renderConnection() {
    const connection = byId("connection");
    if (!apiStatus) {
      connection.textContent = "\u751F\u6210\u670D\u52A1\u672A\u8FDE\u63A5";
      connection.classList.remove("ready");
      return;
    }
    const configured = Boolean(pageKey) || !directFile && apiStatus.configured;
    connection.textContent = configured ? "\u5BC6\u94A5\u5DF2\u586B\u5199 \xB7 " + apiStatus.model : "\u5C1A\u672A\u586B\u5199\u5BC6\u94A5";
    connection.classList.toggle("ready", configured);
  }
  async function checkStatus() {
    try {
      const response = await fetch(apiBase + "/api/status", { signal: AbortSignal.timeout(2500) });
      if (!response.ok) throw new Error("status unavailable");
      apiStatus = await response.json();
    } catch {
      apiStatus = void 0;
    }
    byId("service-help").hidden = Boolean(apiStatus);
    renderConnection();
  }
  function openKeyDialog() {
    keyInput.value = "";
    byId("key-error").textContent = "";
    if (!keyDialog.open) keyDialog.showModal();
  }
  byId("configure").addEventListener("click", openKeyDialog);
  byId("cancel-key").addEventListener("click", () => keyDialog.close());
  keyDialog.addEventListener("close", () => {
    keyInput.value = "";
  });
  byId("key-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const key = keyInput.value.trim();
    if (!/^[\x21-\x7e]{1,512}$/.test(key)) {
      byId("key-error").textContent = "\u8BF7\u68C0\u67E5\u662F\u5426\u590D\u5236\u4E86\u591A\u4F59\u5B57\u7B26\u3002";
      keyInput.focus();
      return;
    }
    pageKey = key;
    keyDialog.close();
    renderConnection();
  });
  function lock(value) {
    busy = value;
    for (const control of [spec, inputMode, example, capacity, file, replay, run]) control.disabled = value;
    notice.classList.toggle("busy", value);
    run.textContent = value ? "\u6B63\u5728\u751F\u6210\u2026" : runLabel();
  }
  async function requestStage(endpoint, body, track = true) {
    const labels = {
      discussion: "\u8BA8\u8BBA\u63D0\u70BC",
      requirements: "\u60F3\u6CD5 \u2192 \u9700\u6C42\u89C4\u683C",
      design: "\u9700\u6C42 \u2192 \u8BBE\u8BA1\u89C4\u683C",
      decompose: "\u8BBE\u8BA1 \u2192 \u5F00\u53D1\u4EFB\u52A1\u5206\u89E3",
      "test-plan": "\u6D4B\u8BD5\u65B9\u6848 \u2192 \u5B9E\u73B0\u4EFB\u52A1\u96C6"
    };
    const label = labels[endpoint] || endpoint;
    const started = performance.now();
    const agent = planningAgents[endpoint];
    let received = false;
    if (track) monitor.log(label, "\u5F00\u59CB", "\u5DF2\u63D0\u4EA4 DeepSeek API \u8BF7\u6C42", { agent });
    try {
      const response = await fetch(apiBase + "/api/" + endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...body, apiKey: pageKey })
      });
      const data = await response.json();
      received = true;
      mergeStructuredEvents(data.observability_events);
      if (!response.ok) throw new Error(data.error);
      if (track) {
        monitor.log(
          label,
          "\u5B8C\u6210",
          "\u4EA7\u7269\u901A\u8FC7\u7ED3\u6784\u6821\u9A8C\uFF0C\u8017\u65F6 " + ((performance.now() - started) / 1e3).toFixed(1) + " \u79D2",
          { agent, model: data.model, validations: data.validations || [] }
        );
        for (const message of data.validations || []) monitor.log(label, "\u6821\u9A8C\u4FEE\u6B63", message, { agent });
      }
      return data;
    } catch (error) {
      if (!received) {
        recordEvent({ event_type: EVENT_TYPES.STAGE_START, stage: endpoint, actor: "system" });
        recordEvent({
          event_type: EVENT_TYPES.STAGE_FAIL,
          stage: endpoint,
          actor: "system",
          reason_code: REASON_CODES.NETWORK_ERROR
        });
      }
      if (track) monitor.log(label, "\u5931\u8D25", error.message, { agent });
      throw error;
    }
  }
  async function runPipeline(idea) {
    pipeline ??= { idea };
    if (!pipeline.requirements) {
      runningStage = "requirements";
      renderChain();
      statusMessage("\u6B63\u5728\u751F\u6210\u9700\u6C42\u89C4\u683C", "\u4F5C\u4E1A\u4E00 \xB7 \u5C06\u4EA7\u54C1\u60F3\u6CD5\u6574\u7406\u4E3A\u7F16\u53F7\u9700\u6C42\u548C\u9A8C\u6536\u6761\u4EF6\u3002");
      const data = await requestStage("requirements", { idea });
      pipeline.requirements = data.requirements;
      chainView = "requirements";
    }
    if (!pipeline.design) {
      runningStage = "design";
      renderChain();
      statusMessage("\u6B63\u5728\u751F\u6210\u8BBE\u8BA1\u89C4\u683C", "\u6839\u636E\u9700\u6C42\u89C4\u683C\u751F\u6210\u603B\u4F53\u8BBE\u8BA1\u3001\u6A21\u5757\u5212\u5206\u548C\u63A5\u53E3\u7EA6\u5B9A\u3002");
      const data = await requestStage("design", { requirements: pipeline.requirements });
      pipeline.design = data.design;
      chainView = "design";
    }
    await runImplementation({ requirements: pipeline.requirements, design: pipeline.design });
  }
  async function runImplementation(source) {
    if (!draft) {
      runningStage = "schedule";
      renderChain();
      statusMessage("\u6B63\u5728\u5206\u89E3\u5F00\u53D1\u4EFB\u52A1", "PM Agent \u6B63\u5728\u6309\u8BBE\u8BA1\u89C4\u683C\u5206\u89E3\u6A21\u5757\u3001\u63A5\u53E3\u5951\u7EA6\u548C\u7F16\u7801\u4EFB\u52A1\u3002");
      draft = (await requestStage("decompose", { ...source, draftOnly: true })).plan;
    }
    runningStage = "tests";
    renderChain();
    statusMessage("\u6B63\u5728\u5236\u5B9A\u6D4B\u8BD5\u65B9\u6848", "\u7528\u4F8B\u901A\u8FC7\u6821\u9A8C\u540E\uFF0C\u548C\u7F16\u7801\u3001\u8BC4\u5BA1\u4E00\u8D77\u8FDB\u5165\u4EFB\u52A1\u96C6\uFF0C\u518D\u8BA1\u7B97\u6267\u884C\u6279\u6B21\u3002");
    const { testPlan, ...data } = await requestStage("test-plan", { ...source, plan: draft, draftOnly: true });
    if (pipeline) {
      pipeline.testPlan = testPlan;
      chainView = "schedule";
    }
    show({
      ...data,
      spec: source.spec ?? designMarkdown(source.requirements, source.design),
      ...pipeline ? { pipeline } : { testPlan }
    });
    draft = void 0;
    monitor.log("\u5B9E\u73B0\u9636\u6BB5\u7F16\u6392", "\u5B8C\u6210", result.plan.tasks.length + " \u9879\u7F16\u7801\u3001\u6D4B\u8BD5\u3001\u8BC4\u5BA1\u4E0E\u8BBE\u8BA1\u4EFB\u52A1\uFF0C" + arrangement.rounds.length + " \u4E2A\u6267\u884C\u6279\u6B21");
  }
  async function ensureReady() {
    if (!apiStatus) await checkStatus();
    if (busy) return false;
    if (!apiStatus) {
      byId("input-error").textContent = "\u751F\u6210\u670D\u52A1\u672A\u8FDE\u63A5\u3002\u542F\u52A8\u540E\u518D\u70B9\u4E00\u6B21\u300C\u8FD0\u884C\u5DE5\u4F5C\u6D41\u300D\u3002";
      return false;
    }
    if (!pageKey && (directFile || !apiStatus.configured)) {
      openKeyDialog();
      return false;
    }
    return true;
  }
  run.addEventListener("click", async () => {
    if (busy) return;
    if (spec.value.trim().length < 15) {
      byId("input-error").textContent = "\u8BF7\u8F93\u5165\u81F3\u5C11 15 \u5B57\u7684" + modeLabel() + "\u3002";
      spec.focus();
      return;
    }
    if (!await ensureReady()) return;
    if (result) {
      pipeline = void 0;
      chainView = "idea";
      result = void 0;
      monitor.resetRuntime();
    }
    byId("input-error").textContent = "";
    lock(true);
    try {
      if (inputMode.value === "idea") {
        await runPipeline(spec.value);
      } else {
        await runImplementation({ spec: spec.value });
      }
    } catch (error) {
      const title = runningStage ? stepLabels.get(runningStage) + "\u751F\u6210\u5931\u8D25" : "\u751F\u6210\u5931\u8D25";
      byId("input-error").textContent = title + "\u3002" + error.message;
      statusMessage(title, error.message);
      if (error instanceof TypeError) await checkStatus();
    } finally {
      runningStage = "";
      lock(false);
      renderChain();
    }
  });
  replay.addEventListener("change", async () => {
    const chosen = replay.files[0];
    replay.value = "";
    if (!chosen) return;
    try {
      if (chosen.size > 1024 * 1024) throw new Error("\u7ED3\u679C\u6587\u4EF6\u6700\u591A 1 MB\u3002");
      const {
        provider,
        spec: source,
        plan,
        model,
        generatedAt,
        pipeline: chain,
        observation,
        testPlan,
        events: exportedEvents = []
      } = JSON.parse(await chosen.text());
      if (busy) return;
      const input = chain === void 0 ? source : chain?.idea;
      if (provider !== "deepseek" || typeof input !== "string" || input.trim().length < 15 || input.length > 4e3 || typeof model !== "string" || !model.trim()) {
        throw new Error("\u8BF7\u9009\u62E9\u6B64\u5DE5\u4F5C\u53F0\u5BFC\u51FA\u7684 DeepSeek \u7ED3\u679C JSON\u3002");
      }
      let sourceDesign = source;
      let restoredPlan = plan;
      if (chain) {
        validateDesign(chain.design, chain.requirements);
        sourceDesign = designMarkdown(chain.requirements, chain.design);
        restoredPlan = { ...plan, project: chain.requirements.project, requirements: chain.requirements.requirements };
        schedule(restoredPlan, Number(capacity.value));
        validateTaskLinks(restoredPlan, chain.design);
        if (chain.testPlan !== void 0) validateTestPlan(chain.testPlan, chain.design, restoredPlan);
      } else {
        schedule(restoredPlan, Number(capacity.value));
        if (testPlan !== void 0) validateTestPlan(testPlan, void 0, restoredPlan);
      }
      if (restoredPlan.tasks.some((task) => task.test?.cases) && !(chain?.testPlan ?? testPlan)) {
        throw new Error("\u7ED3\u679C\u7F3A\u5C11\u4E0E\u6D4B\u8BD5\u4EFB\u52A1\u7ED1\u5B9A\u7684\u6D4B\u8BD5\u65B9\u6848");
      }
      const restoredArrangement = schedule(restoredPlan, Number(capacity.value));
      monitor.restore(observation, restoredPlan, restoredArrangement);
      restoreStructuredEvents(exportedEvents);
      pipeline = chain;
      draft = void 0;
      inputMode.value = chain ? "idea" : "design";
      chainView = chain ? "design" : "idea";
      show({ provider, spec: sourceDesign, plan: restoredPlan, model, generatedAt, pipeline, testPlan, mode: "imported" });
      spec.value = input;
      updateInput();
      run.textContent = runLabel();
      renderChain();
    } catch (error) {
      byId("input-error").textContent = error instanceof SyntaxError ? "\u7ED3\u679C\u6587\u4EF6\u4E0D\u662F\u6709\u6548\u7684 JSON\u3002" : error.message;
    }
  });
  function show(data) {
    arrangement = schedule(data.plan, Number(capacity.value));
    result = data;
    selected = "";
    requirementFilter = "";
    byId("result-title").textContent = result.plan.project;
    byId("provenance").textContent = (data.mode === "live" ? "\u73B0\u573A\u751F\u6210 \xB7 DeepSeek API" : "\u5DF2\u5BFC\u5165 DeepSeek \u7ED3\u679C") + " \xB7 " + data.model;
    notice.hidden = true;
    byId("results").hidden = false;
    byId("exports").hidden = false;
    render();
  }
  capacity.addEventListener("change", () => {
    if (!result) return;
    arrangement = schedule(result.plan, Number(capacity.value));
    monitor.log("\u91CD\u65B0\u7F16\u6392", "\u5B8C\u6210", "\u6BCF\u6279\u5E76\u884C\u4E0A\u9650 " + capacity.value + "\uFF0C\u5171 " + arrangement.rounds.length + " \u6279");
    render();
    renderChain();
  });
  tabs.forEach((button2) => button2.addEventListener("click", () => {
    active = button2.dataset.view;
    render();
  }));
  byId("go-spec").addEventListener("click", () => {
    selectWorkspace(false);
    if (pipeline?.design) {
      openChain("design");
      return;
    }
    showInput(true);
    byId("input-title").scrollIntoView({ block: "start" });
    if (!busy) spec.focus({ preventScroll: true });
  });
  function openResults(viewName) {
    active = viewName;
    if (byId("workspace").hidden) selectWorkspace(false);
    if (result) render();
    else if (!busy) {
      const showTasks = viewName === "tasks";
      statusMessage(
        showTasks ? "PM Agent \xB7 \u7B49\u5F85\u5206\u89E3\u4EFB\u52A1" : "\u4EFB\u52A1\u7F16\u6392 \xB7 \u7B49\u5F85\u751F\u6210\u4F9D\u8D56\u56FE",
        showTasks ? "\u70B9\u51FB\u300C\u8FD0\u884C\u5DE5\u4F5C\u6D41\u300D\uFF0C\u67E5\u770B DeepSeek \u4ECE\u8BBE\u8BA1\u89C4\u683C\u62C6\u51FA\u7684\u4EFB\u52A1\u3002" : "\u70B9\u51FB\u300C\u8FD0\u884C\u5DE5\u4F5C\u6D41\u300D\uFF0C\u6216\u5BFC\u5165\u5DF2\u6709\u7ED3\u679C\uFF0C\u67E5\u770B\u4EFB\u52A1\u4F9D\u8D56\u548C\u6267\u884C\u6279\u6B21\u3002"
      );
    }
    const title = byId("result-title");
    title.scrollIntoView({ block: "start" });
    title.focus({ preventScroll: true });
  }
  byId("go-tasks").addEventListener("click", () => openResults("tasks"));
  byId("go-graph").addEventListener("click", () => openResults("graph"));
  function openChain(step) {
    chainView = step;
    renderChain();
    if (step === "schedule") {
      openResults("graph");
      return;
    }
    byId("chain-content").focus();
  }
  function designCard(part) {
    const card = element("article", "", "chain-card");
    card.append(
      element("h4", part.id + " \xB7 " + part.title),
      element("p", "\u5173\u8054\u9700\u6C42\uFF1A" + part.requirements.join("\u3001"), "hint"),
      element("p", part.design),
      element("p", "\u63A5\u53E3\u4E0E\u6570\u636E\u7EA6\u5B9A\uFF1A" + part.contract)
    );
    return card;
  }
  function renderChain() {
    const chain = byId("chain");
    chain.hidden = inputMode.value !== "idea";
    if (chain.hidden) return;
    const available = {
      idea: Boolean(spec.value.trim()),
      requirements: Boolean(pipeline?.requirements),
      design: Boolean(pipeline?.design),
      schedule: Boolean(result),
      feedback: Boolean(result),
      tests: Boolean(pipeline?.testPlan)
    };
    const owners = {
      idea: "\u53C2\u4F1A\u8005 / \u8D1F\u8D23\u4EBA",
      requirements: planningAgents.requirements,
      design: planningAgents.design,
      tests: planningAgents["test-plan"],
      schedule: planningAgents.decompose + " / \u7F16\u6392\u5668",
      feedback: "\u7F16\u6392\u5668"
    };
    byId("chain-steps").replaceChildren(...steps.map(([id, label]) => {
      const step = element("button", label);
      step.type = "button";
      step.disabled = !available[id];
      step.setAttribute("aria-pressed", String(id === chainView));
      step.append(element("span", id === runningStage ? "\u751F\u6210\u4E2D" : available[id] ? id === "idea" ? "\u539F\u59CB\u8F93\u5165" : "\u53EF\u67E5\u770B" : "\u5F85\u751F\u6210"));
      step.append(element("span", owners[id], "chain-owner"));
      step.addEventListener("click", () => openChain(id));
      return step;
    }));
    const content = byId("chain-content");
    content.replaceChildren();
    content.scrollTop = 0;
    if (chainView === "schedule") {
      content.append(element("p", "\u7F16\u7801\u3001\u5355\u5143\u6D4B\u8BD5\u3001\u8054\u8C03\u3001\u8BC4\u5BA1\u4E0E\u9A8C\u6536\u5DF2\u7EB3\u5165\u540C\u4E00\u4EFB\u52A1\u96C6\u3002", "hint"));
      return;
    }
    if (chainView === "idea") {
      content.append(element("h3", "\u539F\u59CB\u4EA7\u54C1\u60F3\u6CD5"), element("p", spec.value || "\u8BF7\u5728\u5DE6\u4FA7\u586B\u5199\u4EA7\u54C1\u60F3\u6CD5\u3002", "chain-text"));
      return;
    }
    const { requirements, design } = pipeline;
    if (chainView === "requirements") {
      content.append(
        element("h3", "\u4F5C\u4E1A\u4E00 \xB7 \u9700\u6C42\u89C4\u683C"),
        element("p", "\u76EE\u6807\uFF1A" + requirements.goal),
        element("p", "\u9879\u76EE\u8303\u56F4\uFF1A" + requirements.scope)
      );
      for (const req of requirements.requirements) {
        const card = element("article", "", "chain-card");
        card.append(element("h4", req.id + " \xB7 " + req.text), element("p", "\u9A8C\u6536\uFF1A" + req.acceptance));
        content.append(card);
      }
      return;
    }
    if (chainView === "design") {
      content.append(element("h3", "\u8BBE\u8BA1\u89C4\u683C \xB7 \u603B\u4F53\u8BBE\u8BA1\u4E0E\u6A21\u5757"), element("p", design.summary));
      content.append(...design.components.map(designCard));
      return;
    }
    if (chainView === "tests") {
      const { strategy, cases } = pipeline.testPlan;
      const tasks = new Map(result.plan.tasks.map((task) => [task.id, task]));
      content.append(element("h3", "\u6D4B\u8BD5\u65B9\u6848"), element("p", strategy));
      for (const test of cases) {
        const card = element("article", "", "chain-card");
        const link = element("button", "\u67E5\u770B\u6D4B\u8BD5\u4EFB\u52A1 " + test.task, "task-link");
        link.type = "button";
        link.addEventListener("click", () => locateGraphTask(test.task));
        const batch = arrangement.rounds.findIndex((ids) => ids.includes(test.task)) + 1;
        const level = tasks.get(test.task).test?.level;
        card.append(
          element("h4", test.id + " \xB7 " + test.title),
          element(
            "p",
            (level ? testLevelLabels[level] + " \xB7 " : "") + test.requirements.join("\u3001") + " \u2192 " + (test.designs?.join("\u3001") ?? test.design) + " \u2192 " + test.task + " \xB7 \u7B2C " + batch + " \u6279",
            "hint"
          ),
          ...caseInstructions(test),
          link
        );
        content.append(card);
      }
      return;
    }
    content.append(
      element("h3", "\u8BBE\u8BA1\u89C4\u683C\u56DE\u586B\u7248"),
      element("p", design.summary),
      element("p", "\u6BCF\u9879\u8BBE\u8BA1\u4E0B\u5217\u51FA\u7F16\u6392\u7ED3\u679C\u3001\u524D\u7F6E\u4EFB\u52A1\u548C\u9A8C\u6536\u4F9D\u636E\u3002\u8C03\u6574\u5E76\u884C\u4E0A\u9650\u540E\u540C\u6B65\u66F4\u65B0\u6279\u6B21\u3002", "hint")
    );
    for (const part of designFeedback(design, result.plan, arrangement)) {
      const card = designCard(part);
      for (const task of part.tasks) {
        const row = element("div", "", "feedback-task");
        const link = element("button", task.id + " \xB7 " + task.title, "task-link");
        link.type = "button";
        link.addEventListener("click", () => locateGraphTask(task.id));
        row.append(
          link,
          element("p", "\u7B2C " + task.batch + " \u6279 \xB7 " + task.role + " \xB7 \u4EA4\u4ED8\u7269 " + task.output),
          element("p", "\u524D\u7F6E\u4EFB\u52A1\uFF1A" + (task.predecessors.join("\u3001") || "\u65E0") + "\u3002\u9A8C\u6536\uFF1A" + task.acceptance)
        );
        card.append(row);
      }
      content.append(card);
    }
  }
  function locateGraphTask(id) {
    selected = id;
    openResults("graph");
    const node2 = byId("node-" + id);
    node2.scrollIntoView({ block: "nearest", inline: "center" });
    node2.focus({ preventScroll: true });
  }
  function metrics() {
    const tasks = result.plan.tasks;
    const runtime = monitor.getRuntime();
    const counts = Object.fromEntries(Object.keys(stateLabels).map((state) => [state, 0]));
    tasks.forEach((task) => counts[taskState(task.id, runtime, arrangement)]++);
    const statusCard = element("div", "", "metric metric-status");
    statusCard.append(element("strong", tasks.length), element("span", "\u4EFB\u52A1\u72B6\u6001\u5206\u5E03", "metric-label"));
    const stack = element("div", "", "metric-stack");
    stack.setAttribute("role", "img");
    stack.setAttribute("aria-label", Object.keys(stateLabels).map((state) => stateLabels[state] + " " + counts[state] + " \u9879").join("\uFF0C"));
    for (const state of Object.keys(stateLabels)) {
      if (!counts[state]) continue;
      const segment = element("span", "", "metric-segment status-" + state);
      segment.style.flex = counts[state];
      segment.title = stateLabels[state] + " " + counts[state] + " \u9879";
      stack.append(segment);
    }
    statusCard.append(stack, element("span", Object.keys(stateLabels).map((state) => stateLabels[state] + " " + counts[state]).join(" \xB7 "), "metric-detail"));
    const requirementLinks = new Set(tasks.flatMap((task) => task.requirements));
    const tested = tasks.filter((task) => task.test || task.review).length;
    const parallelTasks = arrangement.rounds.filter((batch) => batch.length > 1).flat().length;
    const proportionCard = (value, total, label) => {
      const card = element("div", "", "metric");
      const percent = total ? Math.round(value / total * 100) : 0;
      card.append(element("strong", percent + "%"), element("span", label, "metric-label"));
      const bar = element("span", "", "metric-bar");
      bar.append(element("span", "", "metric-fill"));
      bar.firstElementChild.style.width = percent + "%";
      bar.setAttribute("role", "img");
      bar.setAttribute("aria-label", value + " / " + total);
      card.append(bar, element("span", value + " / " + total, "metric-detail"));
      return card;
    };
    byId("metrics").replaceChildren(
      statusCard,
      proportionCard(requirementLinks.size, result.plan.requirements.length, "\u9700\u6C42\u5DF2\u5173\u8054"),
      proportionCard(parallelTasks, tasks.length, "\u4EFB\u52A1\u5904\u4E8E\u5E76\u884C\u6279\u6B21"),
      proportionCard(tested, tasks.length, "\u4EFB\u52A1\u7ED1\u5B9A\u6D4B\u8BD5\u6216\u8BC4\u5BA1"),
      statusLegend(stateLabels)
    );
  }
  function caseInstructions(test) {
    const list = element("ol", "", "test-steps");
    test.steps.forEach((step) => list.append(element("li", step)));
    return [element("p", "\u524D\u7F6E\u6761\u4EF6\uFF1A" + test.setup), list, element("p", "\u9884\u671F\u7ED3\u679C\uFF1A" + test.expected)];
  }
  function taskCases(task) {
    const plan = result.pipeline?.testPlan ?? result.testPlan;
    const cases = plan?.cases.filter((item) => item.task === task.id);
    if (!cases?.length) return [];
    return cases.map((test) => {
      const details = element("details", "", "task-test-case");
      details.append(element("summary", test.id + " \xB7 " + test.title), ...caseInstructions(test));
      return details;
    });
  }
  function taskCard(task, full = false, interactive = false, affectedIds = /* @__PURE__ */ new Set()) {
    const card = element(interactive ? "button" : "article", "", "task");
    const runtime = monitor.getRuntime();
    const state = taskState(task.id, runtime, arrangement);
    const affected = affectedIds.has(task.id);
    if (interactive) {
      if (task.role === "\u524D\u7AEF") card.style.borderLeft = "4px solid #3498db";
      if (task.role === "\u540E\u7AEF") card.style.borderLeft = "4px solid #e74c3c";
      if (task.role === "\u6D4B\u8BD5") card.style.borderLeft = "4px solid #f39c12";
      if (task.role === "\u4EA7\u54C1\u8BBE\u8BA1") card.style.borderLeft = "4px solid #9b59b6";
      if (task.role === "\u8BC4\u5BA1") card.style.borderLeft = "4px solid #23836a";
    }
    const stage = taskStage(task);
    const agent = agentForTask(task);
    card.append(
      statusBadge(state, stateLabels[state], { rollbackAffected: affected }),
      element("span", task.id + " \xB7 " + (stage === "\u7F16\u7801" ? "\u7F16\u7801 / " + task.role : stage) + " \xB7 " + task.requirements.join("\u3001"), "task-meta"),
      element("strong", task.title),
      element("span", agent.name, "task-agent")
    );
    if (full) {
      card.append(
        element("p", "\u804C\u8D23\uFF1A" + agent.duty),
        element("p", "\u58F0\u660E\u8F93\u5165\uFF1A" + (task.inputs.join("\u3001") || "Design Spec")),
        element("p", "\u4EA4\u4ED8\uFF1A" + task.output),
        element("p", "\u9A8C\u6536\uFF1A" + task.acceptance)
      );
      if (result.pipeline) card.append(element("p", "\u8BBE\u8BA1\u6765\u6E90\uFF1A" + task.designs.join("\u3001")));
      if (task.test) card.append(element("p", "\u6D4B\u8BD5\u76EE\u6807\u53CA\u5931\u8D25\u5B9A\u4F4D\u8303\u56F4\uFF1A" + task.test.targets.join("\u3001")), ...taskCases(task));
      if (task.review) card.append(element("p", "\u8BC4\u5BA1\u5BF9\u5E94\u7F16\u7801\uFF1A" + task.review.target));
      const added = arrangement.edges.filter((edge) => edge.to === task.id && !task.inputs.includes(edge.artifact));
      if (added.length) card.append(element("p", "\u7F16\u6392\u8865\u9F50\u7684\u8F93\u5165\uFF1A" + added.map((edge) => edge.artifact).join("\u3001")));
    }
    return card;
  }
  byId("gen-code").addEventListener("click", () => {
    const projectName = result ? result.plan.project : "\u5F53\u524D\u9879\u76EE";
    const overlay = document.createElement("div");
    overlay.style.cssText = "position:fixed; top:0; left:0; width:100vw; height:100vh; background:rgba(244, 247, 244, 0.85); backdrop-filter: blur(4px); z-index:99999; display:flex; justify-content:center; align-items:center;";
    const box = document.createElement("div");
    box.style.cssText = "background:#ffffff; width:80%; max-width:850px; border-radius:12px; border:1px solid #d6e2da; box-shadow: 0 10px 40px rgba(11, 101, 76, 0.15); overflow:hidden; text-align:left; display:flex; flex-direction:column;";
    const codeStr = `
// \u4EFB\u52A1\uFF1A${projectName} - \u6838\u5FC3\u540E\u7AEF\u63A5\u53E3\u4E0E\u6570\u636E\u6A21\u578B
// \u6846\u67B6\uFF1ANode.js + TypeScript + Express

import { Request, Response } from 'express';
import { prisma } from '../utils/prisma';
import { verifyToken } from '../middlewares/auth';

export const executeCoreTask = async (req: Request, res: Response) => {
  try {
    const { days, spots } = req.body;
    
    if (!Number.isInteger(days) || days <= 0) {
      return res.status(400).json({ error: '\u53C2\u6570\u6821\u9A8C\u5931\u8D25\uFF0C\u5929\u6570\u5FC5\u987B\u4E3A\u6B63\u6574\u6570' });
    }

    const record = await prisma.coreTask.create({
      data: {
        userId: req.user.id,
        days: days,
        status: 'PENDING'
      }
    });

    return res.status(201).json({ success: true, data: record });
  } catch (error) {
    console.error('[Server Error]', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};`;
    box.innerHTML = `<div style="background:#f8faf9; padding:12px 20px; display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid #d6e2da;"><div style="display:flex; align-items:center; gap:10px;"><span style="color:#0b654c; font-weight:bold; font-size:14px;">\u540E\u7AEF\u4EE3\u7801\u793A\u4F8B</span><span style="background:#e9f3ed; color:#0b654c; font-size:12px; padding:2px 8px; border-radius:12px; border:1px solid #c2dfd3;">\u5185\u7F6E\u5C55\u793A\u7247\u6BB5 \xB7 \u5F85\u9002\u914D\u4E0E\u9A8C\u8BC1</span></div><button id="close-code-btn" style="background:#0b654c; color:white; border:none; padding:6px 16px; border-radius:6px; cursor:pointer; font-weight:bold; font-size:13px; transition:0.2s;" onmouseover="this.style.background='#094b39'" onmouseout="this.style.background='#0b654c'">\u5173\u95ED</button></div><div style="background:#ffffff; padding:20px; overflow:auto; max-height:60vh;"><pre style="margin:0; font-family:Consolas, monospace; font-size:14px; line-height:1.6;"><code id="code-content"></code></pre></div>`;
    overlay.appendChild(box);
    document.body.appendChild(overlay);
    const codeEl = document.getElementById("code-content");
    let i = 0;
    function typeCode() {
      if (i < codeStr.length) {
        const chunk = codeStr.slice(i, i + 5);
        codeEl.textContent += chunk;
        i += 5;
        codeEl.parentElement.scrollTop = codeEl.parentElement.scrollHeight;
        setTimeout(typeCode, 10);
      }
    }
    typeCode();
    document.getElementById("close-code-btn").addEventListener("click", () => {
      overlay.remove();
    });
  });
  function listTasks(affectedIds) {
    const table = element("details");
    table.open = true;
    table.append(element("summary", "\u9700\u6C42\u4E0E\u9A8C\u6536 \xB7 " + result.plan.requirements.length + " \u6761\u5DF2\u5173\u8054\u4EFB\u52A1\u4E0E\u6D4B\u8BD5"));
    table.append(element("p", "\u70B9\u51FB\u9700\u6C42\u7F16\u53F7\uFF0C\u67E5\u770B\u652F\u6491\u8BE5\u9700\u6C42\u7684\u4EFB\u52A1\u548C\u9A8C\u6536\u3002", "hint trace-hint"));
    const list = element("ul", "", "requirements");
    const taskList = element("div", "", "task-list");
    const matchStatus = element("div", "", "hint");
    matchStatus.setAttribute("role", "status");
    const clear = element("button", "\u663E\u793A\u5168\u90E8\u4EFB\u52A1");
    clear.type = "button";
    const traceButtons = /* @__PURE__ */ new Map();
    function filter(id) {
      requirementFilter = id;
      for (const [reqId, button2] of traceButtons) button2.setAttribute("aria-pressed", String(id === reqId));
      const matches = result.plan.tasks.filter((task) => !id || task.requirements.includes(id));
      matchStatus.textContent = (id ? id + " \u5BF9\u5E94" : "\u5168\u90E8") + " " + matches.length + " \u9879\u4EFB\u52A1";
      clear.hidden = !id;
      taskList.replaceChildren(...matches.map((task) => {
        const card = taskCard(task, true, false, affectedIds);
        const locate = element("button", "\u5728\u4F9D\u8D56\u56FE\u4E2D\u67E5\u770B", "task-link");
        locate.type = "button";
        locate.addEventListener("click", () => locateGraphTask(task.id));
        card.append(locate);
        return card;
      }));
    }
    clear.addEventListener("click", () => {
      const previous = traceButtons.get(requirementFilter);
      filter("");
      previous?.focus();
    });
    for (const requirement of result.plan.requirements) {
      const item = element("li", "", "trace-row");
      const trace = element("button", requirement.id, "trace-button");
      trace.type = "button";
      trace.setAttribute("aria-label", "\u67E5\u770B " + requirement.id + " \u7684\u5173\u8054\u4EFB\u52A1");
      trace.addEventListener("click", () => filter(requirementFilter === requirement.id ? "" : requirement.id));
      traceButtons.set(requirement.id, trace);
      const description = element("div");
      description.append(element("strong", requirement.text), element("br"), element("span", "\u9A8C\u6536\uFF1A" + requirement.acceptance));
      item.append(trace, description);
      list.append(item);
    }
    table.append(list);
    const toolbar = element("div", "", "trace-toolbar");
    toolbar.append(matchStatus, clear);
    view.append(table, toolbar, taskList);
    filter(requirementFilter);
  }
  function showRounds(tasksById, affectedIds) {
    view.append(element("p", "\u5F53\u524D\u6BCF\u6279\u6700\u591A " + arrangement.capacity + " \u9879\u3002\u4E0A\u4E00\u6279\u5168\u90E8\u5B8C\u6210\u540E\uFF0C\u4E0B\u4E00\u6279\u624D\u5F00\u59CB\u3002\u540C\u6279\u4EFB\u52A1\u53EF\u5E76\u884C\u3002", "hint"));
    arrangement.rounds.forEach((ids, index) => {
      const round = element("section", "", "round");
      const tasks = element("div", "", "task-list");
      const cards = ids.map((id) => {
        const card = taskCard(tasksById.get(id), false, false, affectedIds);
        card.append(element("p", "\u524D\u7F6E\u4EFB\u52A1\uFF1A" + (arrangement.dependencies[id].join("\u3001") || "\u65E0")));
        return card;
      });
      tasks.append(...cards);
      round.append(element("h3", "\u7B2C " + (index + 1) + " \u6279 \xB7 " + ids.length + " \u9879"), tasks);
      view.append(round);
    });
  }
  function overviewEdges(edges, ids) {
    const successors = new Map(ids.map((id) => [id, []]));
    for (const { from, to } of edges) successors.get(from).push(to);
    return edges.filter(({ from, to }) => {
      const pending = successors.get(from).filter((id) => id !== to);
      const seen = /* @__PURE__ */ new Set();
      while (pending.length) {
        const id = pending.pop();
        if (id === to) return false;
        if (seen.has(id)) continue;
        seen.add(id);
        pending.push(...successors.get(id));
      }
      return true;
    });
  }
  function spreadPorts(routes, endpoint, other, coordinate) {
    const groups = /* @__PURE__ */ new Map();
    for (const route of routes) {
      const node2 = route[endpoint];
      if (!groups.has(node2)) groups.set(node2, []);
      groups.get(node2).push(route);
    }
    for (const [node2, group] of groups) {
      group.sort((a, b) => a[other].middle - b[other].middle || a[other].batch - b[other].batch);
      const spacing = Math.min(12, (node2.height - 18) / group.length);
      group.forEach((route, index) => {
        route[coordinate] = node2.middle + (index - (group.length - 1) / 2) * spacing;
      });
    }
  }
  function showGraph(tasksById, affectedIds) {
    const vertical = graphLayout === "vertical";
    const layouts = element("div", "", "graph-layouts");
    layouts.setAttribute("aria-label", "\u4F9D\u8D56\u56FE\u5E03\u5C40");
    for (const [id, label] of [["horizontal", "\u6A2A\u5411\u4F9D\u8D56\u56FE"], ["vertical", "\u7EB5\u5411\u6267\u884C\u6D41\u7A0B"]]) {
      const toggle = element("button", label);
      toggle.type = "button";
      toggle.dataset.layout = id;
      toggle.setAttribute("aria-pressed", String(id === graphLayout));
      toggle.addEventListener("click", () => {
        if (graphLayout === id) return;
        graphLayout = id;
        render();
        view.querySelector('[data-layout="' + id + '"]').focus({ preventScroll: true });
      });
      layouts.append(toggle);
    }
    view.append(layouts);
    const toolbar = element("div", "", "graph-toolbar");
    const explanation = element("p", "", "hint");
    explanation.setAttribute("role", "status");
    const reset = element("button", "\u8FD4\u56DE\u603B\u89C8");
    reset.type = "button";
    toolbar.append(explanation, reset);
    view.append(toolbar);
    const scroll = element("div", "", "graph-scroll");
    scroll.tabIndex = 0;
    scroll.setAttribute("aria-label", vertical ? "\u6309\u6267\u884C\u6279\u6B21\u4ECE\u4E0A\u5230\u4E0B\u7684\u6D41\u7A0B\u56FE" : "\u53EF\u6A2A\u5411\u6EDA\u52A8\u7684\u4EFB\u52A1\u4F9D\u8D56\u56FE");
    const graph = element("div", "", vertical ? "graph graph-vertical" : "graph");
    const canvas = element("canvas");
    canvas.setAttribute("aria-hidden", "true");
    graph.append(canvas);
    scroll.append(graph);
    const detail = element("div", "", "graph-detail");
    const buttons = /* @__PURE__ */ new Map();
    const columns = [];
    const orderedRounds = orderLayers(arrangement.rounds, arrangement.edges);
    const batches = new Map(orderedRounds.flatMap((ids, batch) => ids.map((id) => [id, batch])));
    const overview = overviewEdges(arrangement.edges, [...batches.keys()]);
    const parallel = arrangement.rounds.filter((batch) => batch.length > 1).length;
    const reason = result.plan.serialJustification;
    if (typeof reason === "string" && reason) view.append(element("p", "\u7F16\u7801\u9700\u4E32\u884C\uFF1A" + reason, "hint"));
    const graphArea = element("div", "", vertical ? "graph-area vertical-area" : "graph-area");
    function draw() {
      const edges = selected ? arrangement.edges.filter((edge) => edge.from === selected || edge.to === selected) : overview;
      const bounds = graph.getBoundingClientRect();
      const begin = (box) => vertical ? box.top - bounds.top : box.left - bounds.left;
      const endOf = (box) => vertical ? box.bottom - bounds.top : box.right - bounds.left;
      const acrossEnd = (box) => vertical ? box.right - bounds.left : box.bottom - bounds.top;
      const nodes = new Map([...buttons].map(([id, button2]) => {
        const box = button2.getBoundingClientRect();
        const breadth = vertical ? box.width : box.height;
        return [id, {
          left: begin(box),
          right: endOf(box),
          middle: acrossEnd(box) - breadth / 2,
          height: breadth,
          batch: batches.get(id)
        }];
      }));
      const routes = edges.map((edge) => ({ edge, start: nodes.get(edge.from), end: nodes.get(edge.to) }));
      spreadPorts(routes, "start", "end", "y1");
      spreadPorts(routes, "end", "start", "y2");
      const gutters = columns.slice(1).map(() => []);
      const longRoutes = [];
      for (const route of routes) {
        const { start, end } = route;
        if (end.batch === start.batch + 1) {
          gutters[start.batch].push({ route, key: "out", order: route.y1 - route.y2 });
        } else {
          gutters[start.batch].push({ route, key: "out", order: -Infinity });
          gutters[end.batch - 1].push({ route, key: "in", order: Infinity });
          longRoutes.push(route);
        }
      }
      gutters.forEach((tracks, index) => {
        const left = endOf(columns[index].getBoundingClientRect()) + 8;
        const right = begin(columns[index + 1].getBoundingClientRect()) - 10;
        tracks.sort((a, b) => a.order - b.order || a.route.y1 - b.route.y1 || a.route.y2 - b.route.y2);
        tracks.forEach(({ route, key }, lane) => {
          route[key] = left + (right - left) * (lane + 1) / (tracks.length + 1);
        });
      });
      const rows = [];
      const laneStart = Math.max(...columns.map((column) => acrossEnd((vertical ? column : column.lastElementChild).getBoundingClientRect()))) + 18;
      longRoutes.sort((a, b) => a.start.batch - b.start.batch || a.end.batch - b.end.batch);
      for (const route of longRoutes) {
        let row = rows.findIndex((end) => end < route.start.batch);
        if (row === -1) row = rows.length;
        rows[row] = route.end.batch;
        route.floor = laneStart + row * 11;
      }
      const returns = vertical && selected ? rollbackTargets(tasksById.get(selected)) : [];
      graph.style[vertical ? "paddingRight" : "paddingBottom"] = 26 + (rows.length + returns.length) * 11 + "px";
      const ratio = window.devicePixelRatio || 1;
      canvas.width = Math.ceil(graph.clientWidth * ratio);
      canvas.height = Math.ceil(graph.clientHeight * ratio);
      canvas.style.width = graph.clientWidth + "px";
      canvas.style.height = graph.clientHeight + "px";
      const context = canvas.getContext("2d");
      context.scale(ratio, ratio);
      context.lineJoin = "round";
      function drawRoute(points, color, dashed = false) {
        const position = ([along2, across2]) => vertical ? [across2, along2] : [along2, across2];
        const [along, across] = points.at(-1);
        const direction = Math.sign(along - points.at(-2)[0]);
        context.strokeStyle = context.fillStyle = color;
        context.lineWidth = 1.6;
        context.setLineDash(dashed ? [5, 4] : []);
        context.beginPath();
        context.moveTo(...position(points[0]));
        for (const point of points.slice(1)) context.lineTo(...position(point));
        context.stroke();
        context.beginPath();
        context.moveTo(...position([along, across]));
        context.lineTo(...position([along - direction * 6, across - 4]));
        context.lineTo(...position([along - direction * 6, across + 4]));
        context.fill();
      }
      for (const { edge, start, end, y1, y2, out, in: entry, floor } of routes) {
        const points = [[start.right, y1], [out, y1]];
        if (floor !== void 0) points.push([out, floor], [entry, floor], [entry, y2]);
        else points.push([out, y2]);
        points.push([end.left - 2, y2]);
        drawRoute(points, edge.to === selected ? "#376e9e" : "#34745e");
      }
      returns.forEach((id, index) => {
        const from = nodes.get(selected);
        const to = nodes.get(id);
        const lane = laneStart + (rows.length + index) * 11;
        const leave = endOf(columns[from.batch].getBoundingClientRect()) + 16 + index * 4;
        const enter = endOf(columns[to.batch].getBoundingClientRect()) + 19;
        drawRoute([
          [from.right, from.middle + 6],
          [leave, from.middle + 6],
          [leave, lane],
          [enter, lane],
          [enter, to.middle + 6],
          [to.right + 3, to.middle + 6]
        ], "#b56726", true);
      });
    }
    function select(id) {
      selected = id;
      graphArea.classList.toggle("has-selection", Boolean(id));
      for (const [taskId, button2] of buttons) button2.setAttribute("aria-pressed", String(id === taskId));
      reset.hidden = !id;
      if (!id) {
        const hidden = arrangement.edges.length - overview.length;
        explanation.textContent = parallel + " \u6279\u542B\u5E76\u884C\u4EFB\u52A1\u3002\u603B\u89C8\u663E\u793A " + overview.length + " \u6761\u8FDE\u7EBF\u3002" + (hidden ? "\u53E6\u6709 " + hidden + " \u6761\u53EF\u901A\u8FC7\u4E2D\u95F4\u4EFB\u52A1\u8FFD\u6EAF\u3002" : "") + "\u70B9\u51FB\u4EFB\u52A1\u53EF\u67E5\u770B\u5B83\u7684\u5168\u90E8\u76F4\u63A5\u4F9D\u8D56\u3002";
        detail.replaceChildren();
        draw();
        return;
      }
      const count = arrangement.edges.filter((edge) => edge.from === id || edge.to === id).length;
      explanation.textContent = id + " \u7684 " + count + " \u6761\u8FDE\u7EBF \xB7 \u84DD\u8272\u4E3A\u524D\u7F6E\u4F9D\u8D56\uFF0C\u7EFF\u8272\u6307\u5411\u540E\u7EED\u4EFB\u52A1\u3002";
      const task = tasksById.get(id);
      const card = taskCard(task, true, false, affectedIds);
      const openExecution = element("button", "\u6253\u5F00\u6B64\u8282\u70B9\u7684\u6267\u884C\u4E0E\u4EA4\u4E92", "task-link");
      openExecution.type = "button";
      openExecution.addEventListener("click", () => {
        openResults("execution");
        const item = byId("execution-" + id);
        item.scrollIntoView({ block: "start" });
        item.focus({ preventScroll: true });
      });
      card.append(openExecution);
      const targets = rollbackTargets(task);
      if (targets.length) {
        if (vertical) explanation.textContent += " \u6A59\u8272\u865A\u7EBF\u8868\u793A\u5931\u8D25\u65F6\u53EF\u56DE\u9000\u7684\u7F16\u7801\u3002";
        const info = element("div", "", "graph-rollback");
        info.append(element("h3", "\u5931\u8D25\u56DE\u9000", "dependency-heading"));
        for (const target of targets) {
          const change = rollbackScope(target, arrangement);
          info.append(element("p", target + " \xB7 " + tasksById.get(target).title + " \xB7 \u5F71\u54CD " + change.length + " \u9879\u540E\u7EED\u4EFB\u52A1"));
        }
        card.append(info);
      }
      for (const [caption, here, other] of [
        ["\u524D\u7F6E\u4EFB\u52A1", "to", "from"],
        ["\u540E\u7EED\u4EFB\u52A1", "from", "to"]
      ]) {
        card.append(element("h3", caption, "dependency-heading"));
        const edges = arrangement.edges.filter((edge) => edge[here] === id);
        if (!edges.length) {
          card.append(element("p", "\u65E0"));
          continue;
        }
        const relations = element("ul", "", "dependency-list");
        for (const edge of edges) {
          const neighbor = tasksById.get(edge[other]);
          const button2 = element("button", neighbor.id + " \xB7 " + neighbor.title, "task-link");
          button2.type = "button";
          button2.addEventListener("click", () => {
            const node2 = buttons.get(neighbor.id);
            select(neighbor.id);
            node2.scrollIntoView({ block: "nearest", inline: "center" });
            node2.focus({ preventScroll: true });
          });
          const item = element("li");
          item.append(button2, element("span", edgeReason(edge, tasksById.get(edge.to))));
          relations.append(item);
        }
        card.append(relations);
      }
      detail.replaceChildren(card);
      draw();
    }
    orderedRounds.forEach((ids, index) => {
      const column = element("section", "", "column");
      const batchLabel = element("h3", "\u7B2C " + (index + 1) + " \u6279");
      if (vertical && ids.length > 1) batchLabel.append(element("span", ids.length + " \u9879\u53EF\u5E76\u884C"));
      column.append(batchLabel);
      for (const id of ids) {
        const button2 = taskCard(tasksById.get(id), false, true, affectedIds);
        button2.id = "node-" + id;
        button2.type = "button";
        button2.setAttribute("aria-pressed", "false");
        button2.addEventListener("click", () => select(selected === id ? "" : id));
        buttons.set(id, button2);
        column.append(button2);
      }
      graph.append(column);
      columns.push(column);
    });
    graphArea.append(scroll, detail);
    view.append(graphArea);
    reset.addEventListener("click", () => {
      const node2 = buttons.get(selected);
      select("");
      node2?.focus({ preventScroll: true });
    });
    select(selected);
    observer?.disconnect();
    observer = new ResizeObserver(draw);
    observer.observe(graph);
  }
  function render() {
    observer?.disconnect();
    tabs.forEach((button2) => button2.setAttribute("aria-pressed", String(active === button2.dataset.view)));
    view.replaceChildren();
    metrics();
    const tasks = new Map(result.plan.tasks.map((task) => [task.id, task]));
    const affectedIds = rollbackAffectedIds(result.plan.tasks, arrangement, monitor.getRuntime(), rollbackTargets);
    if (active === "tasks") listTasks(affectedIds);
    if (active === "graph") showGraph(tasks, affectedIds);
    if (active === "rounds") showRounds(tasks, affectedIds);
    if (active === "execution") monitor.renderExecution(view);
  }
  function edgeReason(edge, target) {
    return target.inputs.includes(edge.artifact) ? "\u9700\u8981\u4EA4\u4ED8\u7269 " + edge.artifact : "\u540C\u4E00\u9700\u6C42\u7684\u6D4B\u8BD5\u7B49\u5F85\u4EA4\u4ED8\u7269 " + edge.artifact;
  }
  function downloadFile(name, text2, type) {
    const url = URL.createObjectURL(new Blob([text2], { type }));
    const anchor = element("a");
    anchor.href = url;
    anchor.download = name;
    anchor.click();
    setTimeout(() => URL.revokeObjectURL(url), 1e3);
  }
  byId("download").addEventListener("click", () => {
    const feedback = result.pipeline && designFeedback(result.pipeline.design, result.plan, arrangement);
    downloadFile(
      "se-workflow.json",
      JSON.stringify({
        ...result,
        arrangement,
        designFeedback: feedback,
        observation: monitor.snapshot(),
        events: getStructuredEvents(),
        summary: buildSummary()
      }, null, 2),
      "application/json"
    );
  });
  byId("report").addEventListener("click", () => {
    const { plan, model, mode } = result;
    const byTask = new Map(plan.tasks.map((task) => [task.id, task]));
    const lines = [
      "# " + plan.project + " \xB7 \u5F00\u53D1\u6267\u884C\u8BA1\u5212",
      "",
      "\u6A21\u578B\uFF1A" + model + "  ",
      "\u6765\u6E90\uFF1A" + (mode === "live" ? "\u73B0\u573A\u8C03\u7528 DeepSeek API" : "\u5BFC\u5165\u7684 DeepSeek \u7ED3\u679C") + "  ",
      "\u5E76\u884C\u4E0A\u9650\uFF1A" + arrangement.capacity + " \u9879\uFF0F\u6279",
      "",
      "## \u9700\u6C42\u4E0E\u9A8C\u6536",
      ""
    ];
    for (const req of plan.requirements) {
      const links = plan.tasks.filter((task) => task.requirements.includes(req.id)).map((task) => task.id);
      lines.push(
        "- **" + req.id + "** " + req.text,
        "  - \u9A8C\u6536\uFF1A" + req.acceptance,
        "  - \u5173\u8054\u4EFB\u52A1\uFF1A" + links.join("\u3001")
      );
    }
    lines.push("", "## \u5B9E\u73B0\u9636\u6BB5\u4EFB\u52A1\u96C6", "");
    for (const task of plan.tasks) {
      lines.push(
        "### " + task.id + " \xB7 " + task.title,
        "",
        "- \u89D2\u8272\uFF1A" + task.role,
        "- \u6267\u884C Agent\uFF1A" + agentForTask(task).name,
        "- \u5DE5\u4F5C\u7C7B\u578B\uFF1A" + taskStage(task),
        "- \u5173\u8054\u9700\u6C42\uFF1A" + task.requirements.join("\u3001"),
        "- \u4EA4\u4ED8\u7269\uFF1A" + task.output,
        "- \u9A8C\u6536\uFF1A" + task.acceptance
      );
      if (result.pipeline) lines.push("- \u8BBE\u8BA1\u6765\u6E90\uFF1A" + task.designs.join("\u3001"));
      if (task.test) lines.push(
        "- \u6D4B\u8BD5\u5C42\u6B21\uFF1A" + testLevelLabels[task.test.level],
        "- \u6D4B\u8BD5\u76EE\u6807\u53CA\u5931\u8D25\u5B9A\u4F4D\u8303\u56F4\uFF1A" + task.test.targets.join("\u3001"),
        ...task.test.cases ? ["- \u6D4B\u8BD5\u65B9\u6848\u7528\u4F8B\uFF1A" + task.test.cases.join("\u3001")] : []
      );
      if (task.review) lines.push("- \u8BC4\u5BA1\u5BF9\u8C61\uFF1A" + task.review.target);
      lines.push("");
    }
    lines.push("## \u4EFB\u52A1\u4F9D\u8D56", "");
    for (const edge of arrangement.edges) {
      lines.push("- " + edge.from + " \u2192 " + edge.to + " \xB7 " + edgeReason(edge, byTask.get(edge.to)));
    }
    if (!arrangement.edges.length) lines.push("\u65E0\u524D\u7F6E\u4EFB\u52A1\u3002");
    lines.push("", "## \u6267\u884C\u6279\u6B21", "", "\u4E0A\u4E00\u6279\u5168\u90E8\u5B8C\u6210\u540E\uFF0C\u4E0B\u4E00\u6279\u624D\u5F00\u59CB\u3002\u540C\u6279\u4EFB\u52A1\u53EF\u5E76\u884C\u3002", "");
    arrangement.rounds.forEach((ids, index) => lines.push(
      "- \u7B2C " + (index + 1) + " \u6279 \xB7 " + ids.map((id) => id + " " + byTask.get(id).title).join("\u3001")
    ));
    if (result.pipeline) {
      const { idea, requirements, design } = result.pipeline;
      lines.push(
        "",
        "## \u539F\u59CB\u4EA7\u54C1\u60F3\u6CD5",
        "",
        idea,
        "",
        "## \u4F5C\u4E1A\u4E00\u9700\u6C42\u89C4\u683C\u7684\u76EE\u6807\u4E0E\u8303\u56F4",
        "",
        "- \u76EE\u6807\uFF1A" + requirements.goal,
        "- \u8303\u56F4\uFF1A" + requirements.scope,
        "",
        "## \u7F16\u6392\u56DE\u586B\u5230\u8BBE\u8BA1\u89C4\u683C",
        ""
      );
      for (const part of designFeedback(design, plan, arrangement)) {
        lines.push("### " + part.id + " \xB7 " + part.title, "", "\u5173\u8054\u9700\u6C42\uFF1A" + part.requirements.join("\u3001"));
        for (const task of part.tasks) {
          lines.push(
            "- " + task.id + " \xB7 " + task.title + " \xB7 " + task.role + " \xB7 \u7B2C " + task.batch + " \u6279",
            "  - \u4EA4\u4ED8\u7269\uFF1A" + task.output,
            "  - \u524D\u7F6E\u4EFB\u52A1\uFF1A" + (task.predecessors.join("\u3001") || "\u65E0"),
            "  - \u9A8C\u6536\uFF1A" + task.acceptance
          );
        }
        lines.push("");
      }
    }
    const testPlan = result.pipeline?.testPlan ?? result.testPlan;
    if (testPlan) {
      lines.push("## \u6D4B\u8BD5\u65B9\u6848", "", testPlan.strategy, "");
      for (const test of testPlan.cases) {
        const batch = arrangement.rounds.findIndex((ids) => ids.includes(test.task)) + 1;
        const level = taskStage(byTask.get(test.task));
        lines.push(
          "### " + test.id + " \xB7 " + test.title,
          "",
          "\u5173\u8054\uFF1A" + level + " \xB7 " + [test.requirements.join("\u3001"), test.designs?.join("\u3001") ?? test.design, test.task].filter(Boolean).join(" \u2192 ") + " \xB7 \u7B2C " + batch + " \u6279",
          "",
          "\u524D\u7F6E\u6761\u4EF6\uFF1A" + test.setup,
          ""
        );
        test.steps.forEach((step, index) => lines.push(index + 1 + ". " + step));
        lines.push("", "\u9884\u671F\u7ED3\u679C\uFF1A" + test.expected, "");
      }
    }
    lines.push(
      "",
      result.pipeline ? "## \u9001\u5165\u7F16\u6392\u7684\u8BBE\u8BA1\u89C4\u683C" : "## \u539F\u59CB Design Spec",
      "",
      ...result.spec.split(/\r?\n/).map((line) => "> " + line)
    );
    downloadFile("\u5F00\u53D1\u6267\u884C\u8BA1\u5212.md", lines.join("\n") + "\n", "text/markdown;charset=utf-8");
  });
  byId("startup").hidden = true;
  for (const id of ["workspace", "workspace-nav", "mast-actions", "flow"]) byId(id).hidden = false;
  changeSpec();
  void checkStatus();
})();
