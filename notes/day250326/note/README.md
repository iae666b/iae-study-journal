## res
![img.png](img.png)

## 会议聊天中的文本

```text
business

-- -- --

drop table if exists `station`;
create table `station`
(
    `id`          bigint      not null comment 'id',
    `name`        varchar(20) not null comment '站名',
    `name_pinyin` varchar(50) not null comment '站名拼音',
    `name_py`     varchar(50) not null comment '站名拼音首字母',
    `created_at` datetime(3) null comment '创建时间',
    `updated_at` datetime(3) null comment '更新时间',
    primary key (`id`),
    unique key `name_unique` (`name`)
) comment ='车站';

-- -- --

drop table if exists `train`;
create table `train`
(
    `id`           bigint      not null comment 'id',
    `code`         varchar(20) not null comment '车次编号|searchable',
    `type`         char(1)     not null comment '车次类型|枚举[TrainType]',
    `start`        varchar(20) not null comment '始发站|searchable',
    `start_pinyin` varchar(50) not null comment '始发站拼音|searchable',
    `start_time`   time        not null comment '出发时间',
    `end`          varchar(20) not null comment '终点站|searchable',
    `end_pinyin`   varchar(50) not null comment '终点站拼音|searchable',
    `end_time`     time        not null comment '到站时间',
    `created_at` datetime(3) null comment '创建时间',
    `updated_at` datetime(3) null comment '更新时间',
    primary key (`id`),
    unique key `code_unique` (`code`)
) comment='车次';
```