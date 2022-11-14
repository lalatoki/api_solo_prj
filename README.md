## APIの説明
- 秘書情報に関する操作のAPI
- 役員・秘書の関係情報を時系列に管理するAPIの一部
- 現在更新がある度に下流の諸システムにメール通知になっているので、
API化にすれば、みんなは楽になる

## エンドポイントの説明
- `GET /api/secs/`
  - 秘書全員の情報を取得
- `POST /api/secs/`
  - 秘書を新規追加
- `PUT /api/secs/:id`
  - 社員情報を更新（社員を秘書に指定\指定解除など）
- `DELETE /api/secs/:id`
  - 社員情報を削除

## 使用した技術
- express
- knex
- postgre

## チャレンジした内容と直面した問題・苦労した点
- DAO層を加えて汎用化しようとしたが、ややこしくなり、断念した。

## demo準備メモ
- CRUD
  - trancate table employee
  - run server `npm run dev`
  - run CRUD (POST/GET/UPDATE/DELETE) from endpoint by postman
  - run test `npm run test`
- migration & seeds
  - drop table employee
  - trancate table knex_migrations
  - run migration `npm run mgt`
  - run seed `npm run seed`
  - confirm migration / seed result


