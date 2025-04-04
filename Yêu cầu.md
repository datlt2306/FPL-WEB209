# Backend Node.js cho Model Sản Phẩm

## Yêu Cầu ( 4/4/2025)

1. **Backend**:

    - Sử dụng Node.js với framework Express.js.
    - Tạo model `Product` với các trường sau:
        - `id` (UUID, khóa chính)
        - `name` (chuỗi, bắt buộc)
        - `description` (chuỗi, không bắt buộc)
        - `price` (số, bắt buộc)
        - `stock` (số, bắt buộc)
        - `category` (chuỗi, không bắt buộc)
        - `createdAt` (ngày, tự động tạo)
        - `updatedAt` (ngày, tự động cập nhật)
    - Sử dụng cơ sở dữ liệu như MongoDB hoặc PostgreSQL.
    - Triển khai các API CRUD cho model `Product`.
    - Thêm xác thực và xử lý lỗi cho các endpoint API.

2. **Frontend**:

    - Sử dụng Refine.js để xây dựng trang quản trị cho việc quản lý sản phẩm.
    - Bao gồm các tính năng như danh sách sản phẩm, tạo mới, chỉnh sửa và xóa.
    - Sử dụng TailwindCSS để thiết kế giao diện trang quản trị.

3. **Cửa Hàng**:
    - Xây dựng giao diện cửa hàng sử dụng TailwindCSS để thiết kế.
    - Hiển thị sản phẩm với các thông tin như tên, giá và mô tả.
    - Triển khai chức năng tìm kiếm và lọc sản phẩm.

## Kết Quả Bàn Giao

-   Backend đầy đủ chức năng với tài liệu API.
-   Trang quản trị được xây dựng bằng Refine.js.
-   Giao diện cửa hàng được thiết kế bằng TailwindCSS.
-   Mã nguồn được lưu trữ trên hệ thống quản lý phiên bản như GitHub.
-   Hướng dẫn cài đặt và triển khai.
