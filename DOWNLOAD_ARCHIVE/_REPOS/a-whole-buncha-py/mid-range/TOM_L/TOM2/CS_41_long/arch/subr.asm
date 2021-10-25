
mov ax, 10
mov bx, 20
call add_bx_to_ax
mov bx, 123
hlt

add_bx_to_ax:
    add ax, bx
    ret