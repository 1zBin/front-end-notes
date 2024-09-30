# 前端 非全量更新表单数据的函数封装

```javascript
import _ from "lodash";

/**
 * 简易版：比较两个对象返回被修改的数据
 * @param newData 新数据对象
 * @param oldData 旧数据对象
 * @returns 包含被修改数据的对象
 */

export const dataDifferent = (
  newData: Record<string, any>,
  oldData: Record<string, any>
): Record<string, any> => {
  const changedKeys = Object.keys(oldData).filter(
    (key) => oldData[key] !== newData[key]
  );

  const changedValues: Record<string, any> = {};

  changedKeys.forEach((key: string) => {
    changedValues[key] = newData[key];
  });
  changedValues["id"] = newData["id"];
  return changedValues;
};

/**
 * 深层递归版：比较两个对象返回被修改的数据
 * (对比多层对象数组是否发生改变)
 * @param newData 新数据对象
 * @param oldData 旧数据对象
 * @returns 包含被修改数据的对象
 */
export const complexDataDifferent = (
  newData: Record<string, any>,
  oldData: Record<string, any>
): Record<string, any> => {
  const differentData: Record<string, any> = {};

  for (const key in newData) {
    if (Object.prototype.hasOwnProperty.call(newData, key)) {
      if (_.isArray(newData[key]) && _.isArray(oldData[key])) {
        if (shouldCompareArray(newData[key], oldData[key])) {
          if (key.endsWith("Ids")) {
            // 键名包含"Ids"的不需要对比，直接返回
            differentData[key] = newData[key];
          } else {
            const newArray: any[] = [];

            for (let i = 0; i < newData[key].length; i++) {
              const newElement = newData[key][i];
              const oldElement = oldData[key][i];

              if (!_.isEqual(newElement, oldElement)) {
                newArray.push(newElement);
              }
            }

            if (newArray.length > 0) {
              differentData[key] = newArray;
            }
          }
        }
      } else {
        if (!_.isEqual(newData[key], oldData[key])) {
          differentData[key] = newData[key];
        }
      }
    }
  }

  differentData["id"] = newData["id"];
  return differentData;
};

// Helper function to determine if array should be compared based on conditions
function shouldCompareArray(newArray: any[], oldArray: any[]): boolean {
  return (
    newArray.length !== oldArray.length ||
    newArray.some((element, index) => !_.isEqual(element, oldArray[index]))
  );
}

```