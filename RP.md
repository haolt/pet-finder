## Introduction
Trong quá trình phát triển phần mềm, song song với mong muốn sản phẩm của `team` có một trải nghiệm người dùng tốt luôn kèm theo các vấn đề như tốc độ `load` các tài nguyên quá chậm, thời gian chờ khởi tạo quá lâu vì phải chờ một số nộ dung không cần thiết, rồi thì là hiện tượng `FOUC` *(flash of unstyled content)* khi `styles` chưa sẵn sàng, vân vân & mây mây... 🥴🥴 

Để có thể hạn chế những vấn đề trên, chúng ta cần hiểu về quá trình rendering của browser đối với một web page.

*Trong bài viết này chúng ta sẽ cùng nhau đi trả lời câu hỏi trên nhé ^^*

*Bắt đầu thôi !*
## Rendering process

Khi `browser` gửi `request` tới `server` để `fetch` một `HTML file`, `server` sẽ trả về một `HTML page` dưới dạng `binary stream format` - một `text file` với `response` trên `header`:

```js
Content-Type: 'text/html'; // MIME Type
Charset='UTF-8'; // UTF-8 character encoding
```

<br/>

Bạn có thể xem qua trên tab `Network` trên cửa sổ `Console`: 

![](https://miro.medium.com/max/2000/1*Tm-HPhmGA0BL7HIj38H8Qw.png)

Nếu phần header không có thông tin này, browser sẽ không hiểu cách xử lý file vừa tải về như thế nào và nó sẽ hiển thị ở định dạng văn bản thuần túy.

Còn nếu mọi thứ đều ổn, từ các thông tin này, `browser` có thể `convert` `binary format` sang `text file` có thể đọc được. Từ đây, nó có thể bắt đầu đọc HTML file.

Vẫn biết mỗi `browsers` khác nhau đều có những cơ chế hoạt động khác nhau, song, sơ đồ dưới đây mô tả một cách chung nhất quá trình `rendering` khi chúng `compile` các `source code HTML/CSS` từ trên `server` xuống `client`:

![](https://www.phpied.com/files/reflow/render.png)

*Bây giờ, chúng mình cùng nhau điểm qua từng giai đoạn nhé !*

### DOM tree
`Browser` sẽ đọc toàn bộ các thẻ trong `HTML source code` rồi sau đó xây dựng một `DOM tree`.

`DOM` là viết tắt của `Document Object Model`.
- Mỗi `HTML tag` tương ứng với một `node` trong `DOM Tree`.
- Mỗi `text` bên trong `HTML tag` sẽ tương ứng với một `text node`.
- `Root node` trong `DOM tree` là một `documentElement` *(`<html> tag`)*.

<br/>

![](https://miro.medium.com/max/1040/1*YSA8lCfCVPn3d6GWAVokrA.png)

<br/>

*Bạn có thể đọc thêm về `DOM` [**tại đây**](https://haodev.wordpress.com/2019/06/21/original-dom-vs-shadow-dom-vs-virtual-dom/) nhé.*

**Vậy nếu `file HTML` có mỗi thẻ `<h1>DevNotes</h1>` thì `DOM Tree` chỉ có `một-node-duy-nhất` là `h1` thôi đúng không ?**

Thử tạo một file sau đó kiểm tra thử trên `Google Chrome DevTools Console` trong tab `element `. This will show you the hierarchy of DOM elements (a high-level view of DOM tree) with properties of each DOM element.

### CSSOM Tree
Trong giai đoạn này, `browser` sẽ đọc toàn bộ `CSS source code`, ignore một số dòng code nó không hiểu đi *(ví dụ như với các `prefix` của các trình duyệt khác `browser` hiện tại như `-moz`, `-webkit`, `-o`, etc)*. Sau đó, các `element node` sẽ được xác định áp dụng `styles` như thế nào dựa vào tính chất `specificity & cascades` trong `CSS`, dựa vào đây sẽ tạo ra `CSSOM tree` *(style structure)* tương ứng.

### Render tree
*Okay*,

Sau khi đã có `DOM Tree` và `CSSOM tree`, `browser` sẽ `combine` chúng lại thành một `Render tree`. `Render tree` sẽ bao gồm các `nodes`, `text nodes` và các `styles` tương ứng.

Mỗi `node` trên `render tree` thường được gọi là mỗi `frame` hoặc `box` *(cũng có thể xem như một `CSS box` và tuân theo `box model`)*.

Từ đây, `browser` sẽ `paint` (`draw`) các `nodes` của `Render tree` lên màn hình.

*Như vậy thì `DOM tree` và `Render tree` có gì khác không? Cùng nhau so sánh nhé !*

### DOM Tree vs. Render Tree

Nhìn vào sơ đồ trên thì có thể nhận ra được luôn rằng một cái chưa áp dụng `styles` và một cái là áp dụng `styles` rồi đúng không nào ^^

Và chính vì điểm khác nhau này, điều mình muốn lưu ý ở đây là trong một vài trường hợp, `Render tree` có thể sẽ `bớt cồng kềnh` hơn `DOM tree` một chút.

Xét ví dụ cho dễ hình dung nhé, giả sử mình có một thẻ `<h1>` chẳng hạn. Theo giải thích phía trên, `node h1` sẽ tồn tại trong `DOM tree`. Trong CSS mình có style cho nó là `display: none`, như vậy, khi trong `Render tree` sẽ không còn node h1 này nữa. 

Hmm... đây cũng là một điểm-khác-nhau cơ bản để phân biệt giữa cách mà `display: none` vs. `visibility:hidden`/`opacity: 0` được áp dụng đối với một element.

Điều này cũng tương tự với các `invisible elements`, như `<head> tag` hay bất kì  `<meta> tag`,  `<title> tag` trong đó.

## Repaint & Reflow

Quá trình `rendering` ban đầu là như thế, vậy thì nếu có một số thay đổi về `input information` có thể dẫn tới một trong hay quá trình (hoặc cả 2) là `Repaint` và `Reflow`.

*Chúng ta cùng tìm hiểu chúng là cái gì nhé ^^*

### Reflow
> Parts of the `render tree` (or the whole tree) are revalidated.
>
> The node dimensions recalculated.

<br/>

Quá trình một phần của `render tree` hay một số `node` được tính toán lại kích thước được gọi là **`reflow`** hoặc **`relayout`** hay **`layouting`**.

`Reflow` (hay `relayout/layouting`) là tên gọi của tập hợp nhiều tiến trình mà `browser` tính toán lại kích thước và bố trí lại vị trí của các `elements` trên `web page`.

Tuyệt vời đúng ko, trình duyệt lo hết! Song, nhược điểm của quá trình này là nó **chạy đồng bộ**, tức là `reflow` mà chưa chạy xong thì thằng đằng sau cứ chờ đấy đã. Điều này có nghĩa là, nếu có quá nhiều tiến trình `reflow` và `browser` xử lý không kịp thì `FPS` *(`Frames Per Second`)* sẽ giảm, thậm chí màn hình đơ luôn hoặc tồi tệ nhất là `crash tab`. 🤣🤣



### Repaint

> Parts of the screen are updated, either because of changes in `geometric properties of a node` or because of `stylistic change`.
 
<br/>

Quá trình một phần của `render tree` được cập nhật lại do bị thay đổi các tính chất hình học hoặc thay đổi `styles` *(như `color`, `background`, etc.)* được gọi là **`repaint`** hoặc **`redraw`**.

<br/>

<br/>

*`Repaint` & `Reflow` có ảnh hưởng khá nhiều tới trải nghiệm người dùng (`UX`) cũng như hiệu suất của ứng dụng. Chúng mình cùng điểm qua một số trường hợp phổ biến có thể gây ra `Reflow, Repain` để hạn chế nhé !*

### What triggers ?
Bất cứ điều gì làm thay đổi thông tin đầu vào *(`input information`)* được sử dụng để xây dựng `render tree` đều có thể gây ra hiện tượng `Reflow/Repaint` này: 
- Thêm, xóa, cập nhật một `DOM node`.
- Che giấu `DOM node` bằng `display: none` *(`reflow` và `repaint`)* hoặc `visibility: hidden` *(CHỈ `repaint`)*
- Di chuyển, làm `animations` với một `DOM node`.
- Thêm `stylesheet`, điều chỉnh các giá trị của `style properties`.
- Một số các `user actions` *(`resize`, `scrolling`, etc.)*

Điểm qua vài ví dụ nhanh nhé:
```js
var hstyle = document.body.style; // cache

hstyle.padding = "20px"; // reflow & repaint

hstyle.border = "10px solid red"; // reflow & repaint

hstyle.color = "blue"; // ONLY repaint

hstyle.backgroundColor = "#fad"; // repaint

bstyle.fontSize = "2em"; // reflow & repaint

// new DOM element - reflow & repaint
document.body.appendChild(document.createTextNode('Hi DevNotes !'));
```

### How to minimize ?
Một số cách để giảm các `negative effects` từ `reflow/repaint` trong `UX` là giúp nó diễn ra nhanh hơn, các tính toán không quá phức tạp hay không cần quá nhiều thông tin. Cùng nhau liệt kê xem chúng là gì nhé:

- **Batching**: Kĩ thuật này có thể hiểu đơn giản là nhóm các câu lệnh đọc ghi `DOM` vào sát nhau, tránh việc đọc ghi `DOM` rời rạc, gây nên tình trạng `reflow` liên tục.
-  **Reduce complexity of your selectors**: Việc giảm bớt độ phức tạp khi gọi `selectors` sẽ giảm thiểu được thời gian ghép cặp và xây dựng lại `style structure`.
- **DOM Depth**:  Việc update một `DOM node` sẽ kéo theo `update` tất cả các `DOM node con`, đồng nghĩa việc việc tất cả các `DOM` bị `update` sẽ phải được tính toán lại. Nếu DOM của chúng ta quá sâu, đồng nghĩa với việc việc tính toán sẽ trở nên phức tạp hơn.
- ...

Trên đây mình chỉ liệt kê ra một số gợi ý để giảm thiểu `reflow/repaint`. Để có nhiều giải pháp hay ho hơn, bạn có thể xem thêm trên [Developer Google](https://developers.google.com/web/fundamentals/performance/rendering/reduce-the-scope-and-complexity-of-style-calculations) hoặc trong bài viết [Hạn chế reflow trên trình duyệt](https://viblo.asia/p/han-che-reflow-tren-trinh-duyet-gDVK2JPjKLj#_3-han-che-bang-cach-nao-2)   với các ví dụ cụ thể nhé ^^

## Conclusion

Vậy là chúng ta đã cùng nhau tìm hiểu cơ bản về quá trình `rendering` cũng như `repaint/ relayout` trên trình duyệt rồi ^^.  Cảm ơn bạn vì đã dành thời gian đọc bài viết này. Ủng hộ mình **`01 upvote`** nếu bài viết mang lại giá trị nhé.
Chúc bạn cuối tuần vui vẻ ^^

***References:** [Phpied](https://www.phpied.com/rendering-repaint-reflowrelayout-restyle/), [Mr. ThinhDora](https://thinhdora.me/search/query:t%E1%BB%91i%20%C6%B0u%20browser%20rendering), [ITNext](https://itnext.io/how-the-browser-renders-a-web-page-dom-cssom-and-rendering-df10531c9969).*