
## Version Control System (VCS)

**Khái niệm**

VCS: Hệ thống quản lý các phiên bản

* Local: Lưu ở máy cá nhân

* Centralized: Lưu ở một máy chủ tập trung

* Distributed: Lưu ở nhiều máy khác nhau

Các công cụ VCS phổ biến: CVS,SVN,Git (được sử dụng rộng rãi), Mercurial, Bazaar

## Git

### Git vs GitHub
### Git - three states
_Working Directory: File mới hoặc file có thay đổi_

_Staging Area: File chuẩn bị commit_

_Repository: Các commit (phiên bản) đã lưu_

### Git key takeaways

* Khởi tạo 
    * `git init`

* Cấu hình 1 repo
    - `git config user.name "name"`
    - `git config user.email "email@example.com"`

* Toàn cục
    - `git config --global user.name "name"`
    - `git config --global user.email "email@example.com"`

* Thêm file vào staging
    - `git add <tên_file>`
    - `git add .`  Thêm tất cả

* Xem trạng thái file
    - `git status`
    * File màu xanh: vùng staging
    * File màu đỏ: vùng working directory

* Commit
    - `git commit -m "message"`

* Xem lịch sử commit
    - `git log`

* commit (Convention)

    * Format: <type>: <short_description>

    * Các loại type:

        * chore: Sửa nhỏ, chính tả, xóa file

        * feat: Thêm tính năng mới

        * fix: Sửa lỗi

    Ví dụ:

    _chore: remove unused file_

    _feat: add login test case_

    _fix: fix assertion for user profile_

## JavaScript Basic

* Comment
    * // Comment một dòng

    * /*
        Comment nhiều dòng

        Dòng 2*/

* Biến và hằng
    * Khai báo biến (có thể thay đổi)
    - `let name = "Better Bytes Academy";`
    - `var oldName = "Cách cũ";` // Không nên dùng

    * Khai báo hằng (không thể thay đổi)
    - `const slogan = "Học Kỳ - Hiểu Bản Chất - Mentor Tận Tình";`
* Quy tắc đặt tên biến
    * Bắt đầu bằng chữ cái, _ hoặc $

    * Không chứa dấu cách

    * Không trùng với từ khóa

    * Nên dùng const mặc định, chỉ dùng let khi cần thay đổi giá trị

* Data types
    * primitive types
        * Number: const age = 25;

        * String: const name = "John";

        * Boolean: const isActive = true;

        * Undefined: let x; (chưa gán giá trị)

        * Null: let y = null; (giá trị rỗng)

        * Symbol, BigInt
    * reference types
        * Object

* Toán tử so sánh (comparison operators)
    * So sánh bằng: == (so giá trị, chuyển đổi kiểu), === (so giá trị và kiểu - nên dùng)

    * So sánh không bằng: !=, !==

    * So sánh lớn/nhỏ: >, <, >=, <=

* Toán tử logix
    * AND: && (true nếu cả hai đều true)

    * OR: || (true nếu một trong hai true)

* Toán tử một ngôi
    - `let x = 5;`
    - `x++;` // Postfix: trả về trước, tăng sau
    - `++x;` // Prefix: tăng trước, trả về sau

* Toán tử toán học
    - +, -, *, /

* Câu điều kiện
* Vòng lặp