package com.example.first.model;

import lombok.Data;

@Data
public class PagingModel {
    private String pageIndex;
    private String pageSize;
    private String sortDir;
    private String sortName;
}
