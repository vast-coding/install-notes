```jsx
      <input
        {...{ ...(field?.type ? { type: field.type } : []) }}
        label={field.label}
        name={field.name}
        type={field?.type}
      />
```

