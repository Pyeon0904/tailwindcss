import DarkModeToggle from "@/app/components/Toggle/DarkModeToggle";
import AppLayout from "@/app/components/layouts/AppLayout";

export default function DarkMode() {

  return (
    <>
      <AppLayout>
        <div
          className="bg-white dark:bg-gray-900 text-black dark:text-white min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Tailwind CSS 다크 모드</h1>
            <p className="mb-6">이 페이지는 다크 모드를 지원합니다.</p>
            <DarkModeToggle/>
            <div className="mt-6 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <p>이 박스는 다크 모드에서 배경이 어두운 색으로 변합니다.</p>
            </div>
          </div>
        </div>
      </AppLayout>
    </>
  );
}

{/*<div className='flex min-h-screen justify-center items-center'>*/
}
{/*  <div className="bg-white dark:bg-slate-800 text-slate-900 dark:text-white p-6 rounded-lg shadow-md max-w-lg">*/
}
{/*    <h3 className="text-lg font-bold">Writes Upside-Down</h3>*/
}
{/*    <p className="text-slate-600 dark:text-slate-400">*/
}
{/*      The Zero Gravity Pen can be used to write in any orientation, including*/
}
{/*      upside-down. It even works in outer space.*/
}
{/*    </p>*/
}
{/*  </div>*/
}
{/*</div>*/
}
{/*<div className="flex min-h-screen justify-center items-center bg-gray-100 dark:bg-slate-900 transition-colors">*/
}
{/*  <div className="bg-white dark:bg-slate-800 text-slate-900 dark:text-white p-6 rounded-lg shadow-md max-w-lg">*/
}
{/*    <h3 className="text-lg font-bold">Writes Upside-Down</h3>*/
}
{/*    <p className="text-slate-600 dark:text-slate-400">*/
}
{/*      The Zero Gravity Pen can be used to write in any orientation, including*/
}
{/*      upside-down. It even works in outer space.*/
}
{/*    </p>*/
}
{/*  </div>*/
}
{/*</div>*/
}