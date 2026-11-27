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

  // motion.mjs
  function stepSpring(state, dt, { stiffness = 300, damping = 32, precision = 1e-3 } = {}) {
    const value0 = Number.isFinite(state?.value) ? state.value : 0;
    const target = Number.isFinite(state?.target) ? state.target : value0;
    const velocity0 = Number.isFinite(state?.velocity) ? state.velocity : 0;
    const clampedDt = Number.isFinite(dt) ? Math.min(Math.max(dt, 0), 0.032) : 0;
    if (clampedDt === 0) {
      const settled = Math.abs(target - value0) < precision && Math.abs(velocity0) < precision;
      return { value: settled ? target : value0, target, velocity: settled ? 0 : velocity0, settled };
    }
    const displacement = value0 - target;
    const force = -stiffness * displacement - damping * velocity0;
    const velocity = velocity0 + force * clampedDt;
    const value = value0 + velocity * clampedDt;
    if (Math.abs(target - value) < precision && Math.abs(velocity) < precision) {
      return { value: target, target, velocity: 0, settled: true };
    }
    return { value, target, velocity, settled: false };
  }
  function samplePolyline(points, progress) {
    if (!Array.isArray(points) || !points.length) return [0, 0];
    if (points.length === 1) return [points[0][0], points[0][1]];
    const t = Math.min(1, Math.max(0, Number.isFinite(progress) ? progress : 0));
    const lengths = [];
    let total = 0;
    for (let i = 1; i < points.length; i++) {
      const len = Math.hypot(points[i][0] - points[i - 1][0], points[i][1] - points[i - 1][1]);
      lengths.push(len);
      total += len;
    }
    if (total <= 1e-6) return [points[0][0], points[0][1]];
    let remaining = t * total;
    for (let i = 0; i < lengths.length; i++) {
      const len = lengths[i];
      if (remaining <= len || i === lengths.length - 1) {
        const local = len > 1e-6 ? Math.min(1, Math.max(0, remaining / len)) : 0;
        const [x0, y0] = points[i];
        const [x1, y1] = points[i + 1];
        return [x0 + (x1 - x0) * local, y0 + (y1 - y0) * local];
      }
      remaining -= len;
    }
    return [points.at(-1)[0], points.at(-1)[1]];
  }
  function reducedMotion() {
    if (typeof window === "undefined" || typeof window.matchMedia !== "function") return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }
  function animateNumber(el, from, to, suffix = "", duration = 280) {
    if (!el) return () => {
    };
    if (reducedMotion() || from === to || typeof requestAnimationFrame !== "function") {
      el.textContent = String(to) + suffix;
      return () => {
      };
    }
    const start = performance.now();
    let rafId = 0;
    const tick = (now) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      const current = Math.round(from + (to - from) * eased);
      el.textContent = String(current) + suffix;
      if (t < 1) rafId = requestAnimationFrame(tick);
    };
    el.textContent = String(from) + suffix;
    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }
  function syncPillThumb(container) {
    if (!container) return;
    const thumb = container.querySelector(".pill-thumb");
    const current = container.querySelector('button[aria-pressed="true"]');
    if (!thumb || !current || !current.offsetWidth) return;
    thumb.style.width = current.offsetWidth + "px";
    thumb.style.transform = `translateX(${current.offsetLeft}px)`;
  }
  var activeSelects = /* @__PURE__ */ new Set();
  var selectGlobalBound = false;
  function closeAllCustomSelects(except) {
    for (const entry of activeSelects) {
      if (entry === except) continue;
      entry.wrap.classList.remove("is-open");
      entry.trigger.setAttribute("aria-expanded", "false");
    }
  }
  function syncCustomSelect(sel) {
    if (!sel || typeof sel._syncCustomSelect !== "function") return;
    sel._syncCustomSelect();
  }
  function enhanceSelect(sel) {
    if (!sel || typeof document === "undefined") return null;
    if (sel.dataset.neuEnhanced === "true") {
      syncCustomSelect(sel);
      return sel.closest(".neu-select");
    }
    sel.dataset.neuEnhanced = "true";
    if (!selectGlobalBound) {
      selectGlobalBound = true;
      document.addEventListener("click", () => closeAllCustomSelects());
      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") closeAllCustomSelects();
      });
    }
    const wrap = document.createElement("div");
    wrap.className = "neu-select";
    sel.parentNode.insertBefore(wrap, sel);
    sel.classList.add("neu-select-native");
    sel.tabIndex = -1;
    wrap.appendChild(sel);
    const trigger = document.createElement("button");
    trigger.type = "button";
    trigger.className = "neu-select-trigger";
    trigger.setAttribute("aria-haspopup", "listbox");
    trigger.setAttribute("aria-expanded", "false");
    const ariaLabel = sel.getAttribute("aria-label");
    if (ariaLabel) trigger.setAttribute("aria-label", ariaLabel);
    const labelSpan = document.createElement("span");
    labelSpan.className = "neu-select-label";
    const arrow = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    arrow.setAttribute("width", "13");
    arrow.setAttribute("height", "13");
    arrow.setAttribute("viewBox", "0 0 16 16");
    arrow.setAttribute("fill", "none");
    arrow.setAttribute("aria-hidden", "true");
    arrow.setAttribute("class", "neu-select-arrow");
    arrow.innerHTML = '<path d="M4 6L8 10L12 6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>';
    trigger.append(labelSpan, arrow);
    const menu = document.createElement("div");
    menu.className = "neu-select-menu";
    menu.setAttribute("role", "listbox");
    const entry = { wrap, trigger, sel };
    activeSelects.add(entry);
    function rebuildOptions() {
      const options = [...sel.options];
      const buttons = [];
      menu.replaceChildren();
      options.forEach((opt, idx) => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "neu-select-option";
        btn.setAttribute("role", "option");
        btn.setAttribute("aria-selected", String(idx === sel.selectedIndex));
        const text2 = document.createElement("span");
        text2.textContent = opt.textContent;
        const check3 = document.createElement("span");
        check3.className = "neu-select-check";
        check3.setAttribute("aria-hidden", "true");
        check3.textContent = "\u2713";
        btn.append(text2, check3);
        btn.addEventListener("click", () => {
          if (sel.disabled) return;
          const changed = sel.selectedIndex !== idx;
          sel.selectedIndex = idx;
          syncState();
          closeAllCustomSelects();
          trigger.focus();
          if (changed) sel.dispatchEvent(new Event("change", { bubbles: true }));
        });
        buttons.push(btn);
        menu.append(btn);
      });
      entry.buttons = buttons;
    }
    function syncState() {
      const options = [...sel.options];
      if (!entry.buttons || entry.buttons.length !== options.length || entry.buttons.some((b, i) => b.firstChild?.textContent !== options[i]?.textContent)) {
        rebuildOptions();
      }
      labelSpan.textContent = sel.selectedOptions[0]?.textContent || options[0]?.textContent || "";
      trigger.disabled = sel.disabled;
      wrap.classList.toggle("is-disabled", sel.disabled);
      entry.buttons?.forEach((b, i) => b.setAttribute("aria-selected", String(i === sel.selectedIndex)));
    }
    sel._syncCustomSelect = syncState;
    const observer2 = typeof MutationObserver === "function" ? new MutationObserver(syncState) : null;
    observer2?.observe(sel, { childList: true, attributes: true, attributeFilter: ["disabled"] });
    if (sel.id) {
      const explicitLabel = document.querySelector(`label[for="${CSS.escape(sel.id)}"]`);
      explicitLabel?.addEventListener("click", (e) => {
        e.preventDefault();
        if (!sel.disabled) trigger.click();
      });
    }
    trigger.addEventListener("click", (e) => {
      e.stopPropagation();
      if (sel.disabled) return;
      syncState();
      const willOpen = !wrap.classList.contains("is-open");
      closeAllCustomSelects(entry);
      wrap.classList.toggle("is-open", willOpen);
      trigger.setAttribute("aria-expanded", String(willOpen));
    });
    trigger.addEventListener("keydown", (e) => {
      if (sel.disabled) return;
      if (e.key === "ArrowDown" || e.key === "ArrowUp") {
        e.preventDefault();
        const step = e.key === "ArrowDown" ? 1 : -1;
        const nextIdx = Math.max(0, Math.min(sel.options.length - 1, sel.selectedIndex + step));
        if (nextIdx !== sel.selectedIndex) {
          sel.selectedIndex = nextIdx;
          syncState();
          sel.dispatchEvent(new Event("change", { bubbles: true }));
        }
      }
    });
    syncState();
    wrap.append(trigger, menu);
    return wrap;
  }
  function createNeuHScroll(scrollEl, ariaLabel = "\u6A2A\u5411\u4F4D\u7F6E\u6ED1\u5757") {
    const wrap = document.createElement("div");
    wrap.className = "neu-hscroll-wrap";
    const track = document.createElement("div");
    track.className = "neu-hscroll-track";
    track.setAttribute("role", "scrollbar");
    track.setAttribute("aria-orientation", "horizontal");
    track.setAttribute("aria-label", ariaLabel);
    track.setAttribute("aria-valuenow", "0");
    const thumb = document.createElement("div");
    thumb.className = "neu-hscroll-thumb";
    track.append(thumb);
    wrap.append(track);
    const sync = () => {
      if (!scrollEl.isConnected || !scrollEl.offsetParent && scrollEl.clientWidth === 0) return;
      const maxScroll = Math.max(0, scrollEl.scrollWidth - scrollEl.clientWidth);
      wrap.hidden = maxScroll <= 2;
      if (maxScroll <= 2) return;
      const trackInnerW = track.clientWidth - 8;
      if (trackInnerW <= 0) return;
      const thumbW = Math.max(56, Math.round(scrollEl.clientWidth / scrollEl.scrollWidth * trackInnerW));
      const ratio = maxScroll ? scrollEl.scrollLeft / maxScroll : 0;
      const left = 4 + Math.round((trackInnerW - thumbW) * ratio);
      thumb.style.width = thumbW + "px";
      thumb.style.left = left + "px";
      track.setAttribute("aria-valuenow", String(Math.round(ratio * 100)));
    };
    scrollEl.addEventListener("scroll", sync);
    const ro = typeof ResizeObserver === "function" ? new ResizeObserver(sync) : null;
    ro?.observe(scrollEl);
    let dragging = false;
    let startX = 0;
    let startLeft = 0;
    thumb.addEventListener("pointerdown", (e) => {
      dragging = true;
      startX = e.clientX;
      startLeft = thumb.offsetLeft - 4;
      wrap.classList.add("is-dragging");
      thumb.setPointerCapture(e.pointerId);
      e.stopPropagation();
    });
    thumb.addEventListener("pointermove", (e) => {
      if (!dragging) return;
      const trackInnerW = track.clientWidth - 8;
      const maxOffset = Math.max(1, trackInnerW - thumb.offsetWidth);
      const next = Math.max(0, Math.min(maxOffset, startLeft + (e.clientX - startX)));
      const maxScroll = Math.max(0, scrollEl.scrollWidth - scrollEl.clientWidth);
      scrollEl.scrollLeft = next / maxOffset * maxScroll;
    });
    const endDrag = () => {
      dragging = false;
      wrap.classList.remove("is-dragging");
    };
    thumb.addEventListener("pointerup", endDrag);
    thumb.addEventListener("pointercancel", endDrag);
    track.addEventListener("pointerdown", (e) => {
      if (e.target === thumb) return;
      const r = track.getBoundingClientRect();
      const pct = Math.max(0, Math.min(
        1,
        (e.clientX - r.left - thumb.offsetWidth / 2) / Math.max(1, r.width - thumb.offsetWidth)
      ));
      scrollEl.scrollLeft = pct * Math.max(0, scrollEl.scrollWidth - scrollEl.clientWidth);
    });
    return {
      wrap,
      sync,
      destroy() {
        scrollEl.removeEventListener("scroll", sync);
        ro?.disconnect();
      }
    };
  }
  function drawBeamAlongPolyline(ctx, pts, cyclePhase, { position = (p) => p, tailLen = 0.28, color = "79, 70, 229" } = {}) {
    const span = 1 + tailLen;
    for (const offset of [0, 0.5]) {
      const p = (cyclePhase + offset) % 1 * span;
      const head = Math.min(1, p);
      const tail = Math.max(0, p - tailLen);
      if (head - tail < 0.02) continue;
      const steps2 = 18;
      const samples = [];
      for (let i = 0; i <= steps2; i++) {
        const t = tail + (head - tail) * (i / steps2);
        samples.push(position(samplePolyline(pts, t)));
      }
      const edgeFade = Math.min(1, head / 0.12) * Math.min(1, (1 + tailLen - p) / 0.14);
      ctx.save();
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      for (let i = 0; i < steps2; i++) {
        const k = (i + 1) / steps2;
        const intensity = Math.pow(k, 1.65) * edgeFade;
        ctx.strokeStyle = `rgba(${color}, ${(0.16 * intensity).toFixed(3)})`;
        ctx.lineWidth = 3.8;
        ctx.beginPath();
        ctx.moveTo(samples[i][0], samples[i][1]);
        ctx.lineTo(samples[i + 1][0], samples[i + 1][1]);
        ctx.stroke();
        const r = Math.round(79 + (129 - 79) * k);
        const g = Math.round(70 + (140 - 70) * k);
        const b = Math.round(229 + (248 - 229) * k);
        ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${(0.95 * intensity).toFixed(3)})`;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(samples[i][0], samples[i][1]);
        ctx.lineTo(samples[i + 1][0], samples[i + 1][1]);
        ctx.stroke();
      }
      ctx.restore();
    }
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
    refreshExecution,
    onActivityChange
  }) {
    let events = [], runtime = {}, discussion, execFilter = "all";
    let prevExecStates = /* @__PURE__ */ new Map();
    let suppressExecStagger = false;
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
      onActivityChange?.(events);
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
      const pointsGrid = node("div", "", "points-grid");
      for (const point of discussion.points) {
        const card = node("article", "", "chain-card");
        const head = node("div", "", "point-head");
        const kindBadge = node(
          "span",
          point.kind === "open" ? "\u5F85\u786E\u8BA4" : "\u660E\u786E\u610F\u89C1",
          "point-badge " + (point.kind === "open" ? "point-open" : "point-decision")
        );
        head.append(node("h4", point.id), kindBadge);
        card.append(head, node("p", point.text));
        for (const evidence of point.evidence) card.append(node("blockquote", "\u7B2C " + evidence.line + " \u884C \xB7 " + evidence.quote));
        pointsGrid.append(card);
      }
      discussionResult.append(pointsGrid);
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
      confirm.className = "btn-solid";
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
      const submitProposal = button(previous ? "\u63D0\u4EA4\u4FEE\u8BA2\u5E76\u5F00\u542F\u65B0\u4E00\u8F6E" : "\u5F00\u542F\u7B2C\u4E00\u8F6E\u786E\u8BA4", () => updateDiscussion(() => {
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
      }));
      submitProposal.className = "btn-solid";
      editor.append(submitProposal);
      return editor;
    }
    function roundCard(round) {
      const current = discussion.rounds.at(-1) === round;
      const byName = new Map(round.votes.map((vote) => [vote.participant, vote]));
      const agrees = round.votes.filter((vote) => vote.stance === "agree").length;
      const card = node("article", "", "chain-card consensus-round");
      const roundHead = node("div", "", "point-head");
      roundHead.append(
        node("h3", "\u7B2C " + round.number + " \u8F6E\u63D0\u6848"),
        node(
          "span",
          agrees + " / " + discussion.participants.length + " \u540C\u610F",
          "point-badge " + (agrees === discussion.participants.length ? "point-decision" : "point-open")
        )
      );
      card.append(roundHead, node("p", round.proposal, "chain-text"));
      for (const [id, answer] of Object.entries(round.resolutions)) card.append(node("p", id + " \xB7 " + answer));
      const list = node("ul");
      for (const name of discussion.participants) {
        const vote = byName.get(name);
        const row = node("li");
        const rowHead = node("div", "", "vote-row-head");
        const stanceClass = !vote ? "point-pending" : vote.stance === "agree" ? "point-decision" : vote.stance === "reserve" ? "point-reserve" : "point-object";
        rowHead.append(
          node("span", name),
          node("span", vote ? stanceLabels[vote.stance] : "\u5F85\u767B\u8BB0", "point-badge " + stanceClass)
        );
        row.append(rowHead);
        if (vote?.note) row.append(node("span", (vote.point ? vote.point + " \xB7 " : "") + vote.note, "vote-note"));
        if (vote && vote.stance !== "agree") {
          const revised = discussion.rounds[round.number];
          const reply = revised?.responses[name];
          const closed = discussion.rounds.slice(round.number).find((later) => later.votes.some((item) => item.participant === name && item.stance === "agree"));
          if (reply) row.append(node("span", "\u7B2C " + revised.number + " \u8F6E\u56DE\u5E94 \xB7 " + reply, "vote-note"));
          row.append(node("span", closed ? "\u5F02\u8BAE\u5DF2\u5173\u95ED \xB7 \u672C\u4EBA\u4E8E\u7B2C " + closed.number + " \u8F6E\u540C\u610F\u4FEE\u8BA2\u7A3F" : reply ? "\u7B49\u5F85\u8BE5\u53C2\u4E0E\u8005\u786E\u8BA4\u4FEE\u8BA2\u7A3F" : "\u5F85\u56DE\u5E94", "vote-note"));
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
      enhanceSelect(participant);
      const stance = labeled(form, "\u7ACB\u573A", node("select"));
      stance.add(new Option("\u9009\u62E9\u7ACB\u573A", ""));
      for (const [id, label] of Object.entries(stanceLabels)) stance.add(new Option(label, id));
      enhanceSelect(stance);
      const point = labeled(form, "\u6D89\u53CA\u8981\u70B9\uFF08\u9002\u7528\u4E8E\u5F02\u8BAE\uFF09", node("select"));
      point.add(new Option("\u6574\u4EFD\u63D0\u6848", ""));
      for (const item of discussion.points) point.add(new Option(item.id + " \xB7 " + item.text, item.id));
      enhanceSelect(point);
      const note = labeled(form, "\u610F\u89C1\u8BF4\u660E\uFF08\u53CD\u5BF9\u6216\u4FDD\u7559\u65F6\u5FC5\u586B\uFF09", node("input"));
      note.maxLength = 500;
      const registerBtn = button("\u767B\u8BB0\u7ACB\u573A", () => updateDiscussion(() => {
        discussion = registerStance(discussion, {
          participant: participant.value,
          stance: stance.value,
          point: point.value,
          note: note.value
        });
        const round = discussion.rounds.at(-1);
        const vote = round.votes.at(-1);
        log("\u5171\u8BC6\u786E\u8BA4", stanceLabels[vote.stance], "\u7B2C " + round.number + " \u8F6E \xB7 " + vote.participant + (vote.note ? " \xB7 " + vote.note : ""), { round: round.number, ...vote });
      }));
      registerBtn.className = "btn-solid";
      form.append(node("p", "\u8BF7\u767B\u8BB0\u53C2\u4E0E\u8005\u5DF2\u7ECF\u8868\u8FBE\u7684\u7ACB\u573A\u3002", "hint"), registerBtn);
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
          suppressExecStagger = true;
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
      const taskEntries = plan.tasks.map((task) => ({ task, state: taskState(task.id, runtime, arrangement2) }));
      const shouldStagger = !suppressExecStagger;
      suppressExecStagger = false;
      const filterCounts = { all: taskEntries.length, ready: 0, active: 0, failed: 0, done: 0 };
      for (const { state } of taskEntries) {
        if (state === "ready") filterCounts.ready++;
        else if (state === "running" || state === "waiting") filterCounts.active++;
        else if (state === "failed") filterCounts.failed++;
        else if (state === "done") filterCounts.done++;
      }
      container.append(node("p", "\u8282\u70B9\u901A\u8FC7 DeepSeek API \u8C03\u7528\u5BF9\u5E94 Agent\u3002\u8D1F\u8D23\u4EBA\u786E\u8BA4\u540E\uFF0C\u4EA7\u7269\u624D\u4F1A\u4F20\u7ED9\u4F9D\u8D56\u5B83\u7684\u8282\u70B9\u3002\u6D4B\u8BD5\u811A\u672C\u7531\u8D1F\u8D23\u4EBA\u5728\u9879\u76EE\u73AF\u5883\u8FD0\u884C\u3002", "hint"));
      const toolbar = node("div", "", "exec-toolbar");
      const filters = node("div", "", "exec-filters");
      filters.setAttribute("aria-label", "\u6309\u4EFB\u52A1\u72B6\u6001\u7B5B\u9009");
      for (const [filterId, label] of [
        ["all", "\u5168\u90E8"],
        ["ready", "\u53EF\u5F00\u59CB"],
        ["active", "\u8FDB\u884C\u4E2D\xB7\u7B49\u8865\u5145"],
        ["failed", "\u5931\u8D25\u5F85\u5904\u7406"],
        ["done", "\u5DF2\u5B8C\u6210"]
      ]) {
        const btn = button(label + " (" + filterCounts[filterId] + ")", () => {
          execFilter = filterId;
          suppressExecStagger = false;
          refreshExecution();
        });
        btn.className = "exec-filter-btn";
        btn.dataset.filter = filterId;
        btn.setAttribute("aria-pressed", String(execFilter === filterId));
        filters.append(btn);
      }
      const batch = button("\u5E76\u884C\u8C03\u7528\u5C31\u7EEA Agent", async () => {
        if (isBusy() || !await ready() || getResult()?.plan !== plan) return;
        const available = arrangement2.rounds.flat().filter((id) => taskState(id, runtime, arrangement2) === "ready");
        await Promise.all(available.slice(0, Math.max(0, arrangement2.capacity - pendingAgents.size)).map((id) => callNodeAgent(tasks.get(id))));
      });
      batch.className = "btn-ai";
      batch.disabled = pendingAgents.size >= arrangement2.capacity || !filterCounts.ready;
      toolbar.append(filters, batch);
      container.append(toolbar);
      const visibleEntries = taskEntries.filter(({ state }) => {
        if (execFilter === "all") return true;
        if (execFilter === "active") return state === "running" || state === "waiting";
        return state === execFilter;
      });
      if (!visibleEntries.length) {
        prevExecStates = new Map(taskEntries.map((e) => [e.task.id, e.state]));
        const empty = node("p", "\u5F53\u524D\u72B6\u6001\u7B5B\u9009\u4E0B\u6682\u65E0\u4EFB\u52A1\uFF0C\u53EF\u70B9\u51FB\u300C\u5168\u90E8\u300D\u67E5\u770B\u5168\u90E8\u8282\u70B9\u3002", "hint");
        container.append(empty);
        return;
      }
      visibleEntries.forEach(({ task, state }, idx) => {
        const card = node("article", "", "execution-card");
        card.id = "execution-" + task.id;
        card.dataset.role = task.role;
        card.tabIndex = -1;
        if (shouldStagger) {
          card.classList.add("stagger-in");
          card.style.setProperty("--stagger", String(Math.min(idx, 8)));
        }
        if (prevExecStates.size && prevExecStates.get(task.id) !== state) {
          card.classList.add("just-updated");
        }
        const agent = agentForTask(task);
        const output = currentAgentOutput(runtime[task.id]);
        const inFlight = pendingAgents.has(task.id);
        const head = node("div", "", "exec-head");
        const stateLine = node("p", "", "execution-status");
        stateLine.append(
          statusBadge(state, stateLabels[state], { rollbackAffected: affected.has(task.id) }),
          node("span", " \xB7 " + agent.name + " \xB7 " + taskStage(task) + (inFlight ? " \xB7 Agent \u751F\u6210\u4E2D" : "") + " \xB7 \u5C1D\u8BD5 " + (runtime[task.id]?.attempts || 0) + " \u6B21", "exec-meta-text")
        );
        head.append(node("h3", task.id + " \xB7 " + task.title), stateLine);
        card.append(head);
        const candidates = rollbackTargets(task);
        const nextTips = {
          pending: "\u7B49\u5F85\u524D\u7F6E\u4F9D\u8D56\u5168\u90E8\u786E\u8BA4\u4EA4\u4ED8\u540E\u5373\u53EF\u5F00\u59CB\u3002",
          ready: "\u4E0B\u4E00\u6B65\uFF1A\u70B9\u51FB\u300C\u8C03\u7528 " + agent.name + "\u300D\u81EA\u52A8\u751F\u6210\uFF0C\u6216\u624B\u52A8\u70B9\u51FB\u300C\u5F00\u59CB\u6267\u884C\u300D\u3002",
          running: "\u4E0B\u4E00\u6B65\uFF1A\u586B\u5199\u8BF4\u660E\u540E\u300C\u786E\u8BA4\u4EA4\u4ED8\u300D\uFF0C\u6216\u70B9\u51FB\u300C\u8BF7\u6C42\u8865\u5145\u300D/\u300C\u62A5\u544A\u5931\u8D25\u300D\u3002",
          waiting: "\u4E0B\u4E00\u6B65\uFF1A\u586B\u5199\u6F84\u6E05\u7B54\u590D\u5E76\u70B9\u51FB\u300C\u63D0\u4EA4\u7B54\u590D\u300D\u6062\u590D\u6267\u884C\u3002",
          failed: candidates.length ? "\u4E0B\u4E00\u6B65\uFF1A\u5728\u4E0B\u65B9\u9009\u5B9A\u7F3A\u9677\u6E90\u4EFB\u52A1\u6267\u884C\u300C\u56DE\u9000\u5E76\u8981\u6C42\u91CD\u9A8C\u300D\uFF0C\u6216\u300C\u4EBA\u5DE5\u91CD\u8BD5\u300D\u3002" : "\u4E0B\u4E00\u6B65\uFF1A\u6838\u67E5\u5931\u8D25\u8BF4\u660E\u540E\u70B9\u51FB\u300C\u4EBA\u5DE5\u91CD\u8BD5\u300D\u3002",
          done: "\u5DF2\u786E\u8BA4\u4EA4\u4ED8\uFF1A\u4EA7\u7269\u5DF2\u4F20\u9012\u5E76\u89E3\u9501\u4E0B\u6E38\u4F9D\u8D56\u3002"
        };
        if (nextTips[state]) {
          const tip = node("p", nextTips[state], "exec-next-tip");
          tip.dataset.state = state;
          card.append(tip);
        }
        const specs = node("div", "", "task-specs");
        const addSpecRow = (key, val) => {
          const row = node("div", "", "task-spec-row");
          row.append(node("span", key, "spec-key"), node("span", val, "spec-val"));
          specs.append(row);
        };
        addSpecRow("\u804C\u8D23", agent.duty);
        addSpecRow("\u9884\u671F\u4EA4\u4ED8\u7269", task.output);
        addSpecRow("\u524D\u7F6E", arrangement2.dependencies[task.id].map((id) => id + " " + stateLabels[taskState(id, runtime, arrangement2)]).join("\u3001") || "\u65E0");
        if (task.test) addSpecRow("\u6D4B\u8BD5\u76EE\u6807", task.test.targets.map((id) => id + " " + tasks.get(id).title).join("\u3001"));
        if (task.review) {
          addSpecRow("\u8BC4\u5BA1\u5BF9\u8C61", task.review.target + " " + tasks.get(task.review.target).title);
          addSpecRow("\u9A8C\u6536", task.acceptance);
        }
        card.append(specs);
        if (task.test) card.append(...renderCases(task));
        if (output) {
          const outputBox = node("div", "", "exec-output");
          outputBox.append(node("p", (output.verdict ? verdictLabels[output.verdict] + " \xB7 " : "") + "DeepSeek \xB7 " + output.model + " \xB7 " + output.summary));
          for (const file2 of output.artifacts) {
            const detail = node("details", "", "agent-artifact");
            const pre = node("pre", file2.content);
            const preHScroll = createNeuHScroll(pre, file2.path + " \u6A2A\u5411\u4F4D\u7F6E\u6ED1\u5757");
            detail.append(
              node("summary", file2.path),
              pre,
              preHScroll.wrap,
              button("\u4E0B\u8F7D\u6587\u4EF6", () => download(file2.path.split("/").at(-1), file2.content, "text/plain;charset=utf-8"))
            );
            detail.addEventListener("toggle", () => {
              if (detail.open) requestAnimationFrame(preHScroll.sync);
            });
            outputBox.append(detail);
          }
          card.append(outputBox);
        }
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
            invoke.className = "btn-ai";
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
                suppressExecStagger = true;
                refreshExecution();
              } catch (issue) {
                error.textContent = issue.message;
              }
            });
            if (action === "complete") control.className = "btn-solid";
            else if (action === "fail") control.className = "btn-danger-soft";
            control.disabled = inFlight || action === "complete" && Boolean(output?.verdict && output.verdict !== "pass");
            actions.append(control);
          }
          if (state === "failed" && candidates.length) {
            const rollbackBox = node("div", "", "exec-rollback-box");
            const targetLabel = node("label", "\u56DE\u9000\u76EE\u6807");
            const targets = node("select");
            targets.append(new Option("\u9009\u5B9A\u786E\u8BA4\u6709\u7F3A\u9677\u7684\u5B9E\u73B0\u4EFB\u52A1", ""));
            for (const id of candidates) targets.append(new Option(id + " \xB7 " + tasks.get(id).title, id));
            if (candidates.length === 1) targets.value = candidates[0];
            targetLabel.append(targets);
            enhanceSelect(targets);
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
                suppressExecStagger = true;
                refreshExecution();
              } catch (issue) {
                error.textContent = issue.message;
              }
            });
            rollback.className = "btn-warn-soft";
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
            rollbackBox.append(targetLabel, impact);
            card.append(rollbackBox);
            actions.append(rollback);
          }
          if (agentErrors.has(task.id)) error.textContent = agentErrors.get(task.id);
          card.append(label, actions, error);
        }
        const list = node("ul", "", "execution-history");
        for (const item of runtime[task.id]?.notes || []) list.append(node(
          "li",
          new Date(item.time).toLocaleTimeString("zh-CN") + " \xB7 " + historyText(item)
        ));
        if (list.childElementCount) card.append(list);
        container.append(card);
      });
      prevExecStates = new Map(taskEntries.map((e) => [e.task.id, e.state]));
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
        execFilter = "all";
        prevExecStates.clear();
        suppressExecStagger = false;
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
  function transitive(id, neighbors) {
    const result2 = [];
    const seen = /* @__PURE__ */ new Set([id]);
    let frontier = [id];
    let depth = 0;
    while (frontier.length) {
      const next = [];
      for (const current of frontier) for (const neighbor of neighbors(current)) {
        if (seen.has(neighbor)) continue;
        seen.add(neighbor);
        next.push(neighbor);
        result2.push({ id: neighbor, depth: depth + 1 });
      }
      frontier = next;
      depth++;
    }
    return result2;
  }
  function transitiveUpstream(id, dependencies) {
    return transitive(id, (current) => dependencies[current] ?? []);
  }
  function transitiveDownstream(id, edges) {
    const successors = /* @__PURE__ */ new Map();
    for (const edge of edges) {
      if (!successors.has(edge.from)) successors.set(edge.from, []);
      successors.get(edge.from).push(edge.to);
    }
    return transitive(id, (current) => successors.get(current) ?? []);
  }
  function focusBreadcrumb(id, dependencies) {
    const ancestors = transitiveUpstream(id, dependencies);
    const depths = new Map(ancestors.map((item) => [item.id, item.depth]));
    const path = [id];
    let current = id;
    while ((dependencies[current] ?? []).length) {
      const parent = [...dependencies[current]].sort((a, b) => (depths.get(b) ?? -1) - (depths.get(a) ?? -1) || a.localeCompare(b))[0];
      path.push(parent);
      current = parent;
    }
    return path.reverse();
  }
  function groupByDepth(items) {
    const groups = /* @__PURE__ */ new Map();
    for (const item of items) {
      if (!groups.has(item.depth)) groups.set(item.depth, []);
      groups.get(item.depth).push(item.id);
    }
    return [...groups.entries()].sort((a, b) => a[0] - b[0]);
  }

  // graph/batches.mjs
  function taskDepths(dependencies) {
    const depths = /* @__PURE__ */ new Map();
    const visiting = /* @__PURE__ */ new Set();
    function depth(id) {
      if (depths.has(id)) return depths.get(id);
      if (visiting.has(id)) return 0;
      visiting.add(id);
      const value = Math.max(-1, ...(dependencies[id] ?? []).map((parent) => depth(parent))) + 1;
      visiting.delete(id);
      depths.set(id, value);
      return value;
    }
    for (const id of Object.keys(dependencies)) depth(id);
    return depths;
  }
  function criticalChain(dependencies, depths) {
    let current = [...depths.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))[0]?.[0];
    const chain = [];
    while (current) {
      chain.unshift(current);
      current = (dependencies[current] ?? []).filter((parent) => depths.get(parent) === depths.get(chain[0]) - 1).sort((a, b) => a.localeCompare(b))[0];
    }
    return chain;
  }
  function rollbackCausality(runtime) {
    const latest = /* @__PURE__ */ new Map();
    for (const [taskId, record] of Object.entries(runtime)) for (const note of record.notes ?? []) {
      if (note.action !== "rollback") continue;
      const key = taskId;
      const current = latest.get(key);
      if (!current || String(note.time) > String(current.time)) latest.set(key, { ...note, taskId });
    }
    return [...latest.values()].sort((a, b) => a.taskId.localeCompare(b.taskId)).map((note) => ({
      taskId: note.taskId,
      checkpoint: note.test,
      target: note.target,
      time: note.time,
      invalidated: Object.entries(runtime).filter(([, item]) => item.notes?.some((entry) => entry.action === "invalidated" && entry.time === note.time)).map(([id]) => id).sort()
    }));
  }

  // graph/viewport.mjs
  function clampScale(scale, min = 0.4, max = 2) {
    return Math.min(max, Math.max(min, scale));
  }
  function fitScale(content, viewport, min = 0.4, max = 2) {
    if (!content.width || !content.height || !viewport.width || !viewport.height) return 1;
    return clampScale(Math.min(viewport.width / content.width, viewport.height / content.height), min, max);
  }
  function scaledSize(natural, scale) {
    return { width: natural.width * scale, height: natural.height * scale };
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
  var tabBar = tabs[0]?.parentElement;
  var wsNav = byId("workspace-nav");
  var result;
  var arrangement;
  var observer;
  var stopGraphMotion;
  var viewCleanups = [];
  var lastMetricValues = null;
  var metricCleanups = [];
  var pageKey;
  var apiStatus;
  var active = "tasks";
  var selected = "";
  var requirementFilter = "";
  var busy = false;
  var pipeline;
  var draft;
  var chainView = "idea";
  var chainExpanded = false;
  var runningStage = "";
  var graphLayout = "horizontal";
  var inputCollapsed = false;
  var floatDocked = false;
  var dockActiveInspector = null;
  var floatingEl = byId("floating-inspector");
  var floatingHead = byId("float-insp-heading");
  var floatingBody = byId("float-insp-body");
  var floatingDrag = byId("floating-insp-drag");
  var floatingClose = byId("float-insp-close");
  var steps = [
    ["idea", "\u4EA7\u54C1\u60F3\u6CD5"],
    ["requirements", "\u9700\u6C42\u89C4\u683C"],
    ["design", "\u8BBE\u8BA1\u89C4\u683C"],
    ["tests", "\u6D4B\u8BD5\u65B9\u6848"],
    ["schedule", "\u4EFB\u52A1\u7F16\u6392"],
    ["feedback", "\u8BBE\u8BA1\u56DE\u586B"]
  ];
  var stepLabels = new Map(steps);
  function hideFloatingInspector() {
    if (!floatingEl) return;
    floatingEl.hidden = true;
    floatingEl.classList.remove("is-dragging");
  }
  function clampFloatingInspector() {
    if (!floatingEl || floatingEl.hidden) return;
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const fw = floatingEl.offsetWidth || 540;
    const fh = floatingEl.offsetHeight || 260;
    const rect = floatingEl.getBoundingClientRect();
    const nextLeft = Math.max(12, Math.min(vw - fw - 12, rect.left));
    const nextTop = Math.max(62, Math.min(vh - fh - 12, rect.top));
    floatingEl.style.left = Math.round(nextLeft) + "px";
    floatingEl.style.top = Math.round(nextTop) + "px";
  }
  function positionFloatingNearNode(nodeBtn) {
    if (!floatingEl || !nodeBtn) return;
    floatingEl.hidden = false;
    const nr = nodeBtn.getBoundingClientRect();
    const fw = floatingEl.offsetWidth || 540;
    const fh = floatingEl.offsetHeight || 260;
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    let left = nr.right + 14;
    if (left + fw > vw - 14) left = Math.max(12, nr.left - fw - 14);
    if (left + fw > vw - 14) left = Math.max(12, vw - fw - 14);
    const top = Math.max(62, Math.min(vh - fh - 14, nr.top - 12));
    floatingEl.style.left = Math.round(left) + "px";
    floatingEl.style.top = Math.round(top) + "px";
  }
  function initFloatingInspectorControls() {
    if (!floatingEl || !floatingDrag) return;
    let dragging = false;
    let startX = 0;
    let startY = 0;
    let origL = 0;
    let origT = 0;
    floatingDrag.addEventListener("pointerdown", (event) => {
      if (event.target.closest("button")) return;
      dragging = true;
      floatingEl.classList.add("is-dragging");
      const rect = floatingEl.getBoundingClientRect();
      origL = rect.left;
      origT = rect.top;
      startX = event.clientX;
      startY = event.clientY;
      floatingDrag.setPointerCapture(event.pointerId);
    });
    floatingDrag.addEventListener("pointermove", (event) => {
      if (!dragging) return;
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      const fw = floatingEl.offsetWidth || 540;
      const fh = floatingEl.offsetHeight || 260;
      const nextL = Math.max(12, Math.min(vw - fw - 12, origL + (event.clientX - startX)));
      const nextT = Math.max(62, Math.min(vh - fh - 12, origT + (event.clientY - startY)));
      floatingEl.style.left = Math.round(nextL) + "px";
      floatingEl.style.top = Math.round(nextT) + "px";
    });
    const endDrag = () => {
      dragging = false;
      floatingEl.classList.remove("is-dragging");
    };
    floatingDrag.addEventListener("pointerup", endDrag);
    floatingDrag.addEventListener("pointercancel", endDrag);
    floatingClose?.addEventListener("click", () => {
      if (dockActiveInspector) dockActiveInspector();
      else hideFloatingInspector();
    });
    document.addEventListener("keydown", (event) => {
      if (event.key !== "Escape" || !floatingEl || floatingEl.hidden) return;
      if (document.querySelector("dialog[open]")) return;
      if (dockActiveInspector) dockActiveInspector();
      else hideFloatingInspector();
    });
  }
  function renderRailOverview() {
    const chip = byId("rail-chain-chip");
    const slot = byId("rail-overview-slot");
    if (!chip || !slot) return;
    if (!result || !arrangement) {
      chip.textContent = "\u7B49\u5F85\u8FD0\u884C";
      slot.replaceChildren(element("p", "\u8FD0\u884C\u5DE5\u4F5C\u6D41\u6216\u5BFC\u5165\u7ED3\u679C\u540E\uFF0C\u5C06\u5728\u6B64\u5C55\u793A\u6700\u957F\u4F9D\u8D56\u5173\u952E\u94FE\u4E0E\u9700\u6C42\u8986\u76D6\u8FFD\u6EAF\u3002", "inspector-tip"));
      return;
    }
    const depths = taskDepths(arrangement.dependencies);
    const chain = criticalChain(arrangement.dependencies, depths);
    const chainBatches = new Set(chain.map((id) => arrangement.rounds.findIndex((batch) => batch.includes(id))));
    const runtime = monitor.getRuntime();
    chip.textContent = chainBatches.size + " \u6279\u6B21\u6700\u957F\u94FE";
    const nodes = [];
    if (chain.length) {
      const chainBar = element("div", "", "rail-overview-chain");
      chainBar.setAttribute("aria-label", "\u5173\u952E\u8DEF\u5F84\u8282\u70B9\u94FE");
      chain.forEach((id, idx) => {
        if (idx > 0) chainBar.append(element("span", "\u203A", "rail-chain-chev"));
        const btn = element("button", id, "rail-chain-btn");
        btn.type = "button";
        if (runtime[id]?.status === "failed") btn.classList.add("is-failed");
        btn.title = "\u5728\u4F9D\u8D56\u56FE\u4E2D\u67E5\u770B " + id;
        btn.addEventListener("click", () => locateGraphTask(id));
        chainBar.append(btn);
      });
      nodes.push(chainBar);
    }
    const reqList = element("div", "", "rail-req-list");
    for (const req of result.plan.requirements) {
      const linked = result.plan.tasks.filter((t) => t.requirements.includes(req.id)).map((t) => t.id);
      const box = element("div", "", "rail-req-item");
      const summary = req.text.length > 26 ? req.text.slice(0, 26) + "\u2026" : req.text;
      box.append(
        element("strong", req.id + " \xB7 " + summary),
        document.createTextNode(" \xB7 \u8986\u76D6 " + (linked.join("\u3001") || "\u6682\u65E0"))
      );
      reqList.append(box);
    }
    nodes.push(reqList);
    slot.replaceChildren(...nodes);
  }
  function renderRailActivity(events = []) {
    const list = byId("rail-activity-list");
    const tip = byId("rail-activity-tip");
    if (!list) return;
    const recent = events.slice(-4).reverse();
    if (!recent.length) {
      list.replaceChildren();
      if (tip) tip.hidden = false;
      return;
    }
    list.replaceChildren(...recent.map((event) => {
      const li = element("li");
      const time = element("time", new Date(event.time).toLocaleTimeString("zh-CN", { hour: "2-digit", minute: "2-digit" }));
      const title = element("strong", [event.stage, event.agent, event.status].filter(Boolean).join(" \xB7 "));
      const msg = document.createTextNode(" \xB7 " + event.message);
      li.append(time, title, msg);
      return li;
    }));
    if (tip) tip.hidden = false;
  }
  function updateRightRailContext(inspectingId = "", inspectorEl = null, { floating = false, title = "", onReopen = null } = {}) {
    const heading = byId("right-ctx-heading");
    const chip = byId("right-ctx-chip");
    const inspectorSlot = byId("rail-inspector-slot");
    const activitySlot = byId("rail-activity-slot");
    if (!heading || !chip || !inspectorSlot || !activitySlot) return;
    if (inspectingId && active === "graph" && floating) {
      heading.textContent = "\u8282\u70B9\u68C0\u89C6\u72B6\u6001";
      chip.textContent = "\u5DF2\u60AC\u6D6E\u5C55\u5F00";
      const note = element("div", "", "inspector-tip");
      note.style.marginTop = "0";
      note.append(
        document.createTextNode("\u5F53\u524D\u6B63\u5728\u4F9D\u8D56\u56FE\u8282\u70B9\u65C1\u60AC\u6D6E\u68C0\u89C6 "),
        element("strong", title || inspectingId),
        document.createTextNode("\uFF1B\u53EF\u62D6\u52A8\u60AC\u6D6E\u7A97\uFF0C\u70B9\u51FB\u53F3\u4E0A\u89D2 \xD7 \u5373\u53EF\u81EA\u52A8\u8D34\u56DE\u6B64\u5904\u663E\u793A\u3002")
      );
      inspectorSlot.replaceChildren(note);
      inspectorSlot.hidden = false;
      activitySlot.hidden = true;
    } else if (inspectingId && inspectorEl && active === "graph") {
      heading.textContent = "\u8282\u70B9\u68C0\u89C6 \xB7 " + inspectingId;
      chip.textContent = "\u5DF2\u8D34\u56DE\u53F3\u4E0B";
      const nodes = [inspectorEl];
      if (onReopen) {
        const reopenBtn = element("button", "\u5728\u8282\u70B9\u65C1\u547C\u51FA\u5BBD\u5E45\u60AC\u6D6E\u7A97 \u2197", "dock-popout-btn");
        reopenBtn.type = "button";
        reopenBtn.addEventListener("click", onReopen);
        nodes.push(reopenBtn);
      }
      inspectorSlot.replaceChildren(...nodes);
      inspectorSlot.hidden = false;
      activitySlot.hidden = true;
    } else {
      heading.textContent = "\u6700\u8FD1\u8FD0\u884C\u4E0E\u4EA4\u4E92\u6458\u8981";
      chip.textContent = "\u5B9E\u65F6\u540C\u6B65";
      inspectorSlot.replaceChildren();
      inspectorSlot.hidden = true;
      activitySlot.hidden = false;
    }
  }
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
    onActivityChange: renderRailActivity,
    adopt: (text2) => {
      inputMode.value = "idea";
      spec.value = text2;
      changeSpec(true);
    }
  });
  function syncTabIndicator() {
    syncPillThumb(tabBar);
    syncPillThumb(wsNav);
  }
  window.addEventListener("resize", () => {
    syncTabIndicator();
    clampFloatingInspector();
  });
  function selectWorkspace(discussion, focus = false) {
    if (discussion) {
      stopGraphMotion?.();
      stopGraphMotion = void 0;
      hideFloatingInspector();
    }
    byId("workspace").hidden = discussion;
    byId("discussion-panel").hidden = !discussion;
    byId("workspace-plan").setAttribute("aria-pressed", String(!discussion));
    byId("workspace-discussion").setAttribute("aria-pressed", String(discussion));
    syncPillThumb(wsNav);
    if (!discussion) {
      syncPillThumb(tabBar);
      if (result && active === "graph") render();
    }
    if (focus) byId(discussion ? "workspace-discussion" : "workspace-plan").focus();
  }
  function updateInputSummary() {
    const summary = byId("input-summary");
    if (!summary) return;
    const exampleText = example.selectedOptions[0]?.textContent || "\u81EA\u5B9A\u4E49\u8F93\u5165";
    summary.textContent = modeLabel() + " \xB7 " + exampleText + " \xB7 \u6BCF\u6279\u4E0A\u9650 " + capacity.value;
  }
  var leftCollapse = byId("left-collapse");
  leftCollapse?.addEventListener("transitionend", () => leftCollapse.classList.remove("is-animating"));
  function showInput(visible) {
    inputCollapsed = !visible;
    if (leftCollapse) {
      leftCollapse.classList.add("is-animating");
      leftCollapse.classList.toggle("is-collapsed", !visible);
      leftCollapse.setAttribute("aria-hidden", String(!visible));
    }
    byId("workspace").classList.toggle("input-collapsed", !visible);
    const toggle = byId("toggle-input");
    toggle.setAttribute("aria-expanded", String(visible));
    byId("toggle-input-label").textContent = visible ? "\u6536\u8D77\u5DE6\u680F" : "\u5C55\u5F00\u5DE6\u680F";
    const summary = byId("input-summary");
    if (summary) summary.hidden = visible;
    updateInputSummary();
    requestAnimationFrame(() => syncTabIndicator());
  }
  byId("workspace-plan").addEventListener("click", () => selectWorkspace(false));
  byId("workspace-discussion").addEventListener("click", () => selectWorkspace(true));
  byId("toggle-input").addEventListener("click", () => showInput(inputCollapsed));
  byId("toggle-chain")?.addEventListener("click", () => {
    chainExpanded = false;
    renderChain();
  });
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
  enhanceSelect(inputMode);
  enhanceSelect(capacity);
  enhanceSelect(example);
  function modeLabel() {
    return inputMode.value === "idea" ? "\u4EA7\u54C1\u60F3\u6CD5" : "\u8BBE\u8BA1\u89C4\u683C";
  }
  function runLabel() {
    if (inputMode.value === "design") return draft ? "\u7EE7\u7EED\u751F\u6210\u6D4B\u8BD5\u65B9\u6848" : "\u8FD0\u884C\u4EFB\u52A1\u7F16\u6392";
    if (pipeline?.requirements && !pipeline.testPlan) return "\u7EE7\u7EED\u5B8C\u6574\u6D41\u7A0B";
    return "\u8FD0\u884C\u5B8C\u6574\u6D41\u7A0B";
  }
  function setRunLabel(text2) {
    const label = byId("run-label");
    if (label) label.textContent = text2;
    else run.textContent = text2;
  }
  function updateInput() {
    byId("count").textContent = spec.value.length + " / 4000";
    byId("spec-label").textContent = modeLabel();
    const field = inputMode.value === "idea" ? "idea" : "spec";
    const match = examples.findIndex((item) => item[field] === spec.value);
    example.value = match < 0 ? "" : String(match);
    syncCustomSelect(inputMode);
    syncCustomSelect(capacity);
    syncCustomSelect(example);
    byId("input-error").textContent = "";
    updateInputSummary();
  }
  function statusMessage(title, body) {
    notice.hidden = false;
    byId("results").hidden = true;
    byId("metrics").hidden = true;
    byId("exports").hidden = true;
    byId("result-title").textContent = "\u5DE5\u4F5C\u6D41\u8F93\u51FA";
    byId("provenance").textContent = "";
    byId("notice-title").textContent = title;
    byId("notice-body").textContent = body;
    hideFloatingInspector();
    dockActiveInspector = null;
    renderRailOverview();
    updateRightRailContext();
    stopGraphMotion?.();
    stopGraphMotion = void 0;
    observer?.disconnect();
  }
  function changeSpec(preserveDiscussion = false) {
    result = void 0;
    pipeline = void 0;
    draft = void 0;
    lastMetricValues = null;
    chainView = "idea";
    chainExpanded = false;
    if (preserveDiscussion !== true) monitor.reset();
    updateInput();
    setRunLabel(runLabel());
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
    syncCustomSelect(inputMode);
    syncCustomSelect(capacity);
    syncCustomSelect(example);
    notice.classList.toggle("busy", value);
    setRunLabel(value ? "\u6B63\u5728\u751F\u6210\u2026" : runLabel());
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
      chainExpanded = true;
      renderChain();
      statusMessage("\u6B63\u5728\u751F\u6210\u9700\u6C42\u89C4\u683C", "\u4F5C\u4E1A\u4E00 \xB7 \u5C06\u4EA7\u54C1\u60F3\u6CD5\u6574\u7406\u4E3A\u7F16\u53F7\u9700\u6C42\u548C\u9A8C\u6536\u6761\u4EF6\u3002");
      const data = await requestStage("requirements", { idea });
      pipeline.requirements = data.requirements;
      chainView = "requirements";
    }
    if (!pipeline.design) {
      runningStage = "design";
      chainExpanded = true;
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
      chainExpanded = true;
      renderChain();
      statusMessage("\u6B63\u5728\u5206\u89E3\u5F00\u53D1\u4EFB\u52A1", "PM Agent \u6B63\u5728\u6309\u8BBE\u8BA1\u89C4\u683C\u5206\u89E3\u6A21\u5757\u3001\u63A5\u53E3\u5951\u7EA6\u548C\u7F16\u7801\u4EFB\u52A1\u3002");
      draft = (await requestStage("decompose", { ...source, draftOnly: true })).plan;
    }
    runningStage = "tests";
    chainExpanded = true;
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
      setRunLabel(runLabel());
      renderChain();
    } catch (error) {
      byId("input-error").textContent = error instanceof SyntaxError ? "\u7ED3\u679C\u6587\u4EF6\u4E0D\u662F\u6709\u6548\u7684 JSON\u3002" : error.message;
    }
  });
  function show(data) {
    arrangement = schedule(data.plan, Number(capacity.value));
    result = data;
    selected = "";
    floatDocked = false;
    requirementFilter = "";
    chainExpanded = false;
    lastMetricValues = null;
    byId("result-title").textContent = result.plan.project;
    byId("provenance").textContent = (data.mode === "live" ? "\u73B0\u573A\u751F\u6210 \xB7 DeepSeek API" : "\u5DF2\u5BFC\u5165 DeepSeek \u7ED3\u679C") + " \xB7 " + data.model;
    notice.hidden = true;
    byId("results").hidden = false;
    byId("metrics").hidden = false;
    byId("exports").hidden = false;
    render();
    syncTabIndicator();
  }
  capacity.addEventListener("change", () => {
    updateInputSummary();
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
  var chainDrawer = byId("chain-drawer");
  chainDrawer?.addEventListener("transitionend", () => chainDrawer.classList.remove("is-animating"));
  function openChain(step, allowToggle = false) {
    if (step === "schedule") {
      chainExpanded = false;
      renderChain();
      openResults("graph");
      return;
    }
    if (allowToggle && chainExpanded && chainView === step && !runningStage) {
      chainExpanded = false;
      renderChain();
      return;
    }
    chainView = step;
    chainExpanded = true;
    renderChain();
    byId("chain-content").focus({ preventScroll: true });
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
    byId("chain-steps").replaceChildren(...steps.map(([id, label], index) => {
      const step = element("button");
      step.type = "button";
      step.disabled = !available[id];
      const isActive = chainExpanded && id === chainView;
      step.setAttribute("aria-pressed", String(isActive));
      step.setAttribute("aria-expanded", String(isActive));
      if (id === runningStage) step.classList.add("is-generating");
      const head = element("span", "", "chain-step-head");
      head.append(
        element("span", "0" + (index + 1), "chain-step-num"),
        element("span", id === runningStage ? "\u751F\u6210\u4E2D" : available[id] ? id === "idea" ? "\u539F\u59CB\u8F93\u5165" : "\u53EF\u67E5\u770B" : "\u5F85\u751F\u6210", "chain-step-state")
      );
      step.append(head, element("span", label), element("span", owners[id], "chain-owner"));
      step.addEventListener("click", () => openChain(id, true));
      return step;
    }));
    const drawer = byId("chain-drawer");
    if (drawer) {
      const isCollapsed = !chainExpanded;
      if (drawer.classList.contains("is-collapsed") !== isCollapsed) drawer.classList.add("is-animating");
      drawer.classList.toggle("is-collapsed", isCollapsed);
      drawer.setAttribute("aria-hidden", String(isCollapsed));
    }
    const drawerLabel = byId("chain-drawer-label");
    if (drawerLabel) drawerLabel.textContent = (stepLabels.get(chainView) ?? "\u9636\u6BB5\u4EA7\u7269") + " \xB7 \u9636\u6BB5\u4EA7\u7269\u8BE6\u60C5";
    if (!chainExpanded) return;
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
    floatDocked = false;
    openResults("graph");
    const node2 = byId("node-" + id);
    if (node2) {
      node2.scrollIntoView({ block: "nearest", inline: "center" });
      node2.focus({ preventScroll: true });
      requestAnimationFrame(() => positionFloatingNearNode(node2));
    }
  }
  function metrics() {
    for (const cancel of metricCleanups) cancel();
    metricCleanups = [];
    const tasks = result.plan.tasks;
    const runtime = monitor.getRuntime();
    const counts = Object.fromEntries(Object.keys(stateLabels).map((state) => [state, 0]));
    tasks.forEach((task) => counts[taskState(task.id, runtime, arrangement)]++);
    const statusCard = element("div", "", "metric metric-status");
    const statusHead = element("div", "", "metric-head");
    statusHead.append(element("span", "\u4EFB\u52A1\u72B6\u6001\u5206\u5E03", "metric-label"), element("span", "\u603B\u4EFB\u52A1", "metric-chip chip-indigo"));
    const totalEl = element("strong", tasks.length);
    statusCard.append(statusHead, totalEl);
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
    const compactCounts = [
      counts.done ? "\u5B8C\u6210" + counts.done : "",
      counts.waiting ? "\u7B49\u8865" + counts.waiting : "",
      counts.running ? "\u8FDB\u884C" + counts.running : "",
      counts.ready ? "\u5C31\u7EEA" + counts.ready : "",
      counts.failed ? "\u5931\u8D25" + counts.failed : "",
      counts.pending ? "\u5F85" + counts.pending : ""
    ].filter(Boolean).join(" \xB7 ") || "\u6682\u65E0";
    statusCard.append(stack, element("span", compactCounts, "metric-detail"));
    const requirementLinks = new Set(tasks.flatMap((task) => task.requirements));
    const tested = tasks.filter((task) => task.test || task.review).length;
    const parallelTasks = arrangement.rounds.filter((batch) => batch.length > 1).flat().length;
    const proportionCard = (value, total, label, chipText, chipClass, fillClass, detailText, prevPct) => {
      const card = element("div", "", "metric");
      const head = element("div", "", "metric-head");
      head.append(element("span", label, "metric-label"), element("span", chipText, "metric-chip " + chipClass));
      const percent = total ? Math.round(value / total * 100) : 0;
      const numEl = element("strong", percent + "%");
      card.append(head, numEl);
      const bar = element("span", "", "metric-bar");
      const fill = element("span", "", "metric-fill" + (fillClass ? " " + fillClass : ""));
      bar.append(fill);
      if (reducedMotion()) {
        fill.style.width = percent + "%";
      } else {
        fill.style.width = (prevPct ?? 0) + "%";
        requestAnimationFrame(() => {
          if (fill.isConnected) fill.style.width = percent + "%";
        });
      }
      bar.setAttribute("role", "img");
      bar.setAttribute("aria-label", value + " / " + total);
      card.append(bar, element("span", detailText, "metric-detail"));
      return { card, numEl, percent };
    };
    const reqTotal = result.plan.requirements.length;
    const reqMetric = proportionCard(
      requirementLinks.size,
      reqTotal,
      "\u9700\u6C42\u8986\u76D6\u7387",
      requirementLinks.size === reqTotal ? "\u5168\u5173\u8054" : "\u8986\u76D6",
      "chip-green",
      "metric-fill-green",
      requirementLinks.size + " / " + reqTotal + " \u9700\u6C42\u7ED1\u5B9A\u5B9E\u73B0\u4E0E\u6821\u9A8C",
      lastMetricValues?.reqPct
    );
    const parMetric = proportionCard(
      parallelTasks,
      tasks.length,
      "\u5E76\u884C\u6279\u6B21\u5360\u6BD4",
      "\u4E0A\u9650 " + arrangement.capacity,
      "chip-indigo",
      "",
      parallelTasks + " / " + tasks.length + " \u5904\u4E8E\u591A\u8282\u70B9\u5E76\u884C\u6CF3\u9053",
      lastMetricValues?.parPct
    );
    const testMetric = proportionCard(
      tested,
      tasks.length,
      "\u8D28\u68C0\u95ED\u73AF\u7387",
      "\u5355\u6D4B+\u8BC4\u5BA1",
      "chip-amber",
      "metric-fill-amber",
      tested + " / " + tasks.length + " \u9879\u4E3A\u6D4B\u8BD5\u4E0E\u8BC4\u5BA1\u95E8\u7981",
      lastMetricValues?.testPct
    );
    const strip = element("div", "", "metrics-strip");
    strip.append(statusCard, reqMetric.card, parMetric.card, testMetric.card);
    byId("metrics").replaceChildren(strip);
    if (lastMetricValues) {
      metricCleanups.push(
        animateNumber(totalEl, lastMetricValues.total, tasks.length, ""),
        animateNumber(reqMetric.numEl, lastMetricValues.reqPct, reqMetric.percent, "%"),
        animateNumber(parMetric.numEl, lastMetricValues.parPct, parMetric.percent, "%"),
        animateNumber(testMetric.numEl, lastMetricValues.testPct, testMetric.percent, "%")
      );
    }
    lastMetricValues = { total: tasks.length, reqPct: reqMetric.percent, parPct: parMetric.percent, testPct: testMetric.percent };
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
    card.dataset.role = task.role;
    const runtime = monitor.getRuntime();
    const state = taskState(task.id, runtime, arrangement);
    const affected = affectedIds.has(task.id);
    const stage = taskStage(task);
    const agent = agentForTask(task);
    const head = element("div", "", "task-head");
    head.append(statusBadge(state, stateLabels[state], { rollbackAffected: affected }));
    card.append(
      head,
      element("span", task.id + " \xB7 " + (stage === "\u7F16\u7801" ? "\u7F16\u7801 / " + task.role : stage) + " \xB7 " + task.requirements.join("\u3001"), "task-meta"),
      element("strong", task.title),
      element("span", agent.name, "task-agent")
    );
    if (full) {
      const specs = element("div", "", "task-specs");
      const addSpec = (key, val) => {
        const row = element("div", "", "task-spec-row");
        row.append(element("span", key, "spec-key"), element("span", val, "spec-val"));
        specs.append(row);
      };
      addSpec("\u804C\u8D23", agent.duty);
      addSpec("\u58F0\u660E\u8F93\u5165", task.inputs.join("\u3001") || "Design Spec");
      addSpec("\u4EA4\u4ED8", task.output);
      addSpec("\u9A8C\u6536", task.acceptance);
      if (result.pipeline) addSpec("\u8BBE\u8BA1\u6765\u6E90", task.designs.join("\u3001"));
      if (task.test) addSpec("\u6D4B\u8BD5\u5B9A\u4F4D\u8303\u56F4", task.test.targets.join("\u3001"));
      if (task.review) addSpec("\u8BC4\u5BA1\u5BF9\u5E94\u7F16\u7801", task.review.target);
      const added = arrangement.edges.filter((edge) => edge.to === task.id && !task.inputs.includes(edge.artifact));
      if (added.length) addSpec("\u7F16\u6392\u8865\u9F50\u8F93\u5165", added.map((edge) => edge.artifact).join("\u3001"));
      card.append(specs);
      if (task.test) card.append(...taskCases(task));
    }
    return card;
  }
  var codeTimer;
  var codeDialog = byId("code-dialog");
  var codeViewer = byId("code-viewer");
  var codeHScroll = codeViewer ? createNeuHScroll(codeViewer, "\u4EE3\u7801\u6A2A\u5411\u4F4D\u7F6E\u6ED1\u5757") : null;
  if (codeDialog && codeHScroll) codeDialog.append(codeHScroll.wrap);
  codeDialog?.addEventListener("close", () => {
    clearTimeout(codeTimer);
    codeTimer = void 0;
  });
  byId("gen-code").addEventListener("click", () => {
    const projectName = result ? result.plan.project : "\u5F53\u524D\u9879\u76EE";
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
    const codeEl = byId("code-content");
    clearTimeout(codeTimer);
    codeEl.textContent = "";
    if (!codeDialog.open) codeDialog.showModal();
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      codeEl.textContent = codeStr;
      codeHScroll?.sync();
      return;
    }
    let i = 0;
    function typeCode() {
      if (!codeDialog.open) return;
      if (i < codeStr.length) {
        codeEl.textContent += codeStr.slice(i, i + 5);
        i += 5;
        codeEl.parentElement.parentElement.scrollTop = codeEl.parentElement.parentElement.scrollHeight;
        codeTimer = setTimeout(typeCode, 10);
      } else {
        codeHScroll?.sync();
      }
    }
    typeCode();
  });
  function listTasks(affectedIds) {
    const filterBar = element("div", "", "trace-filter-bar");
    const pills = element("div", "", "trace-pills");
    pills.setAttribute("aria-label", "\u6309\u9700\u6C42\u7F16\u53F7\u7B5B\u9009\u4EFB\u52A1");
    const allPill = element("button", "\u5168\u90E8\u9700\u6C42", "trace-button");
    allPill.type = "button";
    pills.append(allPill);
    const matchStatus = element("div", "", "hint");
    matchStatus.setAttribute("role", "status");
    matchStatus.style.margin = "0";
    filterBar.append(pills, matchStatus);
    const activeBanner = element("div", "", "trace-active-banner");
    activeBanner.hidden = true;
    const table = element("details");
    table.open = false;
    table.append(element("summary", "\u9700\u6C42\u4E0E\u9A8C\u6536\u660E\u7EC6 \xB7 " + result.plan.requirements.length + " \u6761\uFF08\u53EF\u5C55\u5F00\u6216\u70B9\u4E0A\u65B9\u7F16\u53F7\u7B5B\u9009\uFF09"));
    const list = element("ul", "", "requirements");
    const taskList = element("div", "", "task-list");
    const pillButtons = /* @__PURE__ */ new Map();
    const detailButtons = /* @__PURE__ */ new Map();
    const reqById = new Map(result.plan.requirements.map((req) => [req.id, req]));
    function filter(id) {
      requirementFilter = id;
      allPill.setAttribute("aria-pressed", String(!id));
      for (const [reqId, button2] of pillButtons) button2.setAttribute("aria-pressed", String(id === reqId));
      for (const [reqId, button2] of detailButtons) button2.setAttribute("aria-pressed", String(id === reqId));
      const activeReq = id ? reqById.get(id) : void 0;
      activeBanner.hidden = !activeReq;
      if (activeReq) {
        activeBanner.replaceChildren(
          element("strong", activeReq.id + " \xB7 " + activeReq.text),
          element("span", "\u9A8C\u6536\u6807\u51C6\uFF1A" + activeReq.acceptance)
        );
      }
      const matches = result.plan.tasks.filter((task) => !id || task.requirements.includes(id));
      matchStatus.textContent = (id ? id + " \u5BF9\u5E94 " : "\u5168\u90E8 ") + matches.length + " \u9879\u4EFB\u52A1";
      taskList.replaceChildren(...matches.map((task, idx) => {
        const card = taskCard(task, true, false, affectedIds);
        card.classList.add("stagger-in");
        card.style.setProperty("--stagger", String(Math.min(idx, 8)));
        const locate = element("button", "\u5728\u4F9D\u8D56\u56FE\u4E2D\u67E5\u770B \u2192", "task-link");
        locate.type = "button";
        locate.addEventListener("click", () => locateGraphTask(task.id));
        card.append(locate);
        return card;
      }));
    }
    allPill.addEventListener("click", () => filter(""));
    for (const requirement of result.plan.requirements) {
      const pill = element("button", requirement.id, "trace-button");
      pill.type = "button";
      pill.setAttribute("aria-label", "\u6309\u9700\u6C42 " + requirement.id + " \u7B5B\u9009\u4EFB\u52A1");
      pill.addEventListener("click", () => filter(requirementFilter === requirement.id ? "" : requirement.id));
      pillButtons.set(requirement.id, pill);
      pills.append(pill);
      const item = element("li", "", "trace-row");
      const trace = element("button", requirement.id, "trace-button");
      trace.type = "button";
      trace.setAttribute("aria-label", "\u67E5\u770B " + requirement.id + " \u7684\u5173\u8054\u4EFB\u52A1");
      trace.addEventListener("click", () => filter(requirementFilter === requirement.id ? "" : requirement.id));
      detailButtons.set(requirement.id, trace);
      const description = element("div");
      description.append(element("strong", requirement.text), element("br"), element("span", "\u9A8C\u6536\uFF1A" + requirement.acceptance));
      item.append(trace, description);
      list.append(item);
    }
    table.append(list);
    view.append(filterBar, activeBanner, table, taskList);
    filter(requirementFilter);
  }
  function showRounds(tasksById, affectedIds) {
    const depths = taskDepths(arrangement.dependencies);
    const chain = criticalChain(arrangement.dependencies, depths);
    const causality = new Map(rollbackCausality(monitor.getRuntime()).map((item) => [item.taskId, item]));
    const chainBatches = new Set(chain.map((id) => arrangement.rounds.findIndex((batch) => batch.includes(id))));
    view.append(element("p", "\u5F53\u524D\u6BCF\u6279\u6700\u591A " + arrangement.capacity + " \u9879\u3002\u4F9D\u8D56\u6DF1\u5EA6\u6700\u957F\u94FE\u8986\u76D6 " + chainBatches.size + " \u4E2A\u6279\u6B21\u3002", "hint"));
    arrangement.rounds.forEach((ids, index) => {
      const block = element("div", "", "round-block stagger-in");
      block.style.setProperty("--stagger", String(Math.min(index, 8)));
      const round = element("section", "", "round");
      const head = element("div", "", "round-head");
      head.append(element("h3", "\u7B2C " + (index + 1) + " \u6279 \xB7 " + ids.length + " \u9879"));
      if (chainBatches.has(index)) head.append(element("span", "\u5173\u952E\u8DEF\u5F84", "round-critical-pill"));
      const tasks = element("div", "", "task-list");
      const cards = ids.map((id) => {
        const card = taskCard(tasksById.get(id), false, false, affectedIds);
        if (chain.includes(id)) card.classList.add("critical-task");
        const record = monitor.getRuntime()[id];
        if ((record?.attempts ?? 0) > 1) card.append(element("p", "\u91CD\u8DD1\u6B21\u6570\uFF1A" + record.attempts, "batch-attempts"));
        const rollback = causality.get(id);
        if (rollback) card.append(element("p", "\u56DE\u9000\u56E0\u679C\uFF1A\u68C0\u67E5\u70B9 " + rollback.checkpoint + " \u5931\u8D25\uFF0C\u76EE\u6807\u5B9E\u73B0 " + rollback.target + "\uFF1B\u9700\u91CD\u9A8C\uFF1A" + (rollback.invalidated.join("\u3001") || "\u65E0"), "batch-causality"));
        card.append(element("p", "\u524D\u7F6E\u4EFB\u52A1\uFF1A" + (arrangement.dependencies[id].join("\u3001") || "\u65E0")));
        return card;
      });
      tasks.append(...cards);
      round.append(head, tasks);
      const hScroll = createNeuHScroll(tasks, "\u7B2C " + (index + 1) + " \u6279\u6A2A\u5411\u4F4D\u7F6E\u6ED1\u5757");
      viewCleanups.push(hScroll.destroy);
      block.append(round, hScroll.wrap);
      view.append(block);
      requestAnimationFrame(() => hScroll.sync());
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
    const controls = element("div", "", "graph-controls");
    const controlsTop = element("div", "", "graph-controls-top");
    const layouts = element("div", "", "graph-layouts soft-toggle");
    layouts.setAttribute("aria-label", "\u4F9D\u8D56\u56FE\u5E03\u5C40");
    const layoutThumb = element("span", "", "pill-thumb");
    layoutThumb.setAttribute("aria-hidden", "true");
    layouts.append(layoutThumb);
    for (const [id, label] of [["horizontal", "\u6A2A\u5411\u4F9D\u8D56\u56FE"], ["vertical", "\u7EB5\u5411\u6267\u884C\u6D41\u7A0B"]]) {
      const toggle = element("button", label);
      toggle.type = "button";
      toggle.dataset.layout = id;
      toggle.setAttribute("aria-pressed", String(id === graphLayout));
      toggle.addEventListener("click", () => {
        if (graphLayout === id) return;
        graphLayout = id;
        render();
        view.querySelector('[data-layout="' + id + '"]')?.focus({ preventScroll: true });
      });
      layouts.append(toggle);
    }
    const viewportTools = element("div", "", "graph-viewport-tools");
    const zoom = { scale: 1, target: 1, velocity: 0 };
    let zoomRaf = 0;
    let panRaf = 0;
    let pulseRaf = 0;
    let pulseOrigin = performance.now();
    let lastPulseRoutes = [];
    const rangeWrap = element("div", "", "range");
    rangeWrap.setAttribute("aria-label", "\u4F9D\u8D56\u56FE\u7F29\u653E\u6ED1\u5757");
    const rangeLabel = element("span", "\u753B\u5E03\u7F29\u653E", "range-label");
    const rangeTrack = element("div", "", "track");
    rangeTrack.tabIndex = 0;
    rangeTrack.setAttribute("role", "slider");
    rangeTrack.setAttribute("aria-valuemin", "40");
    rangeTrack.setAttribute("aria-valuemax", "200");
    rangeTrack.setAttribute("aria-valuenow", "100");
    rangeTrack.setAttribute("aria-label", "\u7F29\u653E\u6BD4\u4F8B");
    const rangeFill = element("div", "", "fill");
    const rangeKnob = element("div", "", "knob");
    rangeTrack.append(rangeFill, rangeKnob);
    const zoomReadout = element("div", "100%", "val zoom-readout");
    zoomReadout.setAttribute("aria-live", "polite");
    rangeWrap.append(rangeLabel, rangeTrack, zoomReadout);
    let graphHScroll;
    const commitZoomScale = (scale) => {
      if (!natural.width) {
        natural.width = graph.offsetWidth;
        natural.height = graph.offsetHeight;
      }
      zoom.scale = scale;
      const size = scaledSize(natural, scale);
      graph.style.transform = scale === 1 ? "" : "scale(" + scale + ")";
      stage.style.width = scale === 1 ? "" : size.width + "px";
      stage.style.height = scale === 1 ? "" : size.height + "px";
      const pct = Math.max(0, Math.min(1, (scale - 0.4) / 1.6));
      rangeFill.style.width = pct * 100 + "%";
      rangeKnob.style.left = pct * 100 + "%";
      const pctInt = Math.round(scale * 100);
      zoomReadout.textContent = pctInt + "%";
      rangeTrack.setAttribute("aria-valuenow", String(pctInt));
      const phase = pulseRaf ? (performance.now() - pulseOrigin) / 2100 % 1 : null;
      draw(phase);
      graphHScroll?.sync();
    };
    const applyZoom = (scale, immediate = false) => {
      const clamped = clampScale(scale);
      zoom.target = clamped;
      if (immediate || reducedMotion()) {
        cancelAnimationFrame(zoomRaf);
        zoomRaf = 0;
        zoom.velocity = 0;
        commitZoomScale(clamped);
        return;
      }
      if (zoomRaf) return;
      let lastTime = performance.now();
      const tickZoom = (now) => {
        if (!graph.isConnected) {
          zoomRaf = 0;
          return;
        }
        const dt = (now - lastTime) / 1e3;
        lastTime = now;
        const next = stepSpring(
          { value: zoom.scale, target: zoom.target, velocity: zoom.velocity },
          dt,
          { stiffness: 300, damping: 32, precision: 5e-4 }
        );
        zoom.velocity = next.velocity;
        commitZoomScale(next.value);
        if (!next.settled) zoomRaf = requestAnimationFrame(tickZoom);
        else zoomRaf = 0;
      };
      zoomRaf = requestAnimationFrame(tickZoom);
    };
    let sliderDragging = false;
    const zoomFromClientX = (clientX) => {
      const rect = rangeTrack.getBoundingClientRect();
      const pct = Math.max(0, Math.min(1, (clientX - rect.left) / Math.max(1, rect.width)));
      applyZoom(0.4 + pct * 1.6, true);
    };
    rangeTrack.addEventListener("pointerdown", (e) => {
      sliderDragging = true;
      rangeWrap.classList.add("is-dragging");
      rangeTrack.setPointerCapture(e.pointerId);
      zoomFromClientX(e.clientX);
    });
    rangeTrack.addEventListener("pointermove", (e) => {
      if (sliderDragging) zoomFromClientX(e.clientX);
    });
    const stopSliderDrag = () => {
      sliderDragging = false;
      rangeWrap.classList.remove("is-dragging");
    };
    rangeTrack.addEventListener("pointerup", stopSliderDrag);
    rangeTrack.addEventListener("pointercancel", stopSliderDrag);
    rangeTrack.addEventListener("keydown", (e) => {
      if (e.key === "ArrowLeft" || e.key === "ArrowDown") {
        e.preventDefault();
        applyZoom(zoom.target - 0.1);
      }
      if (e.key === "ArrowRight" || e.key === "ArrowUp") {
        e.preventDefault();
        applyZoom(zoom.target + 0.1);
      }
    });
    const fit = element("button", "\u9002\u5E94\u7A97\u53E3");
    fit.type = "button";
    fit.setAttribute("aria-label", "\u9002\u5E94\u7A97\u53E3");
    fit.addEventListener("click", () => {
      applyZoom(fitScale(natural, { width: scroll.clientWidth, height: scroll.clientHeight }));
      fit.focus();
    });
    const edgeLegend = element("div", "", "graph-edge-legend");
    edgeLegend.setAttribute("aria-label", "\u4F9D\u8D56\u8FDE\u7EBF\u56FE\u4F8B");
    for (const [cls, label] of [
      ["edge-swatch-up", "\u524D\u7F6E\u4F9D\u8D56"],
      ["edge-swatch-down", "\u540E\u7EED\u4EFB\u52A1"],
      ["edge-swatch-rb", "\u5931\u8D25\u53EF\u56DE\u9000"]
    ]) {
      const key = element("span", "", "edge-key");
      key.append(element("span", "", "edge-swatch " + cls), document.createTextNode(label));
      edgeLegend.append(key);
    }
    viewportTools.append(rangeWrap, fit);
    controlsTop.append(layouts, viewportTools);
    const toolbar = element("div", "", "graph-toolbar");
    const explanation = element("p", "", "hint");
    explanation.setAttribute("role", "status");
    const reset = element("button", "\u8FD4\u56DE\u603B\u89C8");
    reset.type = "button";
    toolbar.append(explanation, edgeLegend, reset);
    controls.append(controlsTop, toolbar);
    view.append(controls);
    requestAnimationFrame(() => syncPillThumb(layouts));
    const scroll = element("div", "", "graph-scroll");
    scroll.tabIndex = 0;
    scroll.setAttribute("aria-label", vertical ? "\u6309\u6267\u884C\u6279\u6B21\u4ECE\u4E0A\u5230\u4E0B\u7684\u6D41\u7A0B\u56FE" : "\u53EF\u6A2A\u5411\u6EDA\u52A8\u7684\u4EFB\u52A1\u4F9D\u8D56\u56FE");
    const stage = element("div", "", "graph-stage");
    const graph = element("div", "", vertical ? "graph graph-inner graph-vertical" : "graph graph-inner");
    const natural = { width: 0, height: 0 };
    graph.style.transformOrigin = "top left";
    const canvas = element("canvas");
    canvas.setAttribute("aria-hidden", "true");
    stage.append(graph, canvas);
    scroll.append(stage);
    scroll.addEventListener("wheel", (event) => {
      if (!event.ctrlKey) return;
      event.preventDefault();
      applyZoom(zoom.target * (event.deltaY < 0 ? 1.1 : 0.9));
    }, { passive: false });
    let dragging = false;
    let spaceHeld = false;
    let lastX = 0;
    let lastY = 0;
    let lastMoveTime = 0;
    let panVx = 0;
    let panVy = 0;
    scroll.addEventListener("keydown", (event) => {
      if (event.code === "Space" && !event.target.matches("button, input, select, textarea, a")) {
        spaceHeld = true;
        event.preventDefault();
      }
    });
    scroll.addEventListener("keyup", (event) => {
      if (event.code === "Space") spaceHeld = false;
    });
    scroll.addEventListener("pointerdown", (event) => {
      if (event.button !== 1 && !spaceHeld) return;
      cancelAnimationFrame(panRaf);
      panRaf = 0;
      dragging = true;
      lastX = event.clientX;
      lastY = event.clientY;
      lastMoveTime = performance.now();
      panVx = panVy = 0;
      scroll.setPointerCapture(event.pointerId);
      event.preventDefault();
    });
    scroll.addEventListener("pointermove", (event) => {
      if (!dragging) return;
      const now = performance.now();
      const dt = Math.max(4e-3, (now - lastMoveTime) / 1e3);
      const dx = event.clientX - lastX;
      const dy = event.clientY - lastY;
      scroll.scrollLeft -= dx;
      scroll.scrollTop -= dy;
      panVx = panVx * 0.45 + -dx / dt * 0.55;
      panVy = panVy * 0.45 + -dy / dt * 0.55;
      lastX = event.clientX;
      lastY = event.clientY;
      lastMoveTime = now;
      event.preventDefault();
    });
    let dragged = false;
    scroll.addEventListener("pointerup", (event) => {
      if (!dragging) return;
      dragging = false;
      dragged = true;
      scroll.releasePointerCapture(event.pointerId);
      event.preventDefault();
      if (reducedMotion() || Math.hypot(panVx, panVy) < 40) return;
      let prev = performance.now();
      const glide = (now) => {
        if (!scroll.isConnected || dragging) {
          panRaf = 0;
          return;
        }
        const dt = Math.min(0.032, (now - prev) / 1e3);
        prev = now;
        const decay = Math.exp(-8.5 * dt);
        panVx *= decay;
        panVy *= decay;
        scroll.scrollLeft += panVx * dt;
        scroll.scrollTop += panVy * dt;
        if (Math.hypot(panVx, panVy) >= 14) panRaf = requestAnimationFrame(glide);
        else panRaf = 0;
      };
      panRaf = requestAnimationFrame(glide);
    });
    scroll.addEventListener("click", (event) => {
      if (dragged) {
        dragged = false;
        event.preventDefault();
        event.stopPropagation();
      }
    }, true);
    const breadcrumb = element("nav", "", "graph-breadcrumb");
    breadcrumb.setAttribute("aria-label", "\u4F9D\u8D56\u56FE\u7126\u70B9\u8DEF\u5F84");
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
    function draw(pulsePhase = null) {
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
        const left = endOf(columns[index].getBoundingClientRect()) + 8 * zoom.scale;
        const right = begin(columns[index + 1].getBoundingClientRect()) - 10 * zoom.scale;
        tracks.sort((a, b) => a.order - b.order || a.route.y1 - b.route.y1 || a.route.y2 - b.route.y2);
        tracks.forEach(({ route, key }, lane) => {
          route[key] = left + (right - left) * (lane + 1) / (tracks.length + 1);
        });
      });
      const rows = [];
      const laneStart = Math.max(...columns.map((column) => acrossEnd((vertical ? column : column.lastElementChild).getBoundingClientRect()))) + 18 * zoom.scale;
      longRoutes.sort((a, b) => a.start.batch - b.start.batch || a.end.batch - b.end.batch);
      for (const route of longRoutes) {
        let row = rows.findIndex((end) => end < route.start.batch);
        if (row === -1) row = rows.length;
        rows[row] = route.end.batch;
        route.floor = laneStart + row * 11 * zoom.scale;
      }
      const returns = vertical && selected ? rollbackTargets(tasksById.get(selected)) : [];
      const padProp = vertical ? "paddingRight" : "paddingBottom";
      const targetPad = 26 + (rows.length + returns.length) * 11 + "px";
      if (graph.style[padProp] !== targetPad) graph.style[padProp] = targetPad;
      natural.width = graph.offsetWidth;
      natural.height = graph.offsetHeight;
      if (zoom.scale !== 1) {
        const size = scaledSize(natural, zoom.scale);
        stage.style.width = size.width + "px";
        stage.style.height = size.height + "px";
      }
      const ratio = window.devicePixelRatio || 1;
      const targetW = Math.ceil(stage.clientWidth * ratio);
      const targetH = Math.ceil(stage.clientHeight * ratio);
      if (canvas.width !== targetW) {
        canvas.width = targetW;
        canvas.style.width = stage.clientWidth + "px";
      }
      if (canvas.height !== targetH) {
        canvas.height = targetH;
        canvas.style.height = stage.clientHeight + "px";
      }
      const context = canvas.getContext("2d");
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      context.clearRect(0, 0, stage.clientWidth, stage.clientHeight);
      context.lineJoin = "round";
      const position = ([along, across]) => vertical ? [across, along] : [along, across];
      function drawRoute(points, color, dashed = false) {
        const [along, across] = points.at(-1);
        const direction = Math.sign(along - points.at(-2)[0]);
        context.strokeStyle = context.fillStyle = color;
        context.lineWidth = 1.65;
        context.setLineDash(dashed ? [5, 4] : []);
        context.beginPath();
        const mapped = points.map(position);
        context.moveTo(mapped[0][0], mapped[0][1]);
        for (let i = 1; i < mapped.length - 1; i++) {
          const [x0, y0] = mapped[i - 1];
          const [x1, y1] = mapped[i];
          const [x2, y2] = mapped[i + 1];
          const r = Math.min(6 * zoom.scale, Math.hypot(x1 - x0, y1 - y0) / 2, Math.hypot(x2 - x1, y2 - y1) / 2);
          if (r > 0.5) context.arcTo(x1, y1, x2, y2, r);
          else context.lineTo(x1, y1);
        }
        const [lastX2, lastY2] = mapped.at(-1);
        context.lineTo(lastX2, lastY2);
        context.stroke();
        context.setLineDash([]);
        context.beginPath();
        context.moveTo(...position([along, across]));
        context.lineTo(...position([along - direction * 6.5, across - 4]));
        context.lineTo(...position([along - direction * 6.5, across + 4]));
        context.fill();
      }
      lastPulseRoutes = [];
      for (const { edge, start, end, y1, y2, out, in: entry, floor } of routes) {
        const points = [[start.right, y1], [out, y1]];
        if (floor !== void 0) points.push([out, floor], [entry, floor], [entry, y2]);
        else points.push([out, y2]);
        points.push([end.left - 2, y2]);
        const baseColor = edge.to === selected ? pulsePhase !== null ? "rgba(59, 130, 246, 0.55)" : "#3b82f6" : pulsePhase !== null ? "rgba(79, 70, 229, 0.36)" : "#4f46e5";
        drawRoute(points, baseColor);
        if (selected) lastPulseRoutes.push({ points, rgb: edge.to === selected ? "59, 130, 246" : "79, 70, 229" });
      }
      returns.forEach((id, index) => {
        const from = nodes.get(selected);
        const to = nodes.get(id);
        const lane = laneStart + (rows.length + index) * 11 * zoom.scale;
        const leave = endOf(columns[from.batch].getBoundingClientRect()) + (16 + index * 4) * zoom.scale;
        const enter = endOf(columns[to.batch].getBoundingClientRect()) + 19 * zoom.scale;
        const points = [
          [from.right, from.middle + 6],
          [leave, from.middle + 6],
          [leave, lane],
          [enter, lane],
          [enter, to.middle + 6],
          [to.right + 3, to.middle + 6]
        ];
        drawRoute(points, pulsePhase !== null ? "rgba(181, 103, 38, 0.45)" : "#b56726", true);
        if (selected) lastPulseRoutes.push({ points, rgb: "79, 70, 229" });
      });
      if (pulsePhase !== null && selected && !reducedMotion()) {
        for (const { points, rgb } of lastPulseRoutes) {
          drawBeamAlongPolyline(context, points, pulsePhase, { position, tailLen: 0.28, color: rgb });
        }
      }
    }
    function stopPulse() {
      cancelAnimationFrame(pulseRaf);
      pulseRaf = 0;
      scroll.dataset.pulseActive = "false";
    }
    function startPulse() {
      if (!selected || reducedMotion() || document.hidden || byId("workspace").hidden) {
        stopPulse();
        return;
      }
      if (pulseRaf) return;
      scroll.dataset.pulseActive = "true";
      const stepPulse = (now) => {
        if (!selected || reducedMotion() || document.hidden || !graph.isConnected || byId("workspace").hidden) {
          stopPulse();
          return;
        }
        if (!zoomRaf) draw((now - pulseOrigin) / 2100 % 1);
        pulseRaf = requestAnimationFrame(stepPulse);
      };
      pulseRaf = requestAnimationFrame(stepPulse);
    }
    const onVisibilityChange = () => {
      if (document.hidden) stopPulse();
      else startPulse();
    };
    document.addEventListener("visibilitychange", onVisibilityChange);
    stopGraphMotion = () => {
      cancelAnimationFrame(zoomRaf);
      cancelAnimationFrame(panRaf);
      zoomRaf = panRaf = 0;
      stopPulse();
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
    function select(id, { openFloat = !floatDocked } = {}) {
      selected = id;
      graphArea.classList.toggle("has-selection", Boolean(id));
      for (const [taskId, button2] of buttons) button2.setAttribute("aria-pressed", String(id === taskId));
      reset.hidden = !id;
      if (!id) {
        floatDocked = false;
        dockActiveInspector = null;
        hideFloatingInspector();
        breadcrumb.replaceChildren();
        const hidden = arrangement.edges.length - overview.length;
        explanation.textContent = parallel + " \u6279\u542B\u5E76\u884C\u4EFB\u52A1\u3002\u603B\u89C8\u663E\u793A " + overview.length + " \u6761\u8FDE\u7EBF\u3002" + (hidden ? "\u53E6\u6709 " + hidden + " \u6761\u53EF\u901A\u8FC7\u4E2D\u95F4\u4EFB\u52A1\u8FFD\u6EAF\u3002" : "") + "\u70B9\u51FB\u4EFB\u52A1\u5C0F\u5361\u53EF\u5728\u65C1\u60AC\u6D6E\u68C0\u89C6\u8BE6\u60C5\u3002";
        detail.replaceChildren();
        updateRightRailContext();
        stopPulse();
        draw();
        return;
      }
      const count = arrangement.edges.filter((edge) => edge.from === id || edge.to === id).length;
      explanation.textContent = id + " \u7684 " + count + " \u6761\u8FDE\u7EBF \xB7 \u84DD\u8272\u4E3A\u524D\u7F6E\u4F9D\u8D56\uFF0C\u975B\u84DD\u6307\u5411\u540E\u7EED\u4EFB\u52A1\u3002";
      const task = tasksById.get(id);
      const card = taskCard(task, true, false, affectedIds);
      const upstream = transitiveUpstream(id, arrangement.dependencies);
      const downstream = transitiveDownstream(id, arrangement.edges);
      const buildBreadcrumb = () => {
        const nav = element("nav", "", "graph-breadcrumb");
        nav.setAttribute("aria-label", "\u4F9D\u8D56\u56FE\u7126\u70B9\u8DEF\u5F84");
        const root = element("button", "\u603B\u89C8", "task-link");
        root.type = "button";
        root.addEventListener("click", () => select(""));
        nav.append(root);
        for (const item of focusBreadcrumb(id, arrangement.dependencies).slice(0, -1)) {
          const itemId = typeof item === "string" ? item : item.id;
          const link = element("button", itemId, "task-link");
          link.type = "button";
          link.addEventListener("click", () => {
            select(itemId, { openFloat: !floatDocked });
            buttons.get(itemId)?.scrollIntoView({ block: "nearest", inline: "center" });
          });
          nav.append(element("span", " / "), link);
        }
        nav.append(element("span", " / " + id));
        return nav;
      };
      const chainEl = element("div", "", "graph-chain");
      const levels = (items) => groupByDepth(items).map(([depth, ids]) => "\u7B2C " + depth + " \u5C42 " + ids.join("\u3001")).join(" \uFF0F ") || "\u65E0";
      chainEl.append(element("p", "\u4E0A\u6E38\uFF1A" + levels(upstream)), element("p", "\u4E0B\u6E38\uFF1A" + levels(downstream)));
      const buildOpenExecution = (className, text2) => {
        const btn = element("button", text2, className);
        btn.type = "button";
        btn.addEventListener("click", () => {
          openResults("execution");
          const item = byId("execution-" + id);
          item.scrollIntoView({ block: "start" });
          item.focus({ preventScroll: true });
        });
        return btn;
      };
      let rollbackEl = null;
      const targets = rollbackTargets(task);
      if (targets.length) {
        if (vertical) explanation.textContent += " \u6A59\u8272\u865A\u7EBF\u8868\u793A\u5931\u8D25\u65F6\u53EF\u56DE\u9000\u7684\u7F16\u7801\u3002";
        rollbackEl = element("div", "", "graph-rollback");
        rollbackEl.append(element("h3", "\u5931\u8D25\u56DE\u9000", "dependency-heading"));
        for (const target of targets) {
          const change = rollbackScope(target, arrangement);
          rollbackEl.append(element("p", target + " \xB7 " + tasksById.get(target).title + " \xB7 \u5F71\u54CD " + change.length + " \u9879\u540E\u7EED\u4EFB\u52A1"));
        }
      }
      const relationNodes = [];
      for (const [caption, here, other] of [
        ["\u524D\u7F6E\u4EFB\u52A1", "to", "from"],
        ["\u540E\u7EED\u4EFB\u52A1", "from", "to"]
      ]) {
        relationNodes.push(element("h3", caption, "dependency-heading"));
        const edges = arrangement.edges.filter((edge) => edge[here] === id);
        if (!edges.length) {
          relationNodes.push(element("p", "\u65E0"));
          continue;
        }
        const relations = element("ul", "", "dependency-list");
        for (const edge of edges) {
          const neighbor = tasksById.get(edge[other]);
          const button2 = element("button", neighbor.id + " \xB7 " + neighbor.title, "task-link");
          button2.type = "button";
          button2.addEventListener("click", () => {
            const node2 = buttons.get(neighbor.id);
            select(neighbor.id, { openFloat: !floatDocked });
            node2?.scrollIntoView({ block: "nearest", inline: "center" });
            node2?.focus({ preventScroll: true });
          });
          const item = element("li");
          item.append(button2, element("span", edgeReason(edge, tasksById.get(edge.to))));
          relations.append(item);
        }
        relationNodes.push(relations);
      }
      if (openFloat && floatingEl && floatingHead && floatingBody) {
        floatDocked = false;
        const cols = element("div", "", "floating-insp-cols");
        const leftCol = element("div", "", "floating-col");
        const rightCol = element("div", "", "floating-col");
        leftCol.append(card);
        rightCol.append(
          chainEl,
          ...rollbackEl ? [rollbackEl] : [],
          ...relationNodes,
          buildOpenExecution("floating-exec-btn", "\u6253\u5F00\u6B64\u8282\u70B9\u7684\u6267\u884C\u4E0E\u4EA4\u4E92 \u2192")
        );
        cols.append(leftCol, rightCol);
        floatingHead.textContent = "\u8282\u70B9\u68C0\u89C6 \xB7 " + id;
        floatingBody.replaceChildren(buildBreadcrumb(), cols);
        const targetBtn = buttons.get(id);
        positionFloatingNearNode(targetBtn);
        requestAnimationFrame(() => {
          if (!floatingEl.hidden && selected === id) positionFloatingNearNode(targetBtn);
        });
        dockActiveInspector = () => {
          floatDocked = true;
          select(id, { openFloat: false });
        };
        updateRightRailContext(id, null, { floating: true, title: id + " \xB7 " + task.title });
      } else {
        floatDocked = true;
        hideFloatingInspector();
        dockActiveInspector = null;
        breadcrumb.replaceChildren(...buildBreadcrumb().childNodes);
        card.append(chainEl, buildOpenExecution("task-link", "\u6253\u5F00\u6B64\u8282\u70B9\u7684\u6267\u884C\u4E0E\u4EA4\u4E92"));
        if (rollbackEl) card.append(rollbackEl);
        card.append(...relationNodes);
        detail.replaceChildren(card);
        updateRightRailContext(id, inspector, {
          floating: false,
          onReopen: () => {
            floatDocked = false;
            select(id, { openFloat: true });
          }
        });
      }
      pulseOrigin = performance.now();
      draw(reducedMotion() ? null : 0);
      startPulse();
    }
    orderedRounds.forEach((ids, index) => {
      const column = element("section", "", "column");
      const batchLabel = element("h3", "\u7B2C " + (index + 1) + " \u6279");
      if (ids.length > 1) batchLabel.append(element("span", vertical ? ids.length + " \u9879\u53EF\u5E76\u884C" : ids.length + " \u9879"));
      column.append(batchLabel);
      for (const id of ids) {
        const button2 = taskCard(tasksById.get(id), false, true, affectedIds);
        button2.id = "node-" + id;
        button2.type = "button";
        button2.setAttribute("aria-pressed", "false");
        button2.addEventListener("click", () => {
          if (selected === id && floatDocked) {
            floatDocked = false;
            select(id, { openFloat: true });
          } else if (selected === id) {
            select("");
          } else {
            floatDocked = false;
            select(id, { openFloat: true });
          }
        });
        buttons.set(id, button2);
        column.append(button2);
      }
      graph.append(column);
      columns.push(column);
    });
    const inspector = element("div", "", "graph-inspector");
    inspector.append(breadcrumb, detail);
    graphHScroll = createNeuHScroll(scroll, "\u4F9D\u8D56\u56FE\u6A2A\u5411\u4F4D\u7F6E\u6ED1\u5757");
    viewCleanups.push(graphHScroll.destroy);
    const graphScrollShell = element("div", "", "graph-scroll-shell");
    graphScrollShell.append(scroll, graphHScroll.wrap);
    graphArea.append(graphScrollShell);
    view.append(graphArea);
    natural.width = graph.offsetWidth;
    natural.height = graph.offsetHeight;
    reset.addEventListener("click", () => {
      const node2 = buttons.get(selected);
      select("");
      node2?.focus({ preventScroll: true });
    });
    select(selected);
    requestAnimationFrame(() => graphHScroll?.sync());
    observer?.disconnect();
    observer = new ResizeObserver(() => {
      draw(pulseRaf ? (performance.now() - pulseOrigin) / 2100 % 1 : null);
      graphHScroll?.sync();
    });
    observer.observe(graph);
  }
  function render() {
    stopGraphMotion?.();
    stopGraphMotion = void 0;
    hideFloatingInspector();
    dockActiveInspector = null;
    for (const cleanup of viewCleanups) cleanup();
    viewCleanups = [];
    observer?.disconnect();
    tabs.forEach((button2) => button2.setAttribute("aria-pressed", String(active === button2.dataset.view)));
    syncTabIndicator();
    view.replaceChildren();
    updateRightRailContext();
    renderRailOverview();
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
  for (const id of ["workspace", "workspace-nav", "mast-actions", "flow", "app-foot"]) byId(id).hidden = false;
  byId("legend-slot")?.replaceChildren(statusLegend(stateLabels));
  initFloatingInspectorControls();
  renderRailActivity([]);
  syncTabIndicator();
  changeSpec();
  void checkStatus();
})();
