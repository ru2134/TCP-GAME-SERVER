// 서버 초기화 작업
import { loadGameAssets } from "./assets.js";

const initServer = async ()=>{
    try {
        await loadGameAssets();
        //다음 작업
    } catch (error) {
        console.error(error);
        Process.exit(1); // 오류 발생 시 프로세스를 종료합니다. 
    }
};

export default initServer;