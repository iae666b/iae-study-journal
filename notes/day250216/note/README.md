## res
![img.png](img.png)

## 会议聊天中的文本

```text
.wrapper {
  margin: 2rem;
  background: #fff;
  box-shadow:
    rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px,
  ;
  margin-bottom: 2rem;
  border-radius: 1rem;
  overflow: hidden;
}

-- -- --

<form>
    <h3>创建博客</h3>
    <div>
        <label for="title">标题</label>
        <input type="text" name="title" id="title" />
    </div>
    <div>
        <label for="content">内容</label>
        <textarea name="content" id="content" rows="7"></textarea>
    </div>
    <div>
        <button>创建</button>
    </div>
</form>

-- -- --

h3 {
        margin-bottom: 1rem;
    }
div {
    margin-bottom: 1rem;
    label {
        font-weight: 300;
    }
    input,
    textarea {
        max-width: 100%;
        min-width: 100%;
        width: 100%;
        border: 1px solid #333;
        padding: 5px;
        border-radius: 5px;
        &:focus {
            outline: 2px solid #3b82f6;
            border: none;
        }
    }
    button {
        background: #3b82f6;
        color: #fff;
        width: 100%;
        padding: 5px;
        border-radius: 5px;
        &:hover {
            background: #2563eb;
        }
        &:disabled {
            background: #eee;
            cursor: not-allowed
        }
    }
}

-- -- --

isFormInvalid
```
