## compilar e instalar el kernel de Linux

### 1. Instalacion de Dependencias
##### 
1. $ sudo apt install build-essential libncurses-dev bison flex libssl-dev libelf-dev fakeroot dwarves

2. $ wget https://cdn.kernel.org/pub/linux/kernel/v6.x/linux-6.6.44.tar.xz

3. $ tar -xf linux-6.6.44.tar.xz

### 2. Modificaciones al Kernel
1. nano include/linux/uts.h: Se debe ubicar la linea UTS_SYSNAME "Linux" y modificar por Usac Linux, luego control 0 y enter.
2. nano init/main.c,  Dentro de la función start_kernel(), añade tu mensaje: printk(KERN_INFO "Bienvenido a USAC Linux - Nombre Julio Vasquez, Carnet 200915080\n");

### 3. Configuracion del Kernel
1.  cd linux-6.6.46 (ubicar en esta carpeta)
2. make localmodconfig (realizar configuracion)
**----Reeliminar llaves privadas----**
3.  scripts/config --disable SYSTEM_TRUSTED_KEYS
4.  scripts/config --disable SYSTEM_REVOCATION_KEYS
5.  scripts/config --set-str CONFIG_SYSTEM_TRUSTED_KEYS ""
6.  scripts/config --set-str CONFIG_SYSTEM_REVOCATION_KEYS ""

### 4. Compilacion de Kernel
1. $ fakeroot make -j4 **(compilacion utilizando cuatro nucleos)**
2. $ echo$?  **0 exitos otro valor error**
3. $ sudo$ make modules_install
4. $ sudo$ make install
5. $ sudo$ update-grub **--actualiza grub de arranque**
6. $ sudo$ reeboot **--reiniciar**
7. uname -s  **--Verificar nombre**

### 5. Crear las funciones de las llamadas al sistema


kernel/sys.c
****
SYSCALL_DEFINE0(get_time) {
    struct timespec64 ts;
    ktime_get_real_ts64(&ts);
    return ts.tv_sec;
}
****
****
SYSCALL_DEFINE0(tiempo_actividad) {
    struct timespec ts;
    get_monotonic_boottime(&ts);
    return ts.tv_sec;
}

****

****
SYSCALL_DEFINE2(ultimos_logs, char __user *, buffer, size_t, size) {
    // Código para recuperar los últimos 5 mensajes del log del kernel
    struct printk_log log;
    int i;
    for (i = 0; i < 5; i++) {
        printk_get_last_log(&log); // función ficticia para ilustrar
        copy_to_user(buffer + i * LOG_SIZE, log.msg, LOG_SIZE);
    }
    return 0;
}

****

arch/x86/entry/syscalls/syscall_64.tbl agregar:
1. 548    common    get_time            sys_get_time
2. 549    common    tiempo_actividad    sys_tiempo_actividad
3. 550    common    ultimos_logs        sys_ultimos_logs

include/linux/syscalls.h:
1. asmlinkage long sys_get_time(void);
2. asmlinkage long sys_tiempo_actividad(void);
3. asmlinkage long sys_ultimos_logs(char __user *buffer, size_t size);

### Recompilacion del Kerne

1. make j$(nproc)
2. sudo make modules_install
3. sudo make install

### Reinicio

1. sudo update-grub
2. sudo reboot

## Archivo de prueba ()



### 6. Programa de Pruebas para llamadas al sistema

1. Crea una carpeta pruebas_syscalls
2. se crea archivo pruebas_syscalls.c
3. Se agrega metod main para la llamada
#include <stdio.h>
#include <sys/syscall.h>
#include <unistd.h>

int main() {
    long epoch_time = syscall(548); // Número de la syscall para get_time
    printf("get  time: %ld segundos \n", epoch_time);
    return 0;
}